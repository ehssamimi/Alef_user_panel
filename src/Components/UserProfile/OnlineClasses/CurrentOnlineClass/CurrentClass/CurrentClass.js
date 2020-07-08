import React, {useState, useEffect} from 'react';
import Chats from "../Chats/Chats";
import NewWebsocketPlayer from "../WebSocketVideoPlayer";
import {GetClassroom} from "../../../../../Common/Const/ServerConnection";
import IsLoaderComponent from "../../../../Common/Loader/IsLoaderComponent";

const CurrentClass = (props) => {
    const [Class, setClass] = useState("");
    const [IsLoader, setIsLoader] = useState(true);
    useEffect(async () => {
    async function getClassDetail() {
        console.log(props.match.params.id);
        let Classroom=  await GetClassroom(props.match.params.id)
        setClass(Classroom)
        if (Classroom!==""){
            setIsLoader(false)
            console.log(Classroom)
        }

        // props.getGroupId(Description.group_chat_id);
        // active: false
        // group_chat_id: "5f04ab34a95b3636c4fe1ae3"
        // information: {grade: "کنکوری (دوازدهم)", field: "ریاضی فیزیک", lesson_name: "ریاضی"}
        // live_urls: {key: "konkor riazi", websocket: "ws://live.kelidiha.com:8000/live/konkor riazi.flv", hls: "http://live.kelidiha.com:8000/live/konkor riazi/index.m3u8", rtmp: "rtmp://live.kelidiha.com/live/konkor riazi", dash: "http://live.kelidiha.com:8000/live/konkor riazi/index.mpd", …}
        // payment: {price: 50000}
     }
      await getClassDetail()


    }, [props]);

    return (
        <div>
            <IsLoaderComponent isLoader={IsLoader}>
                {
                    Class!==""? <div className="row m-0 ">
                        <div className="col-sm-12 col-md-8">
                            <NewWebsocketPlayer url={Class["live_urls"].websocket}/>
                        </div>
                        <div className="col-sm-12 col-md-4">

                            {/*<Chats gid={"5efa3bafcd52cdd9ea00ddc2"} classId={"includeamin"}/>*/}
                            <Chats gid={Class.group_chat_id} classId={props.match.params.id}/>
                        </div>
                    </div>:""
                }


            </IsLoaderComponent>



        </div>
    );
};

export default CurrentClass;