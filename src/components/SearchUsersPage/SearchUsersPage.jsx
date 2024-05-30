import React, { useState } from 'react'
import { Box, Button, TextField } from '@mui/material/'
import SearchIcon from '@mui/icons-material/Search'
import { useDispatch, useSelector } from 'react-redux'

//import components
import UserList from './UserList'

function SearchUsersPage() {

    //declare a useState variable for the searched username input
    const [searchedUsername, setSearchedUsername] = useState('')

    const searchedUsers = useSelector((store) => store.searchedUsers)


    const dispatch = useDispatch()

    const SearchUsers = () => {
        console.log('clicked! Searched username is', searchedUsername)
        dispatch({
            type: 'SEARCH_USERS',
            payload: searchedUsername
        })
        
    }


    return(
        <Box sx={ {p: 4}}>
            <SearchIcon/>
        <TextField onChange={(e) => setSearchedUsername(e.target.value)} placeholder='Search for username...' variant='filled' />
        <Button onClick= {SearchUsers} variant='contained'>Search</Button>
        
        
        {searchedUsers.map(user => {
            return(
            <UserList key={user.id} user={user}/>
            )
        })}

      
        </Box>
        
    )
}

export default SearchUsersPage;