import React, { useState,useEffect } from 'react';
import RightMenu from "../RightMenu/RightMenu";
import MainHeader from "../../Main/Main-Header/MainHeader";
import HeaderNavigation from "../../Common/HeaderNavigation/HeaderNavigation";
import DownloadPdf from "./subs/Download-pdf";
import TodayText from "./subs/TodayText";
export default  function MySchedule(props) {
    const [content, setContent] = useState({"header":"پایه یازدهم","class":"ریاضی و فیزیک","button":"دانلود Pdf"});
    const [Today, setToday] = useState({"header":"آلبرت انیشتین","content":"هنگامی که مردی برای یک ساعت کنار دختری زیبا می نشیند، زمان بسیار سریع می گذرد و ۱ ساعت تنها یک دقیقه به نظر می رسد. اما اگر او را ۱ دقیقه بر روی اجاق داغ قرار دهید، این میزان به اندازه تمام ساعت ها خواهد گذشت. به این موضوع نسبیت می گویند."});
    return(
        <div className="w-100  ">
            <RightMenu>
                <MainHeader>
                    <div className="mt-3 col-12 ml-auto mr-auto">
                        <HeaderNavigation content={{"main":"اطلاعات کاربری","branch":"برنامه مطالعاتی"}}/>
                        <div className="col-sm-12 col-md-4 mt-5">
                            <DownloadPdf  {...content}/>
                        </div>
                        <div className="col-12">
                            <TodayText {...Today}/>
                        </div>

                    </div>
                </MainHeader>
            </RightMenu>


        </div>
    )
}