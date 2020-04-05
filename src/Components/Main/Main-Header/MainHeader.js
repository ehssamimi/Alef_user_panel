import React, {Component} from 'react';

class MainHeader extends Component {
    render() {
        return (
            <div className="w-100   ">
                <div className="w-100 navbar-light bg-light">
                    <nav className="navbar navbar-expand-lg  container ">
                        <a className="navbar-brand" href="#">کلید</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/about">about</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/courses">Coursers</a>
                                </li>
                            </ul>

                        </div>
                    </nav>
                </div>
                <div className="container">
                    {this.props.children}
                </div>





            </div>
        );
    }
}

export default MainHeader;