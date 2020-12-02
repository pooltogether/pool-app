import React, { useContext } from 'react'

import { AuthControllerContext } from 'lib/components/contextProviders/AuthControllerContextProvider'
import { PoolDataContext } from 'lib/components/contextProviders/PoolDataContextProvider'
import { usePlayerQuery } from 'lib/hooks/usePlayerQuery'
import { useSponsorQuery } from 'lib/hooks/useSponsorQuery'
import { getUsersSponsorshipBalance } from 'lib/services/getUsersSponsorshipBalance'
import { getUsersTicketBalance } from 'lib/services/getUsersTicketBalance'
import { testAddress } from 'lib/utils/testAddress'

export const PlayerDataContext = React.createContext()
const debug = require('debug')('pool-app:PoolDataContext')

export function PlayerDataContextProvider(props) {
  const { chainId, pauseQueries, usersAddress } = useContext(AuthControllerContext)
  const { pool } = useContext(PoolDataContext)

  const addressError = testAddress(usersAddress)

  const blockNumber = -1
  const {
    refetch: refetchPlayerData,
    data: playerData,
    error,
    isFetching
  } = usePlayerQuery(pauseQueries, chainId, usersAddress, blockNumber, addressError)

  if (error) {
    console.error(error)
  }



  const {
    refetch: refetchSponsorData,
    data: sponsorData,
    error: sponsorError,
    isFetching: sponsorIsFetching
  } = useSponsorQuery(pauseQueries, chainId, usersAddress, blockNumber, addressError)

  if (sponsorError) {
    console.error(sponsorError)
  }



  const {
    usersTicketBalance,
    usersTicketBalanceBN
  } = getUsersTicketBalance(pool, playerData)

  const {
    usersSponsorshipBalance,
    usersSponsorshipBalanceBN
  } = getUsersSponsorshipBalance(pool, sponsorData)

  return <>
    <PlayerDataContext.Provider
      value={{
        refetchPlayerData,
        refetchSponsorData,
        usersSponsorshipBalance,
        usersSponsorshipBalanceBN,
        usersTicketBalance,
        usersTicketBalanceBN,
      }}
    >
      {props.children}
    </PlayerDataContext.Provider>
  </>
}
