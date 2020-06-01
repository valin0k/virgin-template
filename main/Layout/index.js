import React from 'react'
import { observer, emit, useValue, useLocal } from 'startupjs'
import './index.styl'
import { Row, Div, Layout, SmartSidebar, Menu, Button, H1, Span } from '@startupjs/ui'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Topbar, Header } from 'main/components'
import { ImageBackground, ScrollView, Image } from 'react-native'
import { BASE_URL } from 'clientHelpers'
import { displayName } from '../../app.json'

const APP_NAME = displayName.charAt(0).toUpperCase() + displayName.slice(1)

const MENU_ITEMS = [
  'VALENTINES',
  'V♥PEEPS',
  'V♥PREP',
  'CULTURE',
  'TRIBE',
  'RESOURCES',
]

const MenuItem = observer(({ url, children }) => {
  const [currentUrl] = useLocal('$render.url')
  return pug`
    Menu.Item(
      active=currentUrl === url
      onPress=() => emit('url', url)
    )= children
  `
})

export default observer(function ({ children }) {
  const [opened, $opened] = useValue(false)

  function renderSidebar () {
    return pug`
      Div.sidebarRoot
        Div.logoWrapper
          Image.logoImage(source={uri: BASE_URL + '/main-logo-white.png'})
        Menu.sidebar
          each item in MENU_ITEMS
            MenuItem(url='/')
              Span.menuItemText=item
        Div.social
        
    `
  }

  return pug`
    Layout
      SmartSidebar(
        backgroundColor='#eeeeee'
        path=$opened.path()
        renderContent=renderSidebar
      )
        ScrollView.root
          Div.container
            Row.menu
              Button(color='secondaryText' icon=faBars onPress=() => $opened.set(!opened))
              H1.logo
                Span.logoText(size='xl')= APP_NAME
            ImageBackground.bg(source={uri: BASE_URL + '/background.png'})
              Topbar
              Header
              =children
  `
})
