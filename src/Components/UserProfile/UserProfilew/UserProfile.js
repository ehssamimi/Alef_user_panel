import React, { useState,useEffect } from 'react';
import MainHeader from "../../Main/Main-Header/MainHeader";
import RightMenu from "../RightMenu/RightMenu";
import HeaderNavigation from "../../Common/HeaderNavigation/HeaderNavigation";
import {Card, CardBody} from "reactstrap";
import profile from './../../../Common/img/Profile Picture.png'
import { TiPencil } from "react-icons/ti";
import {Link} from "react-router-dom";
import {getprofile, LoadCourse} from "../../../Common/Const/ServerConnection";
import {seprateEachCourseData} from "../../functions/componentHelpFunction";
import {NotificationManager} from "react-notifications";
import Loader from "../../Common/Loader/Loader";

export default function UserProfile (props){
    const[error,seterro]=useState({"name":""});
    const [isLoder, setisLoder] = useState(true);
    const[profileData,setprofileData]=useState({"name":null,"grade":"پایه یازدهم","class":"ریاضی و فیزیک","phoneNUmber":"09112561701","country":"مازندران","city":"ساری",});
    useEffect(() => {
        // Update the document title using the browser API

        async function  getData(){
            const{state,Description}= await getprofile();
            console.log(Description)

            if (state===200 ) {
                // let{Top,Teachers,Lesson}=seprateEachCourseData(Description);
                //
                setprofileData(Description)

            } else {
                NotificationManager.error(state, Description);
            }
            setisLoder(false);
        }
        getData()

    }, profileData );





    return(
        <div className="w-100  ">
            <RightMenu>

                <MainHeader>
                    {
                        isLoder ? <div className='d-flex justify-content-center align-items-center'>
                            <div className='col-6'>
                                <Loader/>
                            </div>
                        </div> :

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
                                                        <img src={profileData.profile.image_id} alt="profile" className="img-self-cover br-r50 br-y"/>
                                                    </div>
                                                </div>

                                                <div className="col-sm-12 col-md-8 d-flex align-items-start justify-content-center flex-column p-0 ">
                                                    <div className="fs-lesion">
                                                        {profileData.personal_info.name}
                                                    </div>
                                                    <div className="green-them">
                                                        {profileData.education.grade}    {profileData.education.field?"  |  "+profileData.education.field:""}
                                                    </div>
                                                    <div className="green-them">
                                                        {profileData.personal_info.phone_number}
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
                                                    <span className="header-color ml-2">profileData.personal_info.ssn</span>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="d-flex justify-content-start mt-2">
                                             <span className="second-color">
                                                          نام مدرسه  <span className="pl-2 pr-2"> |</span> نوع مدرسه:
                                                        </span>

                                                    <span className="ml-2 mr-2 header-color ">
                                                          profileData.education.school_name  <span className="pl-2 pr-2"> |</span>profileData.education.school_type
                                                        </span>
                                                </div>
                                            </div>
                                            {/*// profile: {image_id: "https://5e7df4522174ce0011232b00.liara.space/user-…2087e83741839003316af92faee643045b03270f1e1c516c6"}*/}
                                            {/*// personal_info: {phone_number: "09119518867", name: "javid", ssn: null}*/}
                                            {/*// email: {email: null, is_active: false}*/}
                                            {/*// education: {grade: "فارغ التحصیل", field: "هنر", gpa: null, school_name: null, school_type: "دولتی"}*/}
                                            {/*// parent: {code: null, name: null, phone_number: null}*/}

                                            <div>
                                                <div className="d-flex justify-content-start mt-2">
                                                    <span className="second-color">معدل سال تحصیلی قبل : </span>
                                                    <span className="header-color ml-2"> profileData.education.gpa </span>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="d-flex justify-content-start mt-2">
                                             <span className="second-color">
                                                         اطلاعات پدر یا مادر :                                                         </span>

                                                    <span className="ml-2 mr-2 header-color ">
                                                          profileData.parent.name  <span className="pl-2 pr-2"> |</span>profileData.parent.phone_number
                                                        </span>
                                                </div>
                                            </div>


                                        </CardBody>
                                    </Card>

                                </div>



                            </div>
                    }




                </MainHeader>

            </RightMenu>

        </div>

    )
};