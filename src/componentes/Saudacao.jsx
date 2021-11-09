import React, {Component} from "react";

export default class Saudacao extends Component{

    state = {
        // tipo:'Fala',
        // name: 'Mário',
        tipo:this.props.tipo,
        name: this.props.name
    }

    constructor(props){
        super(props)
        
        this.setTipo = this.setTipo.bind(this)
        this.setName = this.setName.bind(this)
    }

    setTipo(e){
        // console.log(e.target.value)
        // this.props.tipo = e.target.value
        // let i = 1
        // setInterval(() => {
        //     this.setState({tipo: ++i})
        // }, 1000)
        this.setState({ tipo: e.target.value})
        
    }

    setName(e){
        this.setState({name: e.target.value})
    }
    render(){
        // const{tipo, name} = this.props
        const{tipo, name} = this.state
        return(
            <div>
                <h1>{tipo} {name}!</h1>
                <hr />
                {/* <input type="text" placeholder="Tipo..." value={tipo} onChange={e => this.setTipo(e)} />
                <input type="text" placeholder="Nome..." value={name} onChange={e => this.setName(e)} /> */}
                <input type="text" placeholder="Tipo..." value={tipo} onChange={this.setTipo} />
                <input type="text" placeholder="Nome..." value={name} onChange={this.setName} />
            </div>
        )
    }
}