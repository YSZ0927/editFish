/// <reference types="cypress" />

import { generateJSON } from '@editfish/core'
import Document from '@editfish/extension-document'
import Paragraph from '@editfish/extension-paragraph'
import Text from '@editfish/extension-text'

describe('generateJSON', () => {
  it('generate JSON from HTML without an editor instance', () => {
    const html = '<p>Example Text</p>'

    const json = generateJSON(html, [
      Document,
      Paragraph,
      Text,
    ])

    expect(JSON.stringify(json)).to.eq(JSON.stringify({
      type: 'doc',
      content: [{
        type: 'paragraph',
        content: [{
          type: 'text',
          text: 'Example Text',
        }],
      }],
    }))
  })
})
