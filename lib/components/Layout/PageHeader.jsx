import React, { useState } from 'react'
import {
  Button,
  LanguagePickerDropdown,
  PageHeaderContainer,
  SettingsContainer,
  TestnetSettingsItem,
  ThemeSettingsItem,
  Account,
  NetworkSelector,
  SettingsItem
} from '@pooltogether/react-components'
import { useOnboard } from '@pooltogether/hooks'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

import { NavPoolBalance } from 'lib/components/Layout/NavPoolBalance'
import { useSupportedNetworks } from 'lib/hooks/useSupportedNetworks'

export const PageHeader = (props) => (
  <PageHeaderContainer Link={Link} as='/' href='/'>
    <UsersAccount />
    <Settings />
  </PageHeaderContainer>
)

const Settings = () => (
  <SettingsContainer className='ml-1 my-auto'>
    <LanguagePicker />
    <ThemeSettingsItem />
    <TestnetSettingsItem />
  </SettingsContainer>
)

const LanguagePicker = () => {
  const { i18n: i18next } = useTranslation()
  const [currentLang, setCurrentLang] = useState(i18next.language)
  return (
    <SettingsItem label='Language'>
      <LanguagePickerDropdown
        currentLang={currentLang}
        changeLang={(newLang) => {
          setCurrentLang(newLang)
          i18next.changeLanguage(newLang)
        }}
      />
    </SettingsItem>
  )
}

const UsersAccount = () => {
  const { isWalletConnected, connectWallet, isOnboardReady } = useOnboard()
  const supportedNetworks = useSupportedNetworks()

  if (!isOnboardReady) return null

  if (!isWalletConnected) {
    return (
      <Button
        padding='px-4 sm:px-6 py-1'
        onClick={() => connectWallet()}
        textSize='xxxs'
        className='mx-1 my-auto'
      >
        Connect wallet
      </Button>
    )
  }

  return (
    <>
      <NetworkSelector supportedNetworks={supportedNetworks} className='mx-1 my-auto' />
      <NavPoolBalance className='mx-1 my-auto' />
      <Account className='mx-1 my-auto' />
    </>
  )
}
