import { RawCommands } from '../types'

declare module '@editfish/core' {
  interface Commands<ReturnType> {
    setMeta: {
      /**
       * Store a metadata property in the current transaction.
       */
      setMeta: (key: string, value: any) => ReturnType,
    }
  }
}

export const setMeta: RawCommands['setMeta'] = (key, value) => ({ tr }) => {
  tr.setMeta(key, value)

  return true
}
