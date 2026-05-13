import { useState } from "react"
import "./style/Header.css"
import CardTask from "./CardTask";

export default function Header() {

    const [showModal, setShowModal] = useState(false);
    const [taskInput, setTaskInput] = useState("");
    const [taskList, setTaskList] = useState([]);
    const [title, setTitle] = useState("");
    const [todo, setTodo] = useState([]);

    const handleChange = (e) => {
        setTaskInput(e.target.value);
    }

    const handleTitle = (e) => {
        setTitle(e.target.value);
    }

    const addTodo = (e) => {
        e.preventDefault();

        const data = {
            id: crypto.randomUUID(),
            title,
            taskList,
            completed: false,
        }

        setTodo(prev => [ ...prev, data ]);
        setTitle("");
        setTaskList([]);
        setShowModal(false);
    }

    const addTask = () => {
        if (!taskInput.trim()) return;
        setTaskList(prev => [...prev, taskInput]);
        setTaskInput("");
    }

    const deleteTask = (i) => {
        const newTasks = taskList.filter((_, index) => index !== i)
        setTaskList(newTasks);
    }


    return (
        <>
            <div className="header">
                <div className="title">
                    <span> | </span>
                    <span>Dashboard</span>
                </div>
                <button className="material-symbols-outlined btnAdd" onClick={() => setShowModal(true)}>
                    add
                </button>
            </div>

            <section>
                {showModal && (
                    <>
                        <div className="container">
                            <div className="modal-container">
                                <div className="modal">
                                    <button onClick={() => setShowModal(false)} className="closeBtn">X</button>
                                    <form>
                                        <input type="text" placeholder="Title..." value={title} onChange={handleTitle} />
                                        <div className="container-task">
                                            <input type="text" placeholder="Task..." value={taskInput} onChange={handleChange} className="inputTask" />
                                            <button type="button" onClick={addTask} className="addBtn">Add</button>
                                        </div>
                                    </form>
                                    <div className="allTask">
                                        <h4>All Task :</h4>
                                        <ol>
                                            {taskList.map((t, i) => (
                                                <li key={t.id}>
                                                    <div className="item">
                                                        {t}
                                                        <button onClick={() => deleteTask(i)} className="delBtn">X</button>
                                                    </div>
                                                </li>
                                            ))}
                                        </ol>
                                    </div>
                                    <button onClick={addTodo} className="saveBtn">Save</button>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </section>
            
            <CardTask data={todo} />
        </>
    )
}
