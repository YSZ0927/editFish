import './styles.scss'

import Document from '@editfish/extension-document'
import HorizontalRule from '@editfish/extension-horizontal-rule'
import Paragraph from '@editfish/extension-paragraph'
import Text from '@editfish/extension-text'
import { EditorContent, useEditor } from '@editfish/react'
import React from 'react'

export default () => {
  const editor = useEditor({
    extensions: [Document, Paragraph, Text, HorizontalRule],
    content: `
        <p>This is a paragraph.</p>
        <hr>
        <p>And this is another paragraph.</p>
        <hr>
        <p>But between those paragraphs are horizontal rules.</p>
      `,
  })

  if (!editor) {
    return null
  }

  return (
    <>
      <button
        onClick={() => editor
          .chain()
          .focus()
          .setHorizontalRule()
          .run()
        }
      >
        setHorizontalRule
      </button>

      <EditorContent editor={editor} />
    </>
  )
}
