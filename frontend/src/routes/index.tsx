import React from 'react';
import { Routes, Route } from 'react-router-dom';

export default function MakeRoutes(){
    return (
        <Routes>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/about" element={<h1>About</h1>} />
            <Route path="/dashboard" element={<h1>Dashboard</h1>} />
        </Routes>
    )
}