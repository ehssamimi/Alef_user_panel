import React, {useState, useEffect} from 'react';
import {Card,CardBody} from 'reactstrap'
import Button from "@material-ui/core/Button/Button";
import {Link} from "react-router-dom";


const DownloadPdf = (props) => {
    const [count, setCount] = useState(1);
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
    });

    return (
        <div className="mt-3">
            <h3 className="text-left">دانلود برنامه مطالعه</h3>
            <Card className="br20px box-shadow-custom mt-3">
                <CardBody className="d-flex flex-column justify-content-around align-items-center hpx250 ">
                    <div className="text-center">
                        <p className="header-color font-weight-bold">{props.header}</p>
                        <p className="text-break  second-color">{props.class}</p>
                    </div>
                    <div className="w-100  mt-3">
                        <Link to="/program.pdf" target="_blank" className="w-100 d-flex justify-content-center" download> <Button className="btn green-background text-white col-8   br10px fontFamily-Sans h-input-s">{props.button}</Button></Link>

                    </div>
                </CardBody>
            </Card>

        </div>
    );
};

export default DownloadPdf;
