import { useState } from "react"
import "./style/Header.css"

export default function Header() {

    const [showModal, setShowModal] = useState(false);

    function handleModal() {
        setShowModal(true);
    };


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
                                <input type="text" placeholder="Task..." />
                                <button>Add</button>
                            </div>
                        </form>
                        <div className="allTask">
                            <h4>All Task :</h4>
                        </div>
                        <button>Save</button>
                    </div>
                )}
            </section>

        </>
    )
}
