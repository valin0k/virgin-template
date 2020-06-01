import React from 'react'
import { observer } from 'startupjs'
import { Div, Span, Icon } from '@startupjs/ui'
import { faBookOpen, faMap, faCommentAlt } from '@fortawesome/free-solid-svg-icons'
import './index.styl'

const DATA = [
  { icon: faBookOpen, text: 'BOOK OF LOVE' },
  { icon: faMap, text: 'CULTURE MAP' },
  { icon: faCommentAlt, text: 'SEND FEEDBACK' }
]

export default observer(function Icons () {
  return pug`
    Div.root
      each item in DATA
        Div.item(onPress=() => {})
          Icon(icon=item.icon size='l' color='#cc0000')
          Span.text=item.text
  `
})
