import React, {useState, useEffect} from 'react';
import {Input, InputGroup} from "reactstrap";
import {FaRegHandPaper}   from 'react-icons/fa';
import {IoIosSend}   from 'react-icons/io';
import $ from 'jquery'
import io from "socket.io-client";


const InputSendMessage = (props) => {
    const [value, setvalue] = useState("");
    const [error, setError] = useState("");

    const onFormSubmit = e => {
        e.preventDefault();
         if (value.length!==0){
            props.sendMessage(value)
            setvalue(" ");
        }else {
            setError("متن خالی  نمی توانید بفرستید")
        }


    }
    const onchange = e => {
        setvalue(e.target.value)
    }
    const handleKeyDown = e => {
         if (e.key === 'Enter' && !e.shiftKey) {
             onFormSubmit(e)
        }
    }



    return (
        <div className="w-100 position-relative br10px-bottom ">
            <div className=" w-100 position-absolute" style={{bottom:0}}>

            </div>
            <form onSubmit={ onFormSubmit} className="w-100 br10px-bottom">
                <div className="position-relative  w-100 br10px-bottom ">

                    <textarea placeholder="تایپ کنید ..." className="col-12 text-break inputSendChat form-control pt-2 br10px-bottom " onChange={ onchange}  onKeyDown={ handleKeyDown} value={value} />
                    <button className="  button-send-Chat chat-header  Fs3 p-0  " style={{zIndex:99}} type="submit"><IoIosSend className="p-0"/></button>
                    {error? (
                        <div className="invalid-feedback d-block">
                            {error}
                        </div>
                    ) : null}
                </div>

            </form>
        </div>
    );
};

export default InputSendMessage;


