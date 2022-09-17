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
        <p>The Text extension is required, at least if you want to have text in your text editor and that’s very likely.</p>
      `,
    })
  },

  beforeUnmount() {
    this.editor.destroy()
  },
}
</script>
