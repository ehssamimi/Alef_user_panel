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
import {GetUserDropDown, GetUserProfile} from "../../../Common/Const/ServerConnection";

import Loader from "../../Common/Loader/Loader";
import 'react-notifications/lib/notifications.css';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import HeaderTopWithRightMenu from "../../Common/Header-top/HeaderTopWithRightMenu/HeaderTopWithRightMenu";

export default function UserInfo(props) {
    const [isLoder, setisLoder] = useState(true);
    const [error, seterro] = useState({"name": ""});
    const [values, setvalues] = useState({
        "name": "احسان صمیمی راد",
        "class": "یازدهم",
        "fields": "ریاضی و فیزیک",
        "country": "",
        "city": "",
        "schoolName": "",
        "Schoolkind": "",
        "ID": "",
        "average_num": "",
        "parent_name": "",
        "parent_num": ""
    });
    const [options, setOptions] = useState({
        "school_type": [], "field_type": [], "grade_type": []
    });
    const [DefaultValue, setDefaultValue] = useState({
        "name": "احسان صمیمی راد",
        "class": "یازدهم",
        "fields": "علوم تجربی",
        "country": "",
        "city": "",
        "schoolName": "",
        "Schoolkind": "نیمه دولتی",
        "ID": "",
        "average_num": "7/5",
        "parent_name": "",
        "parent_num": ""
    });

    const [citys, setcitys] = useState(Ardebil);
    useEffect(  () => {

        async function getUserDropDown(user_id) {

            const {state, Description}=await GetUserDropDown();
            if (state===200 ) {
                setisLoder(false)
                const option={
                    "school_type":Description.school_type, "field_type":Description.field_type, "grade_type":Description.grade_type
                };
                setOptions(option);

            } else {
                NotificationManager.success(state, Description);
                setisLoder(false);
                // error_Notification(state,Description)
            }
            // console.log(UserDropDown)

        }
        async function getUserInfo(user_id) {

            const {state, Description}=await GetUserProfile();
            if (state===200 ) {
                setisLoder(false);
                console.log(Description);

            } else {
                NotificationManager.success(state, Description);
                setisLoder(false);
                // error_Notification(state,Description)
            }
            // console.log(UserDropDown)

        }
        setisLoder(true);
        getUserDropDown();


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
    const handelSubmit = (e) => {
        e.preventDefault();
        console.log('values');
        console.log(values)
    };
    const handelDiscard = () => {
        setvalues(DefaultValue)
    };


    return (
        <HeaderTopWithRightMenu>

            <div className="mt-5 col-12 ml-auto mr-auto">
                <HeaderNavigation content={{"main": "اطلاعات کاربری", "branch": "ویرایش پروفایل"}}/>
                <Card className="mb-4">
                    <CardBody>
                        {
                            isLoder?   // *******checking for submit form or get category Option is then loader start then loader close**********
                                <div className='d-flex justify-content-center align-items-center'>
                                    <div className='col-6'>
                                        <Loader/>
                                    </div>
                                </div>
                                :<Form onSubmit={handelSubmit}>
                                    <div className="row m-0  w-100">
                                        <Col sm={12} md={5}
                                             className=" d-flex   flex-column justify-content-around ml-r-auto  ">
                                            <div className="w-100">
                                                <img src={profile} alt={profile} className="img-self-fill"/>
                                            </div>
                                            <div className="w-100">
                                                <button
                                                    className="btn green-background  br10px text-white col-6 offset-3">آپلود
                                                    عکس
                                                </button>
                                            </div>
                                        </Col>
                                        <Col sm={12} md={5}
                                             className="d-flex   flex-column justify-content-between   ml-r-auto   ">

                                            <TextInput onChange={onChange} label={'نام و نام خانوادگی'} id={'name'}
                                                       placeholder={"نام و نام خانوادگی"} type={"text"}
                                                       is_required={true} value={values.name}
                                                       error={error.name}/>

                                            <FormGroup className=" ">
                                                <Label for={'phoneNumber'}>
                                                    <span>{'شماره تلفن' + ':'}</span>
                                                    <span className="red-color">{'( غیر قابل تغییر )'}</span>
                                                </Label>
                                                <InputGroup>
                                                    <Input value={9112561701} type={'number'} name={'phoneNumber'}
                                                           id={'phoneNumber'}/>
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

                                    <div className="w-100 ">
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
                                                           placeholder={"معدل"} type={"text"} is_required={false}
                                                           value={values.average_num}
                                                           error={error.name}/>
                                                <TextInput onChange={onChange} label={'شماره پدر یا مادر'}
                                                           id={'parent_num'}
                                                           placeholder={"شماره تماس پدر یا مادر"} type={"number"}
                                                           is_required={false} value={values.parent_num}
                                                           error={error.name}/>
                                            </Col>
                                        </div>
                                        <div className="col-12 row mt-4">


                                            <div className='col-md-6 col-sm-12'>

                                            </div>
                                            <div className='col-md-6 col-sm-12  d-flex justify-content-between'>
                                                <button
                                                    className="btn green-background  br10px text-white col-5  h-input-s"
                                                    onClick={handelDiscard}>لغو تغییرات
                                                </button>
                                                <button
                                                    className="btn green-background  br10px text-white col-5 h-input-s "
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
            <NotificationContainer />
        </HeaderTopWithRightMenu>




    )
};