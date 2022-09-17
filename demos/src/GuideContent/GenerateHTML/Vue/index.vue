<template>
  <pre><code>{{ output }}</code></pre>
</template>

<script>
// Option 1: Browser + server-side
import Bold from '@editfish/extension-bold'
// Option 2: Browser-only (lightweight)
// import { generateHTML } from '@editfish/core'
import Document from '@editfish/extension-document'
import Paragraph from '@editfish/extension-paragraph'
import Text from '@editfish/extension-text'
import { generateHTML } from '@editfish/html'

const json = {
  type: 'doc',
  content: [
    {
      type: 'paragraph',
      content: [
        {
          type: 'text',
          text: 'Example ',
        },
        {
          type: 'text',
          marks: [
            {
              type: 'bold',
            },
          ],
          text: 'Text',
        },
      ],
    },
  ],
}

export default {
  computed: {
    output() {
      return generateHTML(json, [
        Document,
        Paragraph,
        Text,
        Bold,
        // other extensions …
      ])
    },
  },
}
</script>
