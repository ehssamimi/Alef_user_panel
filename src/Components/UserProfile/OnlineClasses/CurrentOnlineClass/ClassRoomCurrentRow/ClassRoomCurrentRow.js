import React, {Component} from 'react';
import {Card, CardBody} from "reactstrap";
import RowShowShowColEdit from "../../../../Common/RowShowShowColEdit/RowShowShowColEdit";
import  {Link} from 'react-router-dom'
import Button from "@material-ui/core/Button/Button";

class ClassRoomCurrentRow extends Component {

render() {
     let{class_id, class_type,end,start,class_information:{grade,field,lesson_name}  }=this.props;

    return (
        <Card className="br20px box-shadow-custom mt-3 col-6">
            <div className="d-flex flex-column justify-content-around align-items-center hpx250 ">
                <div className="w-100 d-flex justify-content-center">
                    <h4 className="IranSans FsFooterLogin">کلاس در حال برگذاری</h4>
                </div>

                    <div className="row m-0 w-100    "   >
                        <RowShowShowColEdit label={"دوره"} value={grade} labelClass={"FS01"} valueClass={"FS01"}  className={"col-6 d-flex justify-content-center p-0"}/>
                        <RowShowShowColEdit label={"رشته"} value={field} labelClass={"FS01"} valueClass={"FS01"}   className={"col-6  d-flex justify-content-center p-0"}/>
                        <RowShowShowColEdit label={"درس"} value={lesson_name} labelClass={"FS01"} valueClass={"FS01"}   className={"col-6  d-flex justify-content-center p-0"}/>
                        <RowShowShowColEdit label={"نوع کلاس"} value={class_type==="public"?"عمومی":"اختصاصی"} labelClass={"FS01"} valueClass={"FS01"}   className={"col-6  d-flex justify-content-center p-0"}/>
                        <RowShowShowColEdit label={"زمان شروع کلاس"} value={start} labelClass={"FS01"} valueClass={"FS01"}   className={"col-6  d-flex justify-content-center p-0"}/>
                        <RowShowShowColEdit label={"زمان پایان کلاس"} value={end}  labelClass={"FS01"} valueClass={"FS01"}  className={"col-6  d-flex justify-content-center p-0"}/>
                    </div>
                    <Link to={`/online-class/${class_id}`} className="btn green-background  br10px  input-s ">
                        <Button className="text-white fontFamily-Sans FsFooterLogin">ورود به کلاس  </Button>
                    </Link>

            </div>
        </Card>


            //
            // <Card className={`w-100 ${this.props.classList}`}  >
            //     <CardBody className="w-100">
            //         <Link to={`/online-class/${class_id}`}>
            //             <div className="row m-0 w-100 cursor-pointer"   >
            //                 <RowShowShowColEdit label={"دوره"} value={grade}   className={"col-6 d-flex justify-content-start p-0"}/>
            //                 <RowShowShowColEdit label={"رشته"} value={field}   className={"col-6  d-flex justify-content-start p-0"}/>
            //                 <RowShowShowColEdit label={"درس"} value={lesson_name}   className={"col-6  d-flex justify-content-start p-0"}/>
            //                 <RowShowShowColEdit label={"نوع کلاس"} value={class_type==="public"?"عمومی":"اختصاصی"}   className={"col-6  d-flex justify-content-start p-0"}/>
            //                 <RowShowShowColEdit label={"زمان شروع کلاس"} value={start}   className={"col-6  d-flex justify-content-start p-0"}/>
            //                 <RowShowShowColEdit label={"زمان پایان کلاس"} value={end}   className={"col-6  d-flex justify-content-start p-0"}/>
            //             </div>
            //         </Link>
            //
            //
            //     </CardBody>
            // </Card>
        );
    }
}

export default ClassRoomCurrentRow;