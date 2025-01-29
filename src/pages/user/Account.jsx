/* ========== EXTERNAL MODULES ========== */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Button,
  Grid,
  TextField,
  Select,
  Alert,
  MenuItem,
  FormControl,
  InputLabel,
 } from '@mui/material';

/* ========== INTERNAL MODULES ========== */
import { Page, Row } from '../../stylesheets';
import { useAuth } from '../../contexts/AuthContext';

/* ========== EXPORTS ========== */
export default function Account() {

  /* --- STATE HOOKS --- */

  const { currentUser, setCurrentUser } = useAuth();
  const [ error, setError ] = useState('');
  const [ userInfo, setUserInfo ] = useState({
    firstName: (currentUser && currentUser.firstName)||'',
    lastName: (currentUser && currentUser.lastName)||'',
    address: (currentUser && currentUser.address)||'',
    address2: (currentUser && currentUser.address2)||'',
    city: (currentUser && currentUser.city)||'',
    state: (currentUser && currentUser.state)||'',
    zip: (currentUser && currentUser.zip)||'',
    email: (currentUser && currentUser.email)||'',
    phone: (currentUser && currentUser.phone )|| ''
  });
  const navigate = useNavigate();

  /* --- LIFECYCLE METHODS --- */
  useEffect(() => {
    axios.get(`http://localhost:3001/user/${currentUser.email}`)
    .then(res => {
      console.log('Data sent: ', res.data);
      console.log('Status: ', res.status);
    });
  }, [currentUser]);

  /* --- EVENT HANDLERS --- */
  const handleChange = ({ target: { name, value } }) => {
    setUserInfo(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleClear = () => {
    setUserInfo({
      firstName: '',
      lastName: '',
      address: '',
      address2: '',
      city: '',
      state: '',
      zip: '',
      email: '',
      phone: ''
    });
  }

  const handlePhone = ({ target: { name, value } }) => {

    if (value !== '') {
      var num = value.replace(/\D/g,'');

      if (num[0] !== '1') {
        value = '+ 1 (' + num.substring(0,3) + ') ' + num.substring(3,6) + '-' + num.substring(6,11);
      } else {
        value = '+' + num.substring(0,1) + ' (' + num.substring(1,4) + ') ' + num.substring(4,7) + '-' + num.substring(7,11);
      }
    }

    setUserInfo(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleUpdate = () => {
    setCurrentUser(userInfo);

    setTimeout(() => {
      setError('');
      navigate('/');
    }, 2000);

    // axios.get(`http://localhost:3001/user/update/${currentUser}`)
    // .then(res => {
    //   console.log(`Data sent: ${res.data}`);
    //   console.log(`Status: ${res.status}`);
    // setTimeout(() => {
    //   setError('');
    //   navigate('/');
    // }, 2000);
    //   return setError('Information Updated Successfully');
    // });

    return setError('Information Updated Successfully')
  }
  /* --- RENDER METHODS --- */
  /* --- RENDERER --- */
  return (
    <Page>
      {error && <Alert severity='success'>{error}</Alert>}
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Row>
            <h1>Account</h1>
          </Row>
        </Grid>
        <Grid item xs={6}>
          <TextField
            id='firstName'
            name={'firstName'}
            onChange={handleChange}
            label='First Name'
            type='text'
            variant='outlined'
            value={userInfo && userInfo.firstName}
            required
            sx={{ background: '#121212'}}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id='lastName'
            name={'lastName'}
            onChange={handleChange}
            label='Last Name'
            type='text'
            variant='outlined'
            value={userInfo && userInfo.lastName}
            required
            sx={{ background: '#121212'}}
          />
        </Grid>
        <Grid item xs={12}>
          <Row>
            <h3>Address</h3>
          </Row>
        </Grid>
        <Grid item xs={6}>
          <TextField
            id='address'
            name={'address'}
            onChange={handleChange}
            label='Address'
            type='text'
            variant='outlined'
            value={userInfo && userInfo.address}
            required
            sx={{ background: '#121212'}}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id='address2'
            name={'address2'}
            onChange={handleChange}
            label='Address Line 2'
            type='text'
            variant='outlined'
            value={userInfo && userInfo.address2}
            sx={{ background: '#121212'}}
          />
        </Grid>
        <Grid item xs={5}>
          <TextField
            id='city'
            name={'city'}
            onChange={handleChange}
            label='City'
            type='text'
            variant='outlined'
            value={userInfo && userInfo.city}
            required
            sx={{ background: '#121212'}}
          />
        </Grid>
        <Grid item xs={3}>
          <FormControl fullWidth>
            <InputLabel id='stateLabel'>State</InputLabel>
            <Select
              id='state'
              name={'state'}
              onChange={handleChange}
              labelId='stateLabel'
              variant='outlined'
              value={( userInfo && userInfo.state ) || ''}
              required
              sx={{ background: '#121212'}}
            >
              <MenuItem value={"alabama"}>AL</MenuItem>
              <MenuItem value={"alaska"}>AK</MenuItem>
              <MenuItem value={"arizona"}>AZ</MenuItem>
              <MenuItem value={"arkansas"}>AR</MenuItem>
              <MenuItem value={"california"}>CA</MenuItem>
              <MenuItem value={"colorado"}>CO</MenuItem>
              <MenuItem value={"connecticut"}>CT</MenuItem>
              <MenuItem value={"delaware"}>DE</MenuItem>
              <MenuItem value={"florida"}>FL</MenuItem>
              <MenuItem value={"georgia"}>GA</MenuItem>
              <MenuItem value={"hawaii"}>HI</MenuItem>
              <MenuItem value={"idaho"}>ID</MenuItem>
              <MenuItem value={"illinois"}>IL</MenuItem>
              <MenuItem value={"indiana"}>IN</MenuItem>
              <MenuItem value={"iowa"}>IA</MenuItem>
              <MenuItem value={"kansas"}>KS</MenuItem>
              <MenuItem value={"kentucky"}>KY</MenuItem>
              <MenuItem value={"louisiana"}>LA</MenuItem>
              <MenuItem value={"maine"}>ME</MenuItem>
              <MenuItem value={"maryland"}>MD</MenuItem>
              <MenuItem value={"massachusetts"}>MA</MenuItem>
              <MenuItem value={"michigan"}>MI</MenuItem>
              <MenuItem value={"minnesota"}>MN</MenuItem>
              <MenuItem value={"mississippi"}>MS</MenuItem>
              <MenuItem value={"missouri"}>MO</MenuItem>
              <MenuItem value={"montana"}>MT</MenuItem>
              <MenuItem value={"nebraska"}>NE</MenuItem>
              <MenuItem value={"nevada"}>NV</MenuItem>
              <MenuItem value={"newHampshire"}>NH</MenuItem>
              <MenuItem value={"newJersey"}>NJ</MenuItem>
              <MenuItem value={"newMexico"}>NM</MenuItem>
              <MenuItem value={"newYork"}>NY</MenuItem>
              <MenuItem value={"northCarolina"}>NC</MenuItem>
              <MenuItem value={"northDakota"}>ND</MenuItem>
              <MenuItem value={"ohio"}>OH</MenuItem>
              <MenuItem value={"oklahoma"}>OK</MenuItem>
              <MenuItem value={"oregon"}>OR</MenuItem>
              <MenuItem value={"pennsylvania"}>PA</MenuItem>
              <MenuItem value={"rhodeIsland"}>RI</MenuItem>
              <MenuItem value={"southCarolina"}>SC</MenuItem>
              <MenuItem value={"southDakota"}>SD</MenuItem>
              <MenuItem value={"tennessee"}>TN</MenuItem>
              <MenuItem value={"texas"}>TX</MenuItem>
              <MenuItem value={"utah"}>UT</MenuItem>
              <MenuItem value={"vermont"}>VT</MenuItem>
              <MenuItem value={"virginia"}>VA</MenuItem>
              <MenuItem value={"washington"}>WA</MenuItem>
              <MenuItem value={"westVirginia"}>WV</MenuItem>
              <MenuItem value={"wisconsin"}>WI</MenuItem>
              <MenuItem value={"wyoming"}>WY</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <TextField
            id='zip'
            name={'zip'}
            onChange={handleChange}
            label='Zipcode'
            type='number'
            variant='outlined'
            value={userInfo && userInfo.zip}
            required
            sx={{ background: '#121212'}}
          />
        </Grid>
        <Grid item xs={12}>
          <Row>
            <h3>Contact Info</h3>
          </Row>
        </Grid>
        <Grid item xs={6}>
          <TextField
            id='email'
            name={'email'}
            onChange={handleChange}
            label='Email'
            type='email'
            variant='outlined'
            value={userInfo && userInfo.email}
            required
            sx={{ background: '#121212'}}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id='phone'
            name={'phone'}
            onChange={handlePhone}
            label='Phone Number'
            type='tel'
            variant='outlined'
            value={userInfo && userInfo.phone}
            required
            sx={{ background: '#121212'}}
          />
        </Grid>
        <Grid item xs={12}>
        </Grid>
        <Grid item xs={12}>
          <Row>
            <Button onClick={handleUpdate} variant='contained' color='secondary' >Update</Button>
            <Button onClick={handleClear} variant='outlined' color='secondary' >Clear</Button>
          </Row>
        </Grid>
      </Grid>
    </Page>
  )
}