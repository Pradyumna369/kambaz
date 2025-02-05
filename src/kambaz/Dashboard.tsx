import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"      //All elements are linked to home in this component
                className="wd-dashboard-course-link" >
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"      //All elements are linked to home in this component
                className="wd-dashboard-course-link" >
            <img src="/images/ConnectedDevices.jpg" width={200} />
            <div>
              <h5> TELE6530 Connected Devices </h5>
              <p className="wd-dashboard-course-title">
                IOT engineer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"      //All elements are linked to home in this component
                className="wd-dashboard-course-link" >
            <img src="/images/j2ee.jpeg" width={200} />
            <div>
              <h5> CSYE6220 Enterprise Software Design </h5>
              <p className="wd-dashboard-course-title">
                Backend Developer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"      //All elements are linked to home in this component
                className="wd-dashboard-course-link" >
            <img src="/images/java.png" width={200} />
            <div>
              <h5> CSYE6220 Concepts of Object Oriented Design </h5>
              <p className="wd-dashboard-course-title">
                Java Developer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"      //All elements are linked to home in this component
                className="wd-dashboard-course-link" >
            <img src="/images/psa.jpeg" width={200} />
            <div>
              <h5> INFO6205 Program Structures and Algorithms </h5>
              <p className="wd-dashboard-course-title">
                Leetcode  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"      //All elements are linked to home in this component
                className="wd-dashboard-course-link" >
            <img src="/images/networking.jpeg" width={200} />
            <div>
              <h5> TELE5330 Data Networking </h5>
              <p className="wd-dashboard-course-title">
                Network engineer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"      //All elements are linked to home in this component
                className="wd-dashboard-course-link" >
            <img src="/images/webdev.jpeg" width={200} />
            <div>
              <h5> INFO6150 Web Design/User Experience </h5>
              <p className="wd-dashboard-course-title">
                Web developer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
);}
