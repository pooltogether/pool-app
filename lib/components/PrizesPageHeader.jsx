import React, { useContext } from 'react'
import Link from 'next/link'
import { ethers } from 'ethers'

import { PoolDataContext } from 'lib/components/contextProviders/PoolDataContextProvider'
import { PageTitleAndBreadcrumbs } from 'lib/components/PageTitleAndBreadcrumbs'
import { PoolCurrencyIcon } from 'lib/components/PoolCurrencyIcon'
import { displayAmountInEther } from 'lib/utils/displayAmountInEther'
import { normalizeTo18Decimals } from 'lib/utils/normalizeTo18Decimals'

export const PrizesPageHeader = (
  props,
) => {
  const { showPoolLink, pool } = props

  const poolData = useContext(PoolDataContext)
  const { pools } = poolData

  let cumulativePrizeNetAllPools = ethers.utils.bigNumberify(0)
  pools?.forEach(pool => {
    const decimals = pool?.underlyingCollateralDecimals
    const cumulativePrizeNetForPool = normalizeTo18Decimals(
      pool.cumulativePrizeNet,
      decimals
    )

    cumulativePrizeNetAllPools = cumulativePrizeNetAllPools.add(
      cumulativePrizeNetForPool
    )
  })
 
  return <>
    <PageTitleAndBreadcrumbs
      title={`Prizes`}
      // pool={pool}
      breadcrumbs={[
        // {
        //   href: '/prizes',
        //   as: '/prizes',
        //   name: 'Prizes',
        // }
      ]}
    />

    <div
      className='text-inverse mb-16'
    >
      <h4>
        Total awarded: <span className='text-flashy'>${displayAmountInEther(
          cumulativePrizeNetAllPools,
          { decimals: 18, precision: 2 }
        )}
        </span>
      </h4>
    </div>

    {showPoolLink && <>
      <div
        className='bg-card mt-6 mb-6 text-sm py-4 flex items-center justify-center rounded-lg'
      >
        <div className='flex flex-col items-center justify-center text-lg'>
          <PoolCurrencyIcon
            pool={pool}
          /> <div className='mt-1'>
            <Link
              href='/prizes/[symbol]'
              as={`/prizes/${pool?.symbol}`}
            >
              <a>
                {pool?.name}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>}
  </>
}
