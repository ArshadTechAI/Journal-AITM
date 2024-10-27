import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../backend/firebase'; // Import Firebase auth
import Header from '../components/header';
import Footer from '../components/footer';

const PrivateRoute = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Listen for auth state changes
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    // Get the admin authentication flag from localStorage
    const isAdminAuthenticated = localStorage.getItem('isAdminAuthenticated');

    if (loading) {
        return (
            <>
                <Header/>
                <center>
                    <div>Loading...</div>
                </center>
                <Footer/>
            </>
        ); // Show a loading message while checking auth
    }

    // Check if the user is authenticated and the admin flag is set
    if (!user || isAdminAuthenticated !== 'true') {
        return <Navigate to="/" />; // Redirect to login page if not allowed
    }

    return children; // Render the protected component if all checks pass
};

export default PrivateRoute;