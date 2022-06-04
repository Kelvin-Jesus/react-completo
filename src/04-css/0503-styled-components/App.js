import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
    font-size: 2rem;
    color: tomato;
    flex: 1;
`

const Container = styled.div`
    display: flex;
`;

const Paragraph = styled.p`
    font-size: 1.375rem;
    color: royalblue;    
    flex: 1;
`;

const Price = styled.p`
    background: ${(props) => props.cor};
`;

const Buy = styled.button`
    background: ${({ active }) => active ? 'green' : 'black'};
    font-size: 1.5rem;
    color: #fff;
    border-radius: .3rem;
    padding: .5rem;
    &:hover, &:focus {
        background-color: #fff;
        border: #000;
    }
`;

const App = () => {

    const [ active, setActive ] = React.useState();

    return (
        <div>
            <Buy active={active} onClick={() => setActive(!active)}>Compre agora</Buy>
            <Container>
                <Title>Real Madrid Campeão</Title>
                <Price cor="#53d956">1.999</Price>
                <Price cor="tomato">2.999</Price>
                <Paragraph >TExto por aquiiiiiii</Paragraph>
            </Container>
        </div>
    );
}

export default App;
