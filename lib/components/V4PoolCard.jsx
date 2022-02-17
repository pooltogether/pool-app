import { batch, contract } from '@pooltogether/etherplex'
import { useReadProvider, useReadProviders } from '@pooltogether/hooks'
import {
  Chip,
  LoadingDots,
  NetworkIcon,
  SquareButton,
  SquareButtonSize,
  SquareButtonTheme,
  TokenIcon
} from '@pooltogether/react-components'
import { NETWORK, sToMs } from '@pooltogether/utilities'
import classnames from 'classnames'
import { BigNumber } from 'ethers'
import { formatUnits } from 'ethers/lib/utils'
import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { useTranslation } from 'react-i18next'

import { InteractableCard } from 'lib/components/InteractableCard'
import { Divider, PoolRowContents, PoolRowContentSide } from 'lib/components/PoolRow'
import { PrizeValue } from 'lib/components/PrizeValue'
import { NewPrizeCountdown } from 'lib/components/NewPrizeCountdown'
import { ThemedClipSpinner } from 'lib/components/loaders/ThemedClipSpinner'
import PrizeTierHistoryAbi from 'abis/PrizeTierHistoryAbi'
import DrawBeaconAbi from 'abis/DrawBeaconAbi'
import ERC20Abi from 'abis/ERC20Abi'

const ETHEREUM_TICKET = '0xdd4d117723C257CEe402285D3aCF218E9A8236E1'
const POLYGON_TICKET = '0x6a304dFdb9f808741244b6bfEe65ca7B3b3A6076'
const AVALANCHE_TICKET = '0xB27f379C050f6eD0973A01667458af6eCeBc1d90'
const USDC = '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
const PRIZE_TIER_HISTORY = '0xdD1cba915Be9c7a1e60c4B99DADE1FC49F67f80D'
const DRAW_BEACON = '0x0D33612870cd9A475bBBbB7CC38fC66680dEcAC5'
const PRIZE_DECIMALS = 6
export const CHAINS_TO_SHOW = [NETWORK.avalanche, NETWORK.mainnet, NETWORK.polygon]

export const V4PoolCard = (props) => {
  const { filter } = props
  const { data: prize } = useV4Prize()
  const { t } = useTranslation()

  if (filter !== -1 && !CHAINS_TO_SHOW.includes(filter)) {
    return null
  }

  return (
    <InteractableCard
      id={`_viewv4Pool`}
      href='https://app.pooltogether.com'
      className='mt-1 sm:mt-2 relative'
    >
      <CustomNetworkBadge />
      <PoolRowContents>
        <PoolRowContentSide className='py-2 p-4 lg:px-6 sm:pt-3 sm:pb-5 justify-center sm:justify-start'>
          <div className='flex flex-col mx-auto'>
            <div className='flex items-center justify-center'>
              <TokenIcon
                chainId={NETWORK.mainnet}
                address={USDC}
                sizeClassName='w-9 h-9'
                className='mr-2 my-auto'
              />
              <PrizeValue totalValueUsd={prize?.weeklyPrizeAmount || 0} />
            </div>

            <div className='flex items-center justify-center'>
              <PrizeFrequency />
            </div>
          </div>
        </PoolRowContentSide>
        <Divider />
        <PoolRowContentSide className='mt-4 sm:mt-0'>
          <div className='flex flex-col mx-auto'>
            <PrizeCountdown />
            <DepositLink />
            <div className='flex flex-col sm:flex-row w-full justify-between pt-2'>
              <PrizeApr />
              <span className='text-inverse text-xxxs mt-1 sm:mt-0 mx-auto sm:mr-0 sm:ml-auto'>
                {t('viewApp', 'View app')}
              </span>
            </div>
          </div>
        </PoolRowContentSide>
      </PoolRowContents>
    </InteractableCard>
  )
}

const CustomNetworkBadge = (props) => {
  const { className } = props
  return (
    <div
      className={classnames(
        className,
        `absolute t-0 l-0 px-3 py-1 rounded-tl-xl rounded-br-xl border-b border-r border-accent-4 flex items-center`
      )}
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.03)'
      }}
    >
      <div className='flex flex-row-reverse'>
        {CHAINS_TO_SHOW.map((chainId) => (
          <NetworkIcon chainId={chainId} key={chainId} className='-ml-2 last:ml-0' />
        ))}
      </div>
      <span className={`text-flashy ml-2`}>Multi-chain</span>
    </div>
  )
}
const PrizeFrequency = () => <Chip textClasses='text-inverse' text='In weekly prizes' />

const useV4Prize = () => {
  const readProvider = useReadProvider(NETWORK.mainnet)
  return useQuery(['useV4Prize'], () => getV4Prize(readProvider))
}

const getV4Prize = async (readProvider) => {
  const prizeTierHistory = contract(PRIZE_TIER_HISTORY, PrizeTierHistoryAbi, PRIZE_TIER_HISTORY)
  let response = await batch(readProvider, prizeTierHistory.getNewestDrawId())
  const drawId = response[PRIZE_TIER_HISTORY].getNewestDrawId[0]
  response = await batch(readProvider, prizeTierHistory.getPrizeTier(drawId))
  const prizeTier = response[PRIZE_TIER_HISTORY].getPrizeTier[0]
  const prizeAmountUnformatted = prizeTier.prize
  const weeklyPrizeAmountUnformatted = prizeAmountUnformatted.mul(7)
  return {
    dailyPrizeAmountUnformatted: prizeAmountUnformatted,
    dailyPrizeAmount: formatUnits(prizeAmountUnformatted, PRIZE_DECIMALS),
    weeklyPrizeAmountUnformatted,
    weeklyPrizeAmount: formatUnits(weeklyPrizeAmountUnformatted, PRIZE_DECIMALS)
  }
}

const PrizeCountdown = () => {
  const { data: drawBeaconData, isFetched: isDrawBeaconFetched } = useDrawBeaconPeriodEndTime()

  if (!isDrawBeaconFetched) {
    return (
      <div className='w-72 flex justify-center'>
        <LoadingDots />
      </div>
    )
  }

  return (
    <NewPrizeCountdown
      center
      textSize='text-sm sm:text-lg'
      prizePeriodSeconds={drawBeaconData.periodSeconds}
      prizePeriodStartedAt={drawBeaconData.startedAtSeconds}
      isRngRequested={false}
    />
  )
}

export const useDrawBeaconPeriodEndTime = () => {
  const readProvider = useReadProvider(NETWORK.mainnet)
  const [refetchIntervalMs, setRefetchIntervalMs] = useState(sToMs(60 * 2.5))

  const onSuccess = (drawBeaconData) => {
    const { endsAtSeconds } = drawBeaconData
    let refetchIntervalMs = sToMs(endsAtSeconds.toNumber()) - Date.now()
    // Refetch when the period is done
    if (refetchIntervalMs > 0) {
      setRefetchIntervalMs(refetchIntervalMs)
    } else {
      // Otherwise, refetch every 2.5 minutes (1/2 the time for the defender cron job)
      setRefetchIntervalMs(sToMs(60 * 2.5))
    }
  }

  return useQuery(['useDrawBeaconPeriod'], () => getDrawBeaconPeriodEndTime(readProvider), {
    refetchInterval: refetchIntervalMs,
    onSuccess
  })
}

const getDrawBeaconPeriodEndTime = async (readProvider) => {
  const drawBeacon = contract(DRAW_BEACON, DrawBeaconAbi, DRAW_BEACON)
  let response = await batch(
    readProvider,
    drawBeacon.beaconPeriodEndAt().getBeaconPeriodStartedAt().getBeaconPeriodSeconds()
  )
  const startedAtSeconds = response[DRAW_BEACON].getBeaconPeriodStartedAt[0]
  const periodSeconds = BigNumber.from(response[DRAW_BEACON].getBeaconPeriodSeconds[0])
  const endsAtSeconds = response[DRAW_BEACON].beaconPeriodEndAt[0]
  return { startedAtSeconds, periodSeconds, endsAtSeconds }
}

const DepositLink = () => {
  const { t } = useTranslation()
  return (
    <SquareButton
      className='mt-2 w-full'
      theme={SquareButtonTheme.rainbow}
      size={SquareButtonSize.sm}
    >
      {t('depositTicker', { ticker: 'USDC' })}
    </SquareButton>
  )
}

const PrizeApr = () => {
  const { data: apr, isFetched } = useV4Apr()
  const { t } = useTranslation()
  return (
    <div
      className={classnames(
        'text-xxxs text-accent-1 flex items-center',
        'mx-auto sm:mr-auto sm:ml-0'
      )}
    >
      <TokenIcon
        chainId={NETWORK.mainnet}
        address={ETHEREUM_TICKET}
        className='mr-2'
        sizeClassName='w-3 h-3'
      />
      {isFetched ? <span>{t('prizeApr', { amount: apr })}</span> : <ThemedClipSpinner size={12} />}
    </div>
  )
}

export const useV4Apr = () => {
  const { data: prize, isFetched } = useV4Prize()
  const readProviders = useReadProviders([NETWORK.mainnet, NETWORK.polygon, NETWORK.avalanche])
  const enabled = !!readProviders && isFetched
  return useQuery([], () => getV4Apr(readProviders, prize?.dailyPrizeAmountUnformatted), {
    enabled
  })
}

const getV4Apr = async (readProviders, dailyPrizeAmountUnformatted) => {
  const totalYearlyPrizesUnformatted = dailyPrizeAmountUnformatted.mul(365)
  const ethereumTicket = contract(ETHEREUM_TICKET, ERC20Abi, ETHEREUM_TICKET)
  const polygonTicket = contract(POLYGON_TICKET, ERC20Abi, POLYGON_TICKET)
  const avalancheTicket = contract(AVALANCHE_TICKET, ERC20Abi, AVALANCHE_TICKET)

  const ethereumResponse = await batch(readProviders[NETWORK.mainnet], ethereumTicket.totalSupply())
  const polygonResponse = await batch(readProviders[NETWORK.polygon], polygonTicket.totalSupply())
  const avalancheResponse = await batch(
    readProviders[NETWORK.avalanche],
    avalancheTicket.totalSupply()
  )

  const ethereumTotalSupplyUnformatted = ethereumResponse[ETHEREUM_TICKET].totalSupply[0]
  const polygonTotalSupplyUnformatted = polygonResponse[POLYGON_TICKET].totalSupply[0]
  const avalancheTotalSupplyUnformatted = avalancheResponse[AVALANCHE_TICKET].totalSupply[0]

  const totalTotalSupplyUnformatted = ethereumTotalSupplyUnformatted
    .add(polygonTotalSupplyUnformatted)
    .add(avalancheTotalSupplyUnformatted)

  const totalTotalSupply = totalTotalSupplyUnformatted.div(1e6).toNumber()
  const totalYearlyPrizes = totalYearlyPrizesUnformatted.div(1e6).toNumber()

  return ((totalYearlyPrizes / totalTotalSupply) * 100).toFixed(2)
}
