import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import * as Fathom from 'fathom-client'
import * as Sentry from '@sentry/react'
import { Integrations } from '@sentry/tracing'
import { HotKeys } from 'react-hotkeys'
import { ethers } from 'ethers'
import { ToastContainer } from 'react-toastify'
import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider as JotaiProvider } from 'jotai'
import {
  useInitCookieOptions,
  useInitializeOnboard,
  useInitInfuraId,
  useInitReducedMotion
} from '@pooltogether/hooks'

import {
  HOTKEYS_KEY_MAP,
  COOKIE_OPTIONS,
  REFERRER_ADDRESS_KEY,
  DEFAULT_QUERY_OPTIONS
} from 'lib/constants'
import { AllContextProviders } from 'lib/components/contextProviders/AllContextProviders'
import { BodyClasses } from 'lib/components/BodyClasses'
import { CustomErrorBoundary } from 'lib/components/CustomErrorBoundary'
import { Layout } from 'lib/components/Layout'
import { LoadingScreen } from 'lib/components/LoadingScreen'
import { TransactionStatusChecker } from 'lib/components/TransactionStatusChecker'
import { TxRefetchListener } from 'lib/components/TxRefetchListener'
import { ManualWarningMessage } from 'lib/components/ManualWarningMessage'

import '@reach/dialog/styles.css'
import '@reach/menu-button/styles.css'
import 'react-toastify/dist/ReactToastify.css'

import 'assets/styles/utils.css'
import 'assets/styles/index.css'
import 'assets/styles/toast-blur.css'
import 'assets/styles/layout.css'
import 'assets/styles/loader.css'
import 'assets/styles/themes.css'

import 'assets/styles/typography.css'
import 'assets/styles/tables.css'
import 'assets/styles/pool.css'
import 'assets/styles/pool-toast.css'
import 'assets/styles/animations.css'
import 'assets/styles/transitions.css'

import 'assets/styles/interactable-cards.css'
import 'assets/styles/forms.css'
import 'assets/styles/tabs.css'
import 'assets/styles/tickets.css'

import 'assets/styles/bnc-onboard--custom.css'
import 'assets/styles/reach--custom.css'
import 'assets/styles/vx--custom.css'

// Imoport i18n config
import '../i18n'
import { useTranslation } from 'react-i18next'
import { Trans } from 'react-i18next'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      ...DEFAULT_QUERY_OPTIONS
    }
  }
})

if (typeof window !== 'undefined') {
  window.ethers = ethers
}

if (process.env.NEXT_JS_SENTRY_DSN) {
  Sentry.init({
    dsn: process.env.NEXT_JS_SENTRY_DSN,
    release: process.env.NEXT_JS_RELEASE_VERSION,
    integrations: [new Integrations.BrowserTracing()]
  })
}

function MyApp({ Component, pageProps, router }) {
  const { i18n } = useTranslation()

  useEffect(() => {
    if (router?.query?.referrer) {
      const referrerAddress = router.query.referrer

      try {
        ethers.utils.getAddress(referrerAddress)

        Cookies.set(REFERRER_ADDRESS_KEY, referrerAddress.toLowerCase(), COOKIE_OPTIONS)
      } catch (e) {
        console.error(`referrer address was an invalid Ethereum address:`, e.message)
      }
    }
  }, [])

  useEffect(() => {
    const fathomSiteId = process.env.NEXT_JS_FATHOM_SITE_ID

    if (fathomSiteId) {
      Fathom.load(process.env.NEXT_JS_FATHOM_SITE_ID, {
        url: 'https://goose.pooltogether.com/script.js',
        includedDomains: [
          'app-v3.pooltogether.com',
          'app.pooltogether.com',
          'staging-v3.pooltogether.com'
        ]
      })

      function onRouteChangeComplete(url) {
        if (window['fathom']) {
          window['fathom'].trackPageview()
        }
      }

      router.events.on('routeChangeComplete', onRouteChangeComplete)

      return () => {
        router.events.off('routeChangeComplete', onRouteChangeComplete)
      }
    }
  }, [])

  useEffect(() => {
    const handleExitComplete = () => {
      if (typeof window !== 'undefined') {
        // window.scrollTo({ top: 0 })

        // make sure opacity gets set back to 1 after page transitions!
        setTimeout(() => {
          const elem = document.getElementById('content-animation-wrapper')

          // in case the animation failed
          if (elem) {
            elem.style.opacity = '1'
          }
        }, 1000)
      }
    }

    router.events.on('routeChangeComplete', handleExitComplete)
    return () => {
      router.events.off('routeChangeComplete', handleExitComplete)
    }
  }, [])

  if (!i18n.isInitialized) return <LoadingScreen initialized={false} />

  return (
    <HotKeys
      keyMap={HOTKEYS_KEY_MAP}
      className='outline-none focus:outline-none active:outline-none'
    >
      <JotaiProvider>
        <QueryClientProvider client={queryClient}>
          <InitPoolTogetherHooks>
            <BodyClasses />

            <ToastContainer className='pool-toast' position='top-center' autoClose={7000} />

            <AllContextProviders>
              <CustomErrorBoundary>
                <TransactionStatusChecker />

                <TxRefetchListener />

                <ManualWarningMessage />

                <Layout pageProps={pageProps} Component={Component} router={router} />

                <ReactQueryDevtools />
              </CustomErrorBoundary>
            </AllContextProviders>
          </InitPoolTogetherHooks>
        </QueryClientProvider>
      </JotaiProvider>
    </HotKeys>
  )
}

const InitPoolTogetherHooks = ({ children }) => {
  useInitInfuraId(process.env.NEXT_JS_INFURA_ID)
  useInitReducedMotion(Boolean(process.env.NEXT_JS_REDUCE_MOTION))
  useInitCookieOptions(process.env.NEXT_JS_DOMAIN_NAME)
  useInitializeOnboard({
    infuraId: process.env.NEXT_JS_INFURA_ID,
    fortmaticKey: process.env.NEXT_JS_FORTMATIC_API_KEY,
    portisKey: process.env.NEXT_JS_PORTIS_API_KEY,
    defaultNetworkName: process.env.NEXT_JS_DEFAULT_ETHEREUM_NETWORK_NAME
  })
  return children
}

export default MyApp
