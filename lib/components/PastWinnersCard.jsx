import React, { useMemo } from 'react'
import Link from 'next/link'

import { useTranslation } from 'lib/../i18n'
import { formatDate } from 'lib/utils/formatDate'
import { numberWithCommas } from 'lib/utils/numberWithCommas'
import { IndexUILoader } from 'lib/components/loaders/IndexUILoader'
import { PoolNumber } from 'lib/components/PoolNumber'
import { Card, CardDetailsList } from 'lib/components/Card'
import { usePastPrizes } from 'lib/hooks/usePastPrizes'

export const PastWinnersCard = (props) => {
  const { t } = useTranslation()
  const { pool } = props

  const { data, error, isFetched } = usePastPrizes(pool, 1)

  if (error) {
    console.error(t('thereWasAnErrorLoadingTheLastFiveWinners'))
    console.error(error.message)
  }

  const prizes = useMemo(() => {
    let prizes = data || []
    prizes = prizes ? prizes.slice(0, 5) : []

    prizes = prizes?.reduce(function (result, prize) {
      if (
        prize?.awardedControlledTokens?.length > 0 ||
        prize?.awardedExternalErc20Tokens?.length > 0
      ) {
        const date = formatDate(prize?.awardedTimestamp, {
          short: true,
          year: false,
          noTimezone: true
        })

        result.push({
          ...prize,
          date,
          prizeNumber: prize.id
        })
      }
      return result
    }, [])

    return prizes
  }, [data])

  const loading = (!prizes && prizes !== null) || !isFetched

  if (loading) {
    return (
      <Card>
        <h5 className='mb-4'>Players</h5>
        <IndexUILoader />
      </Card>
    )
  }

  return (
    <Card>
      <div className='flex justify-between items-center'>
        <h3 className='mb-4'>{t('pastFiveWinners')}</h3>
        {pool.symbol && (
          <Link href='/prizes/[symbol]' as={`/prizes/${pool.symbol}`}>
            <a className='text-accent-1'>{t('allPrizeHistory')}</a>
          </Link>
        )}
      </div>
      <CardDetailsList>
        <div className='w-full flex mb-6'>
          <span className='w-1/3'>{t('currentPrize')}</span>
          <span className='w-1/3 text-right text-flashy'>
            ${numberWithCommas(pool.prize.totalValueUsd, { precision: 2 })}
          </span>
        </div>

        {prizes === null ? (
          <h6>{t('noWinnersAwardedYet')}</h6>
        ) : (
          <PrizesList prizes={prizes} pool={pool} />
        )}
      </CardDetailsList>
    </Card>
  )
}

const PrizesList = (props) => {
  const { prizes, pool } = props
  const { splitExternalErc20Awards, symbol, id } = pool

  return (
    <>
      {prizes.map((prize, index) => (
        <PrizeRow key={`prize-${index}`} pool={pool} prize={prize} />
      ))}
    </>
  )
}

const PrizeRow = (props) => {
  const { prize, pool } = props
  const { date, prizeNumber } = prize
  const { symbol } = pool

  const { t } = useTranslation()

  // TODO: Add a link to historic winners page, does that work for all pools?

  return (
    <li className='w-full flex mb-2 last:mb-0'>
      <span className='w-1/3'>{date}</span>
      <span className='w-1/3 text-right'>
        $<PoolNumber>{numberWithCommas(prize.totalValueUsd, { precision: 2 })}</PoolNumber>
      </span>
      <span className='w-1/3 text-right'>
        <Link
          key={`last-winners-${prizeNumber}`}
          href='/prizes/[symbol]/[prizeNumber]'
          as={`/prizes/${symbol}/${prizeNumber}`}
        >
          <a className='trans underline text-accent-1 hover:text-inverse'>{t('viewPrize')}</a>
        </Link>
      </span>
    </li>
  )
}
