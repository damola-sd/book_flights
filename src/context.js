import { createContext } from "react";

const context = createContext({
    flights: [],
    errors: []
});


export default context;