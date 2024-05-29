import React from 'react';
import LoginForm from './LoginForm';
import { useHistory } from 'react-router-dom';
//import MUI 
import Button from '@mui/material/Button';


function LoginPage() {
  const history = useHistory();

  return (
    <div>
      <LoginForm />

      <center>
        <Button variant="contained"
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/registration');
          }}
        >
          Register
        </Button>
      </center>
    </div>
  );
}

export default LoginPage;
