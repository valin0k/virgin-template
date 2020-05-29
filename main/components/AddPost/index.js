import React from 'react'
import { observer } from 'startupjs'
import { H2, Span, H3, H4, H5, Div, TextInput, Button } from '@startupjs/ui'
import './index.styl'

export default observer(function AddPost () {
  return pug`
    Div.root
      H4.titleText ADD A SUGGESTION
      Span.subtitleText WE LOVE TO HEAR NEW IDEAS ON HOW TO BE EVEN MORE AWESOME
      TextInput.titleInput(placeholder='Title of suggestion?')
      TextInput.textInput(placeholder='Make a suggestion' numberOfLines=4)
      Div.sendWrapper
        Div.description
          Span.grayText To send a private suggestion email us at:
          Span.emailText CULTURE@VIRGINHOTELS.COM
        Button.button POST
  `
})
