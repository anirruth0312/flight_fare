import React, { useEffect, useState } from "react";
import Login from "./Components/Login/Login";
import FirstPage from "./Components/FirstPage/FirstPage";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import SignupPage from "./Components/Signup/SignupPage";

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
    <BrowserRouter>
      <Routes>
        {
          <Route
            path="/flight_fare"
            element={!isLoggedIn && <Login onLogin={loginHandler} />}
          ></Route>
        }
      </Routes>
      {<FirstPage isAuthenticated={isLoggedIn} onLogout={logoutHandler} />}
      <Routes>{<Route path="/Signup" element={<SignupPage />}></Route>}</Routes>
    </BrowserRouter>
  );
}

export default App;
