import { Link, useParams, useLocation } from "react-router-dom";
import { courses } from "../Database";

export default function CourseNavigation() {
    const { cid } = useParams();
    const {pathname} = useLocation();
    const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
return (    
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
    {
        links.map((link) => (
            <Link to={`/Kambaz/Courses/${cid}/${link}`} id="wd-course-home-link"
            className={`list-group-item  
            ${pathname.includes(link)?"active border border-0 text-black ":"border border-0 text-danger"}`}> 
            {link} </Link>
        ))
    }
    </div>
    );
}