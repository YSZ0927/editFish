import Document from '@editfish/extension-document'
import Paragraph from '@editfish/extension-paragraph'
import Text from '@editfish/extension-text'
import { EditorContent, useEditor } from '@editfish/react'
import React from 'react'

export default () => {
  const editor = useEditor({
    extensions: [Document, Paragraph, Text],
    content: `
        <p>The Document extension is required. Though, you can write your own implementation, e. g. to give it custom name.</p>
      `,
  })

  if (!editor) {
    return null
  }

  return <EditorContent editor={editor} />
}
