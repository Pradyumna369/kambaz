import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import { updateAssignment, addAssignment } from "./reducer";

export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const assignment = useSelector((state:any) => 
      state.assignmentsReducer.assignments.find((a:any) => a._id == aid)
    );
    const [title, setTitle] = useState(assignment?.title || "");
    const [description, setDescription] = useState(assignment?.description || "");
    const [availableFrom, setAvailableFrom] = useState(assignment?.availableFrom || "");
    const [dueDate, setDueDate] = useState(assignment?.dueDate || "");
    const [availableUntil, setAvailableUntil] = useState(assignment?.availableUntil || "");
    const [points, setPoints] = useState(assignment?.points || "");
    const [selectedOption, setSelectedOption] = useState("");

    useEffect(() => {
      if(assignment) {
        setTitle(assignment.title);
        setDescription(assignment.description);
        setPoints(assignment.points);
        setDueDate(assignment.dueDate);
        setAvailableFrom(assignment.availableFrom);
        setAvailableUntil(assignment.availableUntil);
      } 
    },[assignment]);

    const handleSubmissionTypeChange = 
      (event : React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
      }
    
    const handleSave = () => {
      const updatedAssignment = {
        _id : assignment?._id || new Date().getTime().toString(),
        title,
        description,
        points,
        dueDate,
        availableFrom,
        availableUntil,
        selectedOption,
        course: cid, 
      };

      if(assignment) {
        dispatch(updateAssignment(updatedAssignment));
      } else {
        dispatch(addAssignment(updatedAssignment))
      }
      navigate(-1);
    }

    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value={title} onChange={(e) => setTitle(e.target.value)}/><br /><br />
        <textarea id="wd-description" onChange={(e) => setDescription(e.target.value)}>
          {description}
        </textarea>
        <br />
        <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={points} onChange={(e) => setPoints(Number(e.target.value))}/>
          </td>
        </tr><br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
          <form >
            <select name="Assignment Group" id="wd-group">
                <option value="">--select--</option>
                <option value="Assignments">ASSIGNMENTS</option>
                <option value="quiz">Quiz</option>
                <option value="exam">Exam</option>
                <option value="project">Project</option>
            </select>
        </form>
          </td>
        </tr><br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade As</label>
          </td>
          <td>
          <form >
            <select name="Percentage" id="wd-display-grade-as">
                <option value="">--select--</option>
                <option value="Percentage">Percentage</option>
                <option value="some">Example</option>
            </select>
        </form>
          </td>
        </tr><br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
          <form >
            <select name="Submission" id="wd-submission-type" onChange={handleSubmissionTypeChange}>
                <option value="">--select--</option>
                <option value="Online">Online</option>
                <option value="in-person">In Person</option>
            </select>
        </form>
          </td>
        </tr><br />     
        <tr>
          <td align="right" valign="top"></td>
          <td data-name="Entry Options">
            Online Entry Options <br />
            <form>
              <input type="checkbox" id="wd-text-entry" name="options" value="Text Entry"/>
              <label htmlFor="wd-text-entry">Text Entry</label>  <br />
              <input type="checkbox" id="wd-website-url" name="options" value="Website URL"/>                
              <label htmlFor="wd-website-url">Website URL</label><br /> 
              <input type="checkbox" id="wd-media-recordings" name="options" value="Media Recordings"/>
              <label htmlFor="wd-media-recordings">Media Recordings</label><br />
              <input type="checkbox" id="wd-student-annotation" name="options" value="Student Annotation"/>
              <label htmlFor="wd-student-annotation">Student Annotation</label><br />
              <input type="checkbox" id="wd-file-upload" name="options" value="File Uploads"/>
              <label htmlFor="wd-file-upload">File Uploads</label><br />
            </form>
          </td><br />
        </tr>
        <br />
        <tr>
          <td align="right" valign="top"></td>
          <td>
            <label htmlFor="wd-assign-to">Assign to</label>
            <form>
              <select name="Assignees" id="wd-assign-to">
                <option value="Everyone">Everyone</option>
                <option value="Noone">Noone</option>
              </select>
            </form>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top"></td>
          <td>
            <form>
              <label htmlFor="wd-due-date">Due</label><br />
              <input type="date" name="Due Date" id="wd-due-date" value={dueDate} 
              onChange={(e) => setDueDate(e.target.value)}/>
            </form>
          </td>
        </tr><br />
        <tr>
          <td align="right" valign="top">
          </td>
          <td>
            <form>
              <label htmlFor="Available" id="wd-available-from">Available from</label><br />
              <input type="date" id="wd-available-from" name="Available Date" value={availableFrom}
              onChange={(e) => {setAvailableFrom(e.target.value)}}
              />
            </form>
          </td>
          <td>
          <form>
              <label htmlFor="Until" id="wd-available-until">Until</label><br />
              <input type="date" id="wd-available-until" name="Until Date" value={availableUntil} 
              onChange={(e) => {setAvailableUntil(e.target.value)}}/>
            </form>
          </td>
        </tr>
        <br />

      </table>
      <hr />
      <div style={{ textAlign: "right" }}>
      <button onClick={() => navigate(-1)}>
        Cancel
      </button>
      <button onClick={handleSave}>
        Save
      </button>
      </div>
    </div>
);}
