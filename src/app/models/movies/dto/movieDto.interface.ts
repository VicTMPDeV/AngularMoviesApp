export interface MovieDto {
    id:         number;
    title:      string;
    poster:     null | string;
    genre:      string[];
    year:       number;
    duration:   number;
    imdbRating: number;
    actors:     number[];
}