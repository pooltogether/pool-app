import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import classnames from 'classnames'
import FeatherIcon from 'feather-icons-react'
import VisuallyHidden from '@reach/visually-hidden'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { Button, Tooltip } from '@pooltogether/react-components'
import { useTranslation } from 'react-i18next'

import {
  COOKIE_OPTIONS,
  SHOW_MANAGE_LINKS,
  WIZARD_REFERRER_HREF,
  WIZARD_REFERRER_AS_PATH
} from 'lib/constants'
import { queryParamUpdater } from 'lib/utils/queryParamUpdater'
import { CheckboxInputGroup } from 'lib/components/CheckboxInputGroup'
import { QuestionMarkCircle } from 'lib/components/QuestionMarkCircle'
import { ThemeSwitcher } from 'lib/components/ThemeSwitcher'
import { useReducedMotion } from 'lib/hooks/useReducedMotion'
import { APP_ENVIRONMENT, useAppEnv } from 'lib/hooks/useAppEnv'

export function Settings(props) {
  const { t } = useTranslation()

  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const shouldReduceMotion = useReducedMotion()

  const [showManageLinks, setShowManageLinks] = useState(false)
  useEffect(() => {
    const cookieShowAward = Cookies.get(SHOW_MANAGE_LINKS)
    setShowManageLinks(cookieShowAward)
  }, [])

  const handleShowManageLinksClick = (e) => {
    e.preventDefault()

    if (showManageLinks) {
      Cookies.remove(SHOW_MANAGE_LINKS, COOKIE_OPTIONS)
    } else {
      Cookies.set(SHOW_MANAGE_LINKS, 1, COOKIE_OPTIONS)
    }

    setShowManageLinks(!showManageLinks)
  }

  const toggleOpen = (e) => {
    e.preventDefault()

    setIsOpen(!isOpen)
  }

  const handleOpenClaimClick = (e) => {
    e.preventDefault()

    Cookies.set(WIZARD_REFERRER_HREF, window.location.pathname, COOKIE_OPTIONS)
    Cookies.set(WIZARD_REFERRER_AS_PATH, window.location.pathname, COOKIE_OPTIONS)

    queryParamUpdater.add(router, { claim: '1' })
  }

  return (
    <>
      <button
        onClick={toggleOpen}
        className={classnames('w-5 h-5 sm:w-6 sm:h-6 ml-2 my-1 hover:text-inverse', {
          'text-highlight-2': !isOpen,
          'text-highlight-1': isOpen
        })}
      >
        <FeatherIcon icon='settings' className='w-full h-full' strokeWidth='0.09rem' />
      </button>

      <motion.div
        key='settings-overlay'
        onClick={toggleOpen}
        className={classnames('fixed t-0 l-0 r-0 b-0 w-full h-full z-30 bg-overlay bg-blur', {
          'pointer-events-none': !isOpen,
          'border-t-4': isOpen
        })}
        style={{
          borderColor: 'black',
          top: 104
        }}
        animate={isOpen ? 'enter' : 'exit'}
        initial='initial'
        transition={{ duration: shouldReduceMotion ? 0 : 0.1 }}
        variants={{
          exit: { opacity: 0 },
          enter: { opacity: 1 },
          initial: { opacity: 0 }
        }}
      />

      <motion.div
        className='bg-highlight-3 border-l-4 h-full fixed t-0 b-0 z-40 px-8 pr-16 py-8 shadow-md'
        style={{
          borderColor: 'black',
          height: '100vh',
          right: -30,
          top: '108px',
          width: '320px'
        }}
        animate={isOpen ? 'enter' : 'exit'}
        initial='initial'
        variants={{
          exit: {
            x: '320px',
            opacity: 0,
            transition: {
              duration: shouldReduceMotion ? 0 : 0.2,
              staggerChildren: shouldReduceMotion ? 0 : 0.1
            }
          },
          enter: {
            x: 0,
            opacity: 1,
            transition: {
              duration: shouldReduceMotion ? 0 : 0.1,
              staggerChildren: shouldReduceMotion ? 0 : 0.1
            }
          },
          initial: {
            x: 0,
            opacity: 0,
            transition: {
              duration: shouldReduceMotion ? 0 : 0.1
            }
          }
        }}
      >
        <button
          onClick={toggleOpen}
          className='absolute close-button text-highlight-2 hover:text-green trans outline-none focus:outline-none active:outline-none'
          style={{
            right: 50,
            top: 34
          }}
        >
          <VisuallyHidden>Close</VisuallyHidden>
          <span aria-hidden>
            <FeatherIcon icon='x-circle' className='w-6 h-6' />
          </span>
        </button>

        <h6 className='text-white mt-4 mb-16 capitalize'>{t('settings')}</h6>

        <div className='mt-4'>
          <label className='uppercase text-accent-1 font-bold text-xxs mb-2'>{t('theme')}</label>
          <ThemeSwitcher />
        </div>

        <div className='mt-10'>
          <div className='flex items-center'>
            <label className='uppercase text-accent-1 font-bold text-xxs mr-2 mt-1'>
              {t('manage')}
            </label>{' '}
            <Tooltip
              id='settings-show-pool-management-tooltip'
              svgClassName='text-white'
              title={t('managePools')}
              tip={t('showPoolManagementDescription')}
            ></Tooltip>
          </div>
          <CheckboxInputGroup
            large
            id='settings-show-award'
            name='settings-show-award'
            label={t('showPoolManagementPages')}
            checked={showManageLinks}
            handleClick={handleShowManageLinksClick}
          />
        </div>

        <div className='mt-10'>
          <label className='uppercase text-accent-1 font-bold text-xxs mb-2 mr-2'>
            {t('claim')}
          </label>

          <p className='text-white font-bold text-xxs leading-snug mb-4'>
            {t('claimTokensOnBehalfOf')}
          </p>

          <Button secondary textSize='xxxs' padding='px-6 py-2' onClick={handleOpenClaimClick}>
            {t('openPoolClaim')}
          </Button>
        </div>

        <div className='mt-10'>
          <label className='uppercase text-accent-1 font-bold text-xxs mb-2 mr-2'>
            {t('developmentMode')}
          </label>
          <TestnetToggle />
        </div>
      </motion.div>
    </>
  )
}

const TestnetToggle = () => {
  const { appEnv, setAppEnv } = useAppEnv()
  const { t } = useTranslation()

  return (
    <CheckboxInputGroup
      large
      id='testnets-view-toggle'
      name='testnets-view-toggle'
      label={t('showTestnets')}
      checked={appEnv === APP_ENVIRONMENT.testnets}
      handleClick={() => {
        if (appEnv === APP_ENVIRONMENT.testnets) {
          setAppEnv(APP_ENVIRONMENT.mainnets)
        } else {
          setAppEnv(APP_ENVIRONMENT.testnets)
        }
      }}
    />
  )
}
