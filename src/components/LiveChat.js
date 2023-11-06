import React, {useEffect, useState} from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage, clearMessages } from '../utils/chatSlice'
import { generateRandomMessage, generateRandomName } from '../utils/helper'
const LiveChat = () => {
  const dispatch= useDispatch()
  const messages = useSelector(state => state.chat.messages)
  const [liveMessage, setLiveMessage] = useState('')
  const handleFormSubmit = (e) => {
    e.preventDefault()
    dispatch(addMessage({
      name: 'Umang Dhandhania',
      message: liveMessage,
      timestamp: Date.now()
    }))
    setLiveMessage('')
  }
  useEffect(()=> {
    const intervalId = setInterval(() => {
      //API Polling
      console.log('Polling')
      dispatch(addMessage({
        name: generateRandomName(),
        message: generateRandomMessage(),
        timestamp: Date.now()
      }))
    }, 1500);

    return () => {
      clearInterval(intervalId)
      // dispatch(clearMessages())
    }
  })

  return (
    <>
      <div className='ml-2 p-2 border border-black w-full h-[600px] bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>

        {messages.map((message, index) => <ChatMessage  key={index} name={message.name} message={message.message} timestamp={message.timestamp} />)}
      
      </div>
      <form className='ml-2 p-2 w-full flex justify-between' onSubmit={handleFormSubmit}>
        <input className='border border-black rounded-lg w-full px-2 mr-2' type="text" placeholder='Say something...' value={liveMessage}
        onChange={e => setLiveMessage(e.target.value)} />
        <button className='border border-black p-2 rounded-md hover:bg-gray-300'>Send</button>
      </form>
   </>
  )
}

export default LiveChat 