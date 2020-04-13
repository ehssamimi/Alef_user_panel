import React, { useState,useEffect } from 'react';
import profile from './../../../Common/img/profile.jpg'
import active from './../../../Common/img/white_selector.png'
import { GiGraduateCap } from "react-icons/gi";
import { AiOutlineUser } from "react-icons/ai";
import { MdExitToApp } from "react-icons/md";
import {Link} from "react-router-dom";



export default function RightMenu (props){
     const [selected, setselected] = useState({"first":false,"second":false,"three":true,"four":false});

    const handelClick=(i)=>{
        switch (i) {
            case 'first':
                setselected({"first": true, "second": false, "three": false, "four": false});
                break;
            case 'second':
                setselected({"first": false, "second": true, "three": false, "four": false});
                break;
            case 'three':
                setselected({"first": false, "second": false, "three": true, "four": false});
                break;
            case 'four':
                setselected({"first": false, "second": false, "three": false, "four": true});
                break;
            default:
                setselected({"first": true, "second": false, "three": false, "four": false});
            // code block
        }

    }

    return (
        <div className="d-flex     " dir='rtl'>

            <div className="rightMenu h-min-45em  position-fixed">
                <div className="green-rightMenu  h-100   align-items-center">
                    <div className="  w-100 h-30 h-min-12em d-flex justify-content-center align-items-center flex-column">
                        <div className=" ">
                            <div className='profile-pic br-w br-r50  p-05'>
                                <img src={profile} alt="profile" className="img-self-cover br-r50 br-y"/>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center align-items-center flex-column" >
                            <p className="text-white fs80 m-0 pt-3 ">احسان صمیمی راد </p>
                            <p className="text-white fs70 m-0 pt-2 font-weight-light">پایه یازدهم</p>
                        </div>
                    </div>



                        <div className="w-100 h-70 h-min-20em  overflow-hidden">
                            <ul className="profile-user-list">

                                {
                                    selected.first?
                                        <li className="list-unstyled  fs13vw fw200 position-relative h-List-item ">
                                            <img src={active}  alt="active" className="  img-self-fill zIndex-2"/>
                                            <span className="zIndex-3 list-user-profile w-100 pl-2"><GiGraduateCap/>دور ه های من</span>
                                        </li>:
                                        <li className="list-unstyled text-white fs13vw fw200   pl-2 position-relative h-List-item d-flex align-items-center pt-3 "
                                            onClick={() => {
                                                handelClick('first')
                                            }}>
                                            <Link to="/my-course"><span className="zIndex-3 list-user-profile w-100 pl-2"> <GiGraduateCap/>دور ه های من</span></Link></li>

                                }

                                {
                                    selected.second?
                                        <li className="list-unstyled  fs13vw fw200 position-relative  ">
                                            <img src={active}  alt="active" className="  img-self-fill zIndex-2"/>
                                            <span className="zIndex-3 list-user-profile w-100 pl-2"><GiGraduateCap/>برنامه مطالعاتی</span>
                                        </li>:
                                        <li className="list-unstyled text-white fs13vw fw200     position-relative h-List-item      "
                                            onClick={() => {
                                                handelClick('second')
                                            }}><Link to="/my-schedule"><span className="zIndex-3 list-user-profile w-100 pl-2"><GiGraduateCap/>برنامه مطالعاتی</span></Link>
                                        </li>
                                }
                                {
                                    selected.three?
                                        <li className="list-unstyled  fs13vw fw200 position-relative  ">
                                            <img src={active}  alt="active" className="  img-self-fill zIndex-2"/>
                                            <span className="zIndex-3 list-user-profile w-100 pl-2"><AiOutlineUser/> پروفایل کاربری</span>
                                        </li>:
                                        <li className="list-unstyled text-white fs13vw fw200     position-relative h-List-item   " onClick={()=>{handelClick('three')}}>
                                            <a href="/user-profile"><span className="zIndex-3 list-user-profile w-100 pl-2"><AiOutlineUser/> پروفایل کاربری</span></a></li>
                                }
                                {
                                    selected.four?
                                        <li className="list-unstyled  fs13vw fw200 position-relative  ">
                                            <img src={active}  alt="active" className="  img-self-fill zIndex-2"/>
                                            <span className="zIndex-3 list-user-profile w-100 pl-2"><MdExitToApp/> خروج</span>
                                        </li>:
                                        <li className="list-unstyled text-white fs13vw fw200   pl-2 position-relative h-List-item "
                                            onClick={() => {
                                                handelClick('four')
                                            }}><span className="zIndex-3 list-user-profile w-100 pl-2"><MdExitToApp/> خروج</span>
                                        </li>
                                }







                            </ul>
                        </div>





                </div>


            </div>
            <div className="w-100 d-flex " >
                <div className="rightMenu">

                </div>
                {props.children }

            </div>






        </div>
    );
};

