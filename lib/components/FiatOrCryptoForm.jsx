import React from 'react'
import { useRouter } from 'next/router'
import { Button } from '@pooltogether/react-components'

import { PaneTitle } from 'lib/components/PaneTitle'
import { queryParamUpdater } from 'lib/utils/queryParamUpdater'

export function FiatOrCryptoForm(props) {
  const { nextStep } = props

  const router = useRouter()
  const quantity = router.query.quantity

  const handleFiatClick = (e) => {
    e.preventDefault()

    queryParamUpdater.add(router, { method: 'fiat' })

    nextStep()
  }

  const handleCryptoClick = (e) => {
    e.preventDefault()

    queryParamUpdater.add(router, { method: 'crypto' })

    nextStep()
  }

  return (
    <>
      <PaneTitle small>{quantity} tickets</PaneTitle>

      <PaneTitle>How would you like to deposit?</PaneTitle>

      <div className='flex flex-col mx-auto w-full'>
        <Button textSize='lg' onClick={handleFiatClick} className='my-2 w-full mx-auto'>
          Fiat currency
        </Button>

        <Button
          textSize='lg'
          onClick={handleCryptoClick}
          color='white'
          className='my-2 w-full mx-auto'
        >
          Crypto
        </Button>
      </div>
    </>
  )
}
