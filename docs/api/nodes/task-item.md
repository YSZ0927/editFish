---
description: The actually task, without it the task list would be nothing.
icon: task-line
---

# TaskItem

[![Version](https://img.shields.io/npm/v/@editfish/extension-task-item.svg?label=version)](https://www.npmjs.com/package/@editfish/extension-task-item)
[![Downloads](https://img.shields.io/npm/dm/@editfish/extension-task-item.svg)](https://npmcharts.com/compare/@editfish/extension-task-item?minimal=true)

This extension renders a task item list element, which is a `<li>` tag with a `data-type` attribute set to `taskItem`. It also renders a checkbox inside the list element, which updates a `checked` attribute.

This extension doesn’t require any JavaScript framework, it’s based on Vanilla JavaScript.

## Installation

```bash
npm install @editfish/extension-task-list @editfish/extension-task-item
```

This extension requires the [`TaskList`](/api/nodes/task-list) node.

## Settings

### HTMLAttributes

Custom HTML attributes that should be added to the rendered HTML tag.

```js
TaskItem.configure({
  HTMLAttributes: {
    class: 'my-custom-class',
  },
})
```

### nested

Whether the task items are allowed to be nested within each other.

```js
TaskItem.configure({
  nested: true,
})
```

### onReadOnlyChecked

A handler for when the task item is checked or unchecked while the editor is set to `readOnly`.

If this is not supplied, the task items are immutable while the editor is `readOnly`.

If this function returns false, the check state will be preserved (`readOnly`).

```js
TaskItem.configure({
  onReadOnlyChecked: (node, checked) => {
    // do something
  },
})
```

## Keyboard shortcuts

| Command         | Windows/Linux      | macOS              |
| --------------- | ------------------ | ------------------ |
| splitListItem() | `Enter`            | `Enter`            |
| sinkListItem()  | `Tab`              | `Tab`              |
| liftListItem()  | `Shift`&nbsp;`Tab` | `Shift`&nbsp;`Tab` |

## Source code

[packages/extension-task-item/](https://github.com/ueberdosis/tiptap/blob/main/packages/extension-task-item/)

## Usage

https://embed.tiptap.dev/preview/Nodes/TaskItem
