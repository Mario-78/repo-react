import React, {Fragment} from 'react'

// export default props => 
//     <div>
//         <h1>Bom dia!! {props.name}</h1>
//         <h2>Até Breve!</h2>
//     </div>
export default props => 
    [   
        <h1 key="ft">Bom dia!! {props.name}</h1>,
        <h2 key="df">Até Breve!</h2>
    ]
// export default props => 
//     <Fragment>
//         <h1>Bom dia!! {props.name}</h1>
//         <h2>Até Breve!</h2>
//     </Fragment>