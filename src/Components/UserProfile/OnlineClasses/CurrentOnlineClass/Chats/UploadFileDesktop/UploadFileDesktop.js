import React, {Component,useState} from 'react';
import { Tooltip } from 'reactstrap';
import UploadFileRight from "./UploadFileRight/UploadFileRight";
import { AiOutlineReload } from "react-icons/ai";
import {NotificationContainer, NotificationManager} from "react-notifications";

import IsLoaderComponent from "../../../../../Common/Loader/IsLoaderComponent";
import {error_Notification, success_Notification} from "../../../../../functions/componentHelpFunction";
import {ShowFileToClass} from "../../../../../../Common/Const/ServerConnection";
import $ from "jquery";
import NotificationManagerss from "../../../../../Common/react-notifications/NotificationManager";

const BtnUpload = (props) => {
    const [tooltipOpen, setTooltipOpen] = useState(false);

    const toggle = () => setTooltipOpen(!tooltipOpen);

    return (




        <div className="ml-auto mr-5">
            {/*<span onClick={this.getUploadList} className="ml-auto mr-3  br10px  d-flex collapseSpanHeight align-items-end mt-2  fS1vw btn btn-outline-main "><AiOutlineReload/> </span>*/}
            <span onClick={props.update} className="  br10px  d-flex collapseSpanHeight align-items-end mt-2  fS1vw btn btn-outline-main " id="TooltipExample"><AiOutlineReload/> </span>
             <Tooltip placement="left" isOpen={tooltipOpen} target="TooltipExample" toggle={toggle}>
                به روز رسانی لیست
            </Tooltip>
        </div>
    );
}




class UploadFileDesktop extends Component {
    constructor(props) {
        super(props);
        this.state={
            isLoader:true,
            UploadList:undefined,
            newFile:""
            ,model:false,
            func1:this.UpdateLists.bind(this)
        }
    }


    static getDerivedStateFromProps(props, state) {
        console.log("props.notif" )
        console.log(props.notif )

         if (props.notif!=="" && props.notif.type==="NT-LC-NF"){
            console.log("before");
            console.log("state.newFile");
            console.log(state.newFile);
            console.log("props.newFile");
            console.log(props.notif.content.additional_data.url);
            console.log(props.notif.content.additional_data.url !== state.newFile);

            if (props.notif.content.additional_data.url !== state.newFile) {
                NotificationManager.success("لیست فایل ها به روز رسانی شد ", "توجه کنید  ");
                console.log("after");
                console.log("props.newFile");
                // console.log(props.notif.content.additional_data);
                // let newUploadList=state.UploadList;
                // console.log("old uploadList")
                // console.log(newUploadList)
                // newUploadList.push(props.notif.content.additional_data);
                // console.log("new uploadList")
                // console.log(newUploadList)

                return {


                    // UploadList:props.notif.content.additional_data,
                    // newFile:props.notif.content.additional_data.url

                    model:state.func1(props.notif.content.additional_data)

                };
            }
        }

        // Return null if the state hasn't changed
        return null;
    }

    componentDidMount() {
        this.getUploadList();


    }


      windowsDimention=()=>{
        const Width = window.outerWidth;

        var link = $('#playVideo');
        var offset = link.offset();
          if (link.offset()!==undefined) {
              var top = offset.top;
              let Height = $(window).height() - top - link.height();
              console.log(Height);

              if (Width <= 768) {

                  // $("#uploadFileDesktop").addClass("d-none")
                  $("#UploadDesktopOuter").addClass("d-none")

                  $("#uploadFileMobile").height(Height - (0.12 * Height))
                  $("#chat-tab2").removeClass("d-none")


              } else {


                  // $("#uploadFileDesktop").removeClass("d-none").css({
                  //     "height": Height - (0.12 * Height),
                  //     "marginTop":0.3*Height
                  // })
                  $("#uploadFileDesktop").css({
                      "height": Height - (0.25 * Height),
                      // "marginTop":0.3*Height
                  })
                  $("#UploadDesktopOuter").removeClass("d-none").css({
                      "marginTop": Height - (0.8 * Height)
                  })

                  $("#chat-tab2").addClass("d-none")



              }
          }
    }

    getUploadList = async () => {
        // success_Notification("فایل جدید اضافه شد!");

        console.log("update list")
        let {state, Description} = await ShowFileToClass(this.props.class_id);
        if (state === 200) {
            console.log("show uploade")
            console.log(Description) ;
            let lists=[]
            Description.files.map(item=>{
                item["type"]="old"
                    lists.push(item)
            })

            this.setState({
                isLoader: false,
                UploadList: lists.reverse(),
             })

            this.windowsDimention();

        } else {
            NotificationManager.error(    state, Description );
        }

    }
    getUploadbtn = async () => {
        // success_Notification("فایل جدید اضافه شد!");

        NotificationManager.success("لیست فایل ها به روز رسانی شد ", "  ");
        this.getUploadList();

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


    render() {
        let{isLoader,UploadList}=this.state;
        console.log("props")
        console.log(this.props)

        return (
            <IsLoaderComponent isLoader={isLoader}>
                <div className="overflow-hidden br10px  border-default card-shadow-default " id="UploadDesktopOuter">
                    <div className="  hideScrollY"  id="uploadFileDesktop">
                        <h4 className="  FsFooterLogin green-them font-weight-bold ml-4  ml-lg-3 mb-0  header-chat-wide d-flex align-items-center ">
                            <span>فایل های ضمیمه شده</span> <BtnUpload update={this.getUploadbtn}/>
                        </h4>
                        <div className="w-100   mobileNotView    overflow-hidden  " style={{height:"83%"}}  >
                            {/*update-btn*/}
                            <div className="  w-100  hideScrollY   h-100   "  >

                                <div className="w-100   pb-1   d-flex pl-4 h-100   ">

                                    {
                                        (UploadList!==undefined&&UploadList.length>0)?
                                            UploadList.map((item, index) =>
                                                <UploadFileRight key={index} {...item} {...this.props} updateList={()=>this.getUploadList()}/>
                                            ): <div className="d-flex align-items-center "><p className="  round">در حال حاظر فایلی برای این کلاس آپلود نشده است </p></div>
                                    }

                                </div>
                                <div></div>
                            </div>

                        </div>
                    </div>
                </div>





            </IsLoaderComponent>
        );
    }
}

export default UploadFileDesktop;