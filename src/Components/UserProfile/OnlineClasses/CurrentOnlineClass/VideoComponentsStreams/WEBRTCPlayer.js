import React, {Component} from 'react';
import {parse_query_string, parse_rtmp_url, srs_init_rtc} from "../../../../functions/WEBRTC";
import $ from 'jquery';
import RowShowShowColEdit from "../../../../Common/RowShowShowColEdit/RowShowShowColEdit";
import poster from "./../../../../../Common/img/default_pic-169 Cropped.png"
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button/Button";
import {FaExchangeAlt} from "react-icons/fa";
import RowShowShowEditWithoutLabel from "../../../../Common/RowShowShowColEdit/RowShowShowEditWithoutLabel";
class WebrtcPlayer extends Component {
    constructor(props) {
        super(props);

    }
    componentDidMount() {
        var pc = null;
        var startPlay = function () {
            $('#rtc_media_player').show();
            var urlObject = parse_rtmp_url($("#txt_url").val());

            // Close PC when user replay.
            if (pc) {
                pc.close();
            }

            pc = new RTCPeerConnection(null);

            // var audioConstarints = new MediaConstraints();
            // audioConstarints.mandatory.add(new MediaConstraints.KeyValuePair("googNoiseSuppression", "true"));
            pc.onaddstream = function (event) {
                console.log('Start play, event: ', event);
                $('#rtc_media_player').prop('srcObject', event.stream);
            };
            new Promise(function (resolve, reject) {
                pc.addTransceiver("audio", {direction: "recvonly"});
                pc.addTransceiver("video", {direction: "recvonly"});

                pc.createOffer(function (offer) {
                    resolve(offer);
                }, function (reason) {
                    reject(reason);
                });
            }).then(function (offer) {
                return pc.setLocalDescription(offer).then(function () {
                    return offer;
                });
            }).then(function (offer) {
                return new Promise(function (resolve, reject) {

                    // @see https://github.com/rtcdn/rtcdn-draft
                    var api = '/rtc/v1/play/';
                    var url = 'https:' + '//' + urlObject.server + "/1985" + api;


                    var data = {
                        api: url, streamurl: urlObject.url, clientip: null, sdp: offer.sdp
                    };
                    //'https://srs.kelidiha.com/1985/rtc/v1/play/'
                    $.ajax({
                        type: "POST", url: url, data: JSON.stringify(data),
                        contentType: 'application/json', dataType: 'json'
                    }).done(function (data) {
                        console.log("Got answer: ", data);
                        resolve(data.sdp);
                    }).fail(function (reason) {
                        reject(reason);
                    });
                });
            }).then(function (answer) {
                return pc.setRemoteDescription(new RTCSessionDescription({type: 'answer', sdp: answer}));
            }).catch(function (reason) {
                throw reason;
            });
        };


        var query = parse_query_string();
        // srs_init_rtc("#txt_url", query);

        $("#btn_play").click(startPlay);
        if (query.autostart === 'true') {
            // For autostart, we should mute it, see https://www.jianshu.com/p/c3c6944eed5a
            $('#rtc_media_player').prop('muted', true);
            startPlay();
        }

    }


    render() {
        return (
            <div className="w-100" id="playVideo">
                {/*<ReactPlayer id="rtc_media_player" url={this.props.url} />*/}

                <div className="video-container">
                    <video id="rtc_media_player" controls autoPlay  className="video-element " poster={poster}/>
                </div>



                <div className="form-inline">
                    {/*URL:*/}
                    <input type="text" id="txt_url" className="input-xxlarge d-none" value={this.props.url}/>
                    {/*<button className="btn btn-primary d-none" id="btn_play">播放视频</button>*/}
                    {/*<div   className="     input-s col-3 ml-r-auto justify-content-center  ">*/}
                    <div className="w-100 d-flex justify-content-center">
                        <div id="btn_play">
                            <RowShowShowColEdit  label={"پخش"} value={"web-rtc"}   className='fS1vw btn btn-outline-main'/>
                        </div>
                        <div className={"ml-3"} onClick={()=>{this.props.changeUrl()}}>
                            <RowShowShowEditWithoutLabel  label={"پخش"} value={<FaExchangeAlt/>} className='fS1vw btn btn-outline-main '/>
                        </div>


                        {/*<Button className="btn text-white br10px green-background fontFamily-Sans FsFooterLogin mt-2  " id="btn_play">مشاهده کلاس  </Button>*/}



                        {/*<button onClick={()=>{this.props.changeUrl()}}><FaExchangeAlt/></button>*/}
                    </div>
                    {/*</div>*/}
                    {/*<div id="btn_play" className=' w-100 d-flex justify-content-center fS1vw'><RowShowShowColEdit label={"پخش"} value={"WebRTC"}  className='fS1vw btn '/></div>*/}

                </div>


            </div>
        );
    }
}

export default WebrtcPlayer;