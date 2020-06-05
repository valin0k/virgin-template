import React from 'react'
import { observer } from 'startupjs'
import { Div, Span, H4, Icon, Divider } from '@startupjs/ui'
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
        Span.h5 TEAMMATE
        H4.h4 EVENTS
      each item, i in DATA
        Div.item(key=item.title styleName={noBorder: DATA.length === i + 1})
          Div.left
            Span.dayText=item.day
            Span.dayText=item.month
            Span.dateText(size='xxl')=item.date
          Div.right
            Span.titleText=item.title
            Span.grayText FDR
            Span.grayText=item.time
          Div.icon(onPress=() => {})
            Icon(icon=faCaretDown size='l' color='#cc0000')
  `
})
