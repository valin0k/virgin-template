import React from 'react'
import { observer } from 'startupjs'
import { ScrollView } from 'react-native'
import { Content, Div } from '@startupjs/ui'
import { AddPost } from 'main/components'
import './index.styl'

export default observer(function PHome () {
  return pug`
    ScrollView.root
      Content.content
        Div.main
          AddPost
          // ProductFilter
          // Products
        // Sidebar
  `
})
