import React from 'react'
import { observer } from 'startupjs'
import { Div, Button } from '@startupjs/ui'
import './index.styl'

const TABS = ['ALL', 'MOST LOVED', 'IN ACTION', 'ARCHIVE']

export default observer(function Tabs () {
  return pug`
    Div.root
      each tab, i in TABS
        Button.tab(styleName={first: !i} size='s' variant='text' onPress=() => {})=tab
  `
})
