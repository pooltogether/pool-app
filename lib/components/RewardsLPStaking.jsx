import React, { useState } from 'react'
import classnames from 'classnames'
import TokenFaucetAbi from '@pooltogether/pooltogether-contracts/abis/TokenFaucet'
import isEmpty from 'lodash.isempty'
import { ethers } from 'ethers'
import { Trans, useTranslation } from 'react-i18next'
import { amountMultByUsd, calculateAPR, calculateLPTokenPrice } from '@pooltogether/utilities'
import { useOnboard, useUsersAddress } from '@pooltogether/hooks'

import { formatUnits } from 'ethers/lib/utils'

import { TOKEN_IMAGES_BY_SYMBOL } from 'lib/constants/tokenImages'
import { CONTRACT_ADDRESSES } from 'lib/constants'
import { ContentOrSpinner } from 'lib/components/ContentOrSpinner'
import { PoolNumber } from 'lib/components/PoolNumber'
import {
  RewardsTable,
  RewardsTableRow,
  RewardsTableCell,
  RewardsTableAprDisplay
} from 'lib/components/RewardsTable'
import { RewardsActionModal } from 'lib/components/RewardsActionModal'
import { ThemedClipSpinner } from 'lib/components/loaders/ThemedClipSpinner'
import { Tooltip } from 'lib/components/Tooltip'
import { Erc20Image } from 'lib/components/Erc20Image'
import { APP_ENVIRONMENT, useAppEnv } from 'lib/hooks/useAppEnv'
import { useSendTransaction } from 'lib/hooks/useSendTransaction'
import { useTransaction } from 'lib/hooks/useTransaction'
import { LinkIcon } from 'lib/components/BlockExplorerLink'
import {
  DEXES,
  useStakingPoolChainData,
  useStakingPools,
  useUserLPChainData
} from 'lib/hooks/useStakingPools'
import { numberWithCommas } from 'lib/utils/numberWithCommas'
import { getNetworkNiceNameByChainId, NETWORK } from 'lib/utils/networks'
import { useTokenBalances } from 'lib/hooks/useTokenBalances'
import { useTokenPrices } from 'lib/hooks/useTokenPrices'
import { toScaledUsdBigNumber } from 'lib/utils/poolDataUtils'

const UNISWAP_V2_PAIR_URL = 'https://app.uniswap.org/#/add/v2/ETH/'
const SUSHISWAP_V2_PAIR_URL = 'https://app.sushi.com/#/add/ETH/'

const bn = ethers.BigNumber.from

export const RewardsLPStaking = () => {
  const { t } = useTranslation()

  const stakingPools = useStakingPools()
  const { network: walletChainId } = useOnboard()

  const { appEnv } = useAppEnv()
  const chainId = appEnv === APP_ENVIRONMENT.mainnets ? NETWORK.mainnet : NETWORK.rinkeby
  const poolGovTokenAddress = CONTRACT_ADDRESSES?.[chainId]?.GovernanceToken

  const walletOnWrongNetwork = walletChainId !== chainId

  return (
    <>
      <h5 id='rewards-staking-pools' className='font-normal text-accent-2 my-2 sm:my-4'>
        {t('lpStakingRewards')}
      </h5>
      <div className='bg-card rounded-lg border border-secondary px-4 sm:px-8 py-4'>
        <div className='flex items-baseline sm:items-center flex-col sm:flex-row'>
          <div className='pool-gradient-1 px-2 mr-2 mb-2 sm:mb-0 rounded-lg inline-block capitalize text-xxs text-white'>
            {t('tips')}
          </div>
          <h6 className='inline-block'>{t('earnStakingRewardsTipDescription')}</h6>
        </div>

        <ol className='list-decimal block mt-2 pl-4 sm:px-8 text-xs text-accent-1'>
          <li>
            <Trans
              i18nKey='earnStakingRewardsTipOne'
              defaults='Provide liquidity for the POOL/ETH pair on <linkUni>UniSwap</linkUni> or <linkSushi>SushiSwap</linkSushi>'
              components={{
                linkUni: (
                  <a
                    target='_blank'
                    className='text-accent-1 underline'
                    href={`${UNISWAP_V2_PAIR_URL}${poolGovTokenAddress}`}
                  />
                ),
                linkSushi: (
                  <a
                    target='_blank'
                    className='text-accent-1 underline'
                    href={`${SUSHISWAP_V2_PAIR_URL}${poolGovTokenAddress}`}
                  />
                )
              }}
            />
          </li>
          <li>{t('earnStakingRewardsTipTwo')}</li>
          <li>{t('earnStakingRewardsTipThree')}</li>
        </ol>
      </div>

      <RewardsTable>
        {stakingPools.map((stakingPool) => {
          console.log(stakingPool)
          return null
        })}
      </RewardsTable>
    </>
  )
}

const StakingPoolRow = (props) => {
  const { t } = useTranslation()

  const { stakingPool } = props

  const usersAddress = useUsersAddress()
  const {
    data: stakingPoolChainData,
    isFetched: stakingPoolChainDataIsFetched,
    refetch: stakingPoolChainDataRefetch,
    error: stakingPoolChainDataError
  } = useStakingPoolChainData(stakingPool)
  const {
    data: userLPChainData,
    isFetched: userLPChainDataIsFetched,
    refetch: userLPChainDataRefetch,
    error: userLPChainDataError
  } = useUserLPChainData(stakingPool, stakingPoolChainData, usersAddress)

  const refetch = () => {
    stakingPoolChainDataRefetch()
    userLPChainDataRefetch()
  }

  let remainingColumnsContents, stakingAprJsx
  if (!stakingPoolChainDataIsFetched) {
    remainingColumnsContents = <ThemedClipSpinner size={16} />
  } else if (stakingPoolChainDataError || userLPChainDataError) {
    console.error(stakingPoolChainDataError)
    console.error(userLPChainDataError)
    remainingColumnsContents = <p className='text-xxs'>{t('errorFetchingDataPleaseTryAgain')}</p>
  } else if (stakingPoolChainDataIsFetched) {
    const { tokenFaucetData, underlyingTokenData, ticketsData } = stakingPoolChainData
    const { dripRatePerDayUnformatted } = tokenFaucetData
    const { tokens } = stakingPool
    const { underlyingToken, tokenFaucetDripToken } = tokens

    stakingAprJsx = (
      <StakingAPR
        {...props}
        underlyingToken={underlyingToken}
        underlyingTokenData={underlyingTokenData}
        tokenFaucetDripToken={tokenFaucetDripToken}
        dripRatePerDayUnformatted={dripRatePerDayUnformatted}
        tickets={ticketsData}
      />
    )

    remainingColumnsContents = (
      <StakingPoolRowMainContents
        {...props}
        stakingPool={stakingPool}
        stakingPoolChainData={stakingPoolChainData}
        userLPChainData={userLPChainData}
        userLPChainDataIsFetched={userLPChainDataIsFetched}
        usersAddress={usersAddress}
        refetch={refetch}
      />
    )
  }

  return (
    <RewardsTableRow
      uniswap
      gradientBorder
      columnOneImage={<ColumnOneImage stakingPool={stakingPool} />}
      columnOneContents={<ColumnOneContents stakingPool={stakingPool} />}
      columnTwoContents={stakingAprJsx}
      remainingColumnsContents={remainingColumnsContents}
    />
  )
}

const ColumnOneImage = (props) => {
  const { stakingPool } = props
  const { tokens } = stakingPool
  console.log(stakingPool)
  const { underlyingToken } = tokens
  const { token1, token2 } = underlyingToken

  return <LPTokensLogo className='' token1={token1} token2={token2} />
}

const ColumnOneContents = (props) => {
  const { t } = useTranslation()
  const { stakingPool } = props
  const { tokens } = stakingPool
  const { underlyingToken, tokenFaucetDripToken } = tokens
  const { pair: tokenPair, dex } = underlyingToken

  const baseSwapUrl = dex === DEXES.UniSwap ? UNISWAP_V2_PAIR_URL : SUSHISWAP_V2_PAIR_URL

  return (
    <div className='flex flex-col justify-center leading-none'>
      <div className='text-sm font-bold mt-3 sm:mt-0'>{tokenPair}</div>
      <div className='text-xs mt-1 mb-2'>{dex}</div>
      <a
        href={`${baseSwapUrl}${tokenFaucetDripToken.address}`}
        target='_blank'
        rel='noreferrer noopener'
        className='mx-auto sm:mx-0 underline flex items-center text-xxs font-normal text-accent-1 hover:text-accent-2 trans trans-fast opacity-60 hover:opacity-100'
      >
        {t('getLpToken')} <LinkIcon className='h-4 w-4' />
      </a>
    </div>
  )
}

const StakingPoolRowMainContents = (props) => {
  const { appEnv } = useAppEnv()
  const chainId = appEnv === APP_ENVIRONMENT.mainnets ? NETWORK.mainnet : NETWORK.rinkeby

  return (
    <>
      <ClaimTokens {...props} chainId={chainId} />
      <ManageStakedAmount {...props} chainId={chainId} />
    </>
  )
}

const LPTokensLogo = (props) => {
  const widthClass = props.widthClass ?? 'w-16'

  return (
    <div className={classnames('h-8 relative', widthClass, props.className)}>
      <TokenIcon
        token={props.token1}
        className={classnames('absolute w-8 h-8')}
        style={{ zIndex: 2 }}
      />
      <TokenIcon
        token={props.token2}
        className={classnames('absolute w-8 h-8')}
        style={{ left: 20, top: 0 }}
      />
    </div>
  )
}

const TokenIcon = (props) => {
  const { style, className, token } = props

  if (token.symbol === 'POOL') {
    return (
      <img
        src={TOKEN_IMAGES_BY_SYMBOL.pool}
        className={classnames('rounded-full', className)}
        style={style}
      />
    )
  } else if (token.symbol === 'ETH') {
    return (
      <img
        src={TOKEN_IMAGES_BY_SYMBOL.eth}
        className={classnames('rounded-full', className)}
        style={style}
      />
    )
  }
  return <Erc20Image {...token} marginClasses='mr-0 sm:mr-3' className={className} />
}

const ClaimTokens = (props) => {
  const { t } = useTranslation()

  const { userLPChainData, userLPChainDataIsFetched, refetch, chainId, stakingPool, usersAddress } =
    props
  const { userData } = userLPChainData || {}

  let claimableBalance = '0.00'
  let claimableBalanceUnformatted = bn(0)
  if (!isEmpty(userData)) {
    claimableBalance = userData.claimableBalance
    claimableBalanceUnformatted = userData.claimableBalanceUnformatted
  }

  const { tokens, tokenListener } = stakingPool
  const { underlyingToken, tokenFaucetDripToken } = tokens
  const token1 = underlyingToken.token1

  return (
    <>
      <RewardsTableCell
        label={t('rewards')}
        topContentJsx={
          <ContentOrSpinner isLoading={usersAddress && !userLPChainDataIsFetched}>
            <PoolNumber>{numberWithCommas(claimableBalance)}</PoolNumber>
          </ContentOrSpinner>
        }
        centerContentJsx={
          <>
            <TokenIcon token={tokenFaucetDripToken} className='mr-2 rounded-full w-4 h-4' />
            <span className='text-xxs uppercase'>{token1.symbol}</span>
          </>
        }
        bottomContentJsx={
          <TransactionButton
            {...props}
            disabled={claimableBalanceUnformatted.isZero()}
            chainId={chainId}
            className='capitalize text-accent-1 hover:text-green'
            name={t('claimPool')}
            abi={TokenFaucetAbi}
            contractAddress={tokenListener.address}
            method={'claim'}
            params={[usersAddress]}
            refetch={refetch}
          >
            {t('claim')}
          </TransactionButton>
        }
      />
    </>
  )
}

const ManageStakedAmount = (props) => {
  const { t } = useTranslation()
  const {
    refetch,
    chainId,
    stakingPool,
    stakingPoolChainData,
    userLPChainDataIsFetched,
    userLPChainData,
    usersAddress
  } = props

  const { userData } = userLPChainData || {}

  let allowance
  let lpBalance = '0.00'
  let ticketBalance = '0.00'
  if (!isEmpty(userData)) {
    ticketBalance = userData.tickets.balance

    lpBalance = userData.underlyingToken.balance
    allowance = userData.underlyingToken.allowance
  }

  const [depositModalIsOpen, setDepositModalIsOpen] = useState(false)
  const [withdrawModalIsOpen, setWithdrawModalIsOpen] = useState(false)

  const { tokens } = stakingPool
  const { underlyingToken } = tokens

  return (
    <>
      <RewardsTableCell
        label={t('wallet')}
        topContentJsx={
          <ContentOrSpinner isLoading={usersAddress && !userLPChainDataIsFetched}>
            <PoolNumber>{numberWithCommas(ticketBalance)}</PoolNumber>
          </ContentOrSpinner>
        }
        centerContentJsx={<span className='text-xxs uppercase'>{underlyingToken.symbol}</span>}
        bottomContentJsx={
          <WithdrawTriggers {...props} openWithdrawModal={() => setWithdrawModalIsOpen(true)} />
        }
      />

      <div className='hidden sm:flex flex-col items-center w-10 lg:w-20'>
        <div className='border-default h-20 opacity-20' style={{ borderRightWidth: 1 }}>
          &nbsp;
        </div>
      </div>

      <RewardsTableCell
        label={t('yourStake')}
        divTwoClassName='w-full sm:h-20 flex flex-col justify-between items-start leading-snug'
        topContentJsx={
          <ContentOrSpinner isLoading={usersAddress && !userLPChainDataIsFetched}>
            <PoolNumber>{numberWithCommas(lpBalance)}</PoolNumber>
          </ContentOrSpinner>
        }
        centerContentJsx={<span className='text-xxs uppercase'>{underlyingToken.symbol}</span>}
        bottomContentJsx={
          <DepositTriggers
            {...props}
            chainId={chainId}
            openDepositModal={() => setDepositModalIsOpen(true)}
            openWithdrawModal={() => setWithdrawModalIsOpen(true)}
            refetch={refetch}
          />
        }
      />

      {/* {!allowance.isZero() && (
      <div className='flex items-center lg:flex-row-reverse'>
          <div className='flex flex-col justify-start ml-8 lg:ml-0 lg:mr-12'>
            // <span className='text-xxs font-bold uppercase'>{t('deposited')}</span> 
          </div>
      </div>
        )} */}
      {/* 
      <span className='w-full sm:w-48 lg:w-64 flex flex-col-reverse sm:flex-row'>
        
      </span> */}

      <DepositModal
        {...props}
        isOpen={depositModalIsOpen}
        closeModal={() => setDepositModalIsOpen(false)}
        refetch={refetch}
        allowance={allowance}
      />
      <WithdrawModal
        {...props}
        isOpen={withdrawModalIsOpen}
        closeModal={() => setWithdrawModalIsOpen(false)}
        refetch={refetch}
      />
    </>
  )
}

const DepositTriggers = (props) => {
  const { t } = useTranslation()
  const { openDepositModal, usersAddress } = props

  return (
    <span className='w-full block sm:inline'>
      <Tooltip
        isEnabled={!usersAddress}
        id='deposit-lp-connect-wallet-tooltip'
        tip={t('connectAWalletToManageTicketsAndRewards')}
      >
        <button
          className='new-btn w-full capitalize text-xs sm:px-2 py-2 sm:py-0 mt-2'
          onClick={openDepositModal}
          disabled={!usersAddress}
        >
          {t('deposit')}
        </button>
      </Tooltip>
    </span>
  )
}

const WithdrawTriggers = (props) => {
  const { t } = useTranslation()
  const { openWithdrawModal, stakingPool, usersAddress, walletOnWrongNetwork, chainId } = props

  console.log(stakingPool)
  console.log(stakingPool.tokens)
  return (
    <Tooltip
      isEnabled={walletOnWrongNetwork}
      id={`lp-staking-withdraw-${stakingPool.tokens.underlyingToken.address}-wrong-network-tooltip`}
      tip={t('yourWalletIsOnTheWrongNetwork', {
        networkName: getNetworkNiceNameByChainId(chainId)
      })}
    >
      <button
        className='capitalize underline text-accent-1 hover:text-green'
        onClick={openWithdrawModal}
        disabled={!usersAddress}
      >
        {t('withdraw')}
      </button>
    </Tooltip>
  )
}

const TransactionButton = (props) => {
  const { t } = useTranslation()
  const {
    name,
    abi,
    contractAddress,
    method,
    params,
    refetch,
    className,
    chainId,
    walletOnWrongNetwork,
    stakingPool
  } = props

  const [txId, setTxId] = useState(0)
  const sendTx = useSendTransaction()
  const tx = useTransaction(txId)

  const txPending = (tx?.sent || tx?.inWallet) && !tx?.completed
  // const txCompleted = tx?.completed && !tx?.cancelled

  const disabled = walletOnWrongNetwork || props.disabled

  return (
    <Tooltip
      isEnabled={walletOnWrongNetwork}
      id={`lp-staking-${method}-${stakingPool.tokens.underlyingToken.address}-wrong-network-tooltip`}
      tip={t('yourWalletIsOnTheWrongNetwork', {
        networkName: getNetworkNiceNameByChainId(chainId)
      })}
    >
      <button
        type='button'
        onClick={async () => {
          const id = await sendTx(name, abi, contractAddress, method, params, refetch)
          setTxId(id)
        }}
        className={classnames('underline', className, {
          'text-flashy': txPending,
          'text-accent-1 hover:text-green': !txPending
        })}
        disabled={disabled}
      >
        {props.children}{' '}
        {txPending && (
          <span className='ml-1'>
            <ThemedClipSpinner size={12} />
          </span>
        )}
      </button>
    </Tooltip>
  )
}

const WithdrawModal = (props) => {
  const { t } = useTranslation()

  const { stakingPool, stakingPoolChainData, userLPChainData, usersAddress } = props
  const { ticketsData } = stakingPoolChainData
  const { userData } = userLPChainData || {}
  const { pool, tokens } = stakingPool
  const { ticket, underlyingToken } = tokens
  const { token1, token2 } = underlyingToken

  let userTickets
  if (userData) {
    userTickets = userData.tickets
  }

  const maxAmount = userTickets?.balance || 0
  const maxAmountUnformatted = userTickets?.balanceUnformatted || bn(0)

  const decimals = ticketsData.decimals
  const tickerUpcased = ticketsData.symbol?.toUpperCase()

  return (
    <RewardsActionModal
      {...props}
      tickerUpcased={tickerUpcased}
      underlyingToken={underlyingToken}
      action={t('withdraw')}
      maxAmount={maxAmount}
      maxAmountUnformatted={maxAmountUnformatted}
      pool={pool}
      method='withdrawInstantlyFrom'
      overMaxErrorMsg={t('pleaseEnterAmountLowerThanTicketBalance')}
      tokenImage={
        <LPTokensLogo widthClass='w-12' className='mb-2' token1={token1} token2={token2} />
      }
      getParams={(quantity) => [
        usersAddress,
        ethers.utils.parseUnits(quantity, decimals),
        ticket.address,
        ethers.constants.Zero
      ]}
    />
  )
}

const DepositModal = (props) => {
  const { t } = useTranslation()
  const { stakingPool, stakingPoolChainData, userLPChainData, usersAddress } = props
  const { pool, tokens } = stakingPool
  const { ticket, underlyingToken } = tokens
  const { token1, token2 } = underlyingToken
  const decimals = stakingPoolChainData?.underlyingTokenData.decimals

  const { userData } = userLPChainData || {}
  let usersUnderlyingTokenChainData
  if (userData) {
    usersUnderlyingTokenChainData = userData.underlyingToken
  }

  const maxAmount = usersUnderlyingTokenChainData?.balance || 0
  const maxAmountUnformatted = usersUnderlyingTokenChainData?.balanceUnformatted || bn(0)

  return (
    <RewardsActionModal
      {...props}
      underlyingToken={underlyingToken}
      action={t('deposit')}
      decimals={decimals}
      maxAmount={maxAmount}
      maxAmountUnformatted={maxAmountUnformatted}
      pool={pool}
      method='depositTo'
      overMaxErrorMsg={t('enterAmountLowerThanTokenBalance')}
      tokenImage={
        <LPTokensLogo widthClass='w-12' className='mb-2' token1={token1} token2={token2} />
      }
      getParams={(quantity) => [
        usersAddress,
        ethers.utils.parseUnits(quantity, decimals),
        ticket.address,
        ethers.constants.AddressZero
      ]}
    />
  )
}

// const ActionModal = (props) => {
//   const { t } = useTranslation()

//   const {
//     isOpen,
//     closeModal,
//     action,
//     maxAmount,
//     maxAmountUnformatted,
//     stakingPoolChainData,
//     method,
//     getParams,
//     refetch,
//     chainId,
//     stakingPool
//   } = props

//   const { register, handleSubmit, setValue, errors, formState } = useForm({
//     mode: 'onChange',
//     reValidateMode: 'onChange'
//   })

//   const decimals = stakingPoolChainData.userData.underlyingToken.decimals

//   const { isValid } = formState

//   const { prizePool, underlyingToken } = stakingPool
//   const { token1, token2 } = underlyingToken

//   const { network: walletChainId } = useOnboard()
//   const [txId, setTxId] = useState(0)
//   const sendTx = useSendTransaction()
//   const tx = useTransaction(txId)
//   const txPending = (tx?.sent || tx?.inWallet) && !tx?.completed

//   const walletOnWrongNetwork = walletChainId !== chainId

//   const onSubmit = async (formData) => {
//     const id = await sendTx(
//       `${action} ${underlyingToken.symbol}`,
//       PrizePoolAbi,
//       prizePool.address,
//       method,
//       getParams(formData[action]),
//       refetch
//     )
//     setTxId(id)
//   }

//   return (
//     <Dialog
//       aria-label={`${underlyingToken.symbol} Pool ${action} Modal`}
//       isOpen={isOpen}
//       onDismiss={closeModal}
//     >
//       <div className='relative text-inverse p-4 bg-card h-full sm:h-auto rounded-none sm:rounded-xl sm:max-w-xl mx-auto flex flex-col'>
//         <div className='flex'>
//           <button
//             className='absolute r-4 t-4 close-button trans text-inverse hover:opacity-30'
//             onClick={closeModal}
//           >
//             <FeatherIcon icon='x' className='w-6 h-6' />
//           </button>
//         </div>

//         <div className='flex flex-row mb-4 mt-10 sm:mt-0'>
//           <LPTokensLogo small className='my-auto mr-2' token1={token1} token2={token2} />
//           <h5>
//             {action} {underlyingToken.symbol}
//           </h5>
//         </div>

//         <NetworkWarning walletOnWrongNetwork={walletOnWrongNetwork} chainId={chainId} />

//         {txPending && (
//           <div className='mx-auto text-center'>
//             <TxStatus gradient='basic' tx={tx} />
//           </div>
//         )}

//         {!txPending && (
//           <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
//             <div className='flex flex-row justify-between mt-4 mb-2'>
//               <label className='my-0 capitalize' htmlFor={`_${action}`}>
//                 {action}
//               </label>
//               <div>
//                 <span className='mr-1'>{t('balance')}:</span>
//                 <button
//                   type='button'
//                   onClick={() => setValue(action, maxAmount, { shouldValidate: true })}
//                 >
//                   {numberWithCommas(maxAmount)}
//                 </button>
//               </div>
//             </div>
//             <input
//               name={action}
//               className='bg-body p-2 w-full rounded-xl outline-none focus:outline-none active:outline-none'
//               autoFocus
//               ref={register({
//                 required: true,
//                 pattern: {
//                   value: /^\d*\.?\d*$/,
//                   message: t('pleaseEnterAPositiveNumber')
//                 },
//                 validate: {
//                   greaterThanBalance: (value) =>
//                     parseUnits(value, decimals).lte(maxAmountUnformatted) ||
//                     t('pleaseEnterANumberLessThanYourBalance')
//                 }
//               })}
//             />
//             <span className='h-6 w-full text-xxs text-orange'>
//               {errors?.[action]?.message || null}
//             </span>

//             <div className='flex flex-row w-full justify-between mt-6'>
//               <Button type='button' className='mr-2' width='w-full' onClick={closeModal}>
//                 {t('cancel')}
//               </Button>
//               <Button
//                 type='submit'
//                 border='green'
//                 text='primary'
//                 bg='green'
//                 hoverBorder='green'
//                 hoverText='primary'
//                 hoverBg='green'
//                 className='ml-2'
//                 width='w-full'
//                 disabled={!isValid || walletOnWrongNetwork}
//               >
//                 {t('confirm')}
//               </Button>
//             </div>
//           </form>
//         )}
//       </div>
//     </Dialog>
//   )
// }

const StakingAPR = (props) => {
  const {
    chainId,
    underlyingToken,
    underlyingTokenData,
    dripRatePerDayUnformatted,
    tokenFaucetDripToken,
    className,
    tickets
  } = props
  const { token1, token2 } = underlyingToken

  const currentBlock = '-1'

  const { data: lPTokenBalances, isFetched: tokenBalancesIsFetched } = useTokenBalances(
    chainId,
    underlyingToken.address,
    [token1.address, token2.address]
  )
  const { data: tokenPrices, isFetched: tokenPricesIsFetched } = useTokenPrices(chainId, {
    [currentBlock]: [token1.address, token2.address, tokenFaucetDripToken.address]
  })

  if (!tokenPricesIsFetched || !tokenBalancesIsFetched) {
    return (
      <span className={classnames('flex', className)}>
        <ThemedClipSpinner size={12} />
      </span>
    )
  }

  const lpTokenPrice = calculateLPTokenPrice(
    formatUnits(
      lPTokenBalances[token1.address].amountUnformatted,
      lPTokenBalances[token1.address].decimals
    ),
    formatUnits(
      lPTokenBalances[token2.address].amountUnformatted,
      lPTokenBalances[token2.address].decimals
    ),
    tokenPrices[currentBlock][token1.address.toLowerCase()]?.usd || '0',
    tokenPrices[currentBlock][token2.address.toLowerCase()]?.usd || '0',
    underlyingTokenData.totalSupply
  )

  const totalDailyValueUnformatted = amountMultByUsd(
    dripRatePerDayUnformatted,
    tokenPrices[currentBlock][tokenFaucetDripToken.address.toLowerCase()]?.usd || '0'
  )

  const totalDailyValue = formatUnits(totalDailyValueUnformatted, underlyingTokenData.decimals)
  const totalDailyValueScaled = toScaledUsdBigNumber(totalDailyValue)

  const totalValueUnformatted = amountMultByUsd(
    tickets.totalSupplyUnformatted,
    lpTokenPrice.toNumber()
  )

  const totalValue = formatUnits(totalValueUnformatted, underlyingTokenData.decimals)
  const totalValueScaled = toScaledUsdBigNumber(totalValue)

  const apr = calculateAPR(totalDailyValueScaled, totalValueScaled)

  return <RewardsTableAprDisplay apr={apr} />
}
