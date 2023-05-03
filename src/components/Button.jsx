import React from 'react'
import { Text } from '@/vuexy/Text/Text'
import JsComponent from '@/components/JSComponent'

const Button = ({ children, ...props }) => {
  return (
    <button {...props}>
      <JsComponent />
      <Text>{children}</Text>
    </button>
  )
}

export default Button
