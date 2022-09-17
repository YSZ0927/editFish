<template>
  <div v-if="editor">
    <button
      @click="
        editor
          .chain()
          .focus()
          .toggleBold()
          .run()
      "
      :class="{ 'is-active': editor.isActive('bold') }"
    >
      toggleBold
    </button>
    <button
      @click="
        editor
          .chain()
          .focus()
          .setBold()
          .run()
      "
      :disabled="editor.isActive('bold')"
    >
      setBold
    </button>
    <button
      @click="
        editor
          .chain()
          .focus()
          .unsetBold()
          .run()
      "
      :disabled="!editor.isActive('bold')"
    >
      unsetBold
    </button>

    <editor-content :editor="editor" />
  </div>
</template>

<script>
import Bold from '@editfish/extension-bold'
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
      extensions: [Document, Paragraph, Text, Bold],
      content: `
        <p>This isn’t bold.</p>
        <p><strong>This is bold.</strong></p>
        <p><b>And this.</b></p>
        <p style="font-weight: bold">This as well.</p>
        <p style="font-weight: bolder">Oh, and this!</p>
        <p style="font-weight: 500">Cool, isn’t it!?</p>
        <p style="font-weight: 999">Up to font weight 999!!!</p>
      `,
    })
  },

  beforeUnmount() {
    this.editor.destroy()
  },
}
</script>
