import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserCard = (props) => {
    const {user} = props;
    const navigate = useNavigate();
    return (
        <div className="user-card-container" onClick={()=>navigate(`/react-redux-app/users/${user.id}`)}>
            <img src={user.avatar} alt={user.first_name} className="user-card-avatar"/>
            <div className='user-info-container'>
                <div className="user-card-name">
                    {`${user.first_name} ${user.last_name}`}
                </div>
                <div className="user-card-email">
                    {user.email}
                </div>
            </div>
        </div>
    );
}

export default UserCard;
