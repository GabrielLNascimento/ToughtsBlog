import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { auth } from './assets/firebase';
import { onAuthStateChanged } from 'firebase/auth';

// components
import Navbar from './components/Navbar';

// pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

const App = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => unsub();
    }, []);

    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
                    <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />
                    <Route
                        path="/dashboard"
                        element={
                            user ? <Dashboard /> : <Navigate to="/login" />
                        }
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
