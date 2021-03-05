import UserShow from "../components/UserShow";
import BalanceShow from "../components/BalanceShow";

const User = (props) => {
  const user = {
    phoneNumber: "(+65) 90721077",
    accountKey: "554fd8be-b1dd-4430-b150-4d3335ef8427",
    lastName: "Stracke",
    username: "Group2",
    address: "4337 Vernon Lodge",
    email: "group2@techtrek.com",
    firstName: "Leopoldo",
    nric: "S63336905T",
  };

  return (
    <div>
      <UserShow user={user} />
      <BalanceShow accountKey={user.accountKey} />
    </div>
  );
};

export default User;