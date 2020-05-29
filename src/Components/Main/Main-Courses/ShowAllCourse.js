import React, { useEffect, useState} from 'react';
 import HeaderTop from "../../Common/Header-top/HeaderTop";
import {CarouselMain} from "../../Common/Carousel/CarouselMain";
 import { loadMainCourse} from "../../../Common/Const/ServerConnection";
import {getOff} from "../../functions/componentHelpFunction";
import {NotificationManager} from "react-notifications";
import Loader from "../../Common/Loader/Loader";
import ModalCustomVideo from "../../Common/Modal/ModalCustom";
export default function ShowAllCourse (props){

    const [courses,setCourses]=useState({"data":[],off:[]});
    const [isLoder, setisLoder] = useState(true);
    const [isOpenModal, setIsOpenModal] = useState(false);

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
                isLoder ? <div className='d-flex justify-content-center align-items-center'>
                        <div className='col-6'>
                            <Loader/>
                        </div>
                    </div> :
                    <div className="w-100" dir="ltr">
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


            }


            <ModalCustomVideo isOpen={isOpenModal} toggle={() => setIsOpenModal(!isOpenModal)}>
                <div className=" d-flex flex-column justify-content-center  align-items-center FsHeaderLogin1 text-left p-4 " style={{minHeight:"250px"}}>
                    <p>سلام دانش آموز کلیدی</p>

                    ما شبانه روز این دوماه رو دویدیم
                    حجم کار خیلی بالا بود و هست
                    ممکنه امروز اطلاعات سایت رو تکمیل در اختیار نداشته باشی‌
                    فیلم ها در حال اپلود هستن
                    تو همین چند ساعت آینده ذره ذره در اختیارت خواهند بود

                    <p><span>🌻</span>  از بابت تاخیر عذرخواهیم</p>

                </div>
                <div className="w-100 text-center  d-flex justify-content-center">
                    <button className="btn green-background FssubmitLogin col-3 m-3 text-white br20px" onClick={() => setIsOpenModal(!isOpenModal)}>ورود</button>
                </div>



            </ModalCustomVideo>


        </HeaderTop>
    )
}



