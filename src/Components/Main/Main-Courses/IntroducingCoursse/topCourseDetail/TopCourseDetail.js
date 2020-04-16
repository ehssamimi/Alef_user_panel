import React, {useState, useEffect} from 'react';
import PlayVideo169 from "../../../../Common/VideoPlayerComponents/PlayVideo/PlayVideo";
import profile from "../../../../../Common/img/profile.jpg";
import CourseCarsBuy from "../CourseCardBuy/CourseCardBuy";
import {formatNumber} from "../../../../../Common/JS-Function/Js-common-function";
import ShowMoreDescription from "../ShowMoreDescription/ShowMoreDescription";

const TopCourseDetail = (props) => {
let{video_img,Video_src,course_img,grade,name,cost,sellCost,field,description}=props

    return (
        <div className="w-100 row  ">
            <div className="col-md-8 col-sm-12 br20px h-100 ">
                <PlayVideo169 video={Video_src} img={video_img}/>
            </div>
            <div className="col-md-4 col-sm-12 h-100 ">
                <CourseCarsBuy img={course_img} title={name} cost={formatNumber(sellCost-cost) + "ت"}
                               sellCost={formatNumber( sellCost) + "ت"} course={field} button={"خرید دروه"}
                               class={"h-min-img-card"}/>
            </div>
            <ShowMoreDescription header={name}
                                 desc={ description}/>

        </div>
    );
};

export default TopCourseDetail;