import './styles.scss'

import Document from '@editfish/extension-document'
import Gapcursor from '@editfish/extension-gapcursor'
import Paragraph from '@editfish/extension-paragraph'
import Table from '@editfish/extension-table'
import TableCell from '@editfish/extension-table-cell'
import TableHeader from '@editfish/extension-table-header'
import TableRow from '@editfish/extension-table-row'
import Text from '@editfish/extension-text'
import { EditorContent, useEditor } from '@editfish/react'
import React from 'react'

export default () => {
  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      Gapcursor,
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
    ],
    content: `
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th colspan="3">Description</th>
            </tr>
            <tr>
              <td>Cyndi Lauper</td>
              <td>singer</td>
              <td>songwriter</td>
              <td>actress</td>
            </tr>
          </tbody>
        </table>
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
          .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
          .run()
        }
      >
        insertTable
      </button>
      <button
        onClick={() => editor
          .chain()
          .focus()
          .addColumnBefore()
          .run()
        }
      >
        addColumnBefore
      </button>
      <button
        onClick={() => editor
          .chain()
          .focus()
          .addColumnAfter()
          .run()
        }
      >
        addColumnAfter
      </button>
      <button
        onClick={() => editor
          .chain()
          .focus()
          .deleteColumn()
          .run()
        }
      >
        deleteColumn
      </button>
      <button
        onClick={() => editor
          .chain()
          .focus()
          .addRowBefore()
          .run()
        }
      >
        addRowBefore
      </button>
      <button
        onClick={() => editor
          .chain()
          .focus()
          .addRowAfter()
          .run()
        }
      >
        addRowAfter
      </button>
      <button
        onClick={() => editor
          .chain()
          .focus()
          .deleteRow()
          .run()
        }
      >
        deleteRow
      </button>
      <button
        onClick={() => editor
          .chain()
          .focus()
          .deleteTable()
          .run()
        }
      >
        deleteTable
      </button>
      <button
        onClick={() => editor
          .chain()
          .focus()
          .mergeCells()
          .run()
        }
      >
        mergeCells
      </button>
      <button
        onClick={() => editor
          .chain()
          .focus()
          .splitCell()
          .run()
        }
      >
        splitCell
      </button>
      <button
        onClick={() => editor
          .chain()
          .focus()
          .toggleHeaderColumn()
          .run()
        }
      >
        toggleHeaderColumn
      </button>
      <button
        onClick={() => editor
          .chain()
          .focus()
          .toggleHeaderRow()
          .run()
        }
      >
        toggleHeaderRow
      </button>
      <button
        onClick={() => editor
          .chain()
          .focus()
          .toggleHeaderCell()
          .run()
        }
      >
        toggleHeaderCell
      </button>
      <button
        onClick={() => editor
          .chain()
          .focus()
          .mergeOrSplit()
          .run()
        }
      >
        mergeOrSplit
      </button>
      <button
        onClick={() => editor
          .chain()
          .focus()
          .setCellAttribute('colspan', 2)
          .run()
        }
      >
        setCellAttribute
      </button>
      <button
        onClick={() => editor
          .chain()
          .focus()
          .fixTables()
          .run()
        }
      >
        fixTables
      </button>
      <button
        onClick={() => editor
          .chain()
          .focus()
          .goToNextCell()
          .run()
        }
      >
        goToNextCell
      </button>
      <button
        onClick={() => editor
          .chain()
          .focus()
          .goToPreviousCell()
          .run()
        }
      >
        goToPreviousCell
      </button>

      <EditorContent editor={editor} />
    </>
  )
}
