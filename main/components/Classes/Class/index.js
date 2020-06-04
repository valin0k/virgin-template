import React from 'react'
import { observer } from 'startupjs'
import { Image } from 'react-native'
import { Comments } from 'main/components'
import { Div, Span, H4, H5, Button, Icon} from '@startupjs/ui'
import { faCheck, faTimesCircle, faHeart } from '@fortawesome/free-solid-svg-icons'
import './index.styl'

const redColor = '#cc0000'

export default observer(function Class ({ number, title, author, date, text, votes, comments, first }) {
  return pug`
    Div.root(styleName={first})
      Div.number
        H5.numberText=number
      Div.item
        Div.title
          H5.titleText=title
        Div.author
          Span.authorText(size='l')=author
            Span.dateText=date
        Div.text
          Span.contentText(size='l')=text
        Div.metaWrapper
          Div.meta(onPress=() => {})
            Icon(icon=faCheck size='l' color=redColor)
            Span.voteText VOTE: 
            Span=votes
          Div.icons
            Div(onPress=() => {})
              Icon(icon=faTimesCircle size='l' color=redColor)
            Div.heart(onPress=() => {})
              Icon(icon=faHeart size='l' color=redColor)
            Div.manage(onPress=() => {})
              Span.redText MANAGE
          
        Comments(comments=comments)
  `
})
