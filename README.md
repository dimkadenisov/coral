# Сайт интернет магазина посуды

Состояние правок от Саши:

Общее.

1. :white_check_mark: Надо будет обсудить политику использования тега picture.
2. :white_check_mark: "Компания «Коралл» — 24 года..." на главной с новыми иконками ломает мне вестибулярный аппарат. Может быть там выравнивание немного другое стоит сделать. А может и нет, обсудим.

**//по поводу верхних пунктов поговорим в пятницу. Я приеду.**

Главная страница.

1)Десктоп.

1. :white_check_mark: В кнопка "Читать еще" в хроме перенесся текст.
2. :white_check_mark: В ИЕ11 баг со слайдерами все еще присутствует (до ресайза который).
3. :white_check_mark: В карточках товаров наверное лучше сделать, чтобы текст под названием (керамика и код) всегда на одном уровне были.
4. :white_check_mark: В карточках товаров звездочки мелковато получились. В макете крупней они.
5. :white_check_mark: "Подпишись и получай информацию о всех новинках и акциях!" - зря через offset подогнал вправо текст. Надо через text-align. Ибо если текст поменяется, будет фигня.
6. :question: Если кликнуть на пункт меню из гамбургера (не переход с одного уровня меню на другой), то все странно ломается... **//там ничего не ломается. Просто href="#", надо подстваить адрес, и все будет работать.**

2)Планшет.

1. :question: При клике на ссылку в меню переход не происходит вообще. Может связано с глюком на десктопе? **// та же история, если втавить адрес и убрать #, все будет ок.**
2. :white_check_mark: Слайдер с датами несколько не макетно сделан. По макету расстояние между датами больше и стрелка правая выровнена по правому краю. Посмотри внимательно макет.
3. :white_check_mark: В слайдерах товаров при свайпе в эмуляции не отрабатывает пагинация. Надо будет на реальных устройствах проверить этот момент. **//Проверил. Все работает.**
4. :white_check_mark: У блока новых поступлений и новостей слишком огромные отступы. Актуально и для 560, и для смартфона.
5. :white_check_mark: Кнопка "Оставить заявку" не по центру.

3)560.

1. :white_check_mark: Слайдер с датами.
2. :white_check_mark: Кнопка "Оставить заявку" не по центру.

4)Смартфон.

1. :white_check_mark: Слайдер с датами.
2. :white_check_mark: Кнопка "Оставить заявку" должна быть на всю ширину или по центру.

Статья.

1. :white_check_mark: Кружки у списков худые получились. Надо на пиксель внутрь их утолщить. Визуально они не должны от цифр по толщине отличаться. И чуть выше у нумерованного списка они должны быть.
2. :white_check_mark: Звездочки мелковаты.
3. :white_check_mark: На 992 - 1199 в правом блоке проблемы с отступами
4. :white_check_mark: На айпаде гигантский отступ до блока "Читайте также" и заголовок у него не по макету мелкий.
5. :white_check_mark: Иконка цитаты где то потерялась.
6. :white_check_mark: Свайперов для фоток 2? Надо бы в один все паковать. И на смартфоне пагинация по макету есть у него. **//Там один свайпер. Просто генерируется функцией generateSwipers. Я тестировал как это будет работать.**

Каталог. Плитка.

1. :white_check_mark: Ивент на переключение отображений не нужон. Кнопки переключения крупнее в макете. Выравнивание у кнопки по краю изображения, а не ховера. Думаю надо выровнять.
2. :white_check_mark: По карточкам товаров - актуально, что для главной писал. Оно по идее само поправится. Элемент то один и тот же...
3. :white_check_mark: Фильтра тут нету. Кнопку "фильтр" надо убрать.
4. :white_check_mark: На смартфоне надо выровнять по макету селекты сортировок. И верхний селект неплохо бы тянуть на всю ширину оставшуюся.
5. :white_check_mark: На смартфоне в блоке "Вы смотрели" пагинация быть должна.

Каталог. Таблица??

1. :white_check_mark: Сортировки, переключалки вида - смотри выше.
2. :white_check_mark: Звездочки... ну ты понял.
3. :white_check_mark: Пагинация в слайдере на смартфоне.
4. :white_check_mark: Код товара в карточке вертикально выровнен не верно.

Каталог. Раздел.

1. :white_check_mark: Сортировки, переключалки вида - смотри выше. Только в этот раз фильтр есть.
2. :white_check_mark: Фильтр. Слишком крупные названия полей. Стрелка закрытая пускай вправо смотрит и по вертикали по точней надо ее выровнять.
3. :question: В хроме кнопки не вмещаются на одну строку и переносятся. **//Если речь идет о 1199-992, то они не только в хроме в столбик**
4. :white_check_mark: Отступы между чекбоксами должны быть больше.
5. :white_check_mark: Начальную и конечную цены надо показать в инпутах плейсхолдерами (цвет как в макете, в фаерфоксе не забудь переопределить опасити).
6. :white_check_mark: Дефис между инпутами сделай как в макете.
7. :white_check_mark: В ИЕ11 кнопки в фильтре проверь.
8. :white_check_mark Таскалки цены градиентами рендерятся хреново. Переверстай через бордеры с псевдоэлементами. **//переверстал, но без псведоэлементов. Через box-shadow и border. Посмотри, норм? (у меня и раньше норм было.)**
9. :white_check_mark: Не вижу на смартфоне кнопки фильтра.
10. :white_check_mark: Пагинация в слайдере на смартфоне.

Быстрый просмотр.

1. :white_check_mark: Звездочки...
2. :white_check_mark: В ИЕ11 слайдер не отображается.
