import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import Nav from "../Nav";
import "./FavouriteScreen.css";
import { signOut } from "firebase/auth";
import FavSmallScreen from "./FavSmallScreen";
// import firebase from "firebase"

function FavouriteScreen() {
  const user = useSelector(selectUser);

  return (
    <div className="favouriteScreen">
      <Nav />
      <div className="favouriteScreen__body">
        <h1>Favourites</h1>
        <div className="favouriteScreen__info">
          <img
            src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
            alt=""
          />
          <div className="favouriteScreen__details">
            <h2>{user.email}</h2>
            <div className="favouriteScreen__plans">
              <h3>Added to favourites</h3>

              <FavSmallScreen/>
              <button
                onClick={() => signOut(auth)}
                className="favouriteScreen__signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FavouriteScreen;