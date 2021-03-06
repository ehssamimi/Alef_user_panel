import React, { useEffect, useState} from 'react';
import './../../../Common/css/MyStyle2.css'
import './../../../Common/css/bootstrap2.min.css'
import './../../../Common/sass/Style.scss'
import HeaderCourse from "./HeaderCourse/HeaderCourse";
import CourseIntroducing from "./IntroducingCoursse/CourseIntroducing";
import HeaderTop from "../../Common/Header-top/HeaderTop";

export default function MainCourses (props){

    const {match: {params}} =  props;

    return (
        <HeaderTop {...props} isBuy={true}>


            <div className="w-100" dir="rtl">
                <CourseIntroducing id={params.id}/>
            </div>

        </HeaderTop>
    )
}



