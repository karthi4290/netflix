import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Login'
import Browse from './Browse';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebaseConfig';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';


const Body = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        console.log('useEffect rendered')
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid, email, displayName, photoURL }));

            } else {
                dispatch(removeUser());
            }
        })
    }, [])



    const appRouter = createBrowserRouter([{
        path: '/',
        element: <Login />
    },
    {
        path: "/browse",
        element: <Browse />
    },
    ])

    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body