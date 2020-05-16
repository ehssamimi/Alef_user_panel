import React from 'react';
import PlayVideo169 from "../../../../Common/VideoPlayerComponents/PlayVideo/PlayVideo";
 import CourseCarsBuy from "../CourseCardBuy/CourseCardBuy";
import {formatNumber} from "../../../../../Common/JS-Function/Js-common-function";
import ShowMoreDescription from "../ShowMoreDescription/ShowMoreDescription";
import {FiDownload} from "react-icons/fi";
import HeaderCourse from "../../HeaderCourse/HeaderCourse";

const TopCourseDetail = (props) => {
let{video_img,Video_src,course_img,grade,name,cost,sellCost,field,description,schedule,off,price}=props;

    return (
        <div className="w-100 row   ">
            <div className="w-100 row wrapper-login">
                <HeaderCourse main={"دوره ها "} sub={name} branch={grade} mainLink={"/courses"}/>
                <div className="col-md-8 col-sm-12 br20px   p-0">
                    <PlayVideo169 video={Video_src} img={video_img}/>

                    <div className="w-100 row m-0">
                        <h3 className="header-color FsHeader-courseDetail">{ name}</h3>

                        <div className="ml-auto green-them FsFooterLogin d-flex align-items-center">
                            <span className=' mr-2 '>
                                <a href={schedule} target="_blank" download className="second-color ml-1 ">دانلود برنامه این دوره </a>
                            </span>
                            <span className= 'green-them ' ><FiDownload/></span>
                        </div>

                    </div>

                </div>
                <div className="col-md-4 col-sm-12     ">
                    <CourseCarsBuy img={course_img} title={name} cost={formatNumber(sellCost-cost) + "ت"}
                                   sellCost={formatNumber( sellCost) + "ت"} course={field} button={"خرید دروه"} price={price}
                                   class={"h-min-img-card"} off={off}/>
                </div>
            </div>

            <ShowMoreDescription header={name} class="FssubmitLogin"
                                 desc={ description}/>

        </div>
    );
};

export default TopCourseDetail;