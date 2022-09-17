import Bold from '@editfish/extension-bold'
// Option 2: Browser-only (lightweight)
// import { generateJSON } from '@editfish/core'
import Document from '@editfish/extension-document'
import Paragraph from '@editfish/extension-paragraph'
import Text from '@editfish/extension-text'
// Option 1: Browser + server-side
import { generateJSON } from '@editfish/html'
import React, { useMemo } from 'react'

const html = '<p>Example <strong>Text</strong></p>'

export default () => {
  const output = useMemo(() => {
    return generateJSON(html, [
      Document,
      Paragraph,
      Text,
      Bold,
      // other extensions …
    ])
  }, [html])

  return (
    <pre>
      <code>{JSON.stringify(output, null, 2)}</code>
    </pre>
  )
}
