import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  userList: IUsers[] = [
    {
      id: 1,
      username: 'user1',
      email: 'user1@example.com',
      firstName: 'Иван',
      lastName: 'Иванов',
      city: 'Москва',
      occupation: 'Продавец',
      rating: 4.5,
    },
    {
      id: 2,
      username: 'user2',
      email: 'user2@example.com',
      firstName: 'Екатерина',
      lastName: 'Смирнова',
      city: 'Санкт-Петербург',
      occupation: 'Покупатель',
      rating: 3.8,
    },
    {
      id: 3,
      username: 'user3',
      email: 'user3@example.com',
      firstName: 'Александр',
      lastName: 'Петров',
      city: 'Екатеринбург',
      occupation: 'Продавец',
      rating: 4.2,
    },
    {
      id: 4,
      username: 'user4',
      email: 'user4@example.com',
      firstName: 'Мария',
      lastName: 'Федорова',
      city: 'Новосибирск',
      occupation: 'Покупатель',
      rating: 4.0,
    },
    {
      id: 5,
      username: 'user5',
      email: 'user5@example.com',
      firstName: 'Дмитрий',
      lastName: 'Козлов',
      city: 'Краснодар',
      occupation: 'Продавец',
      rating: 4.6,
    },
    {
      id: 6,
      username: 'user6',
      email: 'user6@example.com',
      firstName: 'Ольга',
      lastName: 'Сидорова',
      city: 'Ростов-на-Дону',
      occupation: 'Покупатель',
      rating: 4.3,
    },
    {
      id: 7,
      username: 'user7',
      email: 'user7@example.com',
      firstName: 'Павел',
      lastName: 'Краснов',
      city: 'Самара',
      occupation: 'Продавец',
      rating: 4.7,
    },
    {
      id: 8,
      username: 'user8',
      email: 'user8@example.com',
      firstName: 'Наталья',
      lastName: 'Иванова',
      city: 'Воронеж',
      occupation: 'Покупатель',
      rating: 4.1,
    },
    {
      id: 9,
      username: 'user9',
      email: 'user9@example.com',
      firstName: 'Андрей',
      lastName: 'Соловьев',
      city: 'Казань',
      occupation: 'Продавец',
      rating: 4.4,
    },
    {
      id: 10,
      username: 'user10',
      email: 'user10@example.com',
      firstName: 'Светлана',
      lastName: 'Морозова',
      city: 'Омск',
      occupation: 'Покупатель',
      rating: 3.9,
    },
    {
      id: 11,
      username: 'user11',
      email: 'user11@example.com',
      firstName: 'Алексей',
      lastName: 'Попов',
      city: 'Пермь',
      occupation: 'Продавец',
      rating: 4.2,
    },
    {
      id: 12,
      username: 'user12',
      email: 'user12@example.com',
      firstName: 'Татьяна',
      lastName: 'Кузнецова',
      city: 'Тюмень',
      occupation: 'Покупатель',
      rating: 4.3,
    },
    {
      id: 13,
      username: 'user13',
      email: 'user13@example.com',
      firstName: 'Игорь',
      lastName: 'Васильев',
      city: 'Уфа',
      occupation: 'Продавец',
      rating: 4.6,
    },
    {
      id: 14,
      username: 'user14',
      email: 'user14@example.com',
      firstName: 'Оксана',
      lastName: 'Егорова',
      city: 'Красноярск',
      occupation: 'Покупатель',
      rating: 4.0,
    },
    {
      id: 15,
      username: 'user15',
      email: 'user15@example.com',
      firstName: 'Сергей',
      lastName: 'Захаров',
      city: 'Владивосток',
      occupation: 'Продавец',
      rating: 4.8,
    },
  ];

  constructor() {}
}

export interface IUsers {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  city: string;
  occupation: string;
  rating: number;
}
