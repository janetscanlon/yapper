import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
//mui components 
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormControl, FormLabel, Box, Grid } from '@mui/material';


function NewReviewPage () {

    //Declare new state for the user inputs 
    const [bookTitle, setBookTitle] = useState('')
    const [bookAuthor, setBookAuthor] = useState('')
    const [genreInput, setGenreInput] = useState('')
    const [ratingInput, setRatingInput] = useState('')
    const [reviewInput, setReviewInput] = useState('')

    const dispatch = useDispatch()

    const addReview = (event) => {
        event.preventDefault()
        //onClick send a dispatch to set the review reducer 
        dispatch({
            type: 'ADD_REVIEW',
            payload: {
                bookTitle,
                bookAuthor,
                genreInput,
                ratingInput,
                reviewInput,
            }
        })
    }

    return(
        
        <FormControl>
            <FormLabel>New Review</FormLabel>
            <Grid container direction={"column"} spacing={5}>
                <Grid item>
                    <TextField 
                        onChange={(e) => setBookTitle(e.target.value)}
                        label='Book Title'
                        type='text' 
                        variant='filled' 
                        size='small'>
                    </TextField>
                </Grid>
                <Grid item>
                    <TextField 
                        onChange={(e) => setBookAuthor(e.target.value)}
                        label='Book Author'
                        type='text' 
                        variant='filled' 
                        size='small'>
                    </TextField>
                </Grid>
                <Grid item>
                    <TextField
                        onChange={(e) => setGenreInput(e.target.value)}
                        label='Genre'
                        type='text' 
                        variant='filled' 
                        size='small'>
                    </TextField>
                </Grid>
                <Grid item>
                    <TextField
                        onChange={(e) => setRatingInput(e.target.value)}
                        label='Rating 1-10'
                        type='text'
                        inputProps={{min:0, max:10}} 
                        variant='filled' 
                        size='normal'>
                    </TextField>
                </Grid>
                <Grid item>
                    <TextField
                        onChange={(e) => setReviewInput(e.target.value)}
                        label='Review'
                        multiline
                        rows={5}
                        type='text' 
                        variant='filled' 
                        size='small'>
                    </TextField>
                </Grid>
                
            <Grid item>
            <Button variant='contained' onClick={addReview}>Add New Review</Button>
            </Grid>
            </Grid>
      </FormControl>
    
    
    )

}

export default NewReviewPage