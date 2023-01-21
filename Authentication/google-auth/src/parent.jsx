//FIREBASE_-_-_-__--------------------------------
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDSat6dnaVbM1rTPd3bU8MzMiRkJlAT1xY",
    authDomain: "fir-d349c.firebaseapp.com",
    projectId: "fir-d349c",
    storageBucket: "fir-d349c.appspot.com",
    messagingSenderId: "68751079810",
    appId: "1:68751079810:web:a6719bbcc71de2533b379b"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

//FIREBASE_-_-_-__--------------------------------

import { userProfileContext } from "./Context/context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
function Parent() {
  const { setUserProfile, isAuthDone, setAuthDone } =
    useContext(userProfileContext);
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUserProfile(result.user);
        setAuthDone(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const navigate = useNavigate();

  return (
    <>
      <button
        onClick={() => {
          signInWithGoogle();
        }}
      >
        Sign-In with Google
      </button>
      {isAuthDone ? navigate("/A") : undefined}
    </>
  );
}

export default Parent;
