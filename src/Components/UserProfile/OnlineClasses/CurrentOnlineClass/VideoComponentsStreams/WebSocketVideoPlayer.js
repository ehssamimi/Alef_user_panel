import React, {useState, useEffect} from 'react';
// import {ReactFlvPlayer} from 'react-flv-player';
import ReactPlayer from 'react-player';
import poster from "../../../../../Common/img/default_pic-169 Cropped.png";
// import RowShowShowColEdit from "../../../../Common/RowShowShowColEdit/RowShowShowColEdit";

import {FaExchangeAlt}  from "react-icons/fa";

const NewWebsocketPlayer = (props) => {
    // const [count, setCount] = useState(1);
    useEffect(() => {
        // const script = document.createElement('script');
        //
        // script.src = "https://cdn.bootcss.com/flv.js/1.5.0/flv.min.js";
        // script.async = true;
        //
        // document.body.appendChild(script);
        //
        // return () => {
        //     document.body.removeChild(script);
        // }
    }, []);


    return (
        <div className="w-100" id="playVideo">

                <div className="video-container h-100">
                    <ReactPlayer
                        url={props.url}
                        heigh = "100%"
                        width = "100%"
                        className="video-element h-100"
                        // fileConfig={{ attributes: { poster: poster } }}
                        config={{
                            file: { attributes: { poster: poster } }

                            // attributes: { poster: poster }
                            // youtube: {
                            //     playerVars: { showinfo: 1 }
                            // },
                            // facebook: {
                            //     appId: '12345'
                            // }
                        }}
                    />

                </div>
            <div className="w-100 d-flex justify-content-center">
                <span className=" text-white br10px br fontFamily-Sans FsFooterLogin mt-2  " id="btn_play">http_flv پخش  </span>
                <button onClick={()=>{props.changeUrl()}}><FaExchangeAlt/></button>

            </div>


            {/*<ReactPlayer*/}
            {/*    url={props.url}*/}
            {/*        heigh = "100%"*/}
            {/*        width = "100%"*/}
            {/*    config={{*/}
            {/*        // youtube: {*/}
            {/*        //     playerVars: { showinfo: 1 }*/}
            {/*        // },*/}
            {/*        // facebook: {*/}
            {/*        //     appId: '12345'*/}
            {/*        // }*/}
            {/*    }}*/}
            {/*/>*/}
            {/*<ReactFlvPlayer*/}
            {/*    // url = "ws://live.kelidiha.com:8000/live/lomos.flv"*/}
            {/*    url ={props.url}*/}
            {/*    heigh = "100%"*/}
            {/*    width = "100%"*/}
            {/*    isMuted={false}*/}

            {/*/>*/}


        </div>

    );
};

export default NewWebsocketPlayer;