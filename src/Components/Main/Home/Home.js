
import React, {useState, useEffect} from 'react';
import HeaderTop from "../../Common/Header-top/HeaderTop";
import HomePageFirst from "./subs/HomePageFirst/HomePageFirst";
import ax from './../../../Common/img/Logo.png'
import HomePageSecond from "./subs/HomePageSecond/HomePageSecond";
import ReactHLS from 'react-hls-player';
import PlayVideo169 from "../../Common/VideoPlayerComponents/PlayVideo/PlayVideo";

const Home = (props) => {
    // const [count, setCount] = useState(1);
    // useEffect(() => {
    //     // Update the document title using the browser API
    //     document.title = `You clicked ${count} times`;
    // });

    return (
        <HeaderTop {...props} isBuy={false}>
            <HomePageFirst/>
            {/*<HomePageSecond/>*/}
            this is header
            {/*<ReactHLS url="https://cors-anywhere.herokuapp.com/rtmp://37.152.183.79/live/livestream/aminjamal" />*/}

            {/*<PlayVideo169 video={"https://cors-anywhere.herokuapp.com/rtmp://37.152.183.79/live/livestream/aminjamal"} img={ax} aspect={ "16:9"}/>*/}
        </HeaderTop>
    );
};

export default Home;

