import React from 'react'
import { observer } from 'startupjs'
import { ScrollView } from 'react-native'
import { Content, Div, H1 } from '@startupjs/ui'
import { AddPost, Classes, Sidebar } from 'main/components'
import './index.styl'

export default observer(function PHome () {
  return pug`
    Div.title
      H1.text BARE IT!
    Div.root
      Content.content(width='desktop' )
        Div.main
          AddPost
          Classes
        Sidebar
  `
})
