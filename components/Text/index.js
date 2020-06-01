import React, { useMemo } from 'react'
import { observer } from 'startupjs'
import { Span, H1, H2, H3, H4 } from '@startupjs/ui'
import './index.styl'

export default observer(function Text ({ type, white, red, gray, darkGray, text, center, bold, justify, children }) {
  const Component = useMemo(() => {
    switch (type) {
      case 'H1':
        return H1
      case 'H2':
        return H2
      case 'H3':
        return H3
      case 'H4':
        return H4
      default:
        return Span
    }
  }, [type])
console.info("__white__", white)
  return pug`
    Component.root(styleName={white, red})
      =children
  `
})
