// import React, { useState } from 'react';
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../backend/firebase';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
// import '../css/LoginPage.css'; // Import the CSS file for styling
// import Header from '../components/header';
// import Footer from '../components/footer';

// const LoginPage = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const [loading, setLoading] = useState(false);

//     const navigate = useNavigate(); // Initialize useNavigate

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         setError('');
//         try {
//             setLoading(true); // Show loading indicator during login process
//             await signInWithEmailAndPassword(auth, email, password);
//             setLoading(false); // Hide loading indicator after login process
//             navigate('/supersecure-admin-portal'); // Redirect to Admin Panel on successful login
//         } catch (err) {
//             setError('Failed to log in. Please check your email and password.');
//         }
//     };

//     return (
//         <>
//         {loading && (
//                 <div className="loading-overlay">
//                     <div className="loading-indicator">
//                     <div className="spinner"></div>
//                     </div>
//                 </div>
//             )}
//         <Header/>
//         <center>
//             <h1>
//             Login to access the admin dashboard
//             </h1>
//         </center>
//         <div className="login-container">
//             <form className="login-form" onSubmit={handleLogin}>
//                 <h2>Login</h2>
//                 {error && <p className="error-message">{error}</p>}
//                 <div className="form-group">
//                     <label>Email:</label>
//                     <input
//                         type="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label>Password:</label>
//                     <input
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <button type="submit" className="login-button">Login</button>
//             </form>
//         </div>
//         <Footer/>
//         </>
//     );
// };

// export default LoginPage;




import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../backend/firebase';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import '../css/LoginPage.css'; // Import the CSS file for styling
import Header from '../components/header';
import Footer from '../components/footer';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate(); // Initialize useNavigate

    // const handleLogin = async (e) => {
    //     e.preventDefault();
    //     setError('');
    //     try {
    //         setLoading(true); // Show loading indicator during login process
    //         await signInWithEmailAndPassword(auth, email, password);
    //         setLoading(false); // Hide loading indicator after login process
    //         navigate('/supersecure-admin-portal'); // Redirect to Admin Panel on successful login
    //     } catch (err) {
    //         setError('Failed to log in. Please check your email and password.');
    //     }
    // };
    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        try {
            setLoading(true); // Show loading indicator during login process
            await signInWithEmailAndPassword(auth, email, password);
            // Set a flag to indicate successful login (specific to admin-panel access)
            localStorage.setItem('isAdminAuthenticated', 'true');
            setLoading(false); // Hide loading indicator after login process
            navigate('/admin-panel'); // Redirect to Admin Panel on successful login
        } catch (err) {
            setError('Failed to log in. Please check your email and password.');
        }
    };



    return (
        <>
        {loading && (
            <div className="loading-overlay">
                <div className="loading-indicator">
                    <div className="spinner"></div>
                </div>
            </div>
        )}
        <Header/>
        <div className="login-page-wrapper">
            <div className="login-box">
                <h2 className="login-heading">Admin Login</h2>
                {error && <p className="error-message">{error}</p>}
                <form className="login-form" onSubmit={handleLogin}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="Enter your password"
                        />
                    </div>
                    <button type="submit" className="login-button">Login</button>
                </form>
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default LoginPage;
