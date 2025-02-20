import { BsPlus } from 'react-icons/bs'
import { IoEllipsisVertical } from 'react-icons/io5'

const AssignmentsControlButtons = () => {
  return (
    <div className="float-end">
    <span className='border border-medium rounded radius-1 px-2 py-1 small'>40% of Total</span>
    <IoEllipsisVertical/>
    <BsPlus className="fs-2" />
    </div>
  )
}

export default AssignmentsControlButtons