import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';

import { FirebaseAuth } from '../firebase/config';
import { login, logout } from '../store/auth/authSlice';
import { startLoadingNotes } from '../store/journal/thunks';




export const useCheckAuth = () => {

    const { status } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {

        onAuthStateChanged(FirebaseAuth, async (user) => {
            /* If user info is incorrect, logout */
            if (!user) return dispatch(logout());

            /* else, get user data */
            const { uid, email, displayName, photoURL } = user;

            /* login with user data */
            dispatch(login({ uid, email, displayName, photoURL }));

            /* we're getting notes of the user */
            dispatch(startLoadingNotes());
        })
    }, []);

    return status;
}