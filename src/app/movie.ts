export enum Genre{
    Action = 'Action',
    Thriller = 'Thriller',
    Drama = 'Drama',
    Mystery = 'Mystery', 
    Horror = 'Horror',
    Comedy = 'Comedy',
    Romance = 'Romance'
}

export interface Movie {
    id: number;
    runtime: number;
    title: string;
    description: string;
    genre: Genre;
    releaseDate: Date;
}
