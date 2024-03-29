import MainHeader from "../../Main/Main-Header/MainHeader";
import React from "react";
import {NotificationContainer} from "react-notifications";
import BuyFooter from "../BuyFooter/BuyFooter";
import UrlProvider from "../Context/UrlProvider";
import cookie from "react-cookies";
import MetaTagsComponent from "../MetaTags/MetaTagsComponent";




const HeaderTop = (props) => {
    let{isBuy}=props;


    return (
        <UrlProvider {...props}>
            <MetaTagsComponent/>

        <div className="w-100 d-flex justify-content-center">
            <div className="header-top">

            </div>
            <MainHeader {...props}>
                {props.children }
            </MainHeader>
            {
                isBuy?<BuyFooter price={2000} off={0.3} data={cookie.load('basket')}/>:""
            }

            <NotificationContainer />

        </div>

        </UrlProvider>
    );
};

export default HeaderTop;