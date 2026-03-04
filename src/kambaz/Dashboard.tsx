import { Link } from "react-router-dom";
import { Row, Col, Card } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function Dashboard(
  { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse, unenrollFromCourse, showEnrollments, setShowEnrollments,
    enrollInCourse, enrollments }: {
    courses: any[]; course: any; setCourse: (course: any) => void;
    addNewCourse: () => void; deleteCourse: (course: any) => void;
    updateCourse: () => void; unenrollFromCourse: (courseId: string) => void;
    showEnrollments?: boolean; setShowEnrollments?: (showEnrollments: boolean) => void;
    enrollInCourse: (courseId: string) => void; enrollments: any[] }
  ) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const showAllCourses = () => {
      setShowEnrollments && setShowEnrollments(!showEnrollments);
    }

  return (
    <div id="wd-dashboard">
      <div id="wd-dashboard-welcome" className="d-flex justify-content-between">
        <h1 id="wd-dashboard-title">Dashboard</h1> 
        {
          currentUser && currentUser.role === "STUDENT" && (
            <h2>Welcome, {currentUser.firstName} {currentUser.lastName}</h2>
          )
        }
      </div>
      
      <hr />
      {
        currentUser && currentUser.role === "FACULTY" && (
          <>
            <h5>New Course
            <button className="btn btn-primary float-end"
            id="wd-add-new-course-click"
            onClick={addNewCourse} > Add </button>
            <button className="btn me-2 btn-warning float-end"
            id="wd-update-new-course-click"
            onClick={updateCourse} > Update </button>
            </h5>
            <input value={course.name} className="form-control mb-2" 
                  onChange={(e) => setCourse({...course,name:e.target.value})}  />
            <textarea value={course.description} className="form-control"
                  onChange={(e) => setCourse({...course, description: e.target.value})}/>
            <hr />
        </>
        )
      }
      {
        currentUser && currentUser.role === "STUDENT" && (
          <div id="wd-dashboard-welcome" className="d-flex justify-content-between">
            {
              showEnrollments ? (
                <h2>My Courses ({courses.length})</h2>
              ) : ( <h2> All Courses ({courses.length}) </h2>)
            } 
          {
            currentUser && currentUser.role === "STUDENT" && (
              <button className="btn btn-primary float-end" onClick={() => {
                showAllCourses();
              }}>
                Enrollments
              </button>
            )
          }
      </div>
        )
      }
      {
        currentUser && currentUser.role === "FACULTY" && (
          <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
        )
      }
      <div id="wd-dashboard-courses">
        <Row xs={1} md={3} lg={4} className="g-4">
          {courses
          .map((course, index) => (
            <Col key={index} className="wd-dashboard-course" style={{ width:"300px" }}>
              <Card>
                <Link
                  to={`/Kambaz/Courses/${course._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <img
                    src="/images/reactjs.jpg"
                    width="100%"
                    height={160}
                  />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title" style={{maxLines: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap"}}>
                      {course.name}</h5>
                    <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{maxHeight:100}}>
                      {course.description} </p>
                    <button className="btn btn-primary">Go</button>
                    {
                      currentUser.role === "FACULTY" && 
                       (
                        <>
                          <button onClick={(event) => {
                            event.preventDefault();
                            deleteCourse(course._id);
                          }}
                          className="btn btn-danger float-end"
                          id="wd-delete-course-click">
                            Delete
                          </button>
                          <button onClick={(event) => {
                            event.preventDefault();
                            setCourse(course);
                          }}
                          className="btn btn-warning me-2 float-end">
                            Edit
                          </button>
                        </>
                      )
                    }
                    {
                      currentUser.role === "STUDENT" && (
                      (enrollments.some((enrollment) =>
                        enrollment.course === course._id ))?
                      (
                        <button onClick={(event) => {
                            event.preventDefault();
                            unenrollFromCourse(course._id);
                          }}
                          className="btn btn-danger float-end"
                          id="wd-delete-course-click">
                            Unenroll
                        </button>
                      ) : 
                      (
                        <button onClick={(event) => {
                            event.preventDefault();
                            enrollInCourse(course._id);
                          }}
                          className="btn btn-success float-end"
                          id="wd-delete-course-click">
                            Enroll
                        </button>
                      ))
                    }
                    
                  </div>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

