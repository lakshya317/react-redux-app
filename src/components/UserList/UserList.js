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
    //state
    const [loading, setLoading] = useState(false);
    const [userData, setUserData] = useState([]);
    const [total, setTotal] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    //Dispatch
    const dispatch = useDispatch();

    //Call API on page change
    useEffect(()=>{
        let page = 1;
        if(searchParams.get("page")){
            page = parseInt(searchParams.get("page"));
        }
        else{
            setSearchParams({"page": 1})
        }
        
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
    }, [dispatch, searchParams, setSearchParams])

    const handlePageChange = (newPage) => {
        setSearchParams({"page": newPage});
    }

    // if(loading){
    //     return(
    //         <LoadingAnimation/>
    //     )
    // }

    return (
        <div className='users-container'>
            {
                loading ? 
                <div className='users-card-container'>
                    <LoadingAnimation/>
                </div> :
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
                    current={searchParams.get("page")} 
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
