<template>
  <editor-content :editor="editor" />
</template>

<script>
import Document from '@editfish/extension-document'
import Paragraph from '@editfish/extension-paragraph'
import TaskItem from '@editfish/extension-task-item'
import TaskList from '@editfish/extension-task-list'
import Text from '@editfish/extension-text'
import { Editor, EditorContent } from '@editfish/vue-3'

const CustomDocument = Document.extend({
  content: 'taskList',
})

const CustomTaskItem = TaskItem.extend({
  content: 'inline*',
})

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
      extensions: [CustomDocument, Paragraph, Text, TaskList, CustomTaskItem],
      content: `
        <ul data-type="taskList">
          <li data-type="taskItem" data-checked="true">flour</li>
          <li data-type="taskItem" data-checked="true">baking powder</li>
          <li data-type="taskItem" data-checked="true">salt</li>
          <li data-type="taskItem" data-checked="false">sugar</li>
          <li data-type="taskItem" data-checked="false">milk</li>
          <li data-type="taskItem" data-checked="false">eggs</li>
          <li data-type="taskItem" data-checked="false">butter</li>
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

  li {
    display: flex;
    align-items: center;

    > label {
      flex: 0 0 auto;
      margin-right: 0.5rem;
      user-select: none;
    }

    > div {
      flex: 1 1 auto;
    }
  }

  input[type="checkbox"] {
    cursor: pointer;
  }
}
</style>
