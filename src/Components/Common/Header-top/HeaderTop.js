import MainHeader from "../../Main/Main-Header/MainHeader";
import React from "react";
import {NotificationContainer} from "react-notifications";
import BuyFooter from "../BuyFooter/BuyFooter";
import UrlProvider from "../Context/UrlProvider";


const HeaderTop = (props) => {


    return (
        <UrlProvider {...props}>
        <div className="w-100 d-flex justify-content-center">
            <div className="header-top">

            </div>
            <MainHeader {...props}>
                {props.children }
            </MainHeader>
             <BuyFooter price={2000} off={0.3}/>
            <NotificationContainer />

        </div>
        </UrlProvider>
    );
};

export default HeaderTop;