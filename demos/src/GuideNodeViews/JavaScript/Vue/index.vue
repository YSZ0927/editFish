<template>
  <editor-content :editor="editor" />
</template>

<script>
import StarterKit from '@editfish/starter-kit'
import { Editor, EditorContent } from '@editfish/vue-3'

import NodeView from './Extension.js'

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
      extensions: [StarterKit, NodeView],
      content: `
        <p>
          This is still the text editor you’re used to, but enriched with node views.
        </p>
        <node-view></node-view>
        <p>
          Did you see that? That’s a JavaScript node view. We are really living in the future.
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
}

.node-view {
  background: #faf594;
  border: 3px solid #0d0d0d;
  border-radius: 0.5rem;
  margin: 1rem 0;
  position: relative;
}

.label {
  margin-left: 1rem;
  background-color: #0d0d0d;
  font-size: 0.6rem;
  letter-spacing: 1px;
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;
  position: absolute;
  top: 0;
  padding: 0.25rem 0.75rem;
  border-radius: 0 0 0.5rem 0.5rem;
}

.content {
  margin-top: 1.5rem;
  padding: 1rem;
}
</style>
