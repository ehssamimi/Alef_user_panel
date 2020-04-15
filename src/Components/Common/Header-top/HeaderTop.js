import MainHeader from "../../Main/Main-Header/MainHeader";
import React from "react";
import {NotificationContainer} from "react-notifications";
import BuyFooter from "../BuyFooter/BuyFooter";


const HeaderTop = (props) => {


    return (
        <div className="w-100 d-flex justify-content-center">
            <div className="header-top">

            </div>
            <MainHeader>
                {props.children }
            </MainHeader>
             <BuyFooter price={2000} off={0.3}/>
            <NotificationContainer />
        </div>
    );
};

export default HeaderTop;