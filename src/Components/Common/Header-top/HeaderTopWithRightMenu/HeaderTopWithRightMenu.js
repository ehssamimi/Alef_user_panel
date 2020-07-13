import React  from 'react';
import MainHeader from "../../../Main/Main-Header/MainHeader";
import RightMenu from "../../../UserProfile/RightMenu/RightMenu";
import UrlProvider from "../../Context/UrlProvider";
import {NotificationContainer} from "react-notifications";
import MetaTagsComponent from "../../MetaTags/MetaTagsComponent";

const HeaderTopWithRightMenu = (props) => {


    return (
      <UrlProvider {...props}>
          <MetaTagsComponent/>
        <div className="w-100 d-flex justify-content-center">
            <div className="header-top">

            </div>
            <RightMenu  {...props} >
            <MainHeader   >
                {props.children }
            </MainHeader>
            </RightMenu>
            <NotificationContainer />
        </div>
       </UrlProvider>
    );
};

export default HeaderTopWithRightMenu;