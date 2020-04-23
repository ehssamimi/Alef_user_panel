import React, {useContext} from 'react';
import HeaderCourse from "../../Common/HeaderCourse/HeaderCourse";
import ExtendedDiv from "../../Common/ExtendedDiv/ExtendedDiv";
import {CarouselMain} from "../../Common/Carousel/CarouselMain";
import TopEachTeacher from "./Teachers/TopEachTeacher";
import TopLessons from "./TopLessons/TopLessons";
// import {BuyContext} from "../../Common/Context/BuyProvider";
// let Buy=useContext(BuyContext);
const EachLesson = (props) => {
    let{toggle ,off,course}=props;

    return (
        <div className="w-100 mb-5">
            <TopLessons  {...props}  >
                {
                    props.teachers.map((teacher, lessonIndex) =>
                        <TopEachTeacher  {...teacher} toggle={props.toggle} key={lessonIndex} >

                            {teacher.chapters.map((each, index) =>
                                <ExtendedDiv key={index} toggle={toggle} {...each} isCheck={props.isCheck}
                                             buyData={{
                                                 "lesson_name": props.name,
                                                 "course_name":  course.course_name,
                                                 course_id:course.course_id,
                                                 "teacher_name": teacher.name,"grade": course.grade,
                                                 "chapter_name": each.name,"field":course.field,'type':"chapter",
                                                 price: each.price,off:off
                                             }}
                                             videos={[each.demo_video_cover, each.demo_video]} off={off} index={index}>

                                    <CarouselMain files={each.items} type="preModal" toggle={toggle}/>

                                </ExtendedDiv>
                            )}
                        </TopEachTeacher>
                    )
                }


            </TopLessons>

            {/*<TopEachTeacher  {...props}>*/}
            {/*/!*<HeaderCourse    {...props}   >*!/*/}

                {/*{chapters.map((each,index)=>*/}
                    {/*<ExtendedDiv key={index} toggle={toggle} {...each} videos={[each.demo_video_cover,each.demo_video]} off={off} index={index}>*/}
                        {/*<CarouselMain files={each.items} header={"aaaa"} type="preModal" toggle={toggle}/>*/}
                    {/*</ExtendedDiv>*/}
                {/*)}*/}
            {/*</TopEachTeacher>*/}


            {/*</HeaderCourse>*/}
        </div>
    );
};

export default EachLesson;

// lessons: Array(1)
// 0:
// name: "ریاضی"
// image: "https://stream.kelidiha.com/public/lesson/5e96169a01d73623037c281d/2LHbjNin2LbbjA==/image.png"
// price: 120000
// chapter_count: 10
// teachers: Array(1)
// 0:
// name: "بخشنده"
// image: "https://stream.kelidiha.com/public/teacher/5e96169a01d73623037c281d/2LHbjNin2LbbjA==/2KjYrti02YbYr9mH/image.png"
// total_videos_time: 54
// demo_video_cover: "https://stream.kelidiha.com/public/teacher/5e96169a01d73623037c281d/2LHbjNin2LbbjA==/2KjYrti02YbYr9mH/demo-video/image.png"
// demo_video: "https://stream.kelidiha.com/public/teachers/5e96169a01d73623037c281d/2LHbjNin2LbbjA==/2KjYrti02YbYr9mH/stream/index.m3u8"