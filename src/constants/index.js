import { 
    linkedin
    , github
    , instagram
    , laravel
    , livewire
    , mysql
    , php
    , reactjs
    , tailwind
    , javascript
    , bootstrap
    , trips
    , todoapp
    , hoobank

} from '../assets'

export const navLinks = [
    {
        id: 'home',
        titleEn: 'Home',
        titleEs: 'Inicio',
        visible:true,
    },
    {
        id: 'about',
        titleEn: 'About',
        titleEs: 'Acerca de',
        visible:true,
    },
    {
        id: 'skills',
        titleEn: 'Skills',
        titleEs: 'Habilidades',
        visible:true,
    },
    {
        id: 'experiences',
        titleEn: 'Experiences',
        titleEs: 'Experiencia',
        visible:true,
    },
    {
        id: 'portfolio',
        titleEn: 'Portfolio',
        titleEs: 'Portafolio',
        visible:true,
    },

    {
        id: 'testimonials',
        titleEn: 'Testimonials',
        titleEs: 'Referencias',
        visible:false,
    },
    {
        id: 'contact',
        titleEn: 'Contact',
        titleEs: 'Contanto',
        visible:true,
    },
];

export const homeInfo = {
        // information home
        shortInfoEn : "I'm a Systems Engineer, specializing in Fullstack web development with expertise in designing and building administrative systems and websites that meet specific client requirements.",
        shortInfoEs : "Soy Ingeniero en Sistemas, especializado en el desarrollo web Fullstack con experiencia en la creación de sistemas administrativos y sitios web adaptados a las necesidades específicas de los clientes.",

        shortPhraseEn : "Creator of innovative digital solutions.",
        shortPhraseEs : "Creador de soluciones digitales e innovadoras.",

        // text for button of contact
        buttonEn : "Contact me!",
        buttonEs : "Contactame!",
}

export const aboutInfo = 
    {
        // information home
        infoEn : "I'm a Systems Engineer specializing in Fullstack web development with expertise in designing and building administrative systems and websites that meet specific client requirements.",
        infoEs : `Cuento con más de 9 años de experiencia en el ámbito tecnológico centrados en el Desarrollo como Backend, Frontend, Base de datos, Administración y Gestión de versiones, haciendo uso de tecnologías como Php, Laravel Framework, Laravel Livewire, Javascript, AlpineJS, VueJs, Bootstrap, Bulma, TailwindCSS, MySQL, PostgresSQL, HTML, CSS, PHPMyAdmin, Git, GiyHub, GitLab, Bitbucket. <br> holas`,

        // text for button of contact
        buttonEn : "Resume CV",
        buttonEs : "Resumen CV",

};

export const socialMediaIcons = [
    {
        id : 'icon-1',
        name : 'linkedin',
        url : 'https://www.linkedin.com/in/reniervargas1989/',
        img : linkedin,
        visible: true,
    },
    {
        id : 'icon-2',
        name : 'github',
        url : 'https://github.com/renier1989',
        img : github,
        visible: true,
    },
    {
        id : 'icon-3',
        name : 'instagram',
        url : 'https://www.instagram.com/colossus3dart/',
        img : instagram,
        visible: false,
    },
];

export const skills = [
    {
        id: 'logo-1',
        title: 'Laravel',
        yearsEn: '5 Years',
        yearsEs: '5 Años',
        stat: '90',
        img: laravel,
        visible : true,
        current : true,
    },
    {
        id: 'logo-2',
        title: 'TailwindCss',
        yearsEn: '1 Year',
        yearsEs: '1 Año',
        stat: '70',
        img: tailwind,
        visible : true,
        current : true,
    },
    {
        id: 'logo-3',
        title: 'Javascript',
        yearsEn: '4 Years',
        yearsEs: '4 Años',
        stat: '80',
        img: javascript,
        visible : true,
        current : false,
    },
    {
        id: 'logo-4',
        title: 'MySql',
        yearsEn: '7 Years',
        yearsEs: '7 Años',
        stat: '94',
        img: mysql,
        visible : true,
        current : true,
    },
    {
        id: 'logo-5',
        title: 'php',
        yearsEn: '8 Years',
        yearsEs: '8 Años',
        stat: '95',
        img: php,
        visible : true,
        current : false,
    },
    {
        id: 'logo-6',
        title: 'ReactJs',
        yearsEn: '1 Years',
        yearsEs: '1 Años',
        stat: '60',
        img: reactjs,
        visible : true,
        current : true,
    },
    {
        id: 'logo-7',
        title: 'Livewire',
        yearsEn: '2 Years',
        yearsEs: '2 Años',
        stat: '91',
        img: livewire,
        visible : true,
        current : true,
    },
    {
        id: 'logo-8',
        title: 'Bootstrap',
        yearsEn: '5 Years',
        yearsEs: '5 Años',
        stat: '92',
        img: bootstrap,
        visible : true,
        current : false,
    },
];

export const portfolio = [
    {
        id:'project-1',
        img: trips,
        titleEn: 'Page Trips',
        titleEs: 'Pagina de Viajes',
        contentEn: 'This is a little web page that I created when I was learing to use TailwindCss.',
        contentEs: 'Esta esa una pagina simple que cree cuando estaba aprendiendo a usar TailwindCss.',
        visible: true,
        link:'https://reniervargas.com/trips/',
        code_link:'https://github.com/renier1989/trips',
        tech: [
            {
                id:'tech-1',
                name:'HTML'
            },
            {
                id:'tech-2',
                name:'NodeJs'
            },
            {
                id:'tech-3',
                name:'TailwindCss'
            },
        ],
    },
    {
        id:'project-2',
        img: todoapp,
        titleEn: 'Todo App',
        titleEs: 'App de Tareas',
        contentEn: 'A little web page I made for learing and practice some cool things about ReactJs.',
        contentEs: 'Una pagina simple que hice para aprender y practicar algunas cosas geniales de ReactJs.',
        visible: true,
        link:'https://reniervargas.com/todo-app/',
        code_link:'https://github.com/renier1989/todo-app',
        tech: [
            {
                id:'tech-1',
                name:'ReactJS',
            },
            {
                id:'tech-2',
                name:'NodeJs',
            },
            {
                id:'tech-3',
                name:'TailwindCss',
            },
            {
                id:'tech-4',
                name:'HTML',
            },
        ],
    },
    {
        id:'project-3',
        img: hoobank,
        titleEn: 'HooBank',
        titleEs: 'HooBank',
        contentEn: 'A web page that I created using ReactJs and TailwindCss to practice both technologies. It looks awesome! ',
        contentEs: 'Una pagina que cree usando ReactJs y TailwindCss para practicar ambas tecnologias. Se ve genial! ',
        visible: true,
        link:'http://reniervargas.com/hoobank/',
        code_link:'https://github.com/renier1989/hoobank',
        tech: [
            {
                id:'tech-1',
                name:'ReactJS',
            },
            {
                id:'tech-2',
                name:'NodeJs',
            },
            {
                id:'tech-3',
                name:'TailwindCss',
            },
            {
                id:'tech-4',
                name:'HTML',
            },
            
        ],
    },
    {
        id:'project-4',
        img: hoobank,
        titleEn: 'HooBank',
        titleEs: 'HooBank',
        contentEn: 'A web page that I created using ReactJs and TailwindCss to practice both technologies. It looks awesome! ',
        contentEs: 'Una pagina que cree usando ReactJs y TailwindCss para practicar ambas tecnologias. Se ve genial! ',
        visible: false,
        link:'http://reniervargas.com/hoobank/',
        code_link:'https://github.com/renier1989/hoobank',
        tech: [
            {
                id:'tech-1',
                img:'img-tech1'
            }
        ],
    },
];

export const experiences = [
    {
        id: 'experience-1',
        nameJobEn: 'FENACREP',
        nameJobEs: 'FENACREP',
        datesEn : 'Jul 2020 - Present',
        datesEs : 'Jul 2020 - Actual',
        positionEn: 'Programmer Analyst',
        positionEs: 'Analista Programador',
        roles: [
            {
                id:'role-1',
                descriptionEn : 'Technical analysis and documentation: Conduct technical analysis of functional requirements and document them to establish the methodology to follow.',
                descriptionEs : 'Análisis y documentación técnica: Realizar el análisis técnico de los requerimientos funcionales y documentarlos para establecer la metodología a seguir.',
            },
            {
                id:'role-2',
                descriptionEn : 'Development and implementation: Model databases, design prototypes, develop code, prepare pre-production environments and prepare program documentation to meet requirements and provide a good user experience.',
                descriptionEs : 'Desarrollo y implementación: Modelar bases de datos, diseñar prototipos, desarrollar la codificación, preparar los ambientes de preproducción y preparar la documentación de los programas para satisfacer los requerimientos y ofrecer una buena experiencia de usuario.',
            },
            {
                id:'role-3',
                descriptionEn : 'Maintenance and technical support: Provide maintenance and technical support to existing applications and fulfill any other functions assigned by the Chief Information Technologies Officer.',
                descriptionEs : 'Mantenimiento y soporte técnico: Brindar mantenimiento y soporte técnico a las aplicaciones existentes y cumplir con cualquier otra función asignada por el Jefe de Tecnologías de Información.',
            },
        ]
    },
    {
        id: 'experience-2',
        nameJobEn: 'Pacific Institute',
        nameJobEs: 'Instituto Pacífico',
        datesEn : 'Apr 2018 - Jul 2020',
        datesEs : 'Abr 2020 - Jul 2020',
        positionEn: 'Web Developer',
        positionEs: 'Desarrollador Web',
        roles: [
            {
                id:'role-1',
                descriptionEn : 'Web Development Analyst: responsible for technical analysis of functional requirements and documentation of methodology to follow.',
                descriptionEs : 'Analista de desarrollo web: responsable del análisis técnico de los requerimientos funcionales y la documentación de la metodología a seguir.',
            },
            {
                id:'role-2',
                descriptionEn : 'Web Developer: in charge of development and programming of both the BackEnd and FrontEnd, using different programming frameworks and version control tools.',
                descriptionEs : 'Desarrollador web: encargado del desarrollo y programación tanto del BackEnd como del FrontEnd, utilizando diferentes frameworks de programación y herramientas de versionado.',
            },
            {
                id:'role-3',
                descriptionEn : 'Database Administrator: responsible for modeling, design and maintenance of databases in MySQL, using tools such as DbDesigner and Navicat.',
                descriptionEs : 'Administrador de bases de datos: responsable de la modelación, diseño y mantenimiento de las bases de datos en MySQL, usando herramientas como DbDesigner y Navicat.',
            },
        ]
    },
    {
        id: 'experience-3',
        nameJobEn: 'Garzon Hypermarket',
        nameJobEs: 'Garzon Hipermercado',
        datesEn : 'Jun 2016 - Nov 2018',
        datesEs : 'Jun 2026 - Nov 2018',
        positionEn: 'Specialist Programmer',
        positionEs: 'Especialista Programador',
        roles: [
            {
                id:'role-1',
                descriptionEn : 'Internal Module Developer: responsible for the implementation of internal modules on the IntraGarzon website using PHP, JavaScript, HTML, CSS and Bootstrap for the internal employees of the company.',
                descriptionEs : 'Desarrollador de módulos internos: responsable de la implementación de módulos internos en la página de IntraGarzon utilizando PHP, JavaScript, HTML, CSS y Bootstrap para el personal interno de la empresa.',
            },
            {
                id:'role-2',
                descriptionEn : 'Hosting and Domain Administrator: responsible for managing and maintaining hosting and domains on GoDaddy.',
                descriptionEs : 'Administrador de hosting y dominios: encargado de la administración y mantenimiento de hosting y dominios en GoDaddy.',
            },
            {
                id:'role-3',
                descriptionEn : 'Database and Web Server Administrator: responsible for managing and maintaining databases in SQL Server and MySQL, as well as web servers in internal and external Linux environments within the company. This person is also responsible for analyzing, maintaining and updating sales at different branches through SQL queries and transactions handling in SAP environments.',
                descriptionEs : 'Administrador de bases de datos y servidores web: responsable de la administración y mantenimiento de bases de datos en SQL Server y MySQL, así como de los servidores web en entornos Linux de manejo interno y externo en la empresa. También se encarga del análisis, mantenimiento y actualización de ventas en diferentes sucursales a través de consultas y sentencias SQL y manejo de transacciones SAP.',
            },
        ]
    },
];