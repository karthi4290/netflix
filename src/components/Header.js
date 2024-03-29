import React, { useEffect } from 'react'
import { auth } from '../utils/firebaseConfig';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { clearSuggestionBox, toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const gptSearchPage = useSelector(store => store.gpt.showSearchGpt)

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

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };
  const handleSelectLang = (e) => {
    dispatch(changeLanguage(e.target.value));
  }
  if (!gptSearchPage){
    dispatch(clearSuggestionBox());
  }


  return (
    <div className="absolute flex justify-between w-full   md:px-6 md:py-1 bg-gradient-to-b from-black z-10 flex-col md:flex-row">
      <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="Netflix Logo" />
      {user &&
        <div className=" flex p-4 ">
          {gptSearchPage && <select onChange={handleSelectLang} className="p-1 bg-gray-900 text-white rounded-lg outline-none">
            {SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier}>{lang.name}</option>)}
          </select>}


          <button onClick={handleGptSearchClick} className={gptSearchPage ? "bg-red-700 text-white py-2 px-4 mx-4 rounded-lg" : "bg-green-500 text-white py-2 px-4 mx-4 rounded-lg"}>{gptSearchPage ? "Back to Netflix" : "❄ GPT Search"}</button>
          <img className="w-10 h-10 rounded-md" alt="user-icon" src={user?.photoURL} />

          <button onClick={handleSignOut} className="font-bold text-white  py-2 px-2">Sign out</button>
        </div>}
    </div>
  )
}

export default Header