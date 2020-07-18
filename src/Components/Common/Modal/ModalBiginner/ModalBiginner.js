import React, {useState, useEffect} from 'react';
import ModalCustomVideo from "../ModalCustom";
import HeaderTop from "../../Header-top/HeaderTop";
import {ModalList} from "../../../../Common/Const/ServerConnection";
import {error_Notification} from "../../../functions/componentHelpFunction";

const ModalBiginner = (props) => {
    const [isLoder, setisLoder] = useState(true);
    const [list, setList] = useState({});
    const [isOpenModal, setIsOpenModal] = useState(false);
    useEffect((  ) => {
        async function getmodals( ) {
            let{state,Description}= await ModalList()
            setisLoder(false)
            console.log(Description)
            console.log("props");
            console.log(props);
            if (state===200){
                setList(Description)
                if (Description[props.PopUpType]!==undefined &&   Description[props.PopUpType]!==null){
                    setIsOpenModal(true)
                }

            }else {
                error_Notification(state,Description)
            }

        }

        // console.log("props");
        // console.log(props);
        getmodals()
    }, []);

    return (
        <div>
            <ModalCustomVideo isOpen={isOpenModal} toggle={() => setIsOpenModal(!isOpenModal)}>
                <div className=" d-flex flex-column justify-content-center  align-items-center FsHeaderLogin1 text-left p-4 " style={{minHeight:"250px"}}>
                    <p>سلام دانش آموز کلیدی</p>

                    {
                        (list[props.PopUpType]!==undefined &&   list[props.PopUpType]!==null)?  <p>{list[props.PopUpType]}</p>:""

                    }

                    {/*<p><span>🌻</span>  از بابت تاخیر عذرخواهیم</p>*/}

                </div>
                <div className="w-100 text-center  d-flex justify-content-center">
                    <button className="btn green-background FssubmitLogin col-3 m-3 text-white br20px" onClick={() => setIsOpenModal(!isOpenModal)}>ورود</button>
                </div>



            </ModalCustomVideo>
        </div>
    );
};

export default ModalBiginner;