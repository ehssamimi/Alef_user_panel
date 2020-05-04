import React, {useState, useEffect, useContext} from 'react';
import profile from './../../../Common/img/profile.jpg'
import active from './../../../Common/img/white_selector.png'
import { GiGraduateCap } from "react-icons/gi";
import { AiOutlineUser } from "react-icons/ai";
import { MdExitToApp } from "react-icons/md";
import { FiCalendar ,FiLogOut} from "react-icons/fi";
import {Link} from "react-router-dom";
import {UrlContext} from "../../Common/Context/UrlProvider";
import {LogOut} from "../../../Common/Const/ServerConnection";
import {NotificationManager} from "react-notifications";
import { Redirect } from "react-router-dom";
import cookie from 'react-cookies';





export default function RightMenu (props){
    const Url_context=useContext(UrlContext);
     const [selected, setselected] = useState("my-course");
    let UserSumery="";
    if (localStorage.getItem("user_alef")) {
        UserSumery=localStorage.getItem("user_alef").split(",")
    }




     useEffect(()=>{

         console.log("user_alef")
         // console.log(Url_context)
         // console.log(props.match.path)
         console.log(props.match.path.split("/"))

             switch (props.match.path.split("/")[1]) {
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
     const handelExit=async ()=>{
         setselected("exit");
         let {state ,Description}=await LogOut();
         if (state===200 ) {
             console.log("we are out !!!!!!!!!!");
             cookie.remove('basket', { path: '/' });
             localStorage.clear();
             // NotificationManager.success(state, Description);
            let home= document.getElementById("gohome");
             home.click()
             // props.history.push('/');
                 // return <Redirect to={'/'} />

         } else {

             NotificationManager.error(state, Description);

             // setisLoder(false);
             // error_Notification(state,Description)
         }

     }


    return (
        <div className="d-flex  w-100   " dir='rtl'>

            <div className="rightMenu h-min-45em  position-fixed">
                <div className="green-rightMenu  h-100   align-items-center">
                    <div className="  w-100   h-min-profile d-flex justify-content-center align-items-center flex-column">
                        <div className=" ">
                            <div className='profile-pic br-w br-r50  p-05'>
                                <img src={UserSumery[1]||profile}  alt="profile" className="img-self-cover br-r50 br-y  d-none d-md-block"/>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center align-items-center flex-column text-center" >
                            <p className="text-white FsFooterLogin  m-0 pt-3 ">{UserSumery[0]||"name"} </p>
                            <p className="text-white  FsFooterLogin m-0 pt-2 font-weight-light">{UserSumery[2]||"grade"}</p>
                        </div>
                    </div>



                        <div className="w-100 h-70 h-min-20em  overflow-hidden mt-4">
                            <ul className="profile-user-list mt-4">


                                <li className="list-unstyled  fs13vw fw200 position-relative  h-5rem " >
                                    {
                                        selected === "my-course" ?
                                            <div className="w-100 h-100 position-relative">
                                                <img src={active} alt="active" className=" img-width-fill active-bj-back zIndex-2"/>
                                                <span className="zIndex-3 list-user-profile w-100 pl-2 green-them "><span className="mr-2"><GiGraduateCap/> </span> دور ه های من</span>
                                            </div> :
                                            <div className="w-100 h-100 position-relative "
                                                 >
                                                <Link to="/my-course" onClick={() => setselected("my-course")}><span
                                                    className="zIndex-3 list-user-profile w-100 pl-2 text-white"><span className="mr-2"><GiGraduateCap/> </span>دور ه های من</span></Link>
                                            </div>

                                    }
                                </li>


                                <li className="list-unstyled  fs13vw fw200 position-relative  h-5rem "  >
                                    {
                                        selected === "my-schedule" ?
                                            <div className="w-100 h-100 position-relative">
                                                <img src={active} alt="active" className=" img-width-fill active-bj-back zIndex-2"/>
                                                <span className="zIndex-3 list-user-profile w-100 pl-2 green-them"><span className="mr-2"><FiCalendar/> </span>برنامه مطالعاتی</span>
                                            </div> :
                                            <div className="w-100 h-100 position-relative   "
                                                >
                                                <Link to="/my-schedule" onClick={() => setselected("my-schedule")}><span
                                                    className="zIndex-3 list-user-profile w-100 pl-2 text-white"><span className="mr-2"><FiCalendar/> </span>برنامه مطالعاتی</span></Link>
                                            </div>

                                    }
                                </li>




                                <li className="list-unstyled  fs13vw fw200 position-relative  h-5rem " >
                                    {
                                        selected === "user-profile" ?
                                            <div className="w-100 h-100 position-relative">
                                                <img src={active} alt="active" className=" img-width-fill active-bj-back zIndex-2"/>
                                                <span className="zIndex-3 list-user-profile w-100 pl-2 green-them"><span className="mr-2"><AiOutlineUser /> </span>پروفایل کاربری</span>
                                            </div> :
                                            <div className="w-100 h-100 position-relative text-white "
                                                 >
                                                <Link to="/user-profile" onClick={() => setselected("user-profile")}>
                                                    <span className="zIndex-3 list-user-profile w-100 pl-2 text-white"><span className="mr-2"><AiOutlineUser /> </span>پروفایل کاربری</span>
                                                </Link>
                                            </div>

                                    }
                                </li>

                                <li className="list-unstyled  fs13vw fw200 position-relative  h-5rem " onClick={handelExit}>
                                    {
                                        selected === "exit" ?
                                            <div className="w-100 h-100 position-relative"  >
                                                <img src={active} alt="active" className=" img-width-fill active-bj-back zIndex-2"/>
                                                <span className="zIndex-3 list-user-profile w-100 pl-2 green-them"><span className="mr-2"><FiLogOut /> </span>خروج</span>
                                            </div> :
                                            <div className="w-100 h-100 position-relative text-white "
                                                 onClick={() => setselected("user-profile")}>
                                                <Link to="/user-profile">
                                                    <span className="zIndex-3 list-user-profile w-100 pl-2 text-white"><span className="mr-2"><FiLogOut /> </span>خروج</span>
                                                </Link>
                                            </div>

                                    }
                                </li>






                            </ul>
                        </div>





                </div>


            </div>
            <div className="w-100 d-flex " >
                <div className="rightMenu">

                </div>
                {props.children }

            </div>




<a className="d-none" id="gohome" href="/">home</a>
        </div>
    );
};

