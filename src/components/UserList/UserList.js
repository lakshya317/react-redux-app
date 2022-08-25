import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import LoadingAnimation from '../Loading/Loading';
import API from "../../utils/API";
import { useSearchParams } from 'react-router-dom';
import UserCard from './UserCard';
import Pagination from '../Pagination/Pagination';
import {setDisplayError} from "../../action/displayError"
import "./Users.css"

const UserList = () => {
    //searchParam
    const [searchParams, setSearchParams] = useSearchParams();
    const ITEMS_PER_PAGE = 4;
    //read page from search params if exists
    const initialPage = parseInt(searchParams.get("page")) || 1
    //state
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(initialPage)
    const [userData, setUserData] = useState([]);
    const [total, setTotal] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    //Dispatch
    const dispatch = useDispatch();

    //Call API on page change
    useEffect(()=>{
        setLoading(true);
        API.getUsers(page, ITEMS_PER_PAGE)
            .then((response) => {
                // console.log("RES", response, page, response.page == page , response.per_page === ITEMS_PER_PAGE);
                //eslint-disable-next-line
                if(response.page == page && response.per_page === ITEMS_PER_PAGE){
                    setUserData(response.data);
                    setTotal(response.total);
                    setTotalPages(response.total_pages);
                    setLoading(false);
                }
                else{
                    throw new Error("Invalid Response!");
                }
            })
            .catch((err)=>{
                console.log(err);
                dispatch(setDisplayError("Errors Connecting to Server!"));
                setLoading(false);
            })
    }, [page, dispatch])

    // Update Search Params on Page Change
    useEffect(()=>{
        setSearchParams({"page": page})
    },[page, setSearchParams])

    const handlePageChange = (newPage) => {
        setPage(newPage);
    }

    // Returns
    // if(loading){
    //     return <LoadingAnimation/>
    // }
    return (
        <div className='users-container'>
            {
                loading ? <LoadingAnimation/> :
                <div className='users-card-container'>
                    {
                        userData.map((user) => {
                            return <UserCard key={user.id} user={user}/>
                        })
                    }
                </div>
            }
            <div className="pagination-container">
                <Pagination 
                    current={page} 
                    totalPages={totalPages} 
                    handlePageChange={handlePageChange} 
                    perPage={ITEMS_PER_PAGE} 
                    total={total}
                />
            </div>
        </div>
    );
}

export default UserList;
