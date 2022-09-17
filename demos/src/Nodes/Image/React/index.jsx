import './styles.scss'

import Document from '@editfish/extension-document'
import Dropcursor from '@editfish/extension-dropcursor'
import Image from '@editfish/extension-image'
import Paragraph from '@editfish/extension-paragraph'
import Text from '@editfish/extension-text'
import { EditorContent, useEditor } from '@editfish/react'
import React, { useCallback } from 'react'

export default () => {
  const editor = useEditor({
    extensions: [Document, Paragraph, Text, Image, Dropcursor],
    content: `
        <p>This is a basic example of implementing images. Drag to re-order.</p>
        <img src="https://source.unsplash.com/8xznAGy4HcY/800x400" />
        <img src="https://source.unsplash.com/K9QHL52rE2k/800x400" />
      `,
  })

  const addImage = useCallback(() => {
    const url = window.prompt('URL')

    if (url) {
      editor
        .chain()
        .focus()
        .setImage({ src: url })
        .run()
    }
  }, [editor])

  if (!editor) {
    return null
  }

  return (
    <div>
      <button onClick={addImage}>setImage</button>
      <EditorContent editor={editor} />
    </div>
  )
}
