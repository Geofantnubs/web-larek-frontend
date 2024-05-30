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
