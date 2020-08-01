import React, {useState, useEffect} from 'react';
// import {ReactFlvPlayer} from 'react-flv-player';
// import ReactPlayer from 'react-player';
import poster from "../../../../../Common/img/default_pic-169 Cropped.png";
// import RowShowShowColEdit from "../../../../Common/RowShowShowColEdit/RowShowShowColEdit";
import {ReactFlvPlayer} from 'react-flv-player'
import {FaExchangeAlt}  from "react-icons/fa";
import RowShowShowColEdit from "../../../../Common/RowShowShowColEdit/RowShowShowColEdit";
import RowShowShowEditWithoutLabel from "../../../../Common/RowShowShowColEdit/RowShowShowEditWithoutLabel";
import {AiOutlineReload} from "react-icons/ai";
import {Tooltip} from "reactstrap";


const BtnUpload = (props) => {
    const [tooltipOpen, setTooltipOpen] = useState(false);

    const toggle = () => setTooltipOpen(!tooltipOpen);

    return (

        <div className="ml-auto mr-5">

            <span   className="  " id="TooltipExample"><RowShowShowEditWithoutLabel  label={"پخش"} value={<AiOutlineReload/>} className='fS1vw btn btn-outline-main '/> </span>
            <Tooltip placement="left" isOpen={tooltipOpen} target="TooltipExample" toggle={toggle}>
                به روز رسانی لیست
            </Tooltip>
        </div>
    );
}

const NewWebsocketPlayer = (props) => {
    const [url, setURL] = useState(false);

    const handelSetURL=()=>{
        console.log("پخش http_flv")
        setURL(true)
    }



    return (
        <div className="w-100" id="playVideo">

                <div className="video-container h-100">

                    {
                        url?  <div  className="video-element h-100 br10px-top">
                                <ReactFlvPlayer
                                    url ={props.url}
                                    heigh = "100%"
                                    width = "100%"
                                    isMuted={false}
                                    isLive={true}
                                    className="video-element h-100  border-default  card-shadow-default   br10px-top"
                                    config={{file: { attributes: { poster: poster } }}}
                                />       </div>
                                :



                            <img src={poster} alt="def" className={"video-element h-100 w-100 br10px-top"} />

                    }
                    {/*<ReactPlayer*/}
                    {/*    url={props.url}*/}
                    {/*    heigh = "100%"*/}
                    {/*    width = "100%"*/}
                    {/*    className="video-element h-100"*/}
                    {/*     config={{file: { attributes: { poster: poster } }}}*/}
                    {/*/>*/}

                </div>
            <div className="w-100 d-flex justify-content-center">

                <div   className=' w-100 d-flex justify-content-center fS1vw brVideoBtn' >
                    <div  onClick={handelSetURL} className="zIndex-3">
                        <RowShowShowColEdit label={"پخش"} value={"http_flv"}   className='fS1vw btn btn-outline-main'/>
                    </div>
                    <div className= "ml-3 "  onClick={()=>{props.changeUrl()}}>
                        <RowShowShowEditWithoutLabel  label={"پخش"} value={<FaExchangeAlt/>} className='fS1vw btn btn-outline-main '/>
                    </div>
                    <div className={"ml-3 UpdateBtn"}  onClick={()=>{this.props.updateFileList()}}>
                        <BtnUpload  />
                    </div>


                </div>
                {/*<span className=" text-white br10px br fontFamily-Sans FsFooterLogin mt-2  " id="btn_play">http_flv پخش  </span>*/}
                {/*<button onClick={()=>{props.changeUrl()}}><FaExchangeAlt/></button>*/}

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