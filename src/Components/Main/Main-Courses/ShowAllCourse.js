import React, { useEffect, useState} from 'react';
 import HeaderTop from "../../Common/Header-top/HeaderTop";
import {CarouselMain} from "../../Common/Carousel/CarouselMain";
 import {loadMainCourse, ModalList} from "../../../Common/Const/ServerConnection";
import {error_Notification, getOff} from "../../functions/componentHelpFunction";
import {NotificationManager} from "react-notifications";
import Loader from "../../Common/Loader/Loader";
import ModalCustomVideo from "../../Common/Modal/ModalCustom";
import IsLoaderComponent from "../../Common/Loader/IsLoaderComponent";
import ModalBiginner from "../../Common/Modal/ModalBiginner/ModalBiginner";
export default function ShowAllCourse (props){

    const [courses,setCourses]=useState({"data":[],off:[]});
    const [isLoder, setisLoder] = useState(true);



    useEffect(() => {
        // Update the document title using the browser API

        async function  getData(){
            const{state,Description }= await loadMainCourse();
            let{data , page , off }=Description;

            if (state===200 ) {


                let{off_percent,hourse}=getOff(off);
                setCourses({"data":data,off:off_percent})


                // let{Top,Teachers,Lesson}=seprateEachCourseData(Description);
                //
                // setData({...Data, Top,Teachers,Lesson})

            } else {
                NotificationManager.error(state, Description);
            }
            setisLoder(false);
        }
        getData()




    }, [ ] );

    return (
        <HeaderTop {...props} isBuy={true}>

            {

                    <IsLoaderComponent isLoader={isLoder}>
                        <div className="w-100 pl-4 pr-4 ml-r-auto" dir="ltr">
                            {courses.data.map((item, index) =>
                                <div  key={index} className={["row w-100 ", index===0?"mt-4":"mt-14"].join(" ") }>
                                    <CarouselMain type={"courseMain"}
                                        // files={file}
                                                  files={item.courses}
                                                  off={courses.off}
                                                  sub_text={"مشاهده اطلاعات "}
                                                  header={item.grade}/>
                                </div>

                            )
                            }
                        </div>
                    </IsLoaderComponent >



            }
            <ModalBiginner PopUpType={"course_page"}/>





        </HeaderTop>
    )
}



