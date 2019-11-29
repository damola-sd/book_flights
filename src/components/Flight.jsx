import React from "react";
import styled from "styled-components";

const SingleFlightDetail = styled.div`
  border: 1px solid black;
  background: darkslategrey;
  border-radius: 6px;
  margin: 10px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .airline {
      text-align: center;
  }

  .price {
      
  }
`;

const Flight = ({ flight }) => {
  return (
    <>
      <SingleFlightDetail>
        <div>
          <h3>Departure Details</h3>

          <span>
            Date: {flight.origin_destinations[0].segments[0].departure.date}
          </span>
          <br />
          <span>
            Time: {flight.origin_destinations[0].segments[0].departure.time}
          </span>
          <div>
            Departure City:{" "}
            {
              flight.origin_destinations[0].segments[0].departure.airport
                .city_name
            }{" "}
          </div>
        </div>
        <div className="airline">
            Airline:{" "}
            {flight.origin_destinations[0].segments[0].operating_airline.name}{" "}
          </div>
          <div className="price">
            Price: {flight.pricing.provider.currency.code}{" "}
            {flight.pricing.provider.total_fare}{" "}
          </div>
        <div>
          <h3>Arrival Details</h3>
          <span>
            Date: {flight.origin_destinations[0].segments[0].arrival.date}
          </span>
          <br />
          <span>
            Time: {flight.origin_destinations[0].segments[0].arrival.time}
          </span>
          <div>
            {" "}
            City:{" "}
            {
              flight.origin_destinations[0].segments[0].arrival.airport
                .city_name
            }{" "}
          </div>
        </div>
      </SingleFlightDetail>
    </>
  );
};

export default Flight;
