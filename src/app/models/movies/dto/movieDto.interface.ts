export interface MovieDto {
    id?:        number;
    title:      string;
    poster:     string | null;
    genre:      string[];
    year:       number;
    duration:   number;
    imdbRating: number;
    actors:     number[];
}