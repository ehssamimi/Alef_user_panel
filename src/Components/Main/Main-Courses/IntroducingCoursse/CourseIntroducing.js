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
import {  NotificationManager} from "react-notifications";
import {LoadCourse} from "../../../../Common/Const/ServerConnection";
import PlayVideo169 from "../../../Common/VideoPlayerComponents/PlayVideo/PlayVideo";
import ModalCustomVideo from "../../../Common/Modal/ModalCustom";
import VideoModal from "../../../Common/VideoPlayerComponents/VideoModal/VideoModal";
import {seprateEachCourseData} from "../../../functions/componentHelpFunction";
import TopCourseDetail from "./topCourseDetail/TopCourseDetail";
import {CardBody} from "reactstrap";
import Loader from "../../../Common/Loader/Loader";
import EachLesson from "../EachLesson";
import VideoModalDemo from "../../../Common/VideoPlayerComponents/VideoModal/VideoModalDemo";
const Video_src='https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8';

const CourseIntroducing = (props) => {

    const [teachers, setteachers] = useState([  {"img":profile,"name":"کیهان یعقوبیان","course":"پرورشی"},{"img":profile,"name":"سهند میرزایی ","course":"طراحی"}, {"img":profile,"name":"احسان تقوی ","course":"فیزیک"}, {"img":profile,"name":"احسان صمیمی راد ","course":"ریاضی"}]);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [isLoder, setisLoder] = useState(true);
    const [totalCheck, setTotalCheck] = useState(false);

    const [Data, setData] = useState({Top:{},Teachers:[],Lesson:[],off:0});
    const[videos,setVideos]=useState({type:"",video:[]});
    // const [Data, setData] = useState({top:{},main:{}});




    const toggle = (type,value) => {

        setIsOpenModal(!isOpenModal)
        if (type==="main"){
            console.log(value)
            setVideos({type,video:value});
        } else {
            setVideos({type,video:value});

        }
    };

    useEffect(() => {
        // Update the document title using the browser API
        // console.log("props.id")
        // console.log(props.id)
        async function  getData(){
           // const{state,Description}= await LoadCourse("5e96169a01d73623037c281d");
           const{state,Description}= await LoadCourse(props.id);

            if (state===200 ) {
                let{Top,Teachers,Lesson,off}=seprateEachCourseData(Description);

                setData({...Data, Top,Teachers,Lesson,off})


            } else {
                NotificationManager.error(state, Description);
            }
            setisLoder(false);
        }
        getData()

    }, [] );


     return (
         <div className={"w-100"}>
        {
            isLoder ? <div className='d-flex justify-content-center align-items-center'>
                    <div className='col-6'>
                        <Loader/>
                    </div>
                </div> :

                <div className="w-100">
                    <TopCourseDetail {...Data.Top}   />


                    <TeachersInCourseDetails header="اساتید این دوره" teachers={Data.Teachers}/>

                    {
                        Data.Lesson.map((each, index) => <EachLesson key={index} off={Data.off} {...each}
                            toggle={toggle}
                            course={{course_id: props.id,
                            course_name: Data.Top.name,
                            "field": Data.Top.field,
                            "grade": Data.Top.grade,
                            'type': "lesson" ,
                            price: each.price, off:Data.off,lesson_name:each.name
                        }}  id={index}/>)

                    }


                    <ModalCustomVideo isOpen={isOpenModal} toggle={toggle}>
                        {
                            videos.type==="demo"?<VideoModalDemo  video={videos.video[1]} img={videos.video[0]}/>:""
                        }
                        {
                            videos.type==="main"?<VideoModal file={videos.video} />:""
                        }

                    </ModalCustomVideo>
                </div>
        }

</div>
    );
};

export default CourseIntroducing;