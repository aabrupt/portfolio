import { useCallback, useEffect, useState } from 'react';
import { DefaultLayout as Layout } from '@nx-next-docs/layouts';
import { Todo } from '@nx-next-docs/types';
import { TodoForm, TodoList } from '@nx-next-docs/ui';
import { useRouter } from 'next/router';

export default function Todos() {
    const router = useRouter();

    const [todos, setTodos] = useState<Todo[]>([]);

    const importTodos = useCallback(
        (todos: Todo[]) => {
            setTodos(todos);
        },
        [setTodos]
    );

    const exportTodos = useCallback(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem('todos'));
        console.log(savedTodos);

        if (!savedTodos) return;

        importTodos(savedTodos);
    }, []);

    useEffect(exportTodos, [todos]);

    return (
        <Layout title="Todos">
            <TodoForm setTodos={setTodos} />
            <TodoList setTodos={setTodos} todos={todos} />
        </Layout>
    );
}
