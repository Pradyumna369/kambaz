import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REACT_APP_REMOTE_SERVER;
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;

export const createAssignementForCourse = async(assignment:any) => {
    const response = await axios.post(`${ASSIGNMENTS_API}/${assignment._id}`, assignment);
    return response.data;
};

export const fetchAssignmentsForCourse = async(cid:string) => {
    const {data} = await axios.get(`${ASSIGNMENTS_API}/${cid}`);
    return data;
};

export const deleteAssignment = async(assignmentId:string) => {
    const {data} = await axios.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
    return data;
};

export const updateAssignment = async(assignment:any) => {
    const {data} = await axios.put(`${ASSIGNMENTS_API}/${assignment._id}`, assignment);
    return data;
};