import React, {useState, useEffect} from 'react';
import MainHeader from "../../Main/Main-Header/MainHeader";
import {
    Col,
    Row,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormFeedback,
    Card,
    CardBody,
    InputGroup,
    InputGroupAddon,
    InputGroupText
} from 'reactstrap';
import {country, Ardebil} from './../../../Common/Const/cityAndCountery'

import {FaLock} from "react-icons/fa";

import RightMenu from "../RightMenu/RightMenu";
import HeaderNavigation from "../../Common/HeaderNavigation/HeaderNavigation";
import {SelectedInput, TextInput} from "../../Common/Forms/textInput/TextInput";
import {getCity} from "../../../Common/JS-Function/Js-common-function";
import profile from './../../../Common/img/Profile Picture.png'
import {GetUserDropDown, GetUserProfile, UpdateProfile, UploadProfileImg} from "../../../Common/Const/ServerConnection";

import Loader from "../../Common/Loader/Loader";
import 'react-notifications/lib/notifications.css';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import HeaderTopWithRightMenu from "../../Common/Header-top/HeaderTopWithRightMenu/HeaderTopWithRightMenu";
import {getProfileValue} from "../../functions/componentHelpFunction";
import ModalCustomVideo from "../../Common/Modal/ModalCustom";
import ValidateParentForm from "./ValidateParentForm";

const DefaultUser={

    "name": "",
    "profile_img":"" ,
    "phoneNumber":"",
    "ID": "",
    "class": "",
    "fields": "",
    "average_num": 0,
    "schoolName": "",
    "Schoolkind": "",
    "country": "",
    "city": "",
    "parent_name": "",
    "parent_num": "",
    "parent_verify":true
}

export default function UserInfo(props) {
    const [isLoder, setisLoder] = useState(true);
    const [error, seterro] = useState({"name": ""});
    const [values, setvalues] = useState(DefaultUser);
    const [options, setOptions] = useState({
        "school_type": [], "field_type": [], "grade_type": []
    });
    const [DefaultValue, setDefaultValue] = useState(DefaultUser);
    const [ImgValue, setImgValue] = useState({data:null,file:null});
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [count, setcount] = useState(0);




    const [citys, setcitys] = useState(Ardebil);
    useEffect(  () => {
        console.log(localStorage.getItem("token"));
        async function getUserDropDown(user_id) {

            const {state, Description}=await GetUserDropDown();
            if (state===200 ) {
                // setisLoder(false)
                const option={
                    "school_type":Description.school_type, "field_type":Description.field_type, "grade_type":Description.grade_type
                };
                setOptions(option);

            } else {
                NotificationManager.success(state, Description);
                // setisLoder(false);
                // error_Notification(state,Description)
            }
            // console.log(UserDropDown)

        }
        async function getUserInfo(token) {

            const {state, Description}=await GetUserProfile();
            if (state===200 ) {
                setisLoder(false);
                console.log(Description);
                let ItemValue=[Description.personal_info.name,Description.profile.image_id,Description.education.grade]
                localStorage.setItem("user_alef",ItemValue);

                let values=getProfileValue(Description);
                let city = getCity(values.country);
                setcitys(city)

                console.log(values);
                setvalues(values);
                setDefaultValue(values);
                setImgValue({data:values.profile_img,file:null});
            } else {
                NotificationManager.success(state, Description);
                setisLoder(false);
            }
            // console.log(UserDropDown)

        }
        setisLoder(true);
        getUserDropDown();
        getUserInfo();


    },[]);
    const onChange = (value, names) => {

        setvalues({...values, [names]: value});

        if (names === "country") {
            let city = getCity(value);
            setcitys(city)
        }
        // console.log(values);
        // console.log(names);
    };
    const HandelImg=(e)=>{
        let file=e.target.files;
        let DATA=file[0];
        if (file && file.length > 0) {
            const reader = new FileReader();
            reader.addEventListener("load", () =>
                setImgValue({data:reader.result,file:DATA})
            );
            reader.readAsDataURL(e.target.files[0]);
        }
    };
    const handelSubmit = async (e) => {
        e.preventDefault();
        console.log(values);
        setisLoder(true);
         if (ImgValue.file!==null) {
             console.log("img-profile");
             let {state, Description}=await UploadProfileImg(ImgValue.file);
             if (state!==200){
                 setisLoder(false);
                 NotificationManager.error(state, Description);
             }
         }
        let Data={
            "personal_info": {
                "name": values.name,
                "ssn": values.ID
            },
            "education": {
                "grade": values.class,
                "field": values.fields,
                "gpa": values.average_num,
                "school_name": values.schoolName,
                "school_type": values.Schoolkind
            },
            "parent": {
                "name": values.parent_name,
                "phone_number": values.parent_num
            },
            "address": {
                "province": values.country,
                "city": values.city
            }
        };
         // console.log(JSON.stringify(Data))


        let {state, Description}=await UpdateProfile(JSON.stringify(Data));
        console.log(Description);
        if (Description.message==="parent_phone_changed"){
            setcount(10);
            setIsOpenModal(true)
        }


        setisLoder(false);

        if (state===200 ) {
            NotificationManager.success("تبریک!!", "اطلاعات کاربری با موفقیت ثبت شد ");
        } else {
            NotificationManager.error(state, Description);
        }

    };
    const handelDiscard = (e) => {
        e.preventDefault();
        setvalues(DefaultValue)
    };
    return (
        <HeaderTopWithRightMenu  {...props}>

            <div className="mt-5 col-12 ml-auto mr-auto p-0">
                <HeaderNavigation content={{"main": "اطلاعات کاربری", "branch": "ویرایش پروفایل"}}/>
                <Card className="mb-4 box-shadow-custom border-0 br20px mt-4">
                    <CardBody>
                        {
                            isLoder?   // *******checking for submit form or get category Option is then loader start then loader close**********
                                <div className='d-flex justify-content-center align-items-center'>
                                    <div className='col-6'>
                                        <Loader/>
                                    </div>
                                </div>
                                :<Form onSubmit={handelSubmit} className="formUpdateUser">
                                    <div className="row m-0  w-100">
                                        <Col sm={12} md={5}
                                             className=" d-flex   flex-column justify-content-around ml-r-auto  ">
                                            <div className="w-100  ">
                                                <img src={ImgValue.data?ImgValue.data:profile} alt={profile} className="img-self-fill br20px"/>
                                                {/*<img src={profile} alt={profile} className="img-self-fill"/>*/}
                                            </div>
                                            <div className="w-100 mt-3 mb-3">
                                                <label
                                                    className="btn green-background  br10px text-white  col-md-6 col-sm-12 offset-md-3 sendButton-shadow" htmlFor="upload_img">آپلود
                                                    عکس
                                                </label>
                                                <input type="file" id="upload_img" className={"d-none"} onChange={HandelImg} />
                                            </div>
                                        </Col>
                                        <Col sm={12} md={5}
                                             className="d-flex   flex-column justify-content-between   ml-r-auto   ">

                                            <TextInput onChange={onChange} label={'نام و نام خانوادگی'} id={'name'}
                                                       placeholder={"نام و نام خانوادگی"} type={"text"}
                                                       is_required={true} value={values.name}
                                                       error={error.name}/>

                                            <FormGroup className=" ">
                                                <Label for={'phoneNumber'} className="FsFooterLogin">
                                                    <span>{'شماره تلفن'}</span>
                                                    <span className="red-color">{'(غیر قابل تغییر)'}</span>
                                                </Label>
                                                <InputGroup>
                                                    <span className="form-control d-flex align-items-center">{values.phoneNumber}</span>
                                                    {/*<Input value={values.phoneNumber} type={'text'} name={'phoneNumber'}*/}
                                                           {/*id={'phoneNumber'} />*/}
                                                    <InputGroupAddon addonType="append">
                                                        <InputGroupText><FaLock/></InputGroupText>
                                                    </InputGroupAddon>
                                                </InputGroup>
                                            </FormGroup>

                                            <SelectedInput onChange={onChange} label={'پایه تحصیلی'} id={'class'}
                                                           type={"select"}
                                                           is_required={true} value={values.class} options={options.grade_type}
                                                           error={error.name}/>

                                            <SelectedInput onChange={onChange} label={'رشته تحصیلی'} id={'fields'}
                                                           type={"select"}
                                                           is_required={true} value={values.fields} options={options.field_type}
                                                           error={error.name}/>

                                        </Col>
                                    </div>

                                    <div className="w-100 mt-5 ">
                                        <div className="row m-0 w-100">
                                            <Col sm={12} md={5}
                                                 className="d-flex   flex-column justify-content-between   ml-r-auto   ">

                                                <SelectedInput onChange={onChange} label={'استان'} id={'country'}
                                                               type={"select"} is_required={false}
                                                               value={values.country}
                                                               error={error.name} options={country}/>

                                                <TextInput onChange={onChange} label={'نام مدرسه'} id={'schoolName'}
                                                           placeholder={"نام مدرسه"} type={"text"} is_required={false}
                                                           value={values.schoolName}
                                                           error={error.name}/>
                                                <TextInput onChange={onChange} label={'شماره ملی'} id={'ID'}
                                                           placeholder={"شماره ملی"} type={"number"} is_required={false}
                                                           value={values.ID}
                                                           error={error.name}/>
                                                <TextInput onChange={onChange} label={'نام پدر یا مادر'}
                                                           id={'parent_name'}
                                                           placeholder={"نام پدر یا مادر"} type={"text"}
                                                           is_required={false} value={values.parent_name}
                                                           error={error.name}/>


                                            </Col>
                                            <Col sm={12} md={5}
                                                 className="d-flex   flex-column justify-content-between   ml-r-auto   ">
                                                <SelectedInput onChange={onChange} label={'شهر'} id={'city'}
                                                               type={"select"} is_required={false} value={values.city}
                                                               error={error.name} options={citys}/>
                                                <SelectedInput onChange={onChange} label={'نوع مدرسه '}
                                                               id={'Schoolkind'}
                                                               type={"select"} is_required={false}
                                                               value={values.Schoolkind}
                                                               error={error.name} options={options.school_type}/>

                                                <TextInput onChange={onChange} label={'معدل سال تحصیلی قبل'}
                                                           id={'average_num'}
                                                           placeholder={"معدل"} type={"text"}
                                                           is_required={false} value={values.average_num}
                                                           error={error.name}/>
                                                {/*<TextInput onChange={onChange} label={'معدل سال تحصیلی قبل'}*/}
                                                           {/*id={'average_num'}*/}
                                                           {/*placeholder={"معدل"} type={"text"} is_required={false}*/}
                                                           {/*value={values.average_num}*/}
                                                           {/*error={error.name}/>*/}
                                                <TextInput onChange={onChange} label={'شماره پدر یا مادر'}
                                                           id={'parent_num'} changeEdit={true}  nessaryLabel={'شماره والد باید اعتبار سنجی شود'} red={!values.parent_verify}
                                                           placeholder={values.parent_verify? "شماره اعتبار سنجی شده است" : "شماره والد باید اعتبار سنجی شود"} type={"number"}
                                                           is_required={false} value={values.parent_num}  validate={ ()=>{setIsOpenModal(!isOpenModal)}}
                                                           error={error.name}/>
                                                {/*{*/}
                                                    {/*values.parent_verify?<span className="green-color">شماره اعتبار سنجی شده است</span>:<span className="red-color cursor-pointer" onClick={()=>{setIsOpenModal(!isOpenModal)}} >شماره والد باید اعتبار سنجی شود</span>*/}
                                                {/*}*/}
                                            </Col>
                                        </div>
                                        <div className="col-12 row ">


                                            <div className='col-md-7 col-sm-12'>

                                            </div>
                                            <div className='  col-md-5 col-sm-12  buttons-Group-signIn'>
                                                <button
                                                    className="btn backgroundLight  br10px text-white col-md-5 col-sm-12 p-0 h-input-s mt-4 FssubmitLogin sendButton-shadow"
                                                    onClick={handelDiscard}>لغو تغییرات
                                                </button>
                                                <button
                                                    className="btn green-background  br10px text-white col-md-5 col-sm-12 p-0 h-input-s mt-4 FssubmitLogin sendButton-shadow"
                                                    type="submit">ثبت تغییرات
                                                </button>
                                            </div>

                                        </div>

                                    </div>
                                </Form>

                        }




                    </CardBody>
                </Card>


            </div>
            <ModalCustomVideo isOpen={isOpenModal} toggle={()=>{setIsOpenModal(!isOpenModal)}} size="sm">
                <ValidateParentForm toggle={()=>{setIsOpenModal(!isOpenModal)}} phoneNumber={values.phoneNumber} count={count}/>

            </ModalCustomVideo>
            <NotificationContainer />
        </HeaderTopWithRightMenu>

    )
};