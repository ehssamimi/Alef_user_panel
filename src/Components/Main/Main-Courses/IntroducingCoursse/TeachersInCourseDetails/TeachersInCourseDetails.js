import React, { } from 'react';
import TeacherInRow from "../../Teachers/TeacheInRow/TeacherInRow";

const TeachersInCourseDetails = (props) => {


    return (
        <div className="w-100  mt-3 row">
             <h3 className="header-color FsHeaderLogin1">{props.header}</h3>
            <div className="row w-100 m-0">
                {
                    props.teachers.map((item , index)=>{return(<TeacherInRow {...item} key={index}/>)})
                }
            </div>

        </div>
    );
};

export default TeachersInCourseDetails;
