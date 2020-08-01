import React, {useState, useEffect,Component} from 'react';
import HeaderTop from "../../Common/Header-top/HeaderTop";
import MyCourse from "../MyCourse/MyCourse";
import HeaderTopWithRightMenu from "../../Common/Header-top/HeaderTopWithRightMenu/HeaderTopWithRightMenu";
import {Route, Switch} from "react-router-dom";
import Home from "../../Main/Home/Home";
import MainAbout from "../../Main/Main-About/MainAbout";
import ShowAllCourse from "../../Main/Main-Courses/ShowAllCourse";
import CurrentClass from "../OnlineClasses/CurrentOnlineClass/CurrentClass/CurrentClass";
import MainCourses from "../../Main/Main-Courses/MainCourses";
import {GetConfigMqtt} from "../../../Common/Const/ServerConnection";
import * as Const from "../../../Common/Const/ServerConst";
const mqtt = require('mqtt')






class MainUrl extends Component {
    constructor(props) {
        super(props);
        this.state={
            notifOnlineClass:{}
        }
    }
    async componentDidMount() {

            let {state,Description:{topics}}=await GetConfigMqtt();
            console.log(topics)
            // 0: "GB-TIME-IR"
            // 1: "NT-U-5ea0132cd8cbe2eb0b7e2361"
            // 2: "NT-WEB"
            // content: {class_id: "aminjamal"}
            // type: "NT-LC-NF"




            const options = {
                clean: true, // retain session
                connectTimeout: 4000, // Timeout period
                // Authentication information
                clientId: Const.Token,
                qos:1
            }
            // cm

            const connectUrl = 'wss://websocket.kelidiha.com/notification'
            // const connectUrl = 'ws://localhost:8083/mqtt'
            const client = mqtt.connect(connectUrl, options)
        if (topics!==undefined){
            for (let i =0; i < topics.length; i++) {

                console.log(topics[i])
                client.subscribe(topics[i],{qos:1})
            }
            // client.subscribe("NT-U-5ea0132cd8cbe2eb0b7e2361")



            //
            // client.subscribe("GB-TIME-IR")
            // client.subscribe("NT-U-5e82a422dc5d87cead3bab42")

            client.on('reconnect', (error) => {
                console.log('reconnecting:', error)
                for (let i =0; i < topics.length; i++) {

                    console.log(topics[i])
                    client.subscribe(topics[i],{qos:1})
                }
            })

            client.on('error', (error) => {
                console.log('Connection failed:', error)
            })

            client.on('message', (topic, message) => {
                // console.log('receive message：', topic, JSON.parse(message))
                // console.log(JSON.parse(message));
                // this.setState({ notifOnlineClass: JSON.parse(message)},()=>{
                //     console.log(this.state)
                // });

                if (topic === topics[1]) {
                    console.log(JSON.parse(message));
                    this.setState({ notifOnlineClass: JSON.parse(message)},()=>{
                        console.log(this.state)
                    });

                    // setNotifOnlineClass(JSON.parse(message))
                    // values=JSON.parse(message)

                }


                // console.log(topics[1]);
                // console.log(topic);
                // console.log(JSON.parse(message));
                // if (topic === topics[1]) {
                //
                // }

            })
        }


// if (topic === "GB-TIME-IR") {
            //     document.getElementById("global_time").textContent = JSON.parse(message).TIME;
            // }



    }



    render() {
        let{notifOnlineClass}=this.state
        return (
            <div className="w-100">
                <HeaderTop {...this.props} isBuy={false}>
                    <div className="w-100">
                        {
                            this.props.match.path === "/home" ? <Home {...this.props} notif={notifOnlineClass}/> : ""
                        }
                        {
                            this.props.match.path === "/about" ? <MainAbout {...this.props} notif={notifOnlineClass}/> : ""
                        }
                        {
                            this.props.match.path === "/courses" ? <ShowAllCourse {...this.props} notif={notifOnlineClass}/> : ""
                        }
                        {
                            this.props.match.path === "/online-class/:id" ? <CurrentClass {...this.props} notif={notifOnlineClass}/> : ""
                        }
                        {
                            this.props.match.path === "/course/:id" ? <MainCourses {...this.props} notif={notifOnlineClass}/> : ""
                        }
                    </div>

                </HeaderTop>

            </div>
        );
    }
}

export default MainUrl;