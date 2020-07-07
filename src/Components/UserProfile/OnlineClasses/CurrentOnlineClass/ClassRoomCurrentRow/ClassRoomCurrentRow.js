import React, {Component} from 'react';
import {Card, CardBody} from "reactstrap";
import RowShowShowColEdit from "../../../../Common/RowShowShowColEdit/RowShowShowColEdit";
import  {Link} from 'react-router-dom'

class ClassRoomCurrentRow extends Component {

render() {
    let{class_id, class_type,end,start,information:{grade,field,lesson_name}  }=this.props;

    return (
            <Card className={`w-100 ${this.state.classList}`}  >
                <CardBody className="w-100">
                    <Link to={`/online-class/${class_id}`}>
                        <div className="row m-0 w-100 cursor-pointer"   >
                            <RowShowShowColEdit label={"دوره"} value={grade}   className={"col-6 d-flex justify-content-start p-0"}/>
                            <RowShowShowColEdit label={"رشته"} value={field}   className={"col-6  d-flex justify-content-start p-0"}/>
                            <RowShowShowColEdit label={"درس"} value={lesson_name}   className={"col-6  d-flex justify-content-start p-0"}/>
                            <RowShowShowColEdit label={"نوع کلاس"} value={class_type==="public"?"عمومی":"اختصاصی"}   className={"col-6  d-flex justify-content-start p-0"}/>
                            <RowShowShowColEdit label={"زمان شروع کلاس"} value={start}   className={"col-6  d-flex justify-content-start p-0"}/>
                            <RowShowShowColEdit label={"زمان پایان کلاس"} value={end}   className={"col-6  d-flex justify-content-start p-0"}/>
                        </div>
                    </Link>


                </CardBody>
            </Card>
        );
    }
}

export default ClassRoomCurrentRow;