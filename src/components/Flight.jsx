import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActions, CardContent, Button, Typography } from "@material-ui/core";

const useStyles = makeStyles({
    card: {
      maxWidth: 450,
      margin: "auto",
      marginTop: 10,
      display: 'flex',
      justifyContent: 'center',
      boxShadow: '5px 10px black',
      borderRadius: '6px',
    },
    price: {
        margin: 'auto',
        display: 'block',
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

const Flight = ({ flight }) => {
const classes = useStyles();

  return (
    <>
      <Card className={classes.card}>
          <CardContent>
              <Typography className={classes.title} color="textSecondary"gutterBottom>
              Departure Details
              </Typography>
              <Typography variant="h5" component="h5">
              Date: {flight.origin_destinations[0].segments[0].departure.date}
              </Typography>
              <Typography variant="h5" component="h5">
              Time: {flight.origin_destinations[0].segments[0].departure.time}
              </Typography>
              <Typography variant="h5" component="h5">
              Departure City:{" "}
            {
              flight.origin_destinations[0].segments[0].departure.airport
                .city_name
            }{" "}
              </Typography>
              <Typography variant="h5" component="h5">
              Airline:{" "}
            {flight.origin_destinations[0].segments[0].operating_airline.name}{" "}
              </Typography>
              <Typography className={classes.price} variant="h5" component="h5">
              Price: {flight.pricing.provider.currency.code}{" "}
            {flight.pricing.provider.total_fare}{" "}
              </Typography>
              <br></br>
              <Typography className={classes.title} color="textSecondary"gutterBottom>
              Arrival Details
              </Typography>
              <Typography variant="h5" component="h5">
              Date: {flight.origin_destinations[0].segments[0].arrival.date}
              </Typography>
              <Typography variant="h5" component="h5">
              Time: {flight.origin_destinations[0].segments[0].arrival.time}
              </Typography>
              <Typography variant="h5" component="h5">
              {" "}
            City:{" "}
            {
              flight.origin_destinations[0].segments[0].arrival.airport
                .city_name
            }{" "}
              </Typography>
              <CardActions>
        <Button className={classes.price} size="medium" color="primary">Book Now</Button>
      </CardActions>
          </CardContent>
      </Card>
        
    </>
  );
};

export default Flight;
