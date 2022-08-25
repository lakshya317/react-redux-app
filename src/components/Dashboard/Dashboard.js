import React from 'react';
import { useSelector } from 'react-redux';
import LoadingAnimation from '../Loading/Loading';
import "./Dashboard.css"

const Dashboard = () => {
    //Redux State
    const authUser = useSelector((state) => state.authUser);
    const loading = useSelector((state) => state.loading);

    if(loading){
        return <LoadingAnimation/>
    }
    return (
        <div className='dash-title'>
            <div>
                <span className="welcome">{"Welcome "}</span>
                <span className="user-title">{authUser.first_name}</span>
                <span className="welcome">{"!"}</span>
            </div>
        </div>
    );
}

export default Dashboard