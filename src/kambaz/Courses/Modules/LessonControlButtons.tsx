import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
const LessonControlButtons = () => {
  return (
    <div className="float-end">
        <GreenCheckmark />
        <IoEllipsisVertical className="fs-4" />
    </div>
  )
}

export default LessonControlButtons