import React from 'react'
import CommentsList from './CommentsList'

const Comment = ({data}) => {
    const {name, text, replies} = data

  return (
    <div className='flex my-2 shadow-sm bg-gray-100 rounded-md p-2'>
        <img className='w-12 h-12 border border-black rounded-full' src='https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png'
        alt='user' />
        <div className=' px-3'>
            <p className='font-bold'>{name}</p>
            <p>{text}</p>
           
        </div>
    </div>
  )
}

export default Comment