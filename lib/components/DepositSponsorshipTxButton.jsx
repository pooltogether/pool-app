import React, { useState } from 'react'
import { ethers } from 'ethers'
import { useUsersAddress } from '@pooltogether/hooks'
import { useTranslation } from 'react-i18next'
import PrizePoolAbi from '@pooltogether/pooltogether-contracts/abis/PrizePool'
import { Button, Tooltip } from '@pooltogether/react-components'

import { useCurrentPool } from 'lib/hooks/usePools'
import { useSendTransaction } from 'lib/hooks/useSendTransaction'
import { useTransaction } from 'lib/hooks/useTransaction'
import { numberWithCommas } from 'lib/utils/numberWithCommas'

export function DepositSponsorshipTxButton(props) {
  const { t } = useTranslation()

  const { quantity, quantityBN, needsApproval, tickerUpcased, refetch } = props

  const usersAddress = useUsersAddress()

  const { data: pool } = useCurrentPool()

  const poolAddress = pool.prizePool.address

  const controlledSponsorshipTokenAddress = pool.tokens.sponsorship.address
  const quantityFormatted = numberWithCommas(quantity)

  const txName = t(`depositAmountTickerToSponsorship`, {
    amount: quantityFormatted,
    ticker: tickerUpcased
  })
  const method = 'depositTo'
  const [txId, setTxId] = useState(0)
  const sendTx = useSendTransaction()
  const tx = useTransaction(txId)

  const depositSponsorshipTxInFlight = !tx?.cancelled && (tx?.inWallet || tx?.sent)

  const handleDepositSponsorshipClick = async (e) => {
    e.preventDefault()

    const params = [
      usersAddress,
      quantityBN,
      controlledSponsorshipTokenAddress,
      ethers.constants.AddressZero
    ]

    const id = await sendTx(txName, PrizePoolAbi, poolAddress, method, params)
    setTxId(id)
  }

  const depositSponsorshipButtonClassName = needsApproval ? 'w-full' : 'w-48-percent'

  return (
    <Tooltip
      isEnabled={needsApproval}
      id={`deposit-sponsorship-tx-button-tooltip`}
      title='Allowance'
      tip={t('needToProvideEnoughAllowance')}
      className='w-48-percent'
    >
      <Button
        noAnim
        textSize='lg'
        onClick={handleDepositSponsorshipClick}
        disabled={!quantity || needsApproval || depositSponsorshipTxInFlight}
        className={depositSponsorshipButtonClassName}
      >
        {t('depositSponsorship')}
      </Button>
    </Tooltip>
  )
}
