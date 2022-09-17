<template>
  <editor-content :editor="editor" />
</template>

<script>
import Collaboration from '@editfish/extension-collaboration'
import Document from '@editfish/extension-document'
import Paragraph from '@editfish/extension-paragraph'
import Placeholder from '@editfish/extension-placeholder'
import Text from '@editfish/extension-text'
import { Editor, EditorContent } from '@editfish/vue-3'
import { WebrtcProvider } from 'y-webrtc'
import * as Y from 'yjs'

export default {
  components: {
    EditorContent,
  },

  data() {
    return {
      editor: null,
      provider: null,
    }
  },

  mounted() {
    const ydoc = new Y.Doc()

    this.provider = new WebrtcProvider('tiptap-collaboration-extension', ydoc)

    this.editor = new Editor({
      extensions: [
        Document,
        Paragraph,
        Text,
        Collaboration.configure({
          document: ydoc,
        }),
        Placeholder.configure({
          placeholder:
            'Write something … It’ll be shared with everyone else looking at this example.',
        }),
      ],
    })
  },

  beforeUnmount() {
    this.editor.destroy()
    this.provider.destroy()
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

/* Placeholder (at the top) */
.ProseMirror p.is-editor-empty:first-child::before {
  content: attr(data-placeholder);
  float: left;
  color: #adb5bd;
  pointer-events: none;
  height: 0;
}
</style>
