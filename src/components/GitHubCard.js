import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, BrowserRouter as Router } from "react-router-dom";
import mypic from "../mypic.jpg";

function GitHubCard() {
  return (
    <Router>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={mypic} />
        <Card.Body>
          <Card.Title>kylelarsen12</Card.Title>
          <Card.Text>Come see some of my work on github!</Card.Text>

          <Link className="btn btn-primary" to="github.com/kylelarsen12">
            Click Here!
          </Link>
        </Card.Body>
      </Card>
    </Router>
  );
}

export default GitHubCard;
