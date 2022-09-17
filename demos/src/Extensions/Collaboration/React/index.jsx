import './styles.scss'

import Collaboration from '@editfish/extension-collaboration'
import Document from '@editfish/extension-document'
import Paragraph from '@editfish/extension-paragraph'
import Placeholder from '@editfish/extension-placeholder'
import Text from '@editfish/extension-text'
import { EditorContent, useEditor } from '@editfish/react'
import React from 'react'
import { WebrtcProvider } from 'y-webrtc'
import * as Y from 'yjs'

const ydoc = new Y.Doc()

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const provider = new WebrtcProvider('tiptap-collaboration-extension', ydoc)

export default () => {
  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      Collaboration.configure({
        document: ydoc,
      }),
      Placeholder.configure({
        placeholder: 'Write something … It’ll be shared with everyone else looking at this example.',
      }),
    ],
  })

  return <EditorContent editor={editor} />
}
