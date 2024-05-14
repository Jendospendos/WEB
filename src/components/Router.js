import React from 'react';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import {
  createHashRouter,
  RouterProvider
} from 'react-router-dom';
import ReactDOM from 'react-dom';
import ModalProfile from './components/ModalProfile';
import {Home} from "./components/Home";
import Contacts from "./components/Contacts"
import First from './First';


const router = createHashRouter([
  {
    path: "profile",
    element: <ModalProfile />,
    path: "/",
    element: <Home />,
    path: "contacts",
    element: <Contacts />,
    path: "/button",
    element: <First />

  }
]);