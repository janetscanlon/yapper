import React, { useState } from 'react';
import { useSelector } from 'react-redux'

//mui component libraries 


//import profile info component 
import ProfileInfo from '../ProfileInfo/ProfileInfo';

function ProfilePage() {


    return(
        
        <div className='container'>
            <h2>Profile Page</h2>
            <h3>
                <ProfileInfo />
            </h3>
        </div>
    )
}

export default ProfilePage;