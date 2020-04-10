import React, { useState,useEffect } from 'react';
import MainHeader from "../../Main/Main-Header/MainHeader";


import RightMenu from "../RightMenu/RightMenu";
import HeaderNavigation from "../../Common/HeaderNavigation/HeaderNavigation";
import {Card, CardBody} from "reactstrap";
import profile from './../../../Common/img/Profile Picture.png'

export default function UserProfile (props){
    const[error,seterro]=useState({"name":""});
    const[profileData,setprofileData]=useState({"name":"احسان صمیمی راد ","grade":"پایه یازدهم","class":"ریاضی و فیزیک","phoneNUmber":"09112561701","country":"مازندران","city":"ساری",});


    return(
        <div className="w-100  ">
            <RightMenu>

                <MainHeader>
                    <div className="mt-5 col-12 ml-auto mr-auto">
                        <HeaderNavigation content={{"main":"اطلاعات کاربری","branch":"ویرایش پروفایل"}}/>
                        <div className="mt-4">

                            <Card className="br20px box-shadow-custom  ">
                                <CardBody className=" h-today ">

                                    <div className="row  w-100 mt-4 justify-content-start" dir="rtl">
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
                                        <div className="d-flex justify-content-start">
                                            <span>شماره ملی:</span>
                                            <span>2092204971</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="d-flex justify-content-start">
                                             <span>
                                                          نام مدرسه  <span className="pl-2 pr-2"> |</span> نوع مدرسه:
                                                        </span>

                                            <span className="ml-2 mr-2">
                                                          شهید بهشنی  <span className="pl-2 pr-2"> |</span>نیمه دولتی
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