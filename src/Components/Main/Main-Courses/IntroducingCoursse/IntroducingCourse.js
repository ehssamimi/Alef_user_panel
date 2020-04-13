import React, {useState, useEffect} from 'react';

const Video_src='https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8';
import profile from './../../../../Common/img/profile.jpg'

import "react-multi-carousel/lib/styles.css";
import CourseCarsBuy from "./CourseCardBuy/CourseCardBuy";
import CourseCarsBuy from "./CourseCardBuy/CourseCardBuy";
import VideoPlayerMain from "../../../Common/VideoPlayerComponents/VideoPlayerMain";

const IntroducingCourse = (props) => {
    const [count, setCount] = useState(1);
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
        <div className="w-100">
            <div className="w-100 row ">
                <div className="col-md-9 col-sm-12">
                    <VideoPlayerMain {...videoJsOptions} />
                    <p>توضیح پایه یازدهم </p>
                </div>
                <div className="col-md-3 col-sm-12">
                    <CourseCarsBuy img={profile} title={"عنوان"} course={"course"} grade={"پایه"} button={"خرید دروه"} classes={"h-min-12em"}  />
                </div>

            </div>

        </div>
    );
};

export default IntroducingCourse;