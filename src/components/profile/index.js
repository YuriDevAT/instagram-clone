import { useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import { getUserByUsername, getUserPhotosByUsername } from '../../services/firebase';

export default function UserProfile({ username }) {
    const reducer = (state, newState) => ({ ...state, ...newState });
    const initialState = {
    profile: {},
    photosCollection: [],
    followerCount: 0
};

    const [{ profile, photosCollection, followerCount }, dispatch] = userReducer(reducer, initialState);

    useEffect(() => {
        async function getProfileInfoAndPhotos() {
            const photos = getUserPhotosByUsername(user.username);
            dispatch({ profile: user, photosCollection: photos, followerCount: user.followers.length })
        }
        if (user.username) {
        getProfileInfoAndPhotos();
        }
    }, [user.username]);

    return (
        <>
        <Header />
        </>
    )
}

UserProfile.propTypes = {
    user: PropTypes.shape({
        dateCreated: PropTypes.number.isRequired,
        emailAdress: PropTypes.string.isRequired,
        followers: PropTypes.array.isRequired,
        following: PropTypes.array.isRequired,
        fullname: PropTypes.string.isRequired,
        userId: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired  
    }).isRequired
};