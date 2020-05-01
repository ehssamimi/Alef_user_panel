import React, { useState,useEffect } from 'react';
import {Card, CardBody, Collapse} from "reactstrap";
import {  FaUserTie,FaRegPlayCircle} from "react-icons/fa";
import { GiStopwatch} from "react-icons/gi";
import {formatNumber} from "../../../../Common/JS-Function/Js-common-function";
import CheckBoxCustom from "../../../Common/CheckBoxCustom/CheckBoxCustom";
// import {formatNumber} from './../../../Common/JS-Function/Js-common-function'
// import CheckBoxCustom from "../CheckBoxCustom/CheckBoxCustom";

// User.HandelLogin()

export default function TopLessons (props){
    // let{name,cost,sellcost,chapter_count}=props
    let{name,price,off,chapter_count}=props;
    const [totalCheck, setTotalCheck] = useState(false);
    const changeTotalCheck=(value)=>{
        setTotalCheck(value)
    };

    const childrenWithProps = React.Children.map( props.children, child =>
        React.cloneElement(child, { id: props.id,isCheck:totalCheck })
    );



    return (

        <div className='mt-3 w-100  mb-5 ' dir='rtl' >
            <div className='mt-4 w-100' >
                <div className='d-flex justify-content-start align-items-center '>
                    <div className="d-flex w-100 ">
                        <h3 className="header-color FsHeaderLogin1">{name}</h3>
                        <div className="ml-auto row FssubmitLogin">
                            {
                                off!==0? <span className='red-color text-decoration-line-through  mr-2      '>{formatNumber(price)} تومن  </span>:""
                            }
                            {
                                off!==0?<span className='header-color       '>{formatNumber(price-(price*off))} تومن  </span>:<span className='header-color   fs15rem   '>{formatNumber(price)} تومن  </span>
                            }


                        </div>
                    </div>
                </div>

                <div className="col-12 pl-4 pr-0  pb-2 row FssubmitLogin ">
                    <div className="   align-items-center col-sm-12 col-md-6 p-0">
                        <div className="mr-3 green-them FssubmitLogin pt-2">
                            <span className= ' ' >تعداد قسمت های این درس </span>
                            <span className= ' mr-2' > {chapter_count}  </span>
                        </div>

                    </div>

                    <div className='Green-dark-color FssubmitLogin d-flex ml-sm-auto pt-2' >
                        <CheckBoxCustom  data={props.course} id={props.id} row_id={0} totalCheck={changeTotalCheck}   />
                    </div>
                </div>
            </div>
            <div  className="pr-3 pl-3">
                {childrenWithProps}
                {/*{props.children}*/}
            </div>


        </div>
    )
};










