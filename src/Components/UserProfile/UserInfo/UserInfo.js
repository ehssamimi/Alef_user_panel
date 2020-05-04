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
import {checkCodeMeli, getCity} from "../../../Common/JS-Function/Js-common-function";
import profile from './../../../Common/img/Profile Picture.png'
import {GetUserDropDown, GetUserProfile, UpdateProfile, UploadProfileImg} from "../../../Common/Const/ServerConnection";

import Loader from "../../Common/Loader/Loader";
import 'react-notifications/lib/notifications.css';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import HeaderTopWithRightMenu from "../../Common/Header-top/HeaderTopWithRightMenu/HeaderTopWithRightMenu";
import {getProfileValue, validatephoneNumber} from "../../functions/componentHelpFunction";
import ModalCustomVideo from "../../Common/Modal/ModalCustom";
import ValidateParentForm from "./ValidateParentForm";
import validator from "validator";

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
    const [error, seterror] = useState({"name": "","ID":"","country":"","city":"","parent_num":"","parent_name":""});
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
    const validateForm=(callback)=> {
        let errors={"name": "","ID":"","country":"","city":"","parent_num":"","parent_name":""};

        let formValidate=true;
        

            if(values.ID!=="" && values.ID!==null){
                if (values.ID.length!==10){
                    formValidate = false;
                    errors['ID']="کد ملی شما نا معتبر است ";
                }
            }

        if ( values.country==="انتخاب استان"){
            formValidate = false;
            errors['country']="استان مورد نظر را انخاب کنید ";
        }
        if (values.city!=="" && values.city!==null && values.city!=="انتخاب شهر"){
            formValidate = false;
            errors['city']="شهر مورد نظر را انخاب کنید ";
        }

        if (values.parent_name!=="" && values.parent_name!==null  ){

            if (values.parent_num === "" || values.parent_num === null) {
                formValidate = false;
                errors['parent_num'] = "شماره والد باید وارد شود  ";
            }
            if (values.parent_num!==null)  {
                if (values.parent_num.length !== 11) {
                    formValidate = false;
                    errors['parent_num'] = "شماره تلفن باید 11 رقمی باشد  ";
                }
            }
        };

        if (values.parent_num!=="" && values.parent_num!==null  ){

            if (values.parent_name === "" || values.parent_name === null) {
                formValidate = false;
                errors['parent_name'] = "نام والد باید وارد شود  ";
            }

        };


        // values.ID!=="" && values.ID!==null


        // if (validator.isEmpty(values.name)) {
        //     formValidate = false;
        //     errors['name']="نام خود را وارد کنید ";
        // }
        // if (validator.isEmpty(values.phoneNumber)) {
        //     formValidate = false;
        //     errors['phoneNumber']="شماره تلفن همراه خود را وارد کنید  ";
        // }else if (!validatephoneNumber(values.phoneNumber)) {
        //     formValidate = false;
        //     errors['phoneNumber']="شماره ای که وارد کرده اید غیر مجاز است !  ";
        // }
        // if (validator.isEmpty(values.class)) {
        //     formValidate = false;
        //     errors['class']="پایه تحصیلی خود را انتخاب کنید";
        // }
        // if (nessesery){
        //     if (validator.isEmpty(values.fields)) {
        //         formValidate = false;
        //         errors['fields']="پایه تحصیلی خود را انتخاب کنید";
        //     }
        // }


        seterror(errors);
        return callback(formValidate)
    };
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

        validateForm(async (validate)=> {

            if (validate) {
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

            //     ID: "2092204971"
            //     Schoolkind: null
            //     average_num: null
            //     city: null
            // class: "ششم (تیزهوشان)"
            //     country: null
            //     fields: null
            //     name: "مهدیه"
            //     parent_name: null
            //     parent_num: null
            //     parent_verify: false
            //     phoneNumber: "09111581421"
            //     profile_img: "http









                let Data={
                    "personal_info": {
                        "name": values.name,
                    },
                    "education": {
                        "grade": values.class,
                    }
                };
                if (values.ID!=="" && values.ID!==null){
                        Data["personal_info"]["ssn"]=values.ID;
                }

                if (values.fields!=="" && values.fields!==null){
                        Data["education"]["fields"]=values.fields;
                }
                if (values.average_num!=="" && values.average_num!==null){
                        Data["education"]["gpa"]=values.average_num;
                }
                if (values.schoolName!=="" && values.schoolName!==null){
                        Data["education"]["school_name"]=values.schoolName;
                }
                if (values.Schoolkind!=="" && values.Schoolkind!==null){
                        Data["education"]["school_type"]=values.Schoolkind;
                }
                if (values.Schoolkind!=="انتخاب نوع مدرسه" && values.Schoolkind!==null){
                        Data["education"]["school_type"]=values.Schoolkind;
                }
                if ((values.parent_name!=="" && values.parent_name!==null)|| (values.parent_num!=="" && values.parent_num!==null)){
                    Data["parent"] ={};
                    if (values.parent_name!=="" && values.parent_name!==null){
                        Data["parent"]["name"]=values.parent_name;
                    }
                    if (values.parent_num!=="" && values.parent_num!==null){
                        Data["parent"]["phone_number"]=values.parent_num;
                    }
                }
                if ((values.country!=="" && values.country!==null  )||(values.city!=="" && values.city!==null  )) {

                    Data["address"] ={};
                    if (values.country!=="" && values.country!==null  ){
                        Data["address"]["province"]=values.country;
                    }
                    if (values.city!=="" && values.city!==null  ){
                        Data["address"]["city"]=values.city;
                    }
                }







                //
                // let Data={
                //     "personal_info": {
                //         "name": values.name,
                //         "ssn": values.ID
                //     },
                //     "education": {

                //         "school_name": values.schoolName,
                //         "school_type": values.Schoolkind
                //     },
                //     "parent": {
                //         "name": values.parent_name,
                //         "phone_number": values.parent_num
                //     },
                //     "address": {
                //         "province": values.country,
                //         "city": values.city
                //     }
                // };
                 // console.log(JSON.stringify(Data));




                console.log(Data);


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





            }
        })

        
        
        


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
                                                           error={""}/>
                                            {
                                                (values.class === "دهم" || values.class === "یازدهم" || values.class === "دوازدهم" || values.class === "طرح"|| values.class === "طرح انسانی"  || values.class === "فارغ التحصیل" || values.class === "دوازدهم (کنکوری)")?
                                                    <SelectedInput onChange={onChange} label={'رشته تحصیلی'} id={'fields'}
                                                                   type={"select"}
                                                                   is_required={true} value={values.fields} options={options.field_type}
                                                                   error={""}


                                                    />:''

                                            }



                                        </Col>
                                    </div>

                                    <div className="w-100 mt-5 ">
                                        <div className="row m-0 w-100">
                                            <Col sm={12} md={5}
                                                 className="d-flex   flex-column justify-content-between   ml-r-auto   ">

                                                <SelectedInput onChange={onChange} label={'استان'} id={'country'}
                                                               type={"select"} is_required={false}
                                                               value={values.country}
                                                               error={error.country} options={country}/>

                                                <TextInput onChange={onChange} label={'نام مدرسه'} id={'schoolName'}
                                                           placeholder={"نام مدرسه"} type={"text"} is_required={false}
                                                           value={values.schoolName}
                                                           error={""}/>
                                                <TextInput onChange={onChange} label={'شماره ملی'} id={'ID'}
                                                           placeholder={"شماره ملی"} type={"number"} is_required={false}
                                                           value={values.ID}
                                                           error={error.ID}/>
                                                <TextInput onChange={onChange} label={'نام پدر یا مادر'}
                                                           id={'parent_name'}
                                                           placeholder={"نام پدر یا مادر"} type={"text"}
                                                           is_required={false} value={values.parent_name}
                                                           error={""}/>


                                            </Col>
                                            <Col sm={12} md={5}
                                                 className="d-flex   flex-column justify-content-between   ml-r-auto   ">
                                                <SelectedInput onChange={onChange} label={'شهر'} id={'city'}
                                                               type={"select"} is_required={false} value={values.city}
                                                               error={error.city} options={citys} disable={values.country === null}/>
                                                <SelectedInput onChange={onChange} label={'نوع مدرسه '}
                                                               id={'Schoolkind'}
                                                               type={"select"} is_required={false}
                                                               value={values.Schoolkind}
                                                               error={""} options={options.school_type}/>

                                                <TextInput onChange={onChange} label={'معدل سال تحصیلی قبل'}
                                                           id={'average_num'}
                                                           placeholder={"معدل"} type={"text"}
                                                           is_required={false} value={values.average_num}
                                                           error={""}/>
                                                {/*<TextInput onChange={onChange} label={'معدل سال تحصیلی قبل'}*/}
                                                           {/*id={'average_num'}*/}
                                                           {/*placeholder={"معدل"} type={"text"} is_required={false}*/}
                                                           {/*value={values.average_num}*/}
                                                           {/*error={error.name}/>*/}
                                                <TextInput onChange={onChange} label={'شماره پدر یا مادر'}
                                                           id={'parent_num'} changeEdit={true}  nessaryLabel={'شماره والد باید اعتبار سنجی شود'} red={!values.parent_verify}
                                                           placeholder={values.parent_verify? "شماره اعتبار سنجی شده است" : "شماره والد باید اعتبار سنجی شود"} type={"number"}
                                                           is_required={false} value={values.parent_num}  validate={ ()=>{setIsOpenModal(!isOpenModal)}}
                                                           error={error.parent_num}/>
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