import { useState } from 'react';
import '../styles/Button.css'

// interface ButtonProps{
//     text: string
//     onClick: () => void
// }

export default function Button(){
    const [count, setCount] = useState<number>(0) // Initialize count with a default value of 0
    return <button onClick={() => setCount(count + 1)}>{count}</button> //contador de um botao feito
}