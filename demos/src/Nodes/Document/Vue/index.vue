<template>
  <div v-if="editor">
    <editor-content :editor="editor" />
  </div>
</template>

<script>
import Document from '@editfish/extension-document'
import Paragraph from '@editfish/extension-paragraph'
import Text from '@editfish/extension-text'
import { Editor, EditorContent } from '@editfish/vue-3'

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
      extensions: [Document, Paragraph, Text],
      content: `
        <p>The Document extension is required. Though, you can write your own implementation, e. g. to give it custom name.</p>
      `,
    })
  },

  beforeUnmount() {
    this.editor.destroy()
  },
}
</script>
