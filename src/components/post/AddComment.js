import { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import FirebaseContext from '../../context/firebase';
import UserContext from '../../context/user';

export default function AddComment({ docId, comments, setComments, commentInput }) {
    const [comment, setComment] = useState('');
    const { firebase, FieldValue } = useContext(FirebaseContext);
    const {
        user: { displayName }
    } = useContext(UserContext);

    const handleSubmitComment = (event) => {
        event.preventDefault();

        return null;
    }

    return null;
}