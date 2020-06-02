import React from 'react'
import { observer } from 'startupjs'
import { Image } from 'react-native'
import { User, Div, Span } from '@startupjs/ui'
import { BASE_URL } from 'clientHelpers'
import { Text } from 'components'
import './index.styl'

export default observer(function Avatar ({ hideText, size = 'xxl'}) {
  return pug`
    Div.root
      unless hideText
        Div.text
          Span.greeting HELLO
          Span.name(size='l') NIRAJ
      User.user(avatarUrl=BASE_URL + '/avatar.jpg' size=size)
  `
})
