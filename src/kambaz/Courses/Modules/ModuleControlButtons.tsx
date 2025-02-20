import { IoEllipsisVertical } from "react-icons/io5";
import {BsPlus} from "react-icons/bs";
import GreenCheckmark from "./GreenCheckMark";

const ModulesControlButtons = () => {
    return (
    <div className="float-end">
        <GreenCheckmark />
        <BsPlus className="fs-2"/>
        <IoEllipsisVertical />
    </div>
    )
}

export default ModulesControlButtons