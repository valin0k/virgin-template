import React, { useState } from 'react'
import { Dimensions } from 'react-native'
import { observer } from 'startupjs'
import { Div, Menu } from '@startupjs/ui'
import { BASE_URL } from 'clientHelpers'
import './index.styl'

const MenuItem = Menu.Item
const MENU_ITEMS = [
  'VALENTINES',
  'V♥PEEPS',
  'V♥PREP',
  'BARE IT',
  'CULTURE',
  'TRIBE',
  'RESOURCES',
  'V♥WELL'
]

export default observer(function Logo () {
  const [active, setActive] = useState('option-1')

  return pug`
    Menu(variant='horizontal')
      each item in MENU_ITEMS
        MenuItem()=item
  `
})
