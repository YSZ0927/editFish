<template>
  <div v-if="editor">
    <button
      @click="
        editor
          .chain()
          .focus()
          .toggleOrderedList()
          .run()
      "
      :class="{ 'is-active': editor.isActive('orderedList') }"
    >
      toggleOrderedList
    </button>
    <button
      @click="
        editor
          .chain()
          .focus()
          .splitListItem('listItem')
          .run()
      "
      :disabled="!editor.can().splitListItem('listItem')"
    >
      splitListItem
    </button>
    <button
      @click="
        editor
          .chain()
          .focus()
          .sinkListItem('listItem')
          .run()
      "
      :disabled="!editor.can().sinkListItem('listItem')"
    >
      sinkListItem
    </button>
    <button
      @click="
        editor
          .chain()
          .focus()
          .liftListItem('listItem')
          .run()
      "
      :disabled="!editor.can().liftListItem('listItem')"
    >
      liftListItem
    </button>

    <editor-content :editor="editor" />
  </div>
</template>

<script>
import Document from '@editfish/extension-document'
import ListItem from '@editfish/extension-list-item'
import OrderedList from '@editfish/extension-ordered-list'
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
      extensions: [Document, Paragraph, Text, OrderedList, ListItem],
      content: `
        <ol>
          <li>A list item</li>
          <li>And another one</li>
        </ol>

        <ol start="5">
          <li>This item starts at 5</li>
          <li>And another one</li>
        </ol>
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

  ul,
  ol {
    padding: 0 1rem;
  }
}
</style>
