import { Routes, Route } from 'react-router-dom';

import { Box } from "@mui/system";

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Phonebook from "pages/Phonebook";
import HeaderNav from './HeaderNav';
import Login from 'pages/Login';
import Register from 'pages/Register';
import StyledWelcome from 'pages/styled-welcome';

export const App = () => {
  return (
    <Box>
      <HeaderNav />
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute>
              <StyledWelcome />
            </PublicRoute>
          }
        />
        <Route
          path="/phonebook"
          element={
            <PrivateRoute>
              <Phonebook />
            </PrivateRoute>}
        />      
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>}
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>}
        />
      </Routes>
    </Box>
  );
};
