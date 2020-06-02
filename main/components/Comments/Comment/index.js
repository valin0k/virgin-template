import React from 'react'
import { Image, View } from 'react-native'
import { observer } from 'startupjs'
import { Div, Span, Hr, Icon } from '@startupjs/ui'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { BASE_URL } from 'clientHelpers'
import './index.styl'

const redColor = '#cc0000'

export default observer(function Comments ({ avatar, name, text, hash, date, first }) {
  return pug`
    View.root(styleName={first})
      Div.avatarWrapper
        Image.avatar(source={uri: BASE_URL + avatar})
      Div.content
        Span.nameText=name
        Div.message
          Span.text=text
          if hash
            Span.hashText=hash
        Div.manage(onPress=() => {})
          Icon(icon=faTimesCircle size='l' color=redColor)
        Span.dateText(size='s')=date
        Div.bottom
          Hr
  `
})



