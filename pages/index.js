import { useState } from 'react';

function Home(){
    return(
        <div>
        <h1>gustavo contando</h1>
        <Contador/>
        </div>

    )
}

function Contador(){
    const [contador, setContador] = useState(1);
    function adicionarUm(){
        setContador(contador + 1)
    }
    return(
        <div>
            <div>{contador}</div>
            <button onClick={adicionarUm} >Contar um</button>
        </div>
    )
}


export default Home