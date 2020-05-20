
import React, {useState, useEffect} from 'react';
import HeaderTop from "../../Common/Header-top/HeaderTop";
import HomePageFirst from "./subs/HomePageFirst/HomePageFirst";
import HomePageSecond from "./subs/HomePageSecond/HomePageSecond";

const Home = (props) => {
    // const [count, setCount] = useState(1);
    // useEffect(() => {
    //     // Update the document title using the browser API
    //     document.title = `You clicked ${count} times`;
    // });

    return (
        <HeaderTop {...props} isBuy={false}>
            <HomePageFirst/>
            <HomePageSecond/>
            this is header
        </HeaderTop>
    );
};

export default Home;

