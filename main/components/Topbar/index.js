import React from 'react'
import { observer } from 'startupjs'
import { ScrollView, Image } from 'react-native'
import { Content, Div } from '@startupjs/ui'
import { Logo, Menu, Avatar } from 'components'
import { BASE_URL } from 'clientHelpers'
import './index.styl'

export default observer(function Topbar () {
  return pug`
    Div.root
      Div.logo
        Logo
      Div.menu
        Menu
      Div.user
        Avatar
  `
})
