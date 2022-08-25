import React from 'react';

const UserCard = (props) => {
    const {user} = props;
    return (
        <div className="user-card-container">
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
