import React, { useState,useEffect } from 'react';
import {Col, FormFeedback, FormGroup, Input, Label} from "reactstrap";
import TeacherInRow from "../../../Main/Main-Courses/Teachers/TeacheInRow/TeacherInRow";
export  function TextInput (props){
    let{id,placeholder,type,error,label,is_required,changeEdit ,onChange,value}=props;
    return <div className=" ">
        <FormGroup>
            <Label for={id}>
                <span>{label +':'  }</span>
                <span>{ (is_required||false?'(اجباری)':"") }</span>
                <span className="red-color">{ (changeEdit||false?'(اجباری)':"") }</span>
             </Label>
            <Input invalid={error.length > 0}  value={value} type={type} name={id} id={id} placeholder={placeholder} onChange={(e) =>onChange(`${e.target.value}`,id)}/>
            <FormFeedback>{error}</FormFeedback>
        </FormGroup>
    </div>
};
export  function SelectedInput (props){
    let{id,placeholder,type,error,label,is_required,changeEdit ,onChange,options,value,class_input}=props;
    return <div>
        <FormGroup className={class_input}>
            <Label for={id}  >
                <span>{label +':'  }</span>
                <span>{ (is_required||false?'(اجباری)':"") }</span>
                <span className="red-color">{ (changeEdit||false?'(اجباری)':"") }</span>
             </Label>
            <Input type={type} value={value} name={id} id={id} onChange={(e) => onChange(`${e.target.value}`, id)}  >
                {options.map((item, index) => {
                    return (<option key={index}>{item}</option>)
                })}
            </Input>
             {/*<Input invalid={error.length > 0} type={type} name={id} id={id} placeholder={placeholder} onChange={(e) =>onChange(`${e.target.value}`,id)}/>*/}
            <FormFeedback>{error}</FormFeedback>
        </FormGroup>
    </div>
};