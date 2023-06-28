import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/landing';
import LoginPage from '../pages/login';
import RegisterPage from '../pages/register';
import UserDashboardPage from '../pages/dashboard';
import SearchPage from '../pages/search';
import ProtectedRoute from '../components/ProtectedRoute';

export default function MakeRoutes(){

    return (
        <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/register" element={<RegisterPage/>} />
            <Route path="/search" element={<SearchPage/>} />
            <Route path="/l" element={<UserDashboardPage/>} />
            <Route path="/dashboard/*" element={<ProtectedRoute path="/dashboard" element={UserDashboardPage} isPrivate redirectTo="/login" />} />
        </Routes>
    )
}