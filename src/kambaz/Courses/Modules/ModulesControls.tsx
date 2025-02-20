import { FaPlus } from "react-icons/fa6";
import GreenCheckMark from "./GreenCheckMark";
import { Button, Dropdown } from "react-bootstrap";


const ModulesControls = () => {
  return (
    <div id="wd-modules-controls" className="text-nowrap ">
        <Button variant="danger" className="me-1 float-end rounded-1 fs-md" id="wd-add-module-btn">
            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
            Module
        </Button>
        <Dropdown className="float-end me-2">
            <Dropdown.Toggle variant="secondary"  id="wd-publish-all-btn" className="rounded-1 fs-md">
                < GreenCheckMark /> Publish All
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item id="wd-publish-all">
                    < GreenCheckMark /> Publish All
                </Dropdown.Item>
                <Dropdown.Item id="wd-publish-all-modules-and-items">
                    < GreenCheckMark /> Publish all modules and items</Dropdown.Item>
                <Dropdown.Item id="wd-publish-modules-only">
                    <GreenCheckMark /> Publish modules only
                </Dropdown.Item>
                <Dropdown.Item id="wd-unpublish-all-modules-and-items">
                    <GreenCheckMark /> Unpublish all modules and items
                </Dropdown.Item>
                <Dropdown.Item id="wd-unpublish-modules-only">
                    <GreenCheckMark /> Unpublish modules only
                </Dropdown.Item>
            </Dropdown.Menu>
            
        </Dropdown>{/* Implement the View Progress and Collapse All buttons with IDs wd-view-progress and wd-collapse-all */}
        <Button variant="secondary" className="me-1 float-end rounded-1 fs-md" id="wd-view-progress">
                View Progress
        </Button>
        <Button variant="secondary" className="me-1 float-end rounded-1 fs-md" id="wd-collapse-all">
                Collapse All
        </Button>
    </div>
  )
}

export default ModulesControls