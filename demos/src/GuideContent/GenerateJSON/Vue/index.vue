<template>
  <pre><code>{{ output }}</code></pre>
</template>

<script>
// Option 1: Browser + server-side
import Bold from '@editfish/extension-bold'
// Option 2: Browser-only (lightweight)
// import { generateJSON } from '@editfish/core'
import Document from '@editfish/extension-document'
import Paragraph from '@editfish/extension-paragraph'
import Text from '@editfish/extension-text'
import { generateJSON } from '@editfish/html'

const html = '<p>Example <strong>Text</strong></p>'

export default {
  computed: {
    output() {
      return generateJSON(html, [
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
