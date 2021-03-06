import React, {Component} from 'react';
import './randomChar.css';
import GotService from '../../services/services';
import Spinner from '../spinner/spinner';
import ErrorMesage from '../errorMessage/errorMessage'

export default class RandomChar extends Component {
    constructor(){
        super()
        this.getRandomChar()

    }
    state = {
        char:{},
        loading:true,
        error:false,
        hide:false
    }
    gotService = new GotService()
    
    onError = (error) => {
        this.setState({error:true,loading:false})
    }

    getRandomChar(){
        const id = Math.floor(Math.random()*125+25);
        this.gotService.getCharacter(id)
        .then(char  => this.setState({char,loading:false}) 
        )
        .catch(this.onError)
    }

    render() {
        const {char,loading,error} = this.state
        const spinner = loading ? <Spinner/> : null;
        const errorMessage = error ? <ErrorMesage/> : null
        const  content = !(loading || error) ? <Content char={char}/> : null
        return (
            <div className="random-block rounded">
            {spinner}
            {errorMessage}
            {content}
            </div>
        );
    }
}

const Content =({char})=> {
    const {name,gender,born,died,culture} = char
    return(
    <>
    <h4>Random Character: {name}</h4>
    <ul className="list-group list-group-flush">
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">Gender </span>
            <span>{gender}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">Born </span>
            <span>{born}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">Died </span>
            <span>{died}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">Culture </span>
            <span>{culture}</span>
        </li>
    </ul>
    </>
    )
}