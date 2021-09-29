export type id = string;

export type StarshipsCollection = {
    [id: id]: Starship,
}

export type Starship = {
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    max_atmosphering_speed: string;
    crew: string;
    passengers: string;
    cargo_capacity: string;
    consumables: string;
    hyperdrive_rating: string;
    MGLT: string;
    starship_class: string;
}

export function selectRequiredFields(data: any): Starship {
    return {
        name: data.name,
        model: data.model,
        manufacturer: data.manufacturer,
        cost_in_credits: data.cost_in_credits,
        length: data.length.replace(',', ''),
        max_atmosphering_speed: data.max_atmosphering_speed,
        crew: data.crew.replace(',', ''),
        passengers: data.passengers,
        cargo_capacity: data.cargo_capacity,
        consumables: data.consumables,
        hyperdrive_rating: data.hyperdrive_rating,
        MGLT: data.MGLT,
        starship_class: data.starship_class,
    };
}
