import React, {useState, useEffect} from 'react';
import {GetCurrentUserClassList} from "../../../../Common/Const/ServerConnection";
import IsLoaderComponent from "../../../Common/Loader/IsLoaderComponent";
import ClassRoomCurrentRow from "./ClassRoomCurrentRow/ClassRoomCurrentRow";
import OnlineScheduling from "../OnlineScheduling/OnlineScheduling";

const CurrentOnlineClass = (props) => {
    const [ClassList, setClassList] = useState([]);
    const [isLoader, setisLoader] = useState(true);
    useEffect(  () => {
        async function getClassLists() {
            let data=await GetCurrentUserClassList();
            if (data!==""){
                setClassList(data.current)
                console.log(data)
            }
            setisLoader(false)
        }
          getClassLists();


        // Update the document title using the browser API
        // return //for componentDidMount
    }, []);
    console.log()

    return (
        <IsLoaderComponent isLoader={isLoader }>
            {
                ClassList.length===0?<OnlineScheduling CurrentClass={true}/>: ClassList.map((todo, index) => <ClassRoomCurrentRow {...todo} key={index} />


                )
            }

        </IsLoaderComponent>

    );
};

export default CurrentOnlineClass;