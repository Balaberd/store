export type TProductTypesByApply = "body" | "face" | "hands" | "wash" | "cosmetics" | "hair" | "feet";

export type TFilterTypes = "manufacturerСountry" | "brand";

export interface IProduct {
    id: number;
    name: string;
    sizeType: string;
    size: number;
    manufacturerСountry: string;
    brand: string;
    description: string;
    price: number;
    applying: TProductTypesByApply[];
    url: any;
}

type PriceType = {
    from: number | null;
    to: number | null;
}
export interface IFilteres {
    price: PriceType;
    brand: string[];
    applying: TProductTypesByApply[];
    manufacturerСountry: string[];
}

export type TypesOfSort = "price" | "name";
export interface ISorter {
    sortBy: TypesOfSort;
    isIncreaseSorting: boolean;
}

export interface IDataForFilteres {
    brandsList: string[];
    manufacturerСountrysList: string[];
    productTypesByApply: TProductTypesByApply[];
}