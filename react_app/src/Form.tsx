import {Component} from 'react';
import './Form.css'
import { ChildComponent } from './ChildComponent.tsx';


export class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
        input:  '',
        showChild: false
        };

    this.inputHandler = this.inputHandler.bind(this); 
    this.submitHandler = this.submitHandler.bind(this);
    }

    componentDidMount() {
        console.log('Компонент отрендерился');
    }

    inputHandler(event) {
        this.setState({
            input: event.target.value
        });
    }

    componentDidUpdate() {
        console.log('Компонент обновился');
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
        }
    }

    componentWillUnmount() {
        console.log('Компонент удалился');
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
                />
                <button type="submit" 
                className='form__button'
                >Кнопка</button>
            </form>
            {this.state.showChild && (<ChildComponent inputResult={this.state.input} length={this.state.input.length}/>)}
        </>
        );
    }
}
