<template>
  <div v-if="editor">
    <button
      @click="
        editor
          .chain()
          .focus()
          .undo()
          .run()
      "
      :disabled="!editor.can().undo()"
    >
      undo
    </button>
    <button
      @click="
        editor
          .chain()
          .focus()
          .redo()
          .run()
      "
      :disabled="!editor.can().redo()"
    >
      redo
    </button>

    <editor-content :editor="editor" />
  </div>
</template>

<script>
import Document from '@editfish/extension-document'
import History from '@editfish/extension-history'
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
      extensions: [Document, Paragraph, Text, History],
      content: `
        <p>
          With the History extension the Editor will keep track of your changes. And if you think you made a mistake, you can redo your changes. Try it out, change the content and hit the undo button!
        </p>
        <p>
          And yes, you can also use a keyboard shortcut to undo changes (Control/Cmd Z) or redo changes (Control/Cmd Shift Z).
        </p>
      `,
    })
  },

  beforeUnmount() {
    this.editor.destroy()
  },
}
</script>
