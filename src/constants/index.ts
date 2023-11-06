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
    mongodb,
    git,
    figma,
    docker,
    yandex,
    cloud,
    wb,
    carrent,
    jobit,
    tripguide,
    threejs,
} from '../assets';

export const navLinks = [
    {
        id: 'about',
        title: 'Общее',
    },
    {
        id: 'study',
        title: 'Обазование',
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
    {
        name: 'HTML 5',
        icon: html,
    },
    {
        name: 'CSS 3',
        icon: css,
    },
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
        name: 'MongoDB',
        icon: mongodb,
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
        name: 'Car Rent',
        description:
            'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
        tags: [
            {
                name: 'react',
                color: 'blue-text-gradient',
            },
            {
                name: 'mongodb',
                color: 'green-text-gradient',
            },
            {
                name: 'tailwind',
                color: 'pink-text-gradient',
            },
        ],
        image: carrent,
        source_code_link: 'https://github.com/',
    },
    {
        name: 'Job IT',
        description:
            'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
        tags: [
            {
                name: 'react',
                color: 'blue-text-gradient',
            },
            {
                name: 'restapi',
                color: 'green-text-gradient',
            },
            {
                name: 'scss',
                color: 'pink-text-gradient',
            },
        ],
        image: jobit,
        source_code_link: 'https://github.com/',
    },
    {
        name: 'Trip Guide',
        description:
            'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
        tags: [
            {
                name: 'nextjs',
                color: 'blue-text-gradient',
            },
            {
                name: 'supabase',
                color: 'green-text-gradient',
            },
            {
                name: 'css',
                color: 'pink-text-gradient',
            },
        ],
        image: tripguide,
        source_code_link: 'https://github.com/',
    },
];

export { services, technologies, experiences, testimonials, projects };
