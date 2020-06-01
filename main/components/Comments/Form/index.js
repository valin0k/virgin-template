import React from 'react'
import { observer } from 'startupjs'
import { ScrollView, Image } from 'react-native'
import { Content, Div, TextInput, User } from '@startupjs/ui'
import { Logo, Menu, Avatar } from 'components'
import { BASE_URL } from 'clientHelpers'
import './index.styl'

export default observer(function Form ({ withMargin }) {
  return pug`
    Div.root(styleName={withMargin})
      User.user(avatarUrl=BASE_URL + '/avatar.jpg' size='xs')
      Div.inputWrapper
        TextInput.input(placeholder='Reply to this suggestion...')
  `
})
