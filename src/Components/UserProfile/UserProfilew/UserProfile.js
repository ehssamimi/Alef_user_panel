import React, { useState,useEffect } from 'react';
import MainHeader from "../../Main/Main-Header/MainHeader";
import RightMenu from "../RightMenu/RightMenu";
import HeaderNavigation from "../../Common/HeaderNavigation/HeaderNavigation";
import {Card, CardBody} from "reactstrap";
import profile from './../../../Common/img/Profile Picture.png'
import { TiPencil } from "react-icons/ti";
import {Link} from "react-router-dom";

export default function UserProfile (props){
    const[error,seterro]=useState({"name":""});
    const[profileData,setprofileData]=useState({"name":"احسان صمیمی راد ","grade":"پایه یازدهم","class":"ریاضی و فیزیک","phoneNUmber":"09112561701","country":"مازندران","city":"ساری",});


    return(
        <div className="w-100  ">
            <RightMenu>

                <MainHeader>
                    <div className="mt-5 col-12 ml-auto mr-auto">
                        <span className="txt-content-branch"> اطلاعات کاربری </span>

                        <div className="mt-4">

                            <Card className="br20px box-shadow-custom  ">
                                <CardBody className=" h-today position-relative ">


                                    <div className="row  w-100 mt-4 justify-content-start" dir="rtl">
                                        <div className="edit-profile-icon d-flex second-color">
                                            <Link to="/user-info" className="d-flex second-color">
                                                <span>ویرایش پروفایل</span>
                                                <span className="ml-2"><TiPencil/></span>

                                            </Link>
                                        </div>
                                        <div className="col-sm-12 col-md-4">
                                            <div className='profile-pic br-g br-r50  p-05'>
                                                <img src={profile} alt="profile" className="img-self-cover br-r50 br-y"/>
                                            </div>

                                        </div>
                                        <div className="col-sm-12 col-md-8 d-flex align-items-start justify-content-center flex-column p-0 ">
                                            <div className="fs-lesion">
                                                {profileData.name}
                                            </div>
                                            <div className="green-them">
                                                {profileData.grade}    {profileData.class?"  |  "+profileData.class:""}
                                            </div>
                                            <div className="green-them">
                                                {profileData.phoneNUmber}
                                                {
                                                    profileData.country?
                                                        <span>
                                                            <span className="pl-2 pr-2"> |</span> {profileData.country}
                                                        </span>:""

                                                }
                                                {
                                                    profileData.city?
                                                        <span>
                                                            <span className="pl-2 pr-2"> |</span> {profileData.city}
                                                        </span>:""

                                                }



                                            </div>

                                        </div>


                                    </div>
                                    <div>
                                        <div className="d-flex justify-content-start mt-2">
                                            <span className="second-color">شماره ملی : </span>
                                            <span className="header-color ml-2">2092204971</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="d-flex justify-content-start mt-2">
                                             <span className="second-color">
                                                          نام مدرسه  <span className="pl-2 pr-2"> |</span> نوع مدرسه:
                                                        </span>

                                            <span className="ml-2 mr-2 header-color ">
                                                          شهید بهشنی  <span className="pl-2 pr-2"> |</span>نیمه دولتی
                                                        </span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="d-flex justify-content-start mt-2">
                                            <span className="second-color">معدل سال تحصیلی قبل : </span>
                                            <span className="header-color ml-2"> 18/5 </span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="d-flex justify-content-start mt-2">
                                             <span className="second-color">
                                                         اطلاعات پدر یا مادر :                                                         </span>

                                            <span className="ml-2 mr-2 header-color ">
                                                          دلاور میرزایی  <span className="pl-2 pr-2"> |</span>09359328101
                                                        </span>
                                        </div>
                                    </div>


                                </CardBody>
                            </Card>

                        </div>



                    </div>
                </MainHeader>

            </RightMenu>

        </div>

    )
};