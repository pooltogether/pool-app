import React, { useContext, useEffect, useState } from 'react'
import { ethers } from 'ethers'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

import { useTranslation } from 'lib/../i18n'
import { AuthControllerContext } from 'lib/components/contextProviders/AuthControllerContextProvider'
import { PoolDataContext } from 'lib/components/contextProviders/PoolDataContextProvider'
import { AccountPoolRow } from 'lib/components/AccountPoolRow'
import { BlankStateMessage } from 'lib/components/BlankStateMessage'
import { ButtonLink } from 'lib/components/ButtonLink'
import { ErrorMessage } from 'lib/components/ErrorMessage'
import { Meta } from 'lib/components/Meta'
import { PageTitleAndBreadcrumbs } from 'lib/components/PageTitleAndBreadcrumbs'
import { IndexUILoader } from 'lib/components/IndexUILoader'
import { usePlayerQuery } from 'lib/hooks/usePlayerQuery'
import { shorten } from 'lib/utils/shorten'

export function PlayerPageUI(props) {
  const { t } = useTranslation()
  const router = useRouter()

  const { pools } = useContext(PoolDataContext)
  const { chainId } = useContext(AuthControllerContext)

  const playerAddress = router?.query?.playerAddress

  const [error, setError] = useState('')

  useEffect(() => {
    if (playerAddress) {
      try {
        ethers.utils.getAddress(playerAddress)
        setError(false)
      } catch (e) {
        setError('Incorrectly formatted Ethereum address!')
      }
    }
  }, [playerAddress])



  let playerAddressError
  if (playerAddress) {
    try {
      ethers.utils.getAddress(playerAddress)
    } catch (e) {
      console.error(e)

      if (e.message.match('invalid address')) {
        playerAddressError = true
      }
    }
  }

  let playerData
  // let playerDripTokenData
  // let playerBalanceDripData
  // let playerVolumeDripData

  const blockNumber = -1

  const {
    status,
    data,
    error: playerQueryError,
    isFetching
  } = usePlayerQuery(pauseQueries, chainId, playerAddress, blockNumber, playerAddressError)

  playerData = data
  // playerDripTokenData = data?.playerDripToken
  // playerBalanceDripData = data?.playerBalanceDrip
  // playerVolumeDripData = data?.playerVolumeDrip

  return <>
    <Meta
      title={`${t('player')} ${playerAddress ? playerAddress : ''}`}
    />

    <PageTitleAndBreadcrumbs
      title={`${t('player')} ${playerAddress ? shorten(playerAddress) : ''}`}
      breadcrumbs={[
        {
          name: t('players'),
        },
        {
          href: '/players/[playerAddress]',
          as: `/players/${playerAddress}`,
          name: `${t('player')} ${playerAddress ? playerAddress : ''}`
        }
      ]}
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
      <div
        className='mt-8'
      >
        {error ? <>
          <ErrorMessage>
            Incorrectly formatted Ethereum address!
          </ErrorMessage>
        </> : <>
          {!playerData ? <>
            <IndexUILoader />
          </> :
          playerData.length === 0 ? <>
            <BlankStateMessage>
              <div
                className='mb-4'
              >
                {t('thisPlayerCurrentlyHasNoTickets')}
              </div>
              <ButtonLink
                href='/'
                as='/'
              >
                {t('viewPools')}
              </ButtonLink>
            </BlankStateMessage>
          </> : <>
            <ul
              className='mt-8'
            >
              {playerData.map(playerData => {
                const pool = pools?.find(pool => pool.poolAddress === playerData.prizePool.id)

                if (!pool) {
                  return
                }

                return <AccountPoolRow
                  noLinks
                  href='/players/[playerAddress]'
                  as={`/players/${playerAddress}`}
                  key={`account-pool-row-${pool.poolAddress}`}
                  pool={pool}
                  player={playerData}
                />
              })}
            </ul>
          </>}
        </>}
      </div>

      
    </motion.div>
  </>
}
