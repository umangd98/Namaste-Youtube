import React from 'react'
import {formattedDate} from '../utils/dateTimeConvert'
const SearchResult = ({data}) => {
    // console.log( formattedDate(data.snippet.publishedAt))
    const {thumbnails, title, channelTitle, publishedAt} = data.snippet
    const date = formattedDate(publishedAt)
  return (
    <div className='flex mx-5 my-3  w-[80%]'>
        <div className=' mx-3'>
            <img className='rounded-lg shadow-lg' src={thumbnails.medium.url} alt='thumbnail' />
        </div>
        <div className='flex flex-col items-start'>
            <h3 className='font-bold text-lg'>{title}</h3>
            <p>{channelTitle}</p>
            <p>Views</p>
            <p> {date}</p>
        </div>
    </div>
  )
}

export default SearchResult 