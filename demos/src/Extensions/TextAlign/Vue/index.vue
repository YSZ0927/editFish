<template>
  <div v-if="editor">
    <button
      @click="
        editor
          .chain()
          .focus()
          .setTextAlign('left')
          .run()
      "
      :class="{ 'is-active': editor.isActive({ textAlign: 'left' }) }"
    >
      left
    </button>
    <button
      @click="
        editor
          .chain()
          .focus()
          .setTextAlign('center')
          .run()
      "
      :class="{ 'is-active': editor.isActive({ textAlign: 'center' }) }"
    >
      center
    </button>
    <button
      @click="
        editor
          .chain()
          .focus()
          .setTextAlign('right')
          .run()
      "
      :class="{ 'is-active': editor.isActive({ textAlign: 'right' }) }"
    >
      right
    </button>
    <button
      @click="
        editor
          .chain()
          .focus()
          .setTextAlign('justify')
          .run()
      "
      :class="{ 'is-active': editor.isActive({ textAlign: 'justify' }) }"
    >
      justify
    </button>
    <button
      @click="
        editor
          .chain()
          .focus()
          .unsetTextAlign()
          .run()
      "
    >
      unsetTextAlign
    </button>
    <editor-content :editor="editor" />
  </div>
</template>

<script>
import Document from '@editfish/extension-document'
import Heading from '@editfish/extension-heading'
import Paragraph from '@editfish/extension-paragraph'
import Text from '@editfish/extension-text'
import TextAlign from '@editfish/extension-text-align'
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
      extensions: [
        Document,
        Paragraph,
        Text,
        Heading,
        TextAlign.configure({
          types: ['heading', 'paragraph'],
        }),
      ],
      content: `
        <h2>Heading</h2>
        <p style="text-align: center">first paragraph</p>
        <p style="text-align: right">second paragraph</p>
      `,
    })
  },

  beforeUnmount() {
    this.editor.destroy()
  },
}
</script>
