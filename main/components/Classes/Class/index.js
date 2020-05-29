import React from 'react'
import { observer } from 'startupjs'
import { H1, Div, Span, H4, H5 } from '@startupjs/ui'
import './index.styl'

export default observer(function Class ({ number, title, author, date, text, votes, comments, first }) {
  console.info("__number__", number)
  return pug`
    Div.root(styleName={first})
      Div.number
        H5=number
      Div.item
        Div.title
          H5.titleText=title
        Div.author
          Span.authorText=author
          Span.dateText=date
        Div.text
          Span.contentText=text
        Div.meta
          
  `
})
