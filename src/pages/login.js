import React from "react";
import { withRouter } from "react-router-dom";
import User from "../model/user";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        };
        this.userApi = new User();
    }

    render() {
        return (
            <Container>
                <Form
                    onSubmit={(ev) => {
                        ev.preventDefault();
                        this.userApi
                            .login(this.state.username, this.state.password)
                            .then((_) => {
                                this.props.history.push("/user");
                            })
                            .catch((err) => {
                                console.log(err);
                                alert("authentication failed");
                            });
                    }}
                >
                    <Row style={{ marginTop: "100px" }}>
                        <Col style={{ textAlign: "left" }}>
                            <Form.Group controlId='username' name='username'>
                                <Form.Label>Username</Form.Label>
                                <Form.Control
                                    required
                                    onChange={(e) => {
                                        var username = e.target.value;
                                        if (username != null) {
                                            this.setState({
                                                username: username,
                                            });
                                        }
                                    }}
                                    placeholder='Enter username'
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: "10px" }}>
                        <Col style={{ textAlign: "left" }}>
                            <Form.Group controlId='password' name='password'>
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    required
                                    type='password'
                                    onChange={(e) => {
                                        var pw = e.target.value;
                                        if (pw != null) {
                                            this.setState({ password: pw });
                                        }
                                    }}
                                    placeholder='Enter password'
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: "30px" }}>
                        <Col style={{ textAlign: "center" }}>
                            <Button type='submit' variant='success'>
                                LOGIN
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        );
    }
}
export default withRouter(Login);
