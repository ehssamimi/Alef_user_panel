import React from 'react';
import { FaAngleLeft } from "react-icons/fa";
export default function HeaderNavigation (props){


    return <div className="w-100">
        <span className="txt-content-main">{props.content.main}</span>
        <span className="txt-content-main mr-2 ml-2 "><FaAngleLeft/></span>
        <span className="txt-content-branch">{props.content.branch}</span>
    </div>
};