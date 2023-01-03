import { v4 } from "uuid";
import { useState } from "react";
import InputBox from "./addTodo";
import EditDelete from "./editDeletetodo";


const ParentTodo = () => {

    const [task, setTask] = useState("");
    const [updateId, setupdateid] = useState(null);
    const [updateTask, setUpdateTask] = useState("")
    const [taskList, setTaskList] = useState([])

    const addTask = () => {
        if (!task) {
            return (alert("Enter a task"))
        }
        console.log(task)
        setTaskList((lastState) => [...lastState, { id: v4(), title: task }])
        setTask("")
    }
    console.log(taskList)

    const deleteTask = (index) => {
        setTaskList(() => { return (taskList.filter((item) => { return item.id !== index })) })
    }

    const EditTask = (item) => {
        setupdateid(item.id)
        setUpdateTask(item.title)
        console.log(item.id)
    }
    const updateValue = () => {
        setTaskList((lastState) => {
              lastState.map((item) => {
                 if (item.id === updateId) {
                     item.title = updateTask;
                 }
                 return item;
             }
         )
         return lastState;
         })
         setupdateid(null);
         setUpdateTask("");
 
     }

    return (
        <>
            <InputBox
                name="todoApp"
                value={task}
                onChange={(key, value) => {
                    console.log(key, value)
                    return (setTask(value))
                }}
                onClick={addTask}
                tagname="Add"
            />
            <h3>Tasks:</h3>
            <ul>
                {taskList.map((item) => {
                    return (
                        <>
                            {item.id === updateId ? (<>
                            <InputBox
                            value = {updateTask} 
                            placeholder={"Edit the task here"}
                            onChange={(key,value) => setUpdateTask(value)}
                            onClick= {updateValue}
                            tagname = "Update"
                            ></InputBox>
                           
                            </>) : (
                                <>
                                    <li key={item.id}>{item.title}</li>
                                    <EditDelete
                                    item={item}
                                    delete_a = {deleteTask}
                                    Update = {EditTask}
                                    ></EditDelete>
                                    
                                </>
                            )
                            }
                        </>
                    )
                }
                )
                }
            </ul>

        </>
    )
}

export default ParentTodo;