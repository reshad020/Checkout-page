import { GoogleAuthProvider,getAuth,signInWithPopup,onAuthStateChanged,signOut } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeFirebase from "../Firebase/firebase.init";

initializeFirebase();

const useFirebase = () =>{
    const [user,setUser] = useState({});
   
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    const signInUsingGoogle = () =>{
       
        return signInWithPopup(auth,provider)
        
    }

    const logOut = () =>{
        
        signOut(auth).then(() => {
            // Sign-out successful.
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
          });
    },[])

    return{
        user,
        signInUsingGoogle,
        logOut 
    }

}

export default useFirebase;