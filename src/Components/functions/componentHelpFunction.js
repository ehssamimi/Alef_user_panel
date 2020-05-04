import NotificationManagerss from "./../Common/react-notifications/NotificationManager";
import {TweenMax} from "gsap/TweenMax";
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'
import React from "react";
import profile from "../../Common/img/profile.jpg";


export const Notifications_eee=(txt)=>{
    return <ReactNotification />
};
export const error_Notification=(state,Description)=>{
    return NotificationManagerss.error(
        state,
        Description,
        3000,
        null,
        null,
        "error"
    );
};
export const success_Notification=(Response)=>{
    return NotificationManagerss.success(
        "تبریک",
        Response,
        3000,
        null,
        null,
        "success"
    );
};

// *****Courses ***
export const seprateEachCourseData=(courses)=>{

    console.log(courses)

    let{off,course}=courses;
    let off_percent=0;
    // if (off['hours_to_end']!==null){
    //     off_percent=off['hours_to_end']
    // } else

        if(off['special_students']!==null){
        off_percent=off['special_students']
    }else if (off['institute_students']!==null) {
        off_percent=off['institute_students']
    }else if (off['public_off']!==null) {
        off_percent=off['public_off']
    }


    const Top = {
        "video_img": course.demo_video_cover,
        "Video_src": course.demo_video,
        "course_img": course.image,
        "grade": course.grade,
        "cost": course.price,
        "price": course.price,
        "sellCost": off_percent * course.price,
        "field": course.field,
        "name":course.name,
        "description":course.description,
        "schedule":course.schedule,
        "off":off_percent
    };
    // console.log("off_percent");
    // console.log(off_percent);






    let Teachers=[];
// let Lesson=[];
    course.lessons.map((each, index) => {
        // console.log(each)
        each.teachers.map((item,index2)=>{
            Teachers.push({name:item.name,img:item.image,"course":each.name})
            // Lesson.push({
            //     name: each.name,
            //     cost: each.price,
            //     sellcost: off_percent * each.price,
            //     teacher_name: item.name,
            //     Teache_time: item.total_videos_time,
            //     teacher_V_img: item.demo_video_cover,
            //     teacher_V: item.demo_video,
            //     chapter_count: each.chapter_count,
            //     chapters: item.chapters,
            //     off:off_percent
            // })

        });
    });

     let Result={ Top,Teachers,  Lesson:course.lessons,
         "off":off_percent};

    return Result;
};
export const getOff=(off)=>{
    let off_percent=0;
    // if (off['hours_to_end']!==null){
    //     off_percent=off['hours_to_end']
    // } else


        if(off['special_students']!==null){
        off_percent=off['special_students']
    }else if (off['institute_students']!==null) {
        off_percent=off['institute_students']
    }else if (off['public_off']!==null) {
        off_percent=off['public_off']
    }
    return ({"off_percent":off_percent,"hourse":off['public_off']} )
}

// **********User-panel*******
export const getProfileValue=(data)=>{
    let{profile,personal_info,education,parent,address}=data;

    return ({
        "name": personal_info.name,
        "profile_img":profile.image_id,
        "phoneNumber":personal_info.phone_number,
        "ID": personal_info.ssn,
        "class":  education.grade,
        "fields": education.field,
        "average_num": education.gpa,
        "schoolName": education.school_name,
        "Schoolkind":education.school_type,
        "country": address.province,
        "city": address.city,
        "parent_name": parent.name,
        "parent_num": parent.phone_number,
        "parent_verify":parent['verify']
    } )
}


export function categoryDetails (categories) {
    let CategoryOption=[];let Subs={};
    categories.map((each, index) => {
        CategoryOption.push({value: each.name, label: each.name});
        let SubCatCondition = each.sub_categories !== undefined ?
            // ******** this function add sub category in array
            LabelValueOption(each.sub_categories)
            :[{ value:"زیر دسته بندی نداریم ", label: "we have not sub category" }] ;
        Subs[each.name]=SubCatCondition;
    });
    return{
        cat:CategoryOption,
        subCat:Subs
    }
}

            // *****set error*****
export function set_error(condition,error_message) {

    if (condition === '') {
        return{
            validate:false,error:error_message
        }
    }else {
        return{
            validate:true,error: ""
        }
    }
}

// *****GetDate******
export const GetData=(Data)=>{
    if (Data!==null){
        return `${Data.year}/${Data.month}/${Data.day}`;

    }else {
        return null
    }
};
// ************ Label-Value-Option*********
export const LabelValueOption=(sub)=>{
        let SubCat=[];
        sub.map((each,index)=>{
            let subRow= { value: each , label: each  };
            SubCat.push(subRow);
        });
        return SubCat;
}
// *************Remove item**********
export const RemoveItem=(id)=>{
    const $el = document.getElementById(id);
    const duration = 2;
    const from = { opacity: 0};
    TweenMax.to($el, duration, from);
    return setTimeout(() => {
        $el.remove();
    }, 2000)
};
// *************permission option******
export const   validatephoneNumber=(phonenumber) =>{
    var re = /^(\+98|0)?9\d{9}$/;
    return re.test(phonenumber);
}