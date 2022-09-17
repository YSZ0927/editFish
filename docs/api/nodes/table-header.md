---
description: "Tables don’t require a header, but let’s be honest: They look better with it."
icon: t-box-line
---

# TableHeader
[![Version](https://img.shields.io/npm/v/@editfish/extension-table-header.svg?label=version)](https://www.npmjs.com/package/@editfish/extension-table-header)
[![Downloads](https://img.shields.io/npm/dm/@editfish/extension-table-header.svg)](https://npmcharts.com/compare/@editfish/extension-table-header?minimal=true)

Table headers are optional. But come on, you want them, don’t you? If you don’t want them, update the `content` attribute of the [`TableRow`](/api/nodes/table-row) extension, like this:

```js
// Table rows without table headers
TableRow.extend({
  content: 'tableCell*',
})
```

This is the default, which allows table headers:

```js
// Table rows with table headers (default)
TableRow.extend({
  content: '(tableCell | tableHeader)*',
})
```

## Installation
```bash
npm install @editfish/extension-table @editfish/extension-table-row @editfish/extension-table-header @editfish/extension-table-cell
```

This extension requires the [`Table`](/api/nodes/table), [`TableRow`](/api/nodes/table-row) and [`TableCell`](/api/nodes/table-cell) nodes.

## Source code
[packages/extension-table-header/](https://github.com/ueberdosis/tiptap/blob/main/packages/extension-table-header/)

## Usage
https://embed.tiptap.dev/preview/Nodes/Table
