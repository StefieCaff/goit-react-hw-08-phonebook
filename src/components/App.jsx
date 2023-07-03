import { Routes, Route } from 'react-router-dom';


import { Box } from "@mui/system";

import Phonebook from "pages/Phonebook";
import HeaderNav from './HeaderNav';
import Login from 'pages/Login';
import Register from 'pages/Register';

export const App = () => {
  return (
    <Box>
      <HeaderNav />
      <Routes>
        <Route
          path="/"
          element = {<Phonebook/>}
        />
        <Route
          path="/register"
          element={<Register />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
      </Routes>
    </Box>
  );
};
