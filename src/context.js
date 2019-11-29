import { createContext } from "react";

const context = createContext({
    flights: [],
    errors: [],
    returnCode: ""
});


export default context;