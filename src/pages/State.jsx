import React from 'react'
import { ServerState } from '../components/ServerState'
import { TerminalState } from '../components/TerminalState'

const State = () => {
  return (
    <div  class="border-2 m-2 p-4">
      {<ServerState />}
      {<TerminalState />}
    </div>
  )
}

export default State