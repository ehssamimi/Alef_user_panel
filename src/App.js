import React, {useContext, useEffect, useState} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import './Common/sass/Style.scss'
import './App.css';

import NoMatch from "./Components/NoMatch/NoMatch";
// import MainHeader from "./Components/Main/Main-Header/MainHeader";
// import UserInfo from "./Components/UserProfile/UserInfo/UserInfo";
// import UserProfile from "./Components/UserProfile/UserProfilew/UserProfile";
// import MyCourse from "./Components/UserProfile/MyCourse/MyCourse";
// import MySchedule from "./Components/UserProfile/MyProgram/MyProgram";
// import CourseIntroducing from "./Components/Main/Main-Courses/IntroducingCoursse/CourseIntroducing";
// import IntroducingCourse from "./Components/Main/Main-Courses/IntroducingCoursse/IntroducingCourse";
// import UrlProvider from "./Components/Common/Context/UrlProvider";
// import Exit from "./Components/UserProfile/Exit/Exit";


import Login from "./Components/LogIn/LogIn";
import {UserContext} from "./Components/Common/Context/UserProvider";
import SignUp from "./Components/LogIn/SignUp";
import cookie from 'react-cookies'
// import Home from "./Components/Main/Home/Home";
// import ShowAllCourse from "./Components/Main/Main-Courses/ShowAllCourse";
// import CurrentClass from "./Components/UserProfile/OnlineClasses/CurrentOnlineClass/CurrentClass/CurrentClass";
// import MainAbout from "./Components/Main/Main-About/MainAbout";
// import MainCourses from "./Components/Main/Main-Courses/MainCourses";
import MainRoute from "./Components/Common/MainRoute";
import MainUser from "./Components/UserProfile/MainUser/MainUser";
import MainUrl from "./Components/UserProfile/MainUser/MainUrl";
import {GetConfigMqtt, getprofile} from "./Common/Const/ServerConnection";
import * as Const from "./Common/Const/ServerConst";
import {NotificationManager} from "react-notifications";







const AuthRoute = ({ component: Component, authUser, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            authUser ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: props.location }
                    }}
                />
            )
        }
    />
);
const AuthLogin = ({ component: Component, authUser, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            authUser ? (
                <Redirect
                    to={{
                        pathname: "/user-info",
                        state: { from: props.location }
                    }}
                />
            ) : (
                <Component {...props} />

            )
        }
    />
);

function App() {
    const [notifOnlineClass, setNotifOnlineClass] = useState("");
    const User=useContext(UserContext);
    cookie.save('basket', [], { path: '/' });


  return (
      <div className="w-100 h-100">
          <div className="w-100">
                  <Switch>
                      {/*<MainHeader>*/}

                      <Route
                          path="/"
                          exact
                          render={props => <MainRoute {...props} />}
                      />





                      <Route path="/home"   component={(props) => <MainUrl {...props}   />} />
                      <Route path="/about" component={(props) => <MainUrl {...props}   />} />
                      <Route path="/courses"  component={(props) => <MainUrl {...props}   />}/>
                      <Route path="/online-class/:id"  component={(props) => <MainUrl {...props}   />}/>
                      <Route path="/course/:id"   component={(props) => <MainUrl {...props}   />}/>


                      <AuthRoute  path="/user-info" authUser={ User.isLogIn}  component={(props) => <MainUser {...props} notif={notifOnlineClass} />}  />

                          {/*<Route path="/user-info" component={UserInfo}/>*/}

                          {/*<AuthRoute path="/user-profile" authUser={ User.isLogIn} component={UserProfile}/>*/}
                          <AuthRoute path="/user-profile" authUser={ User.isLogIn} component={(props) => <MainUser {...props} notif={notifOnlineClass} />} />

                          {/*<AuthRoute path="/my-course" authUser={ User.isLogIn} component={MyCourse}/>*/}
                          <AuthRoute path="/my-course" authUser={ User.isLogIn}  component={(props) => <MainUser {...props} notif={notifOnlineClass} />}  />
                          <AuthRoute path="/online-scheduler" authUser={ User.isLogIn}  component={(props) => <MainUser {...props} notif={notifOnlineClass} />} />
                          <AuthRoute path="/current-online-class" authUser={ User.isLogIn}  component={(props) => <MainUser {...props} notif={notifOnlineClass} />} />
                          {/*<AuthRoute path="/online-class/:id" authUser={ User.isLogIn} component={MainUser}/>*/}
                          {/*<AuthRoute path="/my-schedule" authUser={ User.isLogIn} component={MySchedule}/>*/}
                          <AuthRoute path="/my-schedule" authUser={ User.isLogIn}  component={(props) => <MainUser {...props} notif={notifOnlineClass} />} />
                          <AuthRoute path="/exit" authUser={ User.isLogIn} component={(props) => <MainUser {...props} notif={notifOnlineClass} />} />
                          <AuthLogin path="/login" authUser={ User.isLogIn}  component={(props) => <MainUser {...props} notif={notifOnlineClass} />} />
                          {/*<Route path="/login" component={Login}/>*/}
                          <Route path="/sign-up" component={SignUp}/>
                          <Route  component={NoMatch}/>

                      {/*</MainHeader>*/}
                  </Switch>


          </div>


      </div>


  );
}

export default App;
