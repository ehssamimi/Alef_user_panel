import React, {useState, useEffect} from 'react';
import Chats from "../Chats/Chats";
import NewWebsocketPlayer from "../VideoComponentsStreams/WebSocketVideoPlayer";
import {GetClassroom} from "../../../../../Common/Const/ServerConnection";
import IsLoaderComponent from "../../../../Common/Loader/IsLoaderComponent";
import WebrtcPlayer from "../VideoComponentsStreams/WEBRTCPlayer";
import HeaderTop from "../../../../Common/Header-top/HeaderTop";
import $ from 'jquery'
import ReactPlayerConf from "../VideoComponentsStreams/ReactPlayerConf";

const CurrentClass = (props) => {
    const [Class, setClass] = useState("");
    const [IsLoader, setIsLoader] = useState(true);
    const [VideoType, setVideoType] = useState(true);

    function windowsDimention(){
        const Width = window.outerWidth;

        if (Width <= 768) {

            var link = $('#playVideo');

            var offset = link.offset();
            var top = offset.top;

            let Height=$(window).height() - top - link.height()
            $('#chat').height( Height-(0.13*Height));


        } else {
            $('#chat').height("75vh");
        }
    }



    useEffect(  () => {

        async function getClassDetail() {


        console.log(props.match.params.id);
        let Classroom=  await GetClassroom(props.match.params.id)



        setClass(Classroom)
        if (Classroom!==""){
            setIsLoader(false)
            console.log(Classroom)
        }
            windowsDimention();
            window.addEventListener("resize",windowsDimention)
        return ()=>{setClass("")}
     }
        getClassDetail()

        return ()=>window.removeEventListener("resize",windowsDimention)
    }, [props,IsLoader]);

    return (
        <div>
            <HeaderTop {...props} isBuy={true}>

                <IsLoaderComponent isLoader={IsLoader}>
                    {
                        Class !== "" ? <div className="row m-0 ">
                            <div className="col-sm-12    col-lg-8 p-0 pr-lg-1">
                                {
                                    VideoType ?
                                        // <ReactPlayerConf url={Class["live_urls"].http_flv}   changeUrl={() => setVideoType(true)}/>
                                        <WebrtcPlayer url={Class["live_urls"].web_rtc}
                                                              changeUrl={() => setVideoType(false)}/>

                                                              :
                                        <NewWebsocketPlayer url={Class["live_urls"].http_flv}   changeUrl={() => setVideoType(true)}/>
                                        // <ReactPlayerConf url={Class["live_urls"].http_flv}   changeUrl={() => setVideoType(true)}/>
                                }
                                {/*<ReactPlayerConf url={Class["live_urls"].http_flv}   changeUrl={() => setVideoType(true)}/>*/}


                                {/*<NewWebsocketPlayer url={Class["live_urls"].websocket}/>*/}
                                {/*<NewWebsocketPlayer url={Class["live_urls"].http_flv}/>*/}

                            </div>
                            <div className="col-sm-12  col-lg-4 p-0 pl-lg-5">

                                {/*<Chats gid={"5efa3bafcd52cdd9ea00ddc2"} classId={"includeamin"}/>*/}
                                <Chats gid={Class.group_chat_id} classId={props.match.params.id}/>
                            </div>
                        </div> : ""
                    }


                </IsLoaderComponent>


            </HeaderTop>
        </div>
    );
};

export default CurrentClass;