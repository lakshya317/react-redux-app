import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import "./PageNotFound.css";
import Header from "../Header/Header";

const PageNotFound = () => {
    const navigate = useNavigate();

    useEffect(()=>{
        setTimeout(()=>{
            navigate("/react-redux-app/")
        }, 2000)
    },[navigate])

    return (
        <div className="landing">
            <Header />
            <div className='page-body'>
                <div className='page-title'>
                    Error 404: Page Not Found.
                </div>
                <div className='page-title-sm'>
                    Redirecting you to Home Page...
                </div>
            </div>
        </div>
    );
}

export default PageNotFound;
