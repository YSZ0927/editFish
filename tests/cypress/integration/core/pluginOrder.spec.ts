/// <reference types="cypress" />

import { Editor, Extension } from '@editfish/core'
import Document from '@editfish/extension-document'
import Paragraph from '@editfish/extension-paragraph'
import Text from '@editfish/extension-text'

describe('pluginOrder', () => {
  it('should run keyboard shortcuts in correct order', () => {
    const order: number[] = []

    cy.window().then(({ document }) => {
      const element = document.createElement('div')

      document.body.append(element)

      const editor = new Editor({
        element,
        extensions: [
          Document,
          Paragraph,
          Text,
          Extension.create({
            priority: 1000,
            addKeyboardShortcuts() {
              return {
                a: () => {
                  order.push(1)

                  return false
                },
              }
            },
          }),
          Extension.create({
            addKeyboardShortcuts() {
              return {
                a: () => {
                  order.push(3)

                  return false
                },
              }
            },
          }),
          Extension.create({
            addKeyboardShortcuts() {
              return {
                a: () => {
                  order.push(2)

                  return false
                },
              }
            },
          }),
        ],
      })

      cy.get('.ProseMirror')
        .type('a')
        .wait(100).then(() => {
          expect(order).to.deep.eq([1, 2, 3])

          editor.destroy()
        })
    })
  })
})
