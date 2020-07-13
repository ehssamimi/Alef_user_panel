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
        <div className="w-100 position-relative ">
            <form onSubmit={ onFormSubmit}>
                <InputGroup className="position-relative    ">

                    <textarea placeholder="تایپ کنید ..." className="col-12 text-break inputSendChat form-control pt-2 " onChange={ onchange}  onKeyDown={ handleKeyDown} value={value} />
                    <button className="  button-send-Chat chat-header  Fs3  " style={{zIndex:99}} type="submit"><IoIosSend/></button>
                    {error? (
                        <div className="invalid-feedback d-block">
                            {error}
                        </div>
                    ) : null}
                </InputGroup>

            </form>
        </div>
    );
};

export default InputSendMessage;


