import React, {UseState} from 'react'
import { useSelector } from 'react-redux'
//! after backend stufff you should be able to hook 
//! into the review info reducer and here and render hehe 
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

//mui components 
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import Button from '@mui/material/Button'
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from '@mui/material/CardHeader'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import FavoriteIcon from '@mui/icons-material/Favorite'
import MoreVertIcon from "@mui/icons-material/MoreVert"
import { grey } from "@mui/material/colors"


function ReviewPost({review}) {
    const dispatch = useDispatch()
    const history = useHistory()
    //hook into user reducer
    const user = useSelector(store => store.user)

    const deleteReview = () => {
        console.log('delete clicked! Review id is:', review.id)
        dispatch({
            type: 'DELETE_REVIEW',
            payload: review.id
        })
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
    }

    const bull = (
        <Box
          component="span"
          sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
        >
          •
        </Box>
      );


    return (
        <div style={{ margin: "10%"}}>
            <Card sx={{ maxWidth: 600 }}>
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
                    title={user.first_name} 
                    subheader="is yapping!"
                />
                <CardContent>
                    <Typography variant='h6'>
                        {review.book_title} by {review.book_author}
                    </Typography>
                    <Typography variant='subtitle1'>
                        Review:
                    </Typography>
                    <Typography variant='subtitle1'>
                    {review.review_input}
                    <div>
                        {review.like_count} likes
                    </div>
                    </Typography>
                </CardContent>
                {review.user_id === user.id &&
                    <CardActions>
                        <Button onClick={deleteReview} variant='outlined' size="small">Delete</Button>
                        <Button onClick={editReview}variant='outlined' size="small">Edit</Button>
                    </CardActions>
                }
                <CardActions>
                    <IconButton>
                        <FavoriteIcon onClick={addLike}/>
                    </IconButton>
                </CardActions>
               
            </Card>
        </div>
    )
}


export default ReviewPost