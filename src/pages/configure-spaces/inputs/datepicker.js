import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStylesDatepickerConfigureSpaces = makeStyles((theme) => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '100%',
  }
}));

export default function DatePicker({ title, value, onChange, defaultValue }) {
  const classes = useStylesDatepickerConfigureSpaces();

  const handleChange = (event) => {
    onChange(event.target.value);
  };


  return (
    <TextField
      id="date"
      label={title}
      type="date"
      defaultValue={defaultValue}
      className={classes.textField}
      InputLabelProps={{
        shrink: true,
      }}
      onChange={handleChange}
      value={value}
    />
  )
}