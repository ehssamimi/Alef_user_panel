import React, { useState,useEffect } from 'react';
import {Col, FormFeedback, FormGroup, Input, Label, Tooltip} from "reactstrap";
import TeacherInRow from "../../../Main/Main-Courses/Teachers/TeacheInRow/TeacherInRow";
import { FaAngleDown } from "react-icons/fa";
export  function TextInput (props){
    let{id,placeholder,type,error,label,is_required,changeEdit ,onChange,value,className,nessaryLabel,red}=props;
    const [tooltipOpen, setTooltipOpen] = useState(false);

    const toggle = () => setTooltipOpen(!tooltipOpen);

    return <div className={className}>
        <FormGroup className="FsFooterLogin">
            <Label className="FsFooterLogin font-weight-bold" for={id}>
                <span>{label }</span>
                <span>{ (is_required||false?'(اجباری)':"") }</span>
                {
                    changeEdit ?red?
                        <div className="d-inline-block">
                            <span className="red-color cursor-pointer ز " id={"Tooltip-" + label} onClick={props.validate}>{  ` ( ${nessaryLabel} ) `  }</span>
                            {/*<span className="tooltiptext">همین حالا امتحان کنید</span>*/}
                            {/*<Tooltip placement="right" isOpen={tooltipOpen} id={"Tooltip-" + label} toggle={toggle}>*/}
                                {/*!همین حالا فعال کنید*/}
                            {/*</Tooltip>*/}
                        </div>

                        :
                        <span className="green-color">{ ` ( ${nessaryLabel} ) `}</span>  :""
                }



                {/*<span className="red-color">{ (changeEdit||false?`(${nessaryLabel})`:"") }</span>*/}
             </Label>
            <Input invalid={error.length > 0}  value={value||""} type={type} name={id} id={id} placeholder={placeholder} onChange={(e) =>onChange(`${e.target.value}`,id)}/>
            <FormFeedback>{error}</FormFeedback>
        </FormGroup>
    </div>
};
export  function SelectedInput (props){
    let{id,placeholder,type,error,label,is_required,changeEdit ,onChange,options,value,class_input}=props;
    return <div className="FsFooterLogin ">
        <FormGroup className={class_input}>
            <Label for={id} className="FsFooterLogin font-weight-bold"  >
                <span>{label    }</span>
                <span>{ (is_required||false?'(اجباری)':"") }</span>
                <span className="red-color">{ (changeEdit||false?'(اجباری)':"") }</span>
             </Label>
            <Input invalid={error.length > 0} placeholder={placeholder} type={type} value={value||""} name={id} id={id} disabled={props.disable}
                   onChange={(e) => onChange(`${e.target.value}`, id)}>
                {/*<span className="red-color fs13vw iconArrow"><FaAngleDown/></span>*/}
                {options.map((item, index) => {
                    return (<option key={index}>{item}</option>)
                })}
            </Input>
             {/*<Input invalid={error.length > 0} type={type} name={id} id={id} placeholder={placeholder} onChange={(e) =>onChange(`${e.target.value}`,id)}/>*/}
            <FormFeedback>{error}</FormFeedback>
        </FormGroup>
    </div>
};