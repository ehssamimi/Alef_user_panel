import React, {Component} from 'react';
import MainHeader from "../Main-Header/MainHeader";
import ax1 from './../../../Common/img/arno-smit-sKJ7zSylUao-unsplash.jpg'
import ax2 from './../../../Common/img/brooke-lark-pXEsx3kRuNc-unsplash.jpg'
import ax3 from './../../../Common/img/kwang-mathurosemontri-fY1ECB1RCd0-unsplash.jpg'
import {CarouselMain} from "../../Common/Carousel/CarouselMain";
import UploadVideos from "../../Common/VideoPlayerComponents/UploadVideos";
import ExtendedDiv from "../../Common/ExtendedDiv/ExtendedDiv";
import CheckBoxCustom from "../../Common/CheckBoxCustom/CheckBoxCustom";
import HeaderCourse from "../../Common/HeaderCourse/HeaderCourse";
import profile from './../../../Common/img/profile.jpg'
import TeacherInRow from "../Main-Courses/Teachers/TeacheInRow/TeacherInRow";

// const Video_src='https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8';
const Video_src='https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8';



class Home extends Component {
    constructor(props) {
        super(props);
        this.state={
            // files:[  {"img":ax1}, {"img":ax2}, {"img":ax3}]
            files:[  {"src":Video_src,poster:ax1}, {"src":Video_src,poster:ax2}, {"src":Video_src,poster:ax3}],
            courses:[  {"title":'حسابان',img:ax1,course:"ریاضی و فیزیک"}, {"title":'فیزیک',img:ax2,course:"نور و انعکاس"}, {"title":'شیمی',img:ax3,course:"جدول تناوبی"}],
            teachers:[  {"img":profile,"name":"کیهان یعقوبیان","course":"پرورشی"},{"img":profile,"name":"سهند میرزایی ","course":"طراحی"}, {"img":profile,"name":"احسان تقوی ","course":"فیزیک"}, {"img":profile,"name":"احسان صمیمی راد ","course":"ریاضی"}]
            // files:[  {"src":Video_src,label:"lesson",name:"trilogy" }, {"src":Video_src,label:"lesson",name:"Sin,Cos"}, {"src":Video_src,label:"lesson",name:"cotang,tang"}]


        }
    }

    render() {
        return (
            <div className="w-100 d-flex justify-content-center">
                <MainHeader>
                    <div className="mt-5 col-12 ml-auto mr-auto">
                        <div className="row m-0">

                            {
                                this.state.teachers.map((item , index)=>{return(<TeacherInRow {...item} key={index}/>)})
                            }

                        </div>
                        {/*<CarouselMain files={this.state.courses}/>*/}

                        <HeaderCourse>
                            <ExtendedDiv>
                                <CarouselMain files={this.state.files}/>
                            </ExtendedDiv>
                            <ExtendedDiv>
                                <CarouselMain files={this.state.files}/>
                            </ExtendedDiv>
                        </HeaderCourse>




                    </div>
                </MainHeader>
            </div>


        );
    }
}

export default Home;