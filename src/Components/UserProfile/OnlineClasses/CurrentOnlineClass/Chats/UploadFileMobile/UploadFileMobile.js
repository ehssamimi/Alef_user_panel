import React, {Component} from 'react';
import {ShowFileToClass} from "../../../../../../Common/Const/ServerConnection";
import {error_Notification} from "../../../../../functions/componentHelpFunction";
import IsLoaderComponent from "../../../../../Common/Loader/IsLoaderComponent";
import UploadFileRight from "../UploadFileDesktop/UploadFileRight/UploadFileRight";
import Loader from "../../../../../Common/Loader/Loader";
import {NotificationManager} from "react-notifications";

class UploadFileMobile extends Component {
    constructor(props) {
        super(props);
        this.state={
            isLoader:true,
            UploadList:undefined,
            newFile:"",updateFileList:false
            ,model:false,
            func1:this.UpdateLists.bind(this)
            ,model2:false,
            func2:this.getUpdateFileLists.bind(this)
        }
    }


    static getDerivedStateFromProps(props, state) {
        console.log("props.notif" )
        console.log(props.notif )
        console.log("props.updateFileList" )
        console.log(props.updateFileList )

        if (props.notif!=="" && props.notif.type==="NT-LC-NF"){
            console.log("before");
            console.log("state.newFile");
            console.log(state.newFile);
            console.log("props.newFile");
            console.log(props.notif.content.additional_data.url);
            console.log(props.notif.content.additional_data.url !== state.newFile);

            if (props.notif.content.additional_data.url !== state.newFile) {
                // NotificationManager.success("لیست فایل ها به روز رسانی شد ", "توجه کنید  ");
                console.log("after");
                console.log("props.newFile");
                return {
                    model:state.func1(props.notif.content.additional_data)

                };
            }
        }
        if (props.updateFileList!==state.updateFileList){
            console.log("before");
            console.log("state.updateFileList");
            console.log(state.updateFileList);
            console.log("props.updateFileList");
            console.log(props.updateFileList);

                NotificationManager.success("لیست فایل ها به روز رسانی شد ", "توجه کنید  ");
                console.log("after");
                console.log("props.newFile");
                return {
                    model2:state.func2()

                };

        }



         return null;
    }

    componentDidMount() {
        this.getUploadList()
    }

    UpdateLists =   (newFile) => {
        console.log("old list")
        console.log(this.state.UploadList) ;
        console.log("newFile")
        console.log(newFile)
        let news=newFile
        news["type"]="new"
        this.setState(prevState => ({
            UploadList:[news,...prevState.UploadList ],
            newFile:newFile.url

        }),()=>{
            console.log(this.state.UploadList);
            // this.setState({
            //     newFile:newFile.url
            // })
            // console.log(this.state.productSeparate)
            // console.log(this.state.UsersIDImg)
        });
    }
    getUpdateFileLists=  ()=>{
        this.getUploadList()
        this.setState({
            updateFileList:this.props.updateFileList
        })
        console.log("update-Listssss")
    }

    getUploadList = async () => {
        console.log("update list")
        let {state, Description} = await ShowFileToClass(this.props.class_id);
        if (state === 200) {
            console.log("show uploade")
            console.log(Description)
            this.props.numberUpload(Description.files.length)

            let lists=[]
            Description.files.map(item=>{
                item["type"]="old"
                lists.push(item)
            })

            this.setState({
                isLoader: false,
                UploadList: lists.reverse(),
            })



            // this.setState({
            //     isLoader: false,
            //     UploadList: Description.files,
            //     newFile: this.props.newFile
            // })

        } else {
            error_Notification(state, Description)
        }

    }


    render() {
        let{isLoader,UploadList}=this.state;
        return (
            <div className="w-100 h-100">
                {
                    isLoader
                        ? <div className='d-flex justify-content-center align-items-center'>
                            <div className='col-6'>
                                <Loader/>
                            </div>
                        </div> :
                        <div className="w-100 h-100 ">
                            <div className="w-100 h-100 " id="uploadFileMobile">

                                <div className="w-100   pb-4 overflow-y-scroll h-100  ">

                                    {
                                        (UploadList!==undefined&&UploadList.length>0)?
                                            UploadList.map((item, index) =>
                                                <UploadFileRight key={index} {...item} {...this.props} kind="mobile" index={index} updateList={()=>this.getUploadList()}/>
                                            ):" "
                                    }

                                </div>

                            </div>

                        </div>

                }
            </div>



        );
    }
}

export default UploadFileMobile;