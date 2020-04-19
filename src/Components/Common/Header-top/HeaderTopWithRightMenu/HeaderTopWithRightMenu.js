import React, {useState, useEffect} from 'react';
import MainHeader from "../../../Main/Main-Header/MainHeader";
import RightMenu from "../../../UserProfile/RightMenu/RightMenu";
import UrlProvider from "../../Context/UrlProvider";

const HeaderTopWithRightMenu = (props) => {
    const [count, setCount] = useState(1);
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
    });

    return (
        <UrlProvider {...props}>
        <div className="w-100 d-flex justify-content-center">
            <div className="header-top">

            </div>
            <RightMenu   >
            <MainHeader   >
                {props.children }
            </MainHeader>
            </RightMenu>
        </div>
        </UrlProvider>
    );
};

export default HeaderTopWithRightMenu;