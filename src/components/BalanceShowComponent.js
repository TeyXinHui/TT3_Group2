import { useEffect, useState } from "react";
import axios from "axios";

import { ListGroup } from "react-bootstrap";

const BalanceShow = (props) => {
  const [assetBalance, setAssetBalance] = useState(0);
  const [cashBalance, setCashBalance] = useState(0);

  useEffect(() => {
    axios
      .post(
        "https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/balance",
        {
          accountKey: props.accountKey,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "PXeFPCR73iU4khaSqcRM1KBX5SblxPm4R1Rzt07a",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        const data = res.data;
        setAssetBalance(data.assetBalance);
        setCashBalance(data.cashBalance);
      });
  }, []);

  return (
    <ListGroup horizontal>
      <ListGroup.Item>Cash Balance: ${cashBalance.toFixed(2)}</ListGroup.Item>
      <ListGroup.Item>Asset Balance: {assetBalance}</ListGroup.Item>
    </ListGroup>
  );
};

export default BalanceShow;
