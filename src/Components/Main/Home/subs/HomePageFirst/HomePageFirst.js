import React, {useState, useEffect, useRef} from 'react';
import Button from "@material-ui/core/Button/Button";
import Play from "../../../../../Common/img/play_on_video.png";
import lock from "../../../../../Common/img/lock_on_video.png";
import video_cover from '../../../../../Common/img/kwang-mathurosemontri-fY1ECB1RCd0-unsplash.jpg'
import PlayVideo169 from "../../../../Common/VideoPlayerComponents/PlayVideo/PlayVideo";
import {Power4, TweenMax} from "gsap/TweenMax";
import { FaAngleRight } from "react-icons/fa";


const demo_video= "https://stream.kelidiha.com/public/course/5ea9daef03284a4a0f84a238/stream/index.m3u8";
const demo_video_cover= "https://stream.kelidiha.com/public/course/5ea9daef03284a4a0f84a238/demo-video/image.png";
const HomePageFirst = (props) => {

    const [menuOpen, setMenuOpen] = useState(false);


    useEffect(() => {

        const $el = document.getElementById(`parent`);
        const duration = 2;
        // const from = { opacity: 0};
        // TweenMax.to($el, duration, from);
        // setTimeout(() => {
        //     $el.remove();
        // }, 2000)

        if (menuOpen) {
            TweenMax.to($el, duration, {  width:"100%",
                borderRadius:"10px"});
        } else {
            TweenMax.to($el, duration, {  width:"45%",
                borderRadius:"50%"});
        }
    }, [menuOpen]);

    // const toogleExpand=()=>{
    //     const $el = document.getElementById(`parent`);
    //     const duration = 2;
    //     // const from = { opacity: 0};
    //     // TweenMax.to($el, duration, from);
    //     // setTimeout(() => {
    //     //     $el.remove();
    //     // }, 2000)
    //
    //
    //         TweenMax.to($el, duration, {  width:"100%",
    //             borderRadius:"10px"});
    //
    //         // TweenMax.to($el, duration, {  width:"45%",
    //         //     borderRadius:"50%"});
    //
    // };



    return (
        <div className="w-100  h-each-page d-flex align-items-center ">
            <div className="w-100 d-flex h-100 align-items-center">
                <div className="col-6 h-60   d-flex   flex-column justify-content-between">
                    <div>
                        <h1 className="FsHeader-HomePage ">آموزشگاه آنلاین کلید</h1>
                        <h3 className="FsHeaderLogin1 second-color">از مدرسه تا دانشگاه</h3>
                    </div>

                    <p className="FssubmitLogin">گروه آموزشی کلید اولین موسسه خصوصی در ایران است که آموزش مجازی خود را در سال ۱۳۹۹ با هدف آموزش رسانی برای همه دانش‌آموزان سراسر ایران آغار کرده است. با بهره بردن از اساتید با تجربه و نخبه‌ی خود کیفیت تضمین شده ای را ارائه خواهد کرد</p>
                   <div className="w-100">
                       <Button className="btn green-background text-white col-8   br10px fontFamily-Sans h-input-s FssubmitLogin sendButton-shadow">همین حالا ثبت نام کنید </Button>

                   </div>

                </div>
                <div className="  divRight mt-Video" onClick={() => setMenuOpen(true)}>
                    <div style={{width:"45%",overflow:"hidden",borderRadius:"50%",height:"100%"}} className="  position-relative ml-auto"   id={"parent"}  >
                        {
                            menuOpen?<span className="text-white backToCircule"  style={{zIndex:99}} onClick={() => setMenuOpen(!menuOpen)}> <FaAngleRight/>برگشت </span>:""
                            // menuOpen?<span className="text-black backToCircule" onClick={()=>{console.log("FaAngleRight")}}> <FaAngleRight/>برگشت </span>:""
                        }

                        {
                            menuOpen?   <PlayVideo169 video={demo_video} img={demo_video_cover} aspect={ "16:9" }/>:""

                        }     {
                            !menuOpen?    <PlayVideo169 video={demo_video} img={demo_video_cover} aspect={ "1:1"}/>:""

                        }



                        {/*<PlayVideo169 video={demo_video} img={demo_video_cover}*/}
                                      {/*aspect={menuOpen?"16:9":"1:1"}*/}
                                      {/*// aspect={"1:1"}*/}
                        {/*/>*/}

                        {/*<img src={demo_video_cover} alt="main img" className="img-self-cover     cursor-pointer  "/>*/}
                        {/*<img src={lock} alt="lock" className="img-cover-preLoader"/>*/}

                    </div>
                </div>
                </div>



        </div>
    );
};

export default HomePageFirst;