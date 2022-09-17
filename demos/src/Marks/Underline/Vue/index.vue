<template>
  <div v-if="editor">
    <button
      @click="
        editor
          .chain()
          .focus()
          .toggleUnderline()
          .run()
      "
      :class="{ 'is-active': editor.isActive('underline') }"
    >
      toggleUnderline
    </button>
    <button
      @click="
        editor
          .chain()
          .focus()
          .setUnderline()
          .run()
      "
      :disabled="editor.isActive('underline')"
    >
      setUnderline
    </button>
    <button
      @click="
        editor
          .chain()
          .focus()
          .unsetUnderline()
          .run()
      "
      :disabled="!editor.isActive('underline')"
    >
      unsetUnderline
    </button>

    <editor-content :editor="editor" />
  </div>
</template>

<script>
import Document from '@editfish/extension-document'
import Paragraph from '@editfish/extension-paragraph'
import Text from '@editfish/extension-text'
import Underline from '@editfish/extension-underline'
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
      extensions: [Document, Paragraph, Text, Underline],
      content: `
        <p>There is no underline here.</p>
        <p><u>This is underlined though.</u></p>
        <p style="text-decoration: underline">And this as well.</p>
      `,
    })
  },

  beforeUnmount() {
    this.editor.destroy()
  },
}
</script>
