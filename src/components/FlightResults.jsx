import React from "react";
import Context from "../context";
import Flight from "./Flight";

const FlightResults = () => {
  const { state, dispatch } = React.useContext(Context);
  console.log(state.flights);
  // const flights = state.flights
  return state.flights.map(flight => {
      return (
          <div>
              <Flight flight={flight} />;
          </div>

      )
  });
};

export default FlightResults;
