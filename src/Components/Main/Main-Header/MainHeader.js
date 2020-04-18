import React, {useContext} from 'react';
import {UserContext} from "./../../Common/Context/UserProvider";
import ax from "../../../Common/img/Profile Picture.png";
export default function MainHeader (props){

    const User=useContext(UserContext);
    console.log("is _LOGIN??");
    console.log(User.isLogIn);
    return (
            <div className="HomePage " dir="rtl">
                <div className="w-100 navbar-light bg-light">
                    <nav className="navbar navbar-expand-lg   ">
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                {
                                    User.isLogIn?
                                        <li className="nav-item   d-flex      ">
                                            <div className='profile-pic-in-top br-g br-r50  p-05'>
                                                <img src={ax} alt="profile" className="img-self-cover br-r50 br-y"/>
                                            </div>
                                            <div className="d-flex flex-column">
                                                <span>احسان صمیمی راد </span>
                                                <span>پایه یازدهم </span>
                                            </div>

                                            {/*<a className="nav-link header-color font-weight-bold" href="/login">ثبت نام / ورود </a>*/}
                                        </li>
                                        : <li className="nav-item br-over-g d-flex align-items-center br10px  ">
                                            <a className="nav-link header-color font-weight-bold" href="/login">ثبت نام / ورود </a>
                                        </li>

                                }





                                <li className="nav-item active d-flex align-items-center">
                                    <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item d-flex align-items-center">
                                    <a className="nav-link" href="/about">about</a>
                                </li>
                                <li className="nav-item d-flex align-items-center">
                                    <a className="nav-link" href="/courses">Coursers</a>
                                </li>
                                <li className="nav-item d-flex align-items-center">
                                    <a className="nav-link" href="/user-profile">User Info</a>
                                </li>


                            </ul>

                        </div>
                        <a className="navbar-brand" href="#">کلید</a>
                    </nav>
                </div>
                <div className=" w-100 pl-4 pr-4 mt-3">
                    { props.children}
                </div>





            </div>

    );
};

