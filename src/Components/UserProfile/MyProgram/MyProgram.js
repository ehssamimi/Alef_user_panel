import React, { useState,useEffect } from 'react';
import RightMenu from "../RightMenu/RightMenu";
import MainHeader from "../../Main/Main-Header/MainHeader";
import HeaderNavigation from "../../Common/HeaderNavigation/HeaderNavigation";
import DownloadPdf from "./subs/Download-pdf";
import TodayText from "./subs/TodayText";
import HeaderTopWithRightMenu from "../../Common/Header-top/HeaderTopWithRightMenu/HeaderTopWithRightMenu";
import {
    GetUserDropDown,
    GetUserProfile,
    GetUserschedule,
    RequestUserschedule
} from "../../../Common/Const/ServerConnection";
import {NotificationManager} from "react-notifications";
import RequestSchedule from "./subs/RequestSchedule";
import Loader from "../../Common/Loader/Loader";
import WatingForPdf from "./subs/WatingForPdf";
import UrlProvider from "../../Common/Context/UrlProvider";
import IsLoaderComponent from "../../Common/Loader/IsLoaderComponent";


export default  function MySchedule(props) {
    const [isLoder, setisLoder] = useState(true);
    const [message, setmessage] = useState(null);
    const [content, setContent] = useState({"grade":"پایه یازدهم","field":"ریاضی و فیزیک","button":"دانلود Pdf","url":""});
    const [Today, setToday] = useState({"name":"آلبرت انیشتین","text":"هنگامی که مردی برای یک ساعت کنار دختری زیبا می نشیند، زمان بسیار سریع می گذرد و ۱ ساعت تنها یک دقیقه به نظر می رسد. اما اگر او را ۱ دقیقه بر روی اجاق داغ قرار دهید، این میزان به اندازه تمام ساعت ها خواهد گذشت. به این موضوع نسبیت می گویند."});
    useEffect(  () => {




        getTodaySentence();
    },[]);

    async function getTodaySentence() {
        setisLoder(true);
        const {state, Description}=await GetUserschedule();
        if (state===200 ) {
            setisLoder(false);
            setContent(Description.schedule);
            setToday(Description.quote);
            setmessage(Description.message);

        } else {
            setisLoder(false);
            NotificationManager.error(state, Description);
            // setisLoder(false);
            // error_Notification(state,Description)
        }
        // console.log(UserDropDown)

    }

    const handelSubmitRequest=async ()=>{
        setisLoder(true);
        const {state, Description}=await RequestUserschedule();

        if (state===200 ) {
             NotificationManager.success("تبریک", "درخواست شما ارسال گردید");
        } else {
             NotificationManager.error(state, Description);
        }
        getTodaySentence();

    };


    return(


           //*<HeaderTopWithRightMenu  {...props}>*/}
                <div className="mt-3 col-12 ml-auto mr-auto">


                    {/*<HeaderNavigation content={{"main":"اطلاعات کاربری","branch":"برنامه مطالعاتی"}}/>*/}
                    <IsLoaderComponent isLoader={isLoder}>
                        <div className="w-100">
                            <div className="col-sm-12  col-md-7 col-lg-5 col-xl-4 mt-5 ">
                                {
                                    content !== null ?
                                        <DownloadPdf  {...content}/>
                                        :  message==="requested"?<WatingForPdf  />:<RequestSchedule handelSubmitRequest={handelSubmitRequest} />
                                }

                            </div>
                            <div className="col-12">
                                <TodayText {...Today}/>
                            </div>
                        </div>
                    </IsLoaderComponent>

                </div>


            // </HeaderTopWithRightMenu>


    )
}