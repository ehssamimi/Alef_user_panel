import React, {Component} from 'react';
import {ShowFileToClass} from "../../../../../../Common/Const/ServerConnection";
import {error_Notification} from "../../../../../functions/componentHelpFunction";
import IsLoaderComponent from "../../../../../Common/Loader/IsLoaderComponent";
import UploadFileRight from "../UploadFileDesktop/UploadFileRight/UploadFileRight";

class UploadFileMobile extends Component {
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
                    <div className="w-100  " id="uploadFileMobile">

                            <div className="w-100   pb-4 overflow-y-scroll h-100  ">

                                {
                                    (UploadList!==undefined&&UploadList.length>0)?
                                        UploadList.map((item, index) =>
                                            <UploadFileRight key={index} {...item} {...this.props} kind="mobile" index={index} updateList={()=>this.getUploadList()}/>
                                        ):" "
                                }

                            </div>

                    </div>

            </IsLoaderComponent>
        );
    }
}

export default UploadFileMobile;