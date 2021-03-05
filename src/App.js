import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import login from "./pages/login";
import TransactionPage from "./pages/TransactionPage";
import User from "./pages/User";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/login" component={login} />
        <Route exact path="/transaction" component={TransactionPage} />
        <Route exact path="/user" component={User} />
      </Router>
    </div>
  );
}
export default App;
