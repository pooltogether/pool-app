import React, { useState } from 'react'
import Cookies from 'js-cookie'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { useInterval } from 'beautiful-react-hooks'
import { usePoolBySymbol, useRouterChainId } from '@pooltogether/hooks'
import { useOnboard } from '@pooltogether/bnc-onboard-hooks'
import { PageTitleAndBreadcrumbs } from '@pooltogether/react-components'
import { Button } from '@pooltogether/react-components'
import { Trans, useTranslation } from 'react-i18next'

import {
  COOKIE_OPTIONS,
  SHOW_MANAGE_LINKS,
  WIZARD_REFERRER_HREF,
  WIZARD_REFERRER_AS_PATH
} from 'lib/constants'
import { AddTokenToMetaMaskButton } from 'lib/components/AddTokenToMetaMaskButton'
import { BlockExplorerLink } from 'lib/components/BlockExplorerLink'
import { PoolShowLootBoxTable } from 'lib/components/LootBoxTable'
import { PoolChartsCard } from 'lib/components/PoolChartsCard'
import { PastWinnersCard } from 'lib/components/PastWinnersCard'
import { PrizePlayersQuery } from 'lib/components/PrizePlayersQuery'
import { PrizePlayerListing } from 'lib/components/PrizePlayerListing'
import { PoolPrizeCard } from 'lib/components/PoolPrizeCard'
import { PoolStats } from 'lib/components/PoolStats'
import { PoolShowUILoader } from 'lib/components/loaders/PoolShowUILoader'
import { SablierStreamCard } from 'lib/components/SablierStreamCard'
import { UpcomingPrizeBreakdownCard } from 'lib/components/UpcomingPrizeBreakdownCard'
import { Meta } from 'lib/components/Meta'
import { RevokePoolAllowanceTxButton } from 'lib/components/RevokePoolAllowanceTxButton'
import { useIsPoolYieldSourceKnown } from 'lib/hooks/useIsPoolYieldSourceKnown'
import { useReducedMotion } from 'lib/hooks/useReducedMotion'
import { translatedPoolName } from 'lib/utils/translatedPoolName'
import { getNetworkNiceNameByChainId } from 'lib/utils/networks'

import Bell from 'assets/images/bell-yellow@2x.png'
import { PRIZE_POOL_TYPES } from '@pooltogether/current-pool-data'

const SOHM_PRIZE_POOL_ADDRESS = '0xeab695a8f5a44f583003a8bc97d677880d528248'
const ETH_POOL_PRIZE_POOL_ADDRESS = '0x396b4489da692788e327e2e4b2b0459a5ef26791'
const POLYGON_POOL_PRIZE_POOL_ADDRESS = '0x2ac049f07d56ed04f84ff80022a71a1a2d8ce19b'

export const PoolShow = (props) => {
  const { t } = useTranslation()
  const router = useRouter()
  const shouldReduceMotion = useReducedMotion()
  const chainId = useRouterChainId(router)

  const { data: pool, isFetched: poolIsFetched } = usePoolBySymbol(chainId, router?.query?.symbol)
  const { address: usersAddress, walletName } = useOnboard()
  const [cookieShowAward, setCookieShowAward] = useState(false)

  useInterval(() => {
    setCookieShowAward(Cookies.get(SHOW_MANAGE_LINKS))
  }, 1000)

  if (!poolIsFetched) {
    return <PoolShowUILoader />
  }

  const handleGetTicketsClick = (e) => {
    e.preventDefault()

    Cookies.set(WIZARD_REFERRER_HREF, '/pools/[networkName]/[symbol]', COOKIE_OPTIONS)
    Cookies.set(
      WIZARD_REFERRER_AS_PATH,
      `/pools/${pool.networkName}/${pool.symbol}`,
      COOKIE_OPTIONS
    )

    router.push(
      `/pools/[networkName]/[symbol]/deposit`,
      `/pools/${pool.networkName}/${pool.symbol}/deposit`,
      {
        shallow: true
      }
    )
  }

  return (
    <>
      <Meta title={pool.name} />

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
              duration: shouldReduceMotion ? 0 : 0.5,
              staggerChildren: shouldReduceMotion ? 0 : 0.1
            }
          },
          enter: {
            transition: {
              duration: shouldReduceMotion ? 0 : 0.5,
              staggerChildren: shouldReduceMotion ? 0 : 0.1
            }
          },
          initial: {
            y: 0,
            opacity: 1,
            transition: {
              duration: shouldReduceMotion ? 0 : 0.2
            }
          }
        }}
      >
        <div className='flex flex-col sm:flex-row justify-between sm:items-center mb-4 sm:mb-10'>
          <div className='flex justify-between items-center sm:w-9/12 lg:w-7/12'>
            <PageTitleAndBreadcrumbs
              t={t}
              showPrizeFrequencyChip
              Link={Link}
              title={translatedPoolName(t, pool.name)}
              pool={pool}
              breadcrumbs={[
                {
                  href: '/pools',
                  as: '/pools',
                  name: t('pools')
                },
                {
                  href: '/pools/[networkName]',
                  as: `/pools/${pool.networkName}`,
                  name: getNetworkNiceNameByChainId(pool.chainId)
                },
                {
                  name: translatedPoolName(t, pool.name)
                }
              ]}
            />
          </div>

          <div className='flex sm:w-3/12 lg:w-5/12 sm:justify-end items-start mt-4 sm:mt-0'>
            <Button
              id='_getTickets'
              width='w-full sm:w-full lg:w-6/12'
              textSize='lg'
              onClick={handleGetTicketsClick}
              disabled={!Boolean(pool.symbol)}
            >
              {t('deposit')}
            </Button>
          </div>
        </div>

        <RebasingWarning pool={pool} />

        <V3Warning pool={pool} />

        <PoolPrizeCard pool={pool} />

        <UpcomingPrizeBreakdownCard pool={pool} />

        <PoolShowLootBoxTable pool={pool} />

        <SablierStreamCard pool={pool} />

        <PoolStats pool={pool} />

        <PoolChartsCard pool={pool} />

        <PastWinnersCard pool={pool} />

        <PrizePlayersQuery pool={pool} blockNumber={-1}>
          {({ data, isFetched }) => {
            return (
              <PrizePlayerListing
                baseAsPath={`/pools/${pool.networkName}/${pool.symbol}`}
                baseHref='/pools/[networkName]/[symbol]'
                isFetched={isFetched}
                balances={data}
                pool={pool}
              />
            )
          }}
        </PrizePlayersQuery>

        <div className='flex flex-col  items-center justify-center mt-10'>
          {walletName === 'MetaMask' && pool?.tokens && (
            <div className='m-2'>
              <AddTokenToMetaMaskButton
                noAnim
                textSize='xxxs'
                tokenAddress={pool.tokens.ticket.address}
                tokenDecimals={pool.tokens.ticket.decimals}
                tokenSymbol={pool.tokens.ticket.symbol}
              />
            </div>
          )}

          <div className='m-2'>
            <BlockExplorerLink address={pool?.prizePool?.address} chainId={pool.chainId}>
              {t('viewPoolInEtherscan')}
            </BlockExplorerLink>
          </div>

          <div className='m-2'>
            <BlockExplorerLink
              address={pool?.tokens?.underlyingToken.address}
              chainId={pool?.chainId}
            >
              {t('viewDepositTokenOnEtherscan')}
            </BlockExplorerLink>
          </div>

          {usersAddress && <RevokePoolAllowanceTxButton pool={pool} />}

          {cookieShowAward && (
            <>
              <div className='m-2'>
                <Link
                  textSize='xxxs'
                  href='/pools/[networkName]/[symbol]/manage'
                  as={`/pools/${pool.networkName}/${pool.symbol}/manage`}
                >
                  {t('managePool')}
                </Link>
              </div>
            </>
          )}
        </div>
      </motion.div>
    </>
  )
}

const RebasingWarning = (props) => {
  const { t } = useTranslation()
  const { pool } = props

  const rebasing = pool.prizePool?.address === SOHM_PRIZE_POOL_ADDRESS
  if (!rebasing) {
    return null
  }

  return (
    <div className='text-center bg-default rounded-lg mt-4 pt-4 pb-2 xs:py-4 px-4 text-orange'>
      <div className='flex flex-col xs:flex-row items-center justify-center'>
        <div className='mb-2 xs:mb-0 xs:mr-4'>
          <img className='shake' src={Bell} width='20' height='20' />
        </div>
        {t('rebasingPoolWarning', 'This prize pool uses a rebasing token to generate the prize.')}
      </div>

      <a
        target='_blank'
        rel='noreferrer noopener'
        href='https://academy.binance.com/en/articles/elastic-supply-tokens-explained'
        className='underline text-xs'
      >
        {t('learnMore', 'Learn more')}
      </a>
    </div>
  )
}

const V3Warning = (props) => {
  const { pool } = props

  const poolsToHideBanner = [
    SOHM_PRIZE_POOL_ADDRESS,
    ETH_POOL_PRIZE_POOL_ADDRESS,
    POLYGON_POOL_PRIZE_POOL_ADDRESS
  ]

  if (poolsToHideBanner.includes(pool.prizePool?.address)) {
    return null
  }

  return (
    <div className='text-center bg-default rounded-lg mt-4 pt-4 pb-2 xs:py-4 px-4 text-orange'>
      <div className='flex flex-col xs:flex-row items-center justify-center'>
        <div className='mb-2 xs:mb-0 xs:mr-4'>
          <img className='shake' src={Bell} width='20' height='20' />
        </div>

        <span>
          <Trans
            i18nKey='v3BannerWarning'
            components={{
              a: (
                <a
                  href='http://app.pooltogether.com'
                  className='underline text-xs'
                  target='_blank'
                  rel='noopener noreferrer'
                />
              )
            }}
          />
        </span>
      </div>
    </div>
  )
}
