import axios from 'axios';
import React, { FC, useEffect, useState } from 'react'
import { IItem, Item } from './Item';
import styled from 'styled-components';

interface ITodo extends IItem {
    userId: number
    id: number
}

const Container = styled('div')`
    & {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

const StyledH1 = styled('h1')`
    & {
        margin-top: 32px;
        margin-bottom: 16px;
    }
`

export const Todos: FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(() => {
        fetchTodos()
    }, [])

    const fetchTodos = () => {
        axios
            .get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10')
            .then((res) => {
                setTodos(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <Container>
            <StyledH1>Todos</StyledH1>
            <ul>
                {todos.map((el) => {
                    return (
                        <Item
                            key={el.id}
                            title={el.title}
                            completed={el.completed}
                        />
                    )
                })}
            </ul>
        </Container>
    )
}
