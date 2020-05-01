import React, {useState, useEffect} from 'react';
import ShowMoreText from 'react-show-more-text';

const ShowMoreDescription = (props) => {


    return (
        <div className="w-100  text-ex mt-3" dir="rtl">

             <div className={props.class}>
                <ShowMoreText
                    /* Default options */
                    lines={3}


                    more='مشاهده بیشتر '
                    less='مشاهده کمتر'
                    anchorClass='green-them'

                    // onClick={this.executeOnClick}
                    expanded={false}
                    // width={280}
                >

                    {props.desc}


                </ShowMoreText>
            </div>

        </div>
    );
};

export default ShowMoreDescription;