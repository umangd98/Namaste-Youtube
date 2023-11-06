import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
  const error = useRouteError()
  return (
    <div className='flex flex-col justify-center items-center w-full h-screen'>
    <h1 className='text-gray-600 text-3xl'>Oops!!</h1>
    <p className='text-gray-600 text-xl'>Something Went Wrong!!</p>
    <p className='text-gray-600 text-xl'>{error.status + " : " + error.statusText}</p>
    </div>
  )
}

export default Error