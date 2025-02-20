import { Link } from "react-router-dom";
import { Row, Col, Card, Button } from "react-bootstrap";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={3} lg={4} className="g-4">
          {[
            {
              title: "CS1234 React JS",
              description: "Full Stack software developer",
              imgSrc: "/images/reactjs.jpg",
            },
            {
              title: "TELE6530 Connected Devices",
              description: "IOT Engineer",
              imgSrc: "/images/ConnectedDevices.jpg",
            },
            {
              title: "CSYE6220 Enterprise Software Design",
              description: "Backend Developer",
              imgSrc: "/images/j2ee.jpeg",
            },
            {
              title: "CSYE6220 Concepts of Object Oriented Design",
              description: "Java Developer",
              imgSrc: "/images/java.png",
            },
            {
              title: "INFO6205 Program Structures and Algorithms",
              description: "Leetcode",
              imgSrc: "/images/psa.jpeg",
            },
            {
              title: "TELE5330 Data Networking",
              description: "Network Engineer",
              imgSrc: "/images/networking.jpeg",
            },
            {
              title: "INFO6150 Web Design/User Experience",
              description: "Web Developer",
              imgSrc: "/images/webdev.jpeg",
            },
          ].map((course, index) => (
            <Col key={index} className="wd-dashboard-course">
              <Card style={{ width: "300px" }}>
                <Link
                  to="/Kambaz/Courses/1234/Home"
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <Card.Img
                    variant="top"
                    src={course.imgSrc}
                    width="100%"
                    height={160}
                  />
                  <Card.Body>
                    <Card.Title className="wd-dashboard-course-title">
                      {course.title}
                    </Card.Title>
                    <Card.Text className="wd-dashboard-course-description">
                      {course.description}
                    </Card.Text>
                    <Button variant="primary">Go</Button>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
