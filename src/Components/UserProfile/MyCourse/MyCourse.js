import React, { useState,useEffect } from 'react';
import RightMenu from "../RightMenu/RightMenu";
import MainHeader from "../../Main/Main-Header/MainHeader";
import HeaderNavigation from "../../Common/HeaderNavigation/HeaderNavigation";
import {CarouselMain} from "../../Common/Carousel/CarouselMain";
import ExtendedDiv from "../../Common/ExtendedDiv/ExtendedDiv";
import ax1 from "../../../Common/img/arno-smit-sKJ7zSylUao-unsplash.jpg";
import ax2 from "../../../Common/img/brooke-lark-pXEsx3kRuNc-unsplash.jpg";
import ax3 from "../../../Common/img/kwang-mathurosemontri-fY1ECB1RCd0-unsplash.jpg";
const Video_src='https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8';

export default  function MyCourse(props) {
    const [files, setfile] = useState([{
        "title": 'حسابان',
        img: ax1,
        course: "ریاضی و فیزیک",
        "class": "پایه دهم"
    }, {"title": 'فیزیک', img: ax2, course: "نور و انعکاس", "class": "پایه نهم"},


    ]);
    return(
        <div className="w-100  ">
            <RightMenu>
                <MainHeader>
                    <div className="mt-5 col-12 ml-auto mr-auto">
                        <HeaderNavigation content={{"main":"اطلاعات کاربری","branch":"ویرایش پروفایل"}}/>
                        <div dir='ltr'>
                            <div className="w-100 mt-3 ">
                                <CarouselMain files={files} header={"دوره های من " }/>
                            </div>

                        </div>



                    </div>
                </MainHeader>
            </RightMenu>
        </div>
    )
}