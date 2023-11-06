import React from 'react'
import { formattedDate } from '../utils/dateTimeConvert'

const VideoCard = ({info}) => {
  
  const {snippet, statistics} = info
  const {channelTitle, title, thumbnails, publishedAt} = snippet
  const date = formattedDate(publishedAt)

  return (
    <div className='p-2 m-2 w-72 shadow-lg'>
        <img className='rounded-lg' src={thumbnails.medium.url} alt='thumbnail' />
        <p className='font-bold py-2'>{title}</p>
        <p>{channelTitle}</p>
        <p>{statistics.viewCount} views</p>
        <p>{date} </p>

    </div>
  )
}



export default VideoCard

