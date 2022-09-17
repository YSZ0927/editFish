import Document from '@editfish/extension-document'
import Paragraph from '@editfish/extension-paragraph'
import Text from '@editfish/extension-text'
import TextStyle from '@editfish/extension-text-style'
import { EditorContent, useEditor } from '@editfish/react'
import React from 'react'

export default () => {
  const editor = useEditor({
    extensions: [Document, Paragraph, Text, TextStyle],
    content: `
        <p><span>This has a &lt;span&gt; tag without a style attribute, so it’s thrown away.</span></p>
        <p><span style="">But this one is wrapped in a &lt;span&gt; tag with an inline style attribute, so it’s kept - even if it’s empty for now.</span></p>
      `,
  })

  if (!editor) {
    return null
  }

  return <EditorContent editor={editor} />
}
