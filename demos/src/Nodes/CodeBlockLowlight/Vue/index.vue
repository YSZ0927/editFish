<template>
  <div v-if="editor">
    <button
      @click="
        editor
          .chain()
          .focus()
          .toggleCodeBlock()
          .run()
      "
      :class="{ 'is-active': editor.isActive('codeBlock') }"
    >
      toggleCodeBlock
    </button>
    <button
      @click="
        editor
          .chain()
          .focus()
          .setCodeBlock()
          .run()
      "
      :disabled="editor.isActive('codeBlock')"
    >
      setCodeBlock
    </button>

    <editor-content :editor="editor" />
  </div>
</template>

<script>
import CodeBlockLowlight from '@editfish/extension-code-block-lowlight'
import Document from '@editfish/extension-document'
import Paragraph from '@editfish/extension-paragraph'
import Text from '@editfish/extension-text'
import { Editor, EditorContent } from '@editfish/vue-3'
import css from 'highlight.js/lib/languages/css'
import js from 'highlight.js/lib/languages/javascript'
import ts from 'highlight.js/lib/languages/typescript'
import html from 'highlight.js/lib/languages/xml'
// load all highlight.js languages
import { lowlight } from 'lowlight'

lowlight.registerLanguage('html', html)
lowlight.registerLanguage('css', css)
lowlight.registerLanguage('js', js)
lowlight.registerLanguage('ts', ts)

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
        CodeBlockLowlight.configure({
          lowlight,
        }),
      ],
      content: `
        <p>
          That’s a boring paragraph followed by a fenced code block:
        </p>
        <pre><code class="language-javascript">for (var i=1; i <= 20; i++)
{
  if (i % 15 == 0)
    console.log("FizzBuzz");
  else if (i % 3 == 0)
    console.log("Fizz");
  else if (i % 5 == 0)
    console.log("Buzz");
  else
    console.log(i);
}</code></pre>
        <p>
          Press Command/Ctrl + Enter to leave the fenced code block and continue typing in boring paragraphs.
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

  pre {
    background: #0d0d0d;
    color: #fff;
    font-family: "JetBrainsMono", monospace;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;

    code {
      color: inherit;
      padding: 0;
      background: none;
      font-size: 0.8rem;
    }

    .hljs-comment,
    .hljs-quote {
      color: #616161;
    }

    .hljs-variable,
    .hljs-template-variable,
    .hljs-attribute,
    .hljs-tag,
    .hljs-name,
    .hljs-regexp,
    .hljs-link,
    .hljs-name,
    .hljs-selector-id,
    .hljs-selector-class {
      color: #f98181;
    }

    .hljs-number,
    .hljs-meta,
    .hljs-built_in,
    .hljs-builtin-name,
    .hljs-literal,
    .hljs-type,
    .hljs-params {
      color: #fbbc88;
    }

    .hljs-string,
    .hljs-symbol,
    .hljs-bullet {
      color: #b9f18d;
    }

    .hljs-title,
    .hljs-section {
      color: #faf594;
    }

    .hljs-keyword,
    .hljs-selector-tag {
      color: #70cff8;
    }

    .hljs-emphasis {
      font-style: italic;
    }

    .hljs-strong {
      font-weight: 700;
    }
  }
}
</style>
