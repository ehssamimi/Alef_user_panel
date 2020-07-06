import React from 'react';
import HeaderTopWithRightMenu from "../../Common/Header-top/HeaderTopWithRightMenu/HeaderTopWithRightMenu";
import MyCourse from "../MyCourse/MyCourse";
import MySchedule from "../MyProgram/MyProgram";
import UserProfile from "../UserProfilew/UserProfile";
import UserInfo from "../UserInfo/UserInfo";
import Exit from "../Exit/Exit";
import OnlineScheduling from "../OnlineClasses/OnlineScheduling/OnlineScheduling";
import CurrentOnlineClass from "../OnlineClasses/CurrentOnlineClass/CurrentOnlineClass";

const MainUser = (props) => {




    return (
        <div className="w-100  ">
            <HeaderTopWithRightMenu  {...props}>
                <div className="w-100">
                    {
                        props.match.path==="/my-course"?<MyCourse {...props}/>:""
                     }
                     {
                        props.match.path==="/my-schedule"?<MySchedule {...props}/>:""
                     }
                     {
                        props.match.path==="/user-profile"?<UserProfile {...props}/>:""
                     }

                     {
                        props.match.path==="/online-scheduler"?<OnlineScheduling {...props}/>:""
                     }
                     {
                        props.match.path==="/current-online-class"?<CurrentOnlineClass {...props}/>:""
                     }
                     {
                        props.match.path==="/user-info"?<UserInfo {...props}/>:""
                     }
                     {
                        props.match.path==="/exit"?<Exit {...props}/>:""
                     }
                </div>




            </HeaderTopWithRightMenu>
        </div>
    );
};

export default MainUser;