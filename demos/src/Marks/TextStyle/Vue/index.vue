<template>
  <div v-if="editor">
    <editor-content :editor="editor" />
  </div>
</template>

<script>
import Document from '@editfish/extension-document'
import Paragraph from '@editfish/extension-paragraph'
import Text from '@editfish/extension-text'
import TextStyle from '@editfish/extension-text-style'
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
      extensions: [Document, Paragraph, Text, TextStyle],
      content: `
        <p><span>This has a &lt;span&gt; tag without a style attribute, so it’s thrown away.</span></p>
        <p><span style="">But this one is wrapped in a &lt;span&gt; tag with an inline style attribute, so it’s kept - even if it’s empty for now.</span></p>
      `,
    })
  },

  beforeUnmount() {
    this.editor.destroy()
  },
}
</script>
