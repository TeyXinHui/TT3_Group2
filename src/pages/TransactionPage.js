import React from "react";
import { withRouter } from "react-router-dom";
import Priceshow from "../components/PriceshowComponent";
import BuySell from "../components/BuySellComponent"

class TransactionPage extends React.Component {
    render() {
        return (
            <div className = "MainContainer">
                <div className = "PriceshowContainer">
                    <Priceshow />
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