import { createUserWithEmailAndPassword, getAuth } from "firebase/auth/web-extension";
import { createContext, useEffect, useState } from "react"
import { app } from "../firebase/firebase.config";
import { GoogleAuthProvider, onAuthStateChanged, 
  signInWithEmailAndPassword, signOut  } from "firebase/auth/cordova";
import axios from "axios";



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
        return signInWithPopup(auth, googleProvider)
    };
   
    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser);
        if(currentUser){
          axios.post(`http://localhost:4000/authentication`, {
            email:currentUser.email
          }).then((data)=>{
            if(data.data){
              localStorage.setItem('access-token', data?.data?.token)
              setLoading(false);
            }
          })
        }
        else{
          localStorage.removeItem('access-token');
          setLoading(false);
        }
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
