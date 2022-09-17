<template>
  <editor-content :editor="editor" />
</template>

<script>
import StarterKit from '@editfish/starter-kit'
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
      content: '<p>Hello World! 🌎️</p>',
      extensions: [StarterKit],
    })
  },

  beforeUnmount() {
    this.editor.destroy()
  },
}
</script>
