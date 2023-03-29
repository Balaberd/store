export type TTypeOfProductApplications =
    | "body"
    | "face"
    | "hands"
    | "wash"
    | "cosmetics"
    | "hair"
    | "feet";

export type TPrice = number | null;

export type TSorterType = "name" | "price";

export interface IFilteres {
    priceFrom: TPrice;
    priceTo: TPrice;
    brands: string[];
    productApplyingTypes: TTypeOfProductApplications[];
    producerСountries: string[];
    sortBy: TSorterType;
    isIncreaseSorting: boolean;
}

export type TSizeType = "volume" | "weight";

export interface IProduct {
    id: number;
    name: string;
    sizeType: TSizeType;
    size: number;
    producingСountries: string;
    brand: string;
    description: string;
    price: number;
    typesOfApplication: TTypeOfProductApplications[];
    url: any;
}

export interface IBasket {
    [key: string]: number;
}
