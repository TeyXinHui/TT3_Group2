import React from "react";
import { withRouter } from "react-router-dom";
import Priceshow from "../components/PriceshowComponent";

class PricePage extends React.Component {
    render() {
        return (
            <div className = "container">
                <Priceshow />
            </div>
        );
    }
}

export default withRouter(PricePage);