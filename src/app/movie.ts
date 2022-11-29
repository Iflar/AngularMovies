export enum Genre{
    "Action" = 1,
    "Thriller",
    "Drama",
    "Mystery",
    "Horror",
    "Comedy",
    "Romance"
}

export interface Movie {
    id: number;
    runtime: number;
    title: string;
    description: string;
    gnere: Genre;
    releaseDate: Date;
}
