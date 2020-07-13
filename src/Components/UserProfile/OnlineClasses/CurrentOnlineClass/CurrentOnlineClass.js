import React, {useState, useEffect} from 'react';
import {GetCurrentUserClassList} from "../../../../Common/Const/ServerConnection";
import IsLoaderComponent from "../../../Common/Loader/IsLoaderComponent";
import ClassRoomCurrentRow from "./ClassRoomCurrentRow/ClassRoomCurrentRow";
import OnlineScheduling from "../OnlineScheduling/OnlineScheduling";
import {Card, CardBody} from "reactstrap";
import Button from "@material-ui/core/Button/Button";
import {Link} from "react-router-dom";

const CurrentOnlineClass = (props) => {
    const [ClassList, setClassList] = useState([]);
    const [isLoader, setisLoader] = useState(true);
    useEffect(  () => {
        async function getClassLists() {
            let data=await GetCurrentUserClassList();
            if (data!==""){
                setClassList(data.current)
                console.log(data)
            }
            setisLoader(false)
        }
          getClassLists();


        // Update the document title using the browser API
        // return //for componentDidMount
    }, []);
    console.log()

    return (
        <IsLoaderComponent isLoader={isLoader }>
            {
                ClassList.length===0?
                    <Card className="br20px box-shadow-custom mt-3 col-sm-12 col-md-6 offset-md-3">
                        <CardBody className="d-flex flex-column justify-content-around align-items-center hpx250 ">
                            <div className="text-center">
                                <p className="header-color font-weight-bold">دانش آموز عزیز!  </p>
                                <p className="text-break  second-color Fs">کلاس در حال حاظر برای شما فعال نیست  </p>
                            </div>
                            <Link to={`/online-scheduler`} className="btn green-background        br10px  input-s ">
                            <Button className="text-white fontFamily-Sans FsFooterLogin"> مشاهده برنامه درسی آنلاین</Button>
                            </Link>

                        </CardBody>
                    </Card>

                    : ClassList.map((todo, index) => <ClassRoomCurrentRow {...todo} key={index} />


                )
            }

        </IsLoaderComponent>

    );
};

export default CurrentOnlineClass;