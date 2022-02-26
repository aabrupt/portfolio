export interface Todo {
    // User input
    author: string;
    content: string;
    doDate: string;
    tags: string[];
    // Autogenerate
    publishDate: string;
    id: string;
}
