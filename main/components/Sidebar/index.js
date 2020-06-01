import React from 'react'
import { observer } from 'startupjs'
import { ScrollView } from 'react-native'
import { Content, Div } from '@startupjs/ui'
import { Graffiti, Icons, TeamEvents, HotelEvents } from 'components'
import './index.styl'

export default observer(function Sidebar () {
  return pug`
    Div.root
      Div.section
        Graffiti
      Div.section(styleName={gray: true})
        Icons
      Div.section(styleName={darkGray: true, noPaddingBottom: true})
        TeamEvents
      Div.section(styleName={darkGray: true, noPaddingBottom: true})
        HotelEvents
  `
})
