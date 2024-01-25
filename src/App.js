import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

function App() {
  const [logIn, setlogIn] = useState(true);
  const swichlogin = () => {
    setlogIn(!logIn);
  };
  return (
    <div className="App">
      <div>
        <img
          className="img"
          src="https://cdn.pixabay.com/photo/2016/08/15/01/29/instagram-1594387_640.png"
          alt=""
        />
      </div>

      <div className="inputfield">
        <input
          hidden={logIn}
          type="text"
          placeholder="Mobile Number or Email"
        />
        <input hidden={logIn} type="text" placeholder="Full Name" />
        <input placeholder="Phone umber,Username,Or email" type="text" />
        <input placeholder="Password" type="Password" />
        <button
          onClick={() => alert("Thank You For Submit")}
          className="sign-in"
        >
          {logIn ? "Sign in" : "Sign Up"}
        </button>
      </div>

      <p className="SwitchAccount">
        {logIn ? "Don't have Account?" : "have an Account?"}
        <span onClick={swichlogin}>{logIn ? "Sign Up" : "Log In"}</span>
      </p>
    </div>
  );
}

export default App;
