import { RawCommands } from '../types'

declare module '@editfish/core' {
  interface Commands<ReturnType> {
    enter: {
      /**
       * Trigger enter.
       */
      enter: () => ReturnType,
    }
  }
}

export const enter: RawCommands['enter'] = () => ({ commands }) => {
  return commands.keyboardShortcut('Enter')
}
