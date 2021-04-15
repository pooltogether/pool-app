import React, { useContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'

import { COOKIE_OPTIONS, WIZARD_REFERRER_HREF, WIZARD_REFERRER_AS_PATH } from 'lib/constants'
import { Trans, useTranslation } from 'lib/../i18n'
import { useCurrentPool } from 'lib/hooks/usePools'
import { AuthControllerContext } from 'lib/components/contextProviders/AuthControllerContextProvider'
import { ConfettiContext } from 'lib/components/contextProviders/ConfettiContextProvider'
import { AddTokenToMetaMaskButton } from 'lib/components/AddTokenToMetaMaskButton'
import { ButtonLink } from 'lib/components/ButtonLink'
import { PaneTitle } from 'lib/components/PaneTitle'
import { PoolNumber } from 'lib/components/PoolNumber'
import { NewPrizeCountdownInWords } from 'lib/components/NewPrizeCountdownInWords'
import { getSymbolForMetaMask } from 'lib/utils/getSymbolForMetaMask'
import { numberWithCommas } from 'lib/utils/numberWithCommas'

export function OrderComplete(props) {
  const [t] = useTranslation()

  const { networkName, walletName } = useContext(AuthControllerContext)

  const router = useRouter()
  const quantity = router.query.quantity
  let prevBalance = router.query.prevBalance

  const { confetti } = useContext(ConfettiContext)

  const { data: pool } = useCurrentPool()

  const decimals = pool.tkoens.underlyingToken.decimals
  if (prevBalance) {
    prevBalance = ethers.utils.formatUnits(prevBalance, decimals || 18)
  }

  const symbolForMetaMask = getSymbolForMetaMask(networkName, pool)

  useEffect(() => {
    Cookies.set(WIZARD_REFERRER_HREF, '/account', COOKIE_OPTIONS)
    Cookies.set(WIZARD_REFERRER_AS_PATH, `/account`, COOKIE_OPTIONS)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      window.confettiContext = confetti
      confetti.start(setTimeout, setInterval)
    }, 300)
  }, [])

  // prevents flashing when unmounting
  if (!quantity) {
    return null
  }

  return (
    <>
      <PaneTitle>
        <span className={`mx-auto`} role='img' aria-label='confetti emoji'>
          🎉
        </span>{' '}
        <span className={`mx-auto`} role='img' aria-label='confetti emoji'>
          🎉
        </span>{' '}
        <span className={`mx-auto`} role='img' aria-label='confetti emoji'>
          🎉
        </span>
      </PaneTitle>
      <PaneTitle>{t('successfullyDeposited')}</PaneTitle>

      <div className='border-highlight-2 border-2 bg-accent-grey-1 p-4 sm:p-8 my-4 sm:my-8 rounded-lg'>
        <h1 className='text-highlight-2'>
          <Trans
            i18nKey='AmountTickets'
            defaults='<number>{{amount}}</number> tickets'
            components={{
              number: <PoolNumber />
            }}
            values={{
              amount: numberWithCommas(quantity)
            }}
          />
        </h1>

        {walletName === 'MetaMask' && (
          <div className='m-2'>
            <AddTokenToMetaMaskButton
              basic
              showPoolIcon
              textSize='xxxs'
              tokenAddress={pool.tokens.ticket.address}
              tokenDecimals={pool.tokens.ticket.decimals}
              tokenSymbol={symbolForMetaMask}
            />
          </div>
        )}

        <div className='mb-4 text-highlight-2 text-sm'>
          <div className='mt-4'>
            {t('youNowHaveAmountTicketsInTheTickerPool', {
              amount: numberWithCommas(Number(prevBalance) + Number(quantity)),
              ticker: pool.tokens.underlyingToken.symbol
            })}
          </div>
          <div className='mb-6'>
            {t('youWillBeEligibleToWinPrizeEveryFrequency', {
              frequency: t('week')
            })}
          </div>
          <div className='mb-3 text-inverse'>
            {t('theNextPrizeWillBeAwardedIn')}
            <br />
            <div className='font-bold text-flashy'>
              <NewPrizeCountdownInWords pool={pool} />
            </div>
          </div>
        </div>
      </div>

      <div className='mt-4'>
        <ButtonLink href='/account' as='/account' textSize='lg'>
          {t('viewYourAccount')}
        </ButtonLink>
      </div>
    </>
  )
}
