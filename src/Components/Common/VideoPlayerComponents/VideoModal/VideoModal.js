import React, {useState, useEffect} from 'react';
import VideoPlayerMain from "../VideoPlayerMain";
import PlayVideo169 from "../PlayVideo/PlayVideo";
import profile from "../../../../Common/img/profile.jpg";
import CheckBoxCustom from "../../CheckBoxCustom/CheckBoxCustom";
import {FaRegDotCircle, FaCheck,FaAngleRight,FaAngleLeft} from "react-icons/fa";
import {GiStopwatch} from "react-icons/gi";
import {FiDownload} from "react-icons/fi";
import ShowMoreDescription from "../../../Main/Main-Courses/IntroducingCoursse/ShowMoreDescription/ShowMoreDescription";

const VideoModal = (props) => {
    // const [count, setCount] = useState(1);
    // useEffect(() => {
    //     // Update the document title using the browser API
    //     document.title = `You clicked ${count} times`;
    // });

    return (
        <div className="w-100 h-min-20em" dir="rtl">
          <div style={{height:"60%"}}>
              <PlayVideo169 video={props.video} img={props.img}/>
          </div>
            <div style={{height:"40%"}}>
                <div className="col-12 pl-3 pr-0 pt-2 pb-2    ">
                    <div className=" d-flex align-items-center">
                        <div className="mr-3 green-them">
                            <span className= ' ' ><GiStopwatch/></span>
                            <span className= ' mr-2' >4 ساعت و 20 دقبقه </span>
                        </div>
                        <div className="mr-3 green-them">
                            <span className= ' ' ><FiDownload/></span>
                            <span className= ' mr-2' > دانلود جزوه </span>

                        </div>
                        <div className="mr-3 second-color">
                            {
                                props.see?<div className="d-flex">
                                        <span className= ' '    ><FaCheck/></span>
                                        <span className= '  mr-2'    > شما این درس را قبلا مشاهده کرده اید </span>
                                    </div>:
                                    <div className="ml-auto">
                                        <span className= ' '    ><FaRegDotCircle/></span>
                                        <span className= '  mr-2'    > شما این درس را قبلا مشاهده نکرده اید </span>
                                    </div>
                            }
                        </div>
                    </div>
                    <div className="mt-4">

                        <ShowMoreDescription header={"مثلثات"} class="pl-3 pr-3"
                                             desc={" لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.   "}/>

                    </div>


                    <div className="d-flex second-color pl-3 pr-3 mt-4 mb-3">
                        <div>
                            <span className= ' ' ><FaAngleRight/></span>
                            <span className= ' mr-2' > جلسه قبلی </span>
                        </div>
                        <div  className="ml-auto">
                            <span className= ' mr-2' > جلسه بعدی </span>
                            <span className= ' ' ><FaAngleLeft/></span>
                        </div>
                    </div>


                </div>


            </div>
        </div>
    );
};

export default VideoModal;