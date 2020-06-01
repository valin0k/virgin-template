import React from 'react'
import { observer } from 'startupjs'
import { ScrollView } from 'react-native'
import { Content, Div } from '@startupjs/ui'
import { Graffiti, Icons, TeamEvents, HotelEvents } from 'components'
import './index.styl'

export default observer(function Sidebar () {
  return pug`
    Div.root
      Div.section(styleName={paddingBottom: true})
        Graffiti
      Div.section(styleName={gray: true, paddingBottom: true})
        Icons
      Div.section(styleName={darkGray: true})
        TeamEvents
      Div.section(styleName={darkGray: true})
        HotelEvents
  `
})
