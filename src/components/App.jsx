import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { Box } from "@mui/system";
import LinearProgress from '@mui/material/LinearProgress';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import HeaderNav from './HeaderNav';

const Phonebook = lazy(()=> import ("pages/Phonebook"));
const Login = lazy(()=> import ('pages/Login'));
const Register = lazy(()=> import ('pages/Register'));
const StyledWelcome = lazy(()=> import  ('pages/styled-welcome'));


export const App = () => {
  return (
    <Box>
      <HeaderNav />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<LinearProgress color="secondary"/>}>
              <PublicRoute>
                <StyledWelcome />
              </PublicRoute>
            </Suspense>
          }
        />
        <Route
          path="/phonebook"
          element={
            <Suspense fallback={<LinearProgress color="secondary"/>}>
              <PrivateRoute>
                <Phonebook />
              </PrivateRoute>
            </Suspense>}
        />      
        <Route
          path="/register"
          element={
            <Suspense fallback={<LinearProgress color="secondary"/>}>
              <PublicRoute>
                <Register />
              </PublicRoute>
            </Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <Suspense fallback={<LinearProgress/>}>
              <PublicRoute>
                <Login />
              </PublicRoute>
            </Suspense>
          }
        />
      </Routes>
    </Box>
  );
};
