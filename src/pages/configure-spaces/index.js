import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import Select from './inputs/select';
import Datepicker from './inputs/datepicker';

import ConfigureSpacesService from '../../services/configure-spaces';


const useStylesConfigureSpaces = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: '100%',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  }
}));

export default function ConfigureSpaces(props) {
  const classes = useStylesConfigureSpaces();

  const [initComponent, setInitComponent] = useState(false)
  const [config, setConfig] = useState({});

  const [centre, setCentre] = useState('');
  const [service, setService] = useState('');
  const [subservice, setSubservice] = useState('');

  const [services, setServices] = useState([]);
  const [subservices, setSubservices] = useState([]);

  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');

  const setCentreHandler = (value) => {
    if (value !== centre) {
      setCentre(value);

      const centreFiltered = config.centres.find(x => x.id === value);
      setServices(centreFiltered.services);
    }
  }

  const setServiceHandler = (value) => {
    if (value !== service) {
      setService(value);

      console.log("setServiceHandler: ", value, services)

      const serviceFiltered = services.find(x => x.id === value);
      setSubservices(serviceFiltered.subservices);
    }
  }


  useEffect(() => {
    props.setTitlePage('Configurar Franjas');

    if (!initComponent) {
      setInitComponent(true);

      ConfigureSpacesService.getConfig().then(result => {
        setConfig(result)
        console.log("RESULT: ", result)
      })
    }
  }, [props, initComponent, config]);

  return (
    <Paper className={classes.paper}>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      {initComponent && config &&
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Select
              items={config.centres}
              title="Centro"
              labelField="name"
              valueField="id"
              selected={centre}
              onChange={setCentreHandler}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Select
              items={services}
              title="Servicio"
              labelField="name"
              valueField="id"
              selected={service}
              onChange={setServiceHandler}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Select
              items={subservices}
              title="Sub Servicio"
              labelField="name"
              valueField="id"
              selected={subservice}
              onChange={setSubservice}
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <Datepicker title="Desde fecha" value={dateFrom} onChange={setDateFrom} />
          </Grid>
          <Grid item xs={false} sm={2} />
          <Grid item xs={12} sm={5}>
            <Datepicker title="Hasta fecha" value={dateTo} onChange={setDateTo} />
          </Grid>
        </Grid>
      }
    </Paper>
  );
}
