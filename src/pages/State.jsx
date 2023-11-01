import React from 'react'
import { ServerState } from '../components/ServerState'
import { TerminalState } from '../components/TerminalState'

const State = () => {
  return (
    <div>
      {<ServerState />}
      {/* {<TerminalState />} */}
    </div>
  )
}

export default State