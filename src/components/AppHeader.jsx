import { NavLink } from 'react-router-dom';

export function AppHeader() {
    return (
        <section className="header-section main-layout">
            <main>
                <div><NavLink exact activeClassName="selected" to="/">Mister-Bitcoin</NavLink></div>
                <nav>
                    <NavLink exact to="/">Home</NavLink>
                    <NavLink to="/contacts">Contacts</NavLink>
                    <NavLink to="/stats">Stats</NavLink>
                </nav>
            </main>
        </section>
    )
}