import React, {UseState} from 'react'
import { useSelector } from 'react-redux'
//! after backend stufff you should be able to hook 
//! into the review info reducer and here and render hehe 
import { useDispatch } from 'react-redux'

//mui components 
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import Button from '@mui/material/Button'


function ReviewPost({review}) {
    const dispatch = useDispatch()

    const deleteReview = () => {
        console.log('delete clicked! Review id is:', review.id)
        dispatch({
            type: 'DELETE_REVIEW',
            payload: review.id
        })
    }
    
    return (
        <Box>
            <Typography variant='body1'>
                {review.book_title} by {review.book_author}
            </Typography>
            <Button onClick={deleteReview} variant='contained'>Delete</Button>
        </Box>
    )
}


export default ReviewPost