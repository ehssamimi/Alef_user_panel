import React, {useState, useEffect} from 'react';

import cookie from "react-cookies";
export const BuyContext=React.createContext() ;
const BuyProvider = ( props) => {
    const [Buy, setBuy] = useState({type:"",content:[]});

    const handelBuyContent=(type,content)=>{
        setBuy({type:"lesson-course",content:Object.values(content)  })
    }

    useEffect(() => {
        let products=cookie.load('basket');
        if (products!=={}){
            handelBuyContent("lesson",cookie.load('basket'))
        }
        // Update the document title using the browser API

    },[]);
    let value={"buy":Buy,"SetBuy":handelBuyContent};

    return (
        <BuyContext.Provider value={value}>
            { props.children}
        </BuyContext.Provider>
    );
};

export default BuyProvider;

