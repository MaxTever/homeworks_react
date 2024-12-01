import {Component} from 'react';

export class ChildComponent extends Component {


    render() {
        const { inputResult, length } = this.props;
        return (
            <div>
                <h4>Дочерний компонент</h4>
                <p>Результат ввода: {inputResult}</p>
                <p>Количество символов: {length}</p>
            </div>
        );
    }
}