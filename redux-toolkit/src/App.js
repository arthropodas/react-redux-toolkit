import logo from './logo.svg';
import './App.css';
import React, {lazy, suspense, useEffect, useState} from "react"
import {createBrowserRouter, RouterProvided, Outlet}  from "react-router-dom"
import { Provider } from "react-redux"
import Contact from './components/Contact';
import Header from './components/Header';
import Shimmer from './components/Shimmer';
import Resturantmenu from './components/Resturantmenu';
import Footer from './components/Footer';
import Body from './components/Body';
import Profile from './components/Profile';
import store from './store'

function App() {
  return (
   <Provider store={store}>
  
   </Provider>
  );
}

export default App;
