import React from "react";
import FlightsForm from "../src/components/FlightsForm";
import "./App.css";
import Context from "./context";
import reducer from "./reducer";
require('dotenv').config()

function App() {
  const initialState = React.useContext(Context);
  const [ state, dispatch ] = React.useReducer(reducer, initialState);
  return (
    <div className="App">
      <Context.Provider value={{ state, dispatch }}>
        <FlightsForm />
      </Context.Provider>
    </div>
  );
}

export default App;
