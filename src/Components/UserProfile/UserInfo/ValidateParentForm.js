import React, {useState, useEffect} from 'react';
import validator from "validator";
import {
    GetVerifyParentCode, ResendParentCode,
    ResendVerifycationCode,
    Verify,
    VerifyParentCode
} from "../../../Common/Const/ServerConnection";
import {NotificationManager} from "react-notifications";
import {Col, Form} from "reactstrap";
import {TextInput} from "../../Common/Forms/textInput/TextInput";
import ModalCustomVideo from "../../Common/Modal/ModalCustom";

const ValidateParentForm = (props) => {
    const [count, setCount] = useState( props.count );
    const [values, setValue] = useState("");
    const [error, seterror] = useState({"verificationCode":"" });

    const countFunction=async()=>{
        let {state1 ,Description1} = await GetVerifyParentCode( props.phoneNumber);
        setInterval(function () {
            setCount(preCount=>preCount-1)
        },1000)
    };
    useEffect(  () => {
        countFunction();
    },[ ]);
    const onChange = (value ) => {

        setValue(value);

    };


    const validateFormValidate=(callback)=> {
        let errors={"verificationCode":"" };

        let formValidate=true;

        if (validator.isEmpty(values)) {
            formValidate = false;
            errors['verificationCode']="کد ارسالی به تلفت همراه خود را وارد کنید ";
        }

        seterror(errors);
        return callback(formValidate)
    };
    const handelSubmitValidate = async (e) => {
        e.preventDefault();
        validateFormValidate(async (validate)=>{

            if (validate){
                let {state ,Description} = await VerifyParentCode( values);
                console.log(state ,Description);
                if (state===200 ) {
                    props.toggle()
                    NotificationManager.success("موفق شدید", "شماره تماس والد به روز رسانی شد")
                } else {
                    NotificationManager.error(state, Description)
                }
            }else {
                console.log( 'error' );
                console.log( error )
            }
        })

    };
    const HandelResend = async (e) => {
        e.preventDefault();
        let {state ,Description} = await ResendParentCode( );
        let {state1 ,Description1} = await GetVerifyParentCode( props.phoneNumber);
        if (state===200 ) {
            NotificationManager.success("کد احاز هویت با موفقیت برای شما ارسال شد ", "موفق شدید ");
            console.log(Description)
        }else {
            NotificationManager.error(Description, state);
        }

    };


    return (
        <div className="w-100" dir="rtl">

            <p className="header-color font-weight-bold  mb-2 mt-2   " style={{fontSize:"1.2rem"}}>اعتبار سنجی شماره تلفن والد </p>
            <div className="row m-0  w-100">

                <Col sm={12} className="d-flex   flex-column justify-content-between   ml-r-auto   ">
                    <Form onSubmit={handelSubmitValidate}>

                        <TextInput onChange={onChange } label={"کد فعال سازی"} id={'verificationCode'}
                                   placeholder={"****"} type={"number"}
                                   is_required={true} value={values}
                                   error={error.verificationCode}/>

                        <button
                            className="btn green-background  br10px text-white col-5 text-center h-input-s col-md-6 col-sm-12 sendButton-shadow mt-2"
                            type="submit">{"اسال کد"}
                        </button>
                        {
                            count<0?<p onClick={HandelResend}>ارسال دوباره کد </p>:<p>ارسال دوباره کد در {count} ثانیه </p>
                        }

                    </Form>

                </Col>
            </div>
        </div>
    );
};

export default ValidateParentForm;