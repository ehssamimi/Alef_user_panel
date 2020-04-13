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


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

const PreModal=(props)=>{
    return(

        <div className="w-100 hpx200 position-relative pl-3 ">
            <img src={props.img} alt="main img" className="img-self-cover br10px filter-img-course"/>
            {
                props.type==='play'? <img src={Play} alt="play" className="img-cover-preLoader"/>:<img src={lock} alt="lock" className="img-cover-preLoader"/>
            }

        </div>

    )
}




const CourseCard = (props) => {
    // const classes = useStyles();

    return (
        <Card  className="m-2 br20px">
            <CardActionArea>
                <CardMedia
                    className="hpx200 "
                    image={props.img}
                    title="Course Section"
                />
                <CardContent>
                    <p>{props.title}</p>
                    <div>
                        {props.course}  {props.class? "|"+ props.class:""}
                    </div>
                    <div>

                    </div>


                </CardContent>
            </CardActionArea>
            <CardActions className="w-100 d-flex justify-content-center">
                <Button className="btn green-background text-white col-6 fontFamily-Sans ">{props.button}</Button>

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
    console.log(props)



    return <div className="position-relative hpx300  ">
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
                            props.type==="Course"?  <CourseCard {...item}/>: ""
                        }

                        {/*{*/}
                            {/*props.type==="Course"?  <CourseCard {...item}/>:<VideoCardItem {...item}  />*/}
                        {/*}*/}
                        {
                            props.type==="preModal"?  <PreModal {...item}/>:""
                        }

                    </div>
                );
            })}

        </Carousel>
    </div>
};