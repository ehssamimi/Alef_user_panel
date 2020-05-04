import React, {useState, useEffect} from 'react';
import HeaderTopWithRightMenu from "../../Common/Header-top/HeaderTopWithRightMenu/HeaderTopWithRightMenu";
import MyCourse from "../MyCourse/MyCourse";
import MySchedule from "../MyProgram/MyProgram";
import UserProfile from "../UserProfilew/UserProfile";
import UserInfo from "../UserInfo/UserInfo";
import Exit from "../Exit/Exit";

const MainUser = (props) => {
    const {match: {params}} = props;
    const [count, setCount] = useState(1);
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
    });
    console.log("match");
    console.log(props.match.path);

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