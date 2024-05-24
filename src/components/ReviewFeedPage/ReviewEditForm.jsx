import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'


//mui components
import { Typography } from '@mui/material'

function ReviewEditForm () {
    
    const history = useHistory()
    const dispatch = useDispatch()
    const params = useParams()
    //params will use the id to make a GET request to
    //obtain the data of the single review the user wants to edit 

    const reviewId = params.review_id //<- this is whatever we declared in the route address

    //use dispatch to make a GET request for the review that the user wants to edit

    useEffect(() => {
        dispatch({
            type: 'FETCH_REVIEW_TO_EDIT',
            payload: reviewId
        })
    }, [])

    return (
        <Typography variant='h2'>
            Edit Review Form page
        </Typography>    
    )
}

export default ReviewEditForm