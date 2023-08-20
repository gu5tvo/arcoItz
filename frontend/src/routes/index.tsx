import { Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/landing';
import LoginPage from '../pages/SignInPage';

import SignUpPage from '../pages/SignUpPage';
import AdminSignUpPage from '../pages/AdminSignUpPage';
import AdminSignInPage from '../pages/AdminSignInPage';

import DashboardPage from '../pages/Dashboard';
import SearchPage from '../pages/search';
import ProtectedRoute from '../components/ProtectedRouteUser';
import AdminProtectedRoute from '../components/ProtectedRouterAdmin';
import Profile from '../pages/profile';
import { Painel } from '../pages/admin/painel';
import ManageAdmins from '../pages/admin/manageAdmins';
import AdminSearchPage from '../pages/admin/search';

import EditAdminProfile from '../pages/admin/editProfile';
import ResetPage from '../pages/reset';

import React from 'react'
import AdminCities from '../pages/AdminCities';
import AdminSectors from '../pages/AdminSectors';

export default function MakeRoutes(){

    return (
        <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/cadastro" element={<SignUpPage/>} />
            <Route path="/search" element={<SearchPage/>} />
            <Route path="/profile/:id" element={<Profile/>} />
            <Route path="/dashboard/*" element={<ProtectedRoute path="/dashboard" element={DashboardPage} isPrivate redirectTo="/login" />} />
            <Route path="/reset/*" element={<ResetPage/>}/>
            {/* <AdminProtectedRoute path="/login" element={AdminLogin} isPrivate redirectTo="/admin/login" /> */}
            <Route path="/admin/login/" element={<AdminSignInPage/>} />
            <Route path="/admin/painel" element={<AdminProtectedRoute path="/admin/painel" element={Painel} isPrivate redirectTo="/admin/login" />} />
            <Route path="/admin/manage" element={<AdminProtectedRoute path="/admin/manage" element={ManageAdmins} isPrivate redirectTo="/admin/login" />} />
            <Route path="/admin/cadastro" element={<AdminProtectedRoute path="/admin/cadastro" element={AdminSignUpPage} isPrivate redirectTo="/admin/login" />} />
            <Route path="/admin/city" element={<AdminProtectedRoute path="/admin/city" element={AdminCities} isPrivate redirectTo="/admin/login" />} />
            <Route path="/admin/sector" element={<AdminProtectedRoute path="/admin/sector" element={AdminSectors} isPrivate redirectTo="/admin/login" />} />
            <Route path="/admin/users" element={<AdminProtectedRoute path="/admin/users" element={AdminSearchPage} isPrivate redirectTo="/admin/login" />} />
            <Route path="/admin" element={<AdminProtectedRoute path="/admin" element={EditAdminProfile} isPrivate redirectTo="/admin/login" />} />

            
        </Routes>
    )
}