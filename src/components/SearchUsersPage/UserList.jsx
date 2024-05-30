import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'

//mui components 
import { Typography } from '@mui/material'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from '@mui/material/CardHeader'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import { AddCircleOutlineOutlined, AddCircle } from '@mui/icons-material';
import CardActions from "@mui/material/CardActions"

function UserList({user}){

    const dispatch = useDispatch()

    //define state for conditional rendering 
    const [liked, setLiked] = useState(false)


    const handleFollowOnClick = () => {
        dispatch({
            type: 'ADD_FOLLOW',
            payload: user.id
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
                            <IconButton disabled={liked} onClick={handleFollowOnClick} aria-label="settings">
                                {liked ?
                                    <AddCircle style={{color: 'darkolivegreen'}}/> :
                                    <AddCircleOutlineOutlined />
                                }
                            </IconButton>
                            }
                        titleTypographyProps={{variant:'h5'}}
                        title={user.first_name}
                        subheader= {user.pronouns}
                    />
                <CardContent>
                    <Typography variant='h7'>
                        Username: {user.username}
                    </Typography>
                </CardContent>


            </Card>
        </div>
    )
}


export default UserList