const button = document.querySelector('.button');
const phrase = document.querySelector('.phrase');
const joke = document.querySelector('.joke');

const jokeArr = [
    { text: 'Я люблю петь, но моей девушке это не нравится. Как и то, что я всегда пишу имена с маленькой буквы.'},
    { text: 'Жили-были два медведя. Один из них думал, что сосет зимой лапу, а другой, нагло этим пользовался.'},
    { text: 'Встречаются как-то два анимешника, и один другому говорит: — Я с аниме завязал — Да у тебя просто мужика нормального не было'},
    { text: 'На земле вымерли все натуралы, Но онлайн в доте не изменился'},
    { text: 'Директору госпредприятия подарили курочку, которая несёт золотые яйца. Через месяц курочка стала убыточной'},
    { text: 'Пришëл как-то осëл ко льву, и спросил: — Слушай, а почему это ты царь зверей, а не я? — Потому что я тебя заебашить могу и сожрать нахуй. — А.'},
    { text: '— Скажите, как вступить в Ку-клукс-клан? — Это просто. Нужно замочить 3-х негров и одного кота. — А кота-то за что? — Поздравляю, вы приняты!'},
    { text: 'Отец с матерью и сынком ходят по новой квартире. Отец мечтательно: — Сюда диван поставим, здесь стол будет, сюда картину повесим. Сын: — А здесь полку захуячим. Отец ебнул сыну подзатыльник: — Ты хоть понял, за что? — Понял... — Ну, за что? — Да нахуй здесь нам полка не всралась.'},
    { text: 'Как называется человек, не чистящий свой ПК? -Киберпанк'},
    { text: 'Штирлиц отстреливался от врагов без конца. Конец ему уже отстрелили.'},
    { text: 'На что мастурбирует гей-анорексик? На худой конец.'},
    { text: 'Посадил дед репку, а репа потом вышла по УДО и убила деда.'},
    { text: 'Почему Нолик из фиксиков голубой? Потому что ноль не натурально число'},
    { text: 'Заходит как-то пациент к врачу -Доктор у меня хуй чешется -Мой чаще -Нет мой'},
    { text: 'В какую игру любят играть хохлы? Салочки'},
    { text: 'Как чернокожая женщина борется с преступностью? Делает аборт'},
    { text: 'В дверь постучали два раза «Гендеры!» - подумал Штирлиц'},
    { text: 'От чего умер еврей? -Его клетки не хотели делиться!'},
    { text: 'Феминистки ходят налево а всё, потому что у них нет права'},
    { text: 'Что делают африканцы, чтобы не умереть от СПИДа? Умирают от голода'},
    { text: 'Играли как то немец и еврей в прятки Еврей хорошо спрятался, но немец все равно его спалил'},
    { text: 'Что общего между педофилом и диабетиком? Хочется Алёнку, но нельзя'},
    { text: 'Почему в Африке так много болезней?ПОТОМУ ЧТО ТАБЛЕТКИ ЗАПИВАТЬ НЕЧЕМ!!!'},
    { text: 'Идут по пустыне 100 негров. Встретили лампу с джинном, первый угорая со смеху загадал, чтоб все стали хохлами. А остальных джинн спросить забыл.'},
    { text: 'Моя девушка попросила меня сбрить бороду, ибо колится Я сбрил, но она не перестала колоться и умерла нахуй'},
    { text: 'Знаете почему феминистки ненавидят геометрию? Доказать ничего не могут'},
    { text: 'Еврейский клуб в Германии, - "заходи на огонёк"'},
    { text: 'Что делает австрийский дрессировщик рептилий? -Гоняет крокодила по Вене'},
    { text: 'Знаете сколько феминисток надо, чтобы поменять лампочку ? -Нисколько, ведь феминистки не могут ничего поменять )'},
    { text: 'Как заставить маленькую девочку плакать дважды? Вытереть член об её плюшевого медведя'},
    { text: 'Как чёрная женщина понимает, что беременна? -Когда она достаёт тампон, с него собран весь хлопок'},
    { text: 'Девушка по имени Полина любит только групповой секс, потому что - один в Поле не воин.'},
    { text: 'Чем отличается еврей от пиццы? -Пицца не кричит по дороге в печь'},
    { text: 'Приходит гномик в магазин и обращается к продавщице: - Взвесьте, пожалуйста, 5 грамм сыра. Продавщица, ехидно так:- А не обожрёшься? -будешь хамить - попрошу нарезать!!!'},
    { text: 'Доця,ти козу доiла? -Доiдаю.'},
    { text: 'Ты коренная москвичка? -нехай це буде мій секрет))'},
    { text: 'На призывной медкомиссии: Вы всегда заикаетесь?- Н-н-нет, т-т-только к-к-когда г-г-говорю.'},
    { text: 'Сначала я шкаф-купе, но когда мне понадобились деньги — пришлось шкаф проде('},
    { text: '- Мне, пожалуйста, пол арбуза. - Это самец'},
    { text: 'Два цыгана общаются в метро: — А ты видел, какие у мужика, который стоял рядом с нами, часы? — Не, покажи!'},
    { text: 'Пришёл педофил в католическую церковь исповедоваться,А его на работу взяли '},
    { text: '— Почему в Румынии умерли все лебеди? — Цыгане быстрее доплывают до хлеба'},
    { text: 'Секс подобен шахматам: 1. Нужно практиковаться, чтобы стать лучше. 2. Нужно реагировать на каждое движение партнёра. 3. Твоя первая игра была с дедушкой.'},
    { text: 'Все вроде бы в Германии хорошо, но вот утром проснешься — а в городе немцы'},
    { text: 'Я довольно разносторонний человек. Я люблю русский рок и мыться.'},
    { text: 'Пришел педофил в католическую церковь исповедоваться, а его на работу приняли'},
    { text: 'Идут как-то два басиста по улице, один в кепке, а другого тоже не слышно'},
    { text: 'Идут как-то два гея по Чернобылю. Один активный,другой радиоактивный.'},
    { text: 'Идут как-то два хохла. Один молчит,а другого спросить забыли'},
    { text: 'Водка была настолько палёная, что состав напечатали сразу шрифтом Брайля.'},
    { text: 'Муж грибник - споры в семье'},
    { text: 'Американские моряки на подводной лодке долго думали,как они взорвали русский корабль торпедой,хотя точно были уверены,что она шла мимо'},
    { text: 'Парень с повязкой на глазу стоит. У него спрашивают «что ты выбрал ?» Он говорит «а по мне не видно?» В ответ «ну ,да извини» И он говорит «это ещё ничего, хочешь расскажу как меня попугай глаза лишил?)»'},
    { text: 'Когда у меня умерла жена,я не сразу заметил. Секс был прежним,но начала копиться грязная посуда'},
    { text: 'Как назвать тупой Искусственный Интеллект? ЫЫ'},
    { text: 'Женщина как макаронина, Пока не мокрая-ломается'},
    //{ text: ''},
    { text: 'Беременные лошади бегают быстрее,потому что у них больше лошадиных сил'}
  ];

  function getRandomElement(arr) {
    let randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
  }


  button.addEventListener('click', function () {
    phrase.textContent = getRandomElement(jokeArr).text;
});
