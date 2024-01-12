import React, { useEffect } from 'react'
import { auth } from '../utils/firebaseConfig';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO} from '../utils/constants';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();



  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch((addUser({ uid, email, displayName, photoURL })));
        navigate('/browse')
      } else {
        dispatch(removeUser());
        navigate('/');
      }
    })

    return () => unsubscribe()
  }, [])

  const user = useSelector(store => store.user)
  const handleSignOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      console.log(error);
    });
  }

  return (
    <div className="absolute flex justify-between w-full  px-8 py-2 bg-gradient-to-b from-black z-10">
      <img className="w-44" src={LOGO} alt="Netflix Logo" />

      {user && <div className="p-4">
        <img className="w-12 h-12" alt="user-icon" src={user?.photoURL} />

        <button onClick={handleSignOut} className="font-bold text-white">Sign out</button>
      </div>}
    </div>
  )
}

export default Header