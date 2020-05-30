import React from 'react'
import { observer } from 'startupjs'
import { Div } from '@startupjs/ui'
import Comment from './Comment'
import './index.styl'

export default observer(function Comments ({ comments }) {
  if(!comments) return null

  return pug`
    Div.root
      each comment, i in comments
        Comment(...comment first=!i key=comment.text)
  `
})
