import React from 'react'
import ReactDOM from 'react-dom'

import Primeiro from './componentes/Primeiro'
import BomDia from './componentes/BomDia'
// import { BoaTarde, BoaNoite } from './componentes/Multiplos'
import Mult from './componentes/Multiplos'
import Saudacao from './componentes/Saudacao'
import Pai from './componentes/Pai'
import Filho from './componentes/Filho'


// ReactDOM.render(
//     <div>
//         <BoaTarde name='Bia'/>
//         <BoaNoite name="Mário"/>,
//     </div>,
//     document.getElementById('root'));

    ReactDOM.render(
    <div>
        <Mult.BoaTarde name='Bia'/>
        <Mult.BoaNoite name="Mário"/>
        <Saudacao tipo='Bom dia' name='Mário' />
        <Pai name='Paulo' sobrename='Silva'>
            <Filho name="Pedro" />
            <Filho name="Paulo" />
            <Filho name="Carla" />
        </Pai>
    </div>,
    document.getElementById('root'));



// ReactDOM.render(<BomDia />, document.getElementById('root'));


