import React, {useState, useEffect} from 'react';
import UploadIcon from './../../../../../../../Common/img/UploadIcons.png'

const UploadFileRight = (props) => {
    // const [count, setCount] = useState(1);
    let{title,url,file_name,file_size,class_id}= props;
    useEffect(() => {
        // Update the document title using the browser API
        // return //for componentDidMount
    }, []);

    return (
        <div className={["col-sm-12    sm-mt-3    p-0",props.kind==="mobile"?props.index===0?" w-75 ml-auto mr-auto":" w-75  ml-auto mr-auto ":"col-md-5"].join(" ")}>
            <div className= {["upload-bubble-desktop tri-right round ",props.type==="old"?" green-background border-chat-left":" bg-chat-mySelf border-chat-mySelf"].join(" ")} >
                {/*green-background border-chat-left*/}
                <div className="talktext  ">
                    {/*<p className="chat-header  IranSans mb-0 text-right FS01">{"استاد امین بابازاده"}</p>*/}
                    <p className=  "  IranSans text-justify mb-0 FS02 text-white"  >{title}</p>
                    <div className="text-left  ">
                        <div className="row">
                            <div className=" col-9">
                                <p className=" IranSans mb-0 text-justify FS01 hidden-txt text-white   font-weight-light w-100  ">{file_name}</p>
                                <p className=  "  IranSans text-justify mb-0 FS01 text-white font-weight-light lineHeight14"  >{file_size}</p>
                            </div>
                            <div className="    font-weight-light " >

                                <a href={url} target="_blank" download className="download-pic-chat  br-r50  p-05 position-absolute leftSideUploadBtn"    >
                                    <img src={UploadIcon} alt={"upload-Icon"} className="img-self-cover br-r50   text-justify  "/>
                                </a>
                            </div>

                        </div>

                    </div>
                    {/*<div className="w-100 d-flex justify-content-end">*/}
                    <div className={["w-100 d-flex justify-content-end",props.kind==="mobile"? " ":""].join(" ")}>
                        <span className= "chat-header  IranSans  FS01 " >{"12:22"}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UploadFileRight;