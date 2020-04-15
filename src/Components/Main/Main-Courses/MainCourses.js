import React, {Component,useState} from 'react';
import MainHeader from "../Main-Header/MainHeader";
import {FaAngleLeft} from "react-icons/fa";
import HeaderCourse from "./HeaderCourse/HeaderCourse";
 import CourseIntroducing from "./IntroducingCoursse/CourseIntroducing";
import HeaderTop from "../../Common/Header-top/HeaderTop";
import {CarouselMain} from "../../Common/Carousel/CarouselMain";
import ExtendedDiv from "../../Common/ExtendedDiv/ExtendedDiv";
import CourseCarsBuy from "./IntroducingCoursse/CourseCardBuy/CourseCardBuy";
import ax1 from "../../../Common/img/arno-smit-sKJ7zSylUao-unsplash.jpg";
import {formatNumber} from "../../../Common/JS-Function/Js-common-function";

export default function MainCourses (props){
    const[file,setFile]=useState([{img:ax1,title:"پایه هفتم",cost:200,sellCost:2100,button:"خرید دروه","class":"h-min-img-card"},{img:ax1,title:"پایه هفتم",cost:200,sellCost:2100,button:"خرید دروه","class":"h-min-img-card"},{img:ax1,title:"پایه هفتم",cost:200,sellCost:2100,button:"خرید دروه","class":"h-min-img-card"},{img:ax1,title:"پایه هفتم",cost:200,sellCost:2100,button:"خرید دروه","class":"h-min-img-card"}])

    return (
        <HeaderTop>
            <HeaderCourse main={"خانه"} sub={"پایه یازدهم"} branch={"ریاضی و فیزیک"}/>
            {/*<div className="w-100">*/}
                {/*<h3 className="header-color">متوسطه اول</h3>*/}
                {/*<div className="row">*/}
                    {/*{*/}
                        {/*file.map((item, index) => <div className="col-4 mt-5" key={index}><CourseCarsBuy {...item} /></div>*/}
                        {/*)*/}
                    {/*}*/}
                {/*</div>*/}

            {/*</div>*/}

            <div>
                <CourseIntroducing/>
            </div>

        </HeaderTop>
    )
}



