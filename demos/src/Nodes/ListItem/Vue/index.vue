<template>
  <div v-if="editor">
    <button
      @click="
        editor
          .chain()
          .focus()
          .toggleBulletList()
          .run()
      "
      :class="{ 'is-active': editor.isActive('bulletList') }"
    >
      toggleBulletList
    </button>
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
import BulletList from '@editfish/extension-bullet-list'
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
      extensions: [Document, Paragraph, Text, BulletList, OrderedList, ListItem],
      content: `
        <p>
          I like lists. Let’s add one:
        </p>
        <ul>
          <li>This is a bullet list.</li>
          <li>And it has three list items.</li>
          <li>Here is the third one.</li>
        </ul>
        <p>
          Do you want to see one more? I bet! Here is another one:
        </p>
        <ol>
          <li>That’s a different list, actually it’s an ordered list.</li>
          <li>It also has three list items.</li>
          <li>And all of them are numbered.</li>
        </ol>
        <p>
          Lists would be nothing without list items.
        </p>
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
