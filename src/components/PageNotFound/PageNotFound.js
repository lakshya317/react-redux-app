import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './PageNotFound.css';
import Header from '../Header/Header';
import LoadingAnimation from '../Loading/Loading';

const PageNotFound = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/');
        }, 2000);
    }, [navigate]);

    return (
        <div className="landing">
            <Header />
            <div className="page-body">
                <div className="page-title">Error 404: Page Not Found!</div>
                <div className="page-title-sm">Redirecting you to Home Page...</div>
                <div className="loading-not-found">
                    <LoadingAnimation variant={'dark'} />
                </div>
            </div>
        </div>
    );
};

export default PageNotFound;
