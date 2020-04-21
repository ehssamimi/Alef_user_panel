import React, {useContext, useEffect} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Checkbox from "@material-ui/core/Checkbox/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel";
import cookie from 'react-cookies'
import {BuyContext} from "../Context/BuyProvider";


const styles = {
    checked: {
        '&, & + $label': {
            color: '#215831',
           fontFamily:"IRANSans"
        },
    },
    label: {
        fontFamily:"IRANSans"

    },
    root:{
        border: '2px solid #215831',
        paddingRight:"0.3em",
        paddingLeft:"0.3em",
        borderRadius: '10px'
    }
};

function CheckBoxCustom(props) {
    const Buy=useContext(BuyContext);
    // console.log(Buy)

    const { classes } = props;
    const [checked, setChecked] = React.useState( false);

    console.log('checked');
    console.log(checked);



    const handleChange = (event) => {
        setChecked(event.target.checked);
        let  products=cookie.load('basket');
        let BuyType=Buy.buy.type;
        console.log(BuyType);

        if (event.target.checked===true){
            products[JSON.stringify(props.data)]=props.data;
            cookie.save('basket', products, { path: '/' });
            Buy.SetBuy("lesson",products);
            if (props.totalCheck){
                props.totalCheck(true)
            }
        }else {
            delete products[JSON.stringify(props.data)];
            cookie.save('basket', products, { path: '/' });
            Buy.SetBuy("lesson",products);
            if (props.totalCheck){
                props.totalCheck(false)
            };
        }

        console.log("basket")
        console.log(cookie.load('basket'))


    };

    return (
        <div className="d-inline-block" dir='ltr'>
            {
                // props.check?
                    <FormControlLabel
                        classes={{
                            label: classes.label,
                            root:classes.root
                        }}
                        control={
                            <Checkbox
                                classes={{
                                    checked: classes.checked,
                                }}
                                checked={props.isCheck?true:checked}
                                // checked={checked}
                                onChange={handleChange}
                                style={{color:'#215831'}}
                                value="checkedA"
                            />
                        }
                        label="خرید دوره "
                    />
                    // :""
            }
        </div>





    );
}

CheckBoxCustom.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CheckBoxCustom);







