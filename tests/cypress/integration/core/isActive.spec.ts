/// <reference types="cypress" />

import { Editor } from '@editfish/core'
import Color from '@editfish/extension-color'
import Document from '@editfish/extension-document'
import FontFamily from '@editfish/extension-font-family'
import Paragraph from '@editfish/extension-paragraph'
import Text from '@editfish/extension-text'
import TextStyle from '@editfish/extension-text-style'

describe('isActive', () => {
  it('should check the current node', () => {
    const editor = new Editor({
      extensions: [
        Document,
        Paragraph,
        Text,
      ],
    })

    expect(editor.isActive('paragraph')).to.eq(true)
  })

  it('should check non-existent nodes', () => {
    const editor = new Editor({
      extensions: [
        Document,
        Paragraph,
        Text,
      ],
    })

    expect(editor.isActive('doesNotExist')).to.eq(false)
  })

  it('should check the current mark for correct values', () => {
    const editor = new Editor({
      extensions: [
        Document,
        Paragraph,
        Text,
        TextStyle,
        FontFamily,
        Color,
      ],
      content: `
        <p><span style="font-family: Inter">text</span></p>
      `,
    })

    expect(editor.isActive('textStyle', { fontFamily: 'Inter' })).to.eq(true)
  })

  it('should check the current mark for false values', () => {
    const editor = new Editor({
      extensions: [
        Document,
        Paragraph,
        Text,
        TextStyle,
        FontFamily,
        Color,
      ],
      content: `
        <p><span style="font-family: Inter; color: red">text</span></p>
      `,
    })

    expect(editor.isActive('textStyle', { fontFamily: 'Comic Sans' })).to.eq(false)
  })

  it('should check the current mark for any values', () => {
    const editor = new Editor({
      extensions: [
        Document,
        Paragraph,
        Text,
        TextStyle,
        FontFamily,
      ],
      content: `
        <p><span style="font-family: Inter; color: red">text</span></p>
      `,
    })

    expect(editor.isActive('textStyle', { fontFamily: /.*/ })).to.eq(true)
  })

  it('should check the current mark for correct values (multiple)', () => {
    const editor = new Editor({
      extensions: [
        Document,
        Paragraph,
        Text,
        TextStyle,
        FontFamily,
        Color,
      ],
      content: `
        <p><span style="font-family: Inter; color: red">text</span></p>
      `,
    })

    expect(editor.isActive('textStyle', { fontFamily: 'Inter', color: 'red' })).to.eq(true)
  })

  it('should check the current mark for false values (multiple)', () => {
    const editor = new Editor({
      extensions: [
        Document,
        Paragraph,
        Text,
        TextStyle,
        FontFamily,
        Color,
      ],
      content: `
        <p><span style="font-family: Inter; color: red">text</span></p>
      `,
    })

    expect(editor.isActive('textStyle', { fontFamily: 'Inter', color: 'green' })).to.eq(false)
  })
})
