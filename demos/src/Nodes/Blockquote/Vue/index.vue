<template>
  <div v-if="editor">
    <button
      @click="
        editor
          .chain()
          .focus()
          .toggleBlockquote()
          .run()
      "
      :class="{ 'is-active': editor.isActive('blockquote') }"
    >
      toggleBlockquote
    </button>
    <button
      @click="
        editor
          .chain()
          .focus()
          .setBlockquote()
          .run()
      "
      :disabled="!editor.can().setBlockquote()"
    >
      setBlockquote
    </button>
    <button
      @click="
        editor
          .chain()
          .focus()
          .unsetBlockquote()
          .run()
      "
      :disabled="!editor.can().unsetBlockquote()"
    >
      unsetBlockquote
    </button>

    <editor-content :editor="editor" />
  </div>
</template>

<script>
import Blockquote from '@editfish/extension-blockquote'
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
      extensions: [Document, Paragraph, Text, Blockquote],
      content: `
          <blockquote>
            Nothing is impossible, the word itself says “I’m possible!”
          </blockquote>
          <p>Audrey Hepburn</p>
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

  blockquote {
    padding-left: 1rem;
    border-left: 3px solid rgba(#0d0d0d, 0.1);
  }
}
</style>
