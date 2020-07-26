import React, {useState, useEffect} from 'react';
import {Card} from "reactstrap";
import UploadFileRight from "./UploadFileRight/UploadFileRight";

const UploadFileDesktop = (props) => {
    // const [count, setCount] = useState(1);
    useEffect(() => {
        // Update the document title using the browser API
        // return //for componentDidMount
    }, []);

    return (
        <div className="w-100" id="uploadFileDesktop">
            <div className="w-100 h-100" >
                <Card className="card-shadow-default  br-0  h-100 overflow-hidden">
                    <h4 className="  FsFooterLogin green-them font-weight-bold ml-4    header-chat-wide">
                        فایل های ضمیمه شده
                    </h4>
                    <div className="w-100 pl-4 ml-5 overflow-scroll d-flex " >
                        <UploadFileRight/>
                        <UploadFileRight/>
                        <UploadFileRight/>
                        <UploadFileRight/>
                        <UploadFileRight/>
                        <UploadFileRight/>
                        <UploadFileRight/>


                    </div>
                </Card>
            </div>
        </div>
    );
};

export default UploadFileDesktop;