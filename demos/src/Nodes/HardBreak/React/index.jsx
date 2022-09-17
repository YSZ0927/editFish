import Document from '@editfish/extension-document'
import HardBreak from '@editfish/extension-hard-break'
import Paragraph from '@editfish/extension-paragraph'
import Text from '@editfish/extension-text'
import { EditorContent, useEditor } from '@editfish/react'
import React from 'react'

export default () => {
  const editor = useEditor({
    extensions: [Document, Paragraph, Text, HardBreak],
    content: `
        <p>
          This<br>
          is<br>
          a<br>
          single<br>
          paragraph<br>
          with<br>
          line<br>
          breaks.
        </p>
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
          .setHardBreak()
          .run()
        }
      >
        setHardBreak
      </button>
      <EditorContent editor={editor} />
    </>
  )
}
