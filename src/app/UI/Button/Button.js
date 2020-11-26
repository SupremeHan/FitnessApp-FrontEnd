import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        marginTop: '20px',
        padding: '10px 20px',
        border: '2px solid black'
      },
    },
}));

export default function MyButton(props) {
    const classes = useStyles();
    const { children, path} = props;
    const text = '';

    return(
        <div className={classes.root}>
            <Button 
            size="small"
            >
                {children}
            </Button>
        </div>
    )
}