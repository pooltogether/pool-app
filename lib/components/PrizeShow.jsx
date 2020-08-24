import React, { useContext } from 'react'
import Link from 'next/link'
import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'

import { MAINNET_POLLING_INTERVAL } from 'lib/constants'
import { PoolDataContext } from 'lib/components/contextProviders/PoolDataContextProvider'
import { GeneralContext } from 'lib/components/contextProviders/GeneralContextProvider'
import { BlankStateMessage } from 'lib/components/BlankStateMessage'
import { ButtonLink } from 'lib/components/ButtonLink'
import { CardGrid } from 'lib/components/CardGrid'
import { TableRowUILoader } from 'lib/components/TableRowUILoader'
import { Tagline } from 'lib/components/Tagline'
import { Meta } from 'lib/components/Meta'
import { PageTitleAndBreadcrumbs } from 'lib/components/PageTitleAndBreadcrumbs'
import { PoolCurrencyIcon } from 'lib/components/PoolCurrencyIcon'
import { PrizePlayerListing } from 'lib/components/PrizePlayerListing'
import { TimeTravelPool } from 'lib/components/TimeTravelPool'
import { prizeQuery } from 'lib/queries/prizeQuery'
import { displayAmountInEther } from 'lib/utils/displayAmountInEther'
import { formatDate } from 'lib/utils/formatDate'

import TicketsIcon from 'assets/images/icon-ticket@2x.png'
import PlayersIcon from 'assets/images/players@2x.png'

export const PrizeShow = (
  props,
) => {
  const router = useRouter()
  const prizeNumber = router.query?.prizeNumber

  const generalContext = useContext(GeneralContext)
  const { paused } = generalContext

  const poolData = useContext(PoolDataContext)
  const { pool } = poolData

  const decimals = pool?.underlyingCollateralDecimals || 18

  if (pool === null) {
    const querySymbol = router.query?.symbol
    return <BlankStateMessage>
      Could not find pool with symbol: ${querySymbol}
    </BlankStateMessage>
  }

  const isCurrentPrize = Number(pool?.prizesCount) + 1 === Number(prizeNumber)
  const prizeStrategyAddress = pool?.prizeStrategyAddress

  const prizeId = `${prizeStrategyAddress}-${prizeNumber}`
  const { loading, error, data } = useQuery(prizeQuery, {
    variables: {
      prizeId
    },
    skip: !prizeStrategyAddress || !prizeNumber || isCurrentPrize,
    fetchPolicy: 'network-only',
    pollInterval: paused ? 0 : MAINNET_POLLING_INTERVAL,
  })

  if (error) {
    console.error(error)
  }

  

  let prize = data?.prize
  if (isCurrentPrize) {
    prize = {
      awardedBlock: null,
      net: pool?.estimatePrize
    }
  }
  // displayAmountInEther(
  //   pool?.estimatePrize || 0,
  //   { decimals }
  // )

  if (prize === null) {
    return <div
      className='mt-10'
    >
      Couldn't find prize
    </div>
  }

  if (!prize) {
    return <div
      className='mt-10'
    >
      <TableRowUILoader
        rows={5}
      />
    </div>
  }

  const winnerAddress = prize?.winners?.[0]

  return <>
    {pool?.name && <>
      <Meta title={`Prize #${prizeNumber} - ${pool?.name}`} />
    </>}

    <PageTitleAndBreadcrumbs
      title={`Prizes`}
      pool={pool}
      breadcrumbs={[
        {
          href: '/prizes',
          as: '/prizes',
          name: 'Prizes',
        },
        {
          href: '/pools/[symbol]',
          as: `/pools/${pool?.symbol}`,
          name: pool?.name,
        }
      ]}
    />

    <div
      className='bg-highlight-3 rounded-lg px-6 pt-4 pb-6 text-white mt-4 sm:mt-10'
    >
      <div
        className='flex flex-col sm:flex-row justify-between'
      >
        <div
          className='w-full sm:w-1/2'
        >
          <h2>
            Prize #{prizeNumber}
          </h2>
          
          {prize?.awardedTimestamp && <>
            <h6
              className='mt-3'
            >
              Awarded on:
            </h6>
            <div
              className='text-caption uppercase'
            >
              {formatDate(
                prize?.awardedTimestamp,
                {
                  short: true
                }
              )}
            </div>
          </>}
        </div>

        <div
          className='w-full sm:w-1/2 mt-8 sm:mt-0'
        >
          <h2>
            <PoolCurrencyIcon
              pool={pool}
              className='inline-block mx-auto'
            /> ${displayAmountInEther(
                  prize?.net || 0,
                  { decimals, precision: 0 }
                )} {pool?.underlyingCollateralSymbol?.toUpperCase()}
          </h2>

          <h6
            className='mt-4 sm:mt-0'
          >
            Winner:
          </h6>
          <Link
            href='/players/[playerAddress]'
            as={`/players/${winnerAddress}`}
          >
            <a
              className='block font-bold text-xs xs:text-base sm:text-lg'
            >
              {winnerAddress}
            </a>
          </Link>
        </div>
      </div>
    </div>

    <CardGrid
      cardGroupId='prize-cards'
      cards={[
        {
          icon: PlayersIcon,
          title: 'Players',
          content: <>
            <h3>
              <TimeTravelPool
                pool={pool}
                prize={prize}
              >
                {(timeTravelPool) => {
                  return timeTravelPool?.playerCount || null
                }}
              </TimeTravelPool>
            </h3>
          </>
        },
        {
          icon: TicketsIcon,
          title: 'Tickets sold',
          content: <>
            <h3>
              <TimeTravelPool
                pool={pool}
                prize={prize}
              >
                {(timeTravelPool) => {
                  return timeTravelPool?.totalSupply ?
                    displayAmountInEther(
                      timeTravelPool.totalSupply,
                      { decimals, precision: 0 }
                    ) : null
                }}
              </TimeTravelPool>
            </h3>
          </>
        }
      ]}
    />

      

    <h4
      className='mt-16'
    >
      Players
    </h4>

    <PrizePlayerListing
      pool={pool}
      prize={prize}
    />

    <Tagline />
  </>
}
