import React, { useEffect } from 'react'
import { Button } from '@pooltogether/react-components'
import { useTranslation } from 'react-i18next'
import { getMaxPrecision, numberWithCommas } from '@pooltogether/utilities'
import { useRouter } from 'next/router'
import { parseUnits } from '@ethersproject/units'

import { ButtonDrawer } from 'lib/components/ButtonDrawer'
import { ErrorsBox } from 'lib/components/ErrorsBox'
import { TextInputGroup } from 'lib/components/TextInputGroup'
import { WithdrawAndDepositPaneTitle } from 'lib/components/WithdrawAndDepositPaneTitle'

import WalletIcon from 'assets/images/icon-wallet.svg'

export const DepositAmount = (props) => {
  const {
    chainId,
    quantity: queryQuantity,
    usersAddress,
    usersUnderlyingBalance,
    usersTicketBalance,
    decimals,
    label,
    tokenSymbol,
    tokenAddress,
    nextStep,
    form
  } = props

  const { t } = useTranslation()
  const router = useRouter()

  const { handleSubmit, register, errors, formState, setValue } = form

  // Set quantity from the query parameter
  useEffect(() => {
    if (queryQuantity) {
      setValue('quantity', queryQuantity, { shouldValidate: true })
    }
  }, [])

  const onSubmit = (values) => {
    if (formState.isValid) {
      const { query, pathname } = router

      query.quantity = values.quantity
      query.prevUnderlyingBalance = usersUnderlyingBalance
      query.prevTicketBalance = usersTicketBalance

      router.replace({ pathname, query })
      nextStep()
    }
  }

  const depositValidationRules = {
    isValid: (v) => {
      const isNotANumber = isNaN(v)
      if (isNotANumber) return false
      if (getMaxPrecision(v) > decimals) return false
      if (parseUnits(v, decimals).isZero()) return false
      if (usersAddress) {
        if (!usersUnderlyingBalance) return false
        if (!usersTicketBalance) return false
        if (parseUnits(usersUnderlyingBalance, decimals).lt(parseUnits(v, decimals)))
          return t('insufficientFunds')
      }
      return true
    }
  }

  return (
    <>
      <WithdrawAndDepositPaneTitle
        chainId={chainId}
        label={label}
        symbol={tokenSymbol}
        address={tokenAddress}
      />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='w-full mx-auto'>
          <TextInputGroup
            validate={depositValidationRules}
            unsignedNumber
            autoFocus
            large
            id='quantity'
            name='quantity'
            register={register}
            label={t('amount')}
            required={t('ticketQuantityRequired')}
            autoComplete='off'
            rightLabel={
              usersAddress &&
              usersUnderlyingBalance && (
                <>
                  <button
                    id='_setMaxDepositAmount'
                    type='button'
                    className='font-bold inline-flex items-center'
                    onClick={(e) => {
                      e.preventDefault()
                      setValue('quantity', usersUnderlyingBalance, { shouldValidate: true })
                    }}
                  >
                    <img src={WalletIcon} className='mr-2' style={{ maxHeight: 12 }} />
                    {numberWithCommas(usersUnderlyingBalance)} {tokenSymbol}
                  </button>
                </>
              )
            }
          />
        </div>
        <div
          className='text-sm text-highlight-1 font-bold mb-2'
          style={{
            minHeight: 26
          }}
        >
          {Object.values(errors).length > 0 && <ErrorsBox errors={errors} />}
        </div>

        <div className='flex flex-col mx-auto w-full items-center justify-center'>
          <ButtonDrawer>
            <Button
              textSize='lg'
              disabled={!formState.isValid}
              onClick={handleSubmit(onSubmit)}
              className={'mx-auto'}
            >
              {t('continue')}
            </Button>
          </ButtonDrawer>
        </div>
      </form>
    </>
  )
}
