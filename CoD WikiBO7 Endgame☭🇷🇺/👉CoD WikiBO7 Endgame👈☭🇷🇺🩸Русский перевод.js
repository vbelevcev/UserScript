// ==UserScript==
// @icon https://favicon.yandex.ru/favicon/callofduty.fandom.com
// @name         👉CoD WikiBO7 Endgame👈☭🇷🇺🩸Русский перевод
// @namespace    https://callofduty.fandom.com/wiki/Endgame_(Black_Ops_7)
// @version      14.8.2026
// @description  Русская локализация для режима Финала с сайта CoD Wiki Endgame Black Ops 7 Endgame.🩸Постепенно буду дополнять что неперевено.
// @author       vbelevcev
// @match        https://callofduty.fandom.com/wiki/*
// @match        *://*.antifandom.com/*
// @match        *://*.fandom.com/*
// @match        *://*.fortnite.gg/*
// @match        *://*.wiki.gg/*
// @match        *://*.getindie.wiki/*
// @match        *://*.breezewiki.com/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

/*
https://callofduty.fandom.com/wiki/Endgame_(Black_Ops_7)*
https://callofduty.fandom.com/wiki/*
*://*.fandom.com/*
https://greasyfork.org/ru/scripts/514360-antifandom-redirect
https://greasyfork.org/ru/scripts/531161-antifandom-alternative-wiki-redirector
https://getindie.wiki/
https://breezewiki.com/
https://gitdab.com/cadence/breezewiki
https://chromewebstore.google.com/detail/indie-wiki-buddy/fkagelmloambgokoeokbpihmgpkbgbfm
https://getindie.wiki/

*/

(function () {
'use strict';
// https://callofduty.fandom.com/ru/wiki
const translations = {
// Описание
"Overview": "Обзор",
"The subject of this article appears in": "Тема этой статьи появляется в",
"This article was previously featured": "Ранее эта статья была представлена",

"The final proving ground": "Последний испытательный полигон",
"Survive, adapt, and uncover what's really at stake": "Выживай, выясняй, что на самом деле поставлено на карту",

"Mission Briefing": "Брифинг по миссии",

"In Endgame, players explore Avalon with complete freedom while utilizing custom loadouts and abilities that they unlock as they progress.": "В режиме Endgame игроки исследуют Авалон с полной свободой, используя кастомные снаряжения и способности, которые открываются по мере прохождения🩸",
"Players can play Endgame with any of their ": "Игроки могут играть в Endgame с любым из своих ",
"Operators.": "Операторов.",
"There are no player-versus-player encounters in Endgame, all players work together": "В Endgame нет PVP столкновений игроков против игроков, все игроки работают в команде вместе🩸",

"For other uses, see": "О других значениях см.",
"Endgame (disambiguation)": "Endgame (значения)",
" is both a campaign mission and new game mode featured in": " - это одновременно и миссии кампании, и новый игровой режим, представленный в",

"It serves as a large-scale, replayable, co-operative ": "Это крупномасштабная кооперативная игра ",
"Player vs. Environment": "Игрок против окружения",
"game mode as well as an ": "Игровой режим ",
"evolving epilogue": "Эпилог",
"and final level to the Campaign itself": "и заключительный уровень самой кампании",

"Endgame features 24 Players completing objectives across the entirety of": "В Endgame 24 игрока, выполняющих задания на протяжении всей кампании",
"The mode was originally unlocked by completing the main missions of the Campaign, but became available to everyone regardless of campaign progress on November 21st, 2025": "Изначально режим открывался только после прохождения миссий Кампании, но 21 ноября 2025 года стал доступен для всех, независимо проходил ты компанию или нет",
"The mode later became free-to-play through ": "Этот режим стал бесплатным в ",
" on April 2nd, 2026": " 2 апреля 2026 года",
" with the release of ": " с выходом ",
"Endgame is inspired by Extraction Shooters and has shared DNA with ": "Endgame вдохновлен экстракшен шутерами с выносом оружия и имеет общие черты с ",
"mode, where players can extract weapons, equipment, and more to carry into their next run": "режимом, в котором игроки могут выносить оружие, снаряжение и многое другое, чтобы использовать их в следующем раунде",
"However, if they are eliminated, everything is reset,": "Однако, если они умирают, все сбрасывается,",
" including their Operators Combat Rating": " включая боевой рейтинг их операторов",
"Elements from Campaign, Multiplayer, and Zombies are all present in Endgame": "",
"Global Progression is available in ": "Глобальная прогрессия доступна в ",
"as it is in all": "во всех режимах",
"modes.": ".",
"Players can earn XP, level up their weapons, unlock Weapon Camos, and complete Challenges in Endgame, and then use those rewards in any other mode": "Игроки могут зарабатывать опыт, повышать уровень своего оружия, разблокировать камуфляж и выполнять задания в Endgame, а затем использовать эти награды в любом другом режиме",
"Endgame receives additional content post-launch, which began with the ": "Endgame получает дополнительный контент после запуска, который начался с ",
"update.": "обновлении.",


// Геймплей
" is meant to be played repeatedly, with players progressing an Operator each time they drop in and extract successfully": " предназначен для многократного прохождения, при этом игроки повышают уровень оператора каждый раз, когда они успешно заходят в игру и выносят оружие",
"Prior to launching the game, players may customize their loadout with a primary weapon, equipment, and a salvaged weapon from a previous run": "Перед запуском игры игроки могут настроить свое снаряжение, включив в него основное оружие, экипировку и оружие, найденное в предыдущем раунде",
"When a match of Endgame begins, players are dropped straight into the skies of": "Когда начинается матч, игроки попадают прямо в небеса",
" and must use their ": "а и должны использовать свой ",

" to descend to safely to the ground": ", чтобы безопасно спуститься на землю",
"Players are dropped into the Zone they're most readily leveled for, but they may fly or travel by foot or vehicle to any part of the map they choose": "Игроки попадают в зону, в которой им легче всего прокачиваться, исходя из боевого рейтинга, они могут лететь самолетом, передвигаться пешком или на автомобиле в любую часть карты по своему выбору",
"Players may make use of both the Tac Map or the C-Link overhead display to spot a variety of Assignments and Activities around the map": "Игроки могут использовать как карту Tac, так и дисплей C-Link, чтобы отслеживать различные задания и действия на карте",
"Players then choose assignments, activities, and events to complete, face off with enemies, and help other players and squads survive in the Endgame": "Затем игроки выбирают задания, действия и события для выполнения, сражаются лицом к лицу с врагами и помогают другим игрокам и отрядам выжить в Endgame",
"As previously mentioned, ": "Как упоминалось ранее, ",
" is divided into four different tiered zones, with each tier being harder and advising a higher combat rating than the last": " разделен на 4 различных зоны, каждая из которых сложнее предыдущей и дает более высокий боевой рейтинг",
"The difficulty of the various Activities and Assignments is determined by the zone they are found in": "Сложность различных видов деятельности и заданий определяется зоной, в которой они находятся",
"Gameplay": "Геймплей",



// Цель игры
" are divided up into three categories, Activities, Assignments, and World Events": " делятся на три категории: Активности, Задания и Мировые события",
" are divided up into three categories,": " делятся на три категории:",

// " and ": " и ",
// " in ": " в ",

"Activities are objectives that start when the player approaches their location,": "🩸Активности🩸это цели, которые начинаются, когда игрок приближается к локации",
"and are usually the fastest и the least rewarding": "и обычно они самые быстрые и наименее выгодные",

"Assignments are missions players pick up in the world, similarly to ": "🩸Задания🩸это миссии, которые игроки берут в игре, подобно ",
", and are usually multi step quests that take more time but provide higher rewards": ", и обычно это многоступенчатые задания, которые занимают больше времени, но приносят больше наград",
"Contracts": "Контрактам",

"World Events take place once per match at a certain area of the map, and are typically large scale, high difficulty encounters that require multiple players to participate in in order to complete": "🩸Мировые события🩸проводятся один раз за матч в определенной области карты и, как правило, представляют собой крупномасштабные сражения высокой сложности, в которых для прохождения требуется участие нескольких игроков",
"World Events typically reward players with particularly high tier loot": "За участие в мировых событиях игроки обычно получают особо крупную добычу",
"All three kinds of objectives have loot that scales in value depending on the Zone they are completed in": "Все три вида заданий содержат добычу, стоимость которой варьируется в зависимости от зоны, в которой они выполнены",

// "in Warzone": "В Варзон",

// Список активностей
"List of Activities": "Список активностей",

"Eliminate the Target Officer.": "👉Ликвидируйте указанного офицера гильдии👈",
"Prime Target": "👉Главная цель👈",

"Clear the Guild Command Center": "👉Ликвидируйте начальника командного центра, чтобы получить доступ к перепрошивке оружия👈",
"Command Center": "👉Командный центр👈",

"Secure the content of a shipping container": "👉Захватите содержимое грузового контейнера👈",
"Surprise Shipment": "👉Неожиданный груз👈",

"Grid Takedown": "👉Отключение сети👈",
"Override Guild charge stations to cause them to overheat and explode": "👉Взломайте зарядные станции Гильдии, чтобы они перегрелись и взорвались👈",

"Guild Checkpoint": "👉Блокпост Гильдии👈",
"Clear out the Guild checkpoint to access equipment and a chance to call in a supply drop": "👉Зачистите блокпост Гильдии, чтобы получить снаряжение и шанс вызвать ящик снабжения👈",

"Surveillance Control": "👉Контроль наблюдениям👈",
"Locate and destroy Guild Surveillance drones": "👉Найдите и уничтожьте наблюдательный дрон Гильдии👈",

"Strongbox Crack": "👉Взлом сейфа👈",
"Break into a Guild strongbox and claim its contents": "👉Взломайте сейф Гильдии и заберите его содержимое👈",

"Toxin Chase": "👉Погоня за токсином👈",
"Catch the butterflies": "👉Поймайте бабочек👈",

"Quad-Core Site": "👉Зона распыления👈",
"Destroy the Quad-Core from venting toxins into the atmosphere": "👉Уничтожьте шагоход, выпускающий токсины в атмосферу👈",

"Cargo Intercept": "👉Перехват груза👈",
"Commandeer the targeted Guild vehicle and deliver it safely to the drop-off": "👉Захватите указанный транспорт Гильдии и благополучно доставьте его в нужную точку👈",

"Disable the Guild Convoy": "👉Останавливайте или уничтожайте колонны Гильдии,чтобы получить шанс захватить лёгкий внедорожник👈",
"Convoy": "👉Колонна👈",

"Data Collection": "👉Сбор данных👈",
"Defend the Objective Site to collect the Guild Intel": "👉Передайте данные с разбившегося БПЛА Гильдии, отражая атаки противников. Падает с неба, когда приближаешься к локации👈",

"Gear Drop": "👉Поставка снаряжения👈",
"Collect the recently dropped Guild gear": "👉Ящик снабжения🩸Найдите и заберите содержимое ящика снабжения Гильдии👈",

"Roadside Salvage": "👉Помощь на дороге👈",
"Open a Guild Supply Cache near a vehicle close to detonation": "👉Захватите припасы Гильдии, пока транспорт не взорвётся👈",

"Toxin Field": "👉Карантинная зона👈",
"Destroy Cradle ventilation systems, appearing as spores, within a quarantined location": "👉Ликвидируйте кошмар в коммандном центре, чтобы получить доступ к сейфу Гильдии👈",

"VTOL Hunt": "👉Охота на СВВП👈",
"Shoot down the Guild VTOL": "👉Сбейте транспортный СВВП Гильдии, пока он не покинул район👈",

"Neutralise the ": "👉Нейтрализуйте ",

"Cradle Boss": "Босс Колыбели",


// Задания
"List of Assignments": "Список заданий",
"D.A.W.G. Escort": "🩸Сопровождение Робопса🩸",
"Escort the D.A.W.G. to the Extraction Site": "Доставьте робопса в точку эвакуации",

"Evidence Collection": "🩸Сбор улик🩸",
"Locate and defend the Guild Intel": "Сбейте СВВП Гильдии, чтобы получить важные данные",

"HVT Elimination": "🩸Ликвидация особо важной цели🩸",
"Locate and kill the HVT": "Найдите и уничтожьте указанного командира Гильдии",

"Mystery Cargo": "🩸Загадочный груз🩸",
"Locate and Secure the contents of a shipping container": "Взломайте контейнер Гильдии и узнайте, что там",

"Supply Disruption": "🩸Нарушение поставок🩸",
"Locate and Disrupt the Guild supply chain": "Нарушьте цепочку поставок Гильдии",

// "World Events": "Мировые события",
"List of World Events": "Список мировых событий",
"Wraith Wing": "🩸Призрачное крыло🩸",
"Destroy the Advanced Guild VTOL": "🩸Победите Призрачное крыло🩸",

"Colossus of Avalon": "🩸Колосс Авалона🩸",
"Destroy the ": "Призовите и саботируйте ",
"Guild Colossus": "Колосс",

"Toxic Tyrant": "🩸Ядовитый тиран🩸",
"Kill the ": "Ликвидируйте",


"Deathclaw Hunt": "🩸Охота на Когтей Смерти🩸",
"limited time mode": "ограниченное время",
"Eliminate the Irradiated": "Уничтожить облучённых",
"Deathclaws": "Когтей смерти",

//
"The ultimate objective of any run is to kill ": "Конечная цель любого забега - убить ",
"Gideon Falkner": "Доктор Фолклер",
" located on an island facility within the Tier IV zone": " который находится в зоне IV на острове",
"Doing so will reward the player greatly, including with an ": "За победу, если игрок выберет их в качестве оперативника, дадут скинам No Fear для операторов 👉Мейсон👉Сэмюэлс👉Андерсон👉Вэй Линь👉Вермаак👉Завери👉Хурадо👉Гримм👉Фалькнер👉Бритва👉Эмма Кейган👉50/50👈, а также за победу наградят ",

// Разлом сбоя

"Glitch Fractures are unique activities that take place off the Avalon map": "Разломы сбоя - это уникальное событие, которое происходят за пределами карты Авалона",
"Following the elimination of a Guild Strike Boss the location of a Glitch Fracture will become highlighted on players maps": "После устранения босса Гильдии, местоположение входа в Разлома сбоя будет выделено на карте для игрока",
"Interacting with it will transport the player and all squad members into the activity": "Взаимодействие с ним, перенесёт игрока и всех членов отряда в разлом",

"Glitch Fractures utilize spaces from the main campaign to challenge players with multiple objectives in a row of escalating difficulty": "Разлом сбоя использует места из основной кампании, чтобы бросить вызов игрокам с несколькими заданиями с возрастающей сложностью",
"If players complete the Glitch Fracture,": "Если игроки завершат прохождение Разлом сбоя,",
" they immediately exfil and are rewarded with a ": " они завершат бой и выйдут из игры и получат в награду ",
"Once revealed, Glitch Fractures remain on the map and can be replayed indefinitely": "После прохождения, метка Разлом сбоя остаётся на карте бесконечно",

"List of Glitch Fractures": "Список разломов сбоя",
"Glitch Fractures": "Разлом сбоя",
"Root Crasher": "Крушитель корней👉с2👈🩸Босс динозаврик Рекс🩸Разлом находится в локации F7👉За прохождение разлома одним из этих операторов👉Андерсон👉Вермаак👉Вэй Лин👉Карма👈дадут скин Файервол🩸Firewall для этого оператора",

"Link Forger": "Кователь связей 👉Акт I Операция «Ядовитая пилюля»️☢️Operation Poison Pill👉с3👈🩸Босс Робот G-45🩸Разлом находится в локации G8👉За прохождение разлома одним из этих операторов👉Андерсон👉Гримм👉Мейсон👈дадут скин Перехват🩸 для этого оператора",

"Virus Injection": "Инъекция вируса👉Акт II Операция «Разбитое зеркало»️☢️Operation Broken Mirror👉с3п👈🩸Босс Оскар🩸Разлом находится в локации I7 Колизей👉За прохождение разлома одним из этих операторов👉Вермаак👉Завери👉Хурадо️👈дадут скин Афтершок🩸Aftershok для этого оператора ",

"Command Killer": "Убийца Командования👉Акт III Операция «Сокрушитель стен»️☢️👉с4👈🩸Босс Мишка Зурсу🩸Разлом находится в локации👉За прохождение разлома одним из этих операторов 👉50/50👉Бритва👉Фолкнер👈дадут скин Осколочный шок🩸Shatter Shock для этого оператора ",

// Выход
"Before the match timer runs out, Operators must seek out a friendly ": "Прежде чем истечет время матча, игроки должны найти подходящий самолет для посадки на СВВП ",
"VTOL exfil": "Посадка для самолёта",
"Like in DMZ or ": "Как в режиме DMZ или ",
" players travel to a pick-up zone, clear the landing area, and get out": " игроки направляются в зону приземления самолёта, зачищают зону приземления от врагов и выходят",
"A successful exfil allows players to keep their current Loadout and Combat Rating": "Успешная эвакуация позволяет игрокам сохранить текущее снаряжение и боевой рейтинг",
"When the match timer runs out, any Operators who haven't extracted will have the Cradle instantly flood their screen and have their health constantly slowly drain to zero, and all extraction points will disable (though a still occurring exfil process will keep going)": "Когда таймер матча истечет, у всех операторов, которые еще не вышли, экран мгновенно заполнится, и их здоровье будет постоянно медленно снижаться до нуля, а все точки эвакуации будут отключены (хотя все еще продолжающийся процесс эвакуации будет продолжаться",
"The match ends when all operators are no longer active (either by extracting or dying) in the AO": "Матч закончится, когда все точки будут извлечены. операторы больше не активны (либо из-за извлечения, либо из-за смерти) в АО",
"Exfil": "Эвакуация",


// Транспорт
"Endgame currently features five main vehicles helping players traveling around the map": "В настоящее время в режиме Endgame доступно 5 основных транспортных средств, помогающих игрокам перемещаться по карте",
"Vehicles can be found at different spots on Avalon, ": "Транспортные средства можно найти в разных местах Авалона, ",
"and are also part of some Activities and Assignments": "а также они используются в некоторых событиях и заданиях",
"A sixth vehicle, the Gunboat, was originally available but was removed on November 20th, 2025 because of performance issues": "🩸Шестая машина👉Лодка с вооружением, первоначально была доступна, но 20 ноября 2025 года была удалена из-за проблем с производительностью",
"Flat Body": "Безбортовая платформа",
"Flat Bed": "Безбортовая платформа",
"Cargo Area": "Грузовой отсек",
"LTV": "Лёгкий внедорожник",
"Tactical Raft": "Тактическая лодка",
"Cargo Truck": "Грузовик",
"Driver": "Водитель",
"Passengers": "Пассажира",
"Passenger": "Пассажир",
"(With Machine Gun)": " (С турелью)",
"(removed)": "(удалено)",
"Vehicles": "Транспорт",
"2 Gunners": "2 Стрелка",
"Gunboat": "Лодка с вооружением",



// Боевой рейтинг
"The Combat Rating is a leveling system using a progression unit called Power": "Боевой рейтинг — это система прокачки, использующая единицу прогрессии, повышающая силу вашего персонажа",
"Power is earned by completing Activities, Assignments, and World Events as well as eliminating enemies": "Силу можно получить, выполняя задания и участвуя в мировых событиях, а также уничтожая врагов",
"Each Operator has its own Combat Rating": "Каждый оператор имеет свой собственный боевой рейтинг",
"The default highest Combat Rating is CR 60, it is divided into three categories: 48 levels across three Skill Tracks, 9 levels between three Core Power upgrades, and 3 levels for Damage upgrades": "Наивысший боевой рейтинг по умолчанию равен CR 60, он разделен на три категории: 48 уровней по трем направлениям навыков, 9 уровней между тремя основными улучшениями силы и 3 уровня для улучшения урона",
"Additionally, following the introduction of the Exotic and Nightmare Skill Tracks, players can level the Combat Rating of an Operator up to CR 66": "После получения Экзотического и Кошмарного навыков игроки повышат боевой рейтинг оператора до CR 66",
"However, obtaining an Exotic or a Nightmare Skill before reaching CR 60 will offset the natural progression of unlocks": "Получение Зкзотического или Кошмарного навыка до достижения CR 60 компенсирует естественный прогресс разблокировки",
"First Starting Skill Track": "Первый выбор навыка",
"Second Starting Skill Track": "Второй выбор навыка",
"Third Starting Skill Track": "Третий выбор навыка",

"Skill Track Choices": "Выбор направления навыков",
"Core Power Upgrade": "Улучшение здоровья🩸Увеличение бронепластин",
"Combat Rating": "Боевой рейтинг",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",


"": "👉Улучшение экзотической способности 👉👈",

// Главная способность
"Major Abilities": "Главная способность",
"Crash Cart": "Реаниматор",
"Instantly revive downed squadmates within range, and provide temporary invulnerability for a short time. Can be used to self-revive when downed.": "Мгновенно реанимирует тяжело раненных союзников в пределах досегаемости и обеспечивает временную неуязвимость на короткое время. Можно использовать для самореанимации при тяжёлом ранении",
//
"Full Restock": "Максимальное пополнение",
"Restores ammo, armor, and equipment": "Восстановление боеприпасов, брони и снаряжения",
"Jumbo Battery": "Супербатарея",
"Invulnerability lasts longer. Revive non-squad allies": "Неуязвимость длиться дольше.Вы можете реанимировать союзников, не входящих в отряд",
// Активный камуфляж
"Active Camo": "Активный камуфляж",
"Become nearly invisible for a short duration. Gunfire temporarily reveals your temporarily.": "На короткое время вы становитесь почти невидимыым. Стрельба временно раскрывает вас.",
//
"Extra Time": "Дополнительное время",
"Melee kills increase camo duration": "",
"Stealth Fire": "Скрытная стрельба",
"Stay invisible when firing your weapon": "Невидимость при стрельба из оружия",
// Баллистический панцирь
"Ballistic Shell": "Баллистический панцирь",
"Deploy an energy shield that blocks incoming enemy fire.": "Разверните энергетический щит,который блокирует огонь противника.",
//
"Shell Revive": "",
"Downed squadmates who enter the Shell are revived": "",
"Stun Shell": "",
"Melee attacks on the Shell can stun the attacker": "",
// Крупнокалиберный пистолет
"Hand Cannon": "Крупнокалиберный пистолет",
"Powerful high damage handgun. Accurate at range.": "Мощный пистолет с высоким уроном. Точен на дальних дистанциях",
//
"Blast Stun": "",
"Bullets can trigger an explosion that stuns target": "",
"High Capacity": "Высокая вместимость",
"Increased ammo count": "Увеличенный боезапас",
// Видеоимпульс
"Vision Pulse": "Видеоимпульс",
"Send out a pulse which visually tags enemies through walls for your squad. Tagged enemies take increased damage.": "Отправьте видеоимпульс, который визуально отмечает врагов сквозь стены для вашего отряда. Отмеченные враги получают увеличенный урон.",
"EMP Kill": "",
"Killing pinged enemies generates an EMP effect": "",
"Marked for Death": "",
"Pinged targets take increased damage": "",
// Машина войны
"War Machine": "Машина войны",
"Powerful single shot grenade launcher. Large explosion radius.": "Мощный однозарядный гранатомёт. Большой радиус поражения.",
//
"Fast Charge": "",
"Reduced charge time": "",
"High Capacity": "Высокая вместимость",
"Increased ammo count": "Увеличенный боезапас",
// Теневой прорыв
"Create an energy warping field that teleports and damages enemies.": "Создайте искажающее энергию поле, которое телепортирует и наносит урон врагам.",
//
"Gravity Well": "Гравитационный колодец",
"Shadow Break pulls enemies into its center": "Теневой прорыв притягивает противников к своему центру",
"Sky Drop": "Воздушный десант",
"Entering Shadow Break will teleport you into the sky": "Войдя в теневой прорыв, вы телепортируетесь в небо",
"Shadow Break": "Теневой прорыв",
// Дрон-станция
"Drone Pod": "Дрон-станция",
"Deployable device that launches aerial drones. Drones seek out enemies and explode.": "Размещаемое устройство, запускающее воздушные дроны,которые ищут врагов и взрываются.",
//
"First Strike": "",
"Drones have a shrapnel effect": "",
"Stun Protocol": "",
"Drones have a chance to stun enemies": "",
// Протокол Часовой
"Sentinel Protocol": "Протокол Часовой",
"Call in an armed Guild robot to fight enemies and assist you and your team. Can revive downed teammates when downed and do a small area of effect attack when swarmed.": "Вызовите вооружённого робота Гильдии,чтобы сражаться с врагами и помогать вам и вашей команде. Может реанимировать тяжелораненных союзников и наносить небольшой урон по области при скоплении врагов.",
//
"Shock Rounds": "Шоковые патроны",
"Guild Bot's weapon has the Deadwire mod": "Вооружение робота Гильдии экзотическим оружием с модификацией выключатель",
"Target Relay": "Ретранслятор цели",
"Guild Bot targets enemies you ping. Improved accuracy": "Отмеченных вами противников атакует робот гилльдии. Точность повышена",
// Тепловой всплеск
"Thermal Spike": "🔥Тепловой всплеск🔥",
"Emit a powerful blast of flames that incinerate enemies. Flames persist in the area for a short duration.": "🔥Выпускает мощный всплеск пламени, который сжигает врагов. 🔥Пламя сохраняется в области на короткое время.🔥Использование: Нажмите в направлении взгляда клавишу способности, чтобы поджечь врагов, оказавшихся на пути огня.",
//
"Molten Aura": "",
"Enemies that touch you are burned": "",
"Shock Blast": "",
"Initial explosion stuns enemies": "",
// Машина смерти
"Death Machine": "Машина смерти",
"Deadly machine gun. High damage per shot and a large magazine capacity": "Смертоносный пулемёт.Высокий урон и большой боезапас",
//
"Critical Return": "Критический возврат",
"Critical kills have a chance of returning ammo": "Критические убийства дают шанс вернуть боеприпасы",
"High Capacity": "",
"Increased ammo count": "",

// Дополнительная способность
"Minor Abilities": "Дополнительная способность",
// Крюк
"Grappling Hook": "Крюк",
"Grapple to surfaces to escape danger and reach new heights.": "Используйте крюк, чтобы цепляться за поверхности, избегать угроз и достигать новых высот.👉Улучшение экзотической способности Акробатика Acrobatic👉Плюс один заряд. Возвращение зарядов, потраченных в воздухе👈",
//
"Acrobatic": "Акробатика",
"Plus one charge. Refund charges used in midair": "Плюс один заряд. Возвращение зарядов, потраченных в воздухе",
"Stun Hook": "Оглушающий крюк",
"Enemies hit are stunned": "Задетые противники оглушаются",
// Портальная граната Призыв портала
"Portal Grenade": "Портальная граната",
"A grenade that spawns creatures to fight for you. They last a short duration.": "Граната, которая призывает существ, сражающихся на вашей стороне. Существа живут недолго.",
//
"Contagious": "Заражение",
"Summoned Fears can infect nearby enemies": "Призванные страхи могут заражать соседних противников",
"Extra Time": "Дополнительное время",
"Summoned Fears last longer": "Призваные страхи остаются дольше",
// Кинетический прыжок
"Kinetic Jump": "Кинетический прыжок",
"Jump to extreme heights. Hold the button to jump higher. Landing stuns nearby enemies.": "Прыгайте экстремально высоко. Удерживайте кнопку, чтобы подпрыгнуть выше. Приземление оглушает ближайших врагов.",
//
"Jump Boost": "Усиление прыжка",
"Jump higher and restore some health": "Большая высота прыжков и частичное восстановление здоровья",
"Quick Charge": "Быстрая зарядка",
"Faster charge time": "Ускоренная перезарядка",
"Also increases the number of charges by 1, from 3 to 4": "Также увеличивается количество зарядов на 1, с 3 до 4",
// Мерцание
"Flicker": "Мерцание",
"Tap to quickly teleport a short distance in your facing direction. Press and hold to pre-aim. Goes through enemies.": "Нажмите, чтобы быстро телепортироваться на небольшое расстояние (не более 50 метров) в направлении взгляда. Нажмите и удерживайте, чтобы прицелиться. Проходит сквозь врагов",
"Auto Reload": "Автоматическая перезарядка",
"Auto-reload a portion of your weapon": "Частичная автоматическая перезарядка оружия",
"Warp Damage": "Урон от телепортации",
"Teleporting at enemies deals damage": "Телепортация в противников наносит урон",
// Связь припасов
"Supply Link": "Связь припасов",
"Instantly supplies you and squad with ammo, armor, equipment and a portion of the Major Ability charge.": "Мгновенно пополняйте запасы боеприпасов, брони, снаряжения и часть заряда главной способности (полевой модификации) у себя и членов отряда.",
//
"Fully Protected": "",
"Auto refill armor plates for you and allies": "",
"Fully Supplied": "Полное снабжение",
"Refill all equipment for you and allies": "Пополнение запасов всего снаряжения для вас и ваших союзников",
// Взломщик
"Black Hat": "Взломщик",
"Hack enemies, equipment, and vehicles. Hacked targets are disabled, destroyed, or converted to fight for you.": "Взламывайте врагов, снаряжение и транспорт. Взломанные цели выводятся из строя, уничтожаются или переходят под ваш контроль.",
//
"Backdoor Protocol": "Протокол обхода",
"Adds powerful attacks against Guild and Fear": "Добавление мощных атак, эффективных против Гильдии и страхов",
"Chargeback": "Возврат средств",
"Successful attacks reduce Major Ability cooldown": "Успешные атаки ускоряют восстановление главной способности",
// Палач
"Blood Burner": "Палач",
"Spawn a mystical motorcycle good for traversal and combat. Running over enemies charges a special area of effect attack.": "Вызовите мистический мотоцикл, подходящий для перемещения и боя. Наезд на врагов заряжает особую атаку, действующую по области.",
"Eliminate 500 Nightmare Zone enemies": "Убейте 500 врагов в кошмарной зоне V",
// 
"Protective Field": "Защитное поле",
"Increased damage reduction while riding": "Дополнительное снижение урона при езде на транспорте",
"Time Charge": "Постепенная зарядка",
"Pulse attack charges via time instead of kills": "Импульсные атаки заряжаются с течением времени,а не от убийств",
// Эфирный клинок
"Aether Blade": "Эфирный клинок",
"Aether infused throwing knife that hunts down targets. Hit 5 with one toss to recover a portion of its charge.": "Метательный нож, напитанный эфиром, который преследует цели. Попадите в 5 целей одним броском, чтобы восстановить часть заряда.",
//
"Extra Charge": "Дополнительный заряд",
"Plus one charge": "Плюс один заряд",
"Stun Bounce": "Оглушающий рикошет",
"Bounces stun enemies": "Рикошеты оглушают противников",
// Психограната
"Psych Grenade": "Психограната",
"Explodes on impact, releasing a lingering cloud of hallucinogenic gas that brainrots enemies": "Взрывается при столкновении с преградой, испуская облако галлюциногенного газа, который сводит врагов с ума",
//
"Charm Offensive": "Наступательное подчинение",
"Charm effect lasts longer. More enemies can be charmed": "Подчинение действует дольше. Вы можете подчинить больше противников",
"Reinforcements": "Подкрепление",
"Chance to spawn stronger ally": "Шанс вызвать более сильного союзника",

// Экзотические способности навыков
"With Season 05, Exotic Upgrades became available for all Abilities. ": "",
"Exotic Upgrades": "Экзотические улучшения",
"These upgrades can primarily be found in Supply Caches within Nightmare Zones or inside Glitch Fractures, but also have a slight chance of appearing within the Supply Caches in Zone III and Zone IV.": "",
"Each Ability has two possible Exotic Upgrades to choose from, but only one can be activated at a time. ": "",
" The upgrades will remain until the Operator is either killed, have their Prestige level increased, or their Combat Rating reset.": "",
"": "",
"": "",


"In Endgame: Earn 30000 Power": "или наберите силу 30 000 в Финале",
"In Endgame:": "или в Финале:",
"Get 500 Critical Kills": "Убейте 500 врагов критическими попаданиями в голову",
"Eliminate 30 Elite enemies": "Убейте 30 элитных противников",

"Complete any 6 Challenges from Week 1 of ": "Завершите 6 испытаний 1 недели в ",
"Complete any 6 Challenges from Week 2 of ": "Завершите 6 испытаний 2 недели в ",
"Complete any 6 Challenges from Week 3 of ": "Завершите 6 испытаний 3 недели в ",
"Complete any 6 Challenges from Week 4 of ": "Завершите 6 испытаний 4 недели в ",
"Complete any 6 Challenges from Week 5 of ": "Завершите 6 испытаний 5 недели в ",
"Complete any 6 Challenges from Week 6 of ": "Завершите 6 испытаний 6 недели в ",
"Complete any 6 Challenges from Week 7 of ": "Завершите 6 испытаний 7 недели в ",
"Complete any 6 Challenges from Week 8 of ": "Завершите 6 испытаний 8 недели в ",
"Complete any 6 Challenges from Week 9 of ": "Завершите 6 испытаний 9 недели в ",

// Ветвь навыков

"Skill Tracks": "Ветвь навыков",
// "Skill": "Навык",
"Exotic (S1)": "Экзотические навыки 👉с1👈",
"Nightmare (S2R)": "Кошмарные навыки 👉с2п👈",
// Стрелок
"Gunner": "Стрелок",
"Master your weapons, reload faster, aim sharper and electrify enemies.": "👉Перезарядка оглушает противников шоком👈 Освойте своё оружие, перезаряжайтесь быстрее, цельтесь точнее и поражайте врагов электричеством.",
"Reload Speed": "Скорость перезарядки",
"Reload Faster": "・ Ускоренная перезарядка оружия",

"Fast Replate": "Быстрая замена бронепластин",
"Replate Armor Faster": "・ Быстрая замена бронепластин",

"Fast Weapon Swap": "Быстрая смена оружия",
"Swap Weapons faster": "・ Ускоренная смена оружия",

"Ammo Auto-Refill": "Автопополнение боезапаса",
"Magazine Ammo slowly fills over time": "・ Боеприпасы в магазине постепенно заполняются со временем",

"Aiming Expert": "Эксперт прицеливания ",
"Improved ADS accuracy and ADS speed when Jumping, Sliding, and Diving": "・ Повышение точности прицеливания, а также скорости прицеливания в прыжке, скольжении и падении.",

"Shocking Reload": "Шоковая перезарядка",
"Reloading causes an electric shock that damages and stuns nearby base enemies (cooldown between uses)": "・ Перезарядка вызывает электрический разряд, который наносит урон и оглушает ближайших базовых противников (требуется время на восстановление между использованиями).",
"": "",

// Хирург
"Surgeon": "Хирург",
"Stay alive and keep others fighting, heal fast, revive quicker, and fight back from the brink": "👉Убийство в коме реанимирует👈 Оставайтесь в живых и поддерживайте других бойцов, быстро лечитесь, быстрее возрождайтесь и сражайтесь до последнего.",
"Health Recovery": "Восстановление здоровья",
"Health recovery starts sooner after you stop taking damage": "・ После прекращения получения урона восстановление здоровья начинается быстрее.",

"Last Stand Fighter": "Боец чести",
"Survive Longer in Last Stand": "👉Больше патронов в пистолете в нокнутом состоянии👈・ Выживайте дольше в последнем рывке.",
"Upgrades Last Stand Pistol and provides more Ammo": "・ Улучшения пистолета на последнем рывке и большее количество боеприпасов.",

"Agile Handling": "Отличная эргономика",
"Fire your Weapon while Sprinting and walk faster while Aiming Down Sights": "・ Возможность стрелять на бегу и ускоренная ходьба при прицеливании.",

"Heal Faster": "Ускоренное лечение",
"Increases healing speed": "・ Увеличение скорости лечения.",

"Fast Revive": "Быстрая реанимация",
"Revive yourself and your Squad faster": "・ Реанимируйте себя и свой отряд быстрее",
"Revives replenish all health and temporarily boost movement speeds": "・ Реанимации восстанавливают всё здоровье и временно увеличивают скорость перемещения.",

"Off The Floor": "Последние силы",
"Revive yourself when you get a Kill in Last Stand (cooldown between uses)": "・ В нокнутом состоянии убиваешь кого-то с пистолета и восстанавливаешься. Самореанимация при убийстве в последнем рывке (требуется время на восстановление между использованиями).",

"Daredevil": "Сорвиголова",
"Fly, slide and dive into chaos, your movement is a weapon and the ground hits back.": "👉Взрыв при падении/скольжении👈 Летайте, скользите и падайте в хаос, ваше движение - это оружие, а земля отвечает ударом.",

"Dive Bomber": "Пикирующий подрывник",
"Diving aggressively to the ground with the Wingsuit triggers a concussive blast": "・ Агрессивное снижение в направлении земли с помощью крылатого костюма вызывает ударную волну.",

"Wingsuit Glider": "Эксперт-Паритель",
"Improves Wingsuit handling and hang time": "・ Улучшение управляемости крылатого костюма и длительности полёта.",

"Thick Skin": "Толстая кожа ",
"Take less damage from Melee attacks": "・ Уменьшение получаемого урона от атак ближнего боя.",

"Super Slider": "Суперскольжение",
"Sliding distance and speed are increased": "・ Увеличение дистанции и скорость скольжения.",

"Reload And Run": "Перезаряжай и беги",
"Reloading temporarily boosts movement speed": "・ Перезарядка временно увеличивает скорость перемещения.",

"Slide Explosions": "Взрывы в скольжении",
"Diving and Sliding triggers an explosion": "・ Падение и скольжение вызывают взрыв.",

// Тактик
"Tactician": "Тактик",
"Gear up and get clever, deploy faster, recharge quicker and turn kills into nasty surprises.": "👉Дрон👈Снаряжайтесь и проявляйте смекалку, быстрее высаживайтесь, быстрее перезаряжайтесь и превращайте убийства в неприятные сюрпризы.",

"Equipment Hound": "Охотник за снаряжением",
"Hold more Equipment": "・ Возможность носить с собой больше снаряжения.",

"Quick Deploy": "Быстрое развёртывание",
"Deploy Equipment faster and further": " ・ Ускореннное применение снаряжение и увеличение его дальности",
"Improved Sprint and Tac Sprint speeds while reloading": "・ Повышение скорости обычного и тактического бега во время перезарядки",

"Hit And Run": "Опасная езда",
"Equipment Kills temporarily boost movement speed": "・ Убийства снаряжением временно повышают скорость перемещения.",

"Recharger": "Перезарядка",
"Recharge Abilities and Equipment faster": "・ Ускоренное восстановление снаряжение и способностей.",

"Quick Rounds Back": "Возврат патронов",
"Rapidly Killing 2 enemies has a chance to return 2 rounds of Ammo": "・ Убив 2 противников подряд, вы получите шанс вернуть 2 патрона",

"Pinata": "Пиньята",
"Killing an enemy has a chance to spawn a live piece of Equipment": "・ Убийство противника даёт шанс вызвать работающий предмет снаряжения.",

// Берсерк
"Berserker": "Берсерк",
"Chain aggression to speed, attack while moving, reap armor for kills and bring destruction from above.": "👉Взрыв при приземлении👈Цепная агрессия для увеличения скорости, атака на ходу, сбор брони для убийств и разрушение с воздуха",

"Fast Weapon Fire": "Быстрая стрельба",
"Increased rate of fire for Weapons": "・ Повышение скорострельности оружия.",

"Kills Regen Armor": "Убийства восстанавливают броню",
"Killing enemies regenerates Armor": "・ Убийство противников восстанавливают броню",
"Fully upgrade to regenerate more Armor when Killing an Elite": "・ На максимальном уровне убийство элитных противников даёт больше брони.",

"Crit Chain Speed Boost": "Убийства при цепочке критических попаданий",
"Rapid Critical Kills temporarily boost your movement speed": "・ Критические убийства подряд временно увеличивают вашу скорость перемещения.",

"Endurance Sprinter": "Выносливый бегун",
"Reload while Tac Sprinting. Tac duration and sprint to fire time improved": " ・ Перезарядка во время тактического бега, увеличение длительности тактического бега и ускорение изготовки после бега.",

"Fall Damage Reduction": "Снижение урона от падения",
"Reduced fall Damage": "・ Снижает урон от падения",
"Fully upgrade for fall damage immunity.": "・ Полное улучшение даёт иммунитет к урону от падения.",

"Fall Explosions": "Взрывы в падении",
"Trigger an explosion when you land": "・ Запускает взрыв при приземлении.",

// Бульдозер
"Bulldozer": "Бульдозер",
"Become a walking tank, regen armor, shrug off explosions and smash through enemies": "👉Ходячий танк/снижает урон от взрывчатки👈 Станьте ходячим танком, восстанавливайте броню, игнорируйте взрывы и сокрушайте врагов.",

"Armor Regen": "Восстановление брони",
"Automatically regenerate 1 Armor Plate": "・ Автоматически восстанавливает 1 бронепластину.",

"Deal more damage with Weapons at Point Blank range": "・ Дополнительный урон при стрельбе в упор.",
"Point Blank": "Выстрел в упор",

"Adrenaline Rush": "Адреналиновый шторм",
"Deal bonus damage while at low health": "・ Увеличение наносимого урона при малом запасе здоровья.",

"Revival Protection": "Защита при возрождении",
"Revived Squadmates temporarily take reduced damage": " ・ Реанимированным союзникам временно уменьшает урон.",
"Also works with Self-Revive": " ・ Также работает с самореанимацией.",

"Explosive Resistance": "Сопротивление взрывам",
"Reduced damage taken from explosives": "・ Снижает получаемый урон от взрывчатки",
"Fully upgrade for immunity to your own explosives": "・ Полное улучшение даёт иммунитет к собственной взывчатке.",

"Tackle": "Таран",
"Sliding, Diving, or Tac Sprinting knocks down Fears and Soldiers": "・ Скольжение, падение или тактический бег сбивают с ног страхи и солдат.",
"": "",

// Фантом
"Phantom (S1R)": "Фантом👉с1п👈",
"Strike unseen and vanish fast, slip past danger, land critical blows from the shadows.": "👉Призрачная копия👈Наносите удары незаметно и быстро исчезайте, ускользайте от опасности и наносите решающие удары из тени.",

"Elusive Target": "Трудная цель",
"Reduces accuracy of enemies shooting at you": "・ Снижает точность противников, стреляющих по вам",

"Fast Melee": "Быстрый ближний бой",
"Faster melee speed": "・ Повышенная скорость ближнего боя.",

"Trap Avoidance": "Избегание ловушек",
"Traps and Mines take longer to detect you": "・ Ловушки и мины обнаруживают вас с задержкой. ",
"Undetectable when fully upgrade": "・ При максимальном улучшении вы необнаружимы.",

"Silent Movement": "Тихое перемещение",
"Quiets movement, reduces enemy detection distance. Faster loading when interacting with devices": "・ Приглушает звуки перемещения и уменьшает дистанцию обнаружения противником. Быстрая загрузка при взаимодействии с устройствами.",

"Ambush": "Засада",
"Hits from behind deal more damage, if the enemy is at full health critical shots deal double damage": " ・ Удары в спину по не ожидающим этого врагам наносят больше урона. если у врага полное здоровье, критические удары наносят двойной урон.",

"Decoy": "Ложная цель/Отвлекающая граната",
"Taking significant damage deploys as Echo Unit that distracts enemies": "・ При получении значительного урона развёртывается солдат Эхо, который отвлекает врагов.",
"": "",

// Орлиный глаз👉с2👈
"Eagle Eye (S2)": "Орлиный глаз👉с2👈",
"Sharpen focus for deadly precision, amplify critical hits, and make every shot count.": "👉Увеличение критического урона / Оглушение при разрушении брони👈Повышайте концентрацию для смертоносной точности, усиливайте критические попадания и делайте каждый выстрел результативным",

"Increased Crit Damage": "Бешенство",
"Critical Hits deal more damage": "・ Убийства подряд на короткое время уверичивают урон используемого оружия.",

"Big Hit": "Быстрое прицеливание",
"Increases Critical Damage dealt to full health enemies.": "・ Повышение скорости прицеливания",

"Last Shots Plus": "Мощный удар ",
"Deal more damage when your Weapon is low on ammo.": "・ Увеличивает критический урон, наносимый врагам с полным здоровьем.",

"Rampage": "Последние выстрелы",
"Getting rapid kills briefly increases weapon damage with that weapon.": " ・ Наносите больше урона, когда боеприпасы вашего оружия на исходе.",

"Aim Faster": "Увеличение критического урона",
"Aim Down Sights faster.": "・ Критические попадания наносят больше урона..",

"Armor Breaker": "Разрушитель брони",
"Stun and damage enemies when breaking enemy armor.": "・ Оглушайте и наносите урон врагам при разрушении их брони.",

// Боевое подразделение👉с3👈
"Warband (S3)": "Боевое подразделение👉с3👈",
"Summon powerful allies and turn the tide of battle by amplifying their impact on the battle ground": "Призывайте могущественных союзников и переломите ход Битвы, усилив их влияние на поле боя.",

"Plague": "Чума",
"Eliminated enemies can explode and convert nearby enemies into allies": "・ Уничтоженные противники могут взорваться и превратить ближайших врагов в союзников.",

"Bloodrunner": "Кровавый бегун",
"Gain a damage bonus for rapid multi-kills - ends if momentum stops": "・ Получайте дополнительный урон от быстрых многократных убийств. Держите его активным с быстрыми убийствами.",

"Smuggler": "Контрабандист",
"Chance to instantly replenish used equipment and Scorestreaks": "・ Шанс мгновенно пополнить использованное снаряжение и серии очков.",

"Healthhounds": "Здоровые псы ",
"Damage and kills from summoned allies restore a portion of health": "・ Урон и убийства от призванных союзников, восстанавливают часть здоровья.",

"Wirehand": "Кибер-руки",
"Eliminations have a chance to spawn an attack drone": "・ Ликвидации с некоторой вероятностью вызывают атакующий дрон.",

"Steelhand": "Стальная рука",
"Picked-up armor auto-equips immediately": "・ Подобранная броня автоматически экипируется.",

// Страж👉с4 перезагрузка👈
"Guardian (S4R)": "Страж👉с4п👈",
"Stand your ground and turn pressure into power": "Не отступайте ни на шаг и обращайте давление в силу",
"The Guardian skill track makes you a frontline anchor, shrugging off damage, punishing attackers, and sustaining both yourself and your squad": "Ветвь навыков Страж позволит вам стать настоящим бастионом на передовой: с лёгкостью выдерживая урон, отбрасывая нападающих врагов и поддерживая отряд",
"With stronger defenses, better resource drops, and proximity-based revives, Guardians do not just survive the fight, they control it": "Благодаря усиленной защите, более ценным ресурсам и возможности реанимировать союзников, находящихся рядом, Стражи не просто выживают в битвах - они ими управляют",

"Payback": "Расплата",
"Enemies that damage the player receive damage themselves": "Противники, которые наносят урон игроку, сами получают урон",

"Battle Cache": "Схрон",
"Increased chance to spawn ammo/armor pack when killing an enemy": "Повышает шанс появления боеприпасов/брони при убийстве врага",

"Power Tap": "Подзарядка",
"Picking up ammo/armor packs now also grants equipment recharge": "При подборе боеприпасов/бронепластин также происходит перезарядка снаряжения",

"Fortified": "Фортификация",
"Reduce incoming damage for every currently equipped plate. As you have more plates, the damage reduction is bigger": "Снижает получаемый урон за каждую установленную пластину. Чем больше пластин, тем выше снижение урона",

"Iron Grip": "Железная схватка",
"Reduce Hip Fire bullet spread and reduce flinch when getting hit": "Уменьшает разброс пуль при стрельбе от бедра и снижает рывок при получении урона",

"Rescue Pulse": "Спасательный импульс",
"If allies are downed, the player can revive them just by being near them": "Чтобы реанимировать тяжелораненого союзника, игроку достаточно встать рядом с ним",
"For the player owner downed, any player can revive them just by being near": "Если обладатель этого навыка сам получит тяжёлое ранение, любой другой игрок сможет его реанимировать, встав рядом с ним",
// "--Base I: Taking melee hits can spawn a Black Hole that damages and displaces enemies": "・ ",

// ☢️Экзотические навыки👉S1👈Exotic Skill
"Mega Punch": "Мегаудар",
"Replaces Weapon gun butt with a deadly punch that knocks back enemies": "☢️ Замена удара прикладом на мощный удар кулаком, отбрасывающий противников.",
"Upgrade: Hits more enemies": "・ Улучшение: Поражает больше врагов.",
"Final Upgrade: Chance to trigger a Photon Round that damages enemies and drops a healing capsule": "・ Итоговое улучшение: Вероятность срабатывания фотонного патрона, который наносит урон врагами сбрасывает капсулу исцеления.",

"Conjuration": "Колдовство",
"Kill enough enemies to summon Toxin Butterflies that harass and damage enemies": "☢️ Убейте достаточно врагов, чтобы призвать токсичных бабочек, которые будут беспокоить врагов и наносить им урон.",
"Upgrade: Further increase of damage dealt by Toxin Butterflies": "・ Улучшение: Повышение урона, наносимого токсичными бабочками.",
"Final Upgrade: Greater increase of damage dealt by Toxin Butterflies": "・ Итоговое улучшение: Дальнейшее повышение урона, наносимого токсичными бабочками.",

"Echo Shell": "Эхо-Оболочка",
"Significantly reduces damage taken from behind": "☢️ Значительно снижает урон, получаемый сзади.",
"Upgrade: Further reduction of damage taken from behind": "・ Улучшение: Дальнейшее снижение урона, получаемое сзади.",
"Final Upgrade: Greater reduction of damage taken from behind": "・ Итоговое улучшение: Значительное снижение урона, получаемое сзади.",

"Celebration": "Торжество",
"Enemies damaged or affected by Equipment have a chance to trigger Mortar Rounds that target enemies": "☢️ Противники, получившие урон или подвергшиеся воздействию снаряжения, имеют шанс вызвать миномётные снаряды, наводящиеся на противников.",
"Upgrade: Further increase of chances to trigger Mortar Rounds.": "・ Улучшение: Увеличение шансов срабатывания миномётных снарядов.",
"Final Upgrade: Greater increase of chances to trigger Mortar Rounds": "・ Итоговое улучшение: Значительное увеличение шансов срабатывания миномётных снарядов.",

"Enemies damaged or affected by Equipment have a chance to trigger a Frost Cloud that slows enemies": "☢️ Противники, получившие урон или подвергшиеся воздействию снаряжения, имеют шанс вызвать морозное облако, которое замедлит врагов.",
"Upgrade: Also damages enemies": "・ Улучшение: Также наносит урон врагам.",
"Final Upgrade: Affected enemies will transfer frost to nearby enemies": "・ Итоговое улучшение: Подвергшиеся воздействию враги перенесут морозный эффект на других противников поблизости.","Frost Cloud": "Морозное облако",

"On fatal damage become temporarily invulnerable instead of dying": "🔴Воскрешение👉Самовостанавливающая самореанимация каждую минуту👈☢️ При получении смертельного урона вы становитесь временно неуязвимым вместо того, чтобы умереть.",
"Once per match": "Доступно 1 раз за бой.",
"Upgrade: Gain full health after surviving": "・ Улучшение: Получите полное здоровье, пережив получение фатаньго урона.",
"Final Upgrade: Instead of surviving fatal damage, get a Permanent Self Revive that recharges when not downed": "・ Итоговое улучшение: Вместо выживания при нанесении вам смертельного урона, получите постоянную самореанимацию, которая восстанавливается, когда вы не находитесь, в состоянии тяжёлого ранения.",
"Resurrection️": "Воскрешение",

"Shattered Shield": "Разбитый щит",
"Stun and damage nearby enemies when Armor Plates break": "☢️ Оглушает и наносит урон ближайшим противникам при разрушении бронепластин.",
"Upgrade: Final break gives you temporary invulnerability": "・ Улучшение: Последнее разрушение даёт временную неуязвимость.",
"Final Upgrade: Final break triggers a Photon Round that deals damage and drops a healing capsule": "・ Итоговое улучшение: Последнее разрушение даёт фотонный патрон, который наносит урон врагам и сбрасывает капсулу исцеления.",

"Graviton Reaction": "Реакция на гравитон",
"Taking melee hits can spawn a Black Hole that damages and displaces enemies": "☢️ Получение урона в ближнем бою может создать чёрную дыру, которая наносит удар противникам и перемещает их",
"Upgrade: Also triggered by ranged attacks": "・ Улучшение: Также срабатывает при атаке на расстоянии.",
"Final Upgrade: Also triggers on enemies in an area around the affected enemy": "・ Итоговое улучшение: Также срабатывает на врагов вблизи поражённого противника.",

"Conductive Shot": "Электроудар",
"When firing any weapon sometimes a taser is fired that can get glued to the enemy and inflict tics of damage for a limited time": "☢️ Выстрел из оружия также может выпустить снаряд-тазер, который может прикрепляться к врагу и наносить ему периодический урон в течении ограниченного времени.",
"Upgrade: Increase the amount of tasers fired per activation": "・ Улучшение: Увеличивает количество тазеров за выстрел.",
"Final Upgrade: Longer duration and now tasers can get glued to all enemies": "・ Итоговое улучшение: Увеличенное время действия. Тазер также теперь может быть прикреплён ко всем врагам.",

"Fission": "Распад",
"Killing an elite has the chance to trigger a large explosion, dealing massive damage to nearby enemies": "☢️ Убийства элитного противника млжет вызвать мощный взрыв, наносящий большой урон врагам поблизости.",
"Upgrade: Increased damage and radius of the explosion": "・ Улучшение: Увеличивает урон и радиус взрыва.",
"Final Upgrade: The explosion spawn friendly Toxic Fears that fight for you": "・ Итоговое улучшение: Взрыв вызывает ядовитых страхов, которые сражаются на вашей стороне.",

// ☢️Кошмарные навыки☢️Nightmare Skill☢
"Powerful skills acquired by completing World Events": "Мощные навыки, приобретаемые за прохождение мировых событий и полученные за победу над боссом сбоя",
"You can equip and upgrade these skills": "Вы можете экипировать и улучшать эти навыки",
"Powerful skills acquired by defeating a Glitch Boss": "Мощные навыки, полученные за победу над боссом сбоя",
"Can equip and upgrade 1 Nightmare Skill": "Можно выбрать и улучшить 1 кошмарный навык при нулевом и 1 престиже, и 2 кошмарных навыка при Престиже 2 и 3",

"Nova Strike": "Удар Нова",

"Melee strikes have a chance to generate an electrical area that damages enemies.": "☢️ Удары в ближнем бою могут создать электрическое поле, наносящее урон противникам.",
"Upgrade: When the electrical area is created, the struck enemy is also Shocked": "・ Улучшение: при создании электрического поля на поражённого противника также накладывается Шок.",
"Final Upgrade: The electrical area persists briefly and Shocks enemies who pass through it (cooldown)": "・ Итоговое улучшение: электрическое поле сохраняется в течении короткого времени и накладывает Шок на врагов, проходящих через него (есть период восстановления).",

"Phoenix Burst": "Взрыв Феникса",
"When at low health, trigger an explosion that damages enemies and fully restores health (cooldown)": "☢️ При низком уровне здоровья игрока происходит взрыв, наносящий урон противникам и полностью восстанавливающий запас здоровья (есть период восстанавления).",
"Upgrade: After the explosion, gain full ammo and temporarily infinite ammo from the magazine": "・ Улучшение: получение полного боезапаса и временного бесконечного боезапаса.",
"Final Upgrade: After the explosion, gain temporary immunity": "・ Итоговое улучшение: получение временной неуязвимости после взрыва.",


"Wingsuiting over enemies drops an incendiary trail on them": "☢️ Полёт в крылатом костюме над противниками оставляет на земле зажигательный след.",
"Upgrade: Increases how long the incendiary trail remains on the ground": "・ Улучшение: увеличивает длительность нахождения зажигательного следа на земле.",
"Final Upgrade: Flashbangs normal and Special enemies within the incendiary area": "・ Итоговое улучшение: оглушает обычных и особых противников в зоне зажигательного следа.",
"Hellwing": "Адское крыло",


"Weapon attacks have a chance to trigger Photon, Incendiary, Frost, or Shock effects": "☢️ Атаки оружием могут наложить эффекты Фотон, Зажигание, Мороз или Шок",
"Upgrade: Can also trigger Graviton, Mortar, Shrapnel, and Neuro-Disruption effects": "・ Улучшение: также могут накладывать эффекты Гравитон, Миномёт, Шрапнель и Нейроразрушение.",
"Final Upgrade: Enemies hit by Chaos Rounds have a chance to trigger a random Chaos Round on nearby enemies": "・ Итоговое улучшение: противники поражённые Патронами хаоса, могут наложить случайный эффект на ближайших противников.",
"Chaos Rounds": "Патроны хаоса",

"Frost Vortex": "Морозный вихрь",
"Bullets have a chance to create a Snowstorm that pulls in enemies": "☢️ Пули могут создать снежную бурю,притягивающую врагов.",
"Upgrade: Applies Frost to normal enemies in the Snowstorm": "・ Улучшение: накладывает Мороз на обычных врагов в снежной буре.",
"Final Upgrade: Also applies Frost to Special and Elite enemies in the Snowstorm": "・ Итоговое улучшение: также накладывает Мороз на особых и элитных врагов в снежной буре.",

"Wingman Unit": "Напарник",
"Doing multiple kills in a short period of time spawns a Drone that follows you while shooting nearby enemies.": "☢️ Несколько убийств за короткий промежуток времени вызывают появление дрона, который следует за вами, стреляя в ближайших врагов.",
"Upgrade: Increases the rate of fire and duration of the Drone.": "・ Улучшение: Увеличивает скорострельность и длительность работы дрона.",
"Final Upgrade: Drone shots have a chance to trigger Shrapnel effect.": "・ Итоговое улучшение: Выстрелы дрона с определённой вероятностью вызывают эффект шрапнели.",

"Sleeper Agent": "Спящий агент",
"Chance on shot to turn base enemies into allies that rush nearby hostiles and detonate on impact": "☢️ Шанс при попадании обратить обычных противников в союзников, заставив их бросаться на ближайших врагов и взрываться при столкновении",
"Upgrade: Enemies are attracted toward the sleeper agent": "・ Улучшение: Противников притягивает к спящему агенту",
"Final Upgrade: Agent drops cluster submunitions expanding the damage radius": "・ Итоговое улучшение: Агент разбрасывает взрывные снаряды, увеличивающие радиус поражения",

"Nightmare Skill": "Кошмарные навыки",

// Экзотическое оружие

"Among the weapons found across Avalon, some will appear as Exotic Weapons which, as the name suggests, are weapons at ": "Среди оружия, найденного по всему Авалону, некоторое из них будут представлено как экзотическое оружие, которое, как следует из названия, относится к категории ",
"The Exotic Weapons deal 3.5x damage (originally 2.5x before ": "Экзотическое оружие наносит в 3,5 раза больше урона (ранее было в 2,5 раза ",
" compared to default weapons": " по сравнению с обычным оружием",
"Exotic Weapons are uniquely named and most of them come with a list of predefined attachments": "Экзотическое оружие имеет уникальное имя, и большинство из них поставляется со списком предопределенных насадок",
"Exotic Weapons can be obtained from Exotic Weapon case dropped after completing Activities or Assignments in the highest Zones, as well as eliminating Elites enemies": "Экзотическое оружие можно получить из ящика с экзотическим оружием, который выпадает после выполнения заданий в самых высоких зонах, а также при уничтожении элитных врагов",
"Completing the Toxin Source activity will always guarantee an Exotic Weapon case to drop": "Выполнение задания с источником токсина всегда гарантирует выпадение футляра с экзотическим оружием",
"there are 20 uniquely named Exotic Weapons:": "существует 20 экзотических видов оружия с уникальными названиями:",
"As of ": "Начиная с  ",
"": "",


"Effects and Bonus": "Эффекты и бонусы",
"Exotic Weapons feature one (sometimes two) Exotic Effect and one Utility Bonus, improving the damage and effectiveness of the weapon": "Экзотическое оружие включает один (иногда два) экзотических эффекта и один бонус полезности, что повышает урон и эффективность оружия",

"Exotic Effects work similarly to the Ammo Mods from the Zombies mode": "Экзотические эффекты работают аналогично модификациям боеприпасов из Зомби режима",
"Every Exotic Weapon also has its own affinity with a specific Exotic Effect which can potentially grant the weapon with an additional Affinity Effect which will replace the Utility Bonus": "Каждое экзотическое оружие также имеет свою связь с конкретным экзотическим эффектом, который потенциально может дать оружию дополнительный эффект аффинити, заменяющий бонус полезности",
"Each Exotic Effect also applies a unique camouflage to the Exotic Weapon": "Каждый экзотический эффект также накладывает уникальный камуфляж на экзотическое оружие",
"The following are all the Affinity Effects that can be encountered when picking up an Exotic Weapon": "Ниже приведены все бонусы к экзотическому оружию, которые можно получить, взяв в руки экзотическое оружие",

// "Weapon": "Оружие",
"Torrent": "Поток",
"Full-auto assault rifle equipped to discharge a relentless stream of gunfire.": "💎Автоматическая штурмовая винтовка, способная вести непрерывный огонь.🩸Прицел BaMx зеркальный EAM🩸Фотонные патроны🩸Перезарядка при смене💎Нейроразрушающие патроны🩸Морозные патроны🩸Пальба🩸",
"Affinity for Graviton Rounds": "Особенно эффективна с гравитонными патронами",

"Flashburst": "Световой залп",
"Burst marksman rifle specialized for raining sustained and lethal suppression.": "💎Пехотная винтовка, стреляющая очередями, оптимизированная для длительного и смертоносного подавления сил противника.💎Бело-голубой камо💎Морозные патроны💎Взрывные пули💎🩸Гравитонные патроны🩸Пальба🩸",
"Affinity for Frost Rounds": "Совместим с морозными патронами",

"Redline": "Красная черта",
"Full-auto light machine gun optimized to unleash an onslaught of destruction": "💎Автоматический ручной пулемёт, оптимизированный для массового уничтожения.🩸Зажигательные патроны🩸Боеготовность🩸Гравитонные патроны🩸Экскалация🩸Морозные патроны🩸Отсутствие отдачи🩸",
"Affinity for Mortar Rounds": "Особенно эффективен с миномётными снарядами",

"Ghostmind": "Призрачный разум",
"Bolt action sniper rifle augmented for decisive and destructive strikes": "💎Снайперская винтовка с продольно-скользящим затвором, адаптированная для решительных и мощных ударов.🩸Морозные патроны🩸Нулевой расход🩸",
"Affinity for Neuro-Disruption Rounds": "Особенно эффективна с нейроразрушающими патронами",

"Backdrive": "Обратный ход",
"Full-auto submachine gun refined for both aggressive and precise assault.": "👉с1👈💎Автоматический пистолет-пулемёт, оптимизированный для точных и агрессивных штурмовых атак.🩸Миномётные снаряды🩸Дальний выстрел🩸",
"Affinity for Shock Rounds": "Особенно эффективен с шоковыми патронами",

"Overcharge": "Перезаряд",
"Pump shotgun enhanced to push the perceived limits of CQB lethality.": "💎Помповый дробовик, позволяющий по-новому взглянуть на идею ближнего боя.💎Красно-оранжевый камо💎Фотонные патроны💎От бедра💎🩸Гравитонные патроны🩸Перезарядка в ближнем бою🩸",
"Affinity for Incendiary Rounds": "Предрасположенность к зажигательным патронам",

"Killswitch": "Убийственный выключатель",
"Full-auto assault rifle modified for raw power and aggression.": "💎Автоматическая штурмовая винтовка, оптимизированная для агрессивного штурма.🩸Шоковые патроны🩸Боеготовность💎Розовое камо👉Гравитонные патроны👉Пальба🩸",
"Affinity for Shrapnel Rounds": "Совместима со шрапнельными патронами",

"Swarmforge": "Кузница роя",
"Full-auto submachine gun adapted for ultra-dynamic and ruthless CQC.": "💎Автоматический пистолет-пулемёт, адаптированный для динамичного и безжалостного ближнего боя.🩸Фотонные патроны. Каждая пуля даёт шанс превратить здоровье обычного или особого противника в целебный знак.🩸Крупная дичь.Фотонные патроны могут действовать на элитных противников🩸Двойное действие.Временно ускорит восстановление здоровья🩸💎Зелёный камо🩸Нейроразрушающие патроны🩸От бедра💎",
"Affinity for Photon Rounds": "Особенно эффективен с фотонными патронами",

"Criticality": "Критичность",
"Charge launcher enhanced for field efficiency.": "💎Пусковая установка, адаптированная к полевым условиям.🩸💎Голубой камо💎Морозные патроны💎Нулевой расход💎",
"Affinity for Mortar Rounds": "Особенно эффективен с миномётными снарядами",

"Hypersurge": "Гипервал",
"Full-auto light machine gun augmented for precise or reckless lethality.": "💎Смертоносный и лёгкий автоматический ручной пулемёт, подходящий для точного или шквального огня.💎Красно-жёлтое камо👉Зажигательные патроны👉Пальба🩸",
"Affinity for Shock Rounds": "Особенно эффективен с шоковыми патронами",

"Malspike": "Злобный шип",
"Burst pistol modified for maximum, small-profile firepower.": "💎Пистолет для ведения плотного огня очередями.💎Голубое камо👉Шоковые патроны👉Парные Velox 5.7👉В карантинной зоне 4 уровня нашёл🩸",
"Affinity for Photon Rounds": "Особенно эффективен с фотонными патронами",

"Neurowall": "Нейростена",
"Double-action rifle enhanced for deadly precision. ": "💎Самовзводная винтовка повышенной точности.🩸Фотонные патроны🩸Отсутствие отдачи🩸💎💎Шрапнельные патроны💎Сверхлёгкость",
"Affinity for Neuro-Disruption Rounds": "Совместима с нейроразрушающими патронами.",

"Zeotrope": "Зеотроп",
"Dual-barrel shotgun modified for aggressive pursuit and execution.": "💎Двухствольный дробовик, модифицированный для агрессивного преследования и уничтожения.🩸Миномётные патроны🩸Убивай и беги🩸",
"Affinity for Frost Rounds": "Совместим с морозными патронами",

"Barrage": "Шквал",
"Full-auto SMG augmented for unrelenting assault. ": "💎Автоматический пистолет-пулемёт, усиленный для неумолимой атаки.🩸Нейроразрушающие патроны🩸Сверхлёгкость🩸",
"Affinity for Shrapnel Rounds": "Совместима со шрапнельными патронами",

"Collateral": "Побочный ущерб",
"Full-auto assault rifle enhanced with ricochet rounds for widespread lethality. ": "💎Автоматическая штурмовая винтовка, оснащённая рикошетными патронами для большей летальности.💎Автоматическая штурмовая винтовка, усиленная рикошетными патронами для широкого поражения целей.🩸",
"Affinity for Incendiary Rounds": "Предрасположенность к зажигательным патронам",

"Continuum": "Непрерывность",
"Bolt-action sniper rifle modified for aggression and potency.": "💎Снайперская винтовка с продольно-скользящим затвором, оптимизированная для агрессивного боя.🩸Миномётные патроны🩸Нулевой расход🩸",
"Affinity for Graviton Rounds": "Особенно эффективна с гравитонными патронами",

"Pulsebreach": "Разрыв пульса",
"Burst Marksman Rifle modified for maximum destructive power.": "💎Пехотная винтовка с очередями, модифицированная для максимальной разрушительной силы.🩸Гравитонные патроны🩸Длинная очередь🩸",
"Affinity for Shrapnel Rounds": "Совместима со шрапнельными патронами",

"Reboot": "Перезагрузка",
"Semi-auto pistol augmented for versatility and power.": "💎Полуавтоматический пистолет, усовершенствованный для универсальности и мощности.🩸",
"Affinity for Shock Rounds": "Совместим с шоковыми патронами",

"Kilonova": "Кило-Звезда",
"Full-auto submachine gun enhanced for mobility and close-quarters power.": "💎Автоматический пистолет-пулемёт с повышенной подвижностью и убойной мощностью в боях на ближней дистанции.🩸",

"Infraradiance": "Инфра-излучение",
"Semi-auto shotgun altered for non-stop assault and aggression.": "💎Полуавтоматический дробовик,модифицированный для выполнения штурмовых задач.🩸",

"Cryoshear": "🔪Криосрез",
"Melee weapon. High damage, moderate range, and moderate attack speed": "💎Оружие ближнего боя, пропитанное ледяной силой + полезные бонус Парирование👉 Уменьшение получаемого урона при подготовке тяжёлой атаки ближнего боя. ",

"Defrag": "Дефрагментация",
"Full-auto assault rifle. Low recoil for excellent accuracy with moderate damage and handling": "Автоматическая штурмовая винтовка с исключительными показателями точности. Низкая отдача обеспечивает превосходную точность при умеренных повреждениях и удобном обращении",
"": "",


"": "",
"": "",

"": "",
"": "",

//💎💎💎Экзотический верстак  модификатор💎💎💎
// 1 этап Экзотическая редкость 3.5 Кратность урона.
// 2 случайный бонус к характеристикам
// 3 случайный тип пули экзотический эффект
// 💎Патроны🔴FULL UTILITY BONUS AND EXOTIC EFFECTS LIST
// Exotic Effects (Ammo Mods) Can be applied to every weapon type.
// "Exotic Effects (Ammo Mods) Can be applied to every weapon type.": "",

"The Exotic Fabricator will spawn after the Nightmare Strike Boss is defeated and allow the participating players to upgrade any of their weapons to the Exotic rarity, significantly increasing their damage": "        ",
"The Exotic Fabricator became available with Season 02 Reloaded and the introduction of the Nightmare Zones": "Экзотический фабрикатор стал доступен с выходом 2 сезона перезагрузки и с появлением кошмарных зон",
"The Exotic Fabricator will spawn after the Nightmare Strike Boss is defeated and allow the participating players to upgrade any of their weapons to the ": "Экзотический фабрикатор появится после победы над Боссом Удара Гильдии и позволит участникам улучшить любое своё оружие до ",

" rarity, significantly increasing their damage": " редкости, значительно увеличивая их урон",
"If a weapon is already at the Exotic rarity, the players can first add a Utility Bonus, and an Exotic Effect in a second time": "Если оружие уже на экзотической редкости, игроки могут сначала добавить бонус полезности, а во второй раз — экзотический эффект",
"Afterwards, and for every future interaction with the Exotic Fabricator with that same weapon, the players can re-roll either the Effect or Bonus": "После этого, и при каждом будущем взаимодействии с экзотическим фабрикатором с этим же оружием, игроки могут изменить либо эффект патронов, либо бонус",
"With the release of Operation Poison Pill, the associated Nightmare Zone will have its boss": "С выходом операции Ядовитая пилюля связанная с ней кошмарная зона получит своего босса",
"repeatedly respawn after being defeated allowing players to use the Exotic Fabricator several times within a single match": "многократно возрождается (2 ахах) после поражения, что позволяет игрокам использовать экзотический фабрикатором несколько раз в течение одного матча",



"Neuro-Disruption Rounds": "🧟Нейроразрушающие патроны🧟",
"Each bullet has a chance to temporarily turn a Normal or Special Enemy into an ally.": "🧟Мозгоразложитель🧟・ Каждая пуля даёт шанс временно превратить обычного или особого противника в союзника.",

"Frost Rounds": "❄️Морозные патроны❄️",
"Each bullet has a chance to slow a Normal or Special Enemy and increase the damage they receive.": "❄️Морозилка❄️・ Каждая пуля даёт шанс замедлить обычного или особого противника, а также увеличит получаемый им урон",

"Shock Rounds": "⚡Шоковые патроны⚡",
"Each bullet has a chance to stun a Normal or Special Enemy and generate an electric damage field": "⚡Выключатель⚡・ Каждая пуля даёт шанс оглушить обычного или особого противника, а также создать электрическое поле,наносящее урон",

"Mortar Rounds": "🎉Миномётные патроны/снаряды🎉",
"Each bullet that hits a Normal or Special Enemy has a chance to launch fireworks that target enemies": "🎉Фейрверки🎉・ Каждая пуля, попавшая в обычного или особого врага, имеет шанс запустить фейерверки, поражённые врагами",

"Incendiary Rounds": "🔥Зажигательные патроны🔥",
"Each bullet has a chance to apply a burn effect on Normal and Special Enemies, dealing damage over time.": "🔥・ Каждая пуля даёт шанс поджечь обычного или особого противника, нанося переодический урон",

"Graviton Rounds": "🌀Гравитонные патроны🌀",
"Each bullet has a chance to spawn a black hole on a Normal or Special Enemy, lethally displacing nearby enemies": "🌀・ Каждая пуля даёт шанс создать на месте обычного или особого противника чёрную дыру,которая засасывает и убивает соседних врагов🌀・ Розовый комуфляж типо Cherry Fizz",

"Photon Rounds": "❤️‍🩹Фотонные патроны❤️‍🩹",
"Each bullet has a chance to transform a Normal or Special Enemy health into a Healing Glyph": "❤️‍🩹Целебный знак❤️‍🩹・ Каждая пуля даёт шанс превратить здоровье обычного или особого противника в целебный знак",
// Each bullet has a chance to transform a Normal or Особое оружие Enemy health into a Healing Glyph.
"Shrapnel Rounds": "💥Шрапнельные патроны💥",
"Each bullet that hits a Normal or Special Enemy has a chance to create an explosion that destroys armor": "💥Крушилка💥Осколочные патроны💥・ Каждая пуля, попавшая в обычного или особого противника, даёт шанс,вызвать взрыв, уничтожающий броню",

// Affinity Effect
"Big Game": "Большая игра",

"can turn elite enemies": "действуют и на элитных врагов",
"Light Mend can activate on elite enemies": "❤️Фотонные патроны❤️действуют и на элитных врагов",
"can slow elite enemies": "действуют и на элитных врагов",
"can stun elite enemies": "действуют и на элитных врагов",
"can activate on elite enemies": "действуют и на элитных врагов",
"can burn elite enemies": "действуют и на элитных врагов",
"can activate on Elite enemies": "действуют и на элитных врагов",
"form a black hole that pulls in enemies before teleporting away nearby survivors": "создают чёрную дыру, которая притягивает врагов, а затем телепортирует выживших поблизости",
"Blast Chain": "Взрывная цепь",
"On explosion, 3 additional explosions occur rapidly": "При взрыве происходит ещё 3 взрыва ещё быстрее",
"Blast Shield": "Щит от взрыва",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",

// 💎Модификаторы💎Handling Mods:🔴UTILITY BONUS Only applied to certain weapons.
// Utility Bonus
"Utility Bonuses offer additional upgrades to improve the stats and firepower of the different weapons": "Полезные бонусы  предлагают дополнительные улучшения для улучшения характеристик и огневой мощи различных видов оружия",
"Some Utility Bonuses are exclusive to specific weapons or weapon classes": "Некоторые бонусы эксклюзивны для конкретного оружия или классов оружия",

"Availability": "Применяется",

"Akimbo Velox 5.7": "Парные Velox 5.7 ",
"Dual wield weapon": "👉Только экзотическое👈 Двойное оружие",

"Ammo Drain": "Истощение боеприпасов",
"Add ammo to magazine after a kill": "Добавляет боеприпасы в магазин после убийства",

"Ammo Recharger": "Перезарядка припасов",
"Weapon ammo is refilled while stowed": "Боеприпасы пополняются, когда оружие в убранном состоянии",

"Combat Ready": "Боеготовность",
"Massive improvement to ADS and Sprint to Fire speeds": "・ Радикальное повышение скорости прицеливания и изготовки после бега",

"Escalation": "Эскалация",
"Fire Rate increases the longer you hold down the trigger": "・ Чем дольше вы удерживаете спуск, тем выше становится скорострельность",

"Explosive Bullets": "Взрывные пули",
"Bullets explode, dealing extra area damage": "・ Пули взрываются, нанося дополнительный урон🔴XR-3 ION",

"Fast Fire🔴": "",
"The weapon has a higher Rate of Fire🔴": "",

"Free Fire": "Пальба",
"All ammo is in one large magazine": "・ Все боеприпасы помещаются в один огромный магазин",

"From the Hip": "От бедра",
"Massive improvement to Hip Fire Spread and Recoil": "・ Значительное улучшение разброса при стрельбе от бедра и отдачи",

"Grenade Bullets": "Пули-гранаты",
"Bullets explode, dealing extra area damage": "・ Пули взрываются, нанося дополнительный урон.",

"Hip-Inferno": "Хипповая преисподняя",
"Shots from the hip deal more damage": "・Выстрелы от бедра наносят больше урона",

"Kill and Run": "Убивай и беги",
"Killing enemies give temporary movement speed boost": "・ Убийство противников даёт временное ускорение перемещения🔴Ближний бой",

"Lifestyle🔴": "",
"Killing enemies with a headshot will regen health🔴": "",

"Lightspeed": "Скорость света",
"All movement speeds increased": "・ Увеличение всех способов перемещения",

"Longburst": "Длинная очередь",
"The number of bullets fired in each burst is increased.": "・ Увеличено количество пуль, выпускаемых в каждой очереди",

"Longshot": "Дальний выстрел",
"Massive improvement to Damage Range": "・ 💎Значительное улучшение эффективной дальности🔴Дробовики",
"Recoil is slightly decreased": "Отдача немного повышена",

"Melee Reload": "Перезарядка в ближнем бою",
"Weapon magazine immediately filled after a melee hit": "・ Магазин оружия мгновенно заполняется после удара в ближнем бою",

"Parry": "Парирование",
"Reduces damage received while charging Heavy Melee Attack": "・ Уменьшение получаемого урона при подготовке тяжёлой атаке ближнего боя",

"Recoil Delete": "Отсутствие отдачи",
"Massive improvement to Recoil Control": "・ Существенное улучшение контроля отдачи",

"Reload Swap": "Перезарядка при смене",
"Weapon is always reloaded when swapped to": "・ Когда вы переключаетесь на другое оружие, оно автоматически перезаряжается",

"Sharpshooter": "Меткий стрелок",
"Upper Torso hits deal same damage as Headshots": "・ Попадания в верхнюю часть торса, наносят такой же урон, как и в голову",

"Slasher": "Рубака",
"Faster melee attack speed": "・ Повышенная скорость ближнего боя",

"Shotgunificator": "Дробовикатор",
"Weapon fires now spread bullets": "・ Теперь оружие стреляет пулями с разбросом",

"Ultra-light": "Сверхлёгкость",
"Player movement speed is not reduced while in ADS": "・ Скорость перемещения игрока не снижается в режиме прицеливания",

"Zero Waste": "Нулевой расход",
"Bullets fired have a 50% chance to not consume ammo": "・ Выпущенные пули с 50% вероятностью не расходуют боеприпасы",

"🔴": "",
"🔴": "・ ",


"— In-game description": "— Внутриигровое описание",
"Complete Mission:": "Завершите миссию:",
"Complete a ": "Завершите",

"Black Hole": "Чёрная дыра",



"Assault Rifles": "Штурмовые винтовки️",
"Assaults": "Штурмовые винтовки️",
"SMGs": "Пистолеты - пулемёты",
"Submachine Guns": "Пистолеты - пулемёты",
"Shotguns": "Дробовики️",
"Light Machine Guns": "Ручные пулемёты️",
"LMGs": "Ручные пулемёты️",
"Marksman Rifles": "Пехотные винтовки",
"Marksmans": "Пехотные винтовки",
"Sniper Rifles": "Снайперские винтовки",
"Snipers": "Снайперские винтовки",
"Pistols": "Пистолеты",
"Launchers": "Гранатомёты",

"Melee Weapons": "🔪Рукопашное оружие",
"Melee": "🔪Рукопашное оружие",
"Other melee weapons": "Другое оружие ближнего боя",
"Fists": "Кулаки",

"This is the list of attachments in": "Это список прикреплений в",
"Attachments": "Прикрепления",
"VAS Convergence Foregrip": "Передняя рукоять VAS Convergence",
"Underbarrel foregrip to improve bullet deviation and recoil stabilization for a smoother and more predictable recoil pattern": "Подствольная передняя рукоять для снижения разброса пуль и стабилизации отдачи для более плавной и предсказуемой стабилизации отдачи",
"Bullet Deviation": "Отклонение пули",
"First Two Shot Recoil Control": "Контроль отдачи при первых двух выстрелах",
"Vertical Recoil Control": "Контроль вертикальной отдачи",




"Shadow SK Masterkey, 12-Gauge": "Shadow SK Masterkey, 12-й калибр",
"X9 Maverick Javelin Assembly": "Сборка Javelin для X9 Maverick",
"MK.78 Lightframe PDW Conversion": "Конверсия PDW с легкой рамой для MK.78",
"Warden 308 Badlands Pistol Kit": "Пистолетный комплект Warden 308 Badlands",
"Carbon 57 Fabricator Mag": "Магазин-фабрикатор Carbon 57",
"Ryden 45K Apex Sweeper Rig": "💥Ryden 45K Apex Sweeper Rig",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",



"It was added as part of the": "Он был добавлен в рамках",
" is a underbarrel ": " это подствольное ",
" featured in": " используемое в",
"Pros": "Плюсы",
"Most weapon categories": "Большинство категорий оружия",
"Compatible with": "Совместим с",
"Type": "Тип",
"Underbarrel": "Подставная планка",
"Equipped onto the": "Оснащены на",
"General information": "Главная информация",
" Battle Pass": " Боевого пропуска",
"Page ": "Страница ",
"attachment": "прикрепление",
"Statistics": "Статистика",

"Description": "Описание",


"Base Weapon": "Тип оружия",
"Unlocked by Default": "Разблокировка по умолчанию",
"Unlocked": "Разблокировка",
"Unlock": "Разблокировка",
"wingsuit": "крылатый костюм",
"Wingsuit": "Крылатый костюм",
"Vehicle": "Транспорт",
"Seats": "Места",
"Activities": "Активности",
"Assignments": "Задания",
"Appears in": "Появляется",
"World Events": "Мировые события",
"Guild Strike": "👉Удар Гильдии👈",
"Country": "Страна",
"O.S.C.A.R": "О.С.К.А.Р",

// Зоны
"Zone I": "Зона I",
"Zone II": "Зона II",
"Zone III": "Зона III",
"Zone IV": "Зона IV",
"Nightmare / Zone V": "Зона V🩸Кошмар",
"Recommended Combat Rating": "Рекомендуемый боевой рейтинг",
"Recommended": "Рекомендованный",
"Damage": "Урон",

//"Exotic": "экзотическим",

"Gallery": "Изображения",
"Endgame Logo in": "Логотип режима Финал в",
"Endgame Icon.": "Иконка режима Финал",


"A total of 20 documents can be found across Avalon": "Всего по всему Авалону можно найти 20 документов",
"Main article: ": "Основная статья здесь: ",
"Endgame (Black Ops 7)/Intel": "BO7 Документы режима Финал ",
"Intel": "Документы",
"This is the list of characters from": "Это список персонажей из",
"": "",


"Impossible Eoster X": "Невероятный зостер Х🧟Impossible Eoster X",// AK-27
"": "Огненный сигил☢️",  // AK-27
"": "Диссонанс☢️",  // AK-27
"Red Mystifier": "Красный мистификатор🧟Red Mystifier", // MK35 ISR
"The Feels": "Чувства🧟The Feels", // Voyak KT-3
"NO EGRT-5": "Нет EGRT-5🧟NO EGRT-5", // EGRT-17
"Red Fiend Bull": "Бомбит бро?)))🧟Red Fiend Bull", // MADDOX RFB
"": "Нейрорез", // MADDOX RFB

"Nyxfall": "Нюксфол🧟Nyxfall", // M15 MOD 0
"": "Красная роса",  // M15 MOD 0
"": "Уложить их",  // M15 MOD 0
"": "Радуга-1",  // M15 MOD 0
"": "Легенда беты☢️",  // M15 MOD 0
"Battlementicide": "Психотронная винтовка🧟Battlementicide", // MXR-17
"": "Линия огня☢️",  // MXR-17
"": "Поверхностный шифр☢️",  // MXR-17
"Hang X": "Хан Х Z🧟Hang X", // X9 Maverick
"Duality of Blam": "Двойственный бум🧟Duality of Blam", // DS20 MIRAGE
"": "Приказ начальства☢️",  // DS20 MIRAGE
"Utu Petition": "Петиция уту🧟Utu Petition", // Peacekeeper Mk1
"": "Сладкоежка☢️",  //  Peacekeeper Mk1
"": "Метка жнеца смерти☢️",  //  Peacekeeper Mk1

"Meteoric Calamity": "Метеоритное действие🧟Meteoric Calamity", // MK.78
"": "Опасная дистанция☢️", // MK.78
"Soul Gormandizer": "Пожиратель душ🧟Soul Gormandizer", // Sokol 545
"Ephialtes & Otus": "🧟Ephialtes & Otus", // с прикреплением XM325 Titan Wield
"Ephialtes": "Эфиальт🧟Ephialtes", // XM325
"": "Ритм☢️", // XM325

"Desecrated Dualist": "Оскверненный дуализм🧟Desecrated Dualist", // M34 Novaline
"": "О,черт☢️",  // M34 Novaline
"": "Дизассемблер☢️",  // M34 Novaline
"Micro Aerator": "Макроаэратор🧟Micro Aerator", // M8A1
"": "Реставратор☢️",  // M8A1
"": "Уровень дна☢️",  // M8A1
"Mecha-Jiki": "Мехаджики🧟Mecha-Jiki", // SwordFish A1

"ET2 Brutus & 872B": "ET2 Brutus & 872B", // Warden 308 Пистолетный комплект Warden 308 Badlands
"ET2 Brutus": "ЕТ2 Брут🧟ET2 Brutus", // Warden 308
"": "Интенсивность☢️",  // Warden 308

"Hachiko": "Хатико🧟Hachiko", // Akita
"Hachi & Co..": "Hachi & Co..", // Akita ScorchLink Akimbo
"": "Эвакуация☢️", // Akita
"Deja Boom": "Дежа Бум🧟Deja Boom", // Echo 12
"": "Волкодав☢️",  // Echo 12
"": "Ядерный жар☢️",  // Echo 12
"X-10-SI-T Fracture": "Разлом Ре4льности🧟X-10-SI-T Fracture", // M10 Breacher
"": "Всплеск☢️",  // M10 Breacher
"Breccius Rebornus": "Breccius Rebornus", // SG12

"L33T H4WX0R": "1337 Х4ЦK3R🧟L33T H4WX0R", // Hawker HX
"MURK SKOGSRA": "Хмурая скогсна🧟MURK SKOGSRA", // Shadow SK
"": "Фантом☢️",  // Shadow SK
"": "Маршрутизация☢️",  // Shadow SK
"Executive Order": "Executive Order", // Strider 300
"Vscera Reconfigurator": "Дистанционный ампутатор🧟Vscera Reconfigurator", // VS Recon
"": "Отключение☢️",  // VS Recon
"": "Пронзающий шлемы☢️",  // VS Recon
"Pandemonium-OG": "Пандемоний-OG🧟", // XR-3 Ion

"El Cabron": "Эль каброн🧟El Cabron", // Carbon 57
"UPYR 1819": "Упырь1819🧟UPYR 1819", // Dravec 45
"": "Расчет☢️",  // Dravec 45
"🧟AAtomic AArdwolf": "AAtomic AArdwolf", // Kogot-7
"": "Первый свет",  // Kogot-7
"": "🧟Атомная гиена🧟",  // Kogot-7

"🧟Mach Diamond": "Mach Diamond", // MP40
"MALPRACTITIONER-2500": "Паскудник-2500🧟MALPRACTITIONER-2500", // MPC-25
"": "Час ноль☢️",  // MPC-25
"": "Громовая спираль☢️",  // MPC-25
"Taniwha Frenzy": "Ярость танивки🧟Taniwha Frenzy", // Razor 9mm
"": "Связь команды☢️",  // Razor 9mm
"": "Жидкостное охлаждение☢️",  // Razor 9mm
"Malevolent Revenant": "Зловещий Мститель🧟Malevolent Revenant", // REV-46
"Contagion Conductor": "Разносчик заразы🧟Contagion Conductor", // RK-9
"Sybil Sentence": "Приговор Сивиллы🧟Sybil Sentence", // Ryden 45K
"": "Наношторм☢️",  // Ryden 45K
"": "Острый вихрь☢️",  // Ryden 45K
"🧟Werewolf 47": "Werewolf 47", // Sturmwolf 45
"Entendre": "Осмысленность🧟Entendre", // VST
"🧟Double Entendre": "🧟Double Entendre", // VST Akimbo
"": "Ледяная погибель☢️",  // VST

"NO-KAP": "По факту🧟NO-KAP", // CODA 9
"🧟PAK-D & NO-KAP": "PAK-D & NO-KAP", //  CODA 9 Акимбо
"": "Диссоциативная фуга☢️",  // CODA 9
"": "Добродетель️☢️",  // CODA 9
"Geri": "Гери🧟Geri", // Jäger 45
"🧟Geri & Freki": "Гери & Freki", // Jäger 45 Акимбо
"Mustang": "🧟Mustang", // M1911
"🧟Mustang & Sally": "Mustang & Sally", // M1911 Акимбо
"Ruin": "Разрушение🧟Ruin", // Velox 5.7
"": "Невысказанная истина☢️",  // Velox 5.7
//"Rack & Ruin": "Rack & Ruin", // Velox 5.7 Акимбо

"BAALIST AARTILLERY": "Баалистическая аартиллерия🧟BAALIST AARTILLERY", // AAROW 109
"": "Мухобойка", // AAROW 109
"Archimedes' Insight": "Озарение Архимеда🧟Archimedes' Insight", // A.R.C. M1

// "Aralez K9S": "Aralez K9S", // Баллистический нож
"Ticker Shock": "Электрошоковая дубинка🧟Ticker Shock", // Flatline Mk.II
"Sawdistic Abyss": "Бездна жестоких лезвий🧟Sawdistic Abyss", // H311-SAW
// "Muramasa Curse": "Muramasa Curse", // Katana
"Pointed Remark": "Острая ремарка️🧟Pointed Remark", // Нож
"Terminal Spike": "Терминальный всплеск🩸Terminal Spike", // Нож
"": "Знаток ремесла", // Нож
"Circuit Tactical": "Тактический контур🩸Circuit Tactical", // Нож

"H1 Boltage": "HI молниеностность🧟H1 Boltage", // Crossbow
"Napoleon Blownapart": "Наполеон Бумапарт🧟Napoleon Blownapart", // GDL Havoc
// "Gaze of Circe": "Gaze of Circe", // Siren
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",

"When upgraded via the ": "При улучшении через ",
" it becomes the": " он становится",
"Pack-a-Punch Machine": "Улучшайзер",
"Battle Pass ": "Боевой пропуск ",
"Instant Rewards Page": "страница мгновенной разблокировки",
"BlackCell Exclusive": "BlackCell Эксклюзив",
"Chain of Command": "Цепочка командования🩸Chain of Command",
"This is the list of Primary ": "Это список основного ",

"Perks in...": "Перки в...",
"Killstreaks in...": "Серии убийств в...",
"Scorestreaks in...": "Серии очков в...",
"Strike Chains": "Серия ударов в...",


"Single Player": "Сюжет",
"Perks": "Перки",
"Maps": "Карты",
"Gametypes": "Тип игры",
"Killstreaks": "Серии убийств",
"Warzone Era Games": "Игры серии Warzone",
"Classic Era Games": "Классические игры",
"Early Era Games": "Современные игры",
"Zombies": "Зомби-режим",
"Community": "Сообщество",
"News": "Новости",
"Affiliates and Friends": "Партнёры и друзья",
"Policies and Guidelines": "Политика",
"Usergroups": "Группы пользователей",
"Forums": "Форумы",
"Multiplayer maps": "Карты сетевой игры",
"Multiplayer map": "Карта сетевой игры",
"Multiplayer": "Сетевая игра",
"Games": "Игры",
"Portable": "Мобильные игры",
"Pages with broken file links": "Страницы с сломанными ссылками",

"Season 01": "сезон 1",
"Season 02": "сезон 2",
"Season 03": "сезон 3",
"Season 04": "сезон 4",
"Season 05": "сезон 5",
"Season 06": "сезон 6",
"Season 1": "сезон 1",
"Season 2": "сезон 2",
"Season 3": "сезон 3",
"Season 4": "сезон 4",
"Season 5": "сезон 5",
"Season 6": "сезон 6",
"Season One": "сезон 1",
"Season Two": "сезон 2",
"Season Three": "сезон 3",
"Season Four": "сезон 4",
"Season Five": "сезон 5",
"Season Six": "сезон 6",
"Reloaded": "Перезагрузка",
"Campaign Levels of ": "Миссии компании в ",
// "Skill": "Навык",
"Achievements/Call of Duty: Black Ops 7": "Достижения/Call of Duty: Black Ops 7",
"Achievements/Trophies": "Достижения/трофеи",
"Opening Transcript": "Вступительная транскрипция",


"Utility Bonus": "Полезные бонусы",


"Recent Wiki Activity": "Последняя активность",
"Ammo Mods": "Модификация патронов",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"Lethals:": "Летальное",

"Frag": "Граната",
"Impact Grenade": "Ударная граната",
"Cluster Grenade": "Кластерная граната",
"Semtex": "Семтекс",
"Needle Drone": "Дрон-игла",
"Molotov": "Коктейль Молотова",
"Point Turret": "Точечная турель",
"C4": "C4",
"Combat Axe": "Топор",

"Tacticals:": "Тактическое",
"Stun Grenade": "Оглушающая граната",
"EMP Grenade": "Эми граната",
"Pinpoint Grenade": "Граната обнаружения",
"Flashbang": "Психограната",
"Stim Shot": "Стимулятор",
"Smoke Grenade": "Дымовая граната",
"Hunter Bot": "Охотник-бот",
"": "Отвлекающая граната",
"": "Дыя",
"": "",

"RC-XD": "Машинка RC-XD",
"Sentry Turret": "Турель",
"LDBR": "Миномётный удар",
"D.A.W.G.": "Робопёс",
"Gravemaker": "Могильщик",
"Rhino": "Носорог",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",





"Exposure": "Экспозиция",
"Inside": "Внутри",
"Distortion": "Искажение",
"Escalation": "Эскалация",
"Disruption": "Помеха",
"Collapse": "Крах",
"Fracture": "Разлом",
"Quarantine": "Карантин",
"Suppression": "Подавление",
"Breakpoint": "Переломный момент",
"Containment": "Сдерживание",
"Missions": "Миссии",
"playable": "играбельный",
"voice only": "только голос",
"mind-game": "голос в голове",
"cutscene only": "только видеосцена",
"Starting Loadout": "Стартовый комплект",
"Found in Level": "Можно найти на уровне",
"in Co-Op Campaign": "в Коорпоративной кампании",
"Co-Op Campaign": "в Коорпоративной кампании",
"Complete ": "Завершите ",
"the Black Ops 7": "Black Ops 7",
"Weapon Loadout": "Комплект оружия",
"Plot": "Сюжет",

// Операторы
"Characters in": "Персонажи из",
"Characters": "Персонажи",
"Operators": "Операторы",
"Biography": "Биография",
"Personalization": "Персонализация",
"Operator Collection": "Коллекция операторов",
"Vault Edition Bonus": "Бонус за  издание Vault Edition",

"USS Barack Obama": "Авианосец Барак Обама",
"United States of America": "США",
"Chicago": "Чикаго",
"Illinois": "штат Иллинойс",
"Yemen": "Йемен",
"Socotra": "Сокотра",

"Civilian ": "Гражданский ",
"(aged ": "(возраст ",
"(age  ": "(возраст ",
"non-canon": "неканон, выбор игрока",
"Deceased": "Умер(ла)",

// MWII 2022
// Валерия Ганза
"Valeria": "Валерия",
"Dead Winter": "Мёртвая зима",
"El Sin Nombre": "Эль Син Нобре",
"Ocelopilli": "Оцелотль",
"Jaguar Warrior Bundle": "Набор Воин-ягуар",
"Out for Blood": "Жажда крови",
"Socialite": "Высший свет",
"Fashion Animal 2 Bundle": "Набор Модное животное 2",
"The Queen": "Ферзь",

"Dead Medallion": "Медальон смерти",
"Fiᴎal Girl": "Последняя девчонка (Красная шапочка)",
"Leyenda": "Легенда",
"El Chupacabras Bundle": "Набор Эль Чупакабра",
"Possessed Valeria": "Одержимая Валерия",
"Roving Adventure": "Бродячее приключение",
"Rupture": "Прорыв",

"Arctic Ranger": "Арктический рейнджер",
"Dark Voltage": "Тёмный вольтаж",
"Kilowatt": "Киловатт",

"    Tracer Pack Elementals: Iceflow Bundle": "",
"": "",
"": "",
// Bo7 2025
"JSOC": "ОКСО",
"": "Трой Маршалл",

"Chloe ": "Хлоя ",
"Karma": "Карма",
" Lynch": " Линч",
"Firewall": "Файервол",
"Defiant Thug": "Неукротимая бандитка",
"Tech Guardian": "Техно-страж",
"Orbital Recon": "Орбитальная разведка",
"Eros": "Эрос",
"Metal Braggart": "Железный хвастун",
"Ataraxia": "Атараксия",
"Tacitеus": "Военная корпорация Безмолвие",
"Tacit": "Безмолвие",
"June 6, 1994": "6 июня 1994",
"Alive (age 41, as of 2035; canon)": "Жива (возраст 41, в 2035; канон)",
"A tattoo on her neck, resembling 'karma' in Chinese": "Татуировка на шее, Карма по-китайски",
"Black eye from ": "Синяк под глазом от ",


"Specter One:": "Спектр-1",
"Specter Two:": "Спектр-2",
"Slade": "Слейд",
" Razor": " Рэйзор",
" Barrick": " Баррик",
 " (formerly) ": "(прежде) ",
"(former)": "(прежде)",

// Зомби
"Tank ": "Танк",
"Dempsey": "Демпси",
"Nikolai Belinski": "Николай Белинский",
"Takeo Masaki": "Такео Масаки",
"Edward Richtofen": "Эдвард Рихтгофен",
"Maya Aguinaldo": "Майя Агинальдо",
"Grigori Weaver": "Григорий Уивер",
"Mackenzie Carver": "Маккензи Карвер",
"Elizabeth Grey": "Элизабет Грей",

// Коллаборации
"Promotional	": "Промоматериалы",
"Competitor (Male)": "Боец М",
"Competitor (Female)": "Боец Ж",
"The Replacer (Peter Stormare)": "Заместитель (Петер Стормаре) 27.8.1953",
"The Replacer (Nikki Glaser)": "Новая заместительница (Никки Глейзер) 1.6.1984",
"Lucy MacLean": "Люси МакЛин",
"Thurgood Jenkins": "Уборщик наркоман из фильмя Непропеченный (1998) Дейв Шаппель ",
"Valkyrie": "Валькирия",
"Hunter Killer (Modern Warfare 4 preorder)": "Охотник - убийца (предзаказ)",
"Nicolas Cage": "Николас Кейдж",

"Aliases": "Прозвище",
"Nationality": "Национальность",
"Affiliations": "Организация",
"Rank": "Ранг",
"Gender": "Пол",
"Female": "Женский",
"Male": "Мужской",
"Actress": "Озвучивание",
"Status": "Статус",
"Killed By": "Убит(а) от",
"Birth": "Рождение",
"Death": "Смерть",
"Alive ": "Жив(а) ",
"Height": "Рост",
"Weight": "Вес",
" kg": " кг",
" m)": " м)",
"Build": "Телосложение",
"Slim": "Стройное",
"Hair": "Волосы",
"Blond": "Блонда",
"Eyes": "Глаза",
"Blue": "Голубые",
"Equipment": "Оснащение",
"Timeline": "Таймлайн",
"Level": "Уровень",
"Marks": "Приметы",
"Base": "Базовый",
"Epic": "Эпический",
"Legendary": "Легендарный",
"Ultra": "Ультра",
"Rare": "Раритет",
"Skins": "Скины",

// "Endgame": "Финал",
// "Avalon": "Авалон",
"Objectives": "Активности",
"'s": "",
// "Ability": "Способность",
"Special Weapons": "Особое оружие",
"Special Weapon": "Особое оружие",
// "Specials": "Особое оружие",
// "Special": "Особое оружие",
"Exotic Fabricator": "Экзотический фабрикатор",
"Exotic Weapons": "Экзотическое оружие",
"Exotic Weapon": "Экзотическое оружие",
"Exotic Effects": "Экзотический эффект",
"Exotic Effect": "Экзотический эффект",
"Exotic rarity": "Экзотическая редкость",
"Exotic": "Экзотическая (ой)",
"Affinity Effects": "Тип эффекта",
"Affinity Effect": "Бонус к экзотическому оружию",
"Weapons in": "Оружие в",
" Primary Weapons": " Основное оружие",
"Weapons in...": "Оружие в...",
"Weapons": "Оружие",
" weapon.": " оружием.",
"-All": "- Все",
"- All": "- Все",
" except": " кроме",
" and ": " и ",
" rarity": " редкости",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
// Фортнайт

"This page is under construction": "Эта страница находится в активной стадии разработки",
"Please refrain from editing the page if another user is actively doing so as to avoid edit conflicts": "Пожалуйста, воздерживайтесь от редактирования страницы, если другой пользователь активно это делает, чтобы избежать конфликтов правок",
"This page is a ": "Эта страница — ",
"Some content on this page may be missing or incomplete, you can help by": "Некоторые материалы на этой странице могут отсутствовать или быть неполными, вы можете помочь, ",
"stub": "заготовка",
" and Behavior": " и поведение",
"Battle Pass": "Боевой пропуск",
"Chapter": "Глава",
"Ch. ": "гл. ",
"Mini-Season ": "Мини-Сезон ",
"Springfield Island": "Остров Спрингфилд",
"Islands": "Острова",
"Island": "Остров",
"Battle Royale": "Королевская Битва",
"Sprites": "Спрайты",
"In-Game": "В-Игре",
"Lore": "Предыстория",
" it!": " его!",
"expanding": "расширив",
"Extraction Sites": "Точки эвакуации",
"short for ": "коротко от ",
"Exfiltration": "Эксфильтрация",
// "exfil": "эвакуация",



"Sprite Chests": "Сундуки со спрайтами",
"Локации с названием": "Локации с названиями",
"Change Avatar": "Сменить аватар",
"Change Wishlist Background": "Сменить фон",
"Select your new background": "Выбрать новый фон",
"Dashboard": "Моя страница",
"Settings": "Настройки",
"Subscriptions": "Подписки",
"Contact": "Контакты",
"About": "О сайте",
"Privacy": "Приватность",
"Terms": "Правила",
"Verify you are human": "Потверди, что ты человек",
"Create new account": "Создать новый аккаунт",
"Notifications": "Уведомления",


"Design a Sprite": "Дизайн спрайтов",
"Shop": "Магазин",

"My Wishlist": "Мой белый список",
"My Locker": "Мои блокировки",
"Leaks": "Сливы",
"Most Used": "Последнее использованное",
"Free Fortnite Cosmetics": "Бесплатная Fortnite косметика",
"Cosmetic Stats": "Статистика косметики",
"Free Cosmetics": "Бесплатная косметика",
"Cosmetics": "Косметика",
"Daily Jam Tracks": "Ежедневные джем треки",
"Stats": "Статистика",
"2025 Wrapped": "",
"Pro ": "Про ",
"XP Calculator": "Калькулятор XP",
"Map Evolution": "Эволюция карт",
"Map Rotation": "Ротация карт",
"Map": "Карта",
"Display Name": "Отображаемое имя",
"Reload": "Перезарядка",
"Blitz": "Блитц",
"Current Rotation": "Текущая ротация",
"Ends in": "Заканчивается через",
"Ends": "Заканчивается",

"0h ": "0 ч ",
"1h ": "1 ч ",
"2h ": "2 ч ",
"3h ": "3 ч ",
"4h ": "4 ч ",
"5h ": "5 ч ",
"6h ": "6 ч ",
"7h ": "7 ч ",
"8h ": "8 ч ",
"9h ": "9 ч ",
"10h ": "10 ч ",
"11h ": "11 ч ",
"12h ": "12 ч ",
"13h ": "13 ч ",
"14h ": "14 ч ",
"15h ": "15 ч ",
"16h ": "16 ч ",
"17h ": "17 ч ",
"18h ": "18 ч ",
"19h ": "19 ч ",
"20h ": "20 ч ",
"21h ": "21 ч ",
"22h ": "22 ч ",
"23h ": "23 ч ",
"24h ": "24 ч ",

"0m": "0 мин",
"1m": "1 мин",
"2m": "2 мин",
"3m": "3 мин",
"4m": "4 мин",
"5m": "5 мин",
"6m": "6 мин",
"7m": "7 мин",
"8m": "8 мин",
"9m": "9 мин",
"10m": "10 мин",
"11m": "11 мин",
"12m": "12 мин",
"13m": "13 мин",
"14m": "14 мин",
"15m": "15 мин",
"16m": "16 мин",
"17m": "17 мин",
"18m": "18 мин",
"19m": "19 мин",
"20m": "20 мин",
"21m": "21 мин",
"22m": "22 мин",
"23m": "23 мин",
"24m": "24 мин",
"25m": "25 мин",
"26m": "26 мин",
"27m": "27 мин",
"28m": "28 мин",
"29m": "29 мин",
"30m": "30 мин",
"31m": "31 мин",
"32m": "32 мин",
"33m": "33 мин",
"34m": "34 мин",
"35m": "35 мин",
"36m": "36 мин",
"37m": "37 мин",
"38m": "38 мин",
"39m": "39 мин",
"40m": "40 мин",
"41m": "41 мин",
"42m": "42 мин",
"43m": "43 мин",
"44m": "44 мин",
"45m": "45 мин",
"46m": "46 мин",
"47m": "47 мин",
"48m": "48 мин",
"49m": "49 мин",
"50m": "50 мин",
"51m": "51 мин",
"52m": "52 мин",
"53m": "53 мин",
"54m": "54 мин",
"55m": "55 мин",
"56m": "56 мин",
"57m": "57 мин",
"58m": "58 мин",
"59m": "59 мин",
"60m": "60 мин",
"June ": "Июнь ",
"th, 2025": ", 2025",
"th, 2026": ", 2026",


"Quests": "Квесты",
"John Wick Dog": "Собака Джон Уика",
"Stealth Guardian": "Соберите стража",
"Arms": "Руки",
"Torso": "Торс",
"Helmet": "Шлем",
"The Battlewoods": "Боевуд",
"The battlewoods": "Боевуд",
"Port-a-Potty": "Портативный туалет",
"Spawns": "Метки интереса",
"Vaults": "Карточки и ключи",
"gold outline = 100% spawn rate": "Золотой контур = 100% шанс появления",
"Teleporters": "Телепортеры",
"Спрятаться": "Спрятать",
"Rare Chests": "Редкий сундук",
"Vending Machines": "Торговые автомат",
"Service Stations": "Автозаправочные станции",
"Slurp Trucks": "Фургон возрождения",
"Bushes": "Куст",
"Job Boards": "Доски с работой",
"Supply Drop": "Снижение запасов",
"Treasure": "Сокровище",
"TrailSmasher": "Внедорожник",
"Whiplash": "Спортивный автомобиль",
"Fishing Spots": "Рыболовные места",
"Dumpsters": "Мусорные контейнеры",
"Cash Registers": "Кассовые аппараты",










"Water Sprite:": "Дух воды",
"Earth Sprite": "Дух земли",
"Fire Sprite": "Дух огня",
"Air Sprite": "Air Sprite нет",
"Fishy Sprite": "Рыбный дух карась",
"Duck Sprite": "Утиный дух",
"Demon Sprite": "Демонический дух",
"Ghost Sprite": "Призрачный дух",
"King Sprite": "Король-дух",
"Striker Sprite": "Ударный дух",
"Aura Sprite": "Дух ауры",
"Punk Sprite": "Бунтарский дух ",
"Dream Sprite": "Сонный дух",
"Boss Sprite": "Дух босса",
"Seven Sprite": "Seven Sprite неть",
"Zero Point Sprite": "Дух эпицентра Нулевая точка",
"Grim Sprite": "Grim Sprite нет",
"Burnt Peanut": "Арахис",
"Gold": "Золотой",
"Gummy": "Мармеладный",
"Galaxy": "Галактический",
" Holofoil": "",
" Gem": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"": "",
"Locations": "Локации",
// Не трогать конец
"Cutscenes": "Видеосцены"
};

// Функция замены текста
    function translateNode(node) {
        if (!node || node.nodeType !== Node.TEXT_NODE) return;

        let text = node.textContent;
        let changed = false;

        for (let [eng, ru] of Object.entries(translations)) {
            if (text.includes(eng)) {
                text = text.replace(new RegExp(eng.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), ru);
                changed = true;
            }
        }

        if (changed) {
            node.textContent = text;
        }
    }

// Обход всех текстовых узлов
    function walkAndTranslate(root) {
        const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null, false);
        let node;
        while ((node = walker.nextNode())) {
            translateNode(node);
        }
    }

// Запуск перевода
    function startTranslation() {
        walkAndTranslate(document.body);

 // Наблюдатель за динамическим контентом (Fandom часто подгружает)
        const observer = new MutationObserver((mutations) => {
            for (let mutation of mutations) {
                if (mutation.addedNodes.length) {
                    mutation.addedNodes.forEach(node => {
                        if (node.nodeType === Node.ELEMENT_NODE) {
                            walkAndTranslate(node);
                        }
                    });
                }
            }
        });

        observer.observe(document.body, { childList: true, subtree: true });
    }

// Запуск после загрузки страницы
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', startTranslation);
    } else {
        startTranslation();
    }

})();
