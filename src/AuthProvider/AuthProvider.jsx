import { createUserWithEmailAndPassword, getAuth,  } from "firebase/auth/web-extension";
import { createContext, useEffect, useState } from "react"
import { app } from "../firebase/firebase.config";
import { GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth/cordova";



 export const AuthContext =createContext(null);
 const auth = getAuth(app);


// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
 
    const googleProvider = new GoogleAuthProvider();


    const CreateUser =(user,email) =>{
       return createUserWithEmailAndPassword(auth,user,email);
    };

    const Login =(email,password) =>{
       return signInWithEmailAndPassword(auth,email,password);
    };

    const Logout =()=>{
        return signOut(auth);
    };

    const GoogleLogin =()=>{
        // eslint-disable-next-line no-undef
        return signInWithPopup(auth,googleProvider)
    };
   
    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser);
        setLoading(false)
      });
      return (
        ()=>{
        return unsubscribe();
      }
    );
    },
    []);
     
    const authInfo = {
          user,
          loading,
          CreateUser,
          Login,
          Logout,
          GoogleLogin
    };
  return  <AuthContext.Provider value={authInfo}> {children} </AuthContext.Provider>
}

export default AuthProvider
