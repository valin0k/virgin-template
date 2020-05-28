import React from 'react'
import { observer } from 'startupjs'
import { ScrollView } from 'react-native'
import { Content } from '@startupjs/ui'
// import { Topbar } from 'main/components'
import './index.styl'

export default observer(function PHome () {
  return pug`
    ScrollView.root
      Content
  `
})
