import { CiSearch } from "react-icons/ci";
import { Button, ListGroup } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import { BsGripVertical, BsPlus } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentsControlButtons from "./AssignmentsControlButtons";
import AssignmentContent from "./AssignmentContent";
import { FaRegEdit } from "react-icons/fa";

export default function Assignments() {
    return (
      <div id="wd-assignments">
        <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"/>
        <input placeholder=" Search..." id="wd-search-assignment" className="border rounded-1 pl-10 pr-2 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"></input>
        <Button variant="danger" className="me-1 float-end rounded-1 fs-md" id="wd-add-assignment-group">
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Assignment
        </Button>
        <Button variant="secondary" className="me-1 float-end rounded-1 fs-md" id="wd-add-assignment-group">
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Group
        </Button>
        <br /><br /><br />
        <ListGroup className="rounded-0" id="wd-modules">
            <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 bg-secondary"> 
                <BsGripVertical className="me-2 fs-3" />Assignments  <AssignmentsControlButtons />
                </div>
              <ListGroup className="wd-lessons rounded-0">
              <ListGroup.Item className="wd-lesson d-flex">
  {/* Grip Icon (Left) */}
  <div className="me-3 fs-3 align-self-center " >
    <BsGripVertical className="me-2 fs-3"/>
    <FaRegEdit className="me-1 text-success" />
  </div>

  {/* Content (Expands and aligns correctly) */}
  <div className="align-self-center flex-grow-1 ">
    <a href="#/kambaz/Courses/1234/Assignments/123">
      A1 - ENV + HTML 
    </a>
    <br />
    <span className="wd-float-left text-danger me-1">
      Multiple module
    </span>
    <span>
      | <b>Not available until</b> May 6 at 12:00 AM | <br />
      <b>Due</b> May 13 at 11:59pm | 100pts
    </span>
  </div>

  {/* Right Side (Checkmark & Dots) */}
  <div className="align-self-center">
    <LessonControlButtons />
  </div>
</ListGroup.Item>

 
                <ListGroup.Item className="wd-lesson p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />A2 <LessonControlButtons />
                </ListGroup.Item>
                <ListGroup.Item className="wd-lesson p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" /> A3 <LessonControlButtons />
                </ListGroup.Item>
              </ListGroup>
            </ListGroup.Item>
        </ListGroup>
        
      </div>
  );}