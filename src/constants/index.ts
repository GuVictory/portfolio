import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    git,
    figma,
    docker,
    yandex,
    cloud,
    wb,
    mtsBot,
    holy2023,
    thCourse,
    threejs,
    mailru,
    pract,
    mgtu,
    psql,
    ts,
} from '../assets';

export const navLinks = [
    {
        id: 'about',
        title: 'Общее',
    },
    {
        id: 'study',
        title: 'Образование',
    },
    {
        id: 'work',
        title: 'Опыт',
    },
    {
        id: 'contact',
        title: 'Контакты',
    },
];

const services = [
    {
        title: 'Веб-разработка и 3D Графика',
        icon: web,
    },
    {
        title: 'Системный анализ',
        icon: mobile,
    },
    {
        title: 'Сопровождение it проектов',
        icon: backend,
    },
    {
        title: 'Создание обучающих материалов',
        icon: creator,
    },
];

const technologies = [
    // {
    //     name: 'HTML 5',
    //     icon: html,
    // },
    // {
    //     name: 'CSS 3',
    //     icon: css,
    // },
    {
        name: 'JavaScript',
        icon: javascript,
    },
    {
        name: 'TypeScript',
        icon: typescript,
    },
    {
        name: 'React JS',
        icon: reactjs,
    },
    {
        name: 'Redux Toolkit',
        icon: redux,
    },
    {
        name: 'Tailwind CSS',
        icon: tailwind,
    },
    {
        name: 'Node JS',
        icon: nodejs,
    },
    {
        name: 'PostgreSQL',
        icon: psql,
    },
    {
        name: 'Three JS',
        icon: threejs,
    },
    {
        name: 'git',
        icon: git,
    },
    {
        name: 'figma',
        icon: figma,
    },
    {
        name: 'docker',
        icon: docker,
    },
    {
        name: 'TeamCity',
        icon: ts,
    },
];

const experiences = [
    {
        title: 'Системный аналитик',
        company_name: 'Wildberries',
        icon: wb,
        iconBg: '#52257a',
        date: 'Август 2023 - настоящее',
        points: [
            'Cовместно с разработкой занималаюсь оптимизацией кодовой базой мобильного приложения и бека, помогла ускорить время загрузки приложения при слабом интернете более чем на 20%',
            'Описываю и поддерживаю в актуальном состоянии документрацию и контакты взаимодействия.',
            'Завожу задачи на бэк и фронт для реализации того или иного функционала (в случае работы с бэком, это реализация или доработка каких-либо методов)',
            'Консультирую разработчиков с технической стороны по реализуемой продуктовой логике, консультирую бизнес юнит по реализуемой продуктовой логике - дорого или нет реализовать тот или иной функционал, можно ли его оптимизировать',
            'Помогаю проводить тестирование продуктовых гипотез и запускать AB тесты.',
        ],
    },
    {
        title: 'Разработчик интерфесов',
        company_name: 'Yandex Cloud',
        icon: cloud,
        iconBg: '#425bad',
        date: 'Май 2021 - Сентябрь 2022',
        points: [
            'Создавала интерфейсы (TypeScript, React, Redux) в сервисе Yandex Tracker.',
            'Принимала участие в кодревью и предоставляла конструктивную обратную связь другим разработчикам.',
            'Автоматизировала процессы (TeamCity, Yandex Cloud, Yandex Tracker).',
            'Планировала сроки реализации функциональности.',
            'Принимала участие в разработке мобильного приложения сервиса внутри webview обвязки.',
        ],
    },
    {
        title: 'Младший разработчик интерфейсов',
        company_name: 'Yandex',
        icon: yandex,
        iconBg: '#ad3b23',
        date: 'Ноябрь 2020 - Апрель 2021',
        points: [
            'Создавала интерфейсы (TypeScript, React, Redux) в сервисе Yandex Forms',
            'Реализовывала адаптивный дизайн и обеспечивала кроссбраузерную совместимост.',
            'Принимала участие в кодревью и предоставляла конструктивную обратную связь другим разработчикам.',
            'Помогала в оценке внедрения продуктовых фичей.',
        ],
    },
];

const studies = [
    {
        title: 'Вычислительная математика и компьютерные науки',
        field: 'Факультет: Фундаментальные науки',
        place: 'МГТУ им Н. Э. Баумана',
        level: 'Бакалавриат',
        icon: mgtu,
        iconBg: '#9e9e9e',
        date: 'Сентябрь 2017 - Июль 2021',
    },
    {
        title: 'Менеджер проектов',
        place: 'Яндекс Практикум',
        level: 'Повышение квалификации',
        icon: pract,
        iconBg: '#424242',
        date: 'Октябрь 2021 - Апрель 2022',
    },
    {
        title: 'Архитектор высоконагруженных систем',
        place: 'Технопарк Mail.ru',
        level: 'Повышение квалификации',
        icon: mailru,
        iconBg: '#e3e3e3',
        date: 'Сентябрь 2018 - Май 2020',
    },
];

const testimonials = [
    {
        testimonial:
            'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
        name: 'Sara Lee',
        designation: 'CFO',
        company: 'Acme Co',
        image: 'https://randomuser.me/api/portraits/women/4.jpg',
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: 'Chris Brown',
        designation: 'COO',
        company: 'DEF Corp',
        image: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: 'Lisa Wang',
        designation: 'CTO',
        company: '456 Enterprises',
        image: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
];

const projects = [
    {
        name: 'Курс по Three.js',
        description:
            'Это видео-курс по началу работы с three.js. Здесь вы получите основы для начала своего приключения с этим великолепным инструментом, а в дальнейшем и более прокаченные знания для создания уже сложных проектов. Вы изучите подробно все аспекты, от базовых понятий до более продвинутых.',
        tags: [
            {
                name: 'контент',
                color: 'pink-text-gradient',
            },
        ],
        image: thCourse,
        source_code_link:
            'https://dzen.ru/suite/82129974-5f56-4c3f-a6e8-058dc3ec64ea',
    },
    {
        name: 'Three.js: синхронизация звука и графики',
        description:
            'Доклад про совмещение звука и визуализации в единую эмоциональную и кинематографичную сцену. Я рассмотрела увлекательное сочетание трехмерной графики и звука, используя возможности Three.js и Audio API.',
        tags: [
            {
                name: 'доклад',
                color: 'blue-text-gradient',
            },
        ],
        image: holy2023,
        source_code_link:
            'https://holyjs.ru/talks/c2c2f17cc0ad498c846d474d4ff9de2b/?referer=%2Fschedule%2Ftopics%2F#topic-11',
    },
    {
        name: 'MTS Pay Bot',
        description:
            'Проект - заказная разработка для компании MTS. Основная идея - дать возможность жителям Москвы оплачивать налоги и благотворительность при помощи webapp внутри telegram.',
        tags: [
            {
                name: 'проект',
                color: 'green-text-gradient',
            },
        ],
        image: mtsBot,
        source_code_link: 'https://github.com/aabounegm/MTS-Telegram-bot',
    },
];

export { services, technologies, experiences, testimonials, projects, studies };
