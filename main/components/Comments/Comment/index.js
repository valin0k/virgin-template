import React from 'react'
import { Image, View } from 'react-native'
import { observer } from 'startupjs'
import { Div, Span, Hr } from '@startupjs/ui'
import { BASE_URL } from 'clientHelpers'
import './index.styl'

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
        Span.dateText=date
        Div.bottom
          Hr
  `
})



