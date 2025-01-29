/* ========== EXTERNAL MODULES ========== */
import React, { useState } from 'react';
import { Link, useNavigate, Outlet, } from 'react-router-dom';
import styled from '@emotion/styled';
import {
  Avatar,
  Button,
  Stack,
  Divider,
  Menu,
  MenuItem,
  ListItemIcon,
  Tooltip,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import { Logout, Person } from '@mui/icons-material';

/* ========== INTERNAL MODULES ========== */
import { useAuth } from '../contexts/AuthContext.js';


/* ========== EXPORTS ========== */
export default function App() {

  /* --- STATE HOOKS --- */
  const { currentUser, logOut } = useAuth();
  const [ anchorEl, setAnchorEl ] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  /* --- LIFECYCLE METHODS --- */
  /* --- EVENT HANDLERS --- */
  const handleLogOut = () => {
    logOut();
    return navigate('LogIn');
  };
  const handleClick = event => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);


  /* --- RENDER METHODS --- */
  const renderSignInStatus = () => {
    if (!currentUser) {
      return (
        <UserMenu title="Sign In">
          <Button component={ Link } to={'LogIn'} variant="contained" color="secondary">
            Sign In
          </Button>
        </UserMenu>
      )
    } else {
      return (
        <>
          <UserMenu title="Account Settings">
            <Avatar
              alt="User Profile Pic"
              color="secondary"
              onClick={ handleClick }
              sx={{ bgcolor: '#ab47bc' }}
            >
              <Person />
            </Avatar>
          </UserMenu>
          <Menu
            anchorEl={ anchorEl }
            open={ open }
            onClose={ handleClose }
            onClick={ handleClose }
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
          >
            <MenuItem
              onClick={ handleClose }
                component={ Link }
                to={ 'Account' }
            >
              <ListItemIcon sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Avatar
                  alt="to Account Information"
                  sx={{ bgcolor: '#ab47bc' }}
                >
                  <Person />
                </Avatar>
                Account
              </ListItemIcon>
            </MenuItem>
            <Divider />
            <MenuItem onClick={ handleLogOut } >
              <ListItemIcon sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Logout fontSize="small" /> Logout
              </ListItemIcon>
            </MenuItem>
          </Menu>
        </>
      )
    }
  }

  /* --- RENDERER --- */
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Background>
          <BackgroundDiffuser>
            { renderSignInStatus() }
            <Header>
              <Stack
                direction="row"
                divider={<Divider orientation="vertical" flexItem/>}
                spacing={2}
              >
                <Button component={ Link } to={'/'} color='secondary'>Home</Button>
                <Button component={ Link } to={'Radio'} color='secondary'>Radio</Button>
              </Stack>
            </Header>
            <Outlet />
            <Footer>
              <Button
                component={ Link }
                to={'https://music.youtube.com/channel/UC4UtqLOP_fmimSqdzbIksBQ'}
                target='blank'  color='secondary'
              >
                DJ Cutman Radio
              </Button>
              <Button
                component={ Link }
                to={'https://music.youtube.com/channel/UCEG-f4I9kT_OFQv44ch6Y8Q'}
                target='blank'
                color='secondary'
              >
                Game Chops Radio
              </Button>
            </Footer>
          </BackgroundDiffuser>
        </Background>
      </ThemeProvider>
    </>
  )
}

/* ========== STYLES ========== */

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 100vw;
  margin: 0;
  overflow: hidden;
  background-image: url('../images/code-fiBG1.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-origin: inherit;
`;

const BackgroundDiffuser  = styled.div`
  display: flex;
  justify-content: center;
  background-color: rgba(14, 14, 14, 0.75);
  min-height: 80vh;
  min-width: 100vw;
`;

const UserMenu = styled(Tooltip)`
  display: flex;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  z-index: 3;
`;

const Footer = styled.div`
  display: flex;
  position: absolute;
  left: 0;
  bottom: 0;
  justify-content: space-evenly;
  align-items: center;
  min-width: 100vw;
  min-height: 10vh;
  background-color: rgba(14, 14, 14, 0.85);
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  min-width: 100%;
  min-height: 10vh;
  background-color: rgba(14, 14, 14, 0.85);
`;