import { useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Photos from './Photos';
import { getUserPhotosByUserId } from '../../services/firebase';

export default function Profile({ user }) {
    const reducer = (state, newState) => ({ ...state, ...newState });
    const initialState = {
    profile: {},
    photosCollection: [],
    followerCount: 0
};

    const [{ profile, photosCollection, followerCount }, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        async function getProfileInfoAndPhotos() {
            const photos = getUserPhotosByUserId(user.username);
            dispatch({ profile: user, photosCollection: photos, followerCount: user.followers.length })
        }
        getProfileInfoAndPhotos();
    }, [user.username]);

    return (
        <>
        <Header 
        photosCound={photosCollection ? photosCollection.length : 0 }
        profile={profile}
        followerCount={followerCount}
        setFollowerCount={dispatch}
        />
        <Photos photos={photosCollection} />
        </>
    )
}

Profile.propTypes = {
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