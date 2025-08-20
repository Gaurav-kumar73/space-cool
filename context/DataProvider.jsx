import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import { createContext, useContext, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { auth, firestore } from '../firebaseConfig';

const DataContext = createContext();

export default function DataProvider({ children }) {
    const [authcheck, setAuth] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setAuth(user);
        });
        return unsubscribe;
    }, [authcheck]);

    const signUpaccount = async (email, password) => {

        try {
            let userCredential = await createUserWithEmailAndPassword(auth, email, password);
            await sendEmailVerification(userCredential.user);
            await signOut(auth);
            return true
        }
        catch (error) {
            Alert.alert("Error", "Signup failed. Please try again.");
            // console.log("Error:", error);
            let errorMessage = 'Signup failed. Please try again.';

            switch (error.code) {
                case 'auth/email-already-in-use':
                    errorMessage = 'This email is already in use.';
                    break;
                case 'auth/invalid-email':
                    errorMessage = 'Please enter a valid email address.';
                    break;
                case 'auth/weak-password':
                    errorMessage = 'Password should be at least 6 characters.';
                    break;
            }
            return errorMessage
        }
    };

    const Login = async (email, password) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            if (userCredential.user.emailVerified) {
                // Alert.alert("Login Successful");
                // setAuth(true);
                return true
            } else {

                await sendEmailVerification(userCredential.user);
                await signOut(auth);
                Alert.alert('Alert', 'Please verify your email.');
                return 'Alert', 'Please verify your email.'

            }
        } catch (error) {
            Alert.alert("Error", "Login failed. Please try again.");
            // console.log("Error:", error.code);
            let errorMessage = 'Login failed. Please try again.';

            switch (error.code) {
                case 'auth/invalid-credential':
                    errorMessage = 'Invalid email or password.';
                    break;
                case 'auth/user-not-found':
                    errorMessage = 'No user found with this email.';
                    break;
                case 'auth/wrong-password':
                    errorMessage = 'Incorrect password.';
                    break;
                case 'auth/too-many-requests':
                    Alert.alert('Alert', 'Please verify your email first.');
                    return 'Please verify your email first.';
                    
            }
            // Alert.alert("Error", errorMessage);
            return errorMessage
        }
    };

    const Logout = async () => {
        try {
            await signOut(auth);
            // Alert.alert("Logout Successful");
        } catch (error) {
            // console.log("Error:", error);
            Alert.alert("Error", error.message);
        }
    };

    const ResetPassword = async (email) => {
        try {
            await sendPasswordResetEmail(auth, email);
            return true;

        } catch (error) {

            let errorMessage = 'Failed to send reset email. Please try again.';
            switch (error.code) {
                case 'auth/user-not-found':
                    errorMessage = 'No account found with this email address.';
                    break;
                case 'auth/invalid-email':
                    errorMessage = 'Please enter a valid email address.';
                    break;
                case 'auth/too-many-requests':
                    errorMessage = 'Too many attempts. Please try again later.';
                    break;
            }
            return errorMessage;
        }
    }


    const addQearyHandle = async (addQeary) => {
        // console.log(addQeary);
        if (authcheck) {
            // console.log("User  is logged in:", authcheck.email);
            try {
                await addDoc(collection(firestore, "queries"), {
                    email: addQeary.email,
                    subject: addQeary.subject,
                    message: addQeary.message,
                    userId: authcheck.uid
                });
                Alert.alert("Information", 'Your query has been submitted successfully.');
                return true;
            } catch (error) {
                Alert.alert("Error", "Failed to submit your query. Please try again.");
                // console.log("Error:", error);
                return false
            }
        } else {
            Alert.alert("Please Login First");
        }
    };

    const summerCampHandle = async (summerCampData) => {
        // console.log("Summer Camp Data:", summerCampData);
        if (authcheck) {
            try {
                await addDoc(collection(firestore, "summerCamp"), {
                    firstname: summerCampData.firstname,
                    lastname: summerCampData.lastname,
                    email: summerCampData.email,
                    phone: summerCampData.phone,
                    studentName: summerCampData.studentName,
                    interestedInFields: summerCampData.interestedin,
                    grade: summerCampData.grade,
                    interestedIn: summerCampData.interestedIn,
                    termCondition: summerCampData.termCondition,
                    userId: authcheck.uid
                });
                return true;
            } catch (error) {
                Alert.alert("Error", "Failed to submit summer camp data. Please try again.");
                // console.log("Error:", error);
                return false
            }
        }
    }

    return (
        <DataContext.Provider value={{ authcheck, addQearyHandle, setAuth, signUpaccount, Login, Logout, ResetPassword, summerCampHandle }}>
            {children}
        </DataContext.Provider>
    );
}

export const useAuth = () => useContext(DataContext);
