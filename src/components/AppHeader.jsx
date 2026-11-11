import dcLogo from "../assets/img/dc-logo.png";

const navLinks = [
    { id: 1, text: "CHARACTERS", url: "#", current: false },
    { id: 2, text: "COMICS", url: "#", current: true },
    { id: 3, text: "MOVIES", url: "#", current: false },
    { id: 4, text: "TV", url: "#", current: false },
    { id: 5, text: "GAMES", url: "#", current: false },
    { id: 6, text: "COLLECTIBLES", url: "#", current: false },
    { id: 7, text: "VIDEOS", url: "#", current: false },
    { id: 8, text: "FANS", url: "#", current: false },
    { id: 9, text: "NEWS", url: "#", current: false },
    { id: 10, text: "SHOP", url: "#", current: false },
];

function AppHeader() {
    return (
        <header className="app-header">
            <div className="header-logo">
                <img src={dcLogo} alt="DC Logo" />
            </div>
            <nav className="header-nav">
                <ul>
                    {navLinks.map((link) => (
                        <li key={link.id} className={link.current ? "active" : ""}>
                            <a href={link.url}>{link.text}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default AppHeader;