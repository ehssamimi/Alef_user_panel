import React from 'react';
import { FaAngleLeft } from "react-icons/fa";
import {Link} from "react-router-dom";
export default function HeaderNavigation (props){


    return <div className="w-100">
        <Link to={'/user-profile'} className="text-decoration-none">
            <span className="txt-content-main">{props.content.main}</span>
        </Link>

        <span className="txt-content-main mr-2 ml-2 "><FaAngleLeft/></span>
        <span className="txt-content-branch">{props.content.branch}</span>
    </div>
};