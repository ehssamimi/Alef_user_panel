import React, {Component} from 'react';

import {FaAngleLeft} from "react-icons/fa";


export default function HeaderCourse (props){

    return(
                <div className="w-100"  >
                    <span className="txt-content-main ">{props.main}</span>
                    <span className="txt-content-main mr-2 ml-2 "><FaAngleLeft/></span>
                    <span ><span className="txt-content-branch">{props.sub}</span><span className="font-weight-light ml-1"> ({props.branch})</span></span>
                </div>
    )
}