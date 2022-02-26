export interface Todo {
    // User input
    author: string;
    content: string;
    doDate: number;
    tags: string[];
    // Autogenerate
    publishDate: number;
    id: string;
}
