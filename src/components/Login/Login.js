import React, { useContext} from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import img from "../../images/Group 573.png";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../firebase.config";
import { UserContext } from "../../App";




const Login = () => {


  const [loggedInUser , setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const google = new firebase.auth.GoogleAuthProvider();

const handlegoogleSignIn = ()=>{

  firebase.auth()
  .signInWithPopup(google)
  .then((result) => {

    
   const {displayName ,email} = result.user;
    const signInUser = {name:displayName, email}
    setLoggedInUser(signInUser)
    history.replace(from);


    console.log(signInUser)

  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
 
}






return (
    <div className="text-center pt-5">
      <h1>Login with google</h1>

     <Link to="/admin">
     <button 

     onClick={handlegoogleSignIn}
        type="button"
        className="btn btn-outline-primary w-25 rounded-pill"
      >
        <img
          className="align-content-start"
          style={{ height: "20px" }}
          src={img}
          alt=""
        />{" "}
        Continue with Google{" "}
      </button>
     </Link>

      {/* <p className="pt-3">
        Do not have an account ? <Link to="/">Creat an account</Link>
      </p> */}
    </div>
  );
};

export default Login;
