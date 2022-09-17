<template>
  <div v-if="editor">
    <button
      @click="
        editor
          .chain()
          .focus()
          .toggleHeading({ level: 1 })
          .run()
      "
      :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
    >
      H1
    </button>
    <button
      @click="
        editor
          .chain()
          .focus()
          .toggleHeading({ level: 2 })
          .run()
      "
      :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }"
    >
      H2
    </button>
    <button
      @click="
        editor
          .chain()
          .focus()
          .toggleHeading({ level: 3 })
          .run()
      "
      :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }"
    >
      H3
    </button>

    <editor-content :editor="editor" />
  </div>
</template>

<script>
import Document from '@editfish/extension-document'
import Heading from '@editfish/extension-heading'
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
      extensions: [
        Document,
        Paragraph,
        Text,
        Heading.configure({
          levels: [1, 2, 3],
        }),
      ],
      content: `
        <h1>This is a 1st level heading</h1>
        <h2>This is a 2nd level heading</h2>
        <h3>This is a 3rd level heading</h3>
        <h4>This 4th level heading will be converted to a paragraph, because levels are configured to be only 1, 2 or 3.</h4>
      `,
    })
  },

  beforeUnmount() {
    this.editor.destroy()
  },
}
</script>
