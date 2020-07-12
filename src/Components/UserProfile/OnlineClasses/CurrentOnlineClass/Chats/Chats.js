import React, {Component} from 'react';
import InfiniteScrollReverse from "react-infinite-scroll-reverse";
import io from "socket.io-client";
import ChatRightTop from "./Chat-right-top/Chat-right-top";
import InputSendMessage from "./InputSendMessage/InputSendMessage";
import {GetHistoryChat, GetUserProfileImg} from "../../../../../Common/Const/ServerConnection";
import {error_Notification} from "../../../../functions/componentHelpFunction";
import Loader from "../../../../Common/Loader/Loader";
import *  as Const from '../../../../../Common/Const/ServerConst'
import {Card} from 'reactstrap'
import ChatLeftRight from "./ChatLeftRight/ChatLeftRight";

//
// const   socket = io.connect('http://live.kelidiha.com:3004/live_class', {
//     transportOptions: {
//         polling: {
//             extraHeaders: {
//                 'token': "5e82a422dc5d87cead3bab42",
//                 "gpid": "5efa3bafcd52cdd9ea00ddc2",
//                 "classid": "includeamin"
//             }
//         }
//     },
//     path: '/ws/socket.io'
// });


class Chats extends Component {
    constructor(props) {
        super(props);
        this.state={
            messages:[],InitialData:[],productSeparate:[],pageStart:1,hasMore:true,UsersIDImg:{UsersIDImg:[],UsersId:[]},gid:null,

            socket : io.connect('http://live.kelidiha.com:3004/live_class', {
                transportOptions: {
                    polling: {
                        extraHeaders: {
                            'token': Const.UserId,
                            "gpid": props.gid,
                            "classid": props.classId
                        }
                    }
                },
                path: '/ws/socket.io'
            })

        }
    }



    async componentDidMount() {
        // let{socket}=this.state;

        const   socket = io.connect('http://live.kelidiha.com:3004/live_class', {
            transportOptions: {
                polling: {
                    extraHeaders: {
                        'token':  Const.UserId,
                        "gpid": this.props.gid,
                        "classid": this.props.classId
                    }
                }
            },
            path: '/ws/socket.io'
        });
        console.log("grid"+" "+this.props.gid+"classid"+" "+this.props.classId)



        socket.on('set_user_info', (data) => {
            // console.log("set_user_info")
            console.log("componentDidMountcomponentDidMount")
            console.log(data)
            this.setState({
                InitialData:data
            })
            // document.getElementById("user_id").textContent = data.message.user_id;
            // document.getElementById("name").textContent = data.message.name;
            // document.getElementById('chat').disabled = false;
            // document.getElementById('send').disabled = false;
        })

        socket.on('gp_msg',async (data)=>{
            console.log("gp_msg")
            var d = new Date();
            var h = d.getHours()+":"+d.getMinutes();
            console.log(h)
            data["time"]=h
            // await getHistorychat(data.sid)
            console.log(data)
            // setMessage(prevMessages=>[...prevMessages,data])
            let{UsersIDImg}=this.state;
            if ( UsersIDImg["UsersId"].includes(data.sid)){
                let MList = this.state.productSeparate;
                console.log("MList")
                console.log(MList)
                MList.unshift(data);
                console.log(MList)
                this.setState({
                    productSeparate:MList
                })


                // this.setState(prevState => ({
                //     messages:[...prevState.messages,data]
                // }));
            }else {
                let {state ,Description }=await GetUserProfileImg(data.sid);
                console.log("Description")
                console.log(Description)
                let Ussers=UsersIDImg;
                let Use={"sid":data.sid,"profile":Description}
                Ussers["UsersId"].push(data.sid);
                Ussers["UsersIDImg"].push(Use);
                let MList = this.state.productSeparate;
                console.log("MList")
                console.log(MList)
                MList.unshift(data);
                console.log(MList)
                this.setState({
                    productSeparate:MList,
                    UsersIDImg:Ussers
                })

                // this.setState(prevState => ({
                //     messages:[...prevState.messages,data],
                //     UsersIDImg:Ussers
                // }));


            }




            // cn: " asa"
            // ct: "txt"
            // gid: "5efa3bafcd52cdd9ea00ddc2"
            // sid: "5e82a422dc5d87cead3bab42"
            // sn: "amin jamal"
            // time: "23:36"
        })



        // async function getNewChat(){
        //
        //
        //
        // }

        // let ReciveData;



        // await this.loadMore();

    }

    loadMore = async () => {
        // messages: (15) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
        // page: 1
        // content: " ahmad"
        // content_type: "txt"
        // create_at: "2020-07-04T14:22:36.103000"
        // group_id: "5efa3bafcd52cdd9ea00ddc2"
        // id: "5f00d6fc2f3d927653560124"
        // reply_to: null
        // sender_id: "5e82a422dc5d87cead3bab42"
        // sender_name: "amin jamal"
        // ***get all product and current page ***
        // let {state, Description} = await GetAllUser(pageStart);
        let{UsersIDImg,pageStart}=this.state;
        let {state, Description} = await GetHistoryChat(this.props.gid,pageStart,"5efa3bafcd52cdd9ea00ddc2");
        console.log("Description");
        console.log(Description);
        console.log("pageStart")
        console.log(pageStart)


        // let Response = await GetAllProduct(pageStart);
        if (state === 200) {
            let {messages, page} = Description;
            // *** modify  products to our label value ***
            let productsSeparate =[];
            messages.map((item, index)=>{
                let product={}
                product["sn"]=item.sender_name;
                product["cn"]=item.content;
                product["sid"]=item.sender_id;
                product["time"]=item.create_at.slice(11, 16);

                productsSeparate.push(product)
            })
            console.log(productsSeparate)

            for (let i=0;i<messages.length;i++){
                if (UsersIDImg["UsersId"].includes(messages[i].sender_id)){

                }else {
                    let {state ,Description }=await GetUserProfileImg(messages[i].sender_id);
                    console.log("Description")
                    console.log(Description)
                    let Ussers=UsersIDImg;
                    let Use={"sid":messages[i].sender_id,"profile":Description}
                    Ussers["UsersId"].push(messages[i].sender_id);
                    Ussers["UsersIDImg"].push(Use);
                    this.setState({
                        UsersIDImg:Ussers
                    })

                }

            }
            // let {state ,Description }=await GetUserProfileImg(user_id);
            // *******update state*****
            this.setState(prevState => ({
                productSeparate:[...prevState.productSeparate,...productsSeparate],
                pageStart:page + 1,
                hasMore:messages.length !== 0

            }),()=>{
                console.log(this.state.productSeparate)
                console.log(this.state.UsersIDImg)
            });
            // setproductSeparate([...productSeparate, ...productsSeparate]);


            // await GetUserProfileImg("5e82a422dc5d87cead3bab42");
            // content: " ahmad"
            // content_type: "txt"
            // create_at: "2020-07-04T14:22:36.103000"
            // group_id: "5efa3bafcd52cdd9ea00ddc2"
            // id: "5f00d6fc2f3d927653560124"
            // reply_to: null
            // sender_id: "5e82a422dc5d87cead3bab42"
            // sender_name: "amin jamal"


            // setpageStart(page + 1);
            // ***** check if product length is zero then stop loop****
            // sethasMore(messages.length !== 0);
        } else {
            error_Notification('Network Error')
        }
    };

    static getDerivedStateFromProps(props, state) {
        if (props.gid !== state.gid) {
            return {
                gid: props.gid,
            };
        }
        // Return null if the state hasn't changed
        return null;
    }

    sendMessage=(value)=>{
        let{socket}=this.state;
        let{InitialData}=this.state;
        let message = {
            cn: value,
            ct: "txt",
            gid: this.props.gid,
            sn: InitialData.message.name,
            sid: InitialData.message.user_id
        }

        console.log(message)
        socket.emit('send_packet',message)
        console.log("sendMessage")
        console.log(value)
        // setMessage(prevMessages=>[...prevMessages,message])

    }


    render() {
        let{messages,productSeparate,hasMore,UsersIDImg}=this.state
        console.log(productSeparate);
        return (
            <div>
                <Card className="card-shadow-default br20px br-0  ">
                    <h4 className="  FsFooterLogin green-them font-weight-bold pl-3    header-chat-wide">
                        گفت  و گو ها
                    </h4>
                    <InfiniteScrollReverse
                        className="row rtl  mr-0 ml-0  pb-5 overFlow-y-scroll disable-scrollbars   pl-4 border-chat-left h-max-75vh flex-wrap align-content-end "
                        pageStart={0}
                        loadMore={this.loadMore}
                        hasMore={ hasMore}
                        isLoading={true }
                        loadArea={10}
                         loader={<div className="loader col-6 offset-3" key={0}><Loader/></div>}
                    >

                            {productSeparate.length > 0 && Array.isArray(productSeparate) ?

                                        productSeparate.slice(0).reverse().map((todo, index) =>
                                            <ChatRightTop chatBg={"green-background border-chat-left"}  key={index} {...todo} UsersIDImg={UsersIDImg}/>
                                        )

                                : []
                            }





                    </InfiniteScrollReverse>

                    <InputSendMessage sendMessage={this.sendMessage}/>
                </Card>




                {/*{*/}
                {/*    messages.length>0?*/}
                {/*        messages.map((item,index)=>*/}
                {/*            item.sid===Const.UserId?*/}
                {/*                <ChatRightTop chatBg={"green-background border-chat-left"}  key={index} {...item} UsersIDImg={UsersIDImg}/>:<ChatLeftRight chatBg={"green-background border-chat-left"}  key={index} {...item} UsersIDImg={UsersIDImg}/>*/}
                {/*            // <ChatRightTop chatBg={"green-background border-chat-left"}  key={index} {...item}/>*/}
                {/*//         sid: "5ea0132cd8cbe2eb0b7e2361"*/}
                {/*// sn: "احسان صمیمی راد"*/}
                {/*// time: "15:46"*/}
                {/*        )*/}
                {/*        :""*/}
                {/*}*/}

            </div>
        );
    }
}

export default Chats;