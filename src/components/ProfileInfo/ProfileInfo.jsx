import React, { useState} from 'react'
import { useSelector } from 'react-redux'



function ProfileInfo() {

    const user = useSelector((store) => store.user)
    

    return(
        <div>
            <h3>Hi, {user.first_name}!</h3>
        </div>
    )
}

export default ProfileInfo