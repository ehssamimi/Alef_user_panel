import React, {Component} from 'react';
import {Card} from "reactstrap";
import UploadFileRight from "./UploadFileRight/UploadFileRight";


import IsLoaderComponent from "../../../../../Common/Loader/IsLoaderComponent";
import {error_Notification} from "../../../../../functions/componentHelpFunction";
import {ShowFileToClass} from "../../../../../../Common/Const/ServerConnection";
import $ from "jquery";

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

                  $("#uploadFileDesktop").addClass("d-none")
                  $("#uploadFileMobile").height(Height - (0.12 * Height))
                  $("#chat-tab2").removeClass("d-none")
                  $('#chat').height(Height - (0.13 * Height));

              } else {

                  $('#chat').height("75vh");
                  $("#uploadFileDesktop").removeClass("d-none").css({
                      "height": Height - (0.15 * Height),
                      // overflowY: "auto",
                      // overflowX: "auto"
                  })

                  $("#chat-tab2").addClass("d-none")
                  $("#chat-tab1").click();


              }
          }
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
            // setTimeout(function () {
            //
            // }.bind(this),3000)
            this.windowsDimention();

        } else {
            error_Notification(state, Description)
        }

    }


    render() {
        let{isLoader,UploadList}=this.state;
        return (
            <IsLoaderComponent isLoader={isLoader}>
                <div className="overflow-hidden br10px  border-default card-shadow-default mt-2">
                    <div className="  hideScrollY"  id="uploadFileDesktop">
                        <h4 className="  FsFooterLogin green-them font-weight-bold ml-4 mb-0  header-chat-wide  ">
                            <span>فایل های ضمیمه شده</span>
                        </h4>
                        <div className="w-100   mobileNotView    overflow-hidden  " style={{height:"83%"}}  >

                            <div className="  w-100  hideScrollY   h-100   "  >

                                <div className="w-100   pb-1   d-flex pl-4 h-100   ">

                                    {
                                        (UploadList!==undefined&&UploadList.length>0)?
                                            UploadList.map((item, index) =>
                                                <UploadFileRight key={index} {...item} {...this.props} updateList={()=>this.getUploadList()}/>
                                            ):" "
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