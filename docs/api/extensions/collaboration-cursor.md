---
description: See other user’s cursors and their name while they type.
icon: account-pin-circle-line
---

# CollaborationCursor
[![Version](https://img.shields.io/npm/v/@editfish/extension-collaboration-cursor.svg?label=version)](https://www.npmjs.com/package/@editfish/extension-collaboration-cursor)
[![Downloads](https://img.shields.io/npm/dm/@editfish/extension-collaboration-cursor.svg)](https://npmcharts.com/compare/@editfish/extension-collaboration-cursor?minimal=true)

This extension adds information about all connected users (like their name and a specified color), their current cursor position and their text selection (if there’s one).

Open this page in multiple browser windows to test it.

:::pro Pro Extension
We kindly ask you to [sponsor our work](/sponsor) when using this extension in production.
:::

## Installation
```bash
npm install @editfish/extension-collaboration-cursor
```

This extension requires the [`Collaboration`](/api/extensions/collaboration) extension.

## Settings

### provider
A Y.js network provider, for example a [y-websocket](https://github.com/yjs/y-websocket) instance.

Default: `null`

### user
Attributes of the current user, assumes to have a name and a color, but can be used with any attribute. The values are synced with all other connected clients.

Default: `{ user: null, color: null }`

### render
A render function for the cursor, look at [the extension source code](https://github.com/ueberdosis/tiptap/blob/main/packages/extension-collaboration-cursor/) for an example.

## Commands

### updateUser()
Pass an object with updated attributes of the current user. It expects a `name` and a `color`, but you can add additional fields, too.

```js
editor.commands.updateUser({
  name: 'John Doe',
  color: '#000000',
  avatar: 'https://unavatar.io/github/ueberdosis',
})
```

## Source code
[packages/extension-collaboration-cursor/](https://github.com/ueberdosis/tiptap/blob/main/packages/extension-collaboration-cursor/)

## Usage
:::warning Public
The content of this editor is shared with other users.
:::
https://embed.tiptap.dev/preview/Extensions/CollaborationCursor?hideSource
https://embed.tiptap.dev/preview/Extensions/CollaborationCursor
