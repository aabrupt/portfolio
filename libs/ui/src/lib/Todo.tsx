import { Todo } from '@nx-next-docs/types';

export type TodoProps = Todo & { onRemove: (id: string) => void };
