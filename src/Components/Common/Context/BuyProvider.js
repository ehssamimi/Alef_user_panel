import React, {useState, useEffect} from 'react';
import {UserContext} from "./UserProvider";
export const BuyContext=React.createContext() ;
const BuyProvider = (props) => {
    const [Buy, setBuy] = useState({is_Buy:false,content:[]});

    const handelBuyCOntent=(content)=>{
        setBuy({is_Buy:true,content:[...Buy.content ,content ]})
    }

    useEffect(() => {
        // Update the document title using the browser API

    });
    let value={"buy":Buy,"SetBuy":handelBuyCOntent}

    return (
        <UserContext.Provider value={value}>
            {this.props.children}
        </UserContext.Provider>
    );
};

export default BuyProvider;

