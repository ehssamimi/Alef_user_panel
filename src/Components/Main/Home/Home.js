
import React, {useState, useEffect} from 'react';
import HeaderTop from "../../Common/Header-top/HeaderTop";

const Home = (props) => {
    // const [count, setCount] = useState(1);
    // useEffect(() => {
    //     // Update the document title using the browser API
    //     document.title = `You clicked ${count} times`;
    // });

    return (
        <HeaderTop {...props} isBuy={false}>
            this is header
        </HeaderTop>
    );
};

export default Home;

