---
description: Keep track of where the cursor is, and let the user know you know it.
icon: focus-line
---

# Focus
[![Version](https://img.shields.io/npm/v/@editfish/extension-focus.svg?label=version)](https://www.npmjs.com/package/@editfish/extension-focus)
[![Downloads](https://img.shields.io/npm/dm/@editfish/extension-focus.svg)](https://npmcharts.com/compare/@editfish/extension-focus?minimal=true)

The Focus extension adds a CSS class to focused nodes. By default it adds `.has-focus`, but you can change that.

Note that it’s only a class, the styling is totally up to you. The usage example below has some CSS for that class.

## Installation
```bash
npm install @editfish/extension-focus
```

## Settings

### className
The class that is applied to the focused element.

Default: `'has-focus'`

```js
Focus.configure({
  className: 'focus',
})
```

### mode
Apply the class to `'all'`, the `'shallowest'` or the `'deepest'` node.

Default: `'all'`

```js
Focus.configure({
  mode: 'deepest',
})
```

## Source code
[packages/extension-focus/](https://github.com/ueberdosis/tiptap/blob/main/packages/extension-focus/)

## Usage
https://embed.tiptap.dev/preview/Extensions/Focus
