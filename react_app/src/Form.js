import {Component, createRef} from 'react';
import './Form.css'
import { ChildComponent } from './ChildComponent.js';
import { List } from './List.js';


export class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
        input:  '',
        showChild: false,
        isButtonDisabled: false,
        submittedArray: []
        };

    this.inputHandler = this.inputHandler.bind(this); 
    this.submitHandler = this.submitHandler.bind(this);
    this.focusHandler= this.focusHandler.bind(this);
    this.inputRef = createRef();
    }

    componentDidMount() {
        console.log('Компонент отрендерился');
    }

    

    componentDidUpdate() {
        console.log('Компонент обновился');
    }

    componentWillUnmount() {
        console.log('Компонент удалился');
    }


    inputHandler(event) {
        if (event.target.value.includes('реакт')) {
            this.setState({isButtonDisabled: true});
        } else {
            this.setState({isButtonDisabled: false});
        }
        this.setState({
            input: event.target.value
        });
    }

    submitHandler(event) {
        event.preventDefault();

        if (this.state.input === '') {
            console.log('Введите текст');
            this.setState({showChild: false});
        } else {
            console.log('Значение инпута: ', this.state.input);
            this.setState({
                showChild: true
            });
            this.setState({submittedArray: [...this.state.submittedArray, this.state.input]});
        }
    }

    focusHandler(){
        this.inputRef.current.focus();
    }
    

    render() {
        return (
        <>
            <h3>Форма ввода</h3>
            <form className='form' onSubmit={this.submitHandler}>
                <input placeholder={'текст'} 
                className='form__input' 
                type="text" 
                value={this.state.input} 
                onChange={this.inputHandler}
                ref={this.inputRef}
                />
                <button type="submit" 
                className='form__button'
                disabled={this.state.isButtonDisabled}
                >Кнопка</button>
                <button className='form__button' onClick={this.focusHandler}>Фокус</button>
            </form>
            {this.state.showChild && (<ChildComponent inputResult={this.state.input} length={this.state.input.length}/>)}
            <List items={this.state.submittedArray}></List>
        </>
        );
    }
}