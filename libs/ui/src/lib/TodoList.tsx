import { Todo as TodoType } from '@nx-next-docs/types';
import React, { useCallback } from 'react';
import styled from '@emotion/styled';
import { Todo } from '@nx-next-docs/ui';

export interface TodoListProps {
    setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
    todos: TodoType[];
}

const List = styled('div')``;

export function TodoList({ todos, setTodos }: TodoListProps) {
    const onRemove = useCallback(
        (id: string) => {
            setTodos((todos) => {
                return todos.filter((todo) => todo.id != id);
            });
        },
        [setTodos]
    );

    return (
        <List>
            {todos.map((todo, i) => (
                <Todo
                    key={i}
                    author={todo.author}
                    content={todo.content}
                    doDate={todo.doDate}
                    publishDate={todo.publishDate}
                    tags={todo.tags}
                    onRemove={onRemove}
                    id={todo.id}
                />
            ))}
        </List>
    );
}
