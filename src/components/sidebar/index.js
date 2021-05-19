import { useContext } from 'react';
import User from './User';
import Suggestions from './Suggestions';
import LoggedInUserContext from '../../context/logged-in-user';

export default function Sidebar() {
    const { user: { docId = '', fullname, username, userId, following} = {} } = useContext(LoggedInUserContext);

    return (
    <div className="p-4">
        <User username={username} fullname={fullname} />
        <Suggestions userId={userId} following={following} loggedInUserdocId={docId} />
    </div>
    );
}