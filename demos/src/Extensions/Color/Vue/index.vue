<template>
  <div v-if="editor">
    <input
      type="color"
      @input="
        editor
          .chain()
          .focus()
          .setColor($event.target.value)
          .run()
      "
      :value="editor.getAttributes('textStyle').color"
    />
    <button
      @click="
        editor
          .chain()
          .focus()
          .setColor('#958DF1')
          .run()
      "
      :class="{ 'is-active': editor.isActive('textStyle', { color: '#958DF1' }) }"
    >
      purple
    </button>
    <button
      @click="
        editor
          .chain()
          .focus()
          .setColor('#F98181')
          .run()
      "
      :class="{ 'is-active': editor.isActive('textStyle', { color: '#F98181' }) }"
    >
      red
    </button>
    <button
      @click="
        editor
          .chain()
          .focus()
          .setColor('#FBBC88')
          .run()
      "
      :class="{ 'is-active': editor.isActive('textStyle', { color: '#FBBC88' }) }"
    >
      orange
    </button>
    <button
      @click="
        editor
          .chain()
          .focus()
          .setColor('#FAF594')
          .run()
      "
      :class="{ 'is-active': editor.isActive('textStyle', { color: '#FAF594' }) }"
    >
      yellow
    </button>
    <button
      @click="
        editor
          .chain()
          .focus()
          .setColor('#70CFF8')
          .run()
      "
      :class="{ 'is-active': editor.isActive('textStyle', { color: '#70CFF8' }) }"
    >
      blue
    </button>
    <button
      @click="
        editor
          .chain()
          .focus()
          .setColor('#94FADB')
          .run()
      "
      :class="{ 'is-active': editor.isActive('textStyle', { color: '#94FADB' }) }"
    >
      teal
    </button>
    <button
      @click="
        editor
          .chain()
          .focus()
          .setColor('#B9F18D')
          .run()
      "
      :class="{ 'is-active': editor.isActive('textStyle', { color: '#B9F18D' }) }"
    >
      green
    </button>
    <button
      @click="
        editor
          .chain()
          .focus()
          .unsetColor()
          .run()
      "
    >
      unsetColor
    </button>

    <editor-content :editor="editor" />
  </div>
</template>

<script>
import { Color } from '@editfish/extension-color'
import Document from '@editfish/extension-document'
import Paragraph from '@editfish/extension-paragraph'
import Text from '@editfish/extension-text'
import TextStyle from '@editfish/extension-text-style'
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
      extensions: [Document, Paragraph, Text, TextStyle, Color],
      content: `
        <p><span style="color: #958DF1">Oh, for some reason that’s purple.</span></p>
      `,
    })
  },

  beforeUnmount() {
    this.editor.destroy()
  },
}
</script>
