import React from 'react';

//import mui components 
import Avatar  from '@mui/material/Avatar'
import avatar from './images/headshot.jpg'
import qrCode from './images/QR.jpg'
import { Typography, Box, Stack } from '@mui/material';
import { QrCode, TypeSpecimenOutlined } from '@mui/icons-material';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div>
      <Box>
        <Typography fontWeight={'bold'}>Technologies Used:</Typography>
        <li>Material UI, React/Redux, SQL, Node, Express</li>
        <Typography fontWeight={'bold'}>Toughest Challenge:</Typography>
        <li>learning and implementing Material UI in such a short timeframe</li>
        <Typography fontWeight={'bold'}>Up and Coming:</Typography>
        <li>give users the ability to comment on their friend's review posts!</li>
        <Typography fontWeight={'bold'}>Thank you!</Typography>
        <br/>
        <Typography variant='subtitle2'>Add me on LinkedIn!</Typography>


      </Box>
      <Box sx={{display: 'inline-flex'}}>
      <Stack direction="column">
        <Typography fontWeight={'bold'}>Janet Scanlon</Typography>
        <Stack direction="row" spacing={2} alignContent='center'>
            <Avatar alt="Janet Headshot" src={avatar}
              sx={{width: 200, height: 250, alignContent: 'center',}} 
              variant='circular'/>
            <Avatar alt="QR Code" src={qrCode} variant='square' sx={{width:100, height:100, paddingTop:8}}/>
        </Stack>
      </Stack>
     </Box>
    </div>
  );
}

export default AboutPage;
