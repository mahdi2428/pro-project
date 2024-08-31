import React from 'react'
import { useController } from '../../context'
export default function TeamManagment() {

  const [controller , dispatch] = useController()
  const { sidenavType} = controller
  return (
    <div style={{color: sidenavType =="dark"?"white" : "black"}}>
        مدریت تیم
    </div>
  )
}
