import axios from "axios";
import { signInWithEmailAndPassword,getAuth,createUserWithEmailAndPassword,onAuthStateChanged,signOut } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeFirebase from "../Firebase/firebase.init";

initializeFirebase();

const useFirebase = () =>{
    const [user,setUser] = useState({});
    const [loading,setLoading] = useState(true);
   
    
    const auth = getAuth();

    const emailPasswordRegister = (email,password,history,userData) =>{
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password,history,userData)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
            // ...
            
            axios.post('https://enigmatic-beach-68956.herokuapp.com/users',userData)
            .then(res =>{
                alert("added successfully");
            });
            history('/profile');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error.message)
            // ..
        })
        .finally(() => setLoading(false));
    }

        const login = (email,password) =>{
            setLoading(true)
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
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
        emailPasswordRegister
    }

}

export default useFirebase;