import React from 'react'
import ReactDOM from 'react-dom'

import Primeiro from './componentes/Primeiro'
import BomDia from './componentes/BomDia'
// import { BoaTarde, BoaNoite } from './componentes/Multiplos'
import Mult from './componentes/Multiplos'

// ReactDOM.render(
//     <div>
//         <BoaTarde name='Bia'/>
//         <BoaNoite name="Mário"/>,
//     </div>,
//     document.getElementById('root'));

    ReactDOM.render(
    <div>
        <Mult.BoaTarde name='Bia'/>
        <Mult.BoaNoite name="Mário"/>,
    </div>,
    document.getElementById('root'));



// ReactDOM.render(<BomDia />, document.getElementById('root'));


