# Практическая работа 1. Компоненты JSX + React Router

Интернет-магазин «Тихий дом», свёрстанный по макету Figma и разбитый на React-компоненты. По заданию в повторяющихся карточках пока одинаковый контент.

Проект настроен по инструкции: Vite + React Compiler, линтер oxlint, менеджер пакетов pnpm, деплой через gh-pages.

## Страницы (React Router)

| Адрес | Страница |
|---|---|
| `#/` | Главная (`pages/HomePage`) |
| `#/catalog` | Каталог (`pages/CatalogPage`) |
| `#/cart` | Корзина (`pages/CartPage`) |
| любой другой | 404 (`pages/NotFoundPage`) |

Используется `HashRouter`: адреса выглядят как `.../#/catalog`. Так сайт работает на GitHub Pages, где обычный `BrowserRouter` при обновлении страницы выдаёт ошибку 404.

`Layout` — общий каркас: шапка и подвал на всех страницах, а между ними `<Outlet />`, куда подставляется текущая страница.

## Компоненты (`src/components`)

- `Layout` — шапка + текущая страница + подвал;
- `Header` — меню на `NavLink` (активный пункт подчёркивается);
- `Logo` — ссылка на главную;
- `Hero`, `Button` — баннер и кнопка «Перейти в каталог»;
- `Advantages` + `AdvantageCard` — преимущества;
- `Products` + `ProductCard` — подборка товаров;
- `CartItem` — товар в корзине;
- `Subscribe` — подписка;
- `Footer` — подвал со ссылками на страницы.

## Запуск

```powershell
pnpm i
pnpm dev
```

## Деплой на GitHub Pages

```powershell
git add .
git commit -m "практика"
git push origin master
pnpm run deploy
```
