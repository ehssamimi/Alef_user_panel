import React, {useContext, useEffect, useState} from 'react';
import {UserContext} from "./../../Common/Context/UserProvider";
import ax from "../../../Common/img/Profile Picture.png";
import logo from "../../../Common/img/Logo-base.png";
import {Link} from "react-router-dom";
import {UrlContext} from "../../Common/Context/UrlProvider";
export default function MainHeader (props){
    const User=useContext(UserContext);
    const Url_context=useContext(UrlContext);
    const [isUser, setUser] = useState(false);
    const [active, setactive] = useState("home");
    const UserSumery=localStorage.getItem("user_alef").split(",");

    useEffect(()=>{
        switch (Url_context) {
            case  'user-profile' :

                setactive("user");
                setUser(true);
                break;
            case   'user-info'  :

                setactive("user");
                setUser(true);
                break;
            case  'my-course' :

                setactive("user");
                setUser(true);
                break;
            case 'my-schedule' :

                setactive("user");
                setUser(true);
                break;
            case '':
                setactive("home");
                setUser(false);
                break;
            case 'courses':
                setactive("courses");
                setUser(false);
                break;
            case 'about':
                setactive("about");
                setUser(false);
                break;

            default:
                setactive("courses");
                setUser(false);
        }
    });


    return (
            <div className="HomePage " dir="rtl">
                <div className="w-100 navbar-light bg-light">
                    <nav className="navbar navbar-expand-lg   ">
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse w-100" id="navbarSupportedContent">
                            <ul className="navbar-nav  col-8 justify-content-between ">
                                {
                                    User.isLogIn?
                                        !isUser?
                                        <li className="nav-item   d-flex      ">
                                            <a className="w-100 d-flex text-decoration-none" href="/user-profile">
                                                <div className='profile-pic-in-top br-g br-r50  p-05'>
                                                    <img src={UserSumery[1]} alt="profile" className="img-self-cover br-r50 br-y"/>
                                                </div>
                                                <div className="d-flex flex-column">
                                                    <span className="second-color">{UserSumery[0]} </span>
                                                    <span  className="second-color">{UserSumery[2]} </span>
                                                </div>

                                            </a>


                                        </li>
                                            :""
                                        :

                                        <li className="nav-item br-over-g d-flex align-items-center br10px  ">
                                            <a className="nav-link header-color font-weight-bold" href="/login">ثبت نام / ورود </a>
                                        </li>

                                }

                                <li className={active === "home" ? "nav-item  d-flex align-items-center activeHeaderMenu header-color" : "nav-item  d-flex align-items-center  second-color"}
                                    onClick={() => setactive("home")}>
                                    <Link className="nav-link" to="/">
                                        خانه
                                    </Link>
                                    {/*<a className="nav-link" href="/"> </a>*/}
                                </li>
                                <li className={active === "about" ? "nav-item  d-flex align-items-center activeHeaderMenu header-color" : "nav-item  d-flex align-items-center  second-color"} onClick={()=>setactive("about")}>
                                    <Link className="nav-link" to="/about">
                                        درباره ما
                                    </Link>
                                    {/*<a className="nav-link" href="/about"> </a>*/}
                                </li>
                                <li className={active === "courses" ? "nav-item  d-flex align-items-center activeHeaderMenu header-color" : "nav-item  d-flex align-items-center  second-color"} onClick={()=>setactive("course")}>
                                    <Link className="nav-link" to="/courses">
                                        دوره
                                    </Link>
                                 </li>



                            </ul>
                            <span className=" ml-auto"  >
                            <div className="logo-in-top">
                                <img src={logo} alt="logo" className="img-self-fill"/>
                            </div>

                        </span>

                        </div>

                    </nav>
                </div>
                <div className=" w-100 pl-4 pr-4 mt-3">
                    { props.children}
                </div>



            </div>

    );
};

