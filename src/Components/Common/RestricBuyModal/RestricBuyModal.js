import React, {useState, useEffect} from 'react';
import ModalCustomVideo from "../Modal/ModalCustom";
import HeaderTop from "../Header-top/HeaderTop";
import { IoIosCloseCircleOutline } from "react-icons/io";

const RestricBuyModal = (props) => {


    return (
        <ModalCustomVideo isOpen={props.isOpen} toggle={props.toggle }>
            <div className=" d-flex flex-column justify-content-center  align-items-center FssubmitLogin text-left p-4 " style={{minHeight:"250px"}}>
                <p className=" red-color " style={{fontSize:"5vw"}}><IoIosCloseCircleOutline/></p>
                 متاسفانه امکان خرید در حال حاظر امکان پذیر نمی باشد

                {/*<p><span>🌻</span>  از بابت تاخیر عذرخواهیم</p>*/}

            </div>
            <div className="w-100 text-center  d-flex justify-content-center">
                <button className="btn green-background FssubmitLogin col-3 m-3 text-white br20px" onClick={ props.toggle }>بستن</button>
            </div>

        </ModalCustomVideo>
    );
};

export default RestricBuyModal;