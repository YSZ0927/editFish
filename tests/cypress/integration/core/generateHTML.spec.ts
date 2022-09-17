/// <reference types="cypress" />

import { generateHTML } from '@editfish/core'
import Document from '@editfish/extension-document'
import Paragraph from '@editfish/extension-paragraph'
import Text from '@editfish/extension-text'

describe('generateHTML', () => {
  it('generate HTML from JSON without an editor instance', () => {
    const json = {
      type: 'doc',
      content: [{
        type: 'paragraph',
        content: [{
          type: 'text',
          text: 'Example Text',
        }],
      }],
    }

    const html = generateHTML(json, [
      Document,
      Paragraph,
      Text,
    ])

    expect(html).to.eq('<p>Example Text</p>')
  })
})
