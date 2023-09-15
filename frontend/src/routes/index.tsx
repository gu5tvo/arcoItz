import { Routes, Route } from 'react-router-dom';
import React from 'react'
import { lazy, Suspense } from 'react';

const Landing = lazy(() => import('../pages/landing'));
const Login = lazy(() => import('../pages/SignInPage'));

const SignUp = lazy(() => import('../pages/SignUpPage'));

const Dashboard = lazy(() => import('../pages/Dashboard'));
const SearchPage = lazy(() => import('../pages/search'));
const ProtectedRoute = lazy(() => import('../components/ProtectedRouteUser'));
const Profile = lazy(() => import('../pages/profile'));
const Painel = lazy(() => import('../pages/admin/painel'));
const ManageAdmins = lazy(() => import('../pages/admin/manageAdmins'));
const AdminProtectedRoute = lazy(() => import('../components/ProtectedRouterAdmin'));

const AdminSearch = lazy(() => import('../pages/admin/search'));
const AdminSignIn = lazy(() => import('../pages/AdminSignInPage'));
const AdminSignUp = lazy(() => import('../pages/AdminSignUpPage'));
const AdminCities = lazy(() => import('../pages/AdminCities'));
const AdminSectors = lazy(() => import('../pages/AdminSectors'));
const AdminEditProfile = lazy(() => import('../pages/admin/editProfile'));

const Reset = lazy(() => import('../pages/reset'));
const Search = lazy(() => import('../pages/search'));

const CookiesPolicies = lazy(()=> import ('../pages/CookiesPolicies'))
// grep flag that excludes a directory from search:
// grep -r --exclude-dir=docs "console.log" .

export default function MakeRoutes(){

    return (
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>

                <Route path="/" element={<Landing/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/cadastro" element={<SignUp/>} />
                <Route path="/buscar" element={<Search/>} />
                <Route path="/perfil/:id" element={<Profile/>} />
                <Route path="/dashboard/*" element={<ProtectedRoute path="/dashboard" element={Dashboard} isPrivate redirectTo="/login" />} />
                <Route path="/reset/*" element={<Reset/>}/>
                <Route path="/cookies" element={<CookiesPolicies/>}/>

                {/* <AdminProtectedRoute path="/login" element={AdminLogin} isPrivate redirectTo="/admin/login" /> */}
                <Route path="/admin/login/" element={<AdminSignIn/>} />
                <Route path="/admin/painel" element={<AdminProtectedRoute path="/admin/painel" element={Painel} isPrivate redirectTo="/admin/login" />} />
                <Route path="/admin/manage" element={<AdminProtectedRoute path="/admin/manage" element={ManageAdmins} isPrivate redirectTo="/admin/login" />} />
                <Route path="/admin/cadastro" element={<AdminProtectedRoute path="/admin/cadastro" element={ AdminSignUp } isPrivate redirectTo="/admin/login" />} />
                <Route path="/admin/city" element={<AdminProtectedRoute path="/admin/city" element={AdminCities} isPrivate redirectTo="/admin/login" />} />
                <Route path="/admin/sector" element={<AdminProtectedRoute path="/admin/sector" element={AdminSectors} isPrivate redirectTo="/admin/login" />} />
                <Route path="/admin/users" element={<AdminProtectedRoute path="/admin/users" element={AdminSearch} isPrivate redirectTo="/admin/login" />} />
                <Route path="/admin" element={<AdminProtectedRoute path="/admin" element={AdminEditProfile} isPrivate redirectTo="/admin/login" />} />
            </Routes>
                
        </Suspense>
    )
}