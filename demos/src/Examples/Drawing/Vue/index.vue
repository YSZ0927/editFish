<template>
  <editor-content :editor="editor" />
</template>

<script>
import Document from '@editfish/extension-document'
import Text from '@editfish/extension-text'
import { Editor, EditorContent } from '@editfish/vue-3'

import Paper from './Paper'

export default {
  components: {
    EditorContent,
  },

  data() {
    return {
      editor: null,
    }
  },

  mounted() {
    this.editor = new Editor({
      extensions: [
        Document.extend({
          content: 'paper',
        }),
        Text,
        Paper,
      ],
    })
  },

  beforeUnmount() {
    this.editor.destroy()
  },
}
</script>
