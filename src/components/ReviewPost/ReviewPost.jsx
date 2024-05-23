import React, {UseState} from 'react'
import { useSelector } from 'react-redux'
//! after backend stufff you should be able to hook 
//! into the review info reducer and here and render hehe 

//mui components 
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'

function ReviewPost({review}) {

    return (
        <Box>
            <Typography variant='body1'>
                {review.book_title} by {review.book_author}
            </Typography>
        </Box>

    )
}


export default ReviewPost