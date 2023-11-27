// Register.js

import React, { useState } from 'react';
import { TextField, Button, Container, Paper, Typography } from '@mui/material';
import { green } from '@mui/material/colors';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    // Implement your registration logic here
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
  };
  const Background={
    position: "absolute",
    width: "100%",
    height: "100%",
    
    backgroundImage: "url(https://media.istockphoto.com/id/1455375812/photo/luxury-single-story-home-exterior-surrounded-by-trees.webp?b=1&s=170667a&w=0&k=20&c=a14PkjKmtTkan1TLaQZDAOCMqB8_zLwUYFzWmNGThk0=)",
    
    backgroundPosition: "center",
    backgroundSize: "cover",
    
  };

  return (
    <div style={Background}>
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h5">SIGNUP</Typography>
        <TextField
          label="First Name"
          variant="outlined"
          margin="normal"
          fullWidth
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <TextField
          label="Last Name"
          variant="outlined"
          margin="normal"
          fullWidth
          required
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <TextField
          label="Email Address"
          type="email"
          variant="outlined"
          margin="normal"
          fullWidth
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          fullWidth
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          label="Confirm Password"
          type="password"
          variant="outlined"
          margin="normal"
          fullWidth
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button variant="contained" color="primary" fullWidth onClick={handleRegister}>
         Sign Up
        </Button>
        {/* <Button  color="primary" fullWidth onClick={handleRegister}>
        <u> Already have an account?</u>
        </Button> */}<pre></pre>
         
      </Paper>
    </Container>
    </div>
  );
};

export default Register;