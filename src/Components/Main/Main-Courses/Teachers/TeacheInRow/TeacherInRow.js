import React, { useState,useEffect } from 'react';


export default function TeacherInRow (props){
    const [collapse, setcollapse] = useState(false);
    console.log("props");
    console.log(props);


    // let number=1321546463;
    return (
        <div className="d-flex col-sm-6 col-md-6 col-lg-4 mt-4" dir="rtl">
            <div className="col-4">
                <div className='profile-pic br-g br-r50  p-05'>
                    <img src={props.img} alt="profile" className="img-self-cover br-r50 br-y"/>
                </div>

            </div>
            <div className="col-8 d-flex align-items-start justify-content-center flex-column p-0 ">
                <div className="fs-lesion">
                    {props.name}
                </div>
                <div className="green-them">
                    {props.course}
                </div>

            </div>


        </div>
    )

}