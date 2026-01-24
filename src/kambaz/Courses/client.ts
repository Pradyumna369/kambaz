import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;

export const createModuleForCourse = async(cid:string, module:any) => {
    const response = await axios.post(`${COURSES_API}/${cid}/modules`, module);
    return response.data;
}

export const fetchAllCourses = async() => {
    const {data} = await axios.get(COURSES_API);
    return data;
};

export const deleteCourse = async(id:string) => {
    const {data} = await axios.delete(`${COURSES_API}/${id}`);
    return data;
};

export const updateCourse = async(course:any) => {
    const {data} = await axios.put(`${COURSES_API}/${course._id}`, course);
    return data;
};

export const findModulesForCourse = async(cid:string) => {
    const {data} = await axios.get(`${COURSES_API}/${cid}/modules`);
    return data;
};