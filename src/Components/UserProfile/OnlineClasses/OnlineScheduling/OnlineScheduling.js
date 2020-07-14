import React, {useState, useEffect} from 'react';
import StudioInTable from "./StudioInTable/StudioInTable";


import ClassRoomListRow from "./ClassRoomListRow/ClassRoomListRow";
import {warning_Notification} from "../../../functions/componentHelpFunction";
import NotificationManagerss from "../../../Common/react-notifications/NotificationManager";
import MobileStudioTable from "./StudioInTable/MobileStudioTable/MobileStudioTable";

const OnlineScheduling = (props) => {
    // const [count, setCount] = useState(1);
    const [list, setLists] = useState([]);
    useEffect(() => {
        if ( props.CurrentClass===true){
            console.log("warning")
            NotificationManagerss.success(
                "state",
                "در حال حاظر کلاسی برای شما ثبت نشده ",
                3000,
                null,
                null,
                "warning"
            );

            // warning_Notification("","در حال حاظر کلاسی برای شما ثبت نشده ")
        }        // Update the document title using the browser API
        // return //for componentDidMount
    }, [props]);

    return (
        <div className="row m-0">

            {/*<div className="col-sm-12  d-sm-none  ">*/}
            {/*    <ClassRoomListRow list={list}/>*/}
            {/*</div>*/}

            <div className=" col-sm-12  p-0 ">
                <div className="w-100    d-sm-none">
                    <MobileStudioTable />
                </div>
                <div className="w-100    d-none d-sm-block">
                    <StudioInTable GetClassRoomList={(value) => {setLists(value)}}  />
                </div>

             </div>
        </div>
    );
};

export default OnlineScheduling;