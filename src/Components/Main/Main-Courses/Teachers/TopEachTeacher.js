import React, { useState,useEffect } from 'react';
import {Card, CardBody, Collapse} from "reactstrap";
import {FaUserTie, FaRegPlayCircle, FaMinus, FaPlus} from "react-icons/fa";
import { GiStopwatch} from "react-icons/gi";
import CheckBoxCustom from "../../../Common/CheckBoxCustom/CheckBoxCustom";
import {formatNumber} from "../../../../Common/JS-Function/Js-common-function";


// User.HandelLogin()

export default function TopEachTeacher (props){
    // let{name,cost,sellcost,teacher_V_img,toggle, teacher_V,Teache_time,teacher_name}=props;
    let{name, demo_video_cover,toggle, demo_video,total_videos_time, }=props;

// image: "https://stream.kelidiha.com/public/teacher/5e96169a01d73623037c281d/2LHbjNin2LbbjA==/2KjYrti02YbYr9mH/image.png"
// total_videos_time: 54
// demo_video_cover: "https://stream.kelidiha.com/public/teacher/5e96169a01d73623037c281d/2LHbjNin2LbbjA==/2KjYrti02YbYr9mH/demo-video/image.png"
// demo_video: "https
    const [collapse, setcollapse,] = useState(false);

    const childrenWithProps = React.Children.map( props.children, child =>
        React.cloneElement(child, { id: props.id,isCheck:props.isCheck  })
    );



    return (

        <div className='mt-3 w-100  brt-s' dir='rtl' >

            <div className='d-flex justify-content-start align-items-center  mt-4 w-100' onClick={()=>{setcollapse(!collapse)}} >
                {
                    collapse?

                        <span className= ' border-Carousel p-2 mr-3' ><FaMinus/></span>

                        :
                        <span className= ' border-Carousel p-2 mr-3' > <FaPlus/></span>

                }

                <div className=" d-flex align-items-center">
                    <div className="mr-3 green-them">
                        <span className= ' ' ><FaUserTie/></span>
                        <span className= ' mr-2' > {name}  </span>

                    </div>
                    <div className="mr-3 green-them">
                        <span className= ' ' ><GiStopwatch/></span>
                        <span className= ' mr-2' > {total_videos_time} </span>

                    </div>
                    <div className="mr-3 green-them cursor-pointer" onClick={( )=>{ toggle('demo',[demo_video_cover,demo_video])}}>
                        <span className= ' '    ><FaRegPlayCircle/></span>
                        <span className= '  mr-2'    > مشاهده پیش نمایش  </span>
                    </div>
                </div>

                <div className='fs-lesion  d-flex ml-auto ' >
                    {/*<CheckBoxCustom/>*/}
                </div>



            </div>

            <Collapse isOpen={ collapse}>
                <div  className="pr-3 pl-3">
                    {childrenWithProps}

                    {/*{ props.children(props.itemIndex)}*/}

                </div>
            </Collapse>




        </div>
    )
};










