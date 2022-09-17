/// <reference types="cypress" />

import { Editor } from '@editfish/core'
import Document from '@editfish/extension-document'
import Paragraph from '@editfish/extension-paragraph'
import Text from '@editfish/extension-text'

describe('editorProps', () => {
  it('editorProps can be set while constructing Editor', () => {
    function transformPastedHTML(html: string) {
      return html
    }

    const editor = new Editor({
      extensions: [Document, Paragraph, Text],
      editorProps: { transformPastedHTML },
    })

    expect(transformPastedHTML).to.eq(editor.view.props.transformPastedHTML)
  })

  it('editorProps can be set through setOptions', () => {
    function transformPastedHTML(html: string) {
      return html
    }

    const editor = new Editor({
      extensions: [Document, Paragraph, Text],
    })

    editor.setOptions({ editorProps: { transformPastedHTML } })

    expect(transformPastedHTML).to.eq(editor.view.props.transformPastedHTML)
  })
})
