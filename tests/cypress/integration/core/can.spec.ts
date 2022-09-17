/// <reference types="cypress" />

import { Editor } from '@editfish/core'
import Document from '@editfish/extension-document'
import History from '@editfish/extension-history'
import Paragraph from '@editfish/extension-paragraph'
import Text from '@editfish/extension-text'

describe('can', () => {
  it('not undo', () => {
    const editor = new Editor({
      extensions: [
        Document,
        Paragraph,
        Text,
        History,
      ],
    })

    const canUndo = editor.can().undo()

    expect(canUndo).to.eq(false)
  })

  it('undo', () => {
    const editor = new Editor({
      extensions: [
        Document,
        Paragraph,
        Text,
        History,
      ],
    })

    editor.commands.setContent('foo')

    const canUndo = editor.can().undo()

    expect(canUndo).to.eq(true)
  })

  it('not chain undo', () => {
    const editor = new Editor({
      extensions: [
        Document,
        Paragraph,
        Text,
        History,
      ],
    })

    const canUndo = editor.can().chain().undo().run()

    expect(canUndo).to.eq(false)
  })

  it('chain undo', () => {
    const editor = new Editor({
      extensions: [
        Document,
        Paragraph,
        Text,
        History,
      ],
    })

    editor.commands.setContent('foo')

    const canUndo = editor.can().chain().undo().run()

    expect(canUndo).to.eq(true)
  })
})
