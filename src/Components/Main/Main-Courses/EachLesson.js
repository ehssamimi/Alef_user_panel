import React    from 'react';
import HeaderCourse from "../../Common/HeaderCourse/HeaderCourse";
import ExtendedDiv from "../../Common/ExtendedDiv/ExtendedDiv";
import {CarouselMain} from "../../Common/Carousel/CarouselMain";

const EachLesson = (props) => {
    let{toggle,files,name,cost,sellcost,teacher_V_img,teacher_V,Teache_time}=props
    // name: each.name,
    //     cost: each.price,
    //     sellcost: off_percent * each.price,
    //     teacher_name: item.name,
    //     Teache_time: item.total_videos_time,
    //     teacher_V_img: item.demo_video_cover,
    //     teacher_V: item.demo_video,
    //     chapter_count:each.chapter_count,
    //     items:[]

    return (
        <div className="w-100">
            <HeaderCourse toggle={toggle} header={name} sellcost={cost} cost={sellcost} videos={[teacher_V_img,teacher_V]} time={Teache_time}>
                <ExtendedDiv toggle={toggle}>
                    <CarouselMain files={files} header={"aaaa"} type="preModal"/>
                </ExtendedDiv>
            </HeaderCourse>
        </div>
    );
};

export default EachLesson;