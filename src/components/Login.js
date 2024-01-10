import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { auth } from '../utils/firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { USER_AVATAR, LOGINBG } from '../utils/constants';

const Login = () => {
    const [isSignin, setIsSignin] = useState(true);
    const [isErrorMessage, setIsErrorMessage] = useState(null);

    const disPatch = useDispatch();



    const email = useRef(null);
    const password = useRef(null);
    const fullName = useRef(null);

    console.log('rendered');

    const handleClickButton = () => {

        const currentValue = {
            email: email.current.value,
            password: password.current.value,
            fullName: fullName.current?.value
        }
        const message = checkValidData(currentValue);
        setIsErrorMessage(message);
        if (message) return;
        if (!isSignin) {
            createUserWithEmailAndPassword(auth, currentValue.email, currentValue.password).then((userCredential) => {
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: currentValue.fullName,
                    photoURL: USER_AVATAR 

                }).then(() => {

                    const { uid, email, displayName, photoURL } = auth.currentUser
                    disPatch((addUser({ uid, email, displayName, photoURL })))

                }).catch((error) => {
                    setIsErrorMessage(error.message);
                });

            }).catch((error) => {
                const errorCode = error.customData._tokenResponse.error.code;
                const errorMessage = error.message
                setIsErrorMessage(errorCode + " - " + errorMessage)
            });
        } else {
            signInWithEmailAndPassword(auth, currentValue.email, currentValue.password).then((userCredential) => {
                userCredential.user;

            }).catch((error) => {
                const errorMessage = error.message
                setIsErrorMessage(errorMessage)
            })
        }


    }

    const signinFormToggle = () => {
        setIsSignin(!isSignin)
    }

    return (
        <div>
            <Header />
            <div className="absolute">
                <img src={LOGINBG} alt="BG" />

            </div>
            <div>
                <form onSubmit={(e) => e.preventDefault()} className="absolute p-12 bg-black bg-opacity-85 w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg">
                    <h1 className="font-bold text-3xl py-4">{isSignin ? "Sign In" : "Sign Up"}</h1>
                    {!isSignin && (
                        <input type="text"
                            ref={fullName}
                            placeholder="FullName"
                            className="outline-none p-2 my-4 w-full bg-gray-700 rounded-lg" />
                    )}
                    <input type="text"
                        ref={email}
                        placeholder="Email"
                        className="outline-none p-2 my-4 w-full bg-gray-700 rounded-lg" />
                    <input type="password"
                        ref={password}
                        placeholder="Password"
                        className=" outline-none p-2 my-4 w-full  bg-gray-700 rounded-lg" />
                    <p className="text-red-600 font-bold">{isErrorMessage}</p>
                    <button onClick={handleClickButton}
                        className="bg-red-600 p-4 my-4 w-full rounded-lg">
                        {isSignin ? "Sign In" : "Sign Up"}
                    </button>
                    <p onClick={signinFormToggle}
                        className="py-4 cursor-pointer">
                        {isSignin ? "New to Netflix? Sign up now." : "Already registered? Sign in now."}
                    </p>
                </form>
            </div>

        </div>
    )
}

export default Login