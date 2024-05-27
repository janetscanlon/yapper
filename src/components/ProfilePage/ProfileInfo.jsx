import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
//mui components
import Button from '@mui/material/Button';


function ProfileInfo() {
        const user = useSelector((store) => store.user)
        const reviews = useSelector((store) => store.reviews)
        const history = useHistory()
        const dispatch = useDispatch()

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
        <div>
            <h3>Hi, {user.first_name}!</h3>
            <p>{user.pronouns}</p>
            <p>
                You've written {numberOfReviews.length} reviews!
                </p>
                {numberOfReviews.length === 0 &&
                <p>
                Get started by adding a review
                </p>}
            
            <Button onClick={toNewReviewPage}variant='contained'>New Review</Button>
            
            <p>Your Friends</p>
        </div>
    )
}

export default ProfileInfo