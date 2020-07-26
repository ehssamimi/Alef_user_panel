import * as Const from "./ServerConst";
import axios from "axios";
import cookie from "react-cookies";
import {error_Notification} from "../../Components/functions/componentHelpFunction";

export async  function  GetUserDropDown( ){

    let headers = {

        'accept': 'application/json'
    };

    var resp ="";
    await axios.get(`${Const.user}drop-down`, {headers: headers}).then(function (response) {
        console.log(response );
        resp={state:200,Description:response.data};
    }).catch(function (error) {
        console.log(error.response);
        console.log(error);
        let {response}=error;
        if (response===undefined){
            resp={state: 400,Description: error.message}
        } else{
            resp={state:response.status||400,Description:response.data.detail||error.message}
        }
    });
    return resp;
}
export async  function  Regestry(Data){

    let headers = {
        'Content-Type': 'application/json',
        'accept': 'application/json',
    };
    console.log(Data);


    var resp ="";
    await axios.post(`${Const.user}register`, Data, {headers: headers}).then(function (response) {
        console.log(response );
        let {Description}=response.data;
        // let {Items} = response.data;
        resp={state:200,Description:Description};

    }).catch(function (error) {
        console.log(error.response);
        console.log(error);
        let {response}=error;
        if (response===undefined){
            resp={state: 400,Description: error.message}
        } else{
            resp={state:response.status||400,Description:response.data.detail||error.message}
        }
    });
    return resp;
}
export async  function  GetLogin(phoneNumber){

    let headers = {
        'accept': 'application/json'
    };

    var resp ="";
    await axios.get(`${Const.user}login?phone_number=${phoneNumber}`, {headers: headers}).then(function (response) {
        // console.log(response );
        resp={state:200,Description:response.data};
    }).catch(function (error) {
        console.log(error.response);
        console.log(error);
        let {response}=error;
        if (response===undefined){
            resp={state: 400,Description: error.message}
        } else{
            resp={state:response.status||400,Description:response.data.detail||error.message}
        }
    });
    return resp;
}
export async  function  GetVerifycationCode(phoneNumber){

    let headers = {

        'accept': 'application/json'
    };

    var resp ="";
    await axios.get(`${Const.admin_route}activation-code?phone_number=${phoneNumber}`, {headers: headers}).then(function (response) {
        // console.log(response );
        resp={state:200,Description:response.data};
    }).catch(function (error) {
        console.log(error.response);
        console.log(error);
        let {response}=error;
        if (response===undefined){
            resp={state: 400,Description: error.message}
        } else{
            resp={state:response.status||400,Description:response.data.detail||error.message}
        }
    });
    return resp;
}
export async  function  ResendVerifycationCode(phoneNumber){

    let headers = {

        'accept': 'application/json'
    };

    var resp ="";
    await axios.get(`${Const.user}sms/resend?phone_number=${phoneNumber}`, {headers: headers}).then(function (response) {
        console.log(response );
        resp={state:200,Description:response.data};
    }).catch(function (error) {
        console.log(error.response);
        console.log(error);
        let {response}=error;
        if (response===undefined){
            resp={state: 400,Description: error.message}
        } else{
            resp={state:response.status||400,Description:response.data.detail||error.message}
        }
    });
    return resp;
}
export async  function  Verify(type,phoneNumber,code){

    let headers = {

        'accept': 'application/json'
    };

    var resp ="";
    await axios.get(`${Const.user}${type}/phone_number/verify?phone_number=${phoneNumber}&code=${code}`, {headers: headers}).then(function (response) {
        console.log(response );
        resp={state:200,Description:response.data};
    }).catch(function (error) {
        console.log(error.response);
        console.log(error);
        let {response}=error;
        if (response===undefined){
            resp={state: 400,Description: error.message}
        }else if (response.status===422){
            resp={state:422,Description:response.statusText}
        } else{
            resp={state:response.status||400,Description:response.data.detail||error.message}
        }
    });
    return resp;
}
export async  function  GetUserProfile(){

    let headers = {

        'accept': 'application/json',
        'token':Const.Token
    };

    var resp ="";
    await axios.get(`${Const.user}profile`, {headers: headers}).then(function (response) {
        console.log(response );
        resp={state:200,Description:response.data};
    }).catch(function (error) {
        console.log(error.response);

        console.log(error);

        if (error.response.status===400) {
            resp={state: 400,Description: error.response.data.detail}
            // if (error.response.data.detail==="access denied") {
            //     console.log("we are out !!!!!!!!!!");
            //     cookie.remove('basket', { path: '/' });
            //     localStorage.clear();
            //     window.location.reload();
            // }

        }else if (error.response===undefined){
            resp={state: 400,Description: error.message}

        } else if (error.response.status===422){
            resp={state:422,Description:error.response.statusText}
        }else{
            resp={state:error.response.status||400,Description:error.response.data.detail||error.message}
        }

    });
    return resp;
}
export async  function  loadMainCourse( ){

    let headers = {
        'token':Const.Token,
        'accept': 'application/json'
    };

    var resp ="";
    await axios.get(`${Const.ResourceUser}course/courses`, {headers: headers}).then(function (response) {
        // console.log(response );
        resp={state:200,Description:response.data};
    }).catch(function (error) {
        console.log(error.response);
        console.log(error);
        let {response}=error;
        if (response===undefined){
            resp={state: 400,Description: error.message}
        } else if (response.status===422){
            resp={state:422,Description:response.statusText}
        }else{
            resp={state:response.status||400,Description:response.data.detail||error.message}
        }
    });
    return resp;
}
export async  function  LoadCourse(CourseID){

    let headers = {
        'token':Const.Token,
        'accept': 'application/json'
    };

    var resp ="";
    await axios.get(`${Const.ResourceUser}course/load/v1?course_id=${CourseID}`, {headers: headers}).then(function (response) {
        // console.log(response );
        resp={state:200,Description:response.data};
    }).catch(function (error) {
        console.log(error.response);
        console.log(error);
        let {response}=error;
        if (response===undefined){
            resp={state: 400,Description: error.message}
        } else if (response.status===422){
            resp={state:422,Description:response.statusText}
        }else{
            resp={state:response.status||400,Description:response.data.detail||error.message}
        }
    });
    return resp;
}


// *****************User******
export async  function  getprofile( ){

    let headers = {
        'token':Const.Token,
        'accept': 'application/json'
    };

    var resp ="";
    await axios.get(`${Const.user}profile`, {headers: headers}).then(function (response) {
        // console.log(response );
        resp={state:200,Description:response.data};
    }).catch(function (error) {
        console.log(error.response);
        resp=Error(error)
        console.log(error);

        // if (error.response.status===400) {
        //     resp={state: 400,Description: error.response.data.detail}
        //     // if (error.response.data.detail==="access denied") {
        //     //     console.log("we are out !!!!!!!!!!");
        //     //     cookie.remove('basket', { path: '/' });
        //     //     localStorage.clear();
        //     //     window.location.reload();
        //     // }
        //
        // }else if (error.response===undefined){
        //     resp={state: 400,Description: error.message}
        //
        // } else if (error.response.status===422){
        //     resp={state:422,Description:error.response.statusText}
        // }else{
        //     resp={state:error.response.status||400,Description:error.response.data.detail||error.message}
        // }
    });
    return resp;
}
export async  function  UploadProfileImg(file){
    let formData = new FormData();
    formData.append("file", file);
    let headers = {
        'token':Const.Token,
        'accept': 'application/json',
        'Content-Type': 'application/json'
    };
    var resp='';

    await axios.put(`${Const.user}profile/profile_pic`, formData, {headers: headers}).then(function (response) {
        console.log(response);
        resp={state:200,Description:response.data};
    }).catch(function (error) {
        resp=Error(error)
    });
    return resp
}
export async  function  UpdateProfile(Data){

    let headers = {
        'Token': Const.Token,
        'Content-Type': 'application/json',
        'accept': 'application/json',

    };
    console.log(Data);


    var resp ="";
    await axios.put(`${Const.user}profile/update`, Data, {headers: headers}).then(function (response) {
        console.log(response );

        // let {Items} = response.data;

        resp={state:200,Description:response.data};

    }).catch(function (error) {
        resp=Error(error)
    });
    return resp;
}
export async  function  GetUserschedule(Data){

    let headers = {
        'Token': Const.Token,
        'Content-Type': 'application/json',
        'accept': 'application/json',

    };
    console.log(Data);


    var resp ="";
    await axios.get(`${Const.user}personal_schedule/page` , {headers: headers}).then(function (response) {
        console.log(response );

        // let {Items} = response.data;
        resp={state:200,Description:response.data};

    }).catch(function (error) {
        resp=Error(error)
    });
    return resp;
}
export async  function  RequestUserschedule( ){

    let headers = {
        'Token': Const.Token,
        'Content-Type': 'application/json',
        'accept': 'application/json',

    };

    var resp ="";
    await axios.get(`${Const.user}personal_schedule/request` , {headers: headers}).then(function (response) {
        console.log(response );

        // let {Items} = response.data;
        resp={state:200,Description:response.data};

    }).catch(function (error) {
        resp=Error(error)
    });
    return resp;
}
export async  function  GetMyCourse( ){

    let headers = {
        'Token': Const.Token,
        'Content-Type': 'application/json',
        'accept': 'application/json',

    };

    var resp ="";
    await axios.get(`${Const.ResourceUser}course/my-course` , {headers: headers}).then(function (response) {
        console.log(response );

        // let {Items} = response.data;
        resp={state:200,Description:response.data};

    }).catch(function (error) {
          resp=Error(error)
    });
    return resp;
}
export async  function  VerifyParentCode( code){

    let headers = {
        'Token': Const.Token,
        'accept': 'application/json'
    };

    var resp ="";
    await axios.get(`${Const.user}parent/verify?code=${code}`, {headers: headers}).then(function (response) {
        console.log(response );
        resp={state:200,Description:response.data};
    }).catch(function (error) {
        resp=Error(error)
    });
    return resp;
};
export async  function  GetVerifyParentCode( phoneNumber){

    let headers = {

        'accept': 'application/json'
    };

    var resp ="";
    await axios.get(`${Const.admin_route}parent/activation-code?phone_number=${phoneNumber}`, {headers: headers}).then(function (response) {
        // console.log(response );
        console.log(response.data.code );
        // console.log(response.data.code );
        resp={state:200,Description:response.data};
    }).catch(function (error) {
        resp=Error(error)
    });
    return resp;
}
export async  function  ResendParentCode(){

    let headers = {
        'Token': Const.Token,
        'accept': 'application/json'
    };

    var resp ="";
    await axios.get(`${Const.user}sms/parent/resent`, {headers: headers}).then(function (response) {
        console.log(response );
        resp={state:200,Description:response.data};
    }).catch(function (error) {
        resp=Error(error)
    });
    return resp;
};
export async  function  LogOut(){

    let headers = {
        'Token': Const.Token,
        'accept': 'application/json'
    };

    var resp ="";
    await axios.get(`${Const.user}logout`, {headers: headers}).then(function (response) {
        console.log(response );
        resp={state:200,Description:response.data};
    }).catch(function (error) {
        resp=Error(error)
    });
    return resp;
};
export async  function  CourseBuy(Data){

    let headers = {
        'Token': Const.Token,
        'Content-Type': 'application/json',
        'accept': 'application/json',

    };
    console.log(Data);


    var resp ="";
    await axios.post(`${Const.ResourceUser}course/buy`, Data, {headers: headers}).then(function (response) {
        console.log(response );

        // let {Items} = response.data;

        resp={state:200,Description:response.data};

    }).catch(function (error) {
        resp=Error(error)

    });
    return resp;
}


function Error(error) {
    console.log(error.response);

    console.log(error);
    var resp ="";
    if (error.response===undefined){
        resp={state: 400,Description: error.message}

    }else if (error.response.status===400) {
        resp={state: 400,Description: error.response.data.detail}
        if (error.response.data.detail==="access denied") {
            console.log("we are out !!!!!!!!!!");
            cookie.remove('basket', { path: '/' });
            localStorage.clear();
            window.location.reload();
        }

    } else if (error.response.status===422){
        resp={state:422,Description:error.response.statusText}
    }else{
        resp={state:error.response.status||400,Description:error.response.data.detail||error.message}
    }
    return resp;
}

// *************OnlineClass******
export async  function  LoadSchedule( ){

    let headers = {
        'token': Const.Token,
        // 'token': "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiNWVhNWQ3MmRlMWRjOWFjYThkYWRkNzhiIiwib3RoZXJzIjpudWxsLCJzZWVkIjoyMDM1Nn0.osgJ4O1Xd4Ub8BYfbxaCQA8mTIY_wyDTocx_XiwrHhE",
        'Content-Type': 'application/json',
        'accept': 'application/json'
    };


    var resp ="";
    await axios.get(`${Const.kelidihaadmin}user/weekly-plan`,   {headers: headers}).then(function (response) {


        // let {Items} = response.data;
        resp={state:200,Description:response.data};

    }).catch(function (error) {
        console.log(error.response);
        console.log(error);
        resp=Error(error)
        console.log(resp)
        error_Notification(resp.state,resp.Description)

    });
    return resp;
}

export async  function  GetCurrentUserClassList(id){

    let headers = {
        'token': Const.Token,
        'Content-Type': 'application/json',
        'accept': 'application/json'
    };
    console.log(headers);


    var resp ="";
    await axios.get(`${Const.kelidihaadmin}user/class/current`,   {headers: headers}).then(function (response) {


        // let {Items} = response.data;
        // resp={state:200,Description:response.data};
        resp=response.data;


    }).catch(function (error) {
        console.log(error.response);
        console.log(error);
        let{state ,Description}=Error(error);
        error_Notification(state ,Description)
    });
    return resp;
}

export async  function ShowFileToClass( class_id){

    let headers = {
        'token': Const.Token,
        'Id': Const.ID,
    };
    var resp = '';




    await axios.get(`${Const.ClassRoom}user/live-class/files?class_id=${class_id}` , {headers: headers}).then(function (response) {
        console.log(response);
        resp = {state: 200, Description: response.data};

        // let {UploadId} = response.data;
        // resp = UploadId;
    }).catch(function (error) {
        Error(error)
    });
    return resp
}


// **************chat********
export async  function  GetUserProfileImg(user_id){

    let headers = {
        'Token': Const.Token,
        'Content-Type': 'application/json',
        'accept': 'application/json'
    };


    var resp ="";
    // await axios.get(`${Const.kelidihaadmin}users/profile/by_user_id/${user_id}` , {headers: headers}).then(function (response) {
    await axios.get(`https://user.kelidiha.com/users/profile/by_user_id/${user_id}` , {headers: headers,responseType: 'blob'}).then(function (response) {
        console.log(response)
        let imgfile =new File([response.data], 'profileImg');
        console.log("imgfile")
        console.log(imgfile)
        // let {Items} = response.data;
        resp={state:200,Description:imgfile};

    }).catch(function (error) {
        let {state,Description}=Error(error);
        error_Notification(state,Description);
    });
    return resp;
}

export async  function  GetHistoryChat(gp_id,page,token){

    let headers = {
        'Token': token,
        'Content-Type': 'application/json',
        'accept': 'application/json'
    };


    var resp ="";
    await axios.get(`https://cors-anywhere.herokuapp.com/${Const.LiveKelid}group/admin/groups/history?group_id=${gp_id}&page=${page}` , {headers: headers}).then(function (response) {
        console.log(response)
        // let {Items} = response.data;
        resp={state:200,Description:response.data};

    }).catch(function (error) {
        console.log(error)
        resp=Error(error);
    });
    return resp;
}

export async  function  GetClassroom(id){

    let headers = {
        'Token': Const.Token,
        'Content-Type': 'application/json',
        'accept': 'application/json'
    };


    var resp ="";
    await axios.get(`${Const.kelidihaadmin}admin/classroom/load?class_id=${id}`,   {headers: headers}).then(function (response) {

        resp=response.data;

    }).catch(function (error) {
    let{state ,Description}=Error(error)
    });
    return resp;
}

// ****Configuarte*********
export async  function  ModalList( ){

    let headers = {
        'Token': Const.Token,
        'accept': 'application/json',
    };


    var resp ="";
    await axios.get(`${Const.userKilidiha}modal/` ,{headers: headers}).then(function (response) {
        console.log(response );

        // let {Items} = response.data;
        resp={state:200,Description:response.data};

    }).catch(function (error) {
        resp=Error(error)
    });
    return resp;
}
export async function GetConfigMqtt() {
    let headers = {
        'token': Const.Token,
        'accept': 'application/json',
    };


    var resp ="";
    await axios.get("https://api.kelidiha.com/notification/http/user/configs" ,{headers: headers}).then(function (response) {
        console.log(response );

        // let {Items} = response.data;
        resp={state:200,Description:response.data};

    }).catch(function (error) {
        resp=Error(error)
    });
    return resp;
}




// export async  function  GetAllPermission(page_number){
//
//     let headers = {
//         'Token': Const.Token,
//         'accept': 'application/json'
//     };
//
//     var resp ="";
//     await axios.get(`${Const.Liara_Url}permissions/get-all?page=${page_number}`, {headers: headers}).then(function (response) {
//         console.log(response );
//
//         let {permissions,page}=response.data;
//         resp={state:200,Description:permissions,page:page};
//     }).catch(function (error) {
//         console.log(error.response);
//         console.log(error);
//         let {response}=error;
//         if (response===undefined){
//             resp={state: 400,Description: error.message}
//         } else{
//             resp={state:response.status||400,Description:response.data.detail||error.message}
//         }
//     });
//     return resp;
// }
// export async  function  Getpermission(permission_name){
//
//     let headers = {
//         'Token': Const.Token,
//         'accept': 'application/json'
//     };
//
//     var resp ="";
//     await axios.get(`${Const.Liara_Url}permissions/get?name=${permission_name}`, {headers: headers}).then(function (response) {
//         console.log(response );
//
//         // let {permissions }=response.data;
//         resp={state:200,Description:response.data };
//     }).catch(function (error) {
//         console.log(error.response);
//         console.log(error);
//         let {response}=error;
//         if (response===undefined){
//             resp={state: 400,Description: error.message}
//         } else{
//             resp={state:response.status||400,Description:response.data.detail||error.message}
//         }
//     });
//     return resp;
// }
// export async  function  SuggestPermission(name){
//
//     let headers = {
//         'Token': Const.Token,
//         'accept': 'application/json'
//     };
//
//     var resp ="";
//     await axios.get(`${Const.Liara_Url}permissions/drop-down?permission_name=${name}`, {headers: headers}).then(function (response) {
//         console.log(response );
//
//
//         resp={state:200,Description:response.data.data };
//     }).catch(function (error) {
//         console.log(error.response);
//         console.log(error);
//         let {response}=error;
//         if (response===undefined){
//             resp={state: 400,Description: error.message}
//         } else{
//             resp={state:response.status||400,Description:response.data.detail||error.message}
//         }
//     });
//     return resp;
// }
// export async  function  AddPermission(Data){
//
//     let headers = {
//         'Token': Const.Token,
//         'Content-Type': 'application/json',
//         'accept': 'application/json',
//         'Access-Control-Allow-Origin':'*'
//     };
//     console.log(Data);
//
//
//     var resp ="";
//     await axios.post(`${Const.Liara_Url}permissions/add`, Data, {headers: headers}).then(function (response) {
//         console.log(response );
//         let {Description}=response.data;
//         // let {Items} = response.data;
//         resp={state:200,Description:Description};
//
//     }).catch(function (error) {
//         console.log(error.response);
//         console.log(error);
//         let {response}=error;
//         if (response===undefined){
//             resp={state: 400,Description: error.message}
//         } else{
//             resp={state:response.status||400,Description:response.data.detail||error.message}
//         }
//     });
//     return resp;
// }
// export async  function  DeletePermission(name){
//     let headers = {
//         'Token': Const.Token,
//         'accept': 'application/json'
//     };
//
//
//     let resp ={state:false,Description:""};
//     await axios.delete(`${Const.Liara_Url}permissions?name=${name}`, {headers: headers}).then(function (response) {
//         console.log(response);
//         let{status,data}= response ;
//         console.log(status);
//         console.log( data);
//
//         resp ={state:status,Description:data};
//
//         resp ={state:status,Description:data};
//
//     }).catch(function (error) {
//         console.log(error.response);
//         console.log(error);
//         let {response}=error;
//         if (response===undefined){
//             resp={state: 400,Description: error.message}
//         }else if (response.status===422){
//             resp={state:422,Description:response.statusText}
//         } else{
//             resp={state:response.status||400,Description:response.data.detail||error.message}
//         }
//     });
//     return resp;
//
//
//
// }
