<template>
  <div v-if="editor">
    <button
      @click="
        editor
          .chain()
          .focus()
          .setHorizontalRule()
          .run()
      "
    >
      setHorizontalRule
    </button>

    <editor-content :editor="editor" />
  </div>
</template>

<script>
import Document from '@editfish/extension-document'
import HorizontalRule from '@editfish/extension-horizontal-rule'
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
      extensions: [Document, Paragraph, Text, HorizontalRule],
      content: `
        <p>This is a paragraph.</p>
        <hr>
        <p>And this is another paragraph.</p>
        <hr>
        <p>But between those paragraphs are horizontal rules.</p>
      `,
    })
  },

  beforeUnmount() {
    this.editor.destroy()
  },
}
</script>

<style lang="scss">
hr.ProseMirror-selectednode {
  border-top: 1px solid #68cef8;
}
</style>
