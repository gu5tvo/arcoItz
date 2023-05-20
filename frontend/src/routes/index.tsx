import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import Login from '../pages/Login/Login';

export default function MakeRoutes(){
    return (
        <Routes>
            <Route path="/" element={ <Home/> }/>
            <Route path="/login" element={ <Login/> }/>
            <Route path="/about" element={<h1>About</h1>} />
            <Route path="/dashboard" element={<h1>Dashboard</h1>} />
        </Routes>
    )
}