import react from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

//mui components
import { Typography } from '@mui/material'

function ReviewEditForm () {
    const params = useParams()
    //will use the id to make a GET request to
    //obtain the data of the single review the user wants to edit 
    const reviewId = params.review_id //<- this is whatever we declared in the route address

    return (
        <Typography variant='h2'>
            Edit Review Form page
        </Typography>    
    )
}

export default ReviewEditForm