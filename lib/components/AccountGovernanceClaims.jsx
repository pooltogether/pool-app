import React, { useMemo, useState } from 'react'
import classnames from 'classnames'
import CountUp from 'react-countup'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useAtom } from 'jotai'
import { useTranslation } from 'react-i18next'
import { Button, Tooltip } from '@pooltogether/react-components'
import { usePreviousValue } from 'beautiful-react-hooks'
import { useOnboard, useUsersAddress } from '@pooltogether/hooks'

import TokenFaucetAbi from '@pooltogether/pooltogether-contracts/abis/TokenFaucet'
import TokenFaucetProxyFactoryAbi from '@pooltogether/pooltogether-contracts/abis/TokenFaucetProxyFactory'

import { CUSTOM_CONTRACT_ADDRESSES, DEFAULT_TOKEN_PRECISION, SECONDS_PER_DAY } from 'lib/constants'
import { isSelfAtom } from 'lib/components/AccountUI'
import { AddTokenToMetaMaskButton } from 'lib/components/AddTokenToMetaMaskButton'
import { IndexUILoader } from 'lib/components/loaders/IndexUILoader'
import { NetworkBadge } from 'lib/components/NetworkBadge'
import { PoolCurrencyIcon } from 'lib/components/PoolCurrencyIcon'
import { ThemedClipSpinner } from 'lib/components/loaders/ThemedClipSpinner'
import { useSendTransaction } from 'lib/hooks/useSendTransaction'
import { useClaimableTokenFromTokenFaucet } from 'lib/hooks/useClaimableTokenFromTokenFaucet'
import { useClaimableTokenFromTokenFaucets } from 'lib/hooks/useClaimableTokenFromTokenFaucets'
import { usePoolTokenData } from 'lib/hooks/usePoolTokenData'
import { useTransaction } from 'lib/hooks/useTransaction'
import { displayPercentage } from 'lib/utils/displayPercentage'
import { getMinPrecision, getPrecision, numberWithCommas } from 'lib/utils/numberWithCommas'
import { getNetworkNiceNameByChainId } from 'lib/utils/networks'
import { useGovernancePools } from 'lib/hooks/usePools'
import { useUserTicketsFormattedByPool } from 'lib/hooks/useUserTickets'
import { usePoolTokenChainId } from 'lib/hooks/chainId/usePoolTokenChainId'
import { Erc20Image } from 'lib/components/Erc20Image'
import { NETWORK } from 'lib/utils/networks'

export const hardcodedWMaticApr = (pool) => {
  const { dripRatePerSecond } = pool.tokenListener
  const totalDripPerDay = Number(dripRatePerSecond) * SECONDS_PER_DAY
  const totalDripDailyValue = totalDripPerDay * 1.8 // USD MATIC PRICE
  const totalSupply = Number(pool.tokens.ticket.totalSupply)
  return (totalDripDailyValue / totalSupply) * 365 * 100
}

export const AccountGovernanceClaims = (props) => {
  const { t } = useTranslation()

  const { data: pools, isFetched: poolIsFetched } = useGovernancePools()
  const usersAddress = useUsersAddress()
  const router = useRouter()
  const playerAddress = router?.query?.playerAddress
  const address = playerAddress || usersAddress

  // This currently is `refetchTotalClaimablePool`, assuming it's only mainnet but may need to be updated to include
  // refetching Polygon data claimable data (and renamed)
  const { refetch: refetchTotalClaimablePool } = useClaimableTokenFromTokenFaucets(
    NETWORK.mainnet,
    address
  )
  const { refetch: refetchPoolTokenData } = usePoolTokenData(address)
  const poolTokenChainId = usePoolTokenChainId()
  const { network: walletChainId } = useOnboard()

  const refetchAllPoolTokenData = () => {
    refetchTotalClaimablePool()
    refetchPoolTokenData()
  }

  if (!address || !poolIsFetched) {
    return (
      <div className='my-16'>
        <IndexUILoader />
      </div>
    )
  }

  return (
    <>
      <h5 id='governance-claims' className='font-normal text-accent-2 mt-16 mb-4'>
        {t('rewards')}
      </h5>
      <div className='relative xs:mt-3 bg-accent-grey-4 rounded-lg xs:mx-0 px-3 py-3 sm:px-10 sm:py-10'>
        <ClaimHeader
          chainId={NETWORK.mainnet}
          address={address}
          refetchAllPoolTokenData={refetchAllPoolTokenData}
        />
        {pools
          .filter((pool) => pool.chainId === NETWORK.mainnet)
          .filter((pool) => Boolean(pool.tokens.tokenFaucetDripToken))
          .sort(sortByDripAmount)
          .map((pool) => {
            return (
              <ClaimablePoolTokenItem
                address={address}
                refetchAllPoolTokenData={refetchAllPoolTokenData}
                key={pool.prizePool.address}
                pool={pool}
              />
            )
          })}
        <div className='mt-4 mb-20 text-center'>
          {walletChainId === poolTokenChainId && (
            <AddTokenToMetaMaskButton
              basic
              showPoolIcon
              textSize='xxs'
              tokenAddress={CUSTOM_CONTRACT_ADDRESSES[poolTokenChainId]?.GovernanceToken}
              tokenDecimals={DEFAULT_TOKEN_PRECISION}
              tokenSymbol='POOL'
            />
          )}
        </div>

        <ClaimHeader
          chainId={NETWORK.polygon}
          address={address}
          refetchAllPoolTokenData={refetchAllPoolTokenData}
        />
        {pools
          .filter((pool) => pool.chainId === NETWORK.polygon)
          .sort(sortByDripAmount)
          .map((pool) => {
            return (
              <ClaimablePoolTokenItem
                address={address}
                refetchAllPoolTokenData={refetchAllPoolTokenData}
                key={pool.prizePool.address}
                pool={pool}
              />
            )
          })}
      </div>
    </>
  )
}

const sortByDripAmount = (a, b) =>
  b.tokens.tokenFaucetDripToken.amountUnformatted.sub(
    a.tokens.tokenFaucetDripToken.amountUnformatted
  )

const ClaimHeader = (props) => {
  const { address, chainId } = props

  const { t } = useTranslation()
  const { refetchAllPoolTokenData } = props

  const poolTokenChainId = usePoolTokenChainId()
  const poolTokenAddress = CUSTOM_CONTRACT_ADDRESSES[poolTokenChainId].GovernanceToken.toLowerCase()

  // Hard-coded to 1 for mainnet as $POOL is only on mainnet
  const { data: claimableFromTokenFaucets } = useClaimableTokenFromTokenFaucets(
    NETWORK.mainnet,
    address
  )
  const totalClaimablePool =
    Number(claimableFromTokenFaucets?.totals?.[poolTokenAddress]?.totalClaimableAmount) || 0

  const [isSelf] = useAtom(isSelfAtom)

  return (
    <>
      <div className='flex justify-center mb-2'>
        <NetworkBadge chainId={chainId} textClasses='text-base' sizeClasses='w-6 h-6' />
      </div>

      <div className='flex justify-between flex-col sm:flex-row p-2 sm:p-0'>
        <div className='flex sm:flex-col justify-between sm:justify-start'>
          {chainId === NETWORK.mainnet && (
            <>
              <h6 className='flex items-center font-normal'>{t('claimablePool')}</h6>
              <h2
                className={classnames('leading-none text-2xl sm:text-3xl mt-0 xs:mt-2', {
                  'text-flashy': totalClaimablePool > 0
                })}
              >
                <ClaimableAmountCountUp amount={totalClaimablePool} />
              </h2>
            </>
          )}
        </div>

        <div className='flex flex-col-reverse sm:flex-col'>
          {isSelf && chainId === NETWORK.mainnet && (
            <ClaimAllButton
              {...props}
              chainId={NETWORK.mainnet}
              refetchAllPoolTokenData={refetchAllPoolTokenData}
              claimable={totalClaimablePool > 0}
            />
          )}

          {chainId === NETWORK.mainnet && (
            <a
              href='https://medium.com/p/23b09f36db48'
              className='sm:text-right text-accent-1 text-xxs mb-3 sm:mb-0'
            >
              {t('whatCanIDoWithPool')}
            </a>
          )}
        </div>
      </div>
    </>
  )
}

const ClaimablePoolTokenItem = (props) => {
  const { address, pool, refetchAllPoolTokenData } = props

  const [isSelf] = useAtom(isSelfAtom)
  const { t } = useTranslation()
  const { data: playerTickets } = useUserTicketsFormattedByPool(address)
  const tokenFaucetAddress = pool.tokenListener.address
  const { data: claimablePoolData, isFetched } = useClaimableTokenFromTokenFaucet(
    pool.chainId,
    tokenFaucetAddress,
    address
  )

  if (!isFetched) return null

  const dripRatePerSecond = pool.tokenListener.dripRatePerSecond || 0
  const dripToken = pool.tokens.tokenFaucetDripToken

  const underlyingToken = pool.tokens.underlyingToken
  const name = t('prizePoolTicker', { ticker: underlyingToken.symbol })

  const poolTicketData = playerTickets?.find((t) => t.poolAddress === pool.prizePool.address)
  const ticketData = poolTicketData?.ticket

  const ticketTotalSupply = pool.tokens.ticket.totalSupply
  const totalSupplyOfTickets = parseInt(ticketTotalSupply, 10)
  const usersBalance = ticketData?.amount || 0

  const ownershipPercentage = usersBalance / totalSupplyOfTickets

  const totalDripPerDay = dripRatePerSecond * SECONDS_PER_DAY
  const usersDripPerDay = totalDripPerDay * ownershipPercentage
  const usersDripPerDayFormatted = numberWithCommas(usersDripPerDay, {
    precision: getPrecision(usersDripPerDay)
  })
  const totalDripPerDayFormatted = numberWithCommas(totalDripPerDay, {
    precision: getPrecision(totalDripPerDay)
  })

  const isClaimable = !claimablePoolData?.claimableAmountUnformatted?.isZero()

  let apr = pool.tokenListener?.apr

  if (pool.prizePool.address === '0x887e17d791dcb44bfdda3023d26f7a04ca9c7ef4') {
    apr = hardcodedWMaticApr(pool)
  }

  return (
    <div className='border-t-2 border-body px-2 sm:px-0 pt-6 pb-2 flex flex-col sm:flex-row sm:justify-between mt-4 sm:items-center'>
      <div className='flex flex-row-reverse sm:flex-row justify-between sm:justify-start'>
        <Link href={`/pools/${pool.networkName}/${pool.symbol}`}>
          <a>
            <PoolCurrencyIcon
              lg
              symbol={underlyingToken.symbol}
              address={underlyingToken.address}
              className='sm:mr-4'
            />
          </a>
        </Link>
        <div className='xs:w-64 sm:w-96'>
          <div className='flex items-baseline mb-1'>
            <Link href={`/pools/${pool.networkName}/${pool.symbol}`}>
              <a>
                <h5 className='leading-none text-inverse'>{name}</h5>
              </a>
            </Link>{' '}
            <NetworkBadge className='ml-2' sizeClasses='h-4 w-4' chainId={pool.chainId} />
          </div>

          <div className='text-accent-1 text-xs mb-1 mt-2 sm:mt-1'>
            {t('poolNamesDripRate', { poolName: name })}
            <br />
            {totalDripPerDayFormatted}{' '}
            <Erc20Image
              address={dripToken.address}
              className='relative inline-block w-3 h-3 mx-1'
            />
            {dripToken.symbol} / <span className='lowercase'>{t('day')}</span>
            <br />
            {displayPercentage(apr)}% APR
          </div>
        </div>
      </div>

      <div
        className={classnames(`sm:text-right mt-6 sm:mt-0`, {
          'opacity-40': !isClaimable
        })}
      >
        <p className='text-inverse font-bold text-xs'>{t('availableToClaim')}</p>
        <h4 className={classnames('flex items-center sm:justify-end')}>
          <Erc20Image address={dripToken.address} className='inline-block w-6 h-6 mr-2' />
          <ClaimableAmountCountUp amount={Number(claimablePoolData?.claimableAmount)} />
        </h4>
        <div className='text-accent-1 text-xs flex items-center sm:justify-end mt-1 sm:mt-0 mb-2 sm:mb-0 opacity-80 trans hover:opacity-100'>
          {usersDripPerDayFormatted}{' '}
          <Erc20Image address={dripToken.address} className='inline-block w-4 h-4 mx-2' />
          {dripToken.symbol} /&nbsp;
          <span className='lowercase'>{t('day')}</span>
        </div>
        {isSelf && (
          <div className='sm:ml-auto'>
            <ClaimButton
              {...props}
              refetch={() => {
                refetchAllPoolTokenData()
              }}
              chainId={pool.chainId}
              name={name}
              dripToken={pool.tokens.tokenFaucetDripToken.symbol}
              tokenFaucetAddress={tokenFaucetAddress}
              isClaimable={isClaimable}
            />
          </div>
        )}
      </div>
    </div>
  )
}

const ClaimableAmountCountUp = (props) => {
  const { amount, ...countUpProps } = props
  const prevAmount = usePreviousValue(amount)

  return (
    <CountUp
      start={prevAmount}
      end={amount}
      decimals={getMinPrecision(amount, { additionalDigits: getPrecision(amount) || 2 })}
      separator=','
      {...countUpProps}
    />
  )
}

ClaimableAmountCountUp.defaultProps = {
  amount: 0
}

const ClaimButton = (props) => {
  const { address, dripToken, name, refetch, isClaimable, tokenFaucetAddress, chainId } = props

  const { network: walletChainId } = useOnboard()

  const { t } = useTranslation()
  const [txId, setTxId] = useState(0)
  const sendTx = useSendTransaction()
  const tx = useTransaction(txId)

  const txPending = (tx?.sent || tx?.inWallet) && !tx?.completed
  const txCompleted = tx?.completed

  const handleClaim = async (e) => {
    e.preventDefault()

    if (txPending) {
      return
    }

    const params = [address]

    const id = await sendTx(
      t('claimTickerFromPool', { ticker: dripToken, poolName: name }),
      TokenFaucetAbi,
      tokenFaucetAddress,
      'claim',
      params,
      refetch
    )
    setTxId(id)
  }

  let text = t('claim')
  if (txPending && !txCompleted) {
    if (tx.sent) {
      text = t('confirming')
    } else {
      text = t('claiming')
    }
  }

  const walletOnWrongNetwork = walletChainId !== chainId

  return (
    <Tooltip
      isEnabled={walletOnWrongNetwork}
      id={`account-gov-claims-wrong-network-tooltip`}
      className='ml-auto'
      tip={t('yourWalletIsOnTheWrongNetwork', {
        networkName: getNetworkNiceNameByChainId(chainId)
      })}
    >
      <button
        disabled={!isClaimable || walletOnWrongNetwork}
        className={classnames('underline trans trans-fast', {
          'text-flashy': txPending,
          'text-accent-1 hover:text-green': !txPending
        })}
        onClick={handleClaim}
        style={{
          opacity: 1
        }}
      >
        {txPending && (
          <span className='mr-2'>
            <ThemedClipSpinner size={12} />
          </span>
        )}
        {text}
      </button>
    </Tooltip>
  )
}

/**
 * Claims from all POOL token faucets
 * @param {*} props
 * @returns
 */
const ClaimAllButton = (props) => {
  const { t } = useTranslation()
  const { address, chainId, claimable, refetchAllPoolTokenData } = props

  const { network: walletChainId } = useOnboard()

  const { isFetched: isClaimablePoolDataFetched, data: claimablePoolFromTokenFaucets } =
    useClaimableTokenFromTokenFaucets(chainId, address)

  const tokenFaucetAddresses = useMemo(() => {
    if (claimablePoolFromTokenFaucets) {
      const addresses = []
      Object.keys(claimablePoolFromTokenFaucets).forEach((key) => {
        if (key === 'totals') return

        const claimablePoolData = claimablePoolFromTokenFaucets[key]
        const hasBalance = !claimablePoolData?.claimableAmountUnformatted.isZero()
        if (hasBalance) {
          addresses.push(key)
        }
      })

      return addresses
    }
  }, [claimablePoolFromTokenFaucets])

  const [txId, setTxId] = useState(0)
  const sendTx = useSendTransaction()
  const tx = useTransaction(txId)

  const txPending = (tx?.sent || tx?.inWallet) && !tx?.completed

  const handleClaim = async (e) => {
    e.preventDefault()

    const params = [address, tokenFaucetAddresses]

    const id = await sendTx(
      t('claimAll'),
      TokenFaucetProxyFactoryAbi,
      CUSTOM_CONTRACT_ADDRESSES[chainId].TokenFaucetProxyFactory,
      'claimAll',
      params,
      refetchAllPoolTokenData
    )
    setTxId(id)
  }
  let text = t('claimAll')
  if (txPending) {
    if (tx.sent) {
      text = t('confirming')
    } else {
      text = t('claiming')
    }
  }

  const walletOnWrongNetwork = walletChainId !== chainId

  return (
    <Tooltip
      isEnabled={walletOnWrongNetwork}
      id={`account-gov-claim-all-button-tooltip`}
      className='ml-auto'
      tip={t('yourWalletIsOnTheWrongNetwork', {
        networkName: getNetworkNiceNameByChainId(chainId)
      })}
    >
      <Button
        type='button'
        onClick={handleClaim}
        className='mb-4'
        disabled={!isClaimablePoolDataFetched || !claimable || txPending || walletOnWrongNetwork}
        padding='px-8 py-1'
        border='green'
        text='primary'
        bg='green'
        hoverBorder='green'
        hoverText='primary'
        hoverBg='green'
        textSize='xxs'
      >
        {txPending && (
          <span className='mr-2'>
            <ThemedClipSpinner />
          </span>
        )}
        {text}
      </Button>
    </Tooltip>
  )
}
