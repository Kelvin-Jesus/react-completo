import React, { Component } from 'react';

class Produto extends Component {

    constructor (props) {
        super(props);
        this.state = {
            contar: 0
        };

        this.handleClick = this.handleClick.bind(this);

    }

    handleClick() {
        return this.setState(state => ({ contar: state.contar + 1 }))
    }

    componentDidMount() {
        console.log('montou')
    }

    componentDidUpdate() {
        document.title = this.state.contar
        console.log('atualizou')
    }

    componentWillUnmount() {
        console.log('desmontou')
    }

    render() {
        return (
            <div>
                <h1>{this.props.titulo}</h1>
                <h2>{this.state.contar}</h2>
                <button onClick={this.handleClick}>{this.state.contar}</button>
            </div>
        );
    }
}


export default Produto;
