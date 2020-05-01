import React, { useState,useEffect } from 'react';
import {Button, Card, CardBody, Collapse} from "reactstrap";
import { FaPlus , FaMinus,FaRegPlayCircle} from "react-icons/fa";
import { GiStopwatch} from "react-icons/gi";
import {formatNumber} from './../../../Common/JS-Function/Js-common-function'
import CheckBoxCustom from "../CheckBoxCustom/CheckBoxCustom";


export default function ExtendedDiv (props){
    const [collapse, setcollapse,] = useState(false);
    let{name,index,off,price,total_video_times,videos,toggle}=props


    return (

        <div className={["mt-3 w-100  pl-sm-4 pr-sm-4",index!==0?"brt-s":'pt-2'].join(" ")} dir='rtl' id={props.id} >


                    <div className='mt-4 w-100  ' >
                        <div className='d-flex justify-content-start align-items-center  FssubmitLogin ' onClick={()=>{setcollapse(!collapse)}} >
                            {
                               collapse?

                                   <span className= ' border-Carousel p-1 p-sm-2 mr-1 mr-sm-3' ><FaMinus/></span>

                                    :
                                   <span className= ' border-Carousel p-1 p-sm-2 mr-1 mr-sm-3' > <FaPlus/></span>

                            }

                            <div className="d-flex w-100 FssubmitLogin align-items-center">

                                    <div className='mr-1 col-7 p-0'>
                                        {/*درس*/}
                                        {/*{index+1}: */}
                                        {name}
                                        </div>
                                <div className="ml-auto row justify-content-end">
                                    <span className='red-color text-decoration-line-through  mr-2     '>{formatNumber(price)} تومن  </span>
                                    {off!==0?<span className='header-color      '>{formatNumber(price-(price*off))} تومن  </span>:""}
                                </div>




                            </div>



                        </div>
                        <div className="col-12 pl-sm-5 pr-sm-0 pt-2 pb-2 d-flex  "  >
                            <div className=" d-flex align-items-start align-items-sm-center FssubmitLogin">
                                <div className="mr-3 green-them">
                                    <span className= ' ' ><GiStopwatch/></span>
                                    <span className= ' mr-2' > {total_video_times} </span>

                                </div>

                                <div className="mr-3 green-them cursor-pointer" onClick={( )=>{ toggle('demo',videos)}}>
                                    <span className= ' '    ><FaRegPlayCircle/></span>
                                    <span className= '  mr-2'    > مشاهده پیش نمایش  </span>

                                </div>
                            </div>

                            <div className='fs-lesion  d-flex ml-auto ' >
                                <CheckBoxCustom data={ props.buyData} id={props.id} row_id={props.index+1} isCheck={props.isCheck}  />

                            </div>
                        </div>
                    </div>
                    <Collapse isOpen={ collapse}>
                        <div   className='w-100' dir="ltr">
                            {props.children}
                        </div>
                    </Collapse>

        </div>
        )
};










