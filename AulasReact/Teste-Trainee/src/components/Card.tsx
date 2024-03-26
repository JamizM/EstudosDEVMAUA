import '../styles/Card.css'

interface CardProps{
    name: string
    role: string
}

export default function Card({name, role}: CardProps){
    return(
        <div> 
            <div></div>
            <div>
                <h1>{name}</h1>
                <p>{role}</p>
            </div>
        </div> 
    )
}