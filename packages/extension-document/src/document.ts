import { Node } from '@editfish/core'

export const Document = Node.create({
  name: 'doc',
  topNode: true,
  content: 'block+',
})
