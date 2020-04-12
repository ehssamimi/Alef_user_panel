import React, {useState, useEffect,useContext,useRef} from 'react';
import logo from './../../Common/img/Logo.png'
import {TextInput} from "../Common/Forms/textInput/TextInput";
import {Power4, TweenMax} from "gsap/TweenMax";
import  { Link } from 'react-router-dom'

import {UserContext} from "../Common/Context/UserProvider";
import FormLogin from "./FormLogin";
import UserInfo from "../UserProfile/UserInfo/UserInfo";
import FormSignUp from "./FormSignUp";
import {GetUserDropDown} from "../../Common/Const/ServerConnection";
import {NotificationManager} from "react-notifications";
const SignUp = (props) => {
    let User=useContext(UserContext);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [error, seterror] = useState({"phoneNumber":"","digiCode":""});

    const [digiCode, setDigiCode] = useState("");
    const Redirect = useRef(null);

    const onChange = (value, names) => {



        if (names === "phoneNumber") {
            setPhoneNumber(value)
        }
        if (names === "digiCode") {
            setDigiCode(value)
        }
        // console.log(values);
        // console.log(names);
    };
    const handelSubmit = (e) => {
        console.log(e);
        e.preventDefault();

        const $el = document.getElementById(`img-bg-login`);
        const $form1 = document.getElementById(`form1`);
        const $form2 = document.getElementById(`form2`);
        const duration = 2 ;
        const from = { width: '100%'};
        TweenMax.to($el, duration, from);
        TweenMax.to($form1, duration/5,   {display:"none",delay:duration});
        TweenMax.to($form2,  duration/5, {display:"block",delay:duration});
        setTimeout(() => {
            TweenMax.to($el, duration,  { width: '50%'});
        }, 2000)

        // console.log(type);
        // e.preventDefault();
        // console.log('phone Number');
        // console.log(phoneNumber)
    };
    const handelLogin=async (e)=>{
        e.preventDefault();
        console.log(digiCode);

        await User.HandelLogin();
        const $el = document.getElementById(`img-bg-login`);

        const duration = 2 ;
        const from = { width: '100%'};
        TweenMax.to($el, duration, from);

        setTimeout(() => {
            TweenMax.to($el, duration,  { width: '0'});
        }, 2000)
        // Redirect.current.click();
    }
    console.log("User.isLogIn")
    console.log(User.isLogIn)
    return (
        <div className="row w-100 h-100 overflow-hidden justify-content-end">
            <div className="  h-100 bg-login d-flex justify-content-center align-items-center    "
                 style={{width:'50%', overFlow:"hidden"}} id="img-bg-login">


                <div className="">
                    <img src={logo} alt="logo" className="logo-login"/>
                </div>

            </div>


            {
                User.isLogIn ?<UserInfo/>:
                    <div className="w-100  d-flex justify-content-end">
                        <FormSignUp header={"خوش  آمدید به"} subHeader={"آکادمی آنلاین کلید "} d_form={"form1"}
                                    btn_txt={"ارسال کد تایید"} style={"block"}/>


                        <FormLogin header={" ادامه بدهید ..."} subHeader={"تقریبا تمومه"} onSubmit={handelLogin}
                                   onChange={onChange} label={'کد فعال سازی '} style={"none"} id_form={"form2"}
                                   id={'digiCode'} placeHolder={"کد فعال سازی را وارد کنید "} type={"number"} value={digiCode}
                                   error={error.digiCode} btn_txt={"ورود"}/>
                    </div>

            }




            {/*</div>*/}
            <Link to='/user-info'  className="d-none" ref={Redirect} />


        </div>
    );
};

export default SignUp;