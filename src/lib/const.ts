import { TTypeOfProductApplications } from "./types/types";

export const APPLYING_TYPES_TRANSLATE = {
  body: "Уход за телом",
  face: "Уход за лицом",
  hands: "Уход за руками",
  feet: "Уход за ногами",
  hair: "Уход за волосами",
  wash: "Средства для стирки",
  cosmetics: "Косметика",
};

export const FILTER_TYPE_TRANSLATE = {
  brand: "Брэнд",
  manufacturerСountry: "Страна производитель"
}

export const listOfProductApplicationTypes: TTypeOfProductApplications[] = [
  "body",
  "face",
  "hands",
  "wash",
  "cosmetics",
  "hair",
  "feet",
];
