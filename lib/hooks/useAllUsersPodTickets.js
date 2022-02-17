import { useQuery } from 'react-query'
import { usePodChainIds, useReadProviders } from '@pooltogether/hooks'
import { batch, contract } from '@pooltogether/etherplex'
import { addTokenTotalUsdValue, sToMs } from '@pooltogether/utilities'

import PodAbi from 'abis/PodAbi'
import { QUERY_KEYS } from 'lib/constants/queryKeys'
import { useAllPodsByChainId } from 'lib/hooks/useAllPodsByChainId'
import { formatUnits } from 'ethers/lib/utils'

export const useAllUsersPodTickets = (usersAddress) => {
  const { data: podsByChainId, isFetched } = useAllPodsByChainId()
  const chainIds = usePodChainIds()
  const readProviders = useReadProviders(chainIds)

  const enabled = isFetched && !!readProviders && Boolean(usersAddress)

  return useQuery(
    [QUERY_KEYS.getPodTickets, usersAddress],
    () => getAllPodTickets(readProviders, chainIds, podsByChainId, usersAddress),
    {
      enabled,
      refetchInterval: sToMs(20)
    }
  )
}

const getAllPodTickets = async (providers, chainIds, podsByChainId, usersAddress) => {
  const podTickets = await Promise.all(
    chainIds.map((chainId) =>
      getPodTickets(usersAddress, providers[chainId], podsByChainId[chainId])
    )
  )

  const podTicketsByChainIds = {}
  chainIds.map((chainId, index) => {
    podTicketsByChainIds[chainId] = podTickets[index]
  })

  return podTicketsByChainIds
}

const getPodTickets = async (usersAddress, provider, pods) => {
  const batchCalls = []
  pods.forEach((pod) => {
    const podContract = contract(
      pod.tokens.podStablecoin.address,
      PodAbi,
      pod.tokens.podStablecoin.address
    )
    batchCalls.push(podContract.balanceOfUnderlying(usersAddress))
  })

  const response = await batch(provider, ...batchCalls)

  return formatPodTicketsResponse(pods, response)
}

const formatPodTicketsResponse = (pods, podTickets) => {
  const formattedPodTickets = []

  pods.forEach((pod) => {
    const amountUnformatted = podTickets[pod.tokens.podStablecoin.address].balanceOfUnderlying[0]
    const amount = formatUnits(amountUnformatted, pod.tokens.podStablecoin.decimals)

    const podTicket = {
      ...pod.tokens.podStablecoin,
      amountUnformatted,
      amount,
      pod
    }
    addTokenTotalUsdValue(podTicket, { [podTicket.address]: pod.tokens.podStablecoin })
    formattedPodTickets.push(podTicket)
  })
  return formattedPodTickets
}
