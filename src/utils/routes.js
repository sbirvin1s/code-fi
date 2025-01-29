/* ========== EXTERNAL MODULES ========== */
import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

/* ========== INTERNAL MODULES ========== */
import App from '../pages/App.jsx';
import Home from '../pages/Home.jsx';
import Account from '../pages/user/Account.jsx';
import Error from '../pages/Error.jsx';
import Register from '../pages/user/Register.jsx';
import LogIn from '../pages/user/LogIn.jsx';
import Radio from '../pages/Radio.jsx';


/* ========== EXPORTS ========== */
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} errorElement={<Error />}>
      <Route index element={<Home />} />
      <Route path='Register' element={<Register />} />
      <Route path='Account' element={<Account />} />
      <Route path='LogIn' element={<LogIn />} />
      <Route path='Radio' element={<Radio />} />
    </Route>
  )
);