import React, {useState, useEffect} from 'react';
import MainHeader from "../../../Main/Main-Header/MainHeader";
import RightMenu from "../../../UserProfile/RightMenu/RightMenu";

const HeaderTopWithRightMenu = (props) => {
    const [count, setCount] = useState(1);
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
    });

    return (
        <div className="w-100 d-flex justify-content-center">
            <div className="header-top">

            </div>
            <RightMenu>
            <MainHeader>
                {props.children }
            </MainHeader>
            </RightMenu>
        </div>
    );
};

export default HeaderTopWithRightMenu;