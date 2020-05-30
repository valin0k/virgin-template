import React from 'react'
import { observer } from 'startupjs'
import { H1, Div } from '@startupjs/ui'
import Class from './Class'
import data from './data.json'
import './index.styl'

export default observer(function Classes () {
  return pug`
    Div.root
      each classData, i in data
        Class(...classData first=!i key=classData.number)
  `
})
