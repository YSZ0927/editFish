import './styles.scss'

import Collaboration from '@editfish/extension-collaboration'
import CollaborationCursor from '@editfish/extension-collaboration-cursor'
import Document from '@editfish/extension-document'
import Paragraph from '@editfish/extension-paragraph'
import Placeholder from '@editfish/extension-placeholder'
import Text from '@editfish/extension-text'
import { EditorContent, useEditor } from '@editfish/react'
import React from 'react'
import { WebrtcProvider } from 'y-webrtc'
import * as Y from 'yjs'

const ydoc = new Y.Doc()
const provider = new WebrtcProvider('tiptap-collaboration-cursor-extension', ydoc)

export default () => {
  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      Collaboration.configure({
        document: ydoc,
      }),
      CollaborationCursor.configure({
        provider,
        user: {
          name: 'Cyndi Lauper',
          color: '#f783ac',
        },
      }),
      Placeholder.configure({
        placeholder: 'Write something … It’ll be shared with everyone else looking at this example.',
      }),
    ],
  })

  return <EditorContent editor={editor} />
}
