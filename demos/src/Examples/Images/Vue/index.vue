<template>
  <div v-if="editor">
    <button @click="addImage">add image from URL</button>
  </div>
  <editor-content :editor="editor" />
</template>

<script>
import Document from '@editfish/extension-document'
import Dropcursor from '@editfish/extension-dropcursor'
import Image from '@editfish/extension-image'
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

  methods: {
    addImage() {
      const url = window.prompt('URL')

      if (url) {
        this.editor
          .chain()
          .focus()
          .setImage({ src: url })
          .run()
      }
    },
  },

  mounted() {
    this.editor = new Editor({
      extensions: [Document, Paragraph, Text, Image, Dropcursor],
      content: `
        <p>This is a basic example of implementing images. Drag to re-order.</p>
        <img src="https://source.unsplash.com/8xznAGy4HcY/800x400" />
        <img src="https://source.unsplash.com/K9QHL52rE2k/800x400" />
      `,
    })
  },

  beforeUnmount() {
    this.editor.destroy()
  },
}
</script>

<style lang="scss">
/* Basic editor styles */
.ProseMirror {
  > * + * {
    margin-top: 0.75em;
  }

  img {
    max-width: 100%;
    height: auto;

    &.ProseMirror-selectednode {
      outline: 3px solid #68cef8;
    }
  }
}
</style>
