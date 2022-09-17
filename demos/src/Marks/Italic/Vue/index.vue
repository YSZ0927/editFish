<template>
  <div v-if="editor">
    <button
      @click="
        editor
          .chain()
          .focus()
          .toggleItalic()
          .run()
      "
      :class="{ 'is-active': editor.isActive('italic') }"
    >
      toggleItalic
    </button>
    <button
      @click="
        editor
          .chain()
          .focus()
          .setItalic()
          .run()
      "
      :disabled="editor.isActive('italic')"
    >
      setItalic
    </button>
    <button
      @click="
        editor
          .chain()
          .focus()
          .unsetItalic()
          .run()
      "
      :disabled="!editor.isActive('italic')"
    >
      unsetItalic
    </button>

    <editor-content :editor="editor" />
  </div>
</template>

<script>
import Document from '@editfish/extension-document'
import Italic from '@editfish/extension-italic'
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
      extensions: [Document, Paragraph, Text, Italic],
      content: `
        <p>This isn’t italic.</p>
        <p><em>This is italic.</em></p>
        <p><i>And this.</i></p>
        <p style="font-style: italic">This as well.</p>
      `,
    })
  },

  beforeUnmount() {
    this.editor.destroy()
  },
}
</script>
