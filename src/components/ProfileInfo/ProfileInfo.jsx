import React, { useState} from 'react'
import { useSelector } from 'react-redux'

//mui components
import Button from '@mui/material/Button';


function ProfileInfo() {

    const user = useSelector((store) => store.user)
    

    return(
        <div>
            <h3>Hi, {user.first_name}!</h3>
            <p>{user.pronouns}</p>
            <p>
                You've written 0 reviews!
                Get started by adding a review
            </p>
            <Button variant='contained'>New Review</Button>
            
            <p>Your Friends</p>
        </div>
    )
}

export default ProfileInfo