import { useQuery } from 'react-query'
import { NETWORK } from '@pooltogether/utilities'

import { MAINNET_POLLING_INTERVAL } from 'lib/constants'
import { QUERY_KEYS } from 'lib/constants/queryKeys'
import { poolDripsQuery } from 'lib/queries/poolDripsQuery'
import { getSubgraphClientFromChainIdAndVersion } from 'lib/utils/getSubgraphClients'

// This is deprecated but needs to be around for the old rewards system so people
// can still claim from the drips. It only needs the 3_1_0 subgraph
export function usePoolDripsQuery(blockNumber = -1) {
  const chainId = NETWORK.mainnet

  const refetchInterval = blockNumber === -1 ? MAINNET_POLLING_INTERVAL : false

  return useQuery(
    [QUERY_KEYS.poolDripsQuery, chainId, blockNumber],
    async () => {
      return getPoolDripsData(chainId, blockNumber)
    },
    {
      enabled: Boolean(chainId && blockNumber),
      refetchInterval
    }
  )
}

const getPoolDripsData = async (chainId, blockNumber) => {
  const query = poolDripsQuery(blockNumber)
  const graphQLClient = getSubgraphClientFromChainIdAndVersion(chainId, '3.1.0')

  const variables = {
    addresses: [
      '0xc7c406a867b324b9189b9a7503683efc9bdce5ba', // old prize strat
      '0x2f6e61d89d43b3ada4a909935ee05d8ca8db78de' // new prize strat thru shim
    ]
  }

  let data
  try {
    data = await graphQLClient.request(query, variables)
  } catch (error) {
    console.error(error)
  }

  return data
}
