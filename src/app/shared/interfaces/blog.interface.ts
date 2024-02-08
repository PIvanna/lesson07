export interface IBlog {
    id: number;
    title: string;
    description: string;
    author: string;
}

export interface IBlogRequest {
    title: string;
    description: string;
    author: string;
}

export interface IBlogResponse extends IBlogRequest {
    id: number;
} 