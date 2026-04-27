import "./style/Header.css"

export default function Header() {
    return (
        <div className="header">
            <div className="title">
                <button className="material-symbols-outlined bgrMenu">
                    menu
                </button>
                <span> | </span>
                <span>Dashboard</span>
            </div>
            <button className="material-symbols-outlined btnAdd">
                add
            </button>
        </div>
    )
}
