import React from 'react'
import { observer } from 'startupjs'
import { Image } from 'react-native'
import { Comments } from 'main/components'
import { H1, Div, Span, H4, H5, Button, Icon } from '@startupjs/ui'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
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
          Span.red(bold) ✓ 
          Span VOTE: 
          Span=votes
          
        if comments
          Comments(comments=comments)
          // Icon(name='check')
          // Button(icon='check' color='tomato' variant='text')
  `
})
