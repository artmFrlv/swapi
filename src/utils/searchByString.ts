import {id, StarshipsCollection} from '../entities/starship';

export default function searchByString(starships: StarshipsCollection, query: string): id[] {
    const results = [];
    for (const id of Object.keys(starships)) {
        const name = starships[id].name.toLowerCase();
        if (name.includes(query)) {
            results.push(id);
        }
    }
    return results;
}