import React from 'react'
import { observer } from 'startupjs'
import { ScrollView } from 'react-native'
import { Content, Div } from '@startupjs/ui'
import { AddPost, Classes, Sidebar } from 'main/components'
import './index.styl'

export default observer(function PHome () {
  return pug`
    Div.root
      Content.content(width='desktop' )
        Div.main
          AddPost
          Classes
        Sidebar
  `
})
