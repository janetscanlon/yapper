import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
//mui components
import Button from '@mui/material/Button';
import Box from '@mui/material/Box'
import { Typography } from '@mui/material';
import Container from '@mui/material/Container';
import { styled } from '@mui/system';

import './ProfileInfo.css'

function ProfileInfo() {
        const user = useSelector((store) => store.user)
        const reviews = useSelector((store) => store.reviews)
        const history = useHistory()
        const dispatch = useDispatch()
        const styledBox = styled('Box')({
            textAlign: 'right'
        })

    useEffect(() => {
        dispatch({ type: 'GET_REVIEWS'})
    }, [])

   let numberOfReviews = []
   console.log('reviews is:', reviews) 
   console.log('user is:', user)

    for (let review of reviews){
        if(user.id === review.user_id) {
            numberOfReviews.push(review)
        }
    }
        console.log ('number of reviews is:', numberOfReviews)


    

    const toNewReviewPage = () => {
        history.push('/newreview')

    // declare a state array 
    //push all the objects in the review reducer with the user's id 
    // reender the array length 
 
    }
    return(
        <StyledBox>
            <Container className='profileInfo'>
                <Typography variant='h4'>{user.first_name}</Typography>
                <Typography variant='caption'>{user.pronouns}</Typography>
                <Typography variant='subtitle2'>
                    You've written {numberOfReviews.length} reviews
                    </Typography>
                    {numberOfReviews.length === 0 &&
                    <Typography variant='subtitle2'>
                    Get started by adding a review
                    </Typography>}
                
                <Button onClick={toNewReviewPage} variant='contained'>New Review</Button>
                    <Typography>Your Friends</Typography>
            </Container>
        </StyledBox>
    )
}

export default ProfileInfo