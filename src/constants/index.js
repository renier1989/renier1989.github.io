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
    , todoappv2
    , pokedux
    , ecomerce
    , cvpage
    , ecoquest
    , citas
    , expenses
    , crypto

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
        id: 'portfolio',
        titleEn: 'Portfolio',
        titleEs: 'Portafolio',
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
        id:'project-99',
        order:99,
        img: trips,
        titleEn: 'Page Trips',
        titleEs: 'Página de Viajes',
        contentEn: 'This is a little web page that I created when I was learing to use TailwindCss.',
        contentEs: 'Esta esa una pagina simple que cree cuando estaba aprendiendo a usar TailwindCss.',
        longContentEs: 'Desarrollé una página web de viajes utilizando solo HTML y TailwindCSS. Este proyecto estático cuenta con un diseño responsivo, amigable para dispositivos móviles, y muestra una selección de destinos turísticos y actividades emocionantes. Mi pasión por los viajes y la experiencia en desarrollo web se unieron para crear una interfaz minimalista y elegante.',
        longContentEn: 'I developed a travel website using only HTML and TailwindCSS. This static project features a responsive design, mobile-friendly layout, showcasing a selection of tourist destinations and exciting activities. My passion for travel and web development expertise came together to craft a minimalist and elegant interface.',
        visible: false,
        visible_port_page: true,
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
        id:'project-98',
        order:98,
        img: todoapp,
        titleEn: 'Todo App',
        titleEs: 'App de Tareas',
        contentEn: 'A little web page I made for learing and practice some cool things about ReactJs.',
        contentEs: 'Una pagina simple que hice para aprender y practicar algunas cosas geniales de ReactJs.',
        longContentEn: 'I developed Todo app, a web application created using ReactJS, JavaScript, Node.js, and TailwindCSS. With a responsive design, it allows you to organize tasks efficiently. It was my first experience with ReactJS and an opportunity to strengthen my skills in TailwindCSS. Simplicity and functionality combined in a single page!',
        longContentEs: 'Desarrolle Todo app, una aplicación web creada con ReactJS, JavaScript, Node.js y TailwindCSS. Con un diseño responsivo, te permite organizar tareas eficientemente. Fue mi primer contacto con ReactJS y una oportunidad para reforzar mis habilidades en TailwindCSS. ¡Simplicidad y funcionalidad en una sola página!',
        visible: false,
        visible_port_page: true,
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
        id:'project-97',
        order:97,
        img: hoobank,
        titleEn: 'HooBank',
        titleEs: 'HooBank',
        contentEn: 'A web page that I created using ReactJs and TailwindCss to practice both technologies. It looks awesome! ',
        contentEs: 'Una página que cree usando ReactJs y TailwindCss para practicar ambas tecnologías. ¡Se ve genial! ',
        longContentEn: 'HooBank is my creation using ReactJS, Node.js, and TailwindCSS, a static web page simulating financial information from a fictional bank. Its responsive design is mobile-friendly, and it allowed me to practice and enhance my skills in both technologies. It efficiently presents static information, making it a great showcase of my knowledge!',
        longContentEs: 'HooBank es mi creación con ReactJS, Node.js y TailwindCSS, una página web estática que simula información financiera de un banco ficticio. Su diseño responsivo es amigable para dispositivos móviles, donde practiqué y reforcé mis habilidades en ambas tecnologías. Presenta información estática de manera ágil y eficiente, ¡una página genial para mostrar mis conocimientos!',
        visible: false,
        visible_port_page: true,
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
        id:'project-1',
        order:1,
        img: cvpage,
        titleEn: 'Personal Web Page',
        titleEs: 'Página web personal',
        contentEn: 'This is my personal website, which I built using ReactJS and TailwindCSS to showcase my skills and portfolio of personal projects.',
        contentEs: 'Esta es mi página web personal, que construí usando ReactJS y TailwindCss para poder mostrar mis habilidades y portafolio de proyectos personales.',
        longContentEn: "This website is my personal space, developed using ReactJS and TailwindCSS to highlight my skills and showcase a collection of personal projects. Here, you can learn more about me, explore my web development experience, see some of the technologies I've used, and get in touch with me directly.",
        longContentEs: 'Esta página web es mi espacio personal, desarrollada utilizando ReactJS y TailwindCSS para destacar mis habilidades y mostrar una colección de proyectos personales. Aquí, podrás conocer más sobre mí, explorar mi experiencia en desarrollo web, ver algunas de las tecnologías que he usado y podrás contactarte conmigo directamente.',
        visible: false,
        visible_port_page: true,
        link:'http://reniervargas.com/',
        code_link:'https://github.com/renier1989/renier1989.github.io',
        tech: [
            {
                id:'tech-1',
                name:'ReactJs'
            },
            {
                id:'tech-2',
                name:'TailwindCSS'
            },
            {
                id:'tech-3',
                name:'Node.js'
            }
        ],
    },
    {
        id:'project-96',
        order:96,
        img: todoappv2,
        titleEn: 'Todo App V.2',
        titleEs: 'App de tareas V.2',
        contentEn: "This is version 2 of my tasks app, where I use new features of ReactJS hooks and delve deeper into Frontend development with this incredible technology.",
        contentEs: 'Esta es la versión de 2 de mi app de tareas, donde uso nuevas funcionalidades de hooks de ReactJS y profundizó más en el desarrollo Frontend con esta increíble tecnología',
        longContentEn: "This is version 2 of my tasks app, where I've incorporated exciting advancements in my skillset. I learned to use ReactJS Hooks, such as useContext and useEffect, taking my Frontend development to another level. Additionally, I've implemented new features like React-router-dom for smoother navigation and an enhanced user experience.",
        longContentEs: 'Esta es la versión 2 de mi aplicación de tareas, donde he incorporado emocionantes novedades en mi arsenal de habilidades. Aprendí a utilizar los Hooks de ReactJS, como useContext y useEffect, lo que ha llevado mi desarrollo Frontend a otro nivel. Además, he implementado nuevas funcionalidades como React-router-dom para una navegación más fluida y una experiencia de usuario mejorada.',
        visible: false,
        visible_port_page: true,
        link:'http://reniervargas.com/react-basic-course/',
        code_link:'https://github.com/renier1989/react-basic-course',
        tech: [
            {
                id:'tech-1',
                name:'ReactJs'
            },
            {
                id:'tech-2',
                name:'CSS'
            },
            {
                id:'tech-3',
                name:'Node.js'
            }
        ],
    },
    {
        id:'project-3',
        order:3,
        img: ecomerce,
        titleEn: 'Ecommerce Simulation',
        titleEs: 'Simulación de  Ecommerce',
        contentEn: "This is version 2 of my tasks app, where I use new features of ReactJS hooks and delve deeper into Frontend development with this incredible technology.",
        contentEs: 'Minimalist website where I put into practice some concepts and new ways of developing with ReactJS and TailwindCSS, implementing routes with React-router-dom and some interesting libraries to achieve the simulation and functionality of some E-commerce pages.',
        longContentEn: "This is a minimalist website where I put into practice various concepts and new ways of development using ReactJS and TailwindCSS. Throughout this process, I strengthened my knowledge of React-router-dom, useContext, useEffect, and other advanced techniques to implement captivating functionalities inspired by E-commerce web pages. The combination of these technologies and libraries allowed me to create a seamless user experience and realistic simulations of diverse E-commerce pages.",
        longContentEs: 'Esta es una página web minimalista donde puse en práctica diversos conceptos y nuevas formas de desarrollo con ReactJS y TailwindCSS. Durante este proceso, estuve fortaleciendo mis conocimientos sobre React-router-dom, useContext, useEffect y otras técnicas avanzadas para implementar fascinantes funcionalidades inspiradas en páginas web de comercio electrónico. La combinación de estas tecnologías y librerías me permitió crear una experiencia de usuario fluida y simulaciones realistas de diversas páginas de Ecommerce.',
        visible: true,
        visible_port_page: true,
        link:'https://reniervargas.com/ecomerce/',
        code_link:'https://github.com/renier1989/ecomerce',
        tech: [
            {
                id:'tech-1',
                name:'ReactJs'
            },
            {
                id:'tech-2',
                name:'TailwindCSS'
            },
            {
                id:'tech-3',
                name:'Node.js'
            }
        ],
    },
    {
        id:'project-4',
        order:4,
        img: citas,
        titleEn: 'Ecommerce Simulation',
        titleEs: 'Citas Pacientes Veterinaria',
        contentEn: "This is version 2 of my tasks app, where I use new features of ReactJS hooks and delve deeper into Frontend development with this incredible technology.",
        contentEs: 'Minimalist website where I put into practice some concepts and new ways of developing with ReactJS and TailwindCSS, implementing routes with React-router-dom and some interesting libraries to achieve the simulation and functionality of some E-commerce pages.',
        longContentEn: "This is a minimalist website where I put into practice various concepts and new ways of development using ReactJS and TailwindCSS. Throughout this process, I strengthened my knowledge of React-router-dom, useContext, useEffect, and other advanced techniques to implement captivating functionalities inspired by E-commerce web pages. The combination of these technologies and libraries allowed me to create a seamless user experience and realistic simulations of diverse E-commerce pages.",
        longContentEs: 'Esta es una página web minimalista donde puse en práctica diversos conceptos y nuevas formas de desarrollo con ReactJS y TailwindCSS. Durante este proceso, estuve fortaleciendo mis conocimientos sobre React-router-dom, useContext, useEffect y otras técnicas avanzadas para implementar fascinantes funcionalidades inspiradas en páginas web de comercio electrónico. La combinación de estas tecnologías y librerías me permitió crear una experiencia de usuario fluida y simulaciones realistas de diversas páginas de Ecommerce.',
        visible: false,
        visible_port_page: true,
        link:'https://reniervargas.com/ecomerce/',
        code_link:'https://github.com/renier1989/ecomerce',
        tech: [
            {
                id:'tech-1',
                name:'ReactJs'
            },
            {
                id:'tech-2',
                name:'TailwindCSS'
            },
            {
                id:'tech-3',
                name:'Node.js'
            }
        ],
    },
    {
        id:'project-5',
        order:5,
        img: expenses,
        titleEn: 'Expense Planner',
        titleEs: 'Planificador de gastos',
        contentEn: "A simple web app to manage expenses by setting a budget, tracking spending in common categories, and editing or deleting expenses. Developed with React.js and CSS.",
        contentEs: 'Una sencilla app web para gestionar gastos mediante un presupuesto, rastrear gastos en categorías comunes y editar o eliminar gastos. Desarrollada con React.js y CSS',
        longContentEn: "This is a simple web application where you can set a budget to manage your expenses more effectively. You can track your spending across common categories, add, edit, and delete expenses. After completing your plan, you can reset the application for a new budget. It was developed using React.js and CSS.",
        longContentEs: 'Esta es una aplicación web sencilla donde puedes establecer un presupuesto para administrar tus gastos de manera más efectiva. Puedes hacer un seguimiento de tus gastos en categorías comunes, agregar, editar y eliminar gastos. Después de completar tu plan, puedes reiniciar la aplicación para comenzar una nueva planificación. Fue desarrollada utilizando React.js y CSS.',
        visible: false,
        visible_port_page: true,
        link:'https://reniervargas.com/expense-track/',
        code_link:'https://github.com/renier1989/expense-track',
        tech: [
            {
                id:'tech-1',
                name:'ReactJs'
            },
            {
                id:'tech-2',
                name:'Css'
            },
            {
                id:'tech-3',
                name:'Node.js'
            }
        ],
    },
    {
        id:'project-6',
        order:6,
        img: crypto,
        titleEn: 'Crypto Quotes',
        titleEs: 'Cotizador de Criptos',
        longContentEn: "Here, you can get quotes for the top 20 cryptocurrencies based on their market value and instantly compare them with a currency of your choice. You'll find quick, valuable information. This app was developed using React.js and Styled Components.",
        longContentEs: 'Aquí, puedes obtener cotizaciones de las 20 principales criptomonedas según su valor de mercado y compararlas al instante con una moneda de tu elección. Encontrarás información rápida y valiosa. Esta aplicación fue desarrollada utilizando React.js y Styled Components.',
        contentEn: "Get instant quotes for the top 20 cryptocurrencies and compare them with your chosen currency. Valuable information at your fingertips.",
        contentEs: 'Obtén cotizaciones al instante de las 20 principales criptomonedas y compáralas con la moneda de tu elección. Información valiosa al alcance de tu mano.',
        visible: true,
        visible_port_page: true,
        link:'https://reniervargas.com/expense-track/',
        code_link:'https://github.com/renier1989/expense-track',
        tech: [
            {
                id:'tech-1',
                name:'ReactJs'
            },
            {
                id:'tech-2',
                name:'Styled Components'
            },
            {
                id:'tech-3',
                name:'Node.js'
            }
        ],
    },
    {
        id:'project-7',
        order:7,
        img: pokedux,
        titleEn: 'PokeDux Web Page',
        titleEs: 'Página web PokeDux',
        contentEn: "With this page, I was exploring and expanding my knowledge in React. Here, I had my first encounter with Redux and its lifecycle. I learned to create and use middlewares and put into practice concepts of immutability, and I also implemented Redux Toolkit.",
        contentEs: 'Con esta página estaba explorando y extendiendo más mis conocimientos en React, aquí tengo un primer contacto con Redux y su ciclo de vida, aprendí a crear y usar middlewares, pongo en práctica conceptos de inmutabilidad e implemente ReduxToolkIit.',
        longContentEn: "With this page, I was dedicated to strengthening my knowledge in React and Redux. It was a valuable first encounter with Redux, where I learned about its lifecycle and how to create and use middlewares. Additionally, I put into practice essential concepts of immutability, which proved crucial when consuming APIs and efficiently managing the application state. The implementation of Redux Toolkit also enriched my experience in state management.",
        longContentEs: 'Con esta página, estaba dedicado a fortalecer mis conocimientos en React y Redux. Fue un valioso primer contacto con Redux, donde aprendí sobre su ciclo de vida y cómo crear y utilizar middlewares. Además, puse en práctica importantes conceptos de inmutabilidad, lo cual resultó fundamental al consumir APIs y manejar el estado de la aplicación de manera eficiente. La implementación de Redux Toolkit también enriqueció mi experiencia en la gestión del estado de la aplicación.',
        visible: false,
        visible_port_page: true,
        link:'https://reniervargas.com/pokedux/',
        code_link:'https://github.com/renier1989/pokedux',
        tech: [
            {
                id:'tech-1',
                name:'ReactJs'
            },
            {
                id:'tech-2',
                name:'TailwindCSS'
            },
            {
                id:'tech-3',
                name:'Node.js'
            }
        ],
    },
    {
        id:'project-2',
        order:2,
        img: ecoquest,
        titleEn: 'Ecoquest',
        titleEs: 'Ecoquest',
        contentEn: "I created this web app to raise awareness about everyday environmental impact. Make choices in response to eco questions. Developed with React.js and styled with Tailwind CSS.",
        contentEs: 'Creé esta app web para concienciar sobre el impacto ambiental diario. Responde preguntas ecológicas y toma decisiones. Desarrollada con React.js y estilizada con Tailwind CSS',
        longContentEn: "I developed this simple yet useful web application to raise awareness about the environmental impact of our everyday actions. In this app, you'll make choices in response to questions related to environmental impact. It was created using React.js and styled with Tailwind CSS.",
        longContentEs: 'Desarrollé esta aplicación web sencilla pero útil para crear conciencia sobre el impacto ambiental de nuestras acciones cotidianas. En esta app, tomarás decisiones en respuesta a preguntas relacionadas con el impacto ambiental. Fue creada utilizando React.js y diseñada con Tailwind CSS.',
        visible: true,
        visible_port_page: true,
        link:'https://reniervargas.com/ecoquest/',
        code_link:'https://github.com/renier1989/ecoquest',
        tech: [
            {
                id:'tech-1',
                name:'ReactJs'
            },
            {
                id:'tech-2',
                name:'TailwindCSS'
            },
            {
                id:'tech-3',
                name:'Node.js'
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