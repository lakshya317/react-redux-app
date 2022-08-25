import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";

const SideBarItem = (props) => {
    const [selected, setSelected] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if(location.pathname.includes(props.path)){
            setSelected(true);
        }
        else{
            setSelected(false);
        }
    }, [location, props.path]);
    

    return(
        <div className={`sidebar-item${ selected? " selected-item": ""}`}>
            <Link to={props.path} className="menu-link" style={{ textDecoration: 'none' }}>
                <img src={props.icon} alt={props.alt} className="menu-icon"/>
                <div className="menu-title">{props.title}</div>
            </Link>
        </div>
    )
}

export default SideBarItem;