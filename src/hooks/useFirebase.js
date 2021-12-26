import initializeAuthentication from "../firebase/firebase.init";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  getIdToken,
} from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const auth = getAuth();

  const handleGoogleLogin = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider).finally(() =>
      setLoading(false)
    );
  };

  const registerEmail = (emailUser) => {
    const { email, password } = emailUser;
    if (password.length < 6) {
      setError("Password should be 6 or more characters length");
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
          setUser(result);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const logout = () => {
    setLoading(true);
    signOut(auth)
      .then((result) => {
        setUser("");
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        getIdToken(user).then((idToken) =>
          localStorage.setItem("idToken", idToken)
        );
        setUser(user);
      } else {
        setUser("");
      }
      setLoading(false);
    });
  }, [user]);

  return {
    handleGoogleLogin,
    user,
    setUser,
    setError,
    error,
    logout,
    registerEmail,
    setLoading,
    loading,
  };
};

export default useFirebase;
