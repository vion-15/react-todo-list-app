import { useState } from "react"
import "./style/Header.css"

export default function Header() {

    const [showModal, setShowModal] = useState(false);
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    const handleChange = (e) => {
        setTask(e.target.value);
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
                    <div className="modal">
                        <form action="">
                            <input type="text" placeholder="Title..." />
                            <div>
                                <input type="text" placeholder="Task..." value={task} onChange={handleChange} />
                                <button onClick={addTask}>Add</button>
                            </div>
                        </form>
                        <div className="allTask">
                            <h4>All Task :</h4>
                            <ol>
                                {tasks.map((t, i) => (
                                    <li key={i}>
                                        <div className="item">
                                            {t}
                                            <button onClick={() => deleteTask(i)}>X</button>
                                        </div>
                                    </li>
                                ))}
                            </ol>
                        </div>
                        <button>Save</button>
                    </div>
                )}
            </section>

        </>
    )
}
