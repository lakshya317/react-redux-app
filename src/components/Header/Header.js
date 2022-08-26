import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Overlay from 'react-bootstrap/Overlay';
import Shell_Logo from "../../assets/images/Shell_Logo.png";
import "./Header.css";
import { handleLogout } from '../../action/authentication';
import ProfileIcon from "../../assets/icons/profile.png";
import LogoutIcon from "../../assets/icons/logout.png";

const Header = (props) => {
    const [show, setShow] = useState(false)
    const target = useRef(null);
    //Redux State
    const { loggedIn, authUser } = useSelector((state) => ({
        loggedIn: state.loggedIn,
        authUser: state.authUser,
    }));
    //Dispatch
    const dispatch = useDispatch();
    //Set Redirect Link for Logo
    var home = "/"
    if (loggedIn) {
        home = "/home"
    }

    return (
        <div className="header">
            <Link to={home} style={{ textDecoration: 'none' }}>
                <img className="Shell-logo" src={Shell_Logo} alt="Shell Logo" />
            </Link>
            {
                (!loggedIn || !authUser.id) ? null :
                    <div className="profile-overlay-trigger">
                        <img src={authUser.avatar} alt="Avatar" className="auth-profile-avatar" onClick={() => setShow(!show)} ref={target} />
                        <Overlay show={show} placement="bottom" target={target} rootClose onHide={() => setShow(false)} offset={[-20,20]}>
                            <div className="overlay-container">
                                <div className='overlay-header'>
                                    Hey <span className='overlay-header-name'>{`${authUser.first_name} ${authUser.last_name}`}</span>!
                                    <br/>
                                    {/* <span className='overlay-header-email'>{authUser.email}</span> */}
                                </div>
                                <div className='overlay-item'>
                                    <Link to={`/users/${authUser.id}`} className="overlay-link" style={{ textDecoration: 'none' }}>
                                        <img src={ProfileIcon} alt={"Profile"} className="link-icon"/>
                                        <div className="profile-link">
                                            Profile
                                        </div>
                                    </Link>
                                </div>
                                <div className='overlay-item'>
                                    <Link to={"/"} className="overlay-link" style={{ textDecoration: 'none' }} onClick={() => { dispatch(handleLogout()) }}>
                                        <img src={LogoutIcon} alt={"Logout"} className="link-icon"/>
                                        <div className="logout-link">
                                            Logout
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </Overlay>
                    </div>
            }
        </div>
    );
}

export default Header;
