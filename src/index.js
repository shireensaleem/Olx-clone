import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FirebaseContext } from './store/FirebaseContext';

import { Link, useHistory } from "react-router-dom";
import {
    db,
    auth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from "./firebase/Config";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{db,auth,signInWithEmailAndPassword,createUserWithEmailAndPassword}}>
     <App />

    </FirebaseContext.Provider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
