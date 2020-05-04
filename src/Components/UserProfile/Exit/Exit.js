import React, {useState, useEffect} from 'react';
import Loader from "../../Common/Loader/Loader";

const Exit = (props) => {
    const [isLoder, setisLoder] = useState(true);


    return (
        <div>

            <div className='d-flex justify-content-center align-items-center'>
                <div className='col-6'>
                    <Loader/>
                </div>
            </div>

        </div>
    );
};

export default Exit;