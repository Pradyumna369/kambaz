import { CiSearch } from "react-icons/ci";
import { Button } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentsControlButtons from "./AssignmentsControlButtons";
import { FaRegEdit } from "react-icons/fa";
import { useParams } from "react-router";
import * as db from "../../Database";
import { addAssignment, editAssignment, deleteAssignment, updateAssignment } from "./reducer";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export default function Assignments() {
    const {cid} = useParams();
    const assignments = db.assignments;
    const [assignmentName, setAssignmentName] = useState("");
    // const {assignments} = useSelector((state:any) => state.assignmentReducers);
    const dispatch = useDispatch();
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
        <ul id="wd-modules" className="list-group rounded-0">
          {(
            <li className="list-group-item wd-module p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary"> 
              <BsGripVertical className="me-2 fs-3" />Assignments  <AssignmentsControlButtons />
            </div>
          {
            assignments.filter((assignment:any) => assignment.course === cid)
            .map((assignment:any) => (
              <li className="list-group-item wd-lesson d-flex">  
                  <div className="me-3 fs-3 align-self-center " >
                    <BsGripVertical className="me-2 fs-3"/>
                    <FaRegEdit className="me-1 text-success" />
                  </div>
                  <div className="align-self-center flex-grow-1 ">
                    <a href="#/kambaz/Courses/1234/Assignments/123">
                      {assignment.title} 
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
                  <div className="align-self-center">
                    <LessonControlButtons />
                  </div>
              </li>
            ))
          }
          </li>
          )
          }
        </ul>   
      </div>
  );}