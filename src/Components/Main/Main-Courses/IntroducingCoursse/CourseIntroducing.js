import React, {useState, useEffect} from 'react';
import VideoPlayerMain from "../../../Common/VideoPlayerComponents/VideoPlayerMain";
import profile from "../../../../Common/img/profile.jpg";
import CourseCarsBuy from "./CourseCardBuy/CourseCardBuy";
import ShowMoreDescription from "./ShowMoreDescription/ShowMoreDescription";
import TeacherInRow from "../Teachers/TeacheInRow/TeacherInRow";
import TeachersInCourseDetails from "./TeachersInCourseDetails/TeachersInCourseDetails";
import {formatNumber} from "../../../../Common/JS-Function/Js-common-function";
import ExtendedDiv from "../../../Common/ExtendedDiv/ExtendedDiv";
import {CarouselMain} from "../../../Common/Carousel/CarouselMain";
import HeaderCourse from "../../../Common/HeaderCourse/HeaderCourse";
import ax1 from "../../../../Common/img/arno-smit-sKJ7zSylUao-unsplash.jpg";
import ax2 from "../../../../Common/img/brooke-lark-pXEsx3kRuNc-unsplash.jpg";
import ax3 from "../../../../Common/img/kwang-mathurosemontri-fY1ECB1RCd0-unsplash.jpg";
const Video_src='https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8';

const CourseIntroducing = (props) => {
    const [count, setCount] = useState(1);
    const [teachers, setteachers] = useState([  {"img":profile,"name":"کیهان یعقوبیان","course":"پرورشی"},{"img":profile,"name":"سهند میرزایی ","course":"طراحی"}, {"img":profile,"name":"احسان تقوی ","course":"فیزیک"}, {"img":profile,"name":"احسان صمیمی راد ","course":"ریاضی"}]);
    const [files,steFiles]=useState([  {"src":Video_src,img:ax1,type:"play"}, {"src":Video_src,img:ax2,type:"lock"}, {"src":Video_src,img:ax3,type:"lock"}]);
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
    });
    const videoJsOptions = {
        autoplay: false,
        fluid: true,
        playbackRates: [0.5, 1, 1.25, 1.5, 2],
        // width: 720,
        // height: 300,
        // poster:props.poster,
        className:"br20px",
        poster:profile,
        enableLowInitialPlaylist:true,
        aspectRatio: '16:9',
        controls: true,
        nativeControlsForTouch:true,
        sources: [
            {
                // src: props.src,
                src: Video_src,
                type:"application/x-mpegURL"
                // type: 'video/m3u8',
            },
        ],
    };



    return (
        <div className={ "w-100"}>
            <div className="w-100 row  ">
                <div className="col-md-8 col-sm-12 br20px h-100 ">
                    <VideoPlayerMain {...videoJsOptions} />

                </div>
                <div className="col-md-4 col-sm-12 h-100 ">
                    <CourseCarsBuy img={profile} title={"پایه یازدهم"} cost={formatNumber(2300) + "ت"}
                                   sellCost={formatNumber(2000) + "ت"} course={"ریاضی و فیزیک"} button={"خرید دروه"}
                                   class={"h-min-img-card"}/>
                </div>
            </div>
            <div>
                <ShowMoreDescription header={"معرفی پایه یازدهم"}
                                     desc={" لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.   "}/>
             </div>

          <TeachersInCourseDetails header="لیست معلم ها " teachers={teachers}/>
            <div className="w-100">
                <HeaderCourse header="ریاضیات" sellcost="2000" cost="2300">
                    <ExtendedDiv>
                        <CarouselMain files={files} header={"aaaa"} type="preModal"/>
                    </ExtendedDiv>
                </HeaderCourse>
            </div>


        </div>
    );
};

export default CourseIntroducing;