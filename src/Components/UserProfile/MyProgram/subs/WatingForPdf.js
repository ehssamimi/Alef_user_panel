import React, {useState, useEffect} from 'react';
import {Card, CardBody} from "reactstrap";
import Button from "@material-ui/core/Button/Button";

const WatingForPdf = (props) => {


    return (
        <div className="mt-3">
            <h3 className="text-left">دانلود برنامه مطالعه</h3>
            <Card className="br20px box-shadow-custom mt-3">
                <CardBody className="d-flex    justify-content-center align-items-center hpx250 ">
                    <div className="text-left">
                        <p className="header-color font-weight-bold">دانش آموز عزیز  </p>
                        <p className="text-break  second-color">در خواست شما با موفقیت ثبت شده است به زودی برنامه شخصی شما در همین صفحه قابل دریافت خواهد بود  </p>
                    </div>
                </CardBody>
            </Card>

        </div>
    );
};

export default WatingForPdf;