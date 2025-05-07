# Next.js Lab 02

Лабораторна робота №2 з використанням **Next.js**. Містить базову реалізацію SPA з використанням **React**, маршрутизації, компонентів та стилів. 

## Конфігурація

Перед запуском проєкту необхідно:

1. Мати встановлений [Node.js](https://nodejs.org/)
2. Інсталювати залежності ```npm install```
3. Створити `.env` файл


### Приклад `.env`:

```
# Для розробки (розкоментуйте, щоб використовувати)
# NODE_ENV=development
# DATABASE_URL='YOUR_DEV_DATABASE_URL'
# NEXT_PUBLIC_DOMAIN='YOUR_DEV_DOMAIN'
# NEXT_PUBLIC_API_URL='YOUR_DEV_API_URL'

# Для продакшну (розкоментуйте, щоб використовувати)
NODE_ENV=production
DATABASE_URL='YOUR_PRODUCTION_DATABASE_URL'
NEXT_PUBLIC_DOMAIN='YOUR_PRODUCTION_DOMAIN'
NEXT_PUBLIC_API_URL='YOUR_PRODUCTION_API_URL'
```

### Основні команди

```npm run dev``` -	Запуск у режимі розробки

```npm run build``` -	Збірка проєкту

```npm start``` - Запуск зібраного застосунку

```npm run lint``` - Перевірка коду за eslint

```npx prisma db seed``` - Запускає сидінг бази даних

## Ліцензія
Цей проєкт ліцензовано згідно MPU [Mozilla Public License 2.0](./LICENSE)
##
Автор : **Ivan Sereda**

Email: [vt_221_bio@student.ztu.edu.ua]()

Рік : 2025