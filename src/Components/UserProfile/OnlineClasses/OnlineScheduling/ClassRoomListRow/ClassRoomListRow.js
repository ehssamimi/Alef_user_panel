import React, {useState, useEffect} from 'react';
import {Card, CardBody, CardTitle} from "reactstrap";
import PerfectScrollbar from "react-perfect-scrollbar";

const ClassRoomListRow = (props) => {
    console.log(props.list)


    return (
        <div className="mt-2 col-12">
            <Card>
                <CardBody>
                    {/*<CardTitle>*/}
                    {/*    <span>لیست کلاس ها</span>*/}
                    {/*    <div className="row col-12 justify-content-between  m-0 ">*/}
                    {/*        <div   >*/}
                    {/*            <span className={`log-indicator align-middle bg-plum `}/>*/}
                    {/*            <span className=" ">public</span>*/}
                    {/*        </div>*/}
                    {/*        <div   >*/}
                    {/*            <span className={`log-indicator align-middle bg-coral `}/>*/}
                    {/*            <span className="">special</span>*/}
                    {/*        </div>*/}
                    {/*        <div  >*/}
                    {/*            <span className={`log-indicator align-middle bg-lightskyblue `}/>*/}
                    {/*            <span className=" ">personal</span>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</CardTitle>*/}
                    <div className=" ">
                        <PerfectScrollbar
                            options={{ suppressScrollX: true, wheelPropagation: false }}
                        >
                            <table className="table table-sm table-borderless">
                                <tbody>
                                {
                                    props.list?
                                        props.list.map((log, index) => {
                                            return (
                                                <tr key={index}>
                                                    {/*<td>*/}
                                                    {/*    <span className={`log-indicator align-middle  ${log.bg}`}/>*/}
                                                    {/*</td>*/}
                                                    <td>
                                                        <span className="font-weight-medium FsFooterLogin">{log.id}</span>
                                                    </td>
                                                    <td className="text-right">
                                                        <span className="text-muted FsFooterLogin">{log.label}</span>
                                                    </td>
                                                </tr>
                                            );
                                        })
                                        :""
                                }

                                </tbody>
                            </table>
                        </PerfectScrollbar>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
};

export default ClassRoomListRow;