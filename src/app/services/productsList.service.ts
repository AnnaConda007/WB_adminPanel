import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: IproductList[] = [
    {
      id: 1,
      name: 'Ноутбук Dell XPS 15',
      price: 94990,
      description:
        'Мощный ноутбук с 15-дюймовым 4K OLED дисплеем, процессором Intel Core i7 и 16 ГБ ОЗУ.',
      manufacturer: 'Dell Inc.',
    },
    {
      id: 2,
      name: 'Смартфон iPhone 13 Pro',
      price: 79990,
      description:
        'Последний iPhone с Super Retina XDR дисплеем, чипом A15 Bionic и тройной камерой.',
      manufacturer: 'Apple Inc.',
    },
    {
      id: 3,
      name: '4K Смарт ТВ Sony Bravia',
      price: 64990,
      description:
        'Высококачественное 4K Ultra HD смарт-телевидение с поддержкой HDR и встроенными приложениями для стриминга.',
      manufacturer: 'Sony Corporation',
    },
    {
      id: 4,
      name: 'Цифровая камера Canon EOS 90D',
      price: 74990,
      description:
        'Продвинутая цифровая зеркальная камера с 32,5 МП сенсором, записью видео 4K и быстрым автофокусом.',
      manufacturer: 'Canon Inc.',
    },
    {
      id: 5,
      name: 'Беспроводные наушники Bose QuietComfort 45',
      price: 29990,
      description:
        'Премиум-наушники с активным шумоподавлением, комфортной посадкой и чистым звуком.',
      manufacturer: 'Bose Corporation',
    },
    {
      id: 6,
      name: 'Игровой ноутбук ASUS ROG Zephyrus G14',
      price: 99990,
      description:
        'Высокопроизводительный игровой ноутбук с процессором AMD Ryzen 9 и видеокартой NVIDIA GeForce RTX 3060.',
      manufacturer: 'ASUSTeK Computer Inc.',
    },
    {
      id: 7,
      name: 'Умные часы Samsung Galaxy Watch 4',
      price: 14990,
      description:
        'Стильные умные часы с мониторингом здоровья, экраном Super AMOLED и поддержкой ECG.',
      manufacturer: 'Samsung Electronics Co., Ltd.',
    },
    {
      id: 8,
      name: 'Планшет Apple iPad Air',
      price: 45990,
      description:
        'Легкий и мощный планшет с 10,9-дюймовым Liquid Retina дисплеем и процессором A14 Bionic.',
      manufacturer: 'Apple Inc.',
    },
    {
      id: 9,
      name: 'Ноутбук HP Spectre x360',
      price: 79990,
      description:
        'Элегантный ноутбук-трансформер с 13,3-дюймовым OLED дисплеем, процессором Intel Core i7 и поддержкой стилуса.',
      manufacturer: 'HP Inc.',
    },
    {
      id: 10,
      name: 'Смартфон Xiaomi Mi 11',
      price: 25990,
      description:
        'Мощный смартфон с 108-мегапиксельной камерой, Snapdragon 888 и быстрой зарядкой.',
      manufacturer: 'Xiaomi Corporation',
    },
    {
      id: 11,
      name: 'Ноутбук Lenovo ThinkPad X1 Carbon',
      price: 119990,
      description:
        'Профессиональный бизнес-ноутбук с 14-дюймовым HDR дисплеем, процессором Intel Core i9 и 32 ГБ ОЗУ.',
      manufacturer: 'Lenovo Group Limited',
    },
    {
      id: 12,
      name: 'Кофеварка DeLonghi Magnifica S',
      price: 21990,
      description:
        'Автоматическая кофемашина для приготовления эспрессо и других напитков, с молочным паром.',
      manufacturer: 'DeLonghi Group',
    },
    {
      id: 13,
      name: 'Смартфон Samsung Galaxy S21 Ultra',
      price: 98990,
      description:
        'Флагманский смартфон с 108-мегапиксельной камерой, экраном Dynamic AMOLED и поддержкой S Pen.',
      manufacturer: 'Samsung Electronics Co., Ltd.',
    },
    {
      id: 14,
      name: 'Ноутбук Acer Predator Helios 300',
      price: 84990,
      description:
        'Игровой ноутбук с 15,6-дюймовым 144 Гц дисплеем, процессором Intel Core i7 и видеокартой NVIDIA GeForce RTX 3060.',
      manufacturer: 'Acer Inc.',
    },
    {
      id: 15,
      name: 'Холодильник Bosch Serie 4',
      price: 45990,
      description:
        'Надежный холодильник с системой NoFrost и большим объемом для хранения продуктов.',
      manufacturer: 'Bosch Home Appliances',
    },
  ];

  delitePoduct(id: number): IproductList[] {
    const filteredPoducts = this.products.filter((product) => product.id != id);
    this.products = filteredPoducts;
    return filteredPoducts;
  }
  constructor() {}
}

export interface IproductList {
  id: number;
  name: string;
  price: number;
  description: string;
  manufacturer: string;
}
