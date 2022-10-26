import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import LoadingAnimation from '../Loading/Loading';
// import API from '../../utils/API';
import UserCard from './UserCard';
import Pagination from '../Pagination/Pagination';
import { setDisplayError } from '../../action/displayError';
import { useGetUsersQuery } from '../../utils/API/apiSlice';
import './Users.css';

const UserList = () => {
    const ITEMS_PER_PAGE = 4;
    //state
    // const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    // const [userData, setUserData] = useState([]);
    const [total, setTotal] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const {
        data: userData,
        isFetching,
        isError
    } = useGetUsersQuery({ pageNum: page, perPage: ITEMS_PER_PAGE });

    //Dispatch
    const dispatch = useDispatch();

    useEffect(() => {
        if (isError) {
            dispatch(setDisplayError('Errors Connecting to Server!'));
        }
    }, [isError, dispatch]);

    useEffect(() => {
        if (userData) {
            setTotal(userData.total);
            setTotalPages(userData.total_pages);
        }
    }, [userData]);

    //Call API on page change
    // useEffect(() => {
    //     setLoading(true);
    //     API.getUsers(page, ITEMS_PER_PAGE)
    //         .then((response) => {
    //             //eslint-disable-next-line
    //             if (response.page == page && response.per_page === ITEMS_PER_PAGE) {
    //                 setUserData(response.data);
    //                 setTotal(response.total);
    //                 setTotalPages(response.total_pages);
    //                 setLoading(false);
    //             } else {
    //                 throw new Error('Invalid Response!');
    //             }
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //             dispatch(setDisplayError('Errors Connecting to Server!'));
    //             setLoading(false);
    //         });
    // }, [dispatch, page]);

    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    return (
        <div className="users-container">
            {isFetching ? (
                <div className="users-card-container">
                    <LoadingAnimation />
                </div>
            ) : (
                <div className="users-card-container">
                    {userData.data.map((user) => {
                        return <UserCard key={user.id} user={user} />;
                    })}
                </div>
            )}
            <Pagination
                current={page}
                totalPages={totalPages}
                handlePageChange={handlePageChange}
                perPage={ITEMS_PER_PAGE}
                total={total}
            />
        </div>
    );
};

export default UserList;
