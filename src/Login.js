import "./Login.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import StorefrontIcon from "@mui/icons-material/Storefront";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth();

  function signIn(e) {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        navigate("/", { replace: true });
      })
      .catch((error) => alert(error.message)); // Updated to show error messages
  }

  function register(e) {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        if (auth) {
          navigate("/", { replace: true });
        }
      })
      .catch((error) => alert(error.message)); // Updated to show error messages
  }

  return (
    <div className="login">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="login_logo">
          <StorefrontIcon className="login_logoImage" fontSize="large" />
          <h2 className="login_logoTitle">ShopEase</h2>
        </div>
      </Link>
      <div className="login_container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="login_signInButton" onClick={signIn}>
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to the eShop Website Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button className="login_registerButton" onClick={register}>
          Create your ShopEase Account
        </button>
      </div>
    </div>
  );
}

export default Login;
