import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { Button } from "react-bootstrap";
import { BiTargetLock } from "react-icons/bi";
import { MdGraphicEq } from "react-icons/md";
import { TfiAnnouncement } from "react-icons/tfi";
import { IoIosNotificationsOutline } from "react-icons/io";

export default function CourseStatus() {
    return (
      <div id="wd-course-status" style={{ width: "350px" }}>
        <div className="d-flex">
          <div className="w-30 pe-1">
            <Button variant="secondary" size="sm" className="w-100 text-nowrap ">
            <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish </Button> 
          </div>
          <div className="w-30">
          <Button variant="success" size="sm" className="w-100">
          <FaCheckCircle className="me-2 fs-5" /> Publish </Button> </div>
        </div>
        <br /><br />
        <Button variant="secondary" size="lg" className="w-100 mt-1 text-start fs-md">
          <BiImport className="me-2 fs-5" /> Import Existing Content </Button>
        <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
          <LiaFileImportSolid className="me-2 fs-5" /> Import from Commons </Button>
        <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
          <BiTargetLock className="me-2 fs-5" /> Choose home page </Button>
        <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
          <MdGraphicEq className="me-2 fs-5" /> View Course Stream </Button>
        <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
          <TfiAnnouncement className="me-2 fs-5" /> New Announcement </Button>
        <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
          <MdGraphicEq className="me-2 fs-5" /> New Analytics </Button>
        <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
          <IoIosNotificationsOutline className="me-2 fs-5" /> View Course Notifications </Button>

      </div> );}