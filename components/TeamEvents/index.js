import React from 'react'
import { observer } from 'startupjs'
import { Div, Span, Icon, Divider } from '@startupjs/ui'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import './index.styl'

const DATA = [
  { day: 'TUE', month: 'MAR', date: '17', title: 'ST PATRICKS DAY CELEBRATION', time: '12:00p - 1:00p' },
  { day: 'WED', month: 'MAR', date: '18', title: 'MARCH MADNESS AT FDR', time: '11:00a - 2:00p' },
]

export default observer(function TeamEvents () {
  return pug`
    Div.root
      Div.title
        Span.h2 TEAMMATE
        Span.h1 EVENTS
      each item, i in DATA
        Div.item(key=item.title)
          Div.left
            Span.dayText=item.day
            Span.dayText=item.month
            Span.dateText=item.date
          Div.right
            Span.titleText=item.title
            Span.grayText FDR
            Span.grayText=item.time
          Div.icon
            Icon(icon=faCaretDown size='l' color='#cc0000')
        Div.bottom
        unless DATA.length === i + 1
          Divider
  `
})