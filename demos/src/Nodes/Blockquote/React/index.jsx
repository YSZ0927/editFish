import './styles.scss'

import Blockquote from '@editfish/extension-blockquote'
import Document from '@editfish/extension-document'
import Paragraph from '@editfish/extension-paragraph'
import Text from '@editfish/extension-text'
import { EditorContent, useEditor } from '@editfish/react'
import React from 'react'

export default () => {
  const editor = useEditor({
    extensions: [Document, Paragraph, Text, Blockquote],
    content: `
      <blockquote>
        Nothing is impossible, the word itself says “I’m possible!”
      </blockquote>
      <p>Audrey Hepburn</p>
    `,
  })

  if (!editor) {
    return null
  }

  return (
    <div>
      <button
        onClick={() => editor
          .chain()
          .focus()
          .toggleBlockquote()
          .run()
        }
        className={editor.isActive('blockquote') ? 'is-active' : ''}
      >
        toggleBlockquote
      </button>
      <button
        onClick={() => editor
          .chain()
          .focus()
          .setBlockquote()
          .run()
        }
        disabled={!editor.can().setBlockquote()}
      >
        setBlockquote
      </button>
      <button
        onClick={() => editor
          .chain()
          .focus()
          .unsetBlockquote()
          .run()
        }
        disabled={!editor.can().unsetBlockquote()}
      >
        unsetBlockquote
      </button>

      <EditorContent editor={editor} />
    </div>
  )
}
