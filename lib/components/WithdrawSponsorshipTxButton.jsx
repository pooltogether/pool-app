import React, { useContext, useEffect, useState } from 'react'
import { ethers } from 'ethers'
import { useAtom } from 'jotai'

import PrizePoolAbi from '@pooltogether/pooltogether-contracts/abis/PrizePool'

import { useTranslation } from 'lib/../i18n'
import { AuthControllerContext } from 'lib/components/contextProviders/AuthControllerContextProvider'
import { PoolDataContext } from 'lib/components/contextProviders/PoolDataContextProvider'
import { transactionsAtom } from 'lib/atoms/transactionsAtom'
import { Button } from 'lib/components/Button'
import { useSendTransaction } from 'lib/hooks/useSendTransaction'

export function WithdrawSponsorshipTxButton(props) {
  const { t } = useTranslation()
  
  const [transactions, setTransactions] = useAtom(transactionsAtom)

  const {
    quantityBN,
    quantity,
    needsApproval,
    tickerUpcased,
  } = props

  const { usersAddress, provider } = useContext(AuthControllerContext)
  const { pool } = useContext(PoolDataContext)

  const poolAddress = pool?.poolAddress
  const sponsorshipAddress = pool?.prizeStrategy?.singleRandomWinner?.sponsorship?.id
  



  const [txId, setTxId] = useState()

  const txName = t(`withdrawSponsorshipAmountTicker`, {
    amount: quantity,
    ticker: tickerUpcased
  })

  const method = 'withdrawInstantlyFrom'

  const [sendTx] = useSendTransaction(txName, transactions, setTransactions)

  
  
  const tx = transactions?.find((tx) => tx.id === txId)

  const withdrawSponsorshipTxInFlight = !tx?.cancelled && (tx?.inWallet || tx?.sent)



  const handleWithdrawSponsorshipClick = async (e) => {
    e.preventDefault()

    // there should be no exit fee when withdrawing sponsorship
    const maxExitFee = '0'

    const params = [
      usersAddress,
      quantityBN,
      sponsorshipAddress,
      ethers.utils.parseEther(maxExitFee),
    ]

    const id = sendTx(
      t,
      provider,
      usersAddress,
      PrizePoolAbi,
      poolAddress,
      method,
      params
    )
    setTxId(id)
  }


  return <>
    <Button
      noAnim
      textSize='lg'
      onClick={handleWithdrawSponsorshipClick}
      disabled={!quantity || needsApproval || withdrawSponsorshipTxInFlight}
      className={'w-full'}
    >
      Withdraw sponsorship
    </Button>
  </>
}
