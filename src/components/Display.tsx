import { Text } from '@/vuexy/Text'
import { ReactElement } from 'react'

const Display = ({ children }: { children: ReactElement }) => {
  return (
    <div>
      <Text>{children}</Text>
    </div>
  )
}

export default Display
