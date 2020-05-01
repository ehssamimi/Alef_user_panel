import React, {useState, useEffect,   useContext} from 'react';
import {formatNumber} from "../../../Common/JS-Function/Js-common-function";

import {Collapse } from "reactstrap";
import {FaMinus, FaPlus} from "react-icons/fa";
import {  TweenMax} from "gsap/TweenMax";
 import {BuyContext} from "../Context/BuyProvider";
 import {UserContext} from "../Context/UserProvider";
import {CourseBuy} from "../../../Common/Const/ServerConnection";
import {NotificationManager} from "react-notifications";
import {Link} from "react-router-dom";







const BuyFooter = (props) => {
    const Buy=useContext(BuyContext);
    const User=useContext(UserContext);
    const [collapse, setcollapse,] = useState(false);





    useEffect(() => {
        if (Buy.buy.length>0){

            const $el = document.getElementById(`footer`);
            const duration = 2;
            const from = { minHeight: "4rem",height: 'auto'};
            TweenMax.to($el, duration, from);
        } else {
            const $el = document.getElementById(`footer`);
            const duration = 2;
            const from = { height: 0,minHeight: 0};
            TweenMax.to($el, duration, from);
        }
    });



    const handleChange = async (e) => {
 e.preventDefault();

       if (User.isLogIn){


           let Lessons=[]; let row="";let ListBuy={};let chapters=[];
           console.log(Buy.buy)

           Buy.buy.map((item,index)=>{
               if (item.type==="lesson"){
                   row={"course_id":item.content.course_id,"lesson_name":item.content.lesson_name};
                   Lessons.push(row);
               }else{
                   row={"course_id":item.content.course_id,"lesson_name":item.content.lesson_name,'teacher_name':item.content.teacher_name,"chapter_name":item.content.chapter_name};
                   chapters.push(row);
               }
           });
           if (Lessons.length>0){
               ListBuy["lessons"]=Lessons;
           }
           if (chapters.length>0){
               ListBuy["chapters"]=chapters;
           }



           let {state, Description} = await CourseBuy(JSON.stringify(ListBuy));
           if (state === 200) {
               window.open(Description.gateway_url, '_blank');
           }else {
               NotificationManager.error(state, Description);
           }

       }else {
           let login=document.getElementById("login")
           login.click();
       }



    };


    let product =Buy.buy;let Price=0;
    Buy.buy.map((item,index)=>{
        if (item.content.off!==0){

            Price=Price+(item.content.price-(item.content.price*item.content.off))
        } else {


            Price=Price+(item.content.price )
        }

    });

    return (
        <div className="buy-footer FsFooterLogin " style={{minHeight:0}} dir="rtl" id="footer">
            <div className="HomePage ml-r-auto">
                <div className='  w-100' >
                    <div className='d-flex justify-content-start align-items-center ' onClick={()=>{setcollapse(!collapse)}} >
                        {
                            collapse?

                               <span className="d-flex ">
                                   <span className= ' border-Carousel p-2 mr-3' ><FaMinus/></span>
                                   <span className='  fs-lesion '>خرید های شما   </span>
                               </span>

                                :
                                <div>
                                        <span className="d-flex">
                                    <span className=' border-Carousel p-2 mr-3'> <FaPlus/></span>
                                    <span className='  fs-lesion '>خرید های شما  </span>
                                </span>
                                    <span className="d-flex ml-5"><span className="mr-2">{product.length}</span><span> دسته بندی انتخاب شده است </span></span>
                                </div>

                        }

                        <div className="d-flex  ml-auto ">


                            <div className="ml-auto row   ">

                                <button
                                    className="btn green-background  br10px text-white FsFooterLogin  h-input-s   pl-2 pr-2 mt-1 mb-1 d-flex flex-column   sendButton-shadow  "
                                    type="submit" onClick={handleChange}>
                                    <span>تاییید و پرداخت </span>
                                    <span className=" ">{formatNumber(Price)} <span className="ml-1">تومن</span> </span>

                                </button>
                                {/*<span className='red-color text-decoration-line-through  mr-2 fs15rem    '>{formatNumber(price)} تومن  </span>*/}
                                {/*{off!==0?<span className='header-color   fs15rem   '>{formatNumber(price*off)} تومن  </span>:""}*/}
                            </div>




                        </div>




                    </div>


                </div>
                <Collapse isOpen={ collapse}>
                    <div   className='w-100' dir="rtl">
                        {
                            Buy.buy.map((item,index)=>

                                <div className="d-flex" key={index}>
                                    {<span className="second-color">{item.content.course_name}</span>}
                                    {item.content.grade?<span className="second-color"><span className="second-color ml-2"> | </span>{item.content.grade}</span>:""}
                                    {item.content.field?<span className="second-color"><span className="second-color ml-2"> | </span>{item.content.field}</span>:""}
                                    {item.content.lesson_name?<span className="second-color"><span className="second-color ml-2"> | </span>{item.content.lesson_name}</span>:""}
                                    {item.content.teacher_name?<span className="second-color"><span className="second-color ml-2"> | </span>{item.content.teacher_name}</span>:""}
                                    {item.content.chapter_name?<span className="second-color"><span className="second-color ml-2"> | </span>{item.content.chapter_name}</span>:""}
                                    {/*{chapter?<span className="second-color"><span className="second-color ml-2"> | </span>{chapter}</span>:""}*/}

                                </div>

                            )
                        }


                    </div>
                </Collapse>
                <Link to={'/login'} id='login' className="d-none">
                    go to login

                </Link>

            </div>
        </div>
    );
};

export default BuyFooter;


