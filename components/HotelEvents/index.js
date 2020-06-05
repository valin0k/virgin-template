import React from 'react'
import { observer } from 'startupjs'
import { BASE_URL } from 'clientHelpers'
import { Image } from 'react-native'
import { Div, Span, Icon, Divider, H4, Row } from '@startupjs/ui'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import './index.styl'

const DATA = [
  { title: 'UPSIDE DOWN TEA PARTY', text: 'COMMONS CLUB', date: 'March 09, 2020 at 2:00 PM' },
  { title: 'SKY HIGH ST. PATTY&#8217;S DAY', text: 'CERISE', date: 'March 14, 2020 at 9:00 AM' },
  { title: 'ST. PATRICK&#8217;S DAY TAKEOVER', text: 'COMMONS CLUB + CERISE', date: 'March 14, 2020 at 9:00 AM' }
]

export default observer(function HotelEvents () {
  return pug`
    Div.root
      Div.title
        Span.h5 HOTEL
        H4.h4 EVENTS
      each item, i in DATA
        Row.item(key=item.title styleName={noBorder: DATA.length === i + 1})
          Div.left
            Image.image(source={uri: BASE_URL + '/events/' + i + '.jpg'})
          Div.right
            Span.titleText=item.title
            Span.grayText=item.text
            Span.grayText=item.date
  `
})
