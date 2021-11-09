import React from 'react'
import Filho from './Filho'
import {childrenWithProps} from '../utils/util'

export default props => 
    <div>
        <h1>{props.name} {props.sobrename}</h1>
        <h2>Filhos</h2>
        <ul>
            {/* Atribui somente a propriedade sobername */}
            {/* <Filho name="Pedro" sobrename={props.sobrename} /> */}
            {/* Atribui todas as propriedades do elemento pai */}
            {/* <Filho {...props} /> */}
            {/* Atribui todas as propriedades do elemento pai despois sobreescreve a propriedade name*/}
            {/* <Filho {...props} name='Carla' /> */}
            {/* {props.children} */}
            {
                //Recebe elementos filhos, separa cada um, faz um clone dele, 
                // espalha as propriedades do elemento paie por fim sobreescreve 
                // as propriedades específicas do elemento filho
                
            }
            {childrenWithProps(props)}
        </ul>
    </div>