import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Signup from './account/Signup';
import Login from './account/Login';
import PrivateComponent from './component/privateComponent';
import Form from './component/Form';
import Employee from './component/Employee';
import EditEmployee from './component/EditEmployee';
import DeparmentForm from './component/DeparmentForm';
import Deparment from './component/Department';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditDeparment from './component/EditDeparment';

import DeparmentDetails from './component/DeparmentDetails';

export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<PrivateComponent />}>
          <Route path="/home" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/editEmployee" element={<EditEmployee />} />
          <Route path="/deparmentform" element={<DeparmentForm />} />
          <Route path="/deparment" element={<Deparment />} />

          <Route path="/deparmentdetails/:id" element={<DeparmentDetails />} />

          <Route path="/editdeparment" element={<EditDeparment />} />
        </Route>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <ToastContainer />
    </>
  );
};
