import Bold from '@editfish/extension-bold'
import Document from '@editfish/extension-document'
import Paragraph from '@editfish/extension-paragraph'
import Text from '@editfish/extension-text'
import { EditorContent, useEditor } from '@editfish/react'
import React from 'react'

export default () => {
  const editor = useEditor({
    extensions: [Document, Paragraph, Text, Bold],
    content: `
        <p>This isn’t bold.</p>
        <p><strong>This is bold.</strong></p>
        <p><b>And this.</b></p>
        <p style="font-weight: bold">This as well.</p>
        <p style="font-weight: bolder">Oh, and this!</p>
        <p style="font-weight: 500">Cool, isn’t it!?</p>
        <p style="font-weight: 999">Up to font weight 999!!!</p>
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
          .toggleBold()
          .run()
        }
        className={editor.isActive('bold') ? 'is-active' : ''}
      >
        toggleBold
      </button>
      <button
        onClick={() => editor
          .chain()
          .focus()
          .setBold()
          .run()
        }
        disabled={editor.isActive('bold')}
      >
        setBold
      </button>
      <button
        onClick={() => editor
          .chain()
          .focus()
          .unsetBold()
          .run()
        }
        disabled={!editor.isActive('bold')}
      >
        unsetBold
      </button>

      <EditorContent editor={editor} />
    </>
  )
}
