import React, { useReducer } from 'react'
import { BrowserRouter, Route,Routes } from "react-router-dom";
import { Navigate } from 'react-router-dom';
import Product from './product'
import Homepage from './Homepage'
import Login from './Login'
import Favt from './favt'
import Card from './card'
import Details from './details'
 import {stateReducer,initialState} from '../context/statereducer'
 import { stateContext } from '../context/statecontext';


export const Routing = () => {
   const [state,dispatch]=useReducer(stateReducer,initialState);
   

  return (
     <stateContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
    {state?. isLoggedIn ? (
<Routes>
<Route path="/Homepage" element={<Homepage />}></Route>
<Route path="/Product" element={<Product />}></Route> 
<Route path="/Favt" element={<Favt />}></Route> 
<Route path="/Card" element={<Card/>}></Route> 
<Route path="/Details" element={<Details/>}></Route> 
<Route path="*" element={<Navigate to={"/Homepage"}></Navigate>}></Route> 
  
</Routes>
    ):(
<Routes>
<Route path="/" element={<Login />}></Route>
<Route path="*" element={<Navigate to={"/"}></Navigate>}></Route> 
</Routes>
    )}
</BrowserRouter>
 </stateContext.Provider>
    )
}

