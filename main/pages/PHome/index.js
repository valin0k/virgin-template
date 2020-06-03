import React from 'react'
import { observer } from 'startupjs'
import { ScrollView } from 'react-native'
import { Div, H3 } from '@startupjs/ui'
import { AddPost, Classes, Sidebar, Tabs } from 'main/components'
import './index.styl'

export default observer(function PHome () {
  return pug`
    Div.title
      H3.text BARE IT!
    Div.root
      Div.content
        Div.main
          AddPost
          Tabs
          Classes
        Sidebar
  `
})
