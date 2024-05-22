import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ReviewPost from '../ReviewPost/ReviewPost'



function ReviewFeed() {
    const dispatch = useDispatch()
    const reviews = useSelector((store) => store.reviews)

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
        </h3>
        {reviews.map(review => {
            return(
                <div key={review.id}>
                    <h3>{review.book_title} by {review.book_author}</h3>
                    <p>{review.review_input}</p>
                </div>
            )
        })}
        <ReviewPost/>
        </div>
    )
}

export default ReviewFeed