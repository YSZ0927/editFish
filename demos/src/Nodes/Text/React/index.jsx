import Document from '@editfish/extension-document'
import Paragraph from '@editfish/extension-paragraph'
import Text from '@editfish/extension-text'
import { EditorContent, useEditor } from '@editfish/react'
import React from 'react'

export default () => {
  const editor = useEditor({
    extensions: [Document, Paragraph, Text],
    content: `
        <p>The Text extension is required, at least if you want to have text in your text editor and that’s very likely.</p>
      `,
  })

  if (!editor) {
    return null
  }

  return <EditorContent editor={editor} />
}
