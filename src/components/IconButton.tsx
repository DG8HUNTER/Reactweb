import React from 'react'

interface ButtonIconProps{
    children:React.ReactNode,
    icon:React.ReactNode
}
export default function IconButton({children , icon}:ButtonIconProps) {
  return (
   <button>
    {children}
    {icon}


   </button>
  )
}
