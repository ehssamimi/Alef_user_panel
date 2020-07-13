import React  from 'react';
import {Card,CardBody} from 'reactstrap'
import Button from "@material-ui/core/Button/Button";


const DownloadPdf = (props) => {

    return (
        <div className="mt-3">
            <h3 className="text-left">دانلود برنامه مطالعه</h3>
            <Card className="br20px box-shadow-custom mt-3">
                <CardBody className="d-flex flex-column justify-content-around align-items-center hpx250 ">
                    <div className="text-center">
                        <p className="header-color font-weight-bold">{props.grade}</p>
                        <p className="text-break  second-color">{props.field}</p>
                    </div>
                    <div className="w-100  mt-3">
                        <a href={props.url} target="_blank" download  className="w-100 d-flex justify-content-center" ><Button className="btn green-background text-white col-8   br10px fontFamily-Sans h-input-s FssubmitLogin">دانلود pdf</Button></a>
                    </div>
                </CardBody>
            </Card>

        </div>
    );
};

export default DownloadPdf;
