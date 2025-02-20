export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of your Web Application
          running on Netlify. The landing page should include the following: Your full name and section
          Links to each of the lab assignments
        </textarea>
        <br />
        <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr><br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
          <form >
            <select name="Assignment Group" id="wd-group">
                <option value="Assignments">ASSIGNMENTS</option>
                <option value="some">Publish modules only</option>
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
            <select name="Submission" id="wd-submission-type">
                <option value="Online">Online</option>
                <option value="some">Example</option>
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
              <input type="date" name="Due Date" id="wd-due-date" />
            </form>
          </td>
        </tr><br />
        <tr>
          <td align="right" valign="top">
          </td>
          <td>
            <form>
              <label htmlFor="Available" id="wd-available-from">Available from</label><br />
              <input type="date" id="wd-available-from" name="Available Date"/>
            </form>
          </td>
          <td>
          <form>
              <label htmlFor="Until" id="wd-available-until">Until</label><br />
              <input type="date" id="wd-available-until" name="Until Date" value="2025-04-26"/>
            </form>
          </td>
        </tr>
        <br />

      </table>
      <hr />
      <div style={{ textAlign: "right" }}>
      <button>
        Cancel
      </button>
      
      <button>
        Save
      </button>
      </div>
    </div>
);}
