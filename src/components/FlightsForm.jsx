import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  CircularProgress,
  InputAdornment
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { Search, AddLocation } from "@material-ui/icons";
import Arrival from "./Arrival";
import Context from "../context";
import axios from "axios";
require("dotenv").config();

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
    fontSize: 12
  }
}));

const FlightsForm = () => {
  const classes = useStyles();
  const { state, dispatch } = React.useContext(Context);
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const [departure, setDeparture] = React.useState("");
  const [departureCode, setDepartureCode] = React.useState("");
  const [departureDate, setDepartureDate] = React.useState("");
  const [returnDate, setReturnDate] = React.useState("");
  const [cabin, setCabin] = React.useState("");
  const [adults, setAdults] = React.useState("");
  const [children, setChildren] = React.useState("");
  const [infants, setInfants] = React.useState("");

  let n_date = new Date();
  let month = n_date.getMonth() + 1;
  var day = n_date.getDate();
  var year = n_date.getFullYear();
  if (month < 10) month = "0" + month.toString();
  if (day < 10) day = "0" + day.toString();
  var today = year + "-" + month + "-" + day;

  const convertDate = strDate => {
    var oldDate = new Date(strDate);
    let month = oldDate.getMonth() + 1;
    var day = oldDate.getDate();
    var year = oldDate.getFullYear();
    if (month < 10) month = "0" + month.toString();
    if (day < 10) day = "0" + day.toString();
    var newDate = month + "/" + day + "/" + year
    return newDate;
  };
  
  let FdepartureDate = convertDate(departureDate);
  let FreturnDate = convertDate(returnDate);

  console.log(today);
  console.log(departureDate);
  console.log(adults);
  console.log(children);
  console.log(infants);
  console.log(departureCode);
  console.log(state.returnCode);
  console.log(cabin);
  console.log(state.flights);


  const loading = open && options.length === 0;

  const handleDeparture = e => {
    setDeparture(e.target.value);
  };

  const handleDepartureDate = e => {
    setDepartureDate(e.target.value);
  };
  const handleReturnDate = e => {
    setReturnDate(e.target.value);
  };

  const handleCabinType = e => {
    setCabin(e.target.value);
  };

  const handleAdults = e => {
    setAdults(e.target.value);
  };

  const handleChildren = e => {
    setChildren(e.target.value);
  };

  const handleInfants = e => {
    setInfants(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("http://www.ije-api.tcore.xyz/v1/flight/search-flight", {
        header: {
          cookie: "x9gXWHPzPlatxtfALr0u"
        },
        body: {
          origin_destinations: [
            {
              departure_city: departureCode,
              destination_city: state.returnCode,
              departure_date: FdepartureDate,
              return_date: FreturnDate,
            }
          ],
          search_param: {
            no_of_adult: adults,
            no_of_child: children ,
            no_of_infant: infants,
            preferred_airline_code: "",
            calendar: true,
            cabin: cabin,
          }
        }
      })
      .then(res => {
        dispatch({
          type: "FETCH_FLIGHTS",
          payload: res.data.body.data.itineraries
        });
        // console.log(res.data.body.data.itineraries[2])
        // console.log(state.flights)
      })
      .catch(err => {
        console.log(err);
        dispatch({
          type: "FETCH_ERROR",
          payload: err
        });
      });
  };

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      const response = await fetch(
        `http://www.ije-api.tcore.xyz/v1/plugins/cities-type-ahead/${departure}`
      );
      const cities = await response.json();
      console.log(state.flights);

      if (active) {
        setOptions(cities.data);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading, departure, state]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);
  return (
    <div className="flightSearch">
      <form>
        <FormControl className={classes.formControl}>
          <Autocomplete
            id="departure"
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
            options={options}
            loading={loading}
            // value={option => option.code}
            onInputChange={(e, val) => {
              setDepartureCode(val);
            }}
            renderInput={params => (
              <TextField
                {...params}
                // onChange=
                value={option => option.code}
                variant="outlined"
                onChange={handleDeparture}
                label="Departure"
                fullWidth
                InputProps={{
                  ...params.InputProps,
                  startAdornment: (
                    <InputAdornment position="start">
                      <AddLocation />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <React.Fragment>
                      {loading ? (
                        <CircularProgress color="inherit" size={20} />
                      ) : null}
                      {params.InputProps.endAdornment}
                    </React.Fragment>
                  )
                }}
              />
            )}
          />
        </FormControl>

        <FormControl>
          <Arrival />
        </FormControl>

        <FormControl className={classes.formControl}>
          <input
            name="departure_date"
            type="date"
            min={today}
            onChange={handleDepartureDate}
          />
        </FormControl>

        <FormControl className={classes.formControl}>
          <input
            name="return_date"
            type="date"
            min={departureDate}
            onChange={handleReturnDate}
          />
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel className={classes.labelStyle} id="class-label">
            Cabin Class
          </InputLabel>
          <Select
            className={classes.textField}
            labelId="class-label"
            id="cabin-class-select"
            // value={"All"}
            variant="outlined"
            onChange={handleCabinType}
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
            id="adults"
            placeholder="No of Adults"
            type="number"
            variant="outlined"
            onChange={handleAdults}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <TextField
            className={classes.textField}
            id="children"
            placeholder="No of Children"
            type="number"
            variant="outlined"
            onChange={handleChildren}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <TextField
            className={classes.textField}
            id="infants"
            placeholder="No of Infants"
            type="number"
            variant="outlined"
            onChange={handleInfants}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<Search />}
            onClick={handleSubmit}
          >
            Find Flights
          </Button>
        </FormControl>
      </form>
    </div>
  );
};

export default FlightsForm;
