---
description: Add an image (but a beautiful one), when words aren’t enough.
icon: image-line
---

# Image
[![Version](https://img.shields.io/npm/v/@editfish/extension-image.svg?label=version)](https://www.npmjs.com/package/@editfish/extension-image)
[![Downloads](https://img.shields.io/npm/dm/@editfish/extension-image.svg)](https://npmcharts.com/compare/@editfish/extension-image?minimal=true)

Use this extension to render `<img>` HTML tags. By default, those images are blocks. If you want to render images in line with text  set the `inline` option to `true`.

:::warning Restrictions
This extension does only the rendering of images. It doesn’t upload images to your server, that’s a whole different story.
:::

## Installation
```bash
npm install @editfish/extension-image
```

## Settings

### inline
Renders the image node inline, for example in a paragraph tag: `<p><img src="spacer.gif"></p>`. By default images are on the same level as paragraphs.

It totally depends on what kind of editing experience you’d like to have, but can be useful if you (for example) migrate from Quill to Tiptap.

Default: `false`

```js
Image.configure({
  inline: true,
})
```

### allowBase64
Allow images to be parsed as base64 strings `<img src="data:image/jpg;base64...">`.

Default: `false`

```js
Image.configure({
  allowBase64: true,
})
```

### HTMLAttributes
Custom HTML attributes that should be added to the rendered HTML tag.

```js
Image.configure({
  HTMLAttributes: {
    class: 'my-custom-class',
  },
})
```

## Commands

### setImage()
Makes the current node an image.

```js
editor.commands.setImage({ src: 'https://example.com/foobar.png' })
editor.commands.setImage({ src: 'https://example.com/foobar.png', alt: 'A boring example image', title: 'An example' })
```

## Source code
[packages/extension-image/](https://github.com/ueberdosis/tiptap/blob/main/packages/extension-image/)

## Usage
https://embed.tiptap.dev/preview/Nodes/Image
