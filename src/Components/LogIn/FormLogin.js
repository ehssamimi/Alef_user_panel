import React from 'react';
import {TextInput} from "../Common/Forms/textInput/TextInput";

const FormLogin = (props) => {
    // const [value, setValue] = useState(value);
    let{header,subHeader,onSubmit,onChange,label,id,placeHolder,type,value,error,btn_txt,style,id_form}=props



    return (
        <div className="w-50 h-100  overflow-hidden " id={id_form} style={{display:style}}   dir="rtl" >
            <div className="w-100 h-100  d-flex justify-content-center overflow-hidden">
                <div className="main-login-field col-8">
                    <p className="header-color" style={{fontSize:"1.5rem"}}>{header}  </p>
                    <p className="header-color font-weight-bold  mb-5 mt-3" style={{fontSize:"3rem"}}>{subHeader} </p>
                    <form onSubmit={ onSubmit} className="mt-5 pt-5">
                        <TextInput onChange={ onChange} label={label} id={id} class_input="mt-3"
                                   placeholder={placeHolder} type={type}
                                   is_required={false} value={ value }
                                   error={error}/>
                        <button
                            className="btn green-background  br10px text-white col-5 h-input-s col-md-6 col-sm-12 sendButton-shadow mt-3"
                            type="submit">{btn_txt}
                        </button>

                    </form>

                </div>
            </div>


        </div>
    );
};

export default FormLogin;