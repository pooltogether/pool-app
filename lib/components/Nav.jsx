import React, { useContext } from 'react'
import { useRouter } from 'next/router'

import { AccountButton } from 'lib/components/AccountButton'
import { AuthControllerContext } from 'lib/components/contextProviders/AuthControllerContextProvider'
import { Button } from 'lib/components/Button'
import { NavMobile } from 'lib/components/NavMobile'
import { ThemeSwitcher } from 'lib/components/ThemeSwitcher'
import { TransactionsUI } from 'lib/components/TransactionsUI'
import { queryParamUpdater } from 'lib/utils/queryParamUpdater'

export const Nav = (props) => {
  const router = useRouter()

  const authControllerContext = useContext(AuthControllerContext)
  const { usersAddress } = authControllerContext

  const handleShowSignIn = (e) => {
    e.preventDefault()

    queryParamUpdater.add(router, { signIn: 1 })
  }

  return <>
    <NavMobile />

    <div className='nav-and-footer-container'>
      <nav
        className='nav-min-height flex items-center h-full justify-between flex-wrap'
      >
        <div
          className='nav--account-controls-container flex justify-end h-full items-center text-right'
        >
          <div className='mr-2 sm:mr-4'>
            <ThemeSwitcher />
          </div>
        </div>
      </nav>
    </div>
  </>
    
}
