export const YOUTUBE_VIDEOS_API = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=' + process.env.REACT_APP_YOUTUBE_API_KEY



export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="



export const YOUTUBE_SEARCH_RESULTS_API = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&key=" + process.env.REACT_APP_YOUTUBE_API_KEY +  "&q="






