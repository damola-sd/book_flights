export default function reducer(state, { type, payload }) {
    switch(type) {
        case "FETCH_FLIGHTS":
            return {
                ...state,
                flights: payload
            }
        case "FETCH_ERROR":
            return {
                ...state,
                errors: payload.errors
            }
        case "ARRIVAL_STATE":
            return {
                ...state,
                returnCode: payload
            }

        default: 
            return state;
    }
}