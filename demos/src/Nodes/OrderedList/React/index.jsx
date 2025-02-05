import './styles.scss'

import Document from '@editfish/extension-document'
import ListItem from '@editfish/extension-list-item'
import OrderedList from '@editfish/extension-ordered-list'
import Paragraph from '@editfish/extension-paragraph'
import Text from '@editfish/extension-text'
import { EditorContent, useEditor } from '@editfish/react'
import React from 'react'

export default () => {
  const editor = useEditor({
    extensions: [Document, Paragraph, Text, OrderedList, ListItem],
    content: `
        <ol>
          <li>A list item</li>
          <li>And another one</li>
        </ol>

        <ol start="5">
          <li>This item starts at 5</li>
          <li>And another one</li>
        </ol>
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
          .toggleOrderedList()
          .run()
        }
        className={editor.isActive('orderedList') ? 'is-active' : ''}
      >
        toggleOrderedList
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
