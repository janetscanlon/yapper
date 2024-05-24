import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ReviewPost from './ReviewPost'

//mui componenets
import Box from '@mui/material/Box';



function ReviewFeed() {
    const dispatch = useDispatch()
    const reviews = useSelector((store) => store.reviews)

    useEffect(() => {
        dispatch({ type: 'GET_REVIEWS'})
    }, [])


    return(
        <Box sx={{m: 2}}>
        <h1> 
            Review Feed Page!
        </h1>
        <h3>
            Review Post component here
        </h3>
        {reviews.map(review => {
            return(
            <ReviewPost key={review.id} review={review}/>
            
            )
        })}
        
        </Box>
    )
}

export default ReviewFeed