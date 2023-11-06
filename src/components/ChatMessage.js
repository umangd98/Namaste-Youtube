import React from 'react'
import { formatTimestampToReadableDate } from '../utils/dateTimeConvert'
const ChatMessage = ({name, message, timestamp}) => {
  const time = formatTimestampToReadableDate(timestamp)
  return (
    <div className='flex items-center shadow-lg p-2'>
      <img className='h-8 border rounded-full border-gray-400' src='https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png' alt='user' />
      <span className="px-2 text-xs font-bold">{name}</span>
      <span className='text-xs'>{message}</span>
      <span className='text-xs'>{time}</span>


    </div>
  )
}

export default ChatMessage