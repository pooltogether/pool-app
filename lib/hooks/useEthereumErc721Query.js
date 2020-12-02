import { useQuery } from 'react-query'
import { isEmpty } from 'lodash'

import {
  ERC_721_POLLING_INTERVAL,
  QUERY_KEYS
} from 'lib/constants'
import { fetchExternalErc721Awards } from 'lib/utils/fetchExternalErc721Awards'

const getEthereumErc721Data = async (params) => {
  return await fetchExternalErc721Awards(params)
}

export function useEthereumErc721Query(params) {
  const {
    chainId,
    provider,
    graphErc721Awards,
    pauseQueries,
    poolAddress,
  } = params

  let blockNumber = params.blockNumber

  if (!blockNumber) {
    blockNumber = -1
  }

  const enabled = !pauseQueries &&
    chainId &&
    !isEmpty(provider) &&
    !isEmpty(graphErc721Awards) &&
    !!poolAddress

  const refetchInterval = !pauseQueries && (blockNumber === -1) ?
    ERC_721_POLLING_INTERVAL :
    false

  return useQuery(
    [QUERY_KEYS.ethereumErc721sQuery, chainId, poolAddress, blockNumber],
    async () => await getEthereumErc721Data(params),
    { 
      enabled,
      refetchInterval
    }
  )
}
