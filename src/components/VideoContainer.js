import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constants'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'
import Shimmer from './Shimmer'

const VideoContainer = () => {
  const [videos, setVideos] = useState([])
  const [nextPageToken, setNextPageToken] = useState("");
  useEffect(()=>{
    getVideos()
  }, [])
  const handleScroll = async () => {
    //add delay for 1500 milli seconds
    await new Promise(resolve => setTimeout(resolve, 1500));
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    const data = await fetch(YOUTUBE_VIDEOS_API + "&pageToken=" + nextPageToken)
    const json = await data.json()
    setVideos([...videos, ...json.items])
    setNextPageToken(json.nextPageToken)
  }
  useEffect(()=>{
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  
  })
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API)
    const json = await data.json()
    // console.log(json)
    setVideos(json.items)
    setNextPageToken(json.nextPageToken)
  }
  if(!videos.length) return  <Shimmer />
  return (
    <div className='flex flex-wrap'>
      {videos.map(video => <Link to={"/watch?v=" + video.id} key={video.id}><VideoCard info={video} key={video.id} /> </Link>)}

    </div>
  )
}

export default VideoContainer