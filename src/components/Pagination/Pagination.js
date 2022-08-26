import React from 'react';
import "./Pagination.css";
import RightArrow from "../../assets/icons/right-arrow.png";
import LeftArrow from "../../assets/icons/left-arrow.png";
import RightDoubleArrow from "../../assets/icons/right-double-arrow.png";
import LeftDoubleArrow from "../../assets/icons/left-double-arrow.png";

const Pagination = (props) => {
    const {current, perPage, handlePageChange, totalPages, total} = props;

    const pageChange = (newPage) => {
        if(!(newPage < 1 || newPage > totalPages)){
            handlePageChange(newPage);
        }
    }
    return (
        <div className='pagination-container'>
            <div className="pagination-main">
                <img className="page-arrow" src={LeftDoubleArrow} alt={"First"} onClick={() => pageChange(1)} />
                <img className="page-arrow" src={LeftArrow} alt={"Previous"} onClick={() => pageChange(current - 1)} />
                    {
                    Array.from(Array(totalPages).keys()).map((index) => {
                        let page = index + 1;
                        return (
                            <div
                                className={`page-number${page === current ? " current-page" : ""}`}
                                onClick={() => pageChange(page)}
                                key={index}
                            >
                                {page}
    
                            </div>
                        );
    
                    })
                    }
                <img className="page-arrow" src={RightArrow} alt={"Next"} onClick={() => pageChange(current + 1)} />
                <img className="page-arrow" src={RightDoubleArrow} alt={"Last"} onClick={() => pageChange(props.totalPages)} />
            </div>
            <div className="pagination-summary">
                {`Showing ${1+ (perPage * (current-1))} - ${perPage*current} of ${total}`}
            </div>
        </div>
    );
}

export default Pagination;
