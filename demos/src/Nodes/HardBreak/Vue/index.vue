<template>
  <div v-if="editor">
    <button
      @click="
        editor
          .chain()
          .focus()
          .setHardBreak()
          .run()
      "
    >
      setHardBreak
    </button>

    <editor-content :editor="editor" />
  </div>
</template>

<script>
import Document from '@editfish/extension-document'
import HardBreak from '@editfish/extension-hard-break'
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
      extensions: [Document, Paragraph, Text, HardBreak],
      content: `
        <p>
          This<br>
          is<br>
          a<br>
          single<br>
          paragraph<br>
          with<br>
          line<br>
          breaks.
        </p>
      `,
    })
  },

  beforeUnmount() {
    this.editor.destroy()
  },
}
</script>
