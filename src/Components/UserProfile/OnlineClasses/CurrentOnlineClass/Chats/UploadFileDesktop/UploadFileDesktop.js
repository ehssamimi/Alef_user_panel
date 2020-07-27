import React, {Component} from 'react';
import {Card} from "reactstrap";
import UploadFileRight from "./UploadFileRight/UploadFileRight";


import IsLoaderComponent from "../../../../../Common/Loader/IsLoaderComponent";
import {error_Notification} from "../../../../../functions/componentHelpFunction";
import {ShowFileToClass} from "../../../../../../Common/Const/ServerConnection";

class UploadFileDesktop extends Component {
    constructor(props) {
        super(props);
        this.state={
            isLoader:true,
            UploadList:undefined,
            newFile:""
            ,model:false,
            func1:this.getUploadList.bind(this)
        }
    }


    static getDerivedStateFromProps(props, state) {
        console.log("before");
        console.log("state.newFile");
        console.log(state.newFile);
        console.log("props.newFile");
        console.log(props.newFile);
        if (props.newFile !== state.newFile) {
            console.log("after");
            console.log("props.newFile");
            console.log(props.newFile);
            return {

                model:state.func1(props.index)

            };
        }
        // Return null if the state hasn't changed
        return null;
    }

    componentDidMount() {
        this.getUploadList()
    }

    getUploadList = async () => {
        console.log("update list")
        let {state, Description} = await ShowFileToClass(this.props.class_id);
        if (state === 200) {
            console.log("show uploade")
            console.log(Description)
            this.setState({
                isLoader: false,
                UploadList: Description.files,
                newFile: this.props.newFile
            })

        } else {
            error_Notification(state, Description)
        }

    }


    render() {
        let{isLoader,UploadList}=this.state;
        return (
            <IsLoaderComponent isLoader={isLoader}>
                <div className="w-100   mobileNotView mt-2" id="uploadFileDesktop">
                    <div className="w-100 h-100">
                        <div className="card-shadow-default      br32px  border-default   "  >
                            <h4 className="  FsFooterLogin green-them font-weight-bold ml-4 mb-0  header-chat-wide  ">
                                <span>فایل های ضمیمه شده</span>

                            </h4>
                            <div className="w-100   pb-4 overflow-x-scroll  d-flex pl-4">

                                {
                                    (UploadList!==undefined&&UploadList.length>0)?
                                        UploadList.map((item, index) =>
                                            <UploadFileRight key={index} {...item} {...this.props} updateList={()=>this.getUploadList()}/>
                                        ):" "
                                }

                            </div>
                        </div>
                    </div>
                </div>



            </IsLoaderComponent>
        );
    }
}

export default UploadFileDesktop;