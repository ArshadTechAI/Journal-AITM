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
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore/lite";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../backend/firebase';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import '../css/LoginPage.css'; // Import the CSS file for styling
import Header from '../components/header';
import Footer from '../components/footer';
// import { collectionGroup } from 'firebase/firestore/lite';

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



//     const handleLogin = async (e) => {
//         e.preventDefault();
//         setError('');
//         try {
//             setLoading(true); // Show loading indicator during login process
//             // await signInWithEmailAndPassword(auth, email, password);
//             const userCredential = await signInWithEmailAndPassword(auth, email, password);
//             const uid = userCredential.user.uid; // Get the UID of the signed-in user
//             // Set a flag to indicate successful login (specific to admin-panel access)
//             localStorage.setItem('isAdminAuthenticated', 'true');
//             setLoading(false); // Hide loading indicator after login process
            
//             navigate('/admin-panel'); // Redirect to Admin Panel on successful login
//         } catch (err) {
//             setError('Failed to log in. Please check your email and password.');
//         }
//     };


// Assuming `auth` is your Firebase Auth instance and `db` is your Firestore instance
    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        try {
            setLoading(true);
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const uid = userCredential.user.uid;

            // Reference the EditorialTeam collection
            const editorCollection = collection(db, 'EditorialTeam');

            // Create a query to get the document where 'uid' matches the provided uid
            const editorQuery = query(editorCollection, where("uid", "==", uid));
            
            // Fetch the documents matching the query
            const querySnapshot = await getDocs(editorQuery);

            // Check if any documents matched
            if (!querySnapshot.empty) {
                const userDoc = querySnapshot.docs[0];  // Get the first matching document
                const userData = userDoc.data();        // Get the document data
                const role = userData.role;             // Get the user's role

                // Return the role or handle redirection based on role
                console.log("User role:", role);
                 // Redirect based on role
                 if (role === "admin") {
                    localStorage.setItem('isAdminAuthenticated', 'true');
                    navigate("/admin-panel");
                } else if (role === "Associate Editor") {
                    localStorage.setItem('isAdminAuthenticated', 'true');
                    navigate("/editorial-panel");
                } else if (role === "member") {
                    navigate("/member-panel");
                } else {
                    setError("Invalid role. Please contact support.");
                }
                setLoading(false);
                // return role;
            } else {
                console.log("No matching user found.");
                return null;  // Return null if no document matched
            }

            // Fetch the user's document from the EditorialTeam collection based on uid
            // const userDocRef = doc(db, "EditorialTeam", uid);
            // const userDoc = await getDoc(userDocRef);

            // if (userDoc.exists()) {
            //     const userData = userDoc.data();
            //     const role = userData.role;

            //     // Store the user's UID and role if necessary (optional)
            //     localStorage.setItem('isAdminAuthenticated', 'true');
            //     // localStorage.setItem('userRole', role);

                // // Redirect based on role
                // if (role === "admin") {
                //     navigate("/admin-panel");
                // } else if (role === "editorial") {
                //     navigate("/editorial-panel");
                // } else if (role === "member") {
                //     navigate("/member-panel");
                // } else {
                //     setError("Invalid role. Please contact support.");
                // }
            // } else {
            //     setError("User role not found. Please contact support.");
            // }
            // setLoading(false); // Hide loading indicator after login process
        } catch (err) {
            console.log(err);
            setError('Failed to log in. Please check your email and password.');
            setLoading(false); // Ensure loading is stopped in case of error
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
