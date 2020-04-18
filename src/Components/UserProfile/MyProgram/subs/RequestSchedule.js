import React, {useState, useEffect} from 'react';
import {Card, CardBody} from "reactstrap";
import Button from "@material-ui/core/Button/Button";


const RequestSchedule = (props) => {


    return (
        <div className="mt-3">
            <h3 className="text-left">دانلود برنامه مطالعه</h3>
            <Card className="br20px box-shadow-custom mt-3">
                <CardBody className="d-flex flex-column justify-content-around align-items-center hpx250 ">
                    <div className="text-left">
                        <p className="header-color font-weight-bold">دانش آموز عزیز  </p>
                        <p className="text-break  second-color">شما می توانید با کلیک بر روی دکمه زیر برنامه شخصی خود را از اساتید ما دریافت کنید </p>
                    </div>
                    <div className="w-100  mt-3 d-flex justify-content-center" onClick={props.handelSubmitRequest}>
                        <Button className="btn green-background text-white col-8   br10px fontFamily-Sans h-input-s"> درخواست برنامه</Button>
                    </div>
                </CardBody>
            </Card>

        </div>
    );
};

export default RequestSchedule;