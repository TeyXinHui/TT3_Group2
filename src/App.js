import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import transaction from "./pages/transaction";
function App() {
    return (
        <div className='App'>
            <Router>
                <Route exact path='/transaction' component={transaction} />
            </Router>
        </div>
    );
}

export default App;
