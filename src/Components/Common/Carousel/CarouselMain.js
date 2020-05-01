import React, { useState,useEffect } from 'react';
import { CardBody} from "reactstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import VideoPlayerMain from "../VideoPlayerComponents/VideoPlayerMain";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import  Play from'./../../../Common/img/play_on_video.png'
import  lock from'./../../../Common/img/lock_on_video.png'
import {formatNumber} from "../../../Common/JS-Function/Js-common-function";
import {Link} from "react-router-dom";
import ax1 from "../../../Common/img/arno-smit-sKJ7zSylUao-unsplash.jpg";
import {CourseBuy} from "../../../Common/Const/ServerConnection";
import { useHistory } from 'react-router-dom';
import {NotificationManager} from "react-notifications";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

const PreModal=(props)=>{
    let{img,is_locked,toggle,name,video,audio,video_cover,description ,index,items}=props;
    // let  main={"video":video!==null?video:audio,"video_cover":video_cover,"description":description};

    // items: Array(1)
// 0:
// video: "https://stream.kelidiha.com/item/video/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiNWU4MmE0MjJkYzVkODdjZWFkM2JhYjQyIiwib3RoZXJzIjp7fSwic2VlZCI6OTE4NjN9.sXUiLnLmHQq1NsXJIMB4TGhgcnEcZMoMG-N1yaLatHw/5e96169a01d73623037c281d/2LHbjNin2LbbjA==/2KjYrti02YbYr9mH/2KfZhtiq2q-Ysdin2YQ=/2YXZgdin2YfbjNmFINin2YjZhNuM2Yc=/index.m3u8"
// video_cover: "https://stream.kelidiha.com/public/item/5e96169a01d73623037c281d/2LHbjNin2LbbjA==/2KjYrti02YbYr9mH/2KfZhtiq2q-Ysdin2YQ=/2YXZgdin2YfbjNmFINin2YjZhNuM2Yc=/video_cover/image.png"
// audio: "https://stream.kelidiha.com/item/item_audio/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiNWU4MmE0MjJkYzVkODdjZWFkM2JhYjQyIiwib3RoZXJzIjp7fSwic2VlZCI6OTE4NjN9.sXUiLnLmHQq1NsXJIMB4TGhgcnEcZMoMG-N1yaLatHw/5e96169a01d73623037c281d/2LHbjNin2LbbjA==/2KjYrti02YbYr9mH/2KfZhtiq2q-Ysdin2YQ=/2YXZgdin2YfbjNmFINin2YjZhNuM2Yc=/audio.mp3"
// description: "string"
// name: "مفاهیم اولیه"
// downloadable_content: "https://stream.kelidiha.com/item/item_downloadable_content/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiNWU4MmE0MjJkYzVkODdjZWFkM2JhYjQyIiwib3RoZXJzIjp7fSwic2VlZCI6OTE4NjN9.sXUiLnLmHQq1NsXJIMB4TGhgcnEcZMoMG-N1yaLatHw/5e96169a01d73623037c281d/2LHbjNin2LbbjA==/2KjYrti02YbYr9mH/2KfZhtiq2q-Ysdin2YQ=/2YXZgdin2YfbjNmFINin2YjZhNuM2Yc=/pdf.pdf"
// time_to_done: 3
// is_free: false
// is_locked: false
// is_seen: false

    let main={index:index,items:items};

    // {"src":Video_src,img:ax2,type:"lock"}
    return(

        <div className="w-100 hpx200 position-relative pl-3 " >
            {
                !is_locked ?
                    <img src={video_cover} alt="main img" className="img-self-cover br10px filter-img-course cursor-pointer" onClick={() => {
                        toggle('main', main)
                    }}/> : <img src={video_cover} alt="main img" className="img-self-cover br10px filter-img-course cursor-pointer"/>
            }

            {
                !is_locked? <img src={Play} alt="play" className="img-cover-preLoader cursor-pointer"/>:<img src={lock} alt="lock" className="img-cover-preLoader"/>
            }
            <p className="pt-2 pb-0 second-color">درس {index+1} {name}</p>
        </div>

    )
};




const CourseCard = (props) => {
    // const classes = useStyles();

    return (
        <Card  className="m-2 br20px">

                <CardMedia
                    className="hpx200 "
                    image={props.image}
                    title="Course Section"
                />
                <CardContent>
                    <p className="header-color">{props.name}</p>
                    <div className="second-color">
                        {props.lesson_name?props.lesson_name+" | ":""}  {props.grade}  {props.field? " | "+ props.field:""}
                    </div>

                </CardContent>

            <CardActions className="w-100 d-flex justify-content-center mb-2">
                <a href={`/course/${props.id}`} className="w-100 text-center ">
                    <Button className="btn green-background text-white col-6 fontFamily-Sans br10px">
                        {props.kind==="course"?"مشاهده دوره ":""}
                        {props.kind==="chapter"?"مشاهده قسمت ":""}
                        {props.kind==="lesson"?"مشاهده درس ":""}
                    </Button>

                </a>


            </CardActions>
        </Card>
    );
};

const VideoCardItem=(props)=>{
    const videoJsOptions = {
        autoplay: false,
        fluid: true,
        playbackRates: [0.5, 1, 1.25, 1.5, 2],
        // width: 720,
        // height: 300,
        poster:props.poster,
        enableLowInitialPlaylist:true,
        aspectRatio: '16:9',
        controls: true,
        nativeControlsForTouch:true,
        sources: [
            {
                src: props.src,
                type:"application/x-mpegURL"
                // type: 'video/m3u8',
            },
        ],
    };

    return(
        <CardBody>
            <VideoPlayerMain {...videoJsOptions} />
            <div>
                {/*{label}*/}
            </div>
        </CardBody>

    )
};


const CourseCarsMain = (props) => {



    const history = useHistory();
    // let{img,title,course,grade,button,cost,sellCost,sub_text,id}=props;
    let{name,grade,field,price,image,off,course_id,sub_text }=props;
    // console.log("image")
    // console.log(image)

    const [count, setCount] = useState(1);
    useEffect(() => {
        // Update the document title using the browser API

        document.title = `You clicked ${count} times`;
    });
    const handelClick=async (e)=>{
        e.preventDefault();
        let data = {"courses": [{"course_id": course_id}]};





       if(localStorage.getItem("token")===null){
           history.push('/login');
       }else {
           let {state, Description} = await CourseBuy(JSON.stringify(data));


           // data:
           //     gateway_url: "https://idpay.ir/p/ws-sandbox/b6c3567bc7491cb0cd847896b3df05da"
           // request_id: "5ea06a53f013eedf22dd7aaa"
           if (state === 200) {
               window.open(Description.gateway_url, '_blank');
           }else {
               NotificationManager.error(state, Description);
           }


       }

    }
    // console.log(price);



    return (

        <Card  className= "m-2 br20px h-100 MainCardCourseHeight  box-shadow-custom FsFooterLogin  " >

            {/*<CardMedia*/}
                {/*// className={props.class}*/}
                {/*className={'this is courseeeeeeeeeeeeeeeeee'}*/}
                {/*image={image}*/}
                {/*title="Course Section"*/}
            {/*/>*/}
            <Link to={`/course/${course_id}`}>
            <CardMedia
                className="hpx200 "
                image={ image}
                title="Course Section"
            />
            </Link>


            {/*<img src={image} alt={image}/>*/}
            <CardContent className={"min-h-mainCourse "}>
                <div className="row col-12 m-0 ">
                    <div className="d-inline-block  ">
                        <div className="d-flex flex-column text-end " dir="rtl">
                            <span className="header-color " > {parseInt(price)!==0 ?  off!==0?formatNumber(price-(price*off)) + " "+ "تومان" :formatNumber(price) + " "+ "تومان" :"رایگان "  }     </span>
                             {
                                 parseInt(price)!==0 ?<span className="  red-color  text-decoration-line-through" style={{opacity:0.7}}>{ formatNumber(price) } تومان</span>:<span className="  red-color  text-decoration-line-through "  > </span>
                            }
                        </div>
                    </div>
                    <span className="header-color mr-auto  ">{name}</span>

                </div>

                <div >
                    {/*<span className="second-color">{grade} </span>*/}
                    {/*<span className="second-color"> {field? "|"+ field:""} </span>*/}
                    <span className="second-color pl-2"> {field } </span>
                </div>
            </CardContent>

            <CardActions className="w-100 d-flex justify-content-center h-50" onClick={handelClick}>
                <button className="btn green-background text-white col-8 fontFamily-Sans sendButton-shadow br10px h-input-buy FssubmitLogin"> خرید دوره </button>
            </CardActions>
            <div className="d-flex justify-content-center">
                {
                    sub_text?  <Link to={`/course/${course_id}`}  className="pt-3 green-them font-weight-bolder"> {sub_text  } </Link>:""
                }
            </div>
        </Card>

    );
};









const ButtonGroup = ({ next, previous, goToSlide , ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
    return (
        <div className="carousel-button-group">
            <span className= ' border-Carousel p-2 ml-3'  onClick={() => next()}><FaAngleLeft  /></span>
            <span  className={currentSlide === 0 ? 'disable border-Carousel p-2' : 'border-Carousel p-2'} onClick={() => previous()}><FaAngleRight/></span>
            {/*<button  onClick={() => goToSlide(currentSlide + 1)}> Go to any slide </button >*/}
        </div>
    );
};



export  function CarouselMain(props) {
    // console.log(props)



    return <div className="position-relative hpx300  w-100  ">
        {/*h-header-slider*/}
        <div className="d-flex align-items-center ">
            <span className="carousel-header">{props.header} </span>
        </div>

        <Carousel
            additionalTransfrom={0}
             autoPlaySpeed={3000}
            centerMode={false}
            className={['pt-5', props.files.length>2?"":"d-flex justify-content-end"  ].join(' ')}
            containerClass="container-with-dots"
            customButtonGroup={props.files.length>2?<ButtonGroup />:""}
            // customDot={<CustomDot />}
            arrows={false}
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
                desktop: {
                    breakpoint: {
                        max: 3000,
                        min: 1024
                    },
                    items: 3,
                    partialVisibilityGutter: 40
                },
                mobile: {
                    breakpoint: {
                        max: 464,
                        min: 0
                    },
                    items: 1,
                    partialVisibilityGutter: 30
                },
                tablet: {
                    breakpoint: {
                        max: 1024,
                        min: 464
                    },
                    items: 2,
                    partialVisibilityGutter: 30
                }
            }}

            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
        >
            {props.files.map((item,key) => {
                return (
                    <div key={key} id={key} className=""  >

                        {
                            props.type==="Course"?  <CourseCard {...item} kind={props.kind}/>: ""
                        }

                        {/*{*/}
                            {/*props.type==="Course"?  <CourseCard {...item}/>:<VideoCardItem {...item}  />*/}
                        {/*}*/}
                        {
                            props.type==="preModal"?  <PreModal {...item} {...props} index={key} items={props.files}/>:""
                        }
                        {
                            props.type==="courseMain"?  <CourseCarsMain {...item} {...props} index={key}  />:""
                        }

                    </div>
                );
            })}

        </Carousel>
    </div>
};