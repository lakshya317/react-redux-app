import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import LoadingAnimation from '../Loading/Loading';
// import API from '../../utils/API';
import { setDisplayError } from '../../action/displayError';
import './Profile.css';
import { useGetUserQuery } from '../../utils/API/apiSlice';

const Profile = () => {
    //State
    const { userId } = useParams();
    // const [loading, setLoading] = useState(false);
    // const [userData, setUserData] = useState({});
    const { data: userData, isLoading, isError } = useGetUserQuery(userId);

    //dispatch
    const dispatch = useDispatch();

    useEffect(() => {
        if (isError) {
            dispatch(setDisplayError('User Data Does Not Exist!'));
        }
    }, [isError, dispatch]);

    // useEffect(() => {
    //     setLoading(true);
    //     API.getUser(userId)
    //         .then((response) => {
    //             // eslint-disable-next-line
    //             if (response.id == userId) {
    //                 let user = {
    //                     id: response.id,
    //                     email: response.email,
    //                     first_name: response.first_name,
    //                     last_name: response.last_name,
    //                     avatar: response.avatar
    //                 };

    //                 setUserData(user);
    //                 setLoading(false);
    //             } else {
    //                 throw new Error('Invalid Response!');
    //             }
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //             setLoading(false);
    //             dispatch(setDisplayError('Errors Connecting to Server!'));
    //         });
    // }, [userId, dispatch]);

    if (isLoading) {
        return <LoadingAnimation />;
    }

    return (
        <div className="profile-container">
            <img
                src={userData.data.avatar}
                alt={userData.data.first_name}
                className="profile-avatar"
            />
            <div className="profile-info-container">
                <div className="profile-name">{`${userData.data.first_name} ${userData.data.last_name}`}</div>
                <div className="profile-email">{userData.data.email}</div>
            </div>
        </div>
    );
};

export default Profile;
