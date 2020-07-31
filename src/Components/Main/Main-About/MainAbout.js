
import React, {useState, useEffect} from 'react';
import HeaderTop from "../../Common/Header-top/HeaderTop";

const MainAbout = (props) => {
    // const [count, setCount] = useState(1);
    // useEffect(() => {
    //     // Update the document title using the browser API
    //     document.title = `You clicked ${count} times`;
    // });

    return (
        // <HeaderTop {...props} isBuy={false}>
        //     this is about
        // </HeaderTop>
        <div>
            this is about

        </div>
    );
};

// class MainAbout extends Component {
//     render() {
//         return (
//             <MainHeader>
//                 <UserContext.Consumer>
//                     {user=> user.isLogIn?<LogIn_s HandelLogOu={user.HandelLogOut}/>:<LogOut/>}
//                 </UserContext.Consumer>
//
//
//
//
//             </MainHeader>
//         );
//     }
// }
//
// export default MainAbout;




export default MainAbout;



export const LogIn_s = (props ) => {


    return (
        <div>
            <p>Your Log in,please log out </p>
            <button onClick={props.HandelLogOu}>LoGout</button>
        </div>
    );
};
export const LogOut = ( ) => {


    return (
        <div>
            <p>  please log in </p>
            <button>Log in </button>
        </div>
    );
};
