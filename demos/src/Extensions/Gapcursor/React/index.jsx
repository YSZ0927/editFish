import './styles.scss'

import Document from '@editfish/extension-document'
import Gapcursor from '@editfish/extension-gapcursor'
import Image from '@editfish/extension-image'
import Paragraph from '@editfish/extension-paragraph'
import Text from '@editfish/extension-text'
import { EditorContent, useEditor } from '@editfish/react'
import React from 'react'

export default () => {
  const editor = useEditor({
    extensions: [Document, Paragraph, Text, Image, Gapcursor],
    content: `
        <p>Try to move the cursor after the image with your arrow keys! You should see a horizontal blinking cursor below the image. This is the gapcursor.</p>
        <img src="https://source.unsplash.com/8xznAGy4HcY/800x400" />
      `,
  })

  return <EditorContent editor={editor} />
}
