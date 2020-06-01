import React from 'react'
import { observer } from 'startupjs'
import { Image } from 'react-native'
import { Div, Span } from '@startupjs/ui'
import { BASE_URL } from 'clientHelpers'
import './index.styl'

export default observer(function Graffiti () {
  return pug`
    Div.root
      Image.textImage(source={uri: BASE_URL + '/make-love-text.png'})
      Span.text #MLSH
  `
})
