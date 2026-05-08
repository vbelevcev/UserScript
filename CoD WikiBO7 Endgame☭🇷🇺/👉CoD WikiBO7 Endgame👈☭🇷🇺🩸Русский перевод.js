// ==UserScript==
// @icon https://github.com/SkyK0T/SkyTV/blob/main/skykotik.gif?raw=true
// @name         👉CoD WikiBO7 Endgame👈☭🇷🇺🩸Русский перевод
// @namespace    https://callofduty.fandom.com/wiki/Endgame_(Black_Ops_7)
// @version      1.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0
// @description  Русская локализация для руководства с сайта CoD Wiki Endgame Black Ops 7 Endgame.🩸Постепенно буду добавлять, и то что неперевено.
// @author       vbelevcev
// @match        https://callofduty.fandom.com/wiki/Endgame_(Black_Ops_7)*
// @match        https://callofduty.fandom.com/wiki/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function () {
'use strict';
// https://callofduty.fandom.com/ru/wiki
const translations = {
// Описание
"Overview": "Обзор",
"The subject of this article appears in": "Тема этой статьи появляется в",
"This article was previously featured": "Ранее эта статья была представлена",

"The final proving ground": "Последний испытательный полигон",
"Survive,": "Выживай,",
"adapt,": "адаптируйся",
" uncover what really at stake": " выясняй, что на самом деле поставлено на карту",

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

"'s": "",
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
"DAWG Escort": "🩸Сопровождение Робопса🩸",
"Escort the DAWG to the Extraction Site": "Доставьте робопса в точку эвакуации",

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



//
"The ultimate objective of any run is to kill ": "Конечная цель любого забега - убить ",
"Gideon Falkner": "Доктор Фолклер",
" located on an island facility within the Tier IV zone": " он находится на острове зоне IV",
"Doing so will reward the player greatly, including with an ": "За это игрок будет щедро вознагражден, в том числе ",



// Разлом сбоя

"Glitch Fractures are unique activities that take place off the Avalon map": "Разломы сбоя - это уникальное событие, которое происходят за пределами карты Авалона",
"Following the elimination of a Guild Strike Boss the location of a Glitch Fracture will become highlighted on players maps": "После устранения босса Гильдии, местоположение входа в Разлома сбоя будет выделено на карте для игрока",
"Interacting with it will transport the player and all squad members into the activity": "Взаимодействие с ним, перенесёт игрока и всех членов отряда в разлом",

"Glitch Fractures utilize spaces from the main campaign to challenge players with multiple objectives in a row of escalating difficulty": "Разлом сбоя использует места из основной кампании, чтобы бросить вызов игрокам с несколькими заданиями с возрастающей сложностью",
"If players complete the Glitch Fracture,": "Если игроки завершат прохождение Разлом сбоя,",
" they immediately exfil and are rewarded with a ": " они завершат бой и выйдут из игры и получат в награду ",
"Once revealed, Glitch Fractures remain on the map and can be replayed indefinitely": "После прохождения, метка Разлом сбоя остаётся на карте бесконечно",

"Glitch Fractures": "Разлом сбоя",

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
"": "",
"": "",
"": "",


// Главная способность
"Major Abilities": "Главная способность",

"Crash Cart": "Реаниматор",
"Instantly revive downed squadmates within range, and provide temporary invulnerability for a short time. Can be used to self-revive when downed.": "Мгновенно реанимирует тяжело раненных союзников в пределах досегаемости и обеспечивает временную неуязвимость на короткое время. Можно использовать для самореанимации при тяжёлом ранении.",

"Active Camo": "Активный камуфляж",
"Become nearly invisible for a short duration. Gunfire temporarily reveals your temporarily.": "На короткое время вы становитесь почти невидимыым. Стрельба временно раскрывает вас.",

"Ballistic Shell": "Баллистический панцирь",
"Deploy an energy shield that blocks incoming enemy fire.": "Разверните энергетический щит,который блокирует огонь противника.",

"Hand Cannon": "Крупнокалиберный пистолет",
"Powerful high damage handgun. Accurate at range.": "Мощный пистолет с высоким уроном. Точен на дальних дистанциях",

"Vision Pulse": "Видеоимпульс",
"Send out a pulse which visually tags enemies through walls for your squad. Tagged enemies take increased damage.": "Отправьте видеоимпульс, который визуально отмечает врагов сквозь стены для вашего отряда. Отмеченные враги получают увеличенный урон.",

"War Machine": "Машина войны",
"Powerful single shot grenade launcher. Large explosion radius.": "Мощный однозарядный гранатомёт. Большой радиус поражения.",

"Shadow Break": "Теневой прорыв",
"Create an energy warping field that teleports and damages enemies.": "Создайте искажающее энергию поле, которое телепортирует и наносит урон врагам.",

"Drone Pod": "Дрон-станция",
"Deployable device that launches aerial drones. Drones seek out enemies and explode.": "Размещаемое устройство, запускающее воздушные дроны,которые ищут врагов и взрываются.",

"Sentinel Protocol": "Протокол Часовой",
"Call in an armed Guild robot to fight enemies and assist you and your team. Can revive downed teammates when downed and do a small area of effect attack when swarmed.": "Вызовите вооружённого робота Гильдии,чтобы сражаться с врагами и помогать вам и вашей команде. Может реанимировать тяжелораненных союзников и наносить небольшой урон по области при скоплении врагов.",

"Thermal Spike": "🔥Тепловой всплеск🔥",
"Emit a powerful blast of flames that incinerate enemies. Flames persist in the area for a short duration.": "🔥Выпускает мощный всплеск пламени, который сжигает врагов. 🔥Пламя сохраняется в области на короткое время.🔥Новая специальная способность: Поджигайте врагов с помощью новой способности Thermal Spike Major Ability, наказывая врагов, оказавшихся на пути огня.",
"Complete any 6 Challenges from Week 6 of ": "Завершите 6 испытаний 6 недели ",

// Дополнительная способность
"Minor Abilities": "Дополнительная способность",

"Grappling Hook": "Крюк",
"Grapple to surfaces to escape danger and reach new heights.": "Используйте крюк, чтобы цепляться за поверхности, избегать угроз и достигать новых высот.",

"Portal Grenade": "Портальная граната",
"A grenade that spawns creatures to fight for you. They last a short duration.": "Граната, которая призывает существ, сражающихся на вашей стороне. Существа живут недолго.",

"Kinetic Jump": "Кинетический прыжок",
"Jump to extreme heights. Hold the button to jump higher. Landing stuns nearby enemies.": "Прыгайте экстремально высоко. Удерживайте кнопку, чтобы подпрыгнуть выше. Приземление оглушает ближайших врагов.",

"Flicker": "Мерцание",
"Tap to quickly teleport a short distance in your facing direction. Press and hold to pre-aim. Goes through enemies.": "Нажмите, чтобы быстро телепортироваться на небольшое расстояние (не более 50 метров) в направлении взгляда. Нажмите и удерживайте, чтобы прицелиться. Проходит сквозь врагов",

"Supply Link": "Связь припасов",
"Instantly supplies you and squad with ammo, armor, equipment and a portion of the Major Ability charge.": "Мгновенно пополняйте запасы боеприпасов, брони, снаряжения и часть заряда главной способности (полевой модификации) у себя и членов отряда.",

"Black Hat": "Взломщик",
"Hack enemies, equipment, and vehicles. Hacked targets are disabled, destroyed, or converted to fight for you.": "Взламывайте врагов, снаряжение и транспорт. Взломанные цели выводятся из строя, уничтожаются или переходят под ваш контроль.",

"Blood Burner": "Палач",
"Spawn a mystical motorcycle good for traversal and combat. Running over enemies charges a special area of effect attack.": "Вызовите мистический мотоцикл, подходящий для перемещения и боя. Наезд на врагов заряжает особую атаку, действующую по области.",
"Eliminate 500 Nightmare Zone enemies": "Убейте 500 врагов в кошмарной зоне V",

"Aether Blade": "Эфирный клинок",
"Aether infused throwing knife that hunts down targets. Hit 5 with one toss to recover a portion of its charge.": "Метательный нож, напитанный эфиром, который преследует цели. Попадите в 5 целей одним броском, чтобы восстановить часть заряда.",

"In Endgame: Earn 30000 Power": "или наберите силу 30 000 в Финале",
"In Endgame:": "или в Финале:",
"Get 500 Critical Kills": "Убейте 500 врагов критическими попаданиями в голову",


// Ветвь навыков

"Skill Tracks": "Ветвь навыков",
// "Skill": "Навык",
"Exotic (S1)": "Экзотические навыки (с1)",
"Nightmare (S2R)": "Кошмарные навыки (с2п)",
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
"Stay alive and keep others fighting, heal fast, revive quicker, and fight back from the brink": "👉Бесконечная самореанимация (восстановление 1 минута)👈 Оставайтесь в живых и поддерживайте других бойцов, быстро лечитесь, быстрее возрождайтесь и сражайтесь до последнего.",
"Health Recovery": "Восстановление здоровья",
"Health recovery starts sooner after you stop taking damage": "・ После прекращения получения урона восстановление здоровья начинается быстрее.",

"Last Stand Fighter": "Боец чести",
"Survive Longer in Last Stand": "👉Больше патронов в пистолете👈・ Выживайте дольше в последнем рывке.",
"Upgrades Last Stand Pistol and provides more Ammo": "・ Улучшения пистолета на последнем рывке и большее количество боеприпасов.",

"Agile Handling": "Отличная эргономика",
"Fire your Weapon while Sprinting and walk faster while Aiming Down Sights": "・ Возможность стрелять на бегу и ускоренная ходьба при прицеливании.",

"Heal Faster": "Ускоренное лечение",
"Increases healing speed": "・ Увеличение скорости лечения.",

"Fast Revive": "Быстрая реанимация",
"Revive yourself and your Squad faster": "・ Реанимируйте себя и свой отряд быстрее",
"Revives replenish all health and temporarily boost movement speeds": "・ Реанимации восстанавливают всё здоровье и временно увеличивают скорость перемещения.",

"Off The Floor": "Последние силы",
"Revive yourself when you get a Kill in Last Stand (cooldown between uses)": "・ Самореанимация при убийстве в последнем рывке (требуется время на восстановление между использованиями).",

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
"Base I: Taking melee hits can spawn a Black Hole that damages and displaces enemies": "・ Убийства снаряжением временно повышают скорость перемещения.",

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

"Decoy": "Ложная цель",
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
"Summon powerful allies and turn the tide of battle by amplifying their impact on the battle ground": "",
Призывайте могущественных союзников и переломите ход Битвы, усилив их влияние на поле боя.
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

// ☢️Экзотические навыки👉S1👈Exotic Skill


// ☢️Кошмарные навыки☢️Nightmare Skill☢

// Экзотическое оружие
// "Weapon": "Оружие",
"Torrent": "Поток☢️Torrent",
"Full-auto assault rifle equipped to discharge a relentless stream of gunfire. Affinity for Graviton Rounds.": "Full-auto assault rifle equipped to discharge a relentless stream of gunfire. Affinity for Graviton Rounds. Прицел BaMx зеркальный EAM",

"Flashburst": "Световой залп☢️Flashburst",
"Burst marksman rifle specialized for raining sustained and lethal suppression. Affinity for Frost Rounds": "",

"Redline": "Красная черта☢️Redline",
"Full-auto light machine gun optimized to unleash an onslaught of destruction. Affinity for Mortar Rounds": "💎Автоматический ручной пулемёт, оптимизированный для массового уничтожения.Особенно эффективен миномётными снарядами",

"Ghostmind": "Ghostmind",
"": "",

"Backdrive": "Обратный ход☢️Backdrive 👉s1👈",
"Full-auto submachine gun refined for both aggressive and precise assault. Affinity for Shock Rounds": "💎Автоматический пистолет-пулемёт, оптимизированный для точных и агрессивных штурмовых атак.Особенно эффективен с шоковыми патронами",


"Overcharge": "Перезарядка☢️Overcharge",
"": "",

"Swarmforge": "Кузница роя☢️Swarmforge",
"Full-auto submachine gun adapted for ultra-dynamic and ruthless CQC. Affinity for Photon Rounds": "💎Автоматический пистолет-пулемёт, адаптированный для дмнамичного и безжалостного ближнего боя.Особенно эффективен с фотонными патронами",

"Criticality": "Criticality☢️Критичность",
"": "",

"Hypersurge": "Гипервал☢️Hypersurge",
"": "",

"Malspike": "Malspike",
"": "",

"Neurowall": "Нейростена☢️Neurowall",
"Double-action rifle enhanced for deadly precision. Affinity for Neuro-Disruption Rounds": "💎Самовзводная винтовка повышенной точности. Совместима с нейроразрушающими патронами",

"Zeotrope": "Зеотроп☢️Zeotrope",
"Dual-barrel shotgun modified for aggressive pursuit and execution. Affinity for Frost Rounds": "💎Двухствольный дробовик, модифицированный для агрессивного преследования и уничтожения. Совместим с морозными патронами",

"Barrage": "Шквал☢️Barrage️",
"Full-auto SMG augmented for unrelenting assault. Affinity for Shrapnel Rounds": "💎Автоматический пистолет-пулемёт, усиленный для неумолимой атаки. Совместим со шрапнелью.",

"Collateral": "Побочный ущерб🩸Collateral",
"Full-auto assault rifle enhanced with ricochet rounds for widespread lethality. Affinity for Incendiary Rounds": "💎Автоматическая штурмовая винтовка, усиленная рикошетными патронами для широкого поражения целей. Предрасположенность к зажигательным патронам",

"Continuum": "Непрерывность🩸Continuum",
"Bolt-action sniper rifle modified for aggression and potency. Affinity for Graviton Rounds": "💎Снайперская винтовка с продольно-скользящим затвором, оптимизированная для агрессивного боя. Особенно эффективна с гравитонными патронами",

"Pulsebreach": "Разрыв пульса🔴Pulsebreach",
"Burst Marksman Rifle modified for maximum destructive power. Affinity for Shrapnel Rounds": "💎Пехотная винтовка с очередями, модифицированная для максимальной разрушительной силы. Совместима со шрапнельными патронами",

"Reboot": "Перезагрузка",
"Semi-auto pistol augmented for versatility and power. Affinity for Shock Rounds": "💎Полуавтоматический пистолет, усовершенствованный для универсальности и мощности. Совместим с шоковыми патронами.🔴Reboot",

"— In-game description": "— Внутриигровое описание",
"Complete Mission:": "Завершите миссию:",
"Complete a ": "Завершите",

"Black Hole": "Чёрная дыра",
"Big Game": "Большая игра",
"Blast Chain": "Взрывная цепь",
"Blast Shield": "Щит от взрыва",

"Affinity Effects": "Тип эффекта",
"Description": "Описание",
"Season 01": "сезон 1",
"Season 02": "сезон 2",
"Season 03": "сезон 3",
"Season 1": "сезон 1",
"Season 2": "сезон 2",
"Season 3": "сезон 3",
"Season Three": "сезон 3",
"Reloaded": "Перезагрузка",
"Base Weapon": "Тип оружия",
"Unlocked by Default": "Разблокировка по умолчанию",
"Unlock": "Разблокировка",
"wingsuit": "крылатый костюм",
"Wingsuit": "Крылатый костюм",
"Vehicle": "Транспорт",
"Seats": "Места",
"Activities": "Активности",
"Assignments": "Задания",
"World Events": "Мировые события",
"Guild Strike": "👉Удар Гильдии👈",
"Country": "Страна",
"O.S.C.A.R": "О.С.К.А.Р",
"Achievements/Call of Duty: Black Ops 7": "Достижения/Call of Duty: Black Ops 7",
"Achievements/Trophies": "Достижения/трофеи",
"Opening Transcript": "Вступительная транскрипция",
"Exotic Weapons": "Экзотическое оружие",
"Exotic Weapon": "Экзотическое оружие",
"Exotic Effect": "Экзотический эффект",
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
" weapon.": " оружием.",
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
