import { BsGripVertical } from "react-icons/bs";
import ModulesControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import ModulesControls from "./ModulesControls";
import { addModule, editModule, updateModule, deleteModule, setModules } from "./reducer";
import { useDispatch, useSelector } from "react-redux";
import * as courseClient from "../client";
import * as modulesClient from "./client";
 
export default function Modules() {
    const {cid} = useParams();
    const [moduleName, setModuleName] = useState("");
    const {modules} = useSelector((state:any) => state.modulesReducer);
    const dispatch = useDispatch();
    const saveModule = async(module:any) => {
      await modulesClient.updateModule(module);
      dispatch(updateModule(module));
    };
    const removeModule = async(moduleId:string) => {
      await modulesClient.deleteModule(moduleId);
      dispatch(deleteModule(moduleId));
    };
    const createModuleForCourse = async() => {
      if(!cid) return;
      const newModule = {name: moduleName, course: cid};
      const createdModule = await courseClient.createModuleForCourse(cid, newModule);
      dispatch(addModule(createdModule));
    };
    const fetchModules = async() => {
      const modules = await courseClient.findModulesForCourse(cid as string);
      dispatch(setModules(modules));
    };
    useEffect(() => {
      fetchModules();
    },[]);
    return (        
          <div className="wd-modules">
          <ModulesControls
            moduleName={moduleName}
            setModuleName={setModuleName}
            addModule={createModuleForCourse}/>
          <br />
          <br />
          <br />
          <br />
          <ul id="wd-modules" className="list-group rounded-0">
            {
              modules.map((module:any) => (
                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                  <div className="wd-title p-3 ps-2 bg-secondary"> 
                    <BsGripVertical className="me-2 fs-3" />  
                    {!module.editing && module.name}
                    { module.editing &&(
                      <input className="form-control w-50 d-inline-block"
                        onChange={(e)=>
                          dispatch(updateModule({...module, name: e.target.value}))
                          }
                        onKeyDown={(e)=> {
                          if(e.key==="Enter"){
                            saveModule({...module, editing: false});
                          }
                        }}
                        defaultValue={module.name}
                        /> 
                    )}                    
                    <ModulesControlButtons moduleId={module._id} deleteModule={(moduleId) => {
                      removeModule(moduleId);
                    }
                    } editModule={(moduleId) => 
                      dispatch(editModule(moduleId))
                    }/>
                  </div>
                  {
                    module.lessons && (
                      <ul className="list-group wd-lessons rounded-0">
                        {
                          module.lessons.map((lesson:any) =>(
                            <li className="wd-lesson list-group-item p-3 ps-1">
                              <BsGripVertical className="me-2 fs-3" />{lesson.name} <LessonControlButtons />
                            </li>
                          ))
                        }
                      </ul>
                    )
                  }
                </li>
              ))}
          </ul>
      </div>
  );}
  