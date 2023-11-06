import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import { YOUTUBE_SEARCH_API, YOUTUBE_SEARCH_RESULTS_API } from '../utils/constants'
import { cacheResults } from '../utils/searchSlice'
import { useNavigate } from 'react-router-dom'

const Head = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [searchQuery, setSearchQuery] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [showSuggetions, setShowSuggestions] = useState(false)
  // console.log(searchQuery)
  const toggleMenuHandler = () => {
    dispatch(toggleMenu())
  }
  const searchCache = useSelector(state => state.search)
  useEffect(() => {
    //make an api to search suggestions only if searchQuery change is greater than 200ms
    const timerId = setTimeout(() => {
      if(searchCache[searchQuery]){
        if(searchQuery.length) setSuggestions(searchCache[searchQuery])
      }
      else {
        getSearchSuggestions()
      }
    }, 200)
    
    return () => clearTimeout(timerId)
  }, [searchQuery])

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery)
    const json = await data.json()
    console.log('API CALL' + searchQuery)
    dispatch(cacheResults({
      [searchQuery]: json[1]
    }))
    
    if(searchQuery.length) setSuggestions(json[1])
  }

  const handleSearchClick = () => {
    navigate('/search?q=' + searchQuery)
  }
  return (
    <div className='grid grid-flow-col  m-1 shadow-lg items-center justify-between'>
      <div className='flex col-span-2 items-center'>
        <img onClick={toggleMenuHandler} className='h-12 cursor-pointer' src='https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg' alt='hamburger' />
        <a href='https://www.youtube.com/'> 
          <img className='h-16 mx-2' src='https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1200-80.jpg' alt='youtube' />
        </a>
      </div>
      <div className='col-span-9'>
        <input value={searchQuery} 
        onChange={e => setSearchQuery(e.target.value)} className='w-1/2 border border-black rounded-full px-5' type='text' onFocus={() => setShowSuggestions(true)} onBlur={()=> setShowSuggestions(false)}/>
        <button className='px-2 bg-gray-200 mx-2 rounded-lg hover:bg-transparent  border-gray-400 border ' onClick={handleSearchClick}>Search</button>
        {showSuggetions && <div className='absolute bg-white py-2 px-5 w-1/3 border border-gray-100 '>
          <ul>
            {suggestions.map((suggestion)=> (
              <li  key={suggestion} className='py-2 shadow-sm hover:bg-gray-100 cursor-pointer'>{suggestion}</li>
            ))}s̄
          </ul>
        </div>}
      </div>
      <div className='col-span-1'>
        <img className='h-12 border rounded-full border-gray-400' src='https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png' alt='user' />
      </div>
    </div>
  )
}

export default Head