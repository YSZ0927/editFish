---
description: Configure a helpful placeholder to fill the emptyness.
icon: ghost-line
---

# Placeholder
[![Version](https://img.shields.io/npm/v/@editfish/extension-placeholder.svg?label=version)](https://www.npmjs.com/package/@editfish/extension-placeholder)
[![Downloads](https://img.shields.io/npm/dm/@editfish/extension-placeholder.svg)](https://npmcharts.com/compare/@editfish/extension-placeholder?minimal=true)

This extension provides placeholder support. Give your users an idea what they should write with a tiny hint. There is a handful of things to customize, if you feel like it.

## Installation
```bash
npm install @editfish/extension-placeholder
```

## Settings

### emptyEditorClass
The added CSS class if the editor is empty.

Default: `'is-editor-empty'`

```js
Placeholder.configure({
  emptyEditorClass: 'is-editor-empty',
})
```

### emptyNodeClass
The added CSS class if the node is empty.

Default: `'is-empty'`

```js
Placeholder.configure({
  emptyNodeClass: 'my-custom-is-empty-class',
})
```

### placeholder
The placeholder text added as `data-placeholder` attribute.

Default: `'Write something …'`

```js
Placeholder.configure({
  placeholder: 'My Custom Placeholder',
})
```

You can even use a function to add placeholder depending on the node:

```js
Placeholder.configure({
  placeholder: ({ node }) => {
    if (node.type.name === 'heading') {
      return 'What’s the title?'
    }

    return 'Can you add some further context?'
  },
})
```

### showOnlyWhenEditable
Show decorations only when editor is editable.

Default: `true`

```js
Placeholder.configure({
  showOnlyWhenEditable: false,
})
```

### showOnlyCurrent
Show decorations only in currently selected node.

Default: `true`

```js
Placeholder.configure({
  showOnlyCurrent: false
})
```

### includeChildren
Show decorations also for nested nodes.

Default: `false`

```js
Placeholder.configure({
  includeChildren: true
})
```


## Source code
[packages/extension-placeholder/](https://github.com/ueberdosis/tiptap/blob/main/packages/extension-placeholder/)

## Usage
https://embed.tiptap.dev/preview/Extensions/Placeholder
