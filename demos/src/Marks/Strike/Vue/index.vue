<template>
  <div v-if="editor">
    <button
      @click="
        editor
          .chain()
          .focus()
          .toggleStrike()
          .run()
      "
      :class="{ 'is-active': editor.isActive('strike') }"
    >
      toggleStrike
    </button>
    <button
      @click="
        editor
          .chain()
          .focus()
          .setStrike()
          .run()
      "
      :disabled="editor.isActive('strike')"
    >
      setStrike
    </button>
    <button
      @click="
        editor
          .chain()
          .focus()
          .unsetStrike()
          .run()
      "
      :disabled="!editor.isActive('strike')"
    >
      unsetStrike
    </button>

    <editor-content :editor="editor" />
  </div>
</template>

<script>
import Document from '@editfish/extension-document'
import Paragraph from '@editfish/extension-paragraph'
import Strike from '@editfish/extension-strike'
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
      extensions: [Document, Paragraph, Text, Strike],
      content: `
          <p>This isn’t striked through.</s></p>
          <p><s>But that’s striked through.</s></p>
          <p><del>And this.</del></p>
          <p><strike>This too.</strike></p>
          <p style="text-decoration: line-through">This as well.</p>
        `,
    })
  },

  beforeUnmount() {
    this.editor.destroy()
  },
}
</script>
