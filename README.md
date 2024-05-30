# Проектная работа "Веб-ларек"

Стек: HTML, SCSS, TS, Webpack

Структура проекта:
- src/ — исходные файлы проекта
- src/components/ — папка с JS компонентами
- src/components/base/ — папка с базовым кодом

Важные файлы:
- src/pages/index.html — HTML-файл главной страницы
- src/types/index.ts — файл с типами
- src/index.ts — точка входа приложения
- src/styles/styles.scss — корневой файл стилей
- src/utils/constants.ts — файл с константами
- src/utils/utils.ts — файл с утилитами

## Установка и запуск
Для установки и запуска проекта необходимо выполнить команды

```
npm install
npm run start
```

или

```
yarn
yarn start
```
## Сборка

```
npm run build
```

или

```
yarn build
```

# Базовый код.

1. Класс API

Базовый класс для получения данных от сервера. Сервер реализует GET и POST запросы

2. Класс Components

Базовый класс отвечающий за переключение состояний модальных окон

3. Класс Page

Базовый класс который выводит информацию полученную с сервера на страницу

# Компоненты модели данных

1. Класс Product

Содержит в себе информацию об отдельной карточке с продуктом

2. Класс Basket

Содержит в себе информацию о наполнение корзины

3. Класс Order

Содержит информацию о заказе, а также проверяет правильно ли заполнены поля формы заказа

# Ключевые типы данных

```
// Категории товаров
type ICategoryProduct =
	| 'софт-скил'
	| 'другое'
	| 'дополнительное'
	| 'кнопка'
	| 'хард-скил';

// Интерфейс товаров полученный с сервера
interface IProduct {
	id: string; // Уникальный id товара
	description: string; // Описание товара
	image: string; // Изображение товара
	title: string; // Название товара
	category: ICategoryProduct; // К какой категории относится товар
	price: number | null; // Стоимость товара(может быть "Бесценным")
}

// Интерфейс модального окна с товаром
interface IProductModal {
	addBasket(id: IProduct): void; // Добавляем товар в корзину
	removeBasket: (id: IProduct) => void; // Удаляем товар из корзины
	inBasket: boolean; // Есть ли уже товар в корзине
}

// Интерфейс модального окна корзины
interface IBasket {
	items: IProduct[]; // Список товаров корзине
	design: () => void; // Оформляем заказ
	totalPrice: () => number; // Общая стоимость заказа
}

// Тип олаты заказа
type IPayment = 'online' | 'offline'; // Оплата заказа онлайн или при получении

// Интерфейс модального окна с адресом и формой оплаты
interface IDeliveryForm {
	payment: IPayment; // Выбор способа оплаты
	address: string; // Адресс доставки
}

// Интерфейс модального окна с контактами заказчика
interface IContactsForm {
	email: string; // email  заказчика
	phone: number; // Телефон заказчика
}

// Тип объединяющий формы заказа
type IOrderForm = IDeliveryForm & IContactsForm;

// Интерфейс проверки оформления заказа
interface IOrder extends IOrderForm {
	isProductBasket: boolean; // Проверяем есть ли товары в корзине
	validatePayment(): void; // Выбран ли способ оплаты
	validateAddress(): void; // Указан ли адрес доставки
	validateEmail(): void; // Указан ли email
	validatePhone(): void; // Указан ли телефон
	clearBasket(): void; // Очиска корзины после оплаты заказа
}

```



