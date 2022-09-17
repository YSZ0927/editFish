import './styles.scss'

import CharacterCount from '@editfish/extension-character-count'
import Document from '@editfish/extension-document'
import Paragraph from '@editfish/extension-paragraph'
import Text from '@editfish/extension-text'
import { EditorContent, useEditor } from '@editfish/react'
import React from 'react'

const limit = 280

export default () => {
  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      CharacterCount.configure({
        limit,
      }),
    ],
    content: `
        <p>
          Let‘s make sure people can’t write more than 280 characters. I bet you could build one of the biggest social networks on that idea.
        </p>
      `,
  })

  if (!editor) {
    return null
  }

  return (
    <div>
      <EditorContent editor={editor} />

      <div className="character-count">
        {editor.storage.characterCount.characters()}/{limit} characters
        <br />
        {editor.storage.characterCount.words()} words
      </div>
    </div>
  )
}
