import "./Header.css";

function Header({ heading }) {
    return (
        <div className="header" id="header">
            <h1>{heading}</h1>
        </div>
    )
}

export default Header;