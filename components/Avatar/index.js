import React from 'react'
import { observer } from 'startupjs'
import { Image } from 'react-native'
import { User, Div, Span } from '@startupjs/ui'
import { BASE_URL } from 'clientHelpers'
import { Text } from 'components'
import './index.styl'

export default observer(function Avatar () {
  return pug`
    Div.root
      Div.text
        Span.greeting HELLO
        Span.name NIRAJ
      User.user(avatarUrl=BASE_URL + '/avatar.jpg' size='xxl')
  `
})
