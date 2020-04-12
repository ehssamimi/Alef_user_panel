import React,{useContext} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import './Common/sass/Style.scss'
import './App.css';
import MainAbout from "./Components/Main/Main-About/MainAbout";
import MainCourses from "./Components/Main/Main-Courses/MainCourses";
import NoMatch from "./Components/NoMatch/NoMatch";
import MainHeader from "./Components/Main/Main-Header/MainHeader";
import Home from "./Components/Main/Home/Home";
import UserInfo from "./Components/UserProfile/UserInfo/UserInfo";
import UserProfile from "./Components/UserProfile/UserProfilew/UserProfile";
import MyCourse from "./Components/UserProfile/MyCourse/MyCourse";
import MySchedule from "./Components/UserProfile/MyProgram/MyProgram";
import Login from "./Components/LogIn/LogIn";
import {UserContext} from "./Components/Common/Context/UserProvider";
import SignUp from "./Components/LogIn/SignUp";



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

function App() {
    const User=useContext(UserContext);
    console.log("is _LOGIN??");
    console.log(User.isLogIn);

  return (
      <div className="w-100 h-100">
          <div className="w-100">
                  <Switch>
                      {/*<MainHeader>*/}

                          <Route path="/" exact={true} component={Home}/>
                          <Route path="/about" component={MainAbout}/>
                          <Route path="/courses" component={MainCourses}/>

                      <AuthRoute  path="/user-info" authUser={ User.isLogIn} component={UserInfo}  />

                          {/*<Route path="/user-info" component={UserInfo}/>*/}
                          <AuthRoute path="/user-profile" authUser={ User.isLogIn} component={UserProfile}/>
                          <AuthRoute path="/my-course" authUser={ User.isLogIn} component={MyCourse}/>
                          <AuthRoute path="/my-schedule" authUser={ User.isLogIn} component={MySchedule}/>
                          <Route path="/login" component={Login}/>
                          <Route path="/sign-up" component={SignUp}/>
                          <Route  component={NoMatch}/>

                      {/*</MainHeader>*/}
                  </Switch>

          </div>
          <div>

          </div>


      </div>


  );
}

export default App;
