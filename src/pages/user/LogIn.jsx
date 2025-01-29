/* ========== EXTERNAL MODULES ========== */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Button,
  Alert,
  TextField,
  Stack,
  IconButton,
  InputAdornment,
} from '@mui/material';
import {  Visibility, VisibilityOff } from '@mui/icons-material';
import axios from 'axios';


/* ========== INTERNAL MODULES ========== */
import { Page, Row } from '../../stylesheets';
import { useAuth } from '../../contexts/AuthContext';

/* ========== EXPORTS ========== */
export default function LogIn() {

  /* --- STATE HOOKS --- */
  const { setCurrentUser } = useAuth();
  const [ email, setEmail ]  = useState('');
  const [ password, setPassword ] = useState('');
  const [ showPassword, setShowPassword ] = useState(false);
  const [ error, setError ] = useState('');
  const [ loading, setLoading ] = useState(false);
  const navigate = useNavigate();

  /* --- LIFECYCLE METHODS --- */
  /* --- EVENT HANDLERS --- */
  const handleEmailEntry = ({ target: { value } }) => setEmail(value);
  const handlePasswordEntry = ({ target: { value } }) => setPassword(value);

  const handleLogIn = async event => {
    event.preventDefault();

    try {
      setError('');
      setLoading(true);

      setCurrentUser({ email });

      axios.get(`http://localhost:3001/login/${email}`)
      .then(res => {
        console.log(`Data sent: ${res.data}`);
        console.log(`Status: ${res.status}`);
      });
    } catch (err) {
      console.error('Log In Error: ', err);
      setError('Failed to Log In');
    }

    setLoading(false);
    return navigate('/');
  }

  const handleClear = () => {
    setEmail('');
    setPassword('');

  }

  const handleShowPassword = () => setShowPassword((show) => !show)

  /* --- RENDER METHODS --- */
  /* --- RENDERER --- */
  return (
    <Page>
      <Row>
        <h1>Sign In</h1>
      </Row>
      <form>
        <Stack
          spacing={{ xs: 3}}
          useFlexGap
        >
          {error && <Alert severity='error'>{error}</Alert>}
          <TextField
            id='email'
            name={'email'}
            onChange={handleEmailEntry}
            label='Email'
            type='email'
            variant='outlined'
            value={email}
            required
            sx={{ background: '#121212'}}
          />
          <TextField
            id='password'
            name={'password'}
            onChange={handlePasswordEntry}
            label='Password'
            type={showPassword ? 'text' : 'password'}
            variant='outlined'
            value={password}
            required
            sx={{background: '#121212'}}
            InputProps={{
              endAdornment:<InputAdornment position='end'>
                <IconButton
                  aria-label='toggle password visibility'
                  onClick={handleShowPassword}
                  edge='end'
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }}
          />

          <Row>
            <Button onClick={handleLogIn} disabled={loading} variant='contained' color='secondary' >Submit</Button>
            <Button onClick={handleClear} disabled={loading} variant='outlined' color='secondary' >Clear</Button>
          </Row>
          <p>Don't have an account? <Button component={Link} to={'/Register'} color='secondary' >Sign Up</Button></p>
        </Stack>
      </form>
    </Page>
  )
}