import React from "react";
import { withRouter } from "react-router-dom";
import PriceShow from "../components/PriceShowComponent";
import BuySell from "../components/BuySellComponent"

class TransactionPage extends React.Component {
    render() {
        return (
            <div className = "MainContainer">
                <div className = "PriceShowContainer">
                    <PriceShow />
                </div>
                <br></br>
                <br></br>
                <div className = "BuySellContainer">
                    <BuySell />
                </div>
            </div>
        );
    }
}

export default withRouter(TransactionPage);