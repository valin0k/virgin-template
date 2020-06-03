import React from 'react'
import { observer } from 'startupjs'
import { Div, Button, Span } from '@startupjs/ui'
import './index.styl'

const TABS = ['ALL', 'MOST LOVED', 'IN ACTION', 'ARCHIVE']

export default observer(function Tabs () {
  return pug`
    Div.root
      each tab, i in TABS
        Div.tab(styleName={first: !i} onPress=() => {} key=tab)
          Span.tabText(size='s')=tab
          if !i
            Div.arrow
  `
})
