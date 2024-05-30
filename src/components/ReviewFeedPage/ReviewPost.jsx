import React, {useState} from 'react'
import { useSelector } from 'react-redux'
//! after backend stufff you should be able to hook 
//! into the review info reducer and here and render hehe 
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

//mui components 
import Box from '@mui/material/Box'
import { Typography, Grid, colors } from '@mui/material'
import Button from '@mui/material/Button'
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from '@mui/material/CardHeader'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import FavoriteIcon from '@mui/icons-material/Favorite'
import MoreVertIcon from "@mui/icons-material/MoreVert"
import { red } from '@mui/material/colors'
import { Colorize } from '@mui/icons-material'



function ReviewPost({review}) {
    const dispatch = useDispatch()
    const history = useHistory()
    //hook into user reducer
    const user = useSelector(store => store.user)
    
    //declare state variable for the like button
    const [liked, setLiked] = useState(false)

    const deleteReview = () => {
       if(review.like_count < 1){
            dispatch({
                type: 'DELETE_REVIEW',
                payload: review.id
            })
        }else {
            dispatch({
                type: 'DELETE_REVIEW_WITH_LIKES',
                payload: review.id
            })

        }
    }

    const editReview = () => {
        //route to a new edit form component and work on route params
        // to send the review id
        //send the user to the edit form with the review id
        history.push(`/edit_form/${review.id}`)
    }
    
    const addLike = () => {
        dispatch({
            type: 'ADD_LIKE',
            payload: review.id
        })

        setLiked(true)


    
    }


    return (
        <div style={{ margin: "10%", paddingRight: 0 }}>
            <Card sx={{minWidth: 300, p: 2, margin: 2, maxWidth: 700 }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: 'darkolivegreen' }} aria-label="yapcircle">
                        Yap
                        </Avatar>
                        }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                        }
                    titleTypographyProps={{variant:'h5'}}
                    title={review.reviewAuthor_firstName} 
                    subheader="is yapping!"
                />
                <CardContent>
                    <Typography variant='caption'>
                        recently read:
                    </Typography>
                    <Typography variant='h6'>
                        {review.book_title} by {review.book_author}
                    </Typography>
                    <Typography variant='body2'>
                        rating: {review.rating}/10
                    </Typography>
                    <Typography variant='subtitle1'>
                    {review.review_input}
                    
                    </Typography>
                </CardContent>
                {review.user_id === user.id &&
                    <CardActions>
                        <Button onClick={deleteReview} variant='outlined' size="small">Delete</Button>
                        <Button onClick={editReview}variant='outlined' size="small">Edit</Button>
                    </CardActions>
                }
                <CardActions>
                    <IconButton disabled = {liked} onClick={addLike}>
                        <FavoriteIcon style={{ color: liked ? "red" : "grey" }} />
                    </IconButton>
                    <div>
                        {review.like_count} likes
                    </div>
                </CardActions>
            </Card>
        </div>
    )
}


export default ReviewPost