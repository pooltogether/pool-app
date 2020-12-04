import React, { useContext, useState } from 'react'
import Link from 'next/link'
import Cookies from 'js-cookie'
import { ethers } from 'ethers'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { useInterval } from 'beautiful-react-hooks'

import {
  COOKIE_OPTIONS,
  DEFAULT_TOKEN_PRECISION,
  SHOW_MANAGE_LINKS,
  WIZARD_REFERRER_HREF,
  WIZARD_REFERRER_AS_PATH
} from 'lib/constants'
import { Trans, useTranslation } from 'lib/../i18n'
import { AuthControllerContext } from 'lib/components/contextProviders/AuthControllerContextProvider'
import { PoolDataContext } from 'lib/components/contextProviders/PoolDataContextProvider'
import { Button } from 'lib/components/Button'
import { ButtonLink } from 'lib/components/ButtonLink'
import { CardGrid } from 'lib/components/CardGrid'
import { Chip } from 'lib/components/Chip'
import { Erc20AwardsTable } from 'lib/components/Erc20AwardsTable'
import { Erc721AwardsTable } from 'lib/components/Erc721AwardsTable'
import { LootBox } from 'lib/components/LootBox'
import { PoolShowLoader } from 'lib/components/PoolShowLoader'
import { PrizeFromInterestCard } from 'lib/components/PrizeFromInterestCard'
import { TicketsSoldGraph } from 'lib/components/TicketsSoldGraph'
import { LastWinnersListing } from 'lib/components/LastWinnersListing'
import { PageTitleAndBreadcrumbs } from 'lib/components/PageTitleAndBreadcrumbs'
import { Meta } from 'lib/components/Meta'
import { PoolCountUp } from 'lib/components/PoolCountUp'
import { PoolNumber } from 'lib/components/PoolNumber'
import { NewPrizeCountdown } from 'lib/components/NewPrizeCountdown'
import { RevokePoolAllowanceTxButton } from 'lib/components/RevokePoolAllowanceTxButton'
import { Tagline } from 'lib/components/Tagline'
import { addTokenToMetaMask } from 'lib/services/addTokenToMetaMask'
import { displayAmountInEther } from 'lib/utils/displayAmountInEther'
import { getSymbolForMetaMask } from 'lib/utils/getSymbolForMetaMask'
import { numberWithCommas } from 'lib/utils/numberWithCommas'

import CompoundFinanceIcon from 'assets/images/icon-compoundfinance.svg'
import DepositRewardsIcon from 'assets/images/icon-deposit-rewards.svg'
import ReferralRewardsIcon from 'assets/images/icon-referral-rewards.svg'
import PrizeStrategyIcon from 'assets/images/icon-prizestrategy@2x.png'
import TicketsIcon from 'assets/images/icon-ticket@2x.png'
import PlayersIcon from 'assets/images/players@2x.png'
import YieldSourceIcon from 'assets/images/icon-yieldsource@2x.png'
import TotalAwardedIcon from 'assets/images/icon-total@2x.png'
import PrizeIcon from 'assets/images/icon-prize@2x.png'

export const PoolShow = (
  props,
) => {
  const { t } = useTranslation()
  const router = useRouter()

  const { networkName, usersAddress, walletName } = useContext(AuthControllerContext)
  const { pool } = useContext(PoolDataContext)

  const symbol = pool?.symbol
  const decimals = pool?.underlyingCollateralDecimals
  
  const symbolForMetaMask = getSymbolForMetaMask(networkName, pool)

  const [cookieShowAward, setCookieShowAward] = useState(false)

  let error

  try {
    if (pool?.poolAddress) {
      ethers.utils.getAddress(pool.poolAddress)
    }
  } catch (e) {
    console.error(e)
    if (e.message.match('invalid address')) {
      error = 'Incorrectly formatted Ethereum address!'
    }
  }
  
  useInterval(() => {
    setCookieShowAward(Cookies.get(SHOW_MANAGE_LINKS))
  }, 1000)
  
  if (!pool) {
    return <PoolShowLoader />
  }


  const handleGetTicketsClick = (e) => {
    e.preventDefault()

    Cookies.set(
      WIZARD_REFERRER_HREF,
      '/pools/[symbol]',
      COOKIE_OPTIONS
    )
    Cookies.set(
      WIZARD_REFERRER_AS_PATH,
      `/pools/${pool?.symbol}`,
      COOKIE_OPTIONS
    )

    router.push(
      `/pools/[symbol]/deposit`,
      `/pools/${pool?.symbol}/deposit`,
      {
        shallow: true
      }
    )
  }

  const handleAddTokenToMetaMask = (e) => {
    e.preventDefault()
    addTokenToMetaMask(networkName, pool)
  }

  let prizeEstimateFormatted
  if (pool.prizeAmountUSD && pool.prizeAmountUSD.gt(0)) {
    prizeEstimateFormatted = ethers.utils.formatUnits(
      pool.prizeAmountUSD,
      decimals || DEFAULT_TOKEN_PRECISION
    )
  }

  return <>
    <Meta
      title={`${pool?.name} - ${t('pools')}`}
    />

    <motion.div
      initial='initial'
      animate='enter'
      exit='exit'
      variants={{
        exit: {
          scale: 0.9,
          y: 10,
          opacity: 0,
          transition: {
            duration: 0.5,
            staggerChildren: 0.1
          }
        },
        enter: {
          transition: {
            duration: 0.5,
            staggerChildren: 0.1
          }
        },
        initial: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.2
          }
        }
      }}
    >
      {error}
      
        <>
          <div
            className='flex flex-col xs:flex-row justify-between xs:items-center'
          >
            <div
              className='flex justify-between items-center sm:w-1/2'
            >
              <PageTitleAndBreadcrumbs
                title={pool?.name}
                pool={pool}
                breadcrumbs={[
                  {
                    href: '/',
                    as: '/',
                    name: t('pools'),
                  },
                  {
                    name: pool?.name,
                  }
                ]}
              />
            </div>

            <div
              className='flex xs:w-1/2 sm:w-full xs:justify-end items-start mt-4 xs:mt-0'
            >
              <Button
                width='w-full xs:w-9/12 sm:w-8/12 lg:w-6/12'
                textSize='lg'
                onClick={handleGetTicketsClick}
              >
                {t('getTickets')}
              </Button>
            </div>
          </div>

          <div
            className='bg-highlight-3 rounded-lg px-4 xs:px-4 sm:px-10 pt-4 pb-6 text-white my-8 sm:my-12 border-flashy mx-auto'
          >
            <div
              className='flex items-center justify-between'
            >
              <div
                className='w-1/2 sm:w-7/12'
              >
                <h2>
                  <Trans
                    i18nKey='prizeAmount'
                    defaults='Prize $<prize>{{amount}}</prize>'
                    components={{
                      prize: <PoolCountUp
                        fontSansRegular
                        decimals={2}
                        duration={6}
                      />
                    }}
                    values={{
                      amount: prizeEstimateFormatted,
                    }}
                  />
                </h2>
                <div
                  className='text-caption -mt-2 uppercase font-bold'
                >
                  <div className='mt-2'>
                    <Chip
                      color='highlight-6'
                      text={t(pool?.frequency?.toLowerCase())}
                    />
                  </div>
                </div>
              </div>

              <div
                className='flex flex-col items-end justify-center pt-2 w-6/12 sm:w-5/12'
              >
                <NewPrizeCountdown
                  pool={pool}
                  flashy={false}
                />
              </div>
            </div>
          </div>

          <PrizeFromInterestCard
            decimals={decimals}
            interestPrize={pool?.interestPrizeUSD}
          />

          {/* <LootBox
            pool={pool}
          /> */}

          <Erc20AwardsTable
            pool={pool}
            basePath={`/pools/${pool?.symbol}`}
            externalErc20Awards={pool?.externalErc20Awards}
          />
          
          <Erc721AwardsTable
            basePath={`/pools/${pool?.symbol}`}
            externalErc721Awards={pool?.externalErc721Awards}
          />

          <CardGrid
            cardGroupId='pool-rewards-cards'
            cards={[
              {
                icon: DepositRewardsIcon,
                title: t('depositRewards'),
                content: <>
                  <h3>
                    <Trans
                      i18nKey='amountTickets'
                      defaults='<number>{{amount}}</number> tickets'
                      components={{
                        number: <PoolNumber />,
                      }}
                      values={{
                        amount: numberWithCommas('1000', { precision: 0 }),
                      }}
                    />
                  </h3>
                  
                  <p>
                    {t('depositRewardsDescription')}
                    
                  </p>
                </>
              },
              {
                icon: ReferralRewardsIcon,
                title: t('referralRewards'),
                content: <>
                  <h3>
                    <Trans
                      i18nKey='amountTickets'
                      defaults='<number>{{amount}}</number> tickets'
                      components={{
                        number: <PoolNumber />,
                      }}
                      values={{
                        amount: numberWithCommas('1000', { precision: 0 }),
                      }}
                    />
                  </h3>

                  <p>
                    {t('referralRewardsDescription')}
                  </p>
                </>
              },
              
            ]}
          />

          <h6
            className='text-accent-1 mt-8 mb-0 sm:t-4 relative'
          >
            {t('prizePoolStats')}
          </h6>
          
          <CardGrid
            cardGroupId='pool-cards'
            cards={[
              {
                icon: PlayersIcon,
                title: t('players'),
                content: <>
                  <h3>
                    {numberWithCommas(pool?.playerCount, { precision: 0 })}
                  </h3>

                  <Link
                    href='/prizes/[symbol]/[prizeNumber]'
                    as={`/prizes/${pool?.symbol}/${pool?.currentPrizeId}`}
                  >
                    <a
                      className='inline-block font-bold trans'
                    >
                      {t('viewCurrentPlayers')}
                    </a>
                  </Link>
                </>
              },
              {
                icon: TicketsIcon,
                title: t('totalTickets'),
                content: <>
                  <TicketsSoldGraph
                    pool={pool}
                  />
                  
                  <h3
                    className='mt-2'
                  >
                    {displayAmountInEther(pool.ticketSupply, {
                      precision: 0,
                      decimals
                    })}
                  </h3>
                </>
              },
              {
                icon: YieldSourceIcon,
                title: t('yieldSource'),
                content: <>
                  <h6
                    className='flex items-center'
                  >
                    <img
                      src={CompoundFinanceIcon}
                      className='inline-block mr-2 w-6 h-6 sm:w-10 sm:h-10'
                      alt={`compound finance's logo`}
                    /> Compound Finance
                  </h6>
                </>
              },
              {
                icon: PrizeStrategyIcon,
                title: t('prizeStrategy'),
                content: <>
                  <h6>
                    {t('singleRandomWinnerStrategyDescription')}
                  </h6>
                </>
              },
              // {
              //   icon: TotalAwardedIcon,
              //   title: t('totalAwarded'),
              //   content: <>
              //     <h3>
              //       ${displayAmountInEther(
              //         pool.cumulativePrizeNet, {
              //           precision: 0,
              //           decimals
              //         })
              //       }
              //     </h3>
                  
              //     <Link
              //       href='/prizes/[symbol]'
              //       as={`/prizes/${pool?.symbol}`}
              //     >
              //       <a
              //         className='inline-block font-bold trans'
              //       >
              //         {t('viewPreviousWinners')}
              //       </a>
              //     </Link>
              //   </>
              // },
              {
                icon: PrizeIcon,
                title: t('pastFiveWinners'),
                content: <>
                  <LastWinnersListing
                    pool={pool}
                  />
                </>
              },
              
            ]}
          />

          {/* {ethBalance && ethBalance.eq(0) && <>
            <FormLockedOverlay
              flexColJustifyClass='justify-start'
              title={`Deposit & Withdraw`}
              zLayerClass='z-30'
            >
              <>
                Your ETH balance is 0.
                <br />To interact with the contracts you will need ETH.
              </>
            </FormLockedOverlay>
          </>} */}
        </>
        {/* } */}

        <div
          className='flex flex-col sm:flex-row items-center justify-center mt-20'
        >
          {cookieShowAward && <>
            <div className='m-2'>
              <ButtonLink
                secondary
                href='/pools/[symbol]/manage'
                as={`/pools/${symbol}/manage`}
              >
                {t('managePool')}
              </ButtonLink>
            </div>
          </>}

          {walletName === 'MetaMask' && <>
            <div className='m-2'>
              <Button
                secondary
                onClick={handleAddTokenToMetaMask}
              >
                {t('addTicketTokenToMetamask', {
                  token: symbolForMetaMask
                })}
              </Button>
            </div>
          </>}

          {usersAddress && <RevokePoolAllowanceTxButton
            pool={pool}
          />}
        </div>
      </motion.div>

    <Tagline />

  </>
}
