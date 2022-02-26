import { Todo } from '@nx-next-docs/types';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import dayjs from 'dayjs';

export type TodoProps = Todo & { onRemove: (id: string) => void };

const Container = styled(motion.div)``;

export function Todo({
    author,
    content,
    tags,
    doDate,
    publishDate,
    id,
    onRemove,
}: TodoProps) {
    return (
        <Container>
            <h1>Author: {author}</h1>
            <p>To-do: {content}</p>
            <h2>Do-date: {doDate}</h2>
            <h3>
                Tags:
                {tags.map((tag, i) => {
                    if (i < tags.length) return tag + ' ';
                    return tag;
                })}
            </h3>
            <div>
                <h4>Published: {publishDate}</h4>
                <button onClick={() => onRemove(id)}>Remove</button>
            </div>
        </Container>
    );
}
