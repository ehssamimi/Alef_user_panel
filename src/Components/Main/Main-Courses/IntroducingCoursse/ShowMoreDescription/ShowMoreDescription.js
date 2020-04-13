import React, {useState, useEffect} from 'react';
import ShowMoreText from 'react-show-more-text';

const ShowMoreDescription = (props) => {


    return (
        <div className="w-100  text-ex" dir="rtl">
            <h3 className="header-color">{props.header}</h3>
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
    );
};

export default ShowMoreDescription;