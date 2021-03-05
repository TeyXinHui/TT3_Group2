import { useEffect, useState } from "react";
import axios from "axios";

const BalanceShow = (props) => {
  const [accountKey, setAccountKey] = useState("");
  const [assetBalance, setAssetBalance] = useState(0);
  const [cashBalance, setCashBalance] = useState(0);

  useEffect(() => {
    axios
      .post(
        "https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/balance",
        {
          accountKey: "554fd8be-b1dd-4430-b150-4d3335ef8427",
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
        setAccountKey(data.accountKey);
        setAssetBalance(data.assetBalance);
        setCashBalance(data.cashBalance);
      });
  }, []);

  return (
    <div>
      <p>Cash Balance: ${cashBalance.toFixed(2)}</p>
      <p>Asset Balance: {assetBalance}</p>
    </div>
  );
};

export default BalanceShow;
