import React, { useState } from 'react';
import { useSelector } from 'react-redux'

//mui component libraries 


//import profile info component 
import ProfileInfo from './ProfileInfo'

function ProfilePage() {


    return(
        
        <div className='container'>
                <ProfileInfo />
        </div>
    )
}

export default ProfilePage;