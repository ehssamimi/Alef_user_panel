import React, {Component} from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css'; // see installation section above for versions of NPM older than 3.0.0
import {base64StringtoFile
    // ,extractImageFileExtensionFromBase64
} from './../../functions/Functions'
import {CustomInput, FormGroup, InputGroup, Label } from "reactstrap";
import imageCompression from "browser-image-compression";
// import imageCompression from 'browser-image-compression';

class JustCropImg extends Component {
    constructor(props) {
        super(props);
        this.state =
            {
                src: '', clickButton: false,
                cropResult: null,
                type: '', name: '',
                error: {'name': "", 'DestinationString': ''}
            };
        this.onChangeImage = this.onChangeImage.bind(this);
        this.cropImage = this.cropImage.bind(this);
        this.handelChangeName = this.handelChangeName.bind(this);
    }

    onChangeImage(e)
    {
        e.preventDefault();
        let files;
        if (e.dataTransfer) {
            files = e.dataTransfer.files;
        } else if (e.target) {
            files = e.target.files;
        }


        if (files[0]!==undefined){
            const reader = new FileReader();
            reader.onload = () => {
                this.setState({
                    src: reader.result ,
                    type:files[0].type,
                    name:files[0].name,
                });
            };
            reader.readAsDataURL(files[0]);
        }

    }

    async cropImage()
    {
        if (typeof this.cropper.getCroppedCanvas() === 'undefined') {
            return;
        }
        var validate=true;
        var error={'name':"",'DestinationString':''};
        if (this.state.src==='') {
            validate=false;
            error['name']='لطفا عکس رو انتخاب کنید ';
         }else if (this.state.type!=="image/png" && this.state.type!=="image/jpeg") {
            validate=false;
            error['name']='فرمت عکس باید png و یا jpg باشد ';
        }
        this.setState({
            error
        });

        // ********set the preview ccrop img*********
        if (validate) {
            // console.log('cropResult');
            let cropResult= this.cropper.getCroppedCanvas().toDataURL();
            // console.log(cropResult);
            // console.log('name');
            // console.log(this.state.name);
            // console.log('type');
            // console.log(this.state.type);

            let file= base64StringtoFile( cropResult,this.state.name,this.state.type);
            console.log('file');
            console.log(file);
            console.log(file.name);

            // *************compress file**********
            let options = {
                maxSizeMB: 0.2,
                maxWidthOrHeight: 1920,
                useWebWorker: true
            };
            const compressedFile =  await imageCompression(file, options);
            // const compressedFile =  imageCompression( file, options)
            // const compressedFile =  file;

            console.log("new file");
            console.log(compressedFile);
            console.log("size");
            console.log(compressedFile.size);
            // lastModified: 1590522238005
            // name: "page1.png"
            // size: 325790
            // type: "image/png"



            validate=true;
            var error={'name':"",'DestinationString':''};
            console.log( compressedFile.type);
            if (compressedFile.type!=="image/png" && compressedFile.type!=="image/jpeg") {
                console.log("this is compressive  type");
                validate=false;
                error['name']='قرمت عکس باید png و یا jpeg باشد ';
            }else if (compressedFile.size > 307200) {
                console.log("this is    size");
                validate=false;
                error['name']='حجم عکس باید کمتر از 300 کیلوبایت باشد ';
            }
            this.setState({
                error
            });

            if (validate){
                console.log("we are validate");
                this.setState(pre=>({
                    cropResult: this.cropper.getCroppedCanvas().toDataURL(),
                    clickButton:!pre.clickButton
                }),()=>{

                    // console.log(this.cropper.getCroppedCanvas());
                    // let file= base64StringtoFile(this.state.cropResult,this.state.name,this.state.type);

                    // ***this is file to set server*********
                    // console.log(file);
                    // this.props.GetImgFile(file,this.state.cropResult,this.props.label);

                    // this.props.GetImgFile(file,this.state.id,this.props.label ,this.state.cropResult);


                    if (this.state.clickButton===true){

                        // this.props.GetImgFile(file, this.state.id, this.props.label, this.state.cropResult);
                        this.props.GetImgFile(compressedFile, this.state.id, this.props.label, this.state.cropResult);
                    }
                    // console.log(this.state.id);
                    // extractImageFileExtensionFromBase64(this.cropper.getCroppedCanvas())
                });
            }





        }else {
            console.log(error)
        }

        // this.setState({
        //     cropResult: this.cropper.getCroppedCanvas().toDataURL(),
        // },()=>{
        //
        //     // console.log(this.cropper.getCroppedCanvas());
        //     let file= base64StringtoFile(this.state.cropResult,this.state.name,this.state.type);
        //     // ***this is file to set server*********
        //     // console.log(file);
        //     // this.props.GetImgFile(file,this.state.cropResult,this.props.label);
        //     this.props.GetImgFile(file,this.state.id,this.props.label ,this.state.cropResult);
        //     // console.log(this.state.id);
        //     // extractImageFileExtensionFromBase64(this.cropper.getCroppedCanvas())
        // });



        // ********set the preview ccrop img*********

    }
     handelChangeName(e){
        // console.log(e.target.value);
        this.setState({
            id:e.target.value
        })
    }




    render(){
        let{label,aspect}=this.props;
         return(
            <div>
                <div className="col-sm-12">

                    <FormGroup className="form-group  position-relative   w-100">
                        <div className='d-flex justify-content-start'>
                            <Label>
                                <span> {label} </span>
                            </Label>
                        </div>
                        <InputGroup className="mb-3"  >
                            <CustomInput
                                type="file"
                                id="uploadImage"
                                name="uploadImage"
                                onChange={this.onChangeImage}
                                label={this.state.name ||'انتخاب عکس'}
                            />
                         </InputGroup>


                    </FormGroup>
                    {
                        this.state.error['name'] !== '' ? <span dir="rtl"
                            className='fs-08vw red-color mr-3 d-flex   mb-5  d-flex justify-content-start' style={{fontWeight:800}} >{this.state.error['name']}</span> : ''
                    }
                </div>


                <Cropper
                    style={{ height: 400, width: '100%' }}
                    aspectRatio={aspect}
                    preview=".img-preview"
                    guides={false}
                    src={this.state.src}
                    ref={cropper => { this.cropper = cropper; }}
                />

                {
                    this.state.clickButton?"":   <button onClick={this.cropImage}   className='btn btn-secondary mt-2 '>
                        انتخاب عکس
                    </button>
                }


            </div>

        );
    }
}

export default JustCropImg;