<template>
  <div v-if="editor">
    <button
      @click="
        editor
          .chain()
          .focus()
          .toggleHighlight()
          .run()
      "
      :class="{ 'is-active': editor.isActive('highlight') }"
    >
      toggleHighlight
    </button>
    <button
      @click="
        editor
          .chain()
          .focus()
          .toggleHighlight({ color: '#ffc078' })
          .run()
      "
      :class="{ 'is-active': editor.isActive('highlight', { color: '#ffc078' }) }"
    >
      orange
    </button>
    <button
      @click="
        editor
          .chain()
          .focus()
          .toggleHighlight({ color: '#8ce99a' })
          .run()
      "
      :class="{ 'is-active': editor.isActive('highlight', { color: '#8ce99a' }) }"
    >
      green
    </button>
    <button
      @click="
        editor
          .chain()
          .focus()
          .toggleHighlight({ color: '#74c0fc' })
          .run()
      "
      :class="{ 'is-active': editor.isActive('highlight', { color: '#74c0fc' }) }"
    >
      blue
    </button>
    <button
      @click="
        editor
          .chain()
          .focus()
          .toggleHighlight({ color: '#b197fc' })
          .run()
      "
      :class="{ 'is-active': editor.isActive('highlight', { color: '#b197fc' }) }"
    >
      purple
    </button>
    <button
      @click="
        editor
          .chain()
          .focus()
          .toggleHighlight({ color: 'red' })
          .run()
      "
      :class="{ 'is-active': editor.isActive('highlight', { color: 'red' }) }"
    >
      red ('red')
    </button>
    <button
      @click="
        editor
          .chain()
          .focus()
          .toggleHighlight({ color: '#ffa8a8' })
          .run()
      "
      :class="{ 'is-active': editor.isActive('highlight', { color: '#ffa8a8' }) }"
    >
      red (#ffa8a8)
    </button>
    <button
      @click="
        editor
          .chain()
          .focus()
          .unsetHighlight()
          .run()
      "
      :disabled="!editor.isActive('highlight')"
    >
      unsetHighlight
    </button>

    <editor-content :editor="editor" />
  </div>
</template>

<script>
import Document from '@editfish/extension-document'
import Highlight from '@editfish/extension-highlight'
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
      extensions: [Document, Paragraph, Text, Highlight.configure({ multicolor: true })],
      content: `
        <p>This isn’t highlighted.</s></p>
        <p><mark>But that one is.</mark></p>
        <p><mark style="background-color: red;">And this is highlighted too, but in a different color.</mark></p>
        <p><mark data-color="#ffa8a8">And this one has a data attribute.</mark></p>
      `,
    })
  },

  beforeUnmount() {
    this.editor.destroy()
  },
}
</script>

<style lang="scss">
mark {
  background-color: #ffe066;
  padding: 0.125em 0;
  border-radius: 0.25em;
  box-decoration-break: clone;
}
</style>
