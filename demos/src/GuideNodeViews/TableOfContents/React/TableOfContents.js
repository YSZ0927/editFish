import { mergeAttributes, Node } from '@editfish/core'
import { ReactNodeViewRenderer } from '@editfish/react'

import Component from './Component.jsx'

export default Node.create({
  name: 'tableOfContents',

  group: 'block',

  atom: true,

  parseHTML() {
    return [
      {
        tag: 'toc',
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['toc', mergeAttributes(HTMLAttributes)]
  },

  addNodeView() {
    return ReactNodeViewRenderer(Component)
  },

  addGlobalAttributes() {
    return [
      {
        types: ['heading'],
        attributes: {
          id: {
            default: null,
          },
        },
      },
    ]
  },
})
