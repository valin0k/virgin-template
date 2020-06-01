import React from 'react'
import { observer } from 'startupjs'
import { Div } from '@startupjs/ui'
import Comment from './Comment'
import Form from './Form'
import './index.styl'

export default observer(function Comments ({ comments }) {
  return pug`
    Div.root
      if comments
        each comment, i in comments
          Comment(...comment first=!i key=comment.text)
      Form(withMargin=!!comments)
  `
})
