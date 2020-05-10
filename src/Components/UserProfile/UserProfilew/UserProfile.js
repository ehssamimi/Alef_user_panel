import React, { useState,useEffect } from 'react';
import MainHeader from "../../Main/Main-Header/MainHeader";
import RightMenu from "../RightMenu/RightMenu";
import HeaderNavigation from "../../Common/HeaderNavigation/HeaderNavigation";
import {Card, CardBody, Col, Form} from "reactstrap";
import profile from './../../../Common/img/Profile Picture.png'
import { TiPencil } from "react-icons/ti";

import {getprofile, LoadCourse} from "../../../Common/Const/ServerConnection";
import {seprateEachCourseData} from "../../functions/componentHelpFunction";
import {NotificationManager} from "react-notifications";
import Loader from "../../Common/Loader/Loader";
import HeaderTopWithRightMenu from "../../Common/Header-top/HeaderTopWithRightMenu/HeaderTopWithRightMenu";
import ModalCustomVideo from "../../Common/Modal/ModalCustom";
import VideoModalDemo from "../../Common/VideoPlayerComponents/VideoModal/VideoModalDemo";
import VideoModal from "../../Common/VideoPlayerComponents/VideoModal/VideoModal";
import {TextInput} from "../../Common/Forms/textInput/TextInput";

export default function UserProfile (props){
    const [isLoder, setisLoder] = useState(true);
    const[profileData,setprofileData]=useState({"name":null,"grade":"پایه یازدهم","class":"ریاضی و فیزیک","phoneNUmber":"09112561701","country":"مازندران","city":"ساری",});
    useEffect(() => {
        // Update the document title using the browser API

        async function  getData(){
            const{state,Description}= await getprofile();


            if (state===200 ) {
                // let{Top,Teachers,Lesson}=seprateEachCourseData(Description);
                //
                console.log(Description)
                setprofileData(Description)
                let prevItem=""
                if (localStorage.getItem("user_alef")) {
                    prevItem=localStorage.getItem("user_alef").split(",");
                }

                let ItemValue=[Description.personal_info.name,Description.profile.image_id,Description.education.grade]
                if (prevItem!==ItemValue){
                    localStorage.setItem("user_alef",ItemValue);
                }
                // let ItemValue={"image":Description.profile.image_id,"grade":Description.education.grade,"name":Description.personal_info.name };

                setisLoder(false);
            } else {
                 NotificationManager.error(state, Description);
            }

        }
        setisLoder(true);
        getData()

    },  [] );



        // function handleClick() {
        //     history.push("/home");
        // }

    return(
        //<HeaderTopWithRightMenu  {...props}>
            <div className="w-100">
                {
                    isLoder ? <div className='d-flex justify-content-center align-items-center'>
                            <div className='col-6'>
                                <Loader/>
                            </div>
                        </div> :

                        <div className="mt-5 col-12 ml-auto mr-auto">
                            <span className="txt-content-branch"> اطلاعات کاربری </span>

                            <div className="mt-4 FsFooterLogin">

                                <Card className="br20px box-shadow-custom  ">
                                    <CardBody className=" h-today position-relative  ">

                                        <div className="row  w-100 mt-4 justify-content-start" dir="rtl">
                                            <div className="edit-profile-icon d-flex second-color zIndex-3" >
                                                <a href="/user-info"   className="d-flex second-color">
                                                    <span>ویرایش پروفایل</span>
                                                </a>
                                                <span className="ml-2"><TiPencil/></span>
                                            </div>
                                            <div className="col-sm-12 col-md-4">
                                                <div className='profile-pic br-g br-r50  p-05'>
                                                    <img src={profileData.profile.image_id || profile} alt="profile" className="img-self-cover br-r50 br-y"/>
                                                </div>
                                            </div>

                                            <div className="col-sm-12 col-md-8 d-flex align-items-start justify-content-center flex-column p-0 ">
                                                <div className="fs-lesion">
                                                    {profileData.personal_info.name}
                                                </div>
                                                <div className="green-them">

                                                    {profileData.education.grade?profileData.education.grade:"---"}
                                                    {profileData.education.field?"  |  "+profileData.education.field:"---"}
                                                </div>
                                                <div className="green-them">
                                                    {profileData.personal_info.phone_number}
                                                    {
                                                        profileData.address.province?
                                                            <span>
                                                            <span className="pl-2 pr-2"> |</span> {profileData.address.province?profileData.address.province:"---"}
                                                        </span>:""

                                                    }
                                                    {
                                                        profileData.address.city?
                                                            <span>
                                                            <span className="pl-2 pr-2"> |</span>{profileData.address.city?profileData.address.city:"---"}
                                                        </span>:""

                                                    }

                                                </div>

                                            </div>

                                        </div>
                                        <div>
                                            <div className="rowInProfileUser mt-2">
                                                <span className="second-color">شماره ملی : </span>
                                                <span className="header-color ml-2">{profileData.personal_info.ssn?profileData.personal_info.ssn:"---"}  </span>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="rowInProfileUser mt-2 flex-column">
                                             <span className="second-color">
                                                          نام مدرسه  <span className="pl-2 pr-2"> |</span> نوع مدرسه:
                                                        </span>

                                                <span className="ml-2 mr-2 header-color ">
                                                          {profileData.education.school_name?profileData.education.school_name:"---"}   <span className="pl-2 pr-2"> |</span>  {profileData.education.school_type?profileData.education.school_type:"---"}
                                                        </span>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="rowInProfileUser mt-2">
                                                <span className="second-color">معدل سال تحصیلی قبل : </span>
                                                <span className="header-color ml-2">  {profileData.education.gpa?profileData.education.gpa:"---"}  </span>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="rowInProfileUser mt-2">
                                             <span className="second-color">
                                                         اطلاعات پدر یا مادر :                                                         </span>

                                                <span className="ml-2 mr-2 header-color ">
                                                        {profileData.parent.name?profileData.parent.name:"---"}  <span className="pl-2 pr-2"> |</span>{profileData.parent.phone_number?profileData.parent.phone_number:"---"}
                                                        </span>
                                            </div>
                                        </div>


                                    </CardBody>
                                </Card>

                            </div>



                        </div>
                }

            </div>



        //</HeaderTopWithRightMenu>

    )
};