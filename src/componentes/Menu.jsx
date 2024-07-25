import Tarjeta from "./Tarjeta";

const tarjetas = [
    {
     image: "https://api.dicebear.com/9.x/avataaars/svg?seed=Felix",
     channel: "Rubius",
     title: "Elden Ring",
    },
    { 
        image: "https://api.dicebear.com/9.x/avataaars/svg?seed=Aneka",
        channel: "elXocas",
        title: "Elden Ring",
    },
    {
        image: "https://api.dicebear.com/9.x/avataaars/svg?seed=Gerardo",
        channel: "SoyPan",
        title: "Bum Simulator",
    },
];

export default function Menu(){
    return(
        <aside id="menu">

        <section id="tarjetas">   
        {
            tarjetas.map((tarjeta) => {
                return <Tarjeta key={`tarjeta-${tarjeta.channel}`} 
                image={tarjeta.image}
                title={tarjeta.title}
                channel={tarjeta.channel}
                />;
              })
        }
        </section> 
       </aside>
    )
}