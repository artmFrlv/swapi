import axios, {AxiosResponse} from 'axios';
import {Film} from '../entities/film';
import {Starship} from '../entities/starship';

export default class StarWarsService {
    static async getFilm(): Promise<AxiosResponse<Film>> {
        return axios.get<Film>('https://swapi.dev/api/films/2');
    }

    static async getStarship(link: string): Promise<AxiosResponse<Starship>> {
        return axios.get<Starship>(link);
    }
}