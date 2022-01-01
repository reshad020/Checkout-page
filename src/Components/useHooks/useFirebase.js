import axios from "axios";
import { signInWithEmailAndPassword,GoogleAuthProvider, signInWithPopup, getAuth,createUserWithEmailAndPassword,onAuthStateChanged,signOut } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeFirebase from "../Firebase/firebase.init";

initializeFirebase();

const useFirebase = () =>{
    const [user,setUser] = useState({});
    const [loading,setLoading] = useState(true);
   
    
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const googleSignIn = () =>{
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                
                console.log(errorMessage)
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });

    }

    const emailPasswordRegister = (email,password,history,userData) =>{
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password,history,userData)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
            // ...
            
            
            history('/');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error.message)
            // ..
        })
        .finally(() => setLoading(false));
    }

        const login = (email,password,history) =>{
            setLoading(true)
            signInWithEmailAndPassword(auth, email, password,history)
            .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            history('/')
            })
            .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            })
            .finally(() => setLoading(false))
        }

    const logOut = (history) =>{
        
        signOut(auth).then(() => {
            // Sign-out successful.
            history('/')
          })
          
    }
    useEffect(() =>{
        
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
            } 
            else{
                setUser({});
            }
            setLoading(false)
          });
    },[])

    return{
        user,
        login,
        logOut,
        loading,
        emailPasswordRegister,
        googleSignIn
    }

}

export default useFirebase;