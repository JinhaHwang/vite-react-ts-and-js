import { ReactElement } from 'react'
import JsComponent from '@/components/JSComponent.jsx'

export const Text = ({ children }: { children: ReactElement }) => {
  return (
    <div>
      {children}
      <JsComponent />
    </div>
  )
}
