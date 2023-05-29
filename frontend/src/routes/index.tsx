import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import Login from '../pages/Login/Login';
import { SearchProfile } from '../pages/SearchProfile';
import { Painel } from '../pages/Painel';

export default function MakeRoutes(){
    return (
        <Routes>
            <Route path="/" element={ <Home/> }/>
            <Route path="/login" element={ <Login/> }/>
            <Route path="/about" element={<h1>About</h1>} />
            <Route path="/dashboard" element={<h1>Dashboard</h1>} />
            <Route path="/searchprofile" element={<SearchProfile/>} />
            <Route path="/painel" element={<Painel/>} />
        </Routes>
    )
}