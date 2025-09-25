import { CiSearch } from "react-icons/ci";
import { Button } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentsControlButtons from "./AssignmentsControlButtons";
import { FaRegEdit, FaTrash } from "react-icons/fa";
import { useParams, useNavigate } from "react-router";
import { deleteAssignment} from "./reducer";
import { useDispatch, useSelector } from "react-redux";

export default function Assignments() {
    const {cid} = useParams();
    const navigate = useNavigate();
    const assignments = useSelector((state:any) => 
      state.assignmentsReducer.assignments.filter((a : any) => a.course === cid)
    );
    const dispatch = useDispatch();
    //const [currentUser, setCurrentUser] = useState<currentUser | null>(null);
    const currentUser = useSelector(
      (state : any) => state.accountReducer.currentUser
    );
   // setCurrentUser(user);

   const handleDelete = (assignment:any) => {
    if (window.confirm("Are you sure you want to delete the assignment?")){
    dispatch(deleteAssignment(assignment._id))
    }
   }

    return (
      <div id="wd-assignments">
        <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"/>
        <input placeholder=" Search..." id="wd-search-assignment" className="border rounded-1 pl-10 pr-2 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"></input>
        {currentUser.role === "FACULTY" && (
        <Button variant="danger" className="me-1 float-end rounded-1 fs-md" id="wd-add-assignment-group"
          // href={`#/kambaz/Courses/${cid}/Assignments/new`}
          onClick={() => navigate(`/kambaz/Courses/${cid}/Assignments/new`)}
          >
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} /> 
              Assignment           
        </Button>)}
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
                    {currentUser.role === "FACULTY" &&
                    (<FaRegEdit className="me-1 text-success" onClick={() => navigate(`/kambaz/Courses/${cid}/Assignments/${assignment._id}`)}/>)}
                  </div>
                  <div className="align-self-center flex-grow-1 ">
                      <a href={`#/kambaz/Courses/${cid}/Assignments/${assignment._id}`}>
                      {assignment.title} 
                      <br/>
                    </a>
                    <span className="wd-float-left text-danger me-1">
                      Multiple module
                    </span>
                    <span>
                      | <b>Not available until</b> {assignment.availableFrom} <br />
                      <b>Due</b> {assignment.availableUntil} | {" "} {assignment.points}
                    </span>
                  </div>
                  <div className="align-self-center">
                    {currentUser.role === "FACULTY" &&(
                      <FaTrash className="me-2 fs-4"
                      onClick={() => handleDelete(assignment)}
                      />
                    )
                    }  
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