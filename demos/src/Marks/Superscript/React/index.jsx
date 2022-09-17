import Document from '@editfish/extension-document'
import Paragraph from '@editfish/extension-paragraph'
import Superscript from '@editfish/extension-superscript'
import Text from '@editfish/extension-text'
import { EditorContent, useEditor } from '@editfish/react'
import React from 'react'

export default () => {
  const editor = useEditor({
    extensions: [Document, Paragraph, Text, Superscript],
    content: `
        <p>This is regular text.</p>
        <p><sup>This is superscript.</sup></p>
        <p><span style="vertical-align: super">And this.</span></p>
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
          .toggleSuperscript()
          .run()
        }
        className={editor.isActive('superscript') ? 'is-active' : ''}
      >
        toggleSuperscript
      </button>
      <button
        onClick={() => editor
          .chain()
          .focus()
          .setSuperscript()
          .run()
        }
        disabled={editor.isActive('superscript')}
      >
        setSuperscript
      </button>
      <button
        onClick={() => editor
          .chain()
          .focus()
          .unsetSuperscript()
          .run()
        }
        disabled={!editor.isActive('superscript')}
      >
        unsetSuperscript
      </button>

      <EditorContent editor={editor} />
    </>
  )
}
