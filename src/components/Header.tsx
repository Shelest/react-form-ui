import logo from '../logo.svg';

export function Header() {
    return (
        <header className="app-header">
            <a href="/" className="app-logo" >
                <img src={logo} alt="logo"/>
            </a>
        </header>
    )
}
