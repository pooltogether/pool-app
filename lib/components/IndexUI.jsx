import React from 'react'
import Link from 'next/link'

import { useTranslation } from 'lib/../i18n'
import { usePools } from 'lib/hooks/usePools'
import { IndexUILoader } from 'lib/components/IndexUILoader'
import { PageTitleAndBreadcrumbs } from 'lib/components/PageTitleAndBreadcrumbs'
import { PoolList } from 'lib/components/PoolList'
import { Tagline } from 'lib/components/Tagline'
import { RetroactivePoolClaimBanner } from 'lib/components/RetroactivePoolClaimBanner'

import CompSvg from 'assets/images/comp.svg'

export const IndexUI = (props) => {
  const { t } = useTranslation()

  const { loading, pools } = usePools()

  return (
    <>
      {Boolean(process.env.NEXT_JS_FEATURE_FLAG_CLAIM) && <RetroactivePoolClaimBanner />}

      <PageTitleAndBreadcrumbs title={`${t('pools')}`} breadcrumbs={[]} />

      <Link href='/pools/[symbol]' as={`/pools/PT-cCOMP`}>
        <a className='block mt-2 mb-3 text-center p-3 rounded-lg border-2 border-secondary font-bold text-inverse text-xxs xs:text-xs sm:text-sm'>
          <span role='img' aria-label='megaphone emoji' className='mx-2 text-xl'>
            📣
          </span>
          <br />{' '}
          <img
            src={CompSvg}
            alt='comp logo'
            className='w-4 h-4 inline-block relative'
            style={{
              top: -2,
            }}
          />{' '}
          {t('tickerPoolIsNowOpen', {
            ticker: 'COMP',
          })}
        </a>
      </Link>

      {loading ? <IndexUILoader /> : <PoolList pools={pools} />}

      <Tagline />
    </>
  )
}
