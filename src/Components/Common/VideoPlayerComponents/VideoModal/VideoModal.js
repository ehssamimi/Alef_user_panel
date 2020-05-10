import React, {useState, useEffect} from 'react';
import VideoPlayerMain from "../VideoPlayerMain";
import PlayVideo169 from "../PlayVideo/PlayVideo";
import {FaRegDotCircle, FaCheck,FaAngleRight,FaAngleLeft} from "react-icons/fa";
import {GiStopwatch} from "react-icons/gi";
import {FiDownload} from "react-icons/fi";
import ShowMoreDescription from "../../../Main/Main-Courses/IntroducingCoursse/ShowMoreDescription/ShowMoreDescription";

const VideoModal = (props) => {
    const [index, setIndex] = useState(props.file.index);


    useEffect((props) => {
         // Update the document title using the browser API
     });
    let{ items}=props.file;
    const IndexLenght=props.file.items.length-1;






    return (
        <div className="w-100 h-min-20em" dir="rtl">
          <div style={{height:"60%"}} className="brVideo ">

              {
                  items.map((each, row) => <div>
                          {
                              index === row ?
                                  <PlayVideo169 video={each.video} img={each.video_cover}/> : ""
                          }
                      </div>
                  )}



          </div>
            <div style={{height:"40%"}}>
                <div className="col-12 pl-3 pr-0 pt-2 pb-2    ">
                    <div className=" d-flex align-items-center">
                        <div className="mr-3 green-them">
                            <span className= ' ' ><GiStopwatch/></span>
                            <span className= ' mr-2 ml-1' >{items[index].time_to_done} </span>
                        </div>
                        <div className="mr-3 green-them">
                            {
                                items[index].downloadable_content !== null ?
                                    <div className="d-flex ">
                                        <span className=' '><FiDownload/></span>
                                        <span className=' mr-2'>
                                        <a href={items[index].downloadable_content} target="_blank" download
                                           className="second-color ml-1 ">دانلود جزوه</a>
                                            </span>
                                    </div>

                                    : <span   className="second-color ml-1 ">جزوه ای برای این درس ثبت نشده است </span>

                            }








                        </div>
                         <div className="mr-3 second-color">
                            {
                                 items[index].is_seen?<div className="d-flex">
                                        <span className= ' '    ><FaCheck/></span>
                                        <span className= '  mr-2 ml-1'    > شما این درس را قبلا مشاهده کرده اید </span>
                                    </div>:
                                    <div className="ml-auto">
                                        <span className= ' '    ><FaRegDotCircle/></span>
                                        <span className= '  mr-2 ml-1'    > شما این درس را قبلا مشاهده نکرده اید </span>
                                    </div>
                            }
                        </div>
                    </div>
                    <div className="mt-4">

                        <ShowMoreDescription header={items[index].name} class="pl-3 pr-3"
                                             desc={items[index].description}/>

                    </div>


                    <div className="d-flex second-color pl-3 pr-3 mt-4 mb-3">
                        <div className={["cursor-pointer",index===IndexLenght?"d-none":"d-block"].join(" ")}  onClick={()=>{  setIndex(index+1) }} >
                            <span className= ' ' ><FaAngleRight/></span>
                            <span className= ' mr-2' > جلسه بعدی </span>
                        </div>
                        <div  className={["ml-auto cursor-pointer",index===0?"d-none":"d-block"].join(" ")} onClick={()=>{  setIndex(index-1)}} >
                            <span className= ' mr-2 ' > جلسه قبلی </span>
                            <span className= ' ' ><FaAngleLeft/></span>
                        </div>
                    </div>


                </div>


            </div>
        </div>
    );
};

export default VideoModal;