import React from 'react';
import { useId } from 'react';

export function List(props) {
    const items = props.items; // Разбиваем строку на массив символов

    const id = useId();

    return (
        <ol>
            {items.map((item, id) => (
                <li key={id}>{item}</li>
            ))}
        </ol>
    );
}