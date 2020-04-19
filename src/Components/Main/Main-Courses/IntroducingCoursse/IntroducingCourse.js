
import React, {Component, useEffect, useState} from 'react';
import HeaderTop from "../../../Common/Header-top/HeaderTop";
import HeaderCourse from "../../../Common/HeaderCourse/HeaderCourse";
import CourseIntroducing from "./CourseIntroducing";




export default function IntroducingCourse (props){


    const [courses,setCourses]=useState({"data":[],off:[]});
    const [isLoder, setisLoder] = useState(true);

    useEffect(() => {
        const {match: {params}} =  props;
        console.log(params.id);
        // Update the document title using the browser API

        // async function  getData(){
        //     const{state,Description }= await loadMainCourse();
        //     let{data , page , off }=Description;
        //
        //     if (state===200 ) {
        //
        //
        //         let{off_percent,hourse}=getOff(off);
        //         setCourses({"data":data,off:off_percent})
        //
        //
        //         // let{Top,Teachers,Lesson}=seprateEachCourseData(Description);
        //         //
        //         // setData({...Data, Top,Teachers,Lesson})
        //
        //     } else {
        //         NotificationManager.error(state, Description);
        //     }
        //     setisLoder(false);
        // }
        // getData()

    }, courses );

    const {match: {params}} =  props;

    return (
        <HeaderTop {...props}>
            <div className="w-100">
                <CourseIntroducing id={params.id}/>
            </div>




        </HeaderTop>
    )
}



