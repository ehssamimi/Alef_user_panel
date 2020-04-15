import MainHeader from "../../Main/Main-Header/MainHeader";
import React from "react";
import {NotificationContainer} from "react-notifications";


const HeaderTop = (props) => {


    return (
        <div className="w-100 d-flex justify-content-center">
            <div className="header-top">

            </div>
            <MainHeader>
                {props.children }
            </MainHeader>
            <NotificationContainer />
        </div>
    );
};

export default HeaderTop;