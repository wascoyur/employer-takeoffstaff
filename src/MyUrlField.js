import * as React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import LunchIcon from '@material-ui/icons/Launch';

const useStyles = makeStyles({
  link:{
    textDecoration: 'none',
  },
  icon:{
    width: '0.5rem',
    paddingLeft: 2
  }
})

const MyUrlField = ({record = {}, source}) =>{
  const classes = useStyles();
  return (<a href={record[source]} className={classes.link}>
    {record[source]}
    <LunchIcon className={classes.icon}/>
  </a>)
}

export default MyUrlField;