import { RawCommands } from '../types'

declare module '@editfish/core' {
  interface Commands<ReturnType> {
    scrollIntoView: {
      /**
       * Scroll the selection into view.
       */
      scrollIntoView: () => ReturnType,
    }
  }
}

export const scrollIntoView: RawCommands['scrollIntoView'] = () => ({ tr, dispatch }) => {
  if (dispatch) {
    tr.scrollIntoView()
  }

  return true
}
