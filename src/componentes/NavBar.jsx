import Twitch from "./Twitch";


export default function NavBar(){
    return <nav id="navbar">
        <div id="logo">
            <Twitch height="2rem" width="3rem" />
            <span>Explorar</span>
        </div>
        <div id="search-container">
            <input type="text" placeholder="Buscar"></input>
            <button type="submit"><i class="fa fa-search"></i></button>
        </div>
        <div id="box-navbar">
            <div className="button1"><button type="submit">Iniciar Sesión</button></div>
            <div className="button2"><button type="submit">Registrarse</button></div>
            
        <div id="user-icon">
            <img src="https://api.dicebear.com/9.x/adventurer-neutral/svg?seed=Felix" alt="user"></img>
        </div>
        </div>
    </nav>
}