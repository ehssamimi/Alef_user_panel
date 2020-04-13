import MainHeader from "../../Main/Main-Header/MainHeader";
import React from "react";


const HeaderTop = (props) => {


    return (
        <div className="w-100 d-flex justify-content-center">
            <div className="header-top">

            </div>
            <MainHeader>
                {props.children }
            </MainHeader>
        </div>
    );
};

export default HeaderTop;