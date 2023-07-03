import { Routes, Route } from 'react-router-dom';


import { Box } from "@mui/system";

import Phonebook from "pages/Phonebook";
import Header from './Header';
import Login from 'pages/Login';
import Signup from 'pages/Signup';

export const App = () => {
  return (
    <Box>
      <Header />
      <Routes>
        <Route
          path="/"
          element = {<Phonebook/>}
        />
        <Route
          path="/signup"
          element={<Signup />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
      </Routes>
    </Box>
  );
};
