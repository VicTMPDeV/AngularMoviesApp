import { ActorDto } from "../../actors/models/dto/actorDto.interface";
import { CompanyDto } from "../../companies/models/dto/companyDto.interface";

export interface Movie {
    id?:        number; //Opcional porque al crear la película no se que id le tocaría (depende del backend, no de mi).
    title:      string;
    poster?:    string;
    genre:      Genre[];
    year:       number;
    duration:   number;
    imdbRating: number;
    actors:     ActorDto[];
    companies:  CompanyDto;
}

export enum Genre {
    Action = "Action",
    Adventure = "Adventure",
    Animation = "Animation",
    Comedy = "Comedy",
    Crime = "Crime",
    Drama = "Drama",
    Horror = "Horror",
    Musical = "Musical",
    Romance = "Romance",
    'Sci-Fi' = "Sci-Fi",
    Thriller = "Thriller",
    War = "War"
}

// Nota : He añadido el Enum porque lo veía necesario... 
// Porque en el caso que se borren todas las películas, no 
// sabremos con qué valores informar las nuevas películas
// (también podríamos pedir al backend que nos desarrollara 
// un endpoint de generos, pero puede ser que no quieran hacerlo.)