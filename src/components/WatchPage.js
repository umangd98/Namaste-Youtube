import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import {  useSearchParams } from 'react-router-dom'
import CommentsContainer from './CommentsContainer'
import { formattedDate } from '../utils/dateTimeConvert'
import {  clearMessages } from '../utils/chatSlice'

import LiveChat from './LiveChat'
const WatchPage = () => {
  const [searchParams] = useSearchParams()
  const videoId = searchParams.get('v')
  const [video, setVideo] = useState(null)
  const getVideo = async () => {
    const data = await fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id='+ videoId + '&key='+ process.env.REACT_APP_YOUTUBE_API_KEY)
    const json = await data.json()
    // console.log(json)
    setVideo(json.items[0])
  }
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(closeMenu())
    getVideo()
    return () => {  
      dispatch(clearMessages())
    }

  }, [])

  if (!video) return null;
  const {snippet, statistics} = video
  const {channelTitle, title, publishedAt} = snippet
  const date = formattedDate(publishedAt)
  const {viewCount, likeCount} = statistics
  return (
    <div className='flex flex-col w-full'>
      <div className='px-5 flex w-full'>
        <div>
          <iframe width="1200" height="600" src={"https://www.youtube.com/embed/" + videoId + "?autoplay=1"} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <h1 className='text-2xl font-bold pt-2'>{title}</h1>
          <div className='flex justify-between w-[1200px]'>
            <div>
            <p className='text-lg'>{channelTitle}</p>
            <p className='text-lg'>{date}</p>
            </div>
            <div className=''>
              <p className='text-lg'>{viewCount} views</p>
              <p className='text-lg'>{likeCount} likes</p>
            </div>
          </div>
        </div>
        <div className='w-full'>
          <LiveChat />
        </div>
      </div>
      <CommentsContainer />
    </div>
  )
}

export default WatchPage