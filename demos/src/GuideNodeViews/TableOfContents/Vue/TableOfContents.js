import { mergeAttributes, Node } from '@editfish/core'
import { VueNodeViewRenderer } from '@editfish/vue-3'

import Component from './Component.vue'

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
    return VueNodeViewRenderer(Component)
  },

  addGlobalAttributes() {
    return [
      {
        types: [
          'heading',
        ],
        attributes: {
          id: {
            default: null,
          },
        },
      },
    ]
  },
})
