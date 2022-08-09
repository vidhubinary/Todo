import React, {useState} from 'react';
import './TodoList.css';

function TodoList() {

    const [task, setTask] = useState<string>("");
    const [taskList, setTaskList] = useState<Array<any>>([]);

    const handleChange = (e:any) => {
        setTask(e.target.value);
    };

    const AddTask = () => {
        // console.log(task);
        if(task !== ""){
            const taskDetails = {
                id: Math.floor(Math.random()*1000),
                value: task,
                iscomleted: false,
            }

            setTaskList([...taskList, taskDetails]);

        }
    };

    // console.log("taskList",taskList);

    const deleteTask = (e:any, id:any) => {
        e.preventDefault();
        setTaskList(taskList.filter((t:any) => t.id != id));
    };

    const completedTask = (e:any, id:any) => {
        e.preventDefault();

        //find index of elements
        const element = taskList.findIndex(elem => elem.id == id);

        //copy array into new variable
        const newTaskList = [...taskList]

        //Edit element
        newTaskList[element] = {
          ...newTaskList[element],
          iscomleted: true,
        }

        setTaskList(newTaskList);

    };

    return (
        <div className="todoContaioner">
          <div className="inputsection">
            <input
             type="text"
             name="text"
             id="text"
             placeholder="Add task.."
             onChange={(e:any) => handleChange(e)}
             />
            <button className="addBtn" onClick={AddTask}>Add</button>
          </div>

            <div className="listConatiner">
              {taskList !== [] ?
              <ul>
                {taskList.map(t =>
                <li className={t.iscomleted ? "holdText" : "listItem"}>{t.value}
                <button className="competedBtn" onClick={(e:any)=> completedTask(e, t.id)}>
                    Competed
                </button>
                <button className="deleteBtn" onClick={(e:any)=> deleteTask(e, t.id)}>
                    Delete
                </button>

                </li>
                    )}
              </ul>
             : null  }
              
            </div>
        </div>
    )
}
export default TodoList;