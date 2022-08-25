import React from "react";
import "./SideBar.css"
import SideBarItem from "./SideBarItem";
import HomeIcon from "../../assets/icons/home.png";
import UsersIcon from "../../assets/icons/users.png";

const SideBar = () => {


    return (
        <div className='sidebar-container'>
            <SideBarItem path={"/react-redux-app/home"} icon={HomeIcon} alt={"Home"} title={"Home"} />
            <SideBarItem path={"/react-redux-app/users"} icon={UsersIcon} alt={"Users"} title={"Users"} />
        </div>
    );
}

export default SideBar;
