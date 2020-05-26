import React,{useContext} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import './Common/sass/Style.scss'
import './App.css';
import MainAbout from "./Components/Main/Main-About/MainAbout";
import MainCourses from "./Components/Main/Main-Courses/MainCourses";
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

import Home from "./Components/Main/Home/Home";
import Login from "./Components/LogIn/LogIn";
import {UserContext} from "./Components/Common/Context/UserProvider";
import SignUp from "./Components/LogIn/SignUp";
import cookie from 'react-cookies'
import ShowAllCourse from "./Components/Main/Main-Courses/ShowAllCourse";
import MainRoute from "./Components/Common/MainRoute";
import MainUser from "./Components/UserProfile/MainUser/MainUser";



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

                          <Route path="/home" exact={true} component={Home}/>
                          <Route path="/about" component={MainAbout}/>
                          <Route path="/courses" component={ShowAllCourse}/>
                          <Route path="/course/:id"   component={MainCourses}/>

                      <AuthRoute  path="/user-info" authUser={ User.isLogIn} component={MainUser}  />

                          {/*<Route path="/user-info" component={UserInfo}/>*/}

                          {/*<AuthRoute path="/user-profile" authUser={ User.isLogIn} component={UserProfile}/>*/}
                          <AuthRoute path="/user-profile" authUser={ User.isLogIn} component={MainUser}/>

                          {/*<AuthRoute path="/my-course" authUser={ User.isLogIn} component={MyCourse}/>*/}
                          <AuthRoute path="/my-course" authUser={ User.isLogIn} component={MainUser}/>
                          {/*<AuthRoute path="/my-schedule" authUser={ User.isLogIn} component={MySchedule}/>*/}
                          <AuthRoute path="/my-schedule" authUser={ User.isLogIn} component={MainUser}/>
                          <AuthRoute path="/exit" authUser={ User.isLogIn} component={MainUser}/>
                          <AuthLogin path="/login" authUser={ User.isLogIn} component={Login}/>
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
