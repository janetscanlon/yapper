import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'


//mui components
import { Typography } from '@mui/material'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormControl, FormLabel, Box, Grid } from '@mui/material';


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

    const reviewToEdit = useSelector(store => store.reviewToEdit)

    //functions to update book title
    const handleBookTitleChange = (event) => {
        dispatch({
            type: 'EDIT_BOOK_TITLE',
            payload: event.target.value
        })
    }

    //functions to update author
    const handleBookAuthorChange = (event) => {
        dispatch({
            type: 'EDIT_BOOK_AUTHOR',
            payload: event.target.value
        })
    }

    //functions to update book genre
    const handleBookGenreChange = (event) => {
        dispatch({
            type: 'EDIT_BOOK_GENRE',
            payload: event.target.value
        })
    }

    //functions to update book rating
    const handleBookRatingChange = (event) => {
        dispatch({
            type: 'EDIT_BOOK_RATING',
            payload: event.target.value
        })
    }

    //functions to update review input
    const handleBookReviewInputChange = (event) => {
        dispatch({
            type: 'EDIT_BOOK_REVIEW_INPUT',
            payload: event.target.value
        })
    }

    //a function to update the Review: 
    const updateReview = (event) => {
        event.preventDefault()

        //call saga function that will update the full review in db: 
        dispatch({
            type: 'UPDATE_REVIEW',
            payload: reviewToEdit
        })
        //after the user submits the changes route them back to home feed
        history.push('/feed')
    }

    return (
        <Box>
            <Typography variant='h2'>
                Edit Review Form page
            </Typography>
            <FormControl>
            <FormLabel>Edit Review</FormLabel>
            <Grid container direction={"column"} spacing={5}>
                <Grid item>
                    <TextField 
                        onChange={handleBookTitleChange}
                        value={reviewToEdit.book_title}
                        label='Book Title'
                        type='text' 
                        variant='filled' 
                        size='small'>
                    </TextField>
                </Grid>
                <Grid item>
                    <TextField 
                        onChange={handleBookAuthorChange}
                        value={reviewToEdit.book_author}
                        label='Book Author'
                        type='text' 
                        variant='filled' 
                        size='small'>
                    </TextField>
                </Grid>
                <Grid item>
                    <TextField
                        onChange={handleBookGenreChange}
                        value={reviewToEdit.genre}
                        label='Genre'
                        type='text' 
                        variant='filled' 
                        size='small'>
                    </TextField>
                </Grid>
                <Grid item>
                    <TextField
                        onChange={handleBookRatingChange}
                        value={reviewToEdit.rating}
                        label='Rating 1-10'
                        type='text'
                        inputProps={{min:0, max:10}} 
                        variant='filled' 
                        size='normal'>
                    </TextField>
                </Grid>
                <Grid item>
                    <TextField
                        onChange={handleBookReviewInputChange}
                        value={reviewToEdit.review_input}
                        label='Review'
                        multiline
                        rows={5}
                        type='text' 
                        variant='filled' 
                        size='small'>
                    </TextField>
                </Grid>
                
            <Grid item>
            <Button variant='contained' onClick={updateReview}>Update Review</Button>
            </Grid>
            </Grid>
    </FormControl>
   </Box>    
    )
}

export default ReviewEditForm