# Практическая работа 1.




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
