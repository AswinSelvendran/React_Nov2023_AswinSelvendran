import React, { useState } from 'react';
import Axios from 'axios'; // Import Axios
import ArrowRightAltRoundedIcon from '@mui/icons-material/ArrowRightAltRounded';
import './login.css';
import TextField from '@mui/material/TextField';
import EmailIcon from '@mui/icons-material/Email';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/Visibility';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Login = () => {
  const [visible, setVisible] = useState(false);
  const [type, setType] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onChange = () => {
    setVisible(!visible);
    setType(!type);
  };

  const handleSubmit = async () => {
    try {
      const response = await Axios.post('your_api_endpoint', {
        username: username,
        password: password,
      });

      console.log('Response:', response.data);
      // Add logic to handle the response as needed (e.g., redirect on success)
    } catch (error) {
      console.error('Error:', error);
      // Add logic to handle errors (e.g., display an error message)
    }
  };

  return (
    <body className="bg1">
      <div className="mainbox">
        <div className="box1"></div>
        <div className="box">
          <h1 style={{ color: 'white' }} className="heading">
            User Login
          </h1>
          <TextField
            className="name"
            placeholder="username/email"
            sx={{ color: 'white' }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <EmailIcon className="icon" style={{ color: 'white' }} />
                </InputAdornment>
              ),
            }}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br></br>
          <br />
          <TextField
            className="name"
            placeholder="password"
            type={type ? 'text' : 'password'}
            sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', color: 'white' }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" onClick={onChange} style={{ cursor: 'pointer', display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
                  {visible ? <VisibilityIcon style={{ color: 'white' }} /> : <VisibilityOffIcon style={{ color: 'white' }} />}
                </InputAdornment>
              ),
            }}
            onChange={(e) => setPassword(e.target.value)}
          />

          <br></br>
          <br />
          <p className="forgot">
            Forgot <a href="#" className="anchor1">
              Username/Password
            </a>
          </p>

          <button type="submit" className="button" onClick={handleSubmit}>
            Sign in
          </button>
          <br></br>
          <br />
          <a className="anchor2" href="/register">
            Create your Account --
          </a>
        </div>
      </div>
    </body>
  );
};

export default Login;
