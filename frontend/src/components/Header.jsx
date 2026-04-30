import { useState } from "react"
import "./style/Header.css"

export default function Header() {

    const [showModal, setShowModal] = useState(false);
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState("");
    const [todo, setTodo] = useState({});

    const handleChange = (e) => {
        setTask(e.target.value);
    }

    const handleTitle = (e) => {
        setTitle(e.target.value);
    }

    const addTodo = (e) => {
        e.preventDefault();
        setTodo({ ...todo, title, tasks });
    }

    const addTask = (e) => {
        e.preventDefault();
        setTasks([...tasks, task]);
        setTask("");
    }

    function handleModal() {
        setShowModal(true);
    };

    const deleteTask = (i) => {
        const newTasks = tasks.filter((_, index) => index !== i)
        setTasks(newTasks);
    }


    return (
        <>
            <div className="header">
                <div className="title">
                    <span> | </span>
                    <span>Dashboard</span>
                </div>
                <button className="material-symbols-outlined btnAdd" onClick={handleModal}>
                    add
                </button>
            </div>

            <section>
                {showModal && (
                    <>
                        <div className="container">
                            <div className="modal-container">
                                <div className="modal">
                                    <form action="">
                                        <input type="text" placeholder="Title..." value={title} onChange={handleTitle} />
                                        <div className="container-task">
                                            <input type="text" placeholder="Task..." value={task} onChange={handleChange} className="inputTask" />
                                            <button onClick={addTask} className="addBtn">Add</button>
                                        </div>
                                    </form>
                                    <div className="allTask">
                                        <h4>All Task :</h4>
                                        <ol>
                                            {tasks.map((t, i) => (
                                                <li key={i}>
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

        </>
    )
}
