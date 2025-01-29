/* ========== EXTERNAL MODULES ========== */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Button,
  Alert,
  TextField,
  Stack,
  InputAdornment,
  IconButton,
} from '@mui/material';
import {  Visibility, VisibilityOff } from '@mui/icons-material';

/* ========== INTERNAL MODULES ========== */
import { Page, Row } from '../../stylesheets';
import { useAuth } from '../../contexts/AuthContext';

/* ========== EXPORTS ========== */
export default function Register() {

  /* --- STATE HOOKS --- */
  const { setCurrentUser } = useAuth();
  const [ email, setEmail ]  = useState('');
  const [ password, setPassword ] = useState('');
  const [ passwordConfirmation, setPasswordConfirmation ] = useState('');
  const [ showPassword, setShowPassword ] = useState(false);
  const [ showConfirmPassword, setShowConfirmPassword ] = useState(false);
  const [ error, setError ] = useState('');
  const [ loading, setLoading ] = useState(false);
  const navigate = useNavigate();
  const isError = Boolean(error);

  /* --- LIFECYCLE METHODS --- */
  /* --- EVENT HANDLERS --- */
  const handleEmailEntry = ({ target: { value } }) => setEmail(value);
  const handlePasswordEntry = ({ target: { value } }) => setPassword(value);
  const handlePasswordConfirmationEntry = ({ target: { value } }) => setPasswordConfirmation(value);
  const handleShowPassword = () => setShowPassword((show) => !show)
  const handleShowConfirmPassword = () => setShowConfirmPassword((show) => !show)

  const handleRegister = async event => {
    event.preventDefault();

    if (password !== passwordConfirmation) {
      setTimeout(() => {
        setError('');
      }, 2000);
      return setError('Passwords do not match')
    }

    try {
      setError('');
      setLoading(true);

      setCurrentUser({ email })

      axios.post(`http://localhost:3001/user/create/${email}`)
      .then(res => {
        console.log('Data sent: ', res.data);
        console.log('Status: ', res.status);
      });

    } catch (err) {
      console.error('Log In Error: ', err);
      setError('Failed to Log In');
    }

    setLoading(false);
    return navigate('/Account');
  }

  const handleClear = () => {
    setEmail('');
    setPassword('');
    setPasswordConfirmation('');
  }


  /* --- RENDER METHODS --- */
  /* --- RENDERER --- */
  return (
    <Page>
      <Row>
        <h1>Sign Up</h1>
      </Row>
      <form>
        <Stack
          spacing={{ xs: 6}}
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
            error={isError}
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
          <TextField
            id='confirmPassword'
            name={'confirmPassword'}
            onChange={handlePasswordConfirmationEntry}
            label='Confirm Password'
            type={showConfirmPassword ? 'text' : 'password'}
            variant='outlined'
            value={passwordConfirmation}
            error={isError}
            required
            sx={{background: '#121212'}}
            InputProps={{
              endAdornment:<InputAdornment position='end'>
                <IconButton
                  aria-label='toggle password visibility'
                  onClick={handleShowConfirmPassword}
                  edge='end'
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }}
          />

          <Row>
            <Button onClick={handleRegister} disabled={loading} variant='contained' color='secondary' >Submit</Button>
            <Button onClick={handleClear} disabled={loading} variant='outlined' color='secondary' >Clear</Button>
          </Row>
          <p>Already have an account? <Button component={Link} to={'/Login'} color='secondary' >Sign In</Button></p>
        </Stack>
      </form>
    </Page>
  )
}