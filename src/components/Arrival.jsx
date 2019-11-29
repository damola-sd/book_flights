import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from "@material-ui/core/FormControl";
import { AddLocation } from '@material-ui/icons';
import Context from "../context";
import { makeStyles } from "@material-ui/core/styles";



const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(2),
    // minWidth: 120,
    Width: 250
  },
}));


export default function Arrival() {
  const classes = useStyles();
  const { state, dispatch } = React.useContext(Context);
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;
  const [arrival, setArrival] = React.useState("");
  


  const handleArrival = e => {
    setArrival(e.target.value);
  };


  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      const response = await fetch(`http://www.ije-api.tcore.xyz/v1/plugins/cities-type-ahead/${arrival}`);
      const cities = await response.json();

      if (active) {
        setOptions(cities.data);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading, arrival]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <FormControl className={classes.formControl}>
        <Autocomplete
      id="arrival"
      style={{ width: 150 }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      getOptionLabel={option => option.code}
      renderOption={option => option.name}
      onInputChange={(e, val) => {
        dispatch({
          type: "ARRIVAL_STATE",
          payload: val
        })
      }}
      options={options}
      loading={loading}
      renderInput={params => (
        <TextField
          {...params}
          value={arrival}
          onChange={handleArrival}
          label="Arrival"
          fullWidth
          variant="outlined"
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position="start">
                <AddLocation />
              </InputAdornment>
            ),
            endAdornment: (
              <React.Fragment>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
    </FormControl>
  
  );
}