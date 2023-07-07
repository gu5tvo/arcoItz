import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/landing';
import LoginPage from '../pages/login';
import RegisterPage from '../pages/register';
import UserDashboardPage from '../pages/dashboard';
import SearchPage from '../pages/search';
import ProtectedRoute from '../components/ProtectedRouteUser';
import AdminProtectedRoute from '../components/ProtectedRouterAdmin';
import Profile from '../pages/profile';
import { Painel } from '../pages/admin/painel';
import City from '../pages/admin/city/'
import ManageAdmins from '../pages/admin/manageAdmins';
import AdminRegisterPage from '../pages/admin/register';
import SectorPage from '../pages/admin/sector';
import AdminSearchPage from '../pages/admin/search';

import AdminLogin from '../pages/admin/login/';
import EditAdminProfile from '../pages/admin/editProfile';
import ResetPage from '../pages/reset';

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
            <Route path="/reset/*" element={<ResetPage/>}/>
            {/* <AdminProtectedRoute path="/login" element={AdminLogin} isPrivate redirectTo="/admin/login" /> */}
            <Route path="/admin/login/" element={<AdminLogin/>} />

            <Route path="/admin/painel/*" element={<AdminProtectedRoute path="/admin/ainel" element={Painel} isPrivate redirectTo="/admin/login" />} />
            <Route path="/admin/manage/*" element={<AdminProtectedRoute path="/admin/manage" element={ManageAdmins} isPrivate redirectTo="/admin/login" />} />
            <Route path="/admin/register/*" element={<AdminProtectedRoute path="/admin/register" element={AdminRegisterPage} isPrivate redirectTo="/admin/login" />} />
            <Route path="/admin/city/*" element={<AdminProtectedRoute path="/admin/city" element={City} isPrivate redirectTo="/admin/login" />} />
            <Route path="/admin/sector/*" element={<AdminProtectedRoute path="/admin/sector" element={SectorPage} isPrivate redirectTo="/admin/login" />} />
            <Route path="/admin/users/*" element={<AdminProtectedRoute path="/admin/users" element={AdminSearchPage} isPrivate redirectTo="/admin/login" />} />
            <Route path="/admin/*" element={<AdminProtectedRoute path="/admin/login" element={EditAdminProfile} isPrivate redirectTo="/admin/login" />} />

            
        </Routes>
    )
}