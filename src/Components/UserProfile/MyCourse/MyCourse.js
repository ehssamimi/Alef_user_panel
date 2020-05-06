import React, { useState,useEffect } from 'react';
import RightMenu from "../RightMenu/RightMenu";
import MainHeader from "../../Main/Main-Header/MainHeader";
import HeaderNavigation from "../../Common/HeaderNavigation/HeaderNavigation";
import {CarouselMain} from "../../Common/Carousel/CarouselMain";
import Loader from "../../Common/Loader/Loader";
import {GetMyCourse} from "../../../Common/Const/ServerConnection";
import {NotificationManager} from "react-notifications";
import HeaderTopWithRightMenu from "../../Common/Header-top/HeaderTopWithRightMenu/HeaderTopWithRightMenu";
import UrlProvider from "../../Common/Context/UrlProvider";
import ModalCustomVideo from "../../Common/Modal/ModalCustom";
import { CardBody} from "reactstrap";
import RestricSignUp from "../../Common/RestricSignUp/RestricSignUp";


export default  function MyCourse(props) {
    const local=localStorage.getItem("token");
    const [Courses, setCourses] = useState([]);
    const [Lessons, setLessons] = useState([]);
    const [chapters, setChapters] = useState([]);
    const [isLoder, setisLoder] = useState(true);
    const [isOpen,setIsOpen]= useState(true);
    useEffect(  () => {


        async function getMyCourse() {
            const {state, Description}=await GetMyCourse();
            let{courses,lessons,chapters}=Description;
            console.log(Description);
            setisLoder(false);
            if (state===200 ) {
                setChapters(chapters);
                setLessons(lessons);
                setCourses(courses);

            } else {

                NotificationManager.success(state, Description);

            }


        }

        setisLoder(true);
        getMyCourse();
    },[]);

    return(
        <div className="w-100  ">

            {/*<HeaderTopWithRightMenu  {...props}>*/}
                     {
                        isLoder ?   // *******checking for submit form or get category Option is then loader start then loader close**********
                            <div className='d-flex justify-content-center align-items-center'>
                                <div className='col-6'>
                                    <Loader/>
                                </div>
                            </div> :
                            <div className="mt-5 col-12 ml-auto mr-auto">
                                 <div dir='ltr'>
                                    <div className="w-100 mt-3 mb-5 justify-content-end ">
                                        {
                                            Courses.length>0?  <CarouselMain files={Courses} header={"دوره های من "} type="Course" kind="course"/>:""
                                        }
                                    </div>

                                    <div className="w-100 mt-13rem  justify-content-end ">
                                        {
                                            Lessons.length>0?<CarouselMain files={Lessons} header={"درس های من "} type="Course" kind={"lesson"}/>:""
                                        }
                                    </div>
                                    <div className="w-100 mt-13rem  justify-content-end ">
                                        {
                                            chapters.length>0?<CarouselMain files={chapters} header={"فصل های من "} type="Course" kind={"chapter"}/>:""
                                        }
                                     </div>

                                     {
                                         Courses.length===0&& Lessons.length===0&&chapters.length===0?
                                             // box-shadow-custom
                                             <CardBody className="w-100 shadow ">
                                                 <div className=" d-flex flex-column justify-content-center  align-items-center FssubmitLogin text-left p-4 " style={{minHeight:"250px"}}>
                                                   دروه ای در حال حاظر برای شما فعال نیست
                                                 </div>
                                             </CardBody>
                                       :""
                                     }
                                </div>
                            </div>
                    }
            {/*</HeaderTopWithRightMenu>*/}
            <RestricSignUp isOpen={isOpen} toggle={()=>setIsOpen(!isOpen)} text={local}/>

        </div>
    )
}