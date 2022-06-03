import React, { useEffect, useState } from "react";
import Login from "./Components/Login/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn");
    if (loginStatus === "LOGGED_IN") {
      setIsLoggedIn(true);
    }
  }, []);

  // function LoginHandler(email, password) {
  //   setIsLoggedIn(true);
  //   localStorage.setItem("isLoggedIn", "LOGGED_IN");
  // }

  return (
    <React.Fragment>
      <Login />
    </React.Fragment>
  );
}

export default App;
