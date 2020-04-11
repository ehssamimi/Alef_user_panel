import React, {Component} from 'react';
import MainHeader from "../Main-Header/MainHeader";
import {UserContext} from './../../Common/Context/UserProvider'


class MainAbout extends Component {
    render() {
        return (
            <MainHeader>
                <UserContext.Consumer>
                    {user=> user.isLogIn?<LogIn_s HandelLogOu={user.HandelLogOut}/>:<LogOut/>}
                </UserContext.Consumer>




            </MainHeader>
        );
    }
}

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
