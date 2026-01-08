import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import auth from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  // create and sign in user

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(email, password);
  };

  // Sing in user with  google

  const signInWithGoogle = () => {
    return signInWithPopup(auth, provider);
  };

  const updateProfileUser = (userName, photoUrl) => {
    return updateProfile(auth.currentUser, {
      displayName: userName,
      photoURL: photoUrl,
    });
  };

  //  Observer
  useEffect(() => {
    const unsubcribed = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("current user :", currentUser);
    });
    return () => {
      return unsubcribed;
    };
  }, []);

  // Log out user

  const logOut = () => {
    return signOut(auth);
  };

  const authInfo = {
    user,
    setUser,
    createUser,
    updateProfileUser,
    signInUser,
    signInWithGoogle,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
