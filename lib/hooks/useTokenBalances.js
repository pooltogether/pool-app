import { batch, contract } from '@pooltogether/etherplex'
import { useQuery } from 'react-query'
import { useReadProvider } from '@pooltogether/hooks'

import ERC20Abi from 'abis/ERC20Abi'
import { formatUnits } from 'ethers/lib/utils'
import { QUERY_KEYS } from 'lib/constants/queryKeys'

export const useTokenBalances = (chainId, usersAddress, tokenAddresses) => {
  const readProvider = useReadProvider(chainId)
  const enabled =
    !!readProvider &&
    Boolean(usersAddress) &&
    tokenAddresses.reduce((aggregate, current) => aggregate && Boolean(current), true) &&
    Array.isArray(tokenAddresses) &&
    tokenAddresses.length > 0
  return useQuery(
    [QUERY_KEYS.usersTokenBalancesForAddresses, chainId, usersAddress, tokenAddresses],
    async () => await getTokenBalances(readProvider, usersAddress, tokenAddresses),
    {
      enabled
    }
  )
}

const getTokenBalances = async (readProvider, usersAddress, tokenAddresses) => {
  const batchCalls = []
  tokenAddresses.map((tokenAddress) => {
    const tokenContract = contract(tokenAddress, ERC20Abi, tokenAddress)
    batchCalls.push(tokenContract.balanceOf(usersAddress).decimals())
  })
  const response = await batch(readProvider, ...batchCalls)
  return Object.keys(response).reduce((accumulator, current) => {
    const amountUnformatted = response[current].balanceOf[0]
    const decimals = response[current].decimals[0]

    accumulator[current] = {
      amount: formatUnits(amountUnformatted, decimals),
      amountUnformatted,
      decimals
    }
    return accumulator
  }, {})
}
