import React, {useState, useEffect, useRef, useContext} from 'react';
import {formatNumber} from "../../../Common/JS-Function/Js-common-function";
import CheckBoxCustom from "../CheckBoxCustom/CheckBoxCustom";
import {Collapse, Form} from "reactstrap";
import {FaMinus, FaPlus} from "react-icons/fa";
import {Power4, TweenMax} from "gsap/TweenMax";
 import {BuyContext} from "../Context/BuyProvider";







const BuyFooter = (props) => {
    const Buy=useContext(BuyContext);
    const [collapse, setcollapse,] = useState(false);
    const [products, setProducts] = useState( );
    // const [product , setProduct ] = useState( );

    // setProduct(Object.values(Buy.buy.content));
    // console.log(Buy);
    let{price,off}=props;

    useEffect(() => {
        if (Buy.buy.content.length>0){

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



    const handleChange = (e) => {
 e.preventDefault();

        // console.log("basket")
        // console.log(cookie.load('basket'))


    };


    console.log("BUUUUYYYYYYYYYYYYYYY");

    let product =Buy.buy.content
    console.log(product);

    return (
        <div className="buy-footer " style={{minHeight:0}} dir="rtl" id="footer">
            <div className="HomePage ml-r-auto">
                <div className='  w-100' >
                    <div className='d-flex justify-content-start align-items-center ' onClick={()=>{setcollapse(!collapse)}} >
                        {
                            collapse?

                               <span className="d-flex">
                                   <span className= ' border-Carousel p-2 mr-3' ><FaMinus/></span>
                                   <span className='  fs-lesion '>خرید های شما   </span>
                               </span>

                                :
                                <div>
                                        <span className="d-flex">
                                    <span className=' border-Carousel p-2 mr-3'> <FaPlus/></span>
                                    <span className='  fs-lesion '>خرید های شما  </span>
                                </span>
                                    <span className="d-flex ml-5"><span className="mr-2">{Buy.buy.content.length}</span><span> دسته بندی انتخاب شده است </span></span>

                                </div>

                        }

                        <div className="d-flex  ml-auto ">


                            <div className="ml-auto row">

                                <button
                                    className="btn green-background  br10px text-white   h-input-s   pl-2 pr-2 mt-1 mb-1   sendButton-shadow  "
                                    type="submit" onClick={handleChange}>
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
                        {
                            product.map((item,index)=>

                                <div className="d-flex" key={index}>
                                    {<span className="second-color">{item.course_name}</span>}
                                    {item.grade?<span className="second-color"><span className="second-color ml-2"> | </span>{item.grade}</span>:""}
                                    {item.field?<span className="second-color"><span className="second-color ml-2"> | </span>{item.field}</span>:""}
                                    {/*{chapter?<span className="second-color"><span className="second-color ml-2"> | </span>{chapter}</span>:""}*/}

                                </div>

                            )
                        }


                    </div>
                </Collapse>




            </div>
        </div>
    );
};

export default BuyFooter;


