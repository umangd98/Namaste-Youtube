import React from 'react'
import Comment from './Comment'
import CommentsList from './CommentsList'
const commentsData = [
    {
        name: "Umang Dhandhania", 
        text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        replies : [
            {
                name: "Umang Dhandhania", 
                text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
                replies : [
                    {
                        name: "Umang Dhandhania", 
                        text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
                        replies : [
                            
                        ]
                    }
                ]
            },
            {
                name: "Umang Dhandhania", 
                text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
                replies : [
                    {
                        name: "Umang Dhandhania", 
                        text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
                        replies : [
                            {
                                name: "Umang Dhandhania", 
                                text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
                                replies : [
                                    {
                                        name: "Umang Dhandhania", 
                                        text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
                                        replies : [
                                            
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: "Umang Dhandhania", 
                        text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
                        replies : [
                            {
                                name: "Umang Dhandhania", 
                                text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
                                replies : [
                                    
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: "Umang Dhandhania", 
        text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        replies : [
            {
                name: "Umang Dhandhania", 
                text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
                replies : [
                    
                ]
            }
        ]
    },
    {
        name: "Umang Dhandhania", 
        text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        replies : [
            {
                name: "Umang Dhandhania", 
                text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
                replies : [
                    
                ]
            },
            {
                name: "Umang Dhandhania", 
                text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
                replies : [
                    
                ]
            }
        ]
    },
    {
        name: "Umang Dhandhania", 
        text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        replies : [
            
        ]
    }
]

const CommentsContainer = () => {
  return (
    <div className='m-5 p-2 w-[70%]'>
        <h1 className='text-4xl font-bold'>Comments</h1>
        <CommentsList comments={commentsData} />
    </div>
  )
}

export default CommentsContainer