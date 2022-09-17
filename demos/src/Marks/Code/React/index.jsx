import './styles.scss'

import Code from '@editfish/extension-code'
import Document from '@editfish/extension-document'
import Paragraph from '@editfish/extension-paragraph'
import Text from '@editfish/extension-text'
import { EditorContent, useEditor } from '@editfish/react'
import React from 'react'

export default () => {
  const editor = useEditor({
    extensions: [Document, Paragraph, Text, Code],
    content: `
        <p>This isn’t code.</p>
        <p><code>This is code.</code></p>
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
          .toggleCode()
          .run()
        }
        className={editor.isActive('code') ? 'is-active' : ''}
      >
        toggleCode
      </button>
      <button
        onClick={() => editor
          .chain()
          .focus()
          .setCode()
          .run()
        }
        disabled={editor.isActive('code')}
      >
        setCode
      </button>
      <button
        onClick={() => editor
          .chain()
          .focus()
          .unsetCode()
          .run()
        }
        disabled={!editor.isActive('code')}
      >
        unsetCode
      </button>

      <EditorContent editor={editor} />
    </>
  )
}
