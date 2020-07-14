import React, {useContext, useEffect, useState} from 'react';
import {UserContext} from "../../Common/Context/UserProvider";
import ax from "../../../Common/img/Profile Picture.png";
import logo from "../../../Common/img/Logo-base.png";
import {Link} from "react-router-dom";
import {UrlContext} from "../../Common/Context/UrlProvider";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText, UncontrolledButtonDropdown, UncontrolledCollapse
} from 'reactstrap';
import {LogOut} from "../../../Common/Const/ServerConnection";
import cookie from "react-cookies";
import {NotificationManager} from "react-notifications";

export default function MainHeader (props){
    const User=useContext(UserContext);
    const Url_context=useContext(UrlContext);
    const [isUser, setUser] = useState(false);
    const [active, setactive] = useState("home");
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    let UserSumery="";
    if (localStorage.getItem("user_alef")) {
       UserSumery=localStorage.getItem("user_alef").split(",")
    }
    const handelExit=async ()=>{
        setactive("course");
        let {state ,Description}=await LogOut();
        if (state===200 ) {
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


    useEffect(()=>{
        switch (Url_context) {
            case  'exit' :

                setactive("exit");
                setUser(true);
                break;
                case  'user-profile' :

                setactive("user-profile");
                setUser(true);
                break;
            case   'user-info'  :

                setactive("user-profile");
                setUser(true);
                break;
            case  'my-course' :

                setactive("my-course");
                setUser(true);
                break;
            case 'my-schedule' :

                setactive("my-schedule");
                setUser(true);
                break;
            case 'home':
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
        const Width=window.outerWidth;

        if(Width<766){
            setUser(true);
            setIsMobile(true);
        }else {
            // setUser(true);
            setIsMobile(false);
        }

    });


    return (
              <div className="HomePage" dir="ltr">
                <Navbar   light expand="md">
                    <NavbarBrand href="/">
                        <div className="logo-in-top HomePage">
                            <img src={logo} alt="logo" className="img-self-fill"/>
                        </div>
                    </NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto col-sm-9 col-md-11 col-lg-7 col-xl-6 justify-content-between" navbar dir="rtl">
                            {
                                User.isLogIn?
                                    !isUser?
                                        <li className="nav-item   d-flex      ">
                                            <a className="w-100 d-flex text-decoration-none" href="/user-profile">
                                                <div className='profile-pic-in-top br-g br-r50  p-05'>
                                                    <img src={UserSumery[1]} alt="profile" className="img-self-cover br-r50 br-y"/>
                                                </div>
                                                <div className="d-flex flex-column ml-2">
                                                    <span className="second-color">{UserSumery[0]} </span>
                                                    <span  className="second-color">{UserSumery[2]} </span>
                                                </div>

                                            </a>


                                        </li>
                                        :""
                                    :

                                    <li className="nav-item br-over-g d-flex align-items-center br10px      ">
                                        <a className="nav-link header-color font-weight-bold" href="/login">ثبت نام / ورود </a>
                                    </li>

                            }


                            <li className={active === "courses" ? "nav-item  d-flex align-items-center activeHeaderMenu header-color position-relative" : "nav-item  d-flex align-items-center  second-color"} onClick={()=>setactive("course")}>
                                <Link className="nav-link" to="/courses">
                                    دوره ها
                                </Link>
                            </li>
                            {
                                User.isLogIn?
                                    isMobile?
                                        <UncontrolledDropdown nav inNavbar  >
                                            <DropdownToggle nav caret>
                                                پنل کاربری
                                            </DropdownToggle>
                                            <DropdownMenu right>
                                                <DropdownItem>
                                                    <li className={active === "my-course" ? "nav-item  d-flex align-items-center activeHeaderMenu header-color position-relative" : "nav-item  d-flex align-items-center  second-color"}
                                                        onClick={() => setactive("course")}>
                                                        <Link className="nav-link" to="/my-course">
                                                            دوره های من
                                                        </Link>
                                                    </li>

                                                </DropdownItem>

                                                <DropdownItem divider/>


                                                <DropdownItem>
                                                    <NavItem id="toggler" >
                                                        دوره های انلاین
                                                    </NavItem>


                                                    <UncontrolledCollapse toggler="#toggler">

                                                        <DropdownItem  >

                                                            <li className={active === "current-online-class" ? "nav-item  d-flex align-items-center activeHeaderMenu header-color position-relative" : "nav-item  d-flex align-items-center  second-color"}
                                                                onClick={() => setactive("current-online-class")}>
                                                                <Link className="nav-link" to="/current-online-class">
                                                                    ورود به کلاس
                                                                </Link>
                                                            </li>


                                                        </DropdownItem>

                                                        <DropdownItem  >

                                                            <li className={active === "online-scheduler" ? "nav-item  d-flex align-items-center activeHeaderMenu header-color position-relative" : "nav-item  d-flex align-items-center  second-color"}
                                                                onClick={() => setactive("online-scheduler")}>
                                                                <Link className="nav-link" to="/online-scheduler">
                                                                    لیست کلاس های موجود
                                                                </Link>
                                                            </li>


                                                        </DropdownItem>
                                                    </UncontrolledCollapse>
                                                </DropdownItem>

                                                <DropdownItem divider/>
                                                <DropdownItem>
                                                    <li className={active === "my-schedule" ? "nav-item  d-flex align-items-center activeHeaderMenu header-color position-relative" : "nav-item  d-flex align-items-center  second-color"}
                                                        onClick={() => setactive("course")}>
                                                        <Link className="nav-link" to="/my-schedule">
                                                            برنامه های من
                                                        </Link>
                                                    </li>

                                                </DropdownItem>
                                                <DropdownItem divider/>
                                                <DropdownItem>

                                                    <li className={active === "user-profile" ? "nav-item  d-flex align-items-center activeHeaderMenu header-color position-relative" : "nav-item  d-flex align-items-center  second-color"}
                                                        onClick={() => setactive("course")}>
                                                        <Link className="nav-link  " to="/user-profile">
                                                            پروفایل کاربری
                                                        </Link>
                                                    </li>

                                                </DropdownItem>
                                                <DropdownItem divider/>
                                                <DropdownItem>

                                                    <li  onClick={handelExit} className={active === "exit" ? "nav-item  d-flex align-items-center activeHeaderMenu header-color position-relative" : "nav-item  d-flex align-items-center  second-color"}
                                                        >
                                                        <Link className="nav-link  " to="/exit">
                                                            خروج
                                                        </Link>
                                                    </li>

                                                </DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledDropdown>

                                        :"" :""

                            }







                        </Nav>

                    </Collapse>
                </Navbar>









                <div className={isMobile?"w-100":" w-100 pl-4 pr-4 mt-3"}  dir="rtl">
                    { props.children}
                </div>



            </div>

    );
};

