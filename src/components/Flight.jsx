import React from 'react';
import styled from 'styled-components';

const SingleFlightDetail = styled.div`
    border: 1px solid black;
    background: darkslategrey;
    border-radius: 6px;
`;

const Flight = ({ flight }) => {
    return (
        <>
        <SingleFlightDetail>
        <h3>Departure Details</h3>
        <div>
            <span>Date: {flight.departure.date}</span>
            <br />
            <span>Time: {flight.departure.time}</span>

            <h5>Airport Details</h5>
            <div>Airport Name: {flight.departure.airport.name} </div>
            <div>Terminal: {flight.departure.airport.terminal} </div>
            <div>Country: {flight.departure.airport.country_name} </div>
            <div>City: {flight.departure.airport.city_name} </div>

        </div>

        <h3>Arrival Details</h3>
        <div>
            <span>Date: {flight.arrival.date}</span>
            <br />
            <span>Time: {flight.arrival.time}</span>

            <h5>Airport Details</h5>
            <div>Airport Name: {flight.arrival.airport.name} </div>
            <div>Terminal: {flight.arrival.airport.terminal} </div>
            <div>Country: {flight.arrival.airport.country_name} </div>
            <div>City: {flight.departure.airport.city_name} </div>

        </div>
        <h3>Flight Details</h3>
        <div>
            <span>Airline: {flight.operating_airline.name}</span>
            <br />
            <span>Flight Number: {flight.flight_number}</span>

            <h5>Plane Details</h5>
            <div>Plane Type: {flight.equipment.name} </div>
            <div>Plane Code: {flight.equipment.code} </div>

        </div>
        </SingleFlightDetail>
        </>
    )
}


export default Flight;