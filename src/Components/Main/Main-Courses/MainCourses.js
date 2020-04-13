import React, {Component} from 'react';
import MainHeader from "../Main-Header/MainHeader";
import {FaAngleLeft} from "react-icons/fa";
import HeaderCourse from "./HeaderCourse/HeaderCourse";
 import CourseIntroducing from "./IntroducingCoursse/CourseIntroducing";


export default function MainCourses (props){

    return(
        <div className="w-100 d-flex justify-content-center">
            <MainHeader>
                <HeaderCourse main={"خانه"} sub={"پایه یازدهم"} branch={"ریاضی و فیزیک"}/>
                <div>
                    <CourseIntroducing/>
                 </div>

            </MainHeader>
        </div>
    )
}



