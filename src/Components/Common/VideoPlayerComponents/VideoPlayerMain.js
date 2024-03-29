// taken from https://github.com/videojs/video.js/blob/master/docs/guides/react.md
import React from 'react';
import videojs from 'video.js';
import  'videojs-flash';
import 'video.js/dist/video-js.css';
export default class VideoPlayerMain extends React.Component {
    componentDidMount() {
        // instantiate video.js
        this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
            // console.log('onPlayerReady', this);
            // console.log('onPlayerReady onPlayerReady onPlayerReady' );
        });
        // this.player.on("click", function(event){
        //     event.preventDefault();
        //     console.log("Aaaaaaaaaaaaaaa")
        //     // console.log("click", event.clientX, event.clientY, this.videoNode.currentTime());
        // });

    }

    // destroy player on unmount
    componentWillUnmount() {
        if (this.player) {
            this.player.dispose();
        }
    }

      toggele=()=>{
        // console.log("aaaaaaaaaaaaa";
          this.videoNode.stop();
    }

    // wrap the player in a div with a `data-vjs-player` attribute
    // so videojs won't create additional wrapper in the DOM
    // see https://github.com/videojs/video.js/pull/3856
    render() {
        return (
            <div   data-vjs-player>
                <video ref={node => (this.videoNode = node)} className="video-js vjs-fluid  playCustom    w-100 object-fit-cover  "   />
            </div>
        );
    }
}

// data-setup='{"techOrder": ["html5", "flash"]}'