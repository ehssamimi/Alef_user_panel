import React from 'react';
import { Route,Switch} from 'react-router-dom';
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


function App() {
  return (
      <div className="w-100 h-100">
          <div className="w-100">
                  <Switch>
                      {/*<MainHeader>*/}

                          <Route path="/" exact={true} component={Home}/>
                          <Route path="/about" component={MainAbout}/>
                          <Route path="/courses" component={MainCourses}/>

                          <Route path="/user-profile" component={UserProfile}/>
                          <Route path="/my-course" component={MyCourse}/>
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
