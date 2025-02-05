---
description: Link it, link it good, link it real good (and don’t forget the href).
icon: link
---

# Link
[![Version](https://img.shields.io/npm/v/@editfish/extension-link.svg?label=version)](https://www.npmjs.com/package/@editfish/extension-link)
[![Downloads](https://img.shields.io/npm/dm/@editfish/extension-link.svg)](https://npmcharts.com/compare/@editfish/extension-link?minimal=true)

The Link extension adds support for `<a>` tags to the editor. The extension is headless too, there is no actual UI to add, modify or delete links. The usage example below uses the native JavaScript prompt to show you how that could work.

In a real world application, you would probably add a more sophisticated user interface.

Pasted URLs will be transformed to links automatically.

## Installation
```bash
npm install @editfish/extension-link
```

## Settings

### protocols
Additional custom protocols you would like to be recognized as links.

Default: `[]`

```js
Link.configure({
  protocols: ['ftp', 'mailto'],
})
```

### autolink
If enabled, it adds links as you type.

Default: `true`

```js
Link.configure({
  autolink: false,
})
```

### openOnClick
If enabled, links will be opened on click.

Default: `true`

```js
Link.configure({
  openOnClick: false,
})
```

### linkOnPaste
Adds a link to the current selection if the pasted content only contains an url.

Default: `true`

```js
Link.configure({
  linkOnPaste: false,
})
```

### HTMLAttributes
Custom HTML attributes that should be added to the rendered HTML tag.

```js
Link.configure({
  HTMLAttributes: {
    class: 'my-custom-class',
  },
})
```

### validate
A function that validates every autolinked link. If it exists, it will be called with the link href as argument. If it returns `false`, the link will be removed.

Can be used to set rules for example excluding or including certain domains, tlds, etc.

```js
// only autolink urls with a protocol
Link.configure({
  validate: href => /^https?:\/\//.test(href),
})
```

## Commands

### setLink()
Links the selected text.

```js
editor.commands.setLink({ href: 'https://example.com' })
editor.commands.setLink({ href: 'https://example.com', target: '_blank' })
```

### toggleLink()
Adds or removes a link from the selected text.

```js
editor.commands.toggleLink({ href: 'https://example.com' })
editor.commands.toggleLink({ href: 'https://example.com', target: '_blank' })
```

### unsetLink()
Removes a link.

```js
editor.commands.unsetLink()
```

## Keyboard shortcuts
:::warning Doesn’t have a keyboard shortcut
This extension doesn’t bind a specific keyboard shortcut. You would probably open your custom UI on `Mod-k` though.
:::

## Get the current value
Did you know that you can use [`getAttributes`](/api/editor#get-attributes) to find out which attributes, for example which href, is currently set? Don’t confuse it with a [command](/api/commands) (which changes the state), it’s just a method. Here is how that could look like:

```js
this.editor.getAttributes('link').href
```

## Source code
[packages/extension-link/](https://github.com/ueberdosis/tiptap/blob/main/packages/extension-link/)

## Usage
https://embed.tiptap.dev/preview/Marks/Link
