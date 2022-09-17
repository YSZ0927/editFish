import './styles.scss'

import BulletList from '@editfish/extension-bullet-list'
import Document from '@editfish/extension-document'
import ListItem from '@editfish/extension-list-item'
import Paragraph from '@editfish/extension-paragraph'
import Text from '@editfish/extension-text'
import { EditorContent, useEditor } from '@editfish/react'
import React from 'react'

export default () => {
  const editor = useEditor({
    extensions: [Document, Paragraph, Text, BulletList, ListItem],
    content: `
        <ul>
          <li>A list item</li>
          <li>And another one</li>
        </ul>
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
          .toggleBulletList()
          .run()
        }
        className={editor.isActive('bulletList') ? 'is-active' : ''}
      >
        toggleBulletList
      </button>
      <button
        onClick={() => editor
          .chain()
          .focus()
          .splitListItem('listItem')
          .run()
        }
        disabled={!editor.can().splitListItem('listItem')}
      >
        splitListItem
      </button>
      <button
        onClick={() => editor
          .chain()
          .focus()
          .sinkListItem('listItem')
          .run()
        }
        disabled={!editor.can().sinkListItem('listItem')}
      >
        sinkListItem
      </button>
      <button
        onClick={() => editor
          .chain()
          .focus()
          .liftListItem('listItem')
          .run()
        }
        disabled={!editor.can().liftListItem('listItem')}
      >
        liftListItem
      </button>

      <EditorContent editor={editor} />
    </>
  )
}
