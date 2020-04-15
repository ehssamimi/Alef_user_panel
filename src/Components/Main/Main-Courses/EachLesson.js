import React    from 'react';
import HeaderCourse from "../../Common/HeaderCourse/HeaderCourse";
import ExtendedDiv from "../../Common/ExtendedDiv/ExtendedDiv";
import {CarouselMain} from "../../Common/Carousel/CarouselMain";

const EachLesson = (props) => {
    let{toggle, teacher_V_img,teacher_V ,chapters,off}=props;

    return (
        <div className="w-100">
            <HeaderCourse      {...props} >

                {chapters.map((each,index)=>
                    <ExtendedDiv key={index} toggle={toggle} {...each} videos={[each.demo_video_cover,each.demo_video]} off={off} index={index}>
                        <CarouselMain files={each.items} header={"aaaa"} type="preModal" toggle={toggle}/>
                    </ExtendedDiv>

                )}


            </HeaderCourse>
        </div>
    );
};

export default EachLesson;

// chapters: Array(1)
// 0:
// image: "https://stream.kelidiha.com/public/chapter/5e96169a01d73623037c281d/2LHbjNin2LbbjA==/2KjYrti02YbYr9mH/image.png"
// name: "انتگرال"
// total_video_times: 4
// demo_video_cover: "https://stream.kelidiha.com/public/chapter/5e96169a01d73623037c281d/2LHbjNin2LbbjA==/2KjYrti02YbYr9mH/demo-video/image.png"
// demo_video: "https://stream.kelidiha.com/public/chapter/5e96169a01d73623037c281d/2LHbjNin2LbbjA==/2KjYrti02YbYr9mH/2KfZhtiq2q-Ysdin2YQ=/stream/index.m3u8"
// price: 36000
// items: Array(1)
// 0:
// video: "https://stream.kelidiha.com/item/video/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiNWU4MmE0MjJkYzVkODdjZWFkM2JhYjQyIiwib3RoZXJzIjp7fSwic2VlZCI6OTE4NjN9.sXUiLnLmHQq1NsXJIMB4TGhgcnEcZMoMG-N1yaLatHw/5e96169a01d73623037c281d/2LHbjNin2LbbjA==/2KjYrti02YbYr9mH/2KfZhtiq2q-Ysdin2YQ=/2YXZgdin2YfbjNmFINin2YjZhNuM2Yc=/index.m3u8"
// video_cover: "https://stream.kelidiha.com/public/item/5e96169a01d73623037c281d/2LHbjNin2LbbjA==/2KjYrti02YbYr9mH/2KfZhtiq2q-Ysdin2YQ=/2YXZgdin2YfbjNmFINin2YjZhNuM2Yc=/video_cover/image.png"
// audio: "https://stream.kelidiha.com/item/item_audio/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiNWU4MmE0MjJkYzVkODdjZWFkM2JhYjQyIiwib3RoZXJzIjp7fSwic2VlZCI6OTE4NjN9.sXUiLnLmHQq1NsXJIMB4TGhgcnEcZMoMG-N1yaLatHw/5e96169a01d73623037c281d/2LHbjNin2LbbjA==/2KjYrti02YbYr9mH/2KfZhtiq2q-Ysdin2YQ=/2YXZgdin2YfbjNmFINin2YjZhNuM2Yc=/audio.mp3"
// description: "string"
// name: "مفاهیم اولیه"
// downloadable_content: "https://stream.kelidiha.com/item/item_downloadable_content/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiNWU4MmE0MjJkYzVkODdjZWFkM2JhYjQyIiwib3RoZXJzIjp7fSwic2VlZCI6OTE4NjN9.sXUiLnLmHQq1NsXJIMB4TGhgcnEcZMoMG-N1yaLatHw/5e96169a01d73623037c281d/2LHbjNin2LbbjA==/2KjYrti02YbYr9mH/2KfZhtiq2q-Ysdin2YQ=/2YXZgdin2YfbjNmFINin2YjZhNuM2Yc=/pdf.pdf"
// time_to_done: 3
// is_free: false
// is_locked: false
// is_seen: false