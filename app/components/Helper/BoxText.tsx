import React from 'react'

type Props = {
  children: React.ReactNode
}

const BoxText = ({children}: Props) => {
  return (
  <h1 className="border-2 px-4 w-fit bg-gray-100 py-1 text-blue-500 font-bold">
    {children}
  </h1>
  )
}

export default BoxText