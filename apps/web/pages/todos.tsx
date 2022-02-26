import { useCallback, useEffect, useState } from 'react';
import { DefaultLayout as Layout } from '@nx-next-docs/layouts';
import { Todo } from '@nx-next-docs/types';
import { TodoForm, TodoList } from '@nx-next-docs/ui';

export default function Todos() {
    const [todos, setTodos] = useState<Todo[]>();

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

        if (!savedTodos) return;

        importTodos(savedTodos);

        return () => exportTodos();
    }, []);

    return (
        <Layout title="Todos">
            <TodoForm />
            <TodoList />
        </Layout>
    );
}
