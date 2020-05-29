import React from 'react'
import { observer } from 'startupjs'
import { H1, Div } from '@startupjs/ui'
import './index.styl'

export default observer(function Header () {
  return pug`
    Div.root
      H1.text BARE IT!
  `
})
