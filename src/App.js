import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Routes } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';

import { getAuth, onAuthStateChanged } from 'firebase/auth';

import {useDispatch, useSelector}from 'react-redux'
import { login, logout, selectUser } from './features/userSlice';
import FavouriteScreen from './screens/FavouriteScreen';


function App() {
  // const auth = getAuth();
  const auth = getAuth();
  const dispatch=useDispatch();

  const user=useSelector(selectUser);

  useEffect(() => {
    const unsubscribe=onAuthStateChanged(auth,(userAuth) => {
      if(userAuth){
        //login
        // const uid = user.uid;
        dispatch(login({
          uid:userAuth.uid,
          email:userAuth.email,
        }));
      } else{
        //logout
        dispatch(logout()); //user backtonull
      }
    });
    return unsubscribe();
  
  }, []);
  
  return (
    <div className="app">
      {/* <Banner/> */}
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route path="FavouriteScreen" element={ <FavouriteScreen/>  } > 
            {/* <FavouriteScreen/> */}
            </Route>
            <Route exact path="/" element={<HomeScreen />}>
              {/* <HomeScreen /> */}
            </Route>
          </Routes>
        )}

      </Router>
    </div>
  );
}

export default App;
