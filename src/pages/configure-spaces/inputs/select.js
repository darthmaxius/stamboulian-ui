import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import SelectMaterial from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const useStylesSelectConfigureSpaces = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: '100%',
  }
}));

export default function Select({ title, items, labelField, valueField }) {
  const classes = useStylesSelectConfigureSpaces();

  useEffect(() => {

  }, [items])

  if (items) {
    return (
      <FormControl className={classes.formControl}>
        <InputLabel id="simple-select-label">{title}</InputLabel>
        <SelectMaterial
          labelId="simple-select-label"
          id="simple-select"
          value={10}
          onChange={() => null}
        >
          {items.map((item, key) => {
            console.log(item)
            return <MenuItem key={key} value={item[valueField]}> {item[labelField]}</MenuItem>
          })}
        </SelectMaterial>
      </FormControl >
    )
  } else {
    return null
  }
}