export enum FiltersEnum {
    COST_IN_CREDITS = 'cost_in_credits',
    LENGTH = 'length',
    MAX_ATMOSPHERING_SPEED = 'max_atmosphering_speed',
    CREW = 'crew',
    PASSENGERS = 'passengers',
    CARGO_CAPACITY = 'cargo_capacity',
    CONSUMABLES = 'consumables',
    HYPERDRIVE_RATING = 'hyperdrive_rating',
}

export type Filters = {
    cost_in_credits: FilterOptions;
    length: FilterOptions;
    max_atmosphering_speed: FilterOptions;
    crew: FilterOptions;
    passengers: FilterOptions;
    cargo_capacity: FilterOptions;
    consumables: FilterOptions;
    hyperdrive_rating: FilterOptions;
}

export type FilterOptions = {
    name: FiltersEnum,
    title: string,
    topValue?: number,
    lowValue?: number,
    description: string,
}

export const initFilters: Filters = {
    cost_in_credits: {
        name: FiltersEnum.COST_IN_CREDITS,
        title: 'Стоимость',
        topValue: undefined,
        lowValue: undefined,
        description: 'Стоимость звездолета в кредитах',
    },
    length: {
        name: FiltersEnum.LENGTH,
        title: 'Длина',
        topValue: undefined,
        lowValue: undefined,
        description: 'Длина звездолета в метрах',
    },
    max_atmosphering_speed: {
        name: FiltersEnum.MAX_ATMOSPHERING_SPEED,
        title: 'Скорость',
        topValue: undefined,
        lowValue: undefined,
        description: 'Максимальная скорость звездолета в атмосфере',
    },
    crew: {
        name: FiltersEnum.CREW,
        title: 'Персонал',
        topValue: undefined,
        lowValue: undefined,
        description: 'Кол-во персонала, необходимого для управления звездолетом',
    },
    passengers: {
        name: FiltersEnum.PASSENGERS,
        title: 'Пассажиры',
        topValue: undefined,
        lowValue: undefined,
        description: 'Вместимость звездолета',
    },
    cargo_capacity: {
        name: FiltersEnum.CARGO_CAPACITY,
        title: 'Грузоподъемность',
        topValue: undefined,
        lowValue: undefined,
        description: 'Максимальное кол-во кг, которое может перевозить звездолет',
    },
    consumables: {
        name: FiltersEnum.CONSUMABLES,
        title: 'Расходные материалы',
        topValue: undefined,
        lowValue: undefined,
        description: 'Максимальный промежуток времени, в течение которого звездолет может обеспечивать расходными материалами весь свой экипаж без неодходимости пополнения запасов',
    },
    hyperdrive_rating: {
        name: FiltersEnum.HYPERDRIVE_RATING,
        title: 'Класс гипердвигателя',
        topValue: undefined,
        lowValue: undefined,
        description: 'Класс гипердвигателя',
    },
};