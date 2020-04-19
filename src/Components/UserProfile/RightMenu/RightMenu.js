import React, {useState, useEffect, useContext} from 'react';
import profile from './../../../Common/img/profile.jpg'
import active from './../../../Common/img/white_selector.png'
import { GiGraduateCap } from "react-icons/gi";
import { AiOutlineUser } from "react-icons/ai";
import { MdExitToApp } from "react-icons/md";
import {Link} from "react-router-dom";
import {UrlContext} from "../../Common/Context/UrlProvider";




export default function RightMenu (props){
    const Url_context=useContext(UrlContext);
     const [selected, setselected] = useState("my-course");
     const UserSumery=localStorage.getItem("user_alef").split(",");


     useEffect(()=>{

         console.log("user_alef")

             switch (Url_context) {
                 case "my-course":
                     setselected("my-course");
                     break;
                 case "my-schedule":
                     setselected("my-schedule");
                     break;
                 case "user-profile" || "user-info":
                     setselected("user-profile");
                     break;
                     case "exit":
                     setselected("exit");
                     break;
                 default:
                     setselected("user-profile");

             }

     });


    return (
        <div className="d-flex  w-100   " dir='rtl'>

            <div className="rightMenu h-min-45em  position-fixed">
                <div className="green-rightMenu  h-100   align-items-center">
                    <div className="  w-100 h-30 h-min-12em d-flex justify-content-center align-items-center flex-column">
                        <div className=" ">
                            <div className='profile-pic br-w br-r50  p-05'>
                                <img src={UserSumery[1]}  alt="profile" className="img-self-cover br-r50 br-y"/>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center align-items-center flex-column" >
                            <p className="text-white fs80 m-0 pt-3 ">{UserSumery[0]} </p>
                            <p className="text-white fs70 m-0 pt-2 font-weight-light">{UserSumery[2]}</p>
                        </div>
                    </div>



                        <div className="w-100 h-70 h-min-20em  overflow-hidden mt-4">
                            <ul className="profile-user-list mt-4">


                                <li className="list-unstyled  fs13vw fw200 position-relative  h-5rem ">
                                    {
                                        selected === "my-course" ?
                                            <div className="w-100 h-100 position-relative">
                                                <img src={active} alt="active" className=" img-width-fill active-bj-back zIndex-2"/>
                                                <span className="zIndex-3 list-user-profile w-100 pl-2"><GiGraduateCap/>دور ه های من</span>
                                            </div> :
                                            <div className="w-100 h-100 position-relative "
                                                 onClick={() => setselected("my-course")}>
                                                <Link to="/my-course"><span
                                                    className="zIndex-3 list-user-profile w-100 pl-2"><GiGraduateCap/>دور ه های من</span></Link>
                                            </div>

                                    }
                                </li>

                                {/*{*/}
                                    {/*selected==="my-course"?*/}
                                        {/*<li className="list-unstyled  fs13vw fw200 position-relative h-List-item ">*/}
                                            {/*<img src={active}  alt="active" className="  img-self-fill zIndex-2"/>*/}
                                            {/*<span className="zIndex-3 list-user-profile w-100 pl-2"><GiGraduateCap/>دور ه های من</span>*/}
                                        {/*</li>:*/}
                                        {/*<li className="list-unstyled text-white fs13vw fw200   pl-2 position-relative h-List-item d-flex align-items-center pt-3 "*/}
                                            {/*onClick={() =>setselected("my-course")}>*/}
                                            {/*<Link to="/my-course"><span className="zIndex-3 list-user-profile w-100 pl-2"> <GiGraduateCap/>دور ه های من</span></Link></li>*/}

                                {/*}*/}

                                <li className="list-unstyled  fs13vw fw200 position-relative  h-5rem ">
                                    {
                                        selected === "my-schedule" ?
                                            <div className="w-100 h-100 position-relative">
                                                <img src={active} alt="active" className=" img-width-fill active-bj-back zIndex-2"/>
                                                <span className="zIndex-3 list-user-profile w-100 pl-2"><GiGraduateCap/>برنامه مطالعاتی</span>
                                            </div> :
                                            <div className="w-100 h-100 position-relative "
                                                 onClick={() => setselected("my-schedule")}>
                                                <Link to="/my-schedule"><span
                                                    className="zIndex-3 list-user-profile w-100 pl-2"><GiGraduateCap/>برنامه مطالعاتی</span></Link>
                                            </div>

                                    }
                                </li>

                                {/*{*/}
                                    {/*selected==="my-schedule"?*/}
                                        {/*<li className="list-unstyled  fs13vw fw200 position-relative  ">*/}
                                            {/*<img src={active}  alt="active" className="  img-self-fill zIndex-2"/>*/}
                                            {/*<span className="zIndex-3 list-user-profile w-100 pl-2"><GiGraduateCap/>برنامه مطالعاتی</span>*/}
                                        {/*</li>:*/}
                                        {/*<li className="list-unstyled text-white fs13vw fw200     position-relative h-List-item      "*/}
                                            {/*onClick={() =>setselected("my-schedule")}><Link to="/my-schedule"><span className="zIndex-3 list-user-profile w-100 pl-2"><GiGraduateCap/>برنامه مطالعاتی</span></Link>*/}
                                        {/*</li>*/}
                                {/*}*/}


                                <li className="list-unstyled  fs13vw fw200 position-relative  h-5rem ">
                                    {
                                        selected === "user-profile" ?
                                            <div className="w-100 h-100 position-relative">
                                                <img src={active} alt="active" className=" img-width-fill active-bj-back zIndex-2"/>
                                                <span className="zIndex-3 list-user-profile w-100 pl-2"><AiOutlineUser/> پروفایل کاربری</span>
                                            </div> :
                                            <div className="w-100 h-100 position-relative "
                                                 onClick={() => setselected("user-profile")}>
                                                <Link to="/user-profile"><span
                                                    className="zIndex-3 list-user-profile w-100 pl-2"><AiOutlineUser/> پروفایل کاربری</span></Link>
                                            </div>

                                    }
                                </li>


                                {
                                    selected==="exit"?
                                        <li className="list-unstyled  fs13vw fw200 position-relative  ">
                                            <img src={active}  alt="active" className="  img-self-fill zIndex-2"/>
                                            <span className="zIndex-3 list-user-profile w-100 pl-2"><MdExitToApp/> خروج</span>
                                        </li>:
                                        <li className="list-unstyled text-white fs13vw fw200   pl-2 position-relative h-List-item "
                                            onClick={() =>setselected("exit")}><span className="zIndex-3 list-user-profile w-100 pl-2"><MdExitToApp/> خروج</span>
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

