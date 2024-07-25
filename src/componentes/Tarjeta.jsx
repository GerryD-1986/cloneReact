

export default function Tarjeta(props){
    return (
    <aside className="channel-card">
        <img src={props.image} alt=""></img>
        <p className="tarjeta-card-title">{props.title}</p>
        <p className="tarjeta-card-channel">{props.channel}</p>
    </aside>
    );
}
