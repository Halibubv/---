# Практическая работа 1. Компоненты JSX + React Router

Интернет-магазин «Тихий дом», свёрстанный по макету Figma и разбитый на React-компоненты. По заданию в повторяющихся карточках пока одинаковый контент.

Проект настроен по инструкции: Vite + React Compiler, линтер oxlint, менеджер пакетов pnpm, деплой через gh-pages.

## React Router

По заданию свёрстана только главная страница. Роутер подключён (`HashRouter` в `main.jsx`, маршруты в `App.jsx`): адрес `#/` открывает главную, любой другой адрес перенаправляет на неё. `HashRouter` нужен, чтобы сайт работал на GitHub Pages.

`Layout` — общий каркас: шапка, `<Outlet />` (сюда подставляется страница) и подвал.

## Компоненты (`src/components`)

- `Layout` — шапка + текущая страница + подвал;
- `Header` — меню, «Главная» — `NavLink`;
- `Logo` — ссылка на главную;
- `Hero`, `Button` — баннер и кнопка «Перейти в каталог»;
- `Advantages` + `AdvantageCard` — преимущества;
- `Products` + `ProductCard` — подборка товаров;
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
