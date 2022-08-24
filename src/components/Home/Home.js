import React from 'react';
import "./Home.css";
import SideBar from '../SideBar/SideBar';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div className="home-container">
            <Header/>
            <SideBar/>
            <div className="rest-of-dash">
                Yo
            </div>
        </div>
    );
}

export default Home;
