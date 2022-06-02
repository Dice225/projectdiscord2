import React from 'React';

function App() {
    return(
        <Navbar>
            <Navbar icon="pfp.jpg"/>
        </Navbar>
    );
}

function Navbar(props) {
    return (
        <nav className="Navbar">
            <ul className="navbar-nav"> {props.children}</ul>
        </nav>
    );
}

function NavItem(props) {
    return(
        <li className="nav-item">
            <a href="pfp.jpg" className="icon-button">
                {props.icon}
            </a>
        </li>
    )
}

export default App;