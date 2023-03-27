Подготовить часть интернет-магазина с использованием React и TypeScript
https://www.figma.com/file/UyRTxOVJvoMyjlcr70eH66

1. [] Подготовить JSON набор данных, чтобы удобно было проверять работу (17+ товаров должно быть в стартовом наборе)

- Url картинки
- название
- тип размера (вес/объем)
- размер
- штрихкод
- производитель
- Бренд
- описание
- цена

2. [] Подготовить страницу Каталога товаров (список товаров)

2.0. [] Здесь и в других местах верстку обеспечиваем в том числе адаптивную
2.1. [] Шапка и подвал также должны быть сверстаны (но функциональный там только блок с корзиной)
2.2. [] Сортировку делаем (4 варианта - по цене и по названию, по убыванию и возрастанию)
2.3. [] Переключение способа карточек (рядом с сортировкой не делаем - можно даже не верстать)

2.4. [] Фильтр уход за телом/ Уход за руками - делаем.
2.4.1. [] Чтобы нормально тестировать, в карточке товара добавляем поле "тип ухода". Один товар может         подходить к нескольким типам (например, одновременно уход за руками и уход за лицом)

2.5. В фильтре слева Достаточно оставить только:
- [] фильтр по цене
- [] по производителю (поиск, чекбоксы, показать все - поле поиск здесь фильтрует самих производителей)
- [] Уход за телом (здесь пункты продублировать те же, что и в перечне над каталогом товаров (Уход за телом, уход за руками, уход за ногами...)) - нажали сверху, выбралось и слева и наоборот.
- [] остальное из левого столбца не надо

2.6. [] Кнопки постраничного перехода
2.7. [] Нажав на название можно перейти на карточку товара

3. Страница карточки товара.
- [] хлебные крошки пишем упрощенные (Главная - Каталог - Название товара)
- [] картинка
- [] блок справа (данные подставляются из JSON/ Local Stroage). Если данных не (Например, "в наличии"), то делаем просто статической версткой
  -- [] поделиться и прайс-лист не активны
  -- [] в корзину и +/- активно .
- [] Похожие товары НЕ ДЕЛАЕМ
- [] Недавно просмотренные НЕ ДЕЛАЕМ

4. [] Корзина.
4.1. [] Блок в шапке обновляется при действиях пользователя
4.2. [] На странице корзины кнопки активны. +/-, удалить из корзины

5. [] В корзине после кнопки "оформить заказ" сразу отображаем "Спасибо за заказ" и очищаем корзину.

6. [] Предусмотреть микроадминку по управлению списком товаров.
- [] редактировать, добавлять, удалять товары. Сохранять это в localStorage. Если список пуст (админ все удалил или с самого старта), то наполнение из json(см п 1)
- [] отдельная возможность работать со списком типов ухода. При добавлении/редактировании тип ухода из выпадающего списка. Типов ухода должна быть возможность задать несколько. Какой именно способ ля этого выбрать - [] на выше усмотрение.

7. [] Загрузить на githubPages
8. [] Каждый товар должен открываться по своему url (можно использовать штрихкод в адресации, например)

ДОПОЛНИТЕЛЬНО.Выделение выбранного в фильтрах, изменения после нажатия на кнопку "в корзину" и прочие эффекты, если в макете не прорисовано делайте просто на свое усмотрение.
