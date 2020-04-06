import React, { useState,useEffect } from 'react';
import {Card, CardBody, Collapse} from "reactstrap";
import {  FaUserTie,FaRegPlayCircle} from "react-icons/fa";
import { GiStopwatch} from "react-icons/gi";
import {formatNumber} from './../../../Common/JS-Function/Js-common-function'
import CheckBoxCustom from "../CheckBoxCustom/CheckBoxCustom";



export default function HeaderCourse (props){
    const [collapse, setcollapse] = useState(false);
    let number=1321546463;
    return (

        <div className='mt-3 w-100 brt-s' dir='rtl' >


            <div className='mt-4 w-100' >
                <div className='d-flex justify-content-start align-items-center '
                     // onClick={()=>{setcollapse(!collapse)}}
                >

                    <div className="d-flex w-100 ">

                        <div className='  fs-lesion '>{'ریاضی'} </div>
                        <div className='fs-lesion  d-flex ml-auto '>{formatNumber(250000)} تومن  </div>

                    </div>



                </div>
                <div className="col-12 pl-5 pr-0 pt-2 pb-2 d-flex  ">
                    <div className=" d-flex align-items-center">
                        <div className="mr-3 green-them">
                            <span className= ' ' ><FaUserTie/></span>
                            <span className= ' mr-2' > احسان صمیمی راد  </span>

                        </div>
                        <div className="mr-3 green-them">
                            <span className= ' ' ><GiStopwatch/></span>
                            <span className= ' mr-2' > 4hr,20min </span>

                        </div>
                        <div className="mr-3 green-them">
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
            {/*<Collapse isOpen={ collapse}>*/}
                {/*<div   className='w-100' dir="ltr">*/}
                    {/*{props.children}*/}
                {/*</div>*/}
            {/*</Collapse>*/}

        </div>
    )
};










