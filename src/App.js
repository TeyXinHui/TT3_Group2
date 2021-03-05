import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import transaction from "./pages/transaction";
import PricePage from "./pages/PricePage"
import UserShow from "./components/UserShow";

function myUserShow() {
  const user = {
        phoneNumber: "(+65) 90721077",
        accountKey: "554fd8be-b1dd-4430-b150-4d3335ef8427",
        lastName: "Stracke",
        username: "Group2",
        address: "4337 Vernon Lodge",
        email: "group2@techtrek.com",
        firstName: "Leopoldo",
        nric: "S63336905T"
    }
  return( <UserShow user={user}/>)
}

function App() {
    
    return (
        <div className='App'>
            <Router>
                <Route exact path='/price' component={PricePage} />
                <Route exact path='/transaction' component={transaction} />
                <Route exact path='/user' component={myUserShow} />
            </Router>
        </div>
      )
};
export default App;
