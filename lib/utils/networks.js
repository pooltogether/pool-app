import { getChain } from '@pooltogether/evm-chains-extended'

// Used for filtering lists of X by chain Id
export const ALL_NETWORKS_ID = -1

export const NETWORK = Object.freeze({
  'mainnet': 1,
  'homestead': 1,
  'ropsten': 3,
  'rinkeby': 4,
  'goerli': 5,
  'kovan': 42,
  'bsc': 56,
  'poa-sokol': 77,
  'bsc-testnet': 97,
  'poa': 99,
  'xdai': 100,
  'matic': 137,
  'polygon': 137,
  'celo': 42220,
  'mumbai': 80001,
  'avalanche': 43114
})

export const getChainIdByAlias = (networkAlias) => {
  return NETWORK[networkAlias]
}

export const getNetworkNameAliasByChainId = (chainId) => {
  const networkKeys = Object.keys(NETWORK)
  const networkAlias = networkKeys.find((networkKey) => NETWORK[networkKey] === chainId)

  if (typeof networkAlias === 'undefined') {
    return null
  }

  return networkAlias
}

export const getNetworkNiceNameByChainId = (chainId) => {
  switch (Number(chainId)) {
    case 1: {
      return 'Ethereum'
    }
    case 56: {
      return 'Binance'
    }
    case 137: {
      return 'Polygon'
    }
    case 43114: {
      return 'Avalanche'
    }
    default: {
      return getNetworkNameAliasByChainId(chainId)
    }
  }
}

export const networkColorClassname = (networkId) => {
  if (networkId === 4) {
    return 'text-yellow-1'
  } else if (networkId === 3) {
    return 'text-red-1'
  } else if (networkId === 5) {
    return 'text-blue'
  } else if (networkId === 1234) {
    return 'text-teal'
  } else if (networkId === 42) {
    return 'text-default-soft'
  } else {
    return 'text-white'
  }
}

export const formatBlockExplorerTxUrl = (tx, networkId) => {
  try {
    const blockExplorerUrl = getChain(networkId).blockExplorerUrls[0]
    return `${blockExplorerUrl}/tx/${tx}`
  } catch (e) {
    throw new Error('Chain ID not supported')
  }
}

export const formatBlockExplorerAddressUrl = (address, networkId) => {
  try {
    const blockExplorerUrl = getChain(networkId).blockExplorerUrls[0]
    return `${blockExplorerUrl}/address/${address}`
  } catch (e) {
    throw new Error('Chain ID not supported')
  }
}
