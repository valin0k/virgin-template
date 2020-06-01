import React from 'react'
import { observer } from 'startupjs'
import { Image } from 'react-native'
import { Comments } from 'main/components'
import { H1, Div, Span, H4, H5, Button, Icon } from '@startupjs/ui'
import { faCheck, faTimesCircle, faHeart } from '@fortawesome/free-solid-svg-icons'
import './index.styl'

export default observer(function Class ({ number, title, author, date, text, votes, comments, first }) {
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
        Div.metaWrapper
          Div.meta(onPress=() => {})
            Icon(icon=faCheck size='l' color='#cc0000')
            Span.red VOTE: 
            Span=votes
          Div.icons
            Div(onPress=() => {})
              Icon(icon=faTimesCircle size='l' color='#cc0000')
            Div.manage(onPress=() => {})
              Icon(icon=faHeart size='l' color='#cc0000')
              Span.red MANAGE
          
        Comments(comments=comments)
  `
})
