import React from 'react'
import { Text } from '@/vuexy/Text'

const Button = ({ children, ...props }) => {
  return (
    <button {...props}>
      <Text>{children}</Text>
    </button>
  )
}

export default Button
