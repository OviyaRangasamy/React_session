import { useState } from "react";
import { v4 } from "uuid";

const Todo = () => {

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
    console.log(updateId)
    console.log(updateTask)
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
            <input type="text"
                value={task}
                placeholder="Enter your task here...."
                onChange={(e) => setTask(e.target.value)}
            />
            <button onClick={addTask}>Save</button>

            <h3>Tasks:</h3>
            <ul>
                {taskList.map((item) => {
                    return (<>
                        <li key={item.id}>
                            {item.id === updateId ? (
                                <div>
                                    <input type="text"
                                        value={updateTask}
                                        placeholder={"Edit the task here"}
                                        onChange={(e) => setUpdateTask(e.target.value)}
                                    />
                                    <button onClick={updateValue}>Save</button>
                                </div>
                            ) :
                                (
                                    <div>
                                        <p>{item.title}</p>
                                        <button onClick={(e) => { deleteTask(item.id) }}>delete</button>
                                        <button onClick={(e) => (EditTask(item))}>Edit</button>
                                    </div>
                                )
                            }
                        </li>
                    </>
                    )
                })}


            </ul>
        </>
    )


}
export default Todo;