import { joinForward as originalJoinForward } from 'prosemirror-commands'

import { RawCommands } from '../types'

declare module '@editfish/core' {
  interface Commands<ReturnType> {
    joinForward: {
      /**
       * Join two nodes forward.
       */
      joinForward: () => ReturnType,
    }
  }
}

export const joinForward: RawCommands['joinForward'] = () => ({ state, dispatch }) => {
  return originalJoinForward(state, dispatch)
}
