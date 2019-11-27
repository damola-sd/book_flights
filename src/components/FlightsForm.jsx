import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button
} from "@material-ui/core";
import { Search } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(2),
    // minWidth: 120,
    Width: 250
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  textField: {
    width: 100,
    fontSize: 10
  },
  mediumFont: {
    fontSize: 10
  },
  labelStyle: {
    margin: theme.spacing(1),
    fontSize: 10
  }
}));

const FlightsForm = () => {
  const classes = useStyles();
  return (
    <div className="flightSearch">
      <form>
        <FormControl className={classes.formControl}>
          <TextField
            className={classes.textField}
            id="departure"
            placeholder="Departure"
            required="true"
            type="text"
          />
        </FormControl>

        <FormControl className={classes.formControl}>
          <TextField
            className={classes.textField}
            id="arrival"
            placeholder="Arrival"
            required="true"
            type="text"
          />
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel className={classes.labelStyle} id="departure-date-label">
            Departure Date
          </InputLabel>

          <TextField
            labelId="departure-date-label"
            className={classes.textField}
            id="departure_date"
            placeholder="Departure Date"
            required="true"
            type="date"
          />
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel className={classes.labelStyle} id="arrival-date-label">
            Arrival Date
          </InputLabel>

          <TextField
            labelId="arrival-date-label"
            className={classes.textField}
            id="arrival_date"
            placeholder="Arrival Date"
            required="true"
            type="date"
          />
        </FormControl>

        <FormControl>
          <InputLabel className={classes.labelStyle} id="class-label">
            Cabin Class
          </InputLabel>
          <Select
            className={classes.textField}
            labelId="class-label"
            id="cabin-class-select"
            value={"All"}
            //   onChange={handleChange}
          >
            <MenuItem value={"All"}>All</MenuItem>
            <MenuItem value={"First"}>First</MenuItem>
            <MenuItem value={"Premium"}>Premium</MenuItem>
            <MenuItem value={"Economy"}>Economy</MenuItem>
            <MenuItem value={"Business"}>Business</MenuItem>
          </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
          <TextField
            className={classes.textField}
            id="arrival_date"
            placeholder="No of Adults"
            type="number"
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <TextField
            className={classes.textField}
            id="arrival_date"
            placeholder="No of Children"
            type="number"
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <TextField
            className={classes.textField}
            id="arrival_date"
            placeholder="No of Infants"
            type="number"
          />
        </FormControl>
        <FormControl className={classes.formControl}> 
        <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<Search />}
      >
        Find Flights
      </Button>

        </FormControl>
      </form>
    </div>
  );
};

export default FlightsForm;
