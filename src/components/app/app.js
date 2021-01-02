import React from 'react';
import {Col, Row, Container,Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import './app.css'

export default class App extends React.Component {
    state ={
        hide:true
    }
    toggleContentRandomchar = () =>{
        this.setState((state) => {
            return {
                hide: !state.hide
            }
        });
    }
    render() {
        const randomChar = this.state.hide ? <RandomChar/> : null;
        return(
        <> 
            <Container>
                <Header />
            </Container>
            <Container>
                <Row>
                    <Col lg={{size: 5, offset: 0}}>
                        {randomChar}
                        <Button color="primary" onClick={this.toggleContentRandomchar}>Hide/Show Random-Char</Button>{' '}
                    </Col>
                </Row>
                <Row>
                    <Col md='6'>
                        <ItemList />
                    </Col>
                    <Col md='6'>
                        <CharDetails />
                    </Col>
                </Row>
            </Container>
        </>
        )
    }
};
