import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile,} from "firebase/auth";
import app from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext()
const provider = new GoogleAuthProvider();

const auth = getAuth(app);
const AuthProvider = ({children}) => {
  const [user, setUser]= useState(null)
  const [loading, setLoading]= useState(true)



const createUser = (email, password)=>{
  setLoading(true)
  return createUserWithEmailAndPassword(auth, email, password)
}

// signIn With Email and Password
const signIn = (email, password)=>{
  return signInWithEmailAndPassword(auth, email, password)
}




// googleLogin
const googleLogin =()=>{
  setLoading(true)
  return signInWithPopup(auth, provider)
}

// signOUt
const logOut = ()=>{
  return signOut(auth)
}


useEffect(()=>{
const unsubscribe=  onAuthStateChanged(auth, currentUser=>{
  setUser(currentUser)
  setLoading(false)
  console.log('current user', currentUser)
 }) 
 return ()=>{
 unsubscribe()
 }
}, [])

// update User Data 
const updateUserData = (user, name, photo)=>{
  return updateProfile(user, {
    displayName: name, 
    photoURL: photo

  })
}

const info ={ createUser, googleLogin, loading, user, signIn, logOut,  updateUserData}


  return (
    <AuthContext.Provider value ={info}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;