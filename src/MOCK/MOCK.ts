import myImage1 from "./images/1.webp";
import myImage2 from "./images/2.webp";
import myImage3 from "./images/3.webp";
import myImage4 from "./images/4.webp";
import myImage5 from "./images/5.webp";
import myImage6 from "./images/6.webp";
import myImage7 from "./images/7.webp";
import myImage8 from "./images/8.webp";
import myImage9 from "./images/9.webp";
import myImage10 from "./images/10.webp";
import myImage11 from "./images/11.webp";
import myImage12 from "./images/12.webp";
import myImage13 from "./images/13.webp";
import myImage14 from "./images/14.webp";
import myImage15 from "./images/15.webp";
import myImage16 from "./images/16.webp";
import myImage17 from "./images/17.webp";
import myImage18 from "./images/18.webp";
import myImage19 from "./images/19.webp";
import myImage20 from "./images/20.webp";
import { IProduct } from "../types/types";

export const productsMock: IProduct[] = [
  {
    id: 1,
    name: "Молекулярное масло",
    sizeType: "volume",
    size: 100,
    producingСountries: "Великобритания",
    brand: "Smart",
    description: "для рук и ног",
    price: 1500,
    typesOfApplication: ["hands", "feet"],
    url: myImage1,
  },
  {
    id: 2,
    name: "Средство для снятия макияжа с глаз",
    sizeType: "volume",
    size: 125,
    producingСountries: "Германия",
    brand: "NIVEA",
    description: "Двойной эффект",
    price: 300,
    typesOfApplication: ["face", "cosmetics"],
    url: myImage2,
  },
  {
    id: 3,
    name: "Крем-хайлайтер для лица и тела",
    sizeType: "volume",
    size: 100,
    producingСountries: "Россия",
    brand: "Organic Kitchen",
    description: "Загадочное полнолуние, мерцающий",
    price: 195,
    typesOfApplication: ["face", "body", "cosmetics"],
    url: myImage3,
  },
  {
    id: 4,
    name: "Тени для век",
    sizeType: "weight",
    size: 16,
    producingСountries: "Россия",
    brand: "Makeup Revolution",
    description: "Palette Fortune Favours The Brave",
    price: 536,
    typesOfApplication: ["cosmetics"],
    url: myImage4,
  },
  {
    id: 5,
    name: "Пудра",
    sizeType: "weight",
    size: 10,
    producingСountries: "Россия",
    brand: "Relouis",
    description: "фиксирующая, прозрачная",
    price: 500,
    typesOfApplication: ["cosmetics"],
    url: myImage5,
  },
  {
    id: 6,
    name: "Мыло",
    sizeType: "weight",
    size: 90,
    producingСountries: "Россия",
    brand: "Safeguard",
    description: "антибактериальное, классическое ослепительно белое",
    price: 79,
    typesOfApplication: ["hands", "body"],
    url: myImage6,
  },
  {
    id: 7,
    name: "Гель для душа",
    sizeType: "weight",
    size: 90,
    producingСountries: "Германия",
    brand: "Dove",
    description: "Фисташковый крем и магнолия",
    price: 179,
    typesOfApplication: ["body"],
    url: myImage7,
  },
  {
    id: 8,
    name: "Мусс для тела",
    sizeType: "weight",
    size: 250,
    producingСountries: "Германия",
    brand: "Organic Shop",
    description: "земляничный йогурт",
    price: 299,
    typesOfApplication: ["body"],
    url: myImage8,
  },
  {
    id: 9,
    name: "Мицеллярная вода",
    sizeType: "volume",
    size: 400,
    producingСountries: "Германия",
    brand: "Garnier",
    description: "экспертное очищение",
    price: 329,
    typesOfApplication: ["face", "cosmetics"],
    url: myImage9,
  },
  {
    id: 10,
    name: "Крем для лица",
    sizeType: "volume",
    size: 100,
    producingСountries: "Германия",
    brand: "Elizavecca",
    description: "Silky Creamy Donkey Steam Moisture Milky",
    price: 754,
    typesOfApplication: ["face", "cosmetics"],
    url: myImage10,
  },
  {
    id: 11,
    name: "Спрей для волос",
    sizeType: "volume",
    size: 250,
    producingСountries: "Россия",
    brand: "Ollin Professional",
    description: "15 в 1 Ollin Professional Perfect Hair Leave-In",
    price: 549,
    typesOfApplication: ["hair", "cosmetics"],
    url: myImage11,
  },
  {
    id: 12,
    name: "Гель",
    sizeType: "volume",
    size: 2.34,
    producingСountries: "Россия",
    brand: "Persil",
    description: "премиум автомат для стирки",
    price: 999,
    typesOfApplication: ["wash"],
    url: myImage12,
  },
  {
    id: 13,
    name: "Средство для стирки",
    sizeType: "volume",
    size: 1.17,
    producingСountries: "Россия",
    brand: "Persil",
    description: "Premium",
    price: 585,
    typesOfApplication: ["wash"],
    url: myImage13,
  },
  {
    id: 14,
    name: "Порошок для стирки",
    sizeType: "weight",
    size: 12,
    producingСountries: "Россия",
    brand: "Tide",
    description: "для цветных вещей",
    price: 1719,
    typesOfApplication: ["wash"],
    url: myImage14,
  },
  {
    id: 15,
    name: "Порошок для стирки",
    sizeType: "weight",
    size: 9,
    producingСountries: "Россия",
    brand: "МИФ",
    description: "морозная свежесть",
    price: 1265,
    typesOfApplication: ["wash"],
    url: myImage15,
  },
  {
    id: 16,
    name: "Крем-гель",
    sizeType: "volume",
    size: 610,
    producingСountries: "Германия",
    brand: "Dove",
    description: "для всей семьи,питание и увлажнение",
    price: 476,
    typesOfApplication: ["body", "hands"],
    url: myImage16,
  },
  {
    id: 17,
    name: "Крем-гель для душа",
    sizeType: "volume",
    size: 250,
    producingСountries: "Германия",
    brand: "Dove",
    description: "Ритуал красоты. Питание. Авокадо и календула",
    price: 189,
    typesOfApplication: ["body", "hands"],
    url: myImage17,
  },
  {
    id: 18,
    name: "Жидкое мыло",
    sizeType: "volume",
    size: 300,
    producingСountries: "Россия",
    brand: "BioMio",
    description: "Детское",
    price: 230,
    typesOfApplication: ["body", "hands"],
    url: myImage18,
  },

  {
    id: 19,
    name: "Масло для душа",
    sizeType: "volume",
    size: 250,
    producingСountries: "Великобритания",
    brand: "ECOLATIER",
    description: "Упругость & Релаксация GREEN ORGANIC",
    price: 225,
    typesOfApplication: ["face", "body", "hands"],
    url: myImage19,
  },
  {
    id: 20,
    name: "Бальзам для тела",
    sizeType: "volume",
    size: 250,
    producingСountries: "Великобритания",
    brand: "ECOLATIER",
    description: "Упругость и релаксация Green",
    price: 259,
    typesOfApplication: ["body"],
    url: myImage20,
  },
];
