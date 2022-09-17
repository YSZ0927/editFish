import '@editfish/extension-text-style'

import { Extension } from '@editfish/core'

export type FontFamilyOptions = {
  types: string[],
}

declare module '@editfish/core' {
  interface Commands<ReturnType> {
    fontFamily: {
      /**
       * Set the font family
       */
      setFontFamily: (fontFamily: string) => ReturnType,
      /**
       * Unset the font family
       */
      unsetFontFamily: () => ReturnType,
    }
  }
}

export const FontFamily = Extension.create<FontFamilyOptions>({
  name: 'fontFamily',

  addOptions() {
    return {
      types: ['textStyle'],
    }
  },

  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          fontFamily: {
            default: null,
            parseHTML: element => element.style.fontFamily?.replace(/['"]+/g, ''),
            renderHTML: attributes => {
              if (!attributes.fontFamily) {
                return {}
              }

              return {
                style: `font-family: ${attributes.fontFamily}`,
              }
            },
          },
        },
      },
    ]
  },

  addCommands() {
    return {
      setFontFamily: fontFamily => ({ chain }) => {
        return chain()
          .setMark('textStyle', { fontFamily })
          .run()
      },
      unsetFontFamily: () => ({ chain }) => {
        return chain()
          .setMark('textStyle', { fontFamily: null })
          .removeEmptyTextStyle()
          .run()
      },
    }
  },
})
