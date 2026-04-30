// Translations
const translations = {
    ru: {
        nav_home: 'Главная',
        nav_services: 'Услуги',
        nav_projects: 'Проекты',
        nav_team: 'Команда',
        nav_about: 'О нас',
        nav_testimonials: 'Отзывы',
        nav_contact: 'Контакты',
        nav_map: 'Карта',
        map_title: 'Карта',
        map_subtitle: 'Наше присутствие в Казахстане',
        map_city_aktobe: 'Актобе',
        map_city_kostanay: 'Костанай',
        map_aktobe_desc: 'Главный офис компании',
        map_kostanay_desc: 'Региональное представительство',
        map_work_title: 'Работаем по всему Казахстану',
        map_work_desc: 'Локальная поддержка клиентов',
        map_stat_offices: 'офиса',
        map_stat_clients: 'клиентов',
        map_stat_projects: 'проектов',
        map_stat_support: 'поддержка',
        map_cta_title: 'Свяжитесь с ближайшим офисом',
        map_cta_btn: 'Получить консультацию',
        hero_title1: 'Инновационные',
        hero_title2: 'IT-решения',
        hero_title3: 'для вашего бизнеса',
        hero_eyebrow: 'Сервис класса Enterprise для смелых брендов',
        hero_subtitle: 'Создаём современные цифровые продукты, которые трансформируют индустрии',
        hero_btn1: 'Начать проект',
        hero_btn2: 'Наши услуги',
        services_title1: 'Наши',
        services_title2: 'услуги',
        service_web_title: 'Веб-разработка',
        service_web_desc: 'Создаём высокопроизводительные веб-приложения и сайты с современным дизайном и безупречной функциональностью',
        service_mobile_title: 'Мобильные приложения',
        service_mobile_desc: 'Разрабатываем нативные и кроссплатформенные мобильные приложения для iOS и Android',
        service_cloud_title: 'Облачные решения',
        service_cloud_desc: 'Проектируем и внедряем масштабируемую облачную инфраструктуру для вашего бизнеса',
        service_ai_title: 'AI & Machine Learning',
        service_ai_desc: 'Интегрируем искусственный интеллект и машинное обучение в ваши продукты',
        service_security_title: 'Кибербезопасность',
        service_security_desc: 'Обеспечиваем комплексную защиту ваших данных и инфраструктуры',
        service_analytics_title: 'Аналитика данных',
        service_analytics_desc: 'Помогаем принимать обоснованные решения на основе анализа больших данных',
        service_btn: 'Подробнее →',
        projects_title1: 'Наши',
        projects_title2: 'проекты',
        filter_all: 'Все проекты',
        filter_web: 'Веб-разработка',
        filter_mobile: 'Мобильные',
        filter_cloud: 'Облачные',
        filter_ai: 'AI/ML',
        project_fintech_desc: 'Платформа для управления финансами с AI-аналитикой и прогнозированием',
        project_fitness_desc: 'Мобильное приложение для отслеживания тренировок с AI-тренером',
        project_ecommerce_desc: 'Масштабируемая облачная платформа для онлайн-торговли',
        project_ai_desc: 'Интеллектуальный помощник с обработкой естественного языка',
        project_dashboard_desc: 'Интерактивная панель для визуализации бизнес-метрик',
        project_delivery_desc: 'Приложение для службы доставки с отслеживанием в реальном времени',
        team_title1: 'Наша',
        team_title2: 'команда',
        team_member1_name: 'Кирилл Пилипенко',
        team_member1_role: 'CEO & Основатель',
        team_member1_bio: 'Определяет вектор развития BENELUX и формирует команду экспертов для реализации инновационных проектов.',
        team_member2_name: 'Ерлан Аймуканов',
        team_member2_role: 'Со-руководитель',
        team_member2_bio: 'Отвечает за эффективность внутренних процессов и успешное завершение всех ключевых проектов.',
        team_member3_name: 'Владислав Тугуши',
        team_member3_role: 'Специалист по кибербезопасности',
        team_member3_bio: 'Обеспечивает комплексную защиту всех цифровых активов клиентов и инфраструктуры компании.',
        team_member4_name: 'Никита Мальцев',
        team_member4_role: 'Специалист по ИИ',
        team_member4_bio: 'Разрабатывает и внедряет нейронные сети для оптимизации бизнес-процессов и создания новых продуктов.',
        team_member5_name: 'Карабура Айтжанов',
        team_member5_role: 'Мобилограф',
        team_member5_bio: 'Создает высококачественный видеоконтент, отражающий экспертизу и жизнь команды BENELUX.',
        team_member6_name: 'Мариам Рогушева',
        team_member6_role: 'Дизайнер',
        team_member6_bio: 'Превращает сложные идеи в интуитивно понятные и эстетически привлекательные интерфейсы.',
        team_member7_name: 'Наталья Ищенко',
        team_member7_role: 'Тестировщик',
        team_member7_bio: 'Обеспечивает безупречную работу продукта, выявляя и устраняя критические ошибки до релиза.',
        team_member8_name: 'Салтанат Еркингали',
        team_member8_role: 'SMM-специалист',
        team_member8_bio: 'Управляет присутствием BENELUX в социальных сетях, строит сообщество и привлекает целевую аудиторию.',
        team_member9_name: 'Артем Курсаев',
        team_member9_role: 'Backend-разработчик',
        team_member9_bio: 'Отвечает за проектирование баз данных и оптимизацию серверной логики для поддержания высокой масштабируемости проектов.',
        about_title1: 'О компании',
        about_text1: 'Мы — команда профессионалов, специализирующихся на разработке инновационных IT-решений. Наша миссия — помогать компаниям достигать своих целей через технологии.',
        about_text2: 'С момента основания мы реализовали более 150 успешных проектов для клиентов по всему миру, от стартапов до крупных корпораций.',
        stat_projects: 'Завершённых проектов',
        stat_experts: 'Экспертов в команде',
        stat_clients: 'Довольных клиентов',
        stat_support: 'Поддержка',
        testimonials_title1: 'Что говорят',
        testimonials_title2: 'наши клиенты',
        testimonial1_text: 'Benelux превзошли все наши ожидания! Они создали платформу для нашего финтех-стартапа за 3 месяца. Профессионализм, внимание к деталям и отличная коммуникация на протяжении всего проекта.',
        testimonial1_name: 'Алексей Ковалёв',
        testimonial2_text: 'Работа с командой Benelux - это настоящее удовольствие. Они не просто выполнили техническое задание, а предложили инновационные решения, которые значительно улучшили наш продукт.',
        testimonial2_name: 'Мария Смирнова',
        testimonial3_text: 'Миграция нашей инфраструктуры в облако прошла безупречно благодаря экспертизе Benelux. Производительность выросла на 300%, а расходы снизились на 40%. Рекомендую!',
        testimonial3_name: 'Дмитрий Петров',
        contact_title1: 'Свяжитесь',
        contact_title2: 'с нами',
        contact_subtitle: 'Готовы начать ваш проект? Заполните форму, и мы свяжемся с вами в ближайшее время',
        form_name: 'Имя',
        form_phone: 'Номер телефона',
        form_company: 'Компания',
        form_message: 'Сообщение',
        form_submit: 'Отправить заявку',
        form_success: '✅ Спасибо за заявку! Мы свяжемся с вами в ближайшее время.',
        footer_text: 'Инновационные IT-решения для вашего бизнеса',
        footer_copyright: '© 2025 Benelux. Все права защищены.'
    },
    kk: {
        nav_home: 'Басты бет',
        nav_services: 'Қызметтер',
        nav_projects: 'Жобалар',
        nav_team: 'Команда',
        nav_about: 'Біз туралы',
        nav_testimonials: 'Пікірлер',
        nav_contact: 'Байланыс',
        nav_map: 'Карта',
        map_title: 'Карта',
        map_subtitle: 'Қазақстандағы біздің қатысуымыз',
        map_city_aktobe: 'Ақтөбе',
        map_city_kostanay: 'Қостанай',
        map_aktobe_desc: 'Компанияның бас кеңсесі',
        map_kostanay_desc: 'Аймақтық өкілдік',
        map_work_title: 'Бүкіл Қазақстан бойынша жұмыс істейміз',
        map_work_desc: 'Клиенттерге жергілікті қолдау',
        map_stat_offices: 'кеңсе',
        map_stat_clients: 'клиент',
        map_stat_projects: 'жоба',
        map_stat_support: 'қолдау',
        map_cta_title: 'Ең жақын кеңсемен байланысыңыз',
        map_cta_btn: 'Кеңес алу',
        hero_title1: 'Инновациялық',
        hero_title2: 'IT-шешімдер',
        hero_title3: 'сіздің бизнесіңіз үшін',
        hero_eyebrow: 'Enterprise деңгейіндегі қызметтер батыл брендтерге',
        hero_subtitle: 'Индустрияларды өзгертетін заманауи цифрлық өнімдер жасаймыз',
        hero_btn1: 'Жобаны бастау',
        hero_btn2: 'Біздің қызметтер',
        services_title1: 'Біздің',
        services_title2: 'қызметтер',
        service_web_title: 'Веб-әзірлеу',
        service_web_desc: 'Заманауи дизайн мен мінсіз функционалдылығы бар жоғары өнімді веб-қосымшалар мен сайттар жасаймыз',
        service_mobile_title: 'Мобильді қосымшалар',
        service_mobile_desc: 'iOS және Android үшін native және cross-platform мобильді қосымшалар әзірлейміз',
        service_cloud_title: 'Бұлттық шешімдер',
        service_cloud_desc: 'Бизнесіңіз үшін масштабталатын бұлттық инфрақұрылым жобалаймыз және енгіземіз',
        service_ai_title: 'AI & Machine Learning',
        service_ai_desc: 'Өнімдеріңізге жасанды интеллект пен машиналық оқытуды біріктіреміз',
        service_security_title: 'Киберқауіпсіздік',
        service_security_desc: 'Деректеріңіз бен инфрақұрылымыңызды кешенді қорғауды қамтамасыз етеміз',
        service_analytics_title: 'Деректерді талдау',
        service_analytics_desc: 'Үлкен деректерді талдау негізінде негізделген шешімдер қабылдауға көмектесеміз',
        service_btn: 'Толығырақ →',
        projects_title1: 'Біздің',
        projects_title2: 'жобалар',
        filter_all: 'Барлық жобалар',
        filter_web: 'Веб-әзірлеу',
        filter_mobile: 'Мобильді',
        filter_cloud: 'Бұлттық',
        filter_ai: 'AI/ML',
        project_fintech_desc: 'AI-аналитика және болжаммен қаржыны басқару платформасы',
        project_fitness_desc: 'AI-жаттықтырушысы бар жаттығуларды бақылау үшін мобильді қосымша',
        project_ecommerce_desc: 'Онлайн-сауда үшін масштабталатын бұлттық платформа',
        project_ai_desc: 'Табиғи тілді өңдеумен интеллектуалды көмекші',
        project_dashboard_desc: 'Бизнес-метрикаларды визуализациялау үшін интерактивті панель',
        project_delivery_desc: 'Нақты уақытта бақылаумен жеткізу қызметі қосымшасы',
        team_title1: 'Біздің',
        team_title2: 'команда',
        team_member1_name: 'Кирилл Пилипенко',
        team_member1_role: 'Бас директор және Негізін қалаушы',
        team_member1_bio: 'BENELUX-тің даму векторын анықтайды және инновациялық жобаларды жүзеге асыру үшін сарапшылар тобын қалыптастырады.',
        team_member2_name: 'Ерлан Аймуканов',
        team_member2_role: 'Қосалқы басшы',
        team_member2_bio: 'Ішкі процестердің тиімділігіне және барлық негізгі жобалардың сәтті аяқталуына жауап береді.',
        team_member3_name: 'Владислав Тугуши',
        team_member3_role: 'Киберқауіпсіздік маманы',
        team_member3_bio: 'Клиенттердің барлық цифрлық активтері мен компанияның инфрақұрылымын кешенді қорғауды қамтамасыз етеді.',
        team_member4_name: 'Никита Мальцев',
        team_member4_role: 'ЖИ (Жасанды интеллект) маманы',
        team_member4_bio: 'Бизнес-процестерді оңтайландыру және жаңа өнімдерді құру үшін нейрондық желілерді әзірлейді және енгізеді.',
        team_member5_name: 'Карабура Айтжанов',
        team_member5_role: 'Мобилограф',
        team_member5_bio: 'BENELUX командасының сараптамасы мен өмірін көрсететін жоғары сапалы бейне-контент жасайды.',
        team_member6_name: 'Мариам Рогушева',
        team_member6_role: 'Дизайнер',
        team_member6_bio: 'Күрделі идеяларды интуитивті түсінікті және эстетикалық тартымды интерфейстерге айналдырады.',
        team_member7_name: 'Наталья Ищенко',
        team_member7_role: 'Тестілеуші',
        team_member7_bio: 'Өнімнің мінсіз жұмыс істеуін қамтамасыз етеді, шығарылымға дейін маңызды қателерді анықтайды және жояды.',
        team_member8_name: 'Салтанат Еркингали',
        team_member8_role: 'SMM-маман',
        team_member8_bio: 'BENELUX-тің әлеуметтік желілердегі қатысуын басқарады, қоғамдастық құрады және мақсатты аудиторияны тартады.',
        team_member9_name: 'Артем Курсаев',
        team_member9_role: 'Backend-әзірлеуші',
        team_member9_bio: 'Жобалардың жоғары масштабталуын қолдау үшін дерекқорларды жобалауға және серверлік логиканы оңтайландыруға жауап береді.',
        about_title1: 'Компания туралы',
        about_text1: 'Біз инновациялық IT-шешімдерді әзірлеуге маманданған кәсіпқойлар командасымыз. Біздің миссиямыз - компанияларға технологиялар арқылы мақсаттарына жетуге көмектесу.',
        about_text2: 'Құрылған күннен бастап біз бүкіл әлем бойынша клиенттер үшін 150-ден астам сәтті жобаларды іске асырдық, стартаптардан ірі корпорацияларға дейін.',
        stat_projects: 'Аяқталған жобалар',
        stat_experts: 'Командадағы сарапшылар',
        stat_clients: 'Қанағаттанған клиенттер',
        stat_support: 'Қолдау',
        testimonials_title1: 'Не дейді',
        testimonials_title2: 'біздің клиенттер',
        testimonial1_text: 'Benelux барлық күтулерімізден асып түсті! Олар біздің финтех-стартапымыз үшін платформаны 3 айда жасады. Кәсібилік, егжей-тегжейге назар аудару және бүкіл жоба барысында тамаша коммуникация.',
        testimonial1_name: 'Алексей Ковалёв',
        testimonial2_text: 'Benelux командасымен жұмыс істеу - бұл нағыз ләззат. Олар техникалық тапсырманы орындап қана қоймай, біздің өнімімізді айтарлықтай жақсартқан инновациялық шешімдер ұсынды.',
        testimonial2_name: 'Мария Смирнова',
        testimonial3_text: 'Біздің инфрақұрылымымызды бұлтқа көшіру Benelux сарапшылығының арқасында мінсіз өтті. Өнімділік 300%-ға өсті, ал шығындар 40%-ға төмендеді. Ұсынамын!',
        testimonial3_name: 'Дмитрий Петров',
        contact_title1: 'Байланысыңыз',
        contact_title2: 'бізбен',
        contact_subtitle: 'Жобаңызды бастауға дайынсыз ба? Форманы толтырыңыз, біз жақын арада сізбен хабарласамыз',
        form_name: 'Аты',
        form_phone: 'Телефон нөмірі',
        form_company: 'Компания',
        form_message: 'Хабарлама',
        form_submit: 'Өтінім жіберу',
        form_success: '✅ Өтініміңіз үшін рахмет! Біз жақын арада сізбен хабарласамыз.',
        footer_text: 'Бизнесіңіз үшін инновациялық IT-шешімдер',
        footer_copyright: '© 2025 Benelux. Барлық құқықтар қорғалған.'
    },
    en: {
        nav_home: 'Home',
        nav_services: 'Services',
        nav_projects: 'Projects',
        nav_team: 'Team',
        nav_about: 'About',
        nav_testimonials: 'Testimonials',
        nav_contact: 'Contact',
        nav_map: 'Map',
        map_title: 'Map',
        map_subtitle: 'Our presence across Kazakhstan',
        map_city_aktobe: 'Aktobe',
        map_city_kostanay: 'Kostanay',
        map_aktobe_desc: 'Main company office',
        map_kostanay_desc: 'Regional representative office',
        map_work_title: 'We operate across Kazakhstan',
        map_work_desc: 'Local support for clients',
        map_stat_offices: 'offices',
        map_stat_clients: 'clients',
        map_stat_projects: 'projects',
        map_stat_support: 'support',
        map_cta_title: 'Contact the nearest office',
        map_cta_btn: 'Get consultation',
        hero_title1: 'Innovative',
        hero_title2: 'IT Solutions',
        hero_title3: 'for Your Business',
        hero_eyebrow: 'Enterprise-grade services for bold brands',
        hero_subtitle: 'We create modern digital products that transform industries',
        hero_btn1: 'Start Project',
        hero_btn2: 'Our Services',
        services_title1: 'Our',
        services_title2: 'Services',
        service_web_title: 'Web Development',
        service_web_desc: 'We create high-performance web applications and websites with modern design and flawless functionality',
        service_mobile_title: 'Mobile Applications',
        service_mobile_desc: 'We develop native and cross-platform mobile applications for iOS and Android',
        service_cloud_title: 'Cloud Solutions',
        service_cloud_desc: 'We design and implement scalable cloud infrastructure for your business',
        service_ai_title: 'AI & Machine Learning',
        service_ai_desc: 'We integrate artificial intelligence and machine learning into your products',
        service_security_title: 'Cybersecurity',
        service_security_desc: 'We provide comprehensive protection of your data and infrastructure',
        service_analytics_title: 'Data Analytics',
        service_analytics_desc: 'We help make informed decisions based on big data analysis',
        service_btn: 'Learn More →',
        projects_title1: 'Our',
        projects_title2: 'Projects',
        filter_all: 'All Projects',
        filter_web: 'Web Development',
        filter_mobile: 'Mobile',
        filter_cloud: 'Cloud',
        filter_ai: 'AI/ML',
        project_fintech_desc: 'Financial management platform with AI analytics and forecasting',
        project_fitness_desc: 'Mobile app for tracking workouts with AI trainer',
        project_ecommerce_desc: 'Scalable cloud platform for online trading',
        project_ai_desc: 'Intelligent assistant with natural language processing',
        project_dashboard_desc: 'Interactive dashboard for business metrics visualization',
        project_delivery_desc: 'Delivery service app with real-time tracking',
        team_title1: 'Our',
        team_title2: 'Team',
        team_member1_name: 'Kirill Pilipenko',
        team_member1_role: 'CEO & Founder',
        team_member1_bio: 'Defines BENELUX’s development vector and forms a team of experts to implement innovative projects.',
        team_member2_name: 'Yerlan Aymukanov',
        team_member2_role: 'Co-Head',
        team_member2_bio: 'Responsible for the efficiency of internal processes and the successful completion of all key projects.',
        team_member3_name: 'Vladislav Tugushi',
        team_member3_role: 'Cybersecurity Specialist',
        team_member3_bio: 'Ensures comprehensive protection of all clients\' digital assets and the company\'s infrastructure.',
        team_member4_name: 'Nikita Maltsev',
        team_member4_role: 'AI Specialist',
        team_member4_bio: 'Develops and implements neural networks to optimize business processes and create new products.',
        team_member5_name: 'Karabura Aitzhanov',
        team_member5_role: 'Mobile Videographer',
        team_member5_bio: 'Creates high-quality video content that reflects the expertise and life of the BENELUX team.',
        team_member6_name: 'Mariam Rogusheva',
        team_member6_role: 'Designer',
        team_member6_bio: 'Transforms complex ideas into intuitively clear and aesthetically appealing interfaces.',
        team_member7_name: 'Natalia Ishchenko',
        team_member7_role: 'Tester',
        team_member7_bio: 'Ensures flawless product operation by identifying and eliminating critical errors before release.',
        team_member8_name: 'Saltanat Yerkingali',
        team_member8_role: 'SMM Specialist',
        team_member8_bio: 'Manages BENELUX’s social media presence, builds community, and attracts the target audience.',
        team_member9_name: 'Artem Kursaev',
        team_member9_role: 'Backend Developer',
        team_member9_bio: 'Responsible for database design and server logic optimization to maintain high project scalability.',
        about_title1: 'About',
        about_text1: 'We are a team of professionals specializing in innovative IT solutions development. Our mission is to help companies achieve their goals through technology.',
        about_text2: 'Since our founding, we have completed over 150 successful projects for clients worldwide, from startups to large corporations.',
        stat_projects: 'Completed Projects',
        stat_experts: 'Team Experts',
        stat_clients: 'Satisfied Clients',
        stat_support: 'Support',
        testimonials_title1: 'What Our',
        testimonials_title2: 'Clients Say',
        testimonial1_text: 'Benelux exceeded all our expectations! They created a platform for our fintech startup in 3 months. Professionalism, attention to detail and excellent communication throughout the project.',
        testimonial1_name: 'Alexey Kovalev',
        testimonial2_text: 'Working with the Benelux team is a real pleasure. They not only completed the technical task, but also proposed innovative solutions that significantly improved our product.',
        testimonial2_name: 'Maria Smirnova',
        testimonial3_text: 'Migration of our infrastructure to the cloud went flawlessly thanks to Benelux expertise. Performance increased by 300% and costs decreased by 40%. Highly recommend!',
        testimonial3_name: 'Dmitry Petrov',
        contact_title1: 'Get in',
        contact_title2: 'Touch',
        contact_subtitle: 'Ready to start your project? Fill out the form and we will contact you shortly',
        form_name: 'Name',
        form_phone: 'Phone Number',
        form_company: 'Company',
        form_message: 'Message',
        form_submit: 'Submit Request',
        form_success: '✅ Thank you for your request! We will contact you shortly.',
        footer_text: 'Innovative IT solutions for your business',
        footer_copyright: '© 2025 Benelux. All rights reserved.'
    }
};

let currentLang = 'ru';

function changeLanguage(lang) {
    currentLang = lang;

    // Update active buttons for both desktop and mobile
    const allLangBtns = document.querySelectorAll('.lang-btn');
    allLangBtns.forEach(btn => btn.classList.remove('active'));

    document.getElementById('langRu')?.classList.toggle('active', lang === 'ru');
    document.getElementById('langKk')?.classList.toggle('active', lang === 'kk');
    document.getElementById('langEn')?.classList.toggle('active', lang === 'en');
    document.getElementById('langRuMobile')?.classList.toggle('active', lang === 'ru');
    document.getElementById('langKkMobile')?.classList.toggle('active', lang === 'kk');
    document.getElementById('langEnMobile')?.classList.toggle('active', lang === 'en');

    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang;

    showNotification(lang === 'ru' ? 'Язык изменён! 🌍' : lang === 'kk' ? 'Тіл өзгертілді! 🌍' : 'Language changed! 🌍');
}

// Mobile Menu Toggle
function toggleMenu() {
    const navCenter = document.getElementById('navCenter');
    const hamburger = document.getElementById('hamburger');
    navCenter.classList.toggle('active');
    hamburger.classList.toggle('active');
}

function closeMenu() {
    const navCenter = document.getElementById('navCenter');
    const hamburger = document.getElementById('hamburger');
    navCenter.classList.remove('active');
    hamburger.classList.remove('active');
}

// Scroll to top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Notification
function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.classList.add('show');
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Service Modal
const serviceContent = {
    web: {
        ru: {
            title: '💻 Веб-разработка',
            description: 'Создаём современные, быстрые и масштабируемые веб-приложения с использованием передовых технологий.',
            features: ['SPA и Progressive Web Apps', 'Адаптивный дизайн для всех устройств', 'SEO-оптимизация', 'Высокая производительность', 'Интеграция с API и сервисами', 'Безопасность и защита данных']
        },
        kk: {
            title: '💻 Веб-әзірлеу',
            description: 'Озық технологияларды пайдалана отырып заманауи, жылдам және масштабталатын веб-қосымшалар жасаймыз.',
            features: ['SPA және Progressive Web Apps', 'Барлық құрылғылар үшін адаптивті дизайн', 'SEO-оңтайландыру', 'Жоғары өнімділік', 'API және қызметтермен интеграция', 'Қауіпсіздік және деректерді қорғау']
        },
        en: {
            title: '💻 Web Development',
            description: 'We create modern, fast and scalable web applications using advanced technologies.',
            features: ['SPA and Progressive Web Apps', 'Responsive design for all devices', 'SEO optimization', 'High performance', 'API and services integration', 'Security and data protection']
        }
    },
    mobile: {
        ru: { title: '📱 Мобильные приложения', description: 'Разрабатываем нативные и кроссплатформенные приложения для iOS и Android.', features: ['Нативная разработка (Swift, Kotlin)', 'Кроссплатформенные решения', 'Интуитивный UX/UI дизайн', 'Push-уведомления', 'Офлайн-режим', 'Интеграция с устройствами'] },
        kk: { title: '📱 Мобильді қосымшалар', description: 'iOS және Android үшін native және cross-platform қосымшалар әзірлейміз.', features: ['Native әзірлеу (Swift, Kotlin)', 'Cross-platform шешімдер', 'Интуитивті UX/UI дизайн', 'Push-хабарламалар', 'Офлайн режимі', 'Құрылғылармен интеграция'] },
        en: { title: '📱 Mobile Applications', description: 'We develop native and cross-platform applications for iOS and Android.', features: ['Native development (Swift, Kotlin)', 'Cross-platform solutions', 'Intuitive UX/UI design', 'Push notifications', 'Offline mode', 'Device integration'] }
    },
    cloud: {
        ru: { title: '☁️ Облачные решения', description: 'Проектируем и внедряем масштабируемую облачную инфраструктуру.', features: ['AWS, Azure, Google Cloud', 'Контейнеризация (Docker, Kubernetes)', 'CI/CD автоматизация', 'Мониторинг и логирование', 'Масштабируемость', 'Резервное копирование'] },
        kk: { title: '☁️ Бұлттық шешімдер', description: 'Масштабталатын бұлттық инфрақұрылымды жобалаймыз және енгіземіз.', features: ['AWS, Azure, Google Cloud', 'Контейнерлеу (Docker, Kubernetes)', 'CI/CD автоматтандыру', 'Мониторинг және логирование', 'Масштабталушылық', 'Сақтық көшірме'] },
        en: { title: '☁️ Cloud Solutions', description: 'We design and implement scalable cloud infrastructure.', features: ['AWS, Azure, Google Cloud', 'Containerization (Docker, Kubernetes)', 'CI/CD automation', 'Monitoring and logging', 'Scalability', 'Backup'] }
    },
    ai: {
        ru: { title: '🤖 AI & Machine Learning', description: 'Интегрируем искусственный интеллект и машинное обучение.', features: ['Обработка естественного языка (NLP)', 'Компьютерное зрение', 'Предиктивная аналитика', 'Рекомендательные системы', 'Чат-боты и виртуальные ассистенты', 'Автоматизация процессов'] },
        kk: { title: '🤖 AI & Machine Learning', description: 'Жасанды интеллект пен машиналық оқытуды біріктіреміз.', features: ['Табиғи тілді өңдеу (NLP)', 'Компьютерлік көру', 'Болжамды аналитика', 'Ұсыныс жүйелері', 'Чат-боттар және виртуалды көмекшілер', 'Процестерді автоматтандыру'] },
        en: { title: '🤖 AI & Machine Learning', description: 'We integrate artificial intelligence and machine learning.', features: ['Natural Language Processing (NLP)', 'Computer Vision', 'Predictive Analytics', 'Recommendation Systems', 'Chatbots and Virtual Assistants', 'Process Automation'] }
    },
    security: {
        ru: { title: '🔒 Кибербезопасность', description: 'Обеспечиваем комплексную защиту данных и инфраструктуры.', features: ['Аудит безопасности', 'Тестирование на проникновение', 'Шифрование данных', 'Защита от DDoS-атак', 'Двухфакторная аутентификация', 'Мониторинг угроз 24/7'] },
        kk: { title: '🔒 Киберқауіпсіздік', description: 'Деректер мен инфрақұрылымды кешенді қорғауды қамтамасыз етеміз.', features: ['Қауіпсіздік аудиті', 'Енуге тестілеу', 'Деректерді шифрлау', 'DDoS-шабуылдардан қорғау', 'Екі факторлы аутентификация', 'Қауіптерді бақылау 24/7'] },
        en: { title: '🔒 Cybersecurity', description: 'We provide comprehensive data and infrastructure protection.', features: ['Security Audit', 'Penetration Testing', 'Data Encryption', 'DDoS Protection', 'Two-Factor Authentication', 'Threat Monitoring 24/7'] }
    },
    analytics: {
        ru: { title: '📊 Аналитика данных', description: 'Помогаем принимать решения на основе анализа данных.', features: ['Big Data обработка', 'Визуализация данных', 'Бизнес-аналитика (BI)', 'Прогнозирование трендов', 'A/B тестирование', 'Отчёты и дашборды'] },
        kk: { title: '📊 Деректерді талдау', description: 'Деректерді талдау негізінде шешімдер қабылдауға көмектесеміз.', features: ['Big Data өңдеу', 'Деректерді визуализациялау', 'Бизнес-аналитика (BI)', 'Трендтерді болжау', 'A/B тестілеу', 'Есептер және дашбордтар'] },
        en: { title: '📊 Data Analytics', description: 'We help make decisions based on data analysis.', features: ['Big Data Processing', 'Data Visualization', 'Business Intelligence (BI)', 'Trend Forecasting', 'A/B Testing', 'Reports and Dashboards'] }
    }
};

function openModal(service) {
    const modal = document.getElementById('serviceModal');
    const content = serviceContent[service][currentLang];
    const modalBody = document.getElementById('modalBody');

    const btnText = currentLang === 'ru' ? 'Заказать услугу' : currentLang === 'kk' ? 'Қызметті тапсырыс беру' : 'Order Service';

    modalBody.innerHTML = `
                <h2>${content.title}</h2>
                <p>${content.description}</p>
                <ul class="modal-features">
                    ${content.features.map(f => `<li>${f}</li>`).join('')}
                </ul>
                <button class="btn-primary" onclick="location.href='#contact'" style="margin-top: 20px;">${btnText}</button>
            `;

    modal.classList.add('active');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

// Project filtering
let currentFilter = 'all';

function filterProjects(event, category) {
    if (typeof category === 'undefined') {
        category = event;
        event = null;
    }

    currentFilter = category;
    const cards = document.querySelectorAll('.project-card');
    const buttons = document.querySelectorAll('.filter-btn');

    buttons.forEach(btn => btn.classList.remove('active'));
    if (event?.target instanceof HTMLElement) {
        event.target.classList.add('active');
    } else if (buttons.length) {
        buttons[0].classList.add('active');
    }

    cards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}

// Testimonials Slider
let currentTestimonial = 0;
const totalTestimonials = 2;

function changeTestimonial(direction) {
    currentTestimonial += direction;

    if (currentTestimonial < 0) {
        currentTestimonial = totalTestimonials - 1;
    } else if (currentTestimonial >= totalTestimonials) {
        currentTestimonial = 0;
    }

    updateTestimonialSlider();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialSlider();
}

function updateTestimonialSlider() {
    const track = document.getElementById('testimonialsTrack');
    const dots = document.querySelectorAll('.slider-dot');

    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;

    dots.forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Auto-play testimonials
let testimonialInterval = setInterval(() => {
    changeTestimonial(1);
}, 7000);

// Pause auto-play on hover
document.querySelector('.testimonials-wrapper')?.addEventListener('mouseenter', () => {
    clearInterval(testimonialInterval);
});

document.querySelector('.testimonials-wrapper')?.addEventListener('mouseleave', () => {
    testimonialInterval = setInterval(() => {
        changeTestimonial(1);
    }, 7000);
});

// Form submission
function handleSubmit(e) {
    e.preventDefault();
    const successMsg = document.getElementById('successMessage');
    successMsg.classList.add('active');
    e.target.reset();

    setTimeout(() => {
        successMsg.classList.remove('active');
    }, 5000);
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animate on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card, .stat-item, .project-card, .testimonial-card, .team-member').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// Close modal on outside click
document.getElementById('serviceModal').addEventListener('click', function (e) {
    if (e.target === this) {
        closeModal('serviceModal');
    }
});







// Конфигурация Telegram бота
const telegramConfig = {
    botToken: "7475546233:AAGzlkl-pwwv4qYgk_Ac4aHP5So2V8kJg7o",
    chatId: "-1003129050149"
};

// Функция отправки данных в Telegram
async function sendToTelegram(formData) {
    const message = `
📧 Новая заявка с сайта Benelux IT:

👤 Имя: ${formData.name}
📩 Email: ${formData.email}
📞 Телефон: ${formData.phone}
🏢 Компания: ${formData.company || "—"}
💬 Сообщение: ${formData.message}

🌐 Страница: ${window.location.href}
    `;

    try {
        const response = await fetch(`https://api.telegram.org/bot${telegramConfig.botToken}/sendMessage`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                chat_id: telegramConfig.chatId,
                text: message,
                //parse_mode: "HTML"
            })
        });

        return response.ok;
    } catch (error) {
        console.error("Ошибка отправки в Telegram:", error);
        return false;
    }
}

// Обработчик формы
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const successMessage = document.getElementById("successMessage");
    initSciFiParticlesStatic();

    if (contactForm) {
        // скрываем сообщение при загрузке
        successMessage.style.display = "none";

        contactForm.addEventListener("submit", async function (event) {
            event.preventDefault();

            const formData = {
                name: document.getElementById("name").value.trim(),
                email: document.getElementById("email").value.trim(),
                phone: document.getElementById("phone").value.trim(),
                company: document.getElementById("company").value.trim(),
                message: document.getElementById("message").value.trim(),
            };

            if (!formData.name || !formData.email || !formData.phone || !formData.message) {
                alert("⚠ Пожалуйста, заполните все обязательные поля.");
                return;
            }

            const submitBtn = contactForm.querySelector("button[type='submit']");
            const originalText = submitBtn.textContent;
            submitBtn.textContent = "Отправка...";
            submitBtn.disabled = true;

            const success = await sendToTelegram(formData);

            if (success) {
                // показываем сообщение
                successMessage.style.display = "block";
                // очищаем форму
                contactForm.reset();

                // убираем сообщение через 5 секунд
                setTimeout(() => {
                    successMessage.style.display = "none";
                }, 5000);
            } else {
                alert("❌ Ошибка при отправке. Попробуйте ещё раз.");
            }

            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        });
    }
});

function initSciFiParticlesStatic() {
    const canvas = document.getElementById('fx-canvas');
    if (!canvas) return;

    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
    if (prefersReducedMotion) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const state = {
        w: 0,
        h: 0,
        lastT: 0,
        particles: [],
        layers: [
            { count: 16, depth: 0.35, speed: 0.11, blur: 10, alpha: 0.18 },
            { count: 24, depth: 0.65, speed: 0.18, blur: 14, alpha: 0.22 },
            { count: 16, depth: 1.0, speed: 0.26, blur: 18, alpha: 0.26 },
        ]
    };

    function rand(min, max) {
        return Math.random() * (max - min) + min;
    }

    function clamp(v, a, b) {
        return Math.max(a, Math.min(b, v));
    }

    function resize() {
        const dpr = Math.min(2, window.devicePixelRatio || 1);
        state.w = Math.max(1, window.innerWidth);
        state.h = Math.max(1, window.innerHeight);
        canvas.width = Math.floor(state.w * dpr);
        canvas.height = Math.floor(state.h * dpr);
        canvas.style.width = `${state.w}px`;
        canvas.style.height = `${state.h}px`;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function readBrandColors() {
        const styles = getComputedStyle(document.documentElement);
        const brand1 = styles.getPropertyValue('--brand-1')?.trim() || '#95B415';
        const brand2 = styles.getPropertyValue('--brand-2')?.trim() || '#D69113';
        return { brand1, brand2 };
    }

    function drawCrystal(x, y, r, rot, colorA, colorB, a, blurPx) {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(rot);

        ctx.globalAlpha = a;
        ctx.shadowBlur = blurPx;
        ctx.shadowColor = colorA;

        const grad = ctx.createLinearGradient(-r, -r, r, r);
        grad.addColorStop(0, colorA);
        grad.addColorStop(1, colorB);
        ctx.fillStyle = grad;

        ctx.beginPath();
        ctx.moveTo(0, -r);
        ctx.lineTo(r * 0.82, -r * 0.15);
        ctx.lineTo(r * 0.55, r);
        ctx.lineTo(0, r * 0.55);
        ctx.lineTo(-r * 0.55, r);
        ctx.lineTo(-r * 0.82, -r * 0.15);
        ctx.closePath();
        ctx.fill();

        ctx.shadowBlur = blurPx * 0.65;
        ctx.globalAlpha = a * 0.38;
        ctx.fillStyle = 'rgba(255,255,255,0.45)';
        ctx.beginPath();
        ctx.moveTo(0, -r * 0.55);
        ctx.lineTo(r * 0.22, -r * 0.10);
        ctx.lineTo(0, r * 0.30);
        ctx.lineTo(-r * 0.22, -r * 0.10);
        ctx.closePath();
        ctx.fill();

        ctx.restore();
    }

    function drawDot(x, y, r, color, a, blurPx) {
        ctx.save();
        ctx.globalAlpha = a;
        ctx.shadowBlur = blurPx;
        ctx.shadowColor = color;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }

    function makeParticle(layer) {
        const z = clamp(layer.depth * rand(0.78, 1.22), 0.22, 1.25);
        const perspective = 1 / (0.38 + z);

        const x = rand(-state.w * 0.65, state.w * 0.65);
        const y = rand(-state.h * 0.65, state.h * 0.65);

        const angle = rand(0, Math.PI * 2);
        const driftAngle = angle + rand(-0.95, 0.95);
        const baseSpeed = layer.speed * rand(0.35, 1.55) * (1.05 / (0.65 + z));
        const vx = Math.cos(driftAngle) * baseSpeed;
        const vy = Math.sin(driftAngle) * baseSpeed;

        const hueMix = Math.random() < 0.52 ? 'brand1' : 'brand2';
        const spin = rand(-0.010, 0.010) * (0.9 / (0.55 + z));
        const size = rand(10, 52) * perspective * rand(0.85, 1.25);

        const ttl = rand(10.0, 20.0) * (0.9 + z * 0.35);
        const fadeIn = rand(1.2, 3.2);
        const fadeOut = rand(1.2, 3.4);

        const twFreq = rand(0.35, 1.2) * (0.9 + (1.1 - z));
        const twPhase = rand(0, Math.PI * 2);
        const twAmp = rand(0.10, 0.32);

        return {
            x,
            y,
            vx,
            vy,
            z,
            size,
            rot: rand(0, Math.PI * 2),
            spin,
            blur: layer.blur * (0.7 + (1.25 - z) * 0.6),
            alpha: layer.alpha * rand(0.72, 1.15),
            hueMix,
            shape: Math.random() < 0.68 ? 'crystal' : 'dot',
            age: rand(0, ttl * 0.55),
            ttl,
            fadeIn,
            fadeOut,
            twFreq,
            twPhase,
            twAmp
        };
    }

    function resetParticles() {
        state.particles = [];
        const density = clamp((state.w * state.h) / (1200 * 850), 0.8, 1.6);
        for (const layer of state.layers) {
            const count = Math.round(layer.count * density);
            for (let i = 0; i < count; i++) {
                state.particles.push(makeParticle(layer));
            }
        }
    }

    function tick(ts) {
        const t = ts * 0.001;
        const dt = state.lastT ? clamp(t - state.lastT, 0.001, 0.05) : 0.016;
        state.lastT = t;

        ctx.clearRect(0, 0, state.w, state.h);
        const { brand1, brand2 } = readBrandColors();

        for (const p of state.particles) {
            p.age += dt;
            if (p.age > p.ttl) {
                const layer = state.layers.reduce((acc, l) => {
                    return Math.abs(l.depth - p.z) < Math.abs(acc.depth - p.z) ? l : acc;
                }, state.layers[0]);
                Object.assign(p, makeParticle(layer));
            }

            p.x += p.vx;
            p.y += p.vy;
            p.rot += p.spin;

            const wob = 0.18 + (1.0 - p.z / 1.25) * 0.22;
            const wobX = Math.sin(t * 0.6 + p.x * 0.004) * wob;
            const wobY = Math.cos(t * 0.7 + p.y * 0.004) * wob;

            const perspective = 1 / (0.38 + p.z);
            const x = (p.x + wobX) * perspective + state.w * 0.5;
            const y = (p.y + wobY) * perspective + state.h * 0.5;

            const worldXLimit = state.w * 0.92;
            const worldYLimit = state.h * 0.92;
            if (p.x < -worldXLimit) p.x = worldXLimit;
            if (p.x > worldXLimit) p.x = -worldXLimit;
            if (p.y < -worldYLimit) p.y = worldYLimit;
            if (p.y > worldYLimit) p.y = -worldYLimit;

            const fadeInK = clamp(p.age / p.fadeIn, 0, 1);
            const fadeOutK = clamp((p.ttl - p.age) / p.fadeOut, 0, 1);
            const envelope = Math.min(fadeInK, fadeOutK);
            const tw = 1 + p.twAmp * Math.sin(t * (Math.PI * 2) * p.twFreq + p.twPhase);

            const a = p.alpha * envelope * tw;
            const blur = p.blur + (10 * (1.0 - p.z / 1.25));

            const cA = p.hueMix === 'brand1' ? brand1 : brand2;
            const cB = p.hueMix === 'brand1' ? brand2 : brand1;

            const r = Math.max(3.5, p.size * (0.9 + (1.0 - p.z / 1.25) * 0.55));
            if (p.shape === 'crystal') {
                drawCrystal(x, y, r, p.rot, cA, cB, a, blur);
            } else {
                drawDot(x, y, Math.max(1.1, r * 0.18), cA, a * 0.85, blur * 0.9);
            }
        }

        requestAnimationFrame(tick);
    }

    window.addEventListener('resize', () => {
        resize();
        resetParticles();
    }, { passive: true });

    resize();
    resetParticles();
    requestAnimationFrame(tick);
}

// FAQ Accordion
function toggleFaq(element) {
    const faqItem = element.parentElement;
    faqItem.classList.toggle('active');
}

// Появление кнопки "Наверх" при скролле
window.addEventListener('scroll', () => {
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    if (window.scrollY > 500) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});
// Плавный скролл наверх (если функции еще нет)
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

