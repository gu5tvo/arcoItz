import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/landing';
import LoginPage from '../pages/login';
import RegisterPage from '../pages/register';
import UserDashboardPage from '../pages/dashboard';
import SearchPage from '../pages/search';
import ProtectedRoute from '../components/ProtectedRoute';
import Profile from '../pages/profile';
import { Painel } from '../pages/admin/painel';
import City from '../pages/admin/city/'
import ManageAdmins from '../pages/admin/manageAdmins';
import AdminRegisterPage from '../pages/admin/register';

import AdminSearchPage from '../pages/admin/search';

import AdminLogin from '../pages/admin/login/';
import EditAdminProfile from '../pages/admin/editProfile';

export default function MakeRoutes(){

    return (
        <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/register" element={<RegisterPage/>} />
            <Route path="/search" element={<SearchPage/>} />
            <Route path="/l" element={<UserDashboardPage/>} />
            <Route path="/profile/:id" element={<Profile/>} />
            <Route path="/dashboard/*" element={<ProtectedRoute path="/dashboard" element={UserDashboardPage} isPrivate redirectTo="/login" />} />
            {/* AdminSearchPage */}
            <Route path="/admin/painel" element={<Painel/>} />
            <Route path="/admin/manage" element={<ManageAdmins/>} />
            <Route path="/admin/register" element={<AdminRegisterPage/>} />
            <Route path="/admin/login" element={<AdminLogin/>} />
            <Route path="/admin/city" element={<City/>} />
            <Route path="/admin/users" element={<AdminSearchPage/>} />
            <Route path="/admin" element={<EditAdminProfile/>} />
        </Routes>
    )
}