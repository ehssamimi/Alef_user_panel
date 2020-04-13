import React  from 'react';
export default function MainHeader (props){
    return (
            <div className="HomePage " dir="rtl">
                <div className="w-100 navbar-light bg-light">
                    <nav className="navbar navbar-expand-lg   ">

                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active d-flex align-items-center">
                                    <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item d-flex align-items-center">
                                    <a className="nav-link" href="/about">about</a>
                                </li>
                                <li className="nav-item d-flex align-items-center">
                                    <a className="nav-link" href="/courses">Coursers</a>
                                </li>
                                <li className="nav-item d-flex align-items-center">
                                    <a className="nav-link" href="/user-profile">User Info</a>
                                </li>


                                <li className="nav-item br-over-g d-flex align-items-center br10px  ">
                                    <a className="nav-link header-color font-weight-bold" href="/login">ثبت نام / ورود </a>
                                </li>

                            </ul>

                        </div>
                        <a className="navbar-brand" href="#">کلید</a>
                    </nav>
                </div>
                <div className=" w-100 pl-4 pr-4 mt-3">
                    { props.children}
                </div>





            </div>

    );
};

