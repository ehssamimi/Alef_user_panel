import React, {useState, useEffect} from 'react';
import {formatNumber} from "../../../Common/JS-Function/Js-common-function";
import CheckBoxCustom from "../CheckBoxCustom/CheckBoxCustom";
import {Collapse, Form} from "reactstrap";
import {FaMinus, FaPlus} from "react-icons/fa";


const BuyFooter = (props) => {
    const [collapse, setcollapse,] = useState(false);
    let{price,off}=props

    let grad="پایه یازدهم"
    let field="ریاضی و فیزیک"
    let chapter="فصل 5:استوکیومتری "
    let course="شیمی "
    return (
        <div className="buy-footer   " dir="rtl">
            <div className="HomePage ml-r-auto">
                <div className='  w-100' >
                    <div className='d-flex justify-content-start align-items-center ' onClick={()=>{setcollapse(!collapse)}} >
                        {
                            collapse?

                               <span className="d-flex">
                                   <span className= ' border-Carousel p-2 mr-3' ><FaMinus/></span>
                                   <span className='  fs-lesion '>خرید های شما  </span>
                               </span>

                                :
                                <div>
                                        <span className="d-flex">
                                    <span className=' border-Carousel p-2 mr-3'> <FaPlus/></span>
                                    <span className='  fs-lesion '>خرید های شما  </span>
                                </span>
                                    <span className="d-flex ml-5"><span className="mr-2">3</span><span> دسته بندی انتخاب شده است </span></span>

                                </div>



                        }

                        <div className="d-flex  ml-auto ">


                            <div className="ml-auto row">

                                <button
                                    className="btn green-background  br10px text-white   h-input-s   pl-2 pr-2 mt-1 mb-1   sendButton-shadow  "
                                    type="submit">
                                    <span>تاییید و پرداخت </span>
                                    <span className="ml-5">{formatNumber(price)} <span className="ml-1">تومن</span> </span>

                                </button>
                                {/*<span className='red-color text-decoration-line-through  mr-2 fs15rem    '>{formatNumber(price)} تومن  </span>*/}
                                {/*{off!==0?<span className='header-color   fs15rem   '>{formatNumber(price*off)} تومن  </span>:""}*/}
                            </div>




                        </div>
                        



                    </div>


                </div>
                <Collapse isOpen={ collapse}>
                    <div   className='w-100' dir="rtl">
                        <div className="d-flex">
                            {<span className="second-color">{course}</span>}
                            {grad?<span className="second-color"><span className="second-color ml-2"> | </span>{grad}</span>:""}
                            {field?<span className="second-color"><span className="second-color ml-2"> | </span>{field}</span>:""}
                            {chapter?<span className="second-color"><span className="second-color ml-2"> | </span>{chapter}</span>:""}

                        </div>

                    </div>
                </Collapse>




            </div>
        </div>
    );
};

export default BuyFooter;