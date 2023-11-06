import React, { useEffect, useState } from 'react'
import {  useSearchParams } from 'react-router-dom'
import {  YOUTUBE_SEARCH_RESULTS_API } from '../utils/constants'
import SearchResult from './SearchResult'
import { Link } from 'react-router-dom'


const SearchResultsContainer = () => {
    const [searchResults, setSearchResults] = useState([])
    const [searchParams] = useSearchParams()
    const searchQuery = searchParams.get('q')
    const getSearchResults = async () => {
        const data = await fetch(YOUTUBE_SEARCH_RESULTS_API + searchQuery)
        const json = await data.json()
        console.log(json)
        setSearchResults(json.items)
    }
    useEffect(() => {
        getSearchResults()
    }, [searchQuery])
    if(searchResults.length === 0) return null
  return (
    <div className='flex flex-col items-start'>
        {
            searchResults.map((result) => (<Link to={"/watch?v=" + result.id.videoId}><SearchResult key={result.id.videoId} data={result} /> </Link>))
        }
    </div>
  )
}

export default SearchResultsContainer