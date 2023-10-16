import { Routes, Route } from 'react-router-dom';
import React from 'react'
import { lazy, Suspense } from 'react';
import LoadingPage from '../pages/LoadingPage';


const Landing = lazy(() => import('../pages/landing'));
const Login = lazy(() => import('../pages/SignInPage'));

const SignUp = lazy(() => import('../pages/SignUpPage'));
const EmailConfirmation = lazy(()=> import ('../pages/EmailConfirmation'))


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
const UsagePolicies = lazy(()=> import ('../pages/UsagePolicies'))


export default function MakeRoutes(){

    return (
            <Suspense fallback={<LoadingPage/>}>
                <Routes>
                <Route path="/" element={<Landing/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/cadastro" element={<SignUp/>} />
                <Route path="/confirmacao-email" element={<EmailConfirmation/>} />
                <Route path="/buscar" element={<Search/>} />
                <Route path="/perfil/:id" element={<Profile/>} />
                <Route path="/dashboard/*" element={<ProtectedRoute path="/dashboard" element={Dashboard} isPrivate redirectTo="/login" />} />
                <Route path="/reset/*" element={<Reset/>}/>
                <Route path="/politicas-de-cookies" element={<CookiesPolicies/>}/>
                <Route path="/politicas-de-uso" element={<UsagePolicies/>}/>
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