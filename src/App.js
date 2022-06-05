import React, { useEffect, useState } from "react";
import Login from "./Components/Login/Login";
import FirstPage from "./Components/FirstPage/FirstPage";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
    if (storedUserLoggedInInformation === "LOGGEDIN") {
      setIsLoggedIn(true);
    }
  }, []);

  //verification done here
  function loginHandler(email, password) {
    localStorage.setItem("isLoggedIn", "LOGGEDIN");
    setIsLoggedIn(true);
  }

  function logoutHandler() {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  }

  return (
    <React.Fragment>
      <FirstPage isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>{!isLoggedIn && <Login onLogin={loginHandler} />}</main>
    </React.Fragment>
  );
}

export default App;
