import React, { Component } from 'react';
import SignUp from './signup';

import { Route,Routes } from 'react-router-dom';
import Login from './login';
import Dash1 from './Dashboard';
import TaskList from './addtask';
import ContactUs from './contact';
import ForgotPassword from './forgot';

export const Page=()=>
{
    return(<>
    <Routes>
        {/* <Route path='/dash' element={<Dash1/>} /> */}
       
        <Route path='/home' element={<TaskList/>} />
        <Route path='/' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/forgot' element={<ForgotPassword/>} />
       
        <Route path='/contactus' element={<ContactUs/>} />
       
     
    </Routes>
    
    </>)
}