import React from 'react'
import { observer } from 'startupjs'
import { Image } from 'react-native'
import { Div } from '@startupjs/ui'
import { BASE_URL } from 'clientHelpers'
import './index.styl'

export default observer(function Logo () {
  return pug`
    Div.logo
      Image.logoImage(source={uri: BASE_URL + '/main-logo-white.png'})
  `
})
