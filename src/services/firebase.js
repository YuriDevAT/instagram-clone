import { firebase, FieldValue } from '../lib/firebase';

export async function doesUsernameExist(username) {
    const result = await firebase
    .firestore()
    .collection('users')
    .where('username', '==', username)
    .get();

    return result.docs.map((user) => user.data().length > 0);
}

export async function getUserByUsername(username) {
    const result = await firebase
    .firestore()
    .collection('users')
    .where('username', '==', username)
    .get();

    return result.docs.map((item) => ({
        ...item.data(),
        docId: item.id
    }));
}

export async function getUserByUserId(userId) {
    const result = await firebase
    .firestore()
    .collection('users')
    .where('userId', '==', userId)
    .get();

    const user = result.docs.map((item) => ({
        ...item.data(),
        docId: item.id
    }));
    
    return user;
}

export async function getSuggestedProfiles(userId, following) {
    const result = await firebase.firestore().collection('users').limit(10).get();

    return result.docs
    .map((user) => ({ ...user.data(), docId: user.id}))
    .filter((profile) => profile.userId !== userId && !following.includes(profile.userId));
}

export async function updateLoggedInUserFollowing(loggedInUserDocId, profileId, isFollowingProfile) {
    return firebase
    .firestore()
    .collection('users')
    .doc(loggedInUserDocId)
    .update({
        following: isFollowingProfile
        ? FieldValue.arrayRemove(profileId)
        : FieldValue.arrayUnion(profileId)
    });
}

export async function updateFollowedUserFollowers(profileDocId, loggedInUserDocId, isFollowingProfile) {
    return firebase
    .firestore()
    .collection('users')
    .doc(profileDocId)
    .update({
        followers: isFollowingProfile
        ? FieldValue.arrayRemove(loggedInUserDocId)
        : FieldValue.arrayUnion(loggedInUserDocId)
    });
}

export async function getPhotos(userId, following) {
    const result = await firebase
    .firestore()
    .collection('photos')
    .where('userId', 'in', following)
    .get();

    const usesrFollowedPhotos = result.docs.map((photos) => ({
        ...photos.data(),
        docId: photos.id
    }));

    const photosWithUserDetails = await Promise.all(
        usesrFollowedPhotos.map(async (photos) => {
            let userLikedPhoto = false;
            if (photos.likes.includes(userId)) {
                userLikedPhoto = true;
            }
            const user = await getUserByUserId(photos.userId);
            const { username } = user [0];
            return { username, ...photos, userLikedPhoto };
        })
    );

    return photosWithUserDetails;
}

export async function getUserPhotosByUserId(username) {
    const [user] = await getUserByUsername(username);
    const result = await firebase
    .firestore()
    .collection('photos')
    .where('userId', '==', user.userId)
    .get();

    const photos = result.docs.map((item) => ({
        ...item.data(),
        docId: item.id
    }));
}