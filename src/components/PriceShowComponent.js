import React from "react";
import "./PriceShowComponent.css";

class PriceShow extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [{ price: "NIL", assetSymbol: "NIL", timestamp: "NIL" }],
    };
  }

  /*     componentDidMount(){

        console.log("Component has mounted")
        this.fetchData()

    } */

  async fetchData() {
    try {
      // Fetch data from api given
      const response = await fetch(
        "https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/pricing/current",
        {
          method: "POST",
          headers: {
            "x-api-key": "PXeFPCR73iU4khaSqcRM1KBX5SblxPm4R1Rzt07a",
          },
        }
      )
        .then((response) => response.json())
        .then((newdata) =>
          this.setState({
            data: [newdata],
          })
        );
    } catch (err) {
      console.log(err);
    }
  }

  renderTableHeader() {
    let header = Object.keys(this.state.data[0]);
    console.log(header);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  }

  renderTableData() {
    return this.state.data.map((entry, index) => {
      const { price, assetSymbol, timestamp } = entry;
      return (
        <tr key={price}>
          <td>{price}</td>
          <td>{assetSymbol}</td>
          <td>{timestamp}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div className="container">
        <h1 id="title">Show Prices</h1>
        <button onClick={this.fetchData.bind(this)}>Refresh</button>
        <table id="showpricetable">
          <tbody>
            <tr>{this.renderTableHeader()}</tr>
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default PriceShow;
