import Document from '@editfish/extension-document'
import Heading from '@editfish/extension-heading'
import Paragraph from '@editfish/extension-paragraph'
import Text from '@editfish/extension-text'
import TextAlign from '@editfish/extension-text-align'
import { EditorContent, useEditor } from '@editfish/react'
import React from 'react'

export default () => {
  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      Heading,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
    ],
    content: `
        <h2>Heading</h2>
        <p style="text-align: center">first paragraph</p>
        <p style="text-align: right">second paragraph</p>
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
          .setTextAlign('left')
          .run()
        }
        className={editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''}
      >
        left
      </button>
      <button
        onClick={() => editor
          .chain()
          .focus()
          .setTextAlign('center')
          .run()
        }
        className={editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''}
      >
        center
      </button>
      <button
        onClick={() => editor
          .chain()
          .focus()
          .setTextAlign('right')
          .run()
        }
        className={editor.isActive({ textAlign: 'right' }) ? 'is-active' : ''}
      >
        right
      </button>
      <button
        onClick={() => editor
          .chain()
          .focus()
          .setTextAlign('justify')
          .run()
        }
        className={editor.isActive({ textAlign: 'justify' }) ? 'is-active' : ''}
      >
        justify
      </button>
      <button
        onClick={() => editor
          .chain()
          .focus()
          .unsetTextAlign()
          .run()
        }
      >
        unsetTextAlign
      </button>
      <EditorContent editor={editor} />
    </div>
  )
}
