import Document from '@editfish/extension-document'
import Italic from '@editfish/extension-italic'
import Paragraph from '@editfish/extension-paragraph'
import Text from '@editfish/extension-text'
import { EditorContent, useEditor } from '@editfish/react'
import React from 'react'

export default () => {
  const editor = useEditor({
    extensions: [Document, Paragraph, Text, Italic],
    content: `
        <p>This isn’t italic.</p>
        <p><em>This is italic.</em></p>
        <p><i>And this.</i></p>
        <p style="font-style: italic">This as well.</p>
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
          .toggleItalic()
          .run()
        }
        className={editor.isActive('italic') ? 'is-active' : ''}
      >
        toggleItalic
      </button>
      <button
        onClick={() => editor
          .chain()
          .focus()
          .setItalic()
          .run()
        }
        disabled={editor.isActive('italic')}
      >
        setItalic
      </button>
      <button
        onClick={() => editor
          .chain()
          .focus()
          .unsetItalic()
          .run()
        }
        disabled={!editor.isActive('italic')}
      >
        unsetItalic
      </button>

      <EditorContent editor={editor} />
    </>
  )
}
