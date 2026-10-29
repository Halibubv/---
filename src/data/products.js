import vaseImage from '../assets/images/vase.jpg'
import plaidImage from '../assets/images/plaid.jpg'
import mugImage from '../assets/images/mug.jpg'
import lampImage from '../assets/images/lamp.jpg'
import candleImage from '../assets/images/candle.jpg'
import trayImage from '../assets/images/tray.jpg'
import pillowImage from '../assets/images/pillow.jpg'
import basketImage from '../assets/images/basket.jpg'

export const categories = [
  { id: '1', title: 'Декор' },
  { id: '2', title: 'Текстиль' },
  { id: '3', title: 'Посуда' },
  { id: '4', title: 'Освещение' },
  { id: '5', title: 'Хранение' },
]

export const products = [
  {
    id: '1',
    title: 'Ваза «Тишина»',
    subtitle: 'Керамика · песочный',
    price: 2490,
    image: vaseImage,
    badge: 'Бестселлер',
    categoryId: '1',
    description:
      'Плавные линии и тёплая матовая фактура. Эта керамическая ваза хороша с сухоцветами, одной веткой или сама по себе — как маленький акцент в любимом уголке дома.',
    material: 'Керамика',
    size: 'Высота 24 см, диаметр 16 см',
  },
  {
    id: '2',
    title: 'Плед «Тёплый вечер»',
    subtitle: 'Хлопок · оливковый',
    price: 4590,
    image: plaidImage,
    badge: null,
    categoryId: '2',
    description:
      'Мягкий хлопковый плед с бахромой. Согреет вечером на диване и добавит уюта спальне.',
    material: 'Хлопок',
    size: '130 × 170 см',
  },
  {
    id: '3',
    title: 'Кружка «Утро»',
    subtitle: 'Керамика · молочный',
    price: 1290,
    image: mugImage,
    badge: null,
    categoryId: '3',
    description:
      'Кружка ручной работы с блюдцем. Удобно лежит в руке и долго держит тепло утреннего кофе.',
    material: 'Керамика',
    size: 'Объём 300 мл',
  },
  {
    id: '4',
    title: 'Лампа «Мягкий свет»',
    subtitle: 'Лён и дерево · натуральный',
    price: 6990,
    image: lampImage,
    badge: 'Новинка',
    categoryId: '4',
    description:
      'Настольная лампа с льняным абажуром и деревянным основанием. Даёт тёплый рассеянный свет.',
    material: 'Лён, дерево',
    size: 'Высота 42 см',
  },
  {
    id: '5',
    title: 'Свеча «Сосновый лес»',
    subtitle: 'Соевый воск · 180 г',
    price: 1590,
    image: candleImage,
    badge: null,
    categoryId: '1',
    description:
      'Свеча из соевого воска с ароматом хвои и деревянной крышкой. Горит около 40 часов.',
    material: 'Соевый воск',
    size: '180 г',
  },
  {
    id: '6',
    title: 'Поднос «Круг»',
    subtitle: 'Массив дуба · 28 см',
    price: 1990,
    image: trayImage,
    badge: null,
    categoryId: '3',
    description:
      'Круглый поднос из массива дуба. Для завтрака в постель, свечей или мелочей на столике.',
    material: 'Массив дуба',
    size: 'Диаметр 28 см',
  },
  {
    id: '7',
    title: 'Подушка «Лён»',
    subtitle: 'Лён · натуральный',
    price: 2290,
    image: pillowImage,
    badge: null,
    categoryId: '2',
    description:
      'Декоративная подушка в льняном чехле с бахромой по краю. Чехол снимается и стирается.',
    material: 'Лён',
    size: '45 × 45 см',
  },
  {
    id: '8',
    title: 'Корзина «Порядок»',
    subtitle: 'Морская трава · размер M',
    price: 3290,
    image: basketImage,
    badge: null,
    categoryId: '5',
    description:
      'Плетёная корзина из морской травы с хлопковым чехлом. Для пледов, игрушек и журналов.',
    material: 'Морская трава, хлопок',
    size: 'Высота 30 см, диаметр 32 см',
  },
]

export function formatPrice(price) {
  return price.toLocaleString('ru-RU') + ' ₽'
}
