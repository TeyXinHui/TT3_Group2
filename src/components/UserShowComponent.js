import { Card } from "react-bootstrap";

const UserShow = (props) => {
  // note: this is a dumb component, pass "user" props in to use
  // json object returned from techtrek/login endpoint
  const user = JSON.parse(localStorage.getItem('user'));

  if(user) {
  return (
    <Card>
      <Card.Header as="h4">Welcome, {user.username}</Card.Header>
      <Card.Body>
        <Card.Title>
          {user.firstName}, {user.lastName}
        </Card.Title>
        <Card.Text>NRIC: {user.nric}</Card.Text>
        <Card.Text>Email: {user.email}</Card.Text>
        <Card.Text>Phone number: {user.phoneNumber}</Card.Text>
        <Card.Text>Address: {user.address}</Card.Text>
      </Card.Body>
    </Card> 
    }
  ) else {
    return(null)
  };
};

export default UserShow;
