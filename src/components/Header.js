import React, { useState } from 'react'
import { auth } from '../utils/firebaseConfig';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {

const user = useSelector(store=>store.user)
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate('/');

    }).catch((error) => {
      console.log(error);
    });
  }

  return (
    <div className="absolute flex justify-between w-full  px-8 py-2 bg-gradient-to-b from-black z-10">
      <img className="w-44" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Netflix Logo" />

      {user&&<div className="p-4">
        <img className="w-12 h-12" alt="user-icon" src={user?.photoURL} />

        <button onClick={handleSignOut} className="font-bold text-white">Sign out</button>
      </div>}
    </div>
  )
}

export default Header