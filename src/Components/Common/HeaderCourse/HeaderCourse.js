import React, { useState,useEffect } from 'react';
import {Card, CardBody, Collapse} from "reactstrap";
import {  FaUserTie,FaRegPlayCircle} from "react-icons/fa";
import { GiStopwatch} from "react-icons/gi";
import {formatNumber} from './../../../Common/JS-Function/Js-common-function'
import CheckBoxCustom from "../CheckBoxCustom/CheckBoxCustom";



export default function HeaderCourse (props){
    let{name,cost,sellcost,teacher_V_img,toggle, teacher_V,Teache_time,teacher_name}=props

    return (

        <div className='mt-3 w-100  ' dir='rtl' >
            <div className='mt-4 w-100' >
                <div className='d-flex justify-content-start align-items-center '>
                    <div className="d-flex w-100 ">
                        <h3 className="header-color">{name}</h3>
                        <div className="ml-auto row">
                            <span className='red-color text-decoration-line-through  mr-2 fs15rem    '>{formatNumber(cost)} تومن  </span>
                            {sellcost?<span className='header-color   fs15rem   '>{formatNumber(sellcost)} تومن  </span>:""}
                        </div>
                    </div>
                </div>

                <div className="col-12 pl-5 pr-0 pt-2 pb-2 d-flex  ">
                    <div className=" d-flex align-items-center">
                        <div className="mr-3 green-them">
                            <span className= ' ' ><FaUserTie/></span>
                            <span className= ' mr-2' > {teacher_name}  </span>

                        </div>
                        <div className="mr-3 green-them">
                            <span className= ' ' ><GiStopwatch/></span>
                            <span className= ' mr-2' > {Teache_time} </span>

                        </div>
                        <div className="mr-3 green-them cursor-pointer" onClick={( )=>{ toggle('demo',[teacher_V_img,teacher_V])}}>
                            <span className= ' '    ><FaRegPlayCircle/></span>
                            <span className= '  mr-2'    > مشاهده پیش نمایش  </span>
                        </div>
                    </div>

                    <div className='fs-lesion  d-flex ml-auto ' >
                        <CheckBoxCustom/>
                    </div>
                </div>
            </div>
            <div  className="pr-3 pl-3">
                {props.children}
            </div>


        </div>
    )
};










