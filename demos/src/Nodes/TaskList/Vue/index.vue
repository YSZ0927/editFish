<template>
  <div v-if="editor">
    <button
      @click="
        editor
          .chain()
          .focus()
          .toggleTaskList()
          .run()
      "
      :class="{ 'is-active': editor.isActive('taskList') }"
    >
      toggleTaskList
    </button>
    <button
      @click="
        editor
          .chain()
          .focus()
          .splitListItem('taskItem')
          .run()
      "
      :disabled="!editor.can().splitListItem('taskItem')"
    >
      splitListItem
    </button>
    <button
      @click="
        editor
          .chain()
          .focus()
          .sinkListItem('taskItem')
          .run()
      "
      :disabled="!editor.can().sinkListItem('taskItem')"
    >
      sinkListItem
    </button>
    <button
      @click="
        editor
          .chain()
          .focus()
          .liftListItem('taskItem')
          .run()
      "
      :disabled="!editor.can().liftListItem('taskItem')"
    >
      liftListItem
    </button>

    <editor-content :editor="editor" />
  </div>
</template>

<script>
import Document from '@editfish/extension-document'
import Paragraph from '@editfish/extension-paragraph'
import TaskItem from '@editfish/extension-task-item'
import TaskList from '@editfish/extension-task-list'
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
        TaskList,
        TaskItem.configure({
          nested: true,
        }),
      ],
      content: `
        <ul data-type="taskList">
          <li data-type="taskItem" data-checked="true">A list item</li>
          <li data-type="taskItem" data-checked="false">And another one</li>
        </ul>
      `,
    })
  },

  beforeUnmount() {
    this.editor.destroy()
  },
}
</script>

<style lang="scss">
ul[data-type="taskList"] {
  list-style: none;
  padding: 0;

  p {
    margin: 0;
  }

  li {
    display: flex;

    > label {
      flex: 0 0 auto;
      margin-right: 0.5rem;
      user-select: none;
    }

    > div {
      flex: 1 1 auto;
    }
  }
}
</style>
