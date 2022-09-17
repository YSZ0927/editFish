import './styles.scss'

import Document from '@editfish/extension-document'
import Dropcursor from '@editfish/extension-dropcursor'
import Image from '@editfish/extension-image'
import Paragraph from '@editfish/extension-paragraph'
import Text from '@editfish/extension-text'
import { EditorContent, useEditor } from '@editfish/react'
import React from 'react'

export default () => {
  const editor = useEditor({
    extensions: [Document, Paragraph, Text, Image, Dropcursor],
    content: `
        <p>Try to drag around the image. While you drag, the editor should show a decoration under your cursor. The so called dropcursor.</p>
        <img src="https://source.unsplash.com/8xznAGy4HcY/800x400" />
      `,
  })

  return <EditorContent editor={editor} />
}
