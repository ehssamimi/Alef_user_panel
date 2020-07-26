import React, {useState, useEffect} from 'react';
import profile from './../../../../../../../Common/img/default_pic@3x.png'

const UploadFileRight = (props) => {
    // const [count, setCount] = useState(1);
    useEffect(() => {
        // Update the document title using the browser API
        // return //for componentDidMount
    }, []);

    return (
        <div className="col-8 row  mt-3 p-0">
            <div className="width-chat-profile position-relative">
                <div className="profile-pic-chat  br-r50  p-05 position-absolute br-g">
                    <img src={  profile} alt="profile" className="img-self-cover br-r50 br-y text-justify  "/>
                </div>
            </div>

            <div className= "talk-bubble tri-right round-top-right   right-top   green-background border-chat-mySelf " >
                <div className="talktext">
                    <p className="chat-header  IranSans mb-0 text-left FS01">{"استاد امین بابازاده"}</p>
                    <p className=  "  IranSans text-justify mb-0 FS02 text-white"      >{"نمونه سوالات هالیدی"}</p>
                    <div className="w-100 d-flex justify-content-end">
                        <span className= "chat-header  IranSans  FS01 " >{"12:22"}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UploadFileRight;