
import StudioInTable from "./StudioInTable/StudioInTable";

import React, {useState, useEffect} from 'react';
import ClassRoomListRow from "./ClassRoomListRow/ClassRoomListRow";

const OnlineScheduling = (props) => {
    // const [count, setCount] = useState(1);
    const [list, setLists] = useState([]);
    useEffect(() => {
        // Update the document title using the browser API
        // return //for componentDidMount
    }, []);

    return (
        <div className="row m-0">

            <div className="col-sm-12 col-md-3 p-0">
                <ClassRoomListRow list={list}/>
            </div>

            <div className=" col-sm-12 col-md-9">
                <StudioInTable GetClassRoomList={(value) => {setLists(value)}}/>
            </div>
        </div>
    );
};

export default OnlineScheduling;