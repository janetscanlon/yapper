import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ReviewPost from '../ReviewPost/ReviewPost'



function ReviewFeed() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({ type: 'GET_REVIEWS'})
    }, [])


    return(
        <div>
        <h1> 
            Review Feed Page!
        </h1>
        <h3>
            Review Post component here
            <ReviewPost/>
        </h3>
        
        </div>
    )
}

export default ReviewFeed