import React, { useState,useEffect } from 'react';
// import './../../../../../Common'


export default function TeacherInRow (props){
    const [collapse, setcollapse] = useState(false);



    // let number=1321546463;  col-sm-6 col-md-6 col-lg-4
    return (
        <div className="d-flex col-6 col-lg-4 mt-4" dir="rtl">

                <div className='profile-pic br-g br-r50  p-05'>
                    <img src={props.img} alt="profile" className="img-self-cover br-r50 br-y"/>
                </div>


            <div className="  d-flex align-items-start justify-content-center flex-column p-0  ml-2">
                <div className="Green-dark-color  FssubmitLogin">
                    {props.name}
                </div>
                <div className="green-them FsFooterLogin">
                    {props.course}
                </div>

            </div>


        </div>
    )

}