import React, { useEffect, useState} from 'react';
import MainHeader from "../Main-Header/MainHeader";
import {FaAngleLeft} from "react-icons/fa";
import HeaderCourse from "./HeaderCourse/HeaderCourse";
 import CourseIntroducing from "./IntroducingCoursse/CourseIntroducing";
import HeaderTop from "../../Common/Header-top/HeaderTop";
import {CarouselMain} from "../../Common/Carousel/CarouselMain";
import ExtendedDiv from "../../Common/ExtendedDiv/ExtendedDiv";
import CourseCarsBuy from "./IntroducingCoursse/CourseCardBuy/CourseCardBuy";
import ax1 from "../../../Common/img/arno-smit-sKJ7zSylUao-unsplash.jpg";
import {formatNumber} from "../../../Common/JS-Function/Js-common-function";
import { loadMainCourse} from "../../../Common/Const/ServerConnection";
import {getOff, seprateEachCourseData} from "../../functions/componentHelpFunction";
import {NotificationManager} from "react-notifications";
import Loader from "../../Common/Loader/Loader";

export default function ShowAllCourse (props){
    // const[file,setFile]=useState([{img:ax1,title:"پایه هفتم",cost:200,sellCost:2100,button:"خرید دروه","class":"h-min-img-card"},{img:ax1,title:"پایه هفتم",cost:200,sellCost:2100,button:"خرید دروه","class":"h-min-img-card"},{img:ax1,title:"پایه هفتم",cost:200,sellCost:2100,button:"خرید دروه","class":"h-min-img-card"},{img:ax1,title:"پایه هفتم",cost:200,sellCost:2100,button:"خرید دروه","class":"h-min-img-card"}])
    let{name,grade,field,price,image,off,id, }=props;
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
    // console.log("courses");
    // console.log(courses);

    // grade: "پایه های ششم تا نهم"
    // courses: Array(1)
    // 0:
    // name: "شیمی"
    // grade: "هفتم"
    // field: "عمومی"
    // price: "108000.0"
    // image: "https://stream.kelidiha.com/public/course/2LTbjNmF24w=/image.png"
    // __proto__: Object
    return (
        <HeaderTop {...props}>
            <HeaderCourse main={"خانه"} sub={"پایه یازدهم"} branch={"ریاضی و فیزیک"}/>
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

            {/*<div>*/}
                {/*<CourseIntroducing id="5e96169a01d73623037c281d"/>*/}
            {/*</div>*/}

        </HeaderTop>
    )
}



