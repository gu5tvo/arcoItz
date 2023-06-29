import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/landing';
import LoginPage from '../pages/login';
import RegisterPage from '../pages/register';
import UserDashboardPage from '../pages/dashboard';
import SearchPage from '../pages/search';
import ProtectedRoute from '../components/ProtectedRoute';
import Profile from '../pages/profile';
import { Painel } from '../pages/painel';
import Cities from '../pages/cities';

export default function MakeRoutes(){

    return (
        <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/register" element={<RegisterPage/>} />
            <Route path="/search" element={<SearchPage/>} />
            <Route path="/l" element={<UserDashboardPage/>} />
            <Route path="/painel" element={<Painel/>} />
            <Route path="/cities" element={<Cities/>} />
            <Route path="/profile/:id" element={<Profile/>} />
            <Route path="/dashboard/*" element={<ProtectedRoute path="/dashboard" element={UserDashboardPage} isPrivate redirectTo="/login" />} />
        </Routes>
    )
}