import { Form, Col, Row, Button } from "react-bootstrap";

function Home(){
    return(
        <Form>
            <Row>
                <Col>
                    <Form.Label>Informe o email</Form.Label>
                    <Form.Control type="email"/>
                </Col>
            </Row>
            <Row>
                <Button variant="success">Ok</Button>
            </Row>
        </Form>
    );
}

export default Home;