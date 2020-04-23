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



    const
        handleChange = (event) => {
        setChecked(event.target.checked);
            let  products=cookie.load('basket');

            function addItems(products, rowbuy) {
                products.push(rowbuy);
                cookie.save('basket', products, {path: '/'});
                Buy.SetBuy(products);
            }
            ////id is same to lesson and chapter but row_id is specific

            let rowbuy={rowId:(`${props.id}+${props.row_id}`).toString(),id:props.id,type:props.data.type,content:props.data};

            //check if lesson is active so if click on chapter do nothing!

            if (props.isCheck){

            }else {
                if (event.target.checked === true) {

                    if (props.totalCheck ){
                        props.totalCheck(true)
                    }


                    //before add lesson check don't add chapter or deleted
                    if (rowbuy.type==="lesson") {
                        let indexItem=  products.findIndex(({ id }) => id === rowbuy.id);
                        if (indexItem===-1) {
                            addItems(products,rowbuy );
                        }else {
                            ////else if add chapter you can do it
                            products.splice(indexItem,1);
                            addItems(products,rowbuy );
                        }
                    }else {
                        addItems(products,rowbuy );
                    }


                } else {
                    if (props.totalCheck ){
                        props.totalCheck(false)
                    }
                    let indexItem=products.findIndex(({ rowId }) => rowId === rowbuy.rowId);
                    products.splice(indexItem,1);
                    cookie.save('basket', products, {path: '/'});
                    Buy.SetBuy(  products);

                }
            }



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







