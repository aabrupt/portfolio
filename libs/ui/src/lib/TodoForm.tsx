import { Todo } from '@nx-next-docs/types';
import { Field, Form, Formik } from 'formik';
import React, { useCallback } from 'react';
import uuid from 'react-native-uuid';
import dayjs from 'dayjs';

export interface TodoFormProps {
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export function TodoForm({ setTodos }: TodoFormProps) {
    const addTodo = useCallback(
        (todo) => {
            setTodos((todos) => {
                if (!todos.includes(todo)) {
                    return [todo, ...todos];
                }
                return todos;
            });
        },
        [setTodos]
    );

    return (
        <Formik
            initialValues={{
                author: '',
                content: '',
                doDate: '',
                tags: '',
            }}
            onSubmit={(values, actions) => {
                const { author, content, doDate: doDateString } = values;
                let doDate = Date.parse(doDateString);
                const tags = values.tags.split(',').map((value) => {
                    return value.trim();
                });
                const todo: Todo = {
                    author,
                    content,
                    doDate: dayjs(doDate).format('YYYY-MM-DD'),
                    tags,
                    id: uuid.v4().toString(),
                    publishDate: dayjs(Date.now()).format('YYYY-MM-DD'),
                };

                addTodo(todo);
            }}
        >
            <Form>
                <Field name="author" required />
                <Field name="content" required />
                <Field name="doDate" type="date" />
                <Field name="tags" />
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
}
