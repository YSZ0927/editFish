<template>
  <div v-if="editor">
    <button
      @click="
        editor
          .chain()
          .focus()
          .toggleSuperscript()
          .run()
      "
      :class="{ 'is-active': editor.isActive('superscript') }"
    >
      toggleSuperscript
    </button>
    <button
      @click="
        editor
          .chain()
          .focus()
          .setSuperscript()
          .run()
      "
      :disabled="editor.isActive('superscript')"
    >
      setSuperscript
    </button>
    <button
      @click="
        editor
          .chain()
          .focus()
          .unsetSuperscript()
          .run()
      "
      :disabled="!editor.isActive('superscript')"
    >
      unsetSuperscript
    </button>

    <editor-content :editor="editor" />
  </div>
</template>

<script>
import Document from '@editfish/extension-document'
import Paragraph from '@editfish/extension-paragraph'
import Superscript from '@editfish/extension-superscript'
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
      extensions: [Document, Paragraph, Text, Superscript],
      content: `
        <p>This is regular text.</p>
        <p><sup>This is superscript.</sup></p>
        <p><span style="vertical-align: super">And this.</span></p>
      `,
    })
  },

  beforeUnmount() {
    this.editor.destroy()
  },
}
</script>
