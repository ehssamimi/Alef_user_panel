import React, {useState, useEffect} from 'react';
import {GetCurrentUserClassList} from "../../../../Common/Const/ServerConnection";
import IsLoaderComponent from "../../../Common/Loader/IsLoaderComponent";
import ClassRoomCurrentRow from "./ClassRoomCurrentRow/ClassRoomCurrentRow";

const CurrentOnlineClass = (props) => {
    const [ClassList, setClassList] = useState([]);
    const [isLoader, setisLoader] = useState(true);
    useEffect(async () => {
        async function getClassLists() {
            let data=await GetCurrentUserClassList();
            if (data!==""){
                setClassList(data.current)
                // current: Array(1)
                // 0: {start: 21, end: 22, class_id: "5f04ab3349da4b51a8891baf", class_type: "public", class_information: {…}}
                // length: 1
                // __proto__: Array(0)
                // has_overlap: false
                // class_id: "5f04ab3349da4b51a8891baf"
                // class_information: {grade: "کنکوری (دوازدهم)", field: "ریاضی فیزیک", lesson_name: "ریاضی"}
                // class_type: "public"
                // end: 22
                // start: 21
                // __proto__: Object
                // length: 1
                // __proto__: Array(0)
                // has_overlap: false

                console.log(data)
            }
        }
        await getClassLists();
        setisLoader(false)

        // Update the document title using the browser API
        // return //for componentDidMount
    }, []);

    return (
        <IsLoaderComponent isLoader={isLoader && ClassList.length===0}>
            {
                ClassList.map((todo, index) => <ClassRoomCurrentRow {...todo} key={index} />


                )
            }

        </IsLoaderComponent>

    );
};

export default CurrentOnlineClass;