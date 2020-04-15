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

// *****show all product***
export const seprateEachCourseData=(courses)=>{

    console.log(courses)

    let{off,course}=courses;
    let off_percent=0;
    if (off['hours_to_end']!==null){
        off_percent=off['hours_to_end']
    } else if(off['special_students']!==null){
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
        "sellCost": off_percent * course.price,
        "field": course.field,
        "name":course.name,
        "description":course.description,
    };





//
//     lessons: Array(1)
//     0:
//     name: "ریاضی"
//     image: "https://stream.kelidiha.com/public/lesson/5e96169a01d73623037c281d/2LHbjNin2LbbjA==/image.png"
//     price: 120000
//     chapter_count: 10
//     teachers: Array(1)
//     0:
//     name: "بخشنده"
//     image: "https://stream.kelidiha.com/public/teacher/5e96169a01d73623037c281d/2LHbjNin2LbbjA==/2KjYrti02YbYr9mH/image.png"
//     total_videos_time: 54
//     demo_video_cover: "https://stream.kelidiha.com/public/teacher/5e96169a01d73623037c281d/2LHbjNin2LbbjA==/2KjYrti02YbYr9mH/demo-video/image.png"
//   demo_video: "https://stream.kelidiha.com/public/teachers/5e96169a01d73623037c281d/2LHbjNin2LbbjA==/2KjYrti02YbYr9mH/stream/index.m3u8"
// chapters: Array(1)
// 0:
// image: "https://stream.kelidiha.com/public/chapter/5e96169a01d73623037c281d/2LHbjNin2LbbjA==/2KjYrti02YbYr9mH/image.png"
// name: "انتگرال"
// total_video_times: 4
// demo_video_cover: "https://stream.kelidiha.com/public/chapter/5e96169a01d73623037c281d/2LHbjNin2LbbjA==/2KjYrti02YbYr9mH/demo-video/image.png"
// demo_video: "https://stream.kelidiha.com/public/chapter/5e96169a01d73623037c281d/2LHbjNin2LbbjA==/2KjYrti02YbYr9mH/2KfZhtiq2q-Ysdin2YQ=/stream/index.m3u8"
// price: 36000
// items: Array(1)
// 0:
// video: "https://stream.kelidiha.com/item/video/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiNWU4MmE0MjJkYzVkODdjZWFkM2JhYjQyIiwib3RoZXJzIjp7fSwic2VlZCI6OTE4NjN9.sXUiLnLmHQq1NsXJIMB4TGhgcnEcZMoMG-N1yaLatHw/5e96169a01d73623037c281d/2LHbjNin2LbbjA==/2KjYrti02YbYr9mH/2KfZhtiq2q-Ysdin2YQ=/2YXZgdin2YfbjNmFINin2YjZhNuM2Yc=/index.m3u8"
// video_cover: "https://stream.kelidiha.com/public/item/5e96169a01d73623037c281d/2LHbjNin2LbbjA==/2KjYrti02YbYr9mH/2KfZhtiq2q-Ysdin2YQ=/2YXZgdin2YfbjNmFINin2YjZhNuM2Yc=/video_cover/image.png"
// audio: "https://stream.kelidiha.com/item/item_audio/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiNWU4MmE0MjJkYzVkODdjZWFkM2JhYjQyIiwib3RoZXJzIjp7fSwic2VlZCI6OTE4NjN9.sXUiLnLmHQq1NsXJIMB4TGhgcnEcZMoMG-N1yaLatHw/5e96169a01d73623037c281d/2LHbjNin2LbbjA==/2KjYrti02YbYr9mH/2KfZhtiq2q-Ysdin2YQ=/2YXZgdin2YfbjNmFINin2YjZhNuM2Yc=/audio.mp3"
// description: "string"
// name: "مفاهیم اولیه"
// downloadable_content: "https://stream.kelidiha.com/item/item_downloadable_content/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiNWU4MmE0MjJkYzVkODdjZWFkM2JhYjQyIiwib3RoZXJzIjp7fSwic2VlZCI6OTE4NjN9.sXUiLnLmHQq1NsXJIMB4TGhgcnEcZMoMG-N1yaLatHw/5e96169a01d73623037c281d/2LHbjNin2LbbjA==/2KjYrti02YbYr9mH/2KfZhtiq2q-Ysdin2YQ=/2YXZgdin2YfbjNmFINin2YjZhNuM2Yc=/pdf.pdf"
// time_to_done: 3
// is_free: false
// is_locked: false
// is_seen: false
// ز
    let Teachers=[];
let Lesson=[];
    course.lessons.map((each, index) => {
        console.log(each)
        each.teachers.map((item,index2)=>{
            Teachers.push({name:item.name,img:item.image,"course":each.name})
            Lesson.push({
                name: each.name,
                cost: each.price,
                sellcost: off_percent * each.price,
                teacher_name: item.name,
                Teache_time: item.total_videos_time,
                teacher_V_img: item.demo_video_cover,
                teacher_V: item.demo_video,
                chapter_count: each.chapter_count,
                chapters: item.chapters,
                off:off_percent
            })

        });
    });










     let Result={ Top,Teachers,  Lesson,
         "main":off_percent};

    return Result;
};

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
export const PermissionOptions=(sub)=>{
    let SubCat=[];
    sub.map((each,index)=>{
        // let subRow= { value: each , label: each  };
        let subRow= {permission_name: each, description: each };
        SubCat.push(subRow);
    });
    return SubCat;
}
export const permissionOptionReverse=(sub)=>{
    let SubCat=[];
    sub.map((each,index)=>{
        // let subRow= { value: each , label: each  };
        let subRow= each.permission_name;
        SubCat.push(subRow);
    });
    return SubCat;
}
// *************Role option******
export const RoleOptions=(sub)=>{
    let SubCat=[];
    sub.map((each,index)=>{
        // let subRow= { value: each , label: each  };
        let subRow= {role_name: each, description: each };
        SubCat.push(subRow);
    });
    return SubCat;
}
export const roleOptionReverse=(sub)=>{
    let SubCat=[];
    sub.map((each,index)=>{
        // let subRow= { value: each , label: each  };
        let subRow= each.role_name;
        SubCat.push(subRow);
    });
    return SubCat;
}