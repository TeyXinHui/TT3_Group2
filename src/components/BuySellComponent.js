import React from "react";
import { withRouter } from "react-router-dom";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Asset from "../model/asset";
class BuySell extends React.Component {
  constructor(props) {
    super(props);
    this.assetapi = new Asset();
    this.state = {
      assetBalance: null,
      cashBalance: null,
      amount: 0,
    };
  }

  init() {
    // get wallet amount
    this.user = JSON.parse(localStorage.getItem("user"));
    this.assetapi.balance(this.user.accountKey).then((response) => {
      this.setState({
        assetBalance: response.assetBalance,
        cashBalance: response.cashBalance,
      });
    });
  }

  render() {
    return (
      <Container>
        <h1>Buy/Sell Assets</h1>
        <Row style={{ marginTop: "100px" }}>
          <Col style={{ textAlign: "center" }}>ASSET BALANCE</Col>
          <Col style={{ textAlign: "center" }}>CASH BALANCE</Col>
        </Row>
        <Row style={{ marginBottom: "10px" }}>
          <Col style={{ textAlign: "center" }}>
            {this.state.assetBalance ? this.state.assetBalance : "-"}
          </Col>
          <Col style={{ textAlign: "center" }}>
            {this.state.cashBalance ? this.state.cashBalance : "-"}
          </Col>
        </Row>
        <Row style={{ marginTop: "100px" }}>
          <Col style={{ textAlign: "center" }}>
            <Form
              onSubmit={(ev) => {
                ev.preventDefault();
              }}
            >
              <Form.Group controlId="amount">
                <Form.Label>AMOUNT</Form.Label>
                <Form.Control
                  onChange={(ev) => {
                    var newamt = ev.target.valueAsNumber;
                    if (isNaN(newamt)) {
                      newamt = 0;
                    }
                    this.setState({
                      amount: newamt,
                    });
                  }}
                  required
                  type="number"
                  placeholder="Enter amount"
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row style={{ marginBottom: "30px" }}>
          <Col style={{ textAlign: "center" }}>
            <Button
              variant="success"
              onClick={() => {
                var amount = this.state.amount;
                if (amount <= 0) {
                  alert("Invalid amount");
                } else {
                  this.assetapi
                    .buy(this.user.accountKey, amount)
                    .then((resp) => {
                      this.init();
                    });
                }
              }}
            >
              BUY
            </Button>
          </Col>
          <Col style={{ textAlign: "center" }}>
            <Button
              variant="danger"
              onClick={() => {
                var amount = this.state.amount;
                if (amount <= 0) {
                  alert("Invalid amount");
                } else {
                  this.assetapi
                    .sell(this.user.accountKey, amount)
                    .then((resp) => {
                      this.init();
                    });
                }
              }}
            >
              SELL
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BuySell;
