import React, {Component} from 'react';
import {
    bgClassroomConfige, changeTime,
     error_Notification
} from "../../../../../functions/componentHelpFunction";
import IsLoaderComponent from "../../../../../Common/Loader/IsLoaderComponent";
import {Card, Table} from "reactstrap";
import $ from "jquery";
import {LoadSchedule} from "../../../../../../Common/Const/ServerConnection";
import {FaAngleLeft, FaAngleRight} from "react-icons/fa";
let row = [{id: 7}, {id: 7.5}, {id: 8}, {id: 8.5}, {id: 9}, {id: 9.5}, {id: 10}, {id: 10.5}, {id: 11}, {id: 11.5}, {id: 12}, {id:12.5},
    {id: 13}, {id: 13.5}, {id: 14}, {id: 14.5}, {id: 15}, {id: 15.5}, {id: 16}, {id: 16.5}, {id: 17}, {id: 17.5}, {id: 18}, {id:18.5},
    {id: 19}, {id: 19.5}, {id: 20}, {id: 20.5}, {id: 21}, {id: 21.5}, {id: 22}, {id: 22.5}, {id: 23}, {id: 23.5}, {id: 24}];
  let days=[ "dayOne","dayTwo"];


function search(nameKey, myArray){
    console.log("nameKey")
    console.log(nameKey) ;
    console.log("myArray")
    console.log(myArray)

    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].label === nameKey) {
            console.log("true")
            return myArray[i];
        }else {
            console.log("false")
            return false;
        }
    }
}



class MobileStudioTable extends Component {
    constructor(props) {
        super(props);
        this.state={

            id:"",
            isLoader:false,
            isOpen:false,
            DeleteIndex:"",
            allDays:[],
            numberDay:0
        }
    }
    async componentDidMount(){

        let {state,Description}=await LoadSchedule();


        if (state === 200) {

            console.log("plan" );
            console.log(Description);


            this.setState({
                 allDays:Object.values(Description)
            },()=>{

                this.setDays(0,1,"شنبه" ,"یکشنبه" );
                this.setState({
                    isLoader:false,
                })

            });

        }else {
            error_Notification( state, Description)
        }

    }


    setDays=(n1,n2,d1,d2)=>{

        console.log("numbers")
        console.log(n1,n2,d1,d2);
        $("#dayOne").html(d1);
        $("#dayTwo").html(d2);


        let dayss=[];let {allDays }=this.state;dayss.push(allDays[n1],allDays[n2])

        function convertIndex(x){
            return (x-7)*2
        }
        function handelDay(day,index){
            day.map(item=> eachDay(item,index));
        }
        console.log("dayss")
        console.log(dayss)
        // ***remove previous classess*****

        for (let j =0; j <= 1; j++) {
            for (let i = 0; i <= row.length; i++) {
                $(`#${i + days[j]}`).removeClass(["selectedTab", "bg-white"]).find("a").attr("href", `#`).find("div").removeClass("border-main-green br-r-11 border-table-red bg-main border-primary-s");
                $(`#${i + days[j]}`).find(".lesson").removeClass("mainColor dark-red-color text-white").html("")
                $(`#${i + days[j]}`).find(".grade").removeClass("mainColor text-white").html("")
            }
        }
        // ***add new classess*****


        dayss.map((item,index)=> handelDay(item,index) )

        function eachDay(item, index){


            console.log(item);
            let {bg ,border ,mainColor ,SecondColor }=bgClassroomConfige(item,"m");
            for (let i = convertIndex(item.start); i <= convertIndex(item.end); i++) {
                $(`#${i+days[index]}`).addClass([ "selectedTab", bg ]).find("a").attr("href",`/online-class/${item.class_id}`).find("div").addClass(border)  ;
                $(`#${i+days[index]}`).find(".lesson").addClass(mainColor).html(item.class_information.lesson_name)
                $(`#${i+days[index]}`).find(".grade").addClass(SecondColor).html(item.class_information.grade+" - "+item.class_information.field)
             }

        }


}



    // onClick={() => this.handelClick(item.id, days[iterate], index + days[iterate], index)}

    handelClick=async ( type)=>{
        if (type==="next"){
            if(this.state.numberDay===6){
                this.setState(prev=>({
                    numberDay:0
                }),()=>{
                    let CurrentTable=this.SetTitle(this.state.numberDay)
                    console.log(CurrentTable)
                    this.setDays(CurrentTable[0],CurrentTable[1],CurrentTable[2],CurrentTable[3]);
                    // this.setDays(this.state.numberDay,);
                })
            }else {
                this.setState(prev=>({
                    numberDay:prev.numberDay+2
                }),()=>{
                    let CurrentTable=this.SetTitle(this.state.numberDay)
                     this.setDays(CurrentTable[0],CurrentTable[1],CurrentTable[2],CurrentTable[3]);
                    // this.setDays(this.state.numberDay,);
                })
            }


        }else{
            if(this.state.numberDay===0){
                this.setState(prev=>({
                    numberDay:6
                }),()=>{
                    let CurrentTable=this.SetTitle(this.state.numberDay)
                    console.log(CurrentTable)
                    this.setDays(CurrentTable[0],CurrentTable[1],CurrentTable[2],CurrentTable[3]);
                    // this.setDays(this.state.numberDay,);
                })
            }else {
                this.setState(prev=>({
                    numberDay:prev.numberDay-2
                }),()=>{
                    let CurrentTable=this.SetTitle(this.state.numberDay)
                    console.log(CurrentTable)
                    this.setDays(CurrentTable[0],CurrentTable[1],CurrentTable[2],CurrentTable[3]);
                })
            }


            // this.setState(prev=>({
            //     numberDay:prev.numberDay-2
            // }),()=>{
            //     this.setDays(this.state.numberDay);
            // })
        }



    };
      SetTitle=(number)=>{
         let n1,n2,d1,d2="";
        if (number===0){
            n1=0
            n2=1
            d1="شنبه"
            d2="یکشنبه"

        }else if (number===2){
            n1=2
            n2=3
            d1="دو شنبه"
            d2="سه شنبه"


        } else if (number===4){
            n1=4
            n2=5
            d1="چهارشنبه"
            d2="پنج شنبه"


        }else if (number===6){
            n1=6
            n2=0
            d1="جمعه"
            d2="شنبه"
        }
        return [n1,n2,d1,d2]
    }


    render() {
        // console.log(this.state);
        return (

            <IsLoaderComponent isLoader={this.state.isLoader}>
                <div className="row m-0">
                    <div>
                        <h2 className="  FsHeaderLogin1 font-weight-bold">برنامه کلاسی آنلاین</h2>
                        {/*<p className="mainColor FsHeaderLogin1 font-weight-bold">برنامه کلاسی آنلاین </p>*/}
                    </div>
                    <div className=" d-flex  w-100  align-items-center justify-content-between mb-2 mt2">
                        <div className="d-flex  " >
                            <div className="hollow-pointer-circle border-main-green  mr-2  mt-sm-1 "></div>
                            <span className="FsFooterLogin mainColor">کلاس عمومی</span>

                        </div>
                        <div className="d-flex    " >
                            <div className="hollow-pointer-circle  border-table-red  mr-2  mt-sm-1 "></div>
                            <span className="FsFooterLogin dark-red-color ">کلاس اختصاصی</span>

                        </div>
                        <div className="d-flex   " >
                            <div className="pointer-circle   bg-main  mr-2 mt-sm-1 "></div>
                            <span className="FsFooterLogin mainColor">کلاس خاص </span>

                        </div>

                    </div>
                </div>


                <div id="table">
                    <Card className="w-100 card-shadow-default br-0 br5px pt-2">
                        <Table  bordered>
                            <thead className="w-100">
                            <tr>
                                <th className="    br-th-column br-th-row position-relative">
                                    <div className="carousel-button-group2" dir={"ltr"}>
                                        <span className= ' border-Carousel2   ml-2' style={{height:"1.1em", color:"#67796c"}}  onClick={()=>{this.handelClick("next")} }><FaAngleLeft className="Fs17-5" /></span>
                                        <span  className="border-Carousel2"   style={{height:"1.1em", color:"#67796c"}} onClick={()=>{this.handelClick("prev")}}><FaAngleRight className="Fs17-5"/></span>
                                        {/*<button  onClick={() => goToSlide(currentSlide + 1)}> Go to any slide </button >*/}
                                    </div>

                                </th>
                                {days.map(item =>
                                    <th key={item } className="Fs-Table-h w-42 br-th-row mainColor table-br-b pb-2" id={item}>{item }</th>
                                )}
                            </tr>
                            </thead>
                            <tbody>
                            {row.map((item,index) =>
                                <tr key={item.id+index } className="Fs-Table    ">
                                    <th scope="     " className={" br-th-column   FHR FssubmitLogin text-right position-relative"}  ><span className={"spanInTh"} >{changeTime(item.id) }</span> <span style={{opacity:0}}> x</span></th>
                                    {days.map((day,iterate) =>
                                        <td className="p-0 m-0 align-middle w-42 wrapper-login table-br"
                                            id={index + days[iterate]}
                                           >
                                            <a href="#">
                                                <div className="pl-2 pr-1  ">
                                                    <p className=" mb-1 mt-1 lesson FsFooterLogin text-left font-weight-bold"></p>
                                                    <p className="mb-1   grade FS02 text-left"></p>
                                                </div>
                                                {/*<div className=" d-sm-none addClassNumber" >*/}

                                                {/*</div>*/}
                                            </a>
                                        </td>
                                    )}

                                </tr>
                            )}


                            </tbody>
                        </Table>
                    </Card>

                </div>

            </IsLoaderComponent>

        );
    }
}

export default MobileStudioTable;
