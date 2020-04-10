import React, { useState,useEffect } from 'react';
import RightMenu from "../RightMenu/RightMenu";
import MainHeader from "../../Main/Main-Header/MainHeader";
import HeaderNavigation from "../../Common/HeaderNavigation/HeaderNavigation";
import {CarouselMain} from "../../Common/Carousel/CarouselMain";
import ExtendedDiv from "../../Common/ExtendedDiv/ExtendedDiv";
import ax1 from "../../../Common/img/arno-smit-sKJ7zSylUao-unsplash.jpg";
import ax2 from "../../../Common/img/brooke-lark-pXEsx3kRuNc-unsplash.jpg";
import ax3 from "../../../Common/img/kwang-mathurosemontri-fY1ECB1RCd0-unsplash.jpg";
import Carousel from "react-multi-carousel";
import Card from "@material-ui/core/Card/Card";
import CardActionArea from "@material-ui/core/CardActionArea/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia/CardMedia";
import CardContent from "@material-ui/core/CardContent/CardContent";
import Button from "@material-ui/core/Button/Button";
const Video_src='https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8';


export default  function MyCourse(props) {
    const [files, setfile] = useState([{
        "title": 'حسابان',
        img: ax1,
        course: "ریاضی و فیزیک",
        "button":"مشاهده دوره"
    }, {"title": 'فیزیک', img: ax2, course: "نور و انعکاس", "class": "پایه نهم", "button":"مشاهده دوره"}]);
    const [Class, setClass] = useState([{
        "title": 'حسابان',
        img: ax1,
        course: "ریاضی و فیزیک",
        "button":"مشاهده درس"
    }, {"title": 'انگلیسی', img: ax2, course: "پایه نهم", "button":"مشاهده درس"}, {"title": 'انگلیسی', img: ax2, course: "پایه نهم", "button":"مشاهده درس"}]);
    const [session, setsession] = useState([{
        "title": 'مثلثات',
        img: ax1,
        course: "ریاضی و فیزیک",
        "button":"مشاهده فصل"
    } ]);

    return(
        <div className="w-100  ">
            <RightMenu>
                <MainHeader>
                    <div className="mt-5 col-12 ml-auto mr-auto">
                        <HeaderNavigation content={{"main":"اطلاعات کاربری","branch":"ویرایش پروفایل"}}/>
                        <div dir='ltr'>
                            <div className="w-100 mt-3 mb-5 justify-content-end ">
                                <CarouselMain files={files} header={"دوره های من " } type="Course" />
                            </div>
                            <div className="w-100 mt-13rem  justify-content-end ">
                                <CarouselMain files={Class} header={"دوره های من " } type="Course"  />
                            </div>
                            <div className="w-100 mt-13rem  justify-content-end ">
                                <CarouselMain files={session} header={"فصل من " } type="Course"  />
                            </div>
                        </div>
                    </div>
                </MainHeader>
            </RightMenu>
        </div>
    )
}