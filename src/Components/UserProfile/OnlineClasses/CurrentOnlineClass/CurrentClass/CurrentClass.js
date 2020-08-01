import React, {useState, useEffect} from 'react';
import Chats from "../Chats/Chats";
import NewWebsocketPlayer from "../VideoComponentsStreams/WebSocketVideoPlayer";
import {GetClassroom} from "../../../../../Common/Const/ServerConnection";
import IsLoaderComponent from "../../../../Common/Loader/IsLoaderComponent";
import WebrtcPlayer from "../VideoComponentsStreams/WEBRTCPlayer";
import $ from 'jquery'
 import UploadFileDesktop from "../Chats/UploadFileDesktop/UploadFileDesktop";
// import {success_Notification} from "../../../../functions/componentHelpFunction";
// import HeaderTop from "../../../../Common/Header-top/HeaderTop";
// import ReactPlayerConf from "../VideoComponentsStreams/ReactPlayerConf";


const CurrentClass = (props) => {
    const [Class, setClass] = useState("");
    // const [newFile, setnewFile] = useState("");
    const [IsLoader, setIsLoader] = useState(true);
    const [VideoType, setVideoType] = useState(true);
    // content: {class_id: "aminjamal"}
    // type: "NT-LC-NF"


    function windowsDimention(){
        const Width = window.outerWidth;

        var link = $('#playVideo');
        // console.log("link-link-link-link")
        // console.log(link)
        if (link.offset()!==undefined){
            var offset = link.offset();
            var top = offset.top;
            let Height=$(window).height() - top - link.height()
            // console.log(Height)

            if (Width <= 768) {

                // $("#uploadFileDesktop").addClass("d-none")
                $("#uploadFileMobile").height(Height-(0.13*Height))
                $("#chat-tab2").removeClass("d-none")
                $('#chat').height( Height-(0.13*Height));
                $('#chat2').height( Height-(0.13*Height));

            } else {

                $('#chat').height("75vh");
                 // $("#uploadFileDesktop").removeClass("d-none").css({"height":Height-(0.13*Height),overflowY:"auto"})

                $("#chat-tab2").addClass("d-none")
                $("#chat-tab1").click();


            }
        }

    }



    useEffect(  () => {



        async function getClassDetail() {


        // console.log(props.match.params.id);
        let Classroom=  await GetClassroom(props.match.params.id)



        setClass(Classroom)
        if (Classroom!==""){
            setIsLoader(false)
            // console.log(Classroom)
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
            {/*<HeaderTop {...props} isBuy={true}>*/}

                <IsLoaderComponent isLoader={IsLoader}>
                    {
                        Class !== "" ? <div className="row m-0 ">
                            <div className="col-sm-12    col-lg-8  pl-lg-video">
                                <div className="w-100"  id="playVideo">
                                    {
                                        VideoType ?
                                            // <ReactPlayerConf url={Class["live_urls"].http_flv}   changeUrl={() => setVideoType(true)}/>
                                            <WebrtcPlayer url={Class["live_urls"].web_rtc}
                                                          changeUrl={() => setVideoType(false)}/>

                                            :
                                            <NewWebsocketPlayer url={Class["live_urls"].http_flv}   changeUrl={() => setVideoType(true)}/>
                                    }
                                </div>
                                {/*pl-lg-video   position-absolute*/}
                                <div className="col-12  p-0  " style={{bottom:0,right:0}}>
                                    <UploadFileDesktop {... props } class_id={props.match.params.id}/>
                                </div>







                            </div>
                            <div className="col-sm-12 col-lg-4 p-0 d-flex justify-content-center">
                                <div className="w-100    ">

                                    {/*<Chats gid={"5efa3bafcd52cdd9ea00ddc2"} classId={"includeamin"}/>*/}
                                    <Chats gid={Class.group_chat_id} classId={props.match.params.id}/>
                                </div>
                            </div>

                        </div> : ""
                    }


                </IsLoaderComponent>


            {/*</HeaderTop>*/}
        </div>
    );
};

export default CurrentClass;