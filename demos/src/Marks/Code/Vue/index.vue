<template>
  <div v-if="editor">
    <button
      @click="
        editor
          .chain()
          .focus()
          .toggleCode()
          .run()
      "
      :class="{ 'is-active': editor.isActive('code') }"
    >
      toggleCode
    </button>
    <button
      @click="
        editor
          .chain()
          .focus()
          .setCode()
          .run()
      "
      :disabled="editor.isActive('code')"
    >
      setCode
    </button>
    <button
      @click="
        editor
          .chain()
          .focus()
          .unsetCode()
          .run()
      "
      :disabled="!editor.isActive('code')"
    >
      unsetCode
    </button>

    <editor-content :editor="editor" />
  </div>
</template>

<script>
import Code from '@editfish/extension-code'
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
      extensions: [Document, Paragraph, Text, Code],
      content: `
        <p>This isn’t code.</p>
        <p><code>This is code.</code></p>
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

  code {
    font-size: 0.9rem;
    padding: 0.25em;
    border-radius: 0.25em;
    background-color: rgba(#616161, 0.1);
    color: #616161;
    box-decoration-break: clone;
  }
}
</style>
