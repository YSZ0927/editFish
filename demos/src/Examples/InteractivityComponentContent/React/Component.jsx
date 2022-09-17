import { NodeViewContent, NodeViewWrapper } from '@editfish/react'
import React from 'react'

export default () => {
  return (
    <NodeViewWrapper className="react-component-with-content">
      <span className="label" contentEditable={false}>
        React Component
      </span>

      <NodeViewContent className="content" />
    </NodeViewWrapper>
  )
}
