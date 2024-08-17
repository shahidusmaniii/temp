import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "./AppContext";

export const AppContextProvider = (props) => {
  const [user, setUser] = useState('');
  const [alert, setAlert] = useState(null);
  const [loggedinC, setLoggedinC] = useState(localStorage.getItem('loginC'));
  const [loggedinF, setLoggedinF] = useState(localStorage.getItem('loginF'));
  const [loggedinA, setLoggedinA] = useState(localStorage.getItem('loginA'));
  const [EndObject, setEndObject] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Logged in states:", loggedinA, loggedinC, loggedinF);
  }, [alert, loggedinA, loggedinC, loggedinF]);

  const LoginC = (state) => {
    localStorage.setItem("loginC", state);
    setLoggedinC(state);
  };

  const LoginF = (state) => {
    localStorage.setItem("loginF", state);
    setLoggedinF(state);
  };

  const LoginA = (state) => {
    localStorage.setItem("loginA", state);
    setLoggedinA(state);
  };

  const FullfillRequest = (element) => {
    setEndObject(element);
  };

  const showAlert = (message, type) => {
    setAlert({ msg: message, type });
    setTimeout(() => setAlert(null), 3000);
  };

  return (
    <AppContext.Provider value={{
      showAlert,
      alert,
      user,
      LoginC,
      loggedinC,
      LoginA,
      loggedinA,
      LoginF,
      loggedinF,
      setUser,
      EndObject,
      FullfillRequest
    }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;