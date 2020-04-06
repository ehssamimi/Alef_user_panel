import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Checkbox from "@material-ui/core/Checkbox/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel";


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
    const { classes } = props;
    const [checked, setChecked] = React.useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return (

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
                        checked={checked}
                        onChange={handleChange}

                        style={{color:'#215831'}}
                        value="checkedA"
                    />
                }
                label="خرید دوره "
            />


    );
}

CheckBoxCustom.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CheckBoxCustom);







