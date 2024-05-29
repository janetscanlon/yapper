import React, { useState } from 'react'
import { Box, Button, TextField } from '@mui/material/'
import SearchIcon from '@mui/icons-material/Search'
import { useDispatch } from 'react-redux'


function SearchUsersPage() {

    //declare a useState variable for the searched username input
    const [searchedUsername, setSearchedUsername] = useState('')


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
        <TextField onChange={(e) => setSearchedUsername(e.target.value)} placeholder='Search for username...' variant='outlined' />
        <Button onClick= {SearchUsers} variant='contained'>Search</Button>
        </Box>


        
    )
}

export default SearchUsersPage;