// ForgotPassword.js
import React, { useState } from 'react';
import f1 from './Images/6.jpg'
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  CardMedia,
} from '@mui/material';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add logic for submitting the password reset request to the server
    // You'll need to implement a backend endpoint for this purpose
    console.log('Reset password for email:', email);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} style={{ padding: 20, marginTop: 50 }}>
        <CardMedia
          component="img"
          alt="Forgot Password"
          height="360"
          width="400"
          image={f1} // Replace with the actual path to your image
        />
        <Typography variant="h5" gutterBottom>
          Forgot Password
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Email Address"
                type="email"
                fullWidth
                variant="outlined"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Reset Password
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default ForgotPassword;
