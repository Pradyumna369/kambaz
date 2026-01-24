import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REACT_APP_REMOTE_SERVER;
const MODULES_API = `${REMOTE_SERVER}/api/modules`;
export const deleteModule = async(moduleId:string) => {
    const {data} = await axios.delete(`${MODULES_API}/${moduleId}`);
    return data;
};

export const updateModule = async(module:any) => {
    const {data} = await axios.put(`${MODULES_API}/${module._id}`, module);
    return data;
};