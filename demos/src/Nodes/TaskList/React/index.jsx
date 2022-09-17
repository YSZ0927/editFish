import './styles.scss'

import Document from '@editfish/extension-document'
import Paragraph from '@editfish/extension-paragraph'
import TaskItem from '@editfish/extension-task-item'
import TaskList from '@editfish/extension-task-list'
import Text from '@editfish/extension-text'
import { EditorContent, useEditor } from '@editfish/react'
import React from 'react'

export default () => {
  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      TaskList,
      TaskItem.configure({
        nested: true,
      }),
    ],
    content: `
        <ul data-type="taskList">
          <li data-type="taskItem" data-checked="true">A list item</li>
          <li data-type="taskItem" data-checked="false">And another one</li>
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
          .toggleTaskList()
          .run()
        }
        className={editor.isActive('taskList') ? 'is-active' : ''}
      >
        toggleTaskList
      </button>
      <button
        onClick={() => editor
          .chain()
          .focus()
          .splitListItem('taskItem')
          .run()
        }
        disabled={!editor.can().splitListItem('taskItem')}
      >
        splitListItem
      </button>
      <button
        onClick={() => editor
          .chain()
          .focus()
          .sinkListItem('taskItem')
          .run()
        }
        disabled={!editor.can().sinkListItem('taskItem')}
      >
        sinkListItem
      </button>
      <button
        onClick={() => editor
          .chain()
          .focus()
          .liftListItem('taskItem')
          .run()
        }
        disabled={!editor.can().liftListItem('taskItem')}
      >
        liftListItem
      </button>

      <EditorContent editor={editor} />
    </>
  )
}
