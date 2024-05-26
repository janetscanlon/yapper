import React, { UseState, useEffect } from 'react'
import { useSelector } from 'react-redux'
//! after backend stufff you should be able to hook 
//! into the review info reducer and here and render hehe 
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

//mui components 
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import Button from '@mui/material/Button'


function ReviewPost({review}) {
    const dispatch = useDispatch()
    const history = useHistory()
    //hook into user reducer
    const user = useSelector(store => store.user)

    //fetch all likes where review_id when the review mounts 
    useEffect(() => {
        dispatch({
            type: 'FETCH_REVIEW_LIKES',
            payload: review.id
        })
    })

    const deleteReview = () => {
        console.log('delete clicked! Review id is:', review.id)
        dispatch({
            type: 'DELETE_REVIEW',
            payload: review.id
        })
    }

    const editReview = () => {
        //route to a new edit form component and work on route params
        // to send the review id
        //send the user to the edit form with the review id
        history.push(`/edit_form/${review.id}`)
    }
    
    return (
        <Box>
            <Typography variant='h6'>
                {review.book_title} by {review.book_author}
            </Typography>
            <Typography variant='subtitle1'>
                Review:
            </Typography>
            <Typography variant='subtitle1'>
            {review.review_input}
            </Typography>
            <div>
                <Button>Like</Button>
                <Typography variant='body2'>
                    This post has 0 likes
                </Typography>
                <Button>Comment</Button>
            </div>
            {review.user_id === user.id &&
                <div>
                    <Button onClick={deleteReview} variant='contained'>Delete</Button>
                    <Button onClick={editReview}variant='contained'>Edit</Button>
                </div>
            }
        </Box>
    )
}


export default ReviewPost