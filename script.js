/* =====================================================
   LANGUAGE STATE & INITIALIZATION
   ===================================================== */

// Load saved language or default to English
let currentLang = localStorage.getItem("siteLang") || "en";

// Apply language on load
document.addEventListener("DOMContentLoaded", () => {
  applyTranslations(currentLang);

  // Highlight active language button
  document.querySelectorAll(".language-switcher button").forEach(btn => {
    btn.classList.toggle("active-lang", btn.dataset.lang === currentLang);
  });
});

/* =====================================================
   TRANSLATION ENGINE
   ===================================================== */

function applyTranslations(lang) {
  currentLang = lang;
  localStorage.setItem("siteLang", lang);

  // Update all text elements
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update input placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (translations[lang] && translations[lang][key]) {
      el.setAttribute("placeholder", translations[lang][key]);
    }
  });

  // Highlight active language
  document.querySelectorAll(".language-switcher button").forEach(btn => {
    btn.classList.toggle("active-lang", btn.dataset.lang === lang);
  });
}

/* =====================================================
   LANGUAGE SWITCHER EVENTS
   ===================================================== */

document.querySelectorAll(".language-switcher button").forEach(button => {
  button.addEventListener("click", () => {
    const selected = button.dataset.lang;
    applyTranslations(selected);
  });
});

/* =====================================================
   TRANSLATION DICTIONARY — FULL VERSION
   ===================================================== */

const translations = {
     /* =====================================================
     AZERBAIJANI
     ===================================================== */
  az: {

    /* ===== MENU ===== */
    menu_home: "Əsas Səhifə",
    menu_about: "Haqqımızda",
    menu_services: "Xidmətlər",
    menu_legal_updates: "Qanunvericilik və Xəbərlər",
    menu_faq: "FAQ",
    menu_team: "Komanda",
    menu_contact: "Əlaqə",

    /* ===== META TITLES ===== */
    meta_title_home: "Absheron Legal & Audit Services",
    meta_title_about: "Haqqımızda – Absheron",
    meta_title_contact: "Əlaqə – Absheron",
    meta_title_faq: "FAQ – Absheron",
    meta_title_legal_updates: "Qanunvericilik və Xəbərlər – Absheron",
    meta_title_services: "Xidmətlər – Absheron",
    meta_title_team: "Komanda – Absheron",

    /* ===== HERO (HOME) ===== */
    hero_title: "Korporativ hüquq, vergi və audit üzrə peşəkar xidmətlər",
    hero_sub: "Biznesinizin qanunauyğun və dayanıqlı inkişafına dəstək oluruq.",

    /* ===== ABOUT PAGE ===== */
    about_title: "Haqqımızda",
    about_text: "Biz hüquq, vergi və audit sahəsində peşəkar xidmətlər göstəririk.",
    about_long_1: "Absheron Legal & Audit Services — hüquqi, vergi, audit və korporativ konsaltinq sahəsində fəaliyyət göstərən çoxprofilli konsaltinq şirkətidir.",
    about_long_2: "Missiyamız — bizneslərin təhlükəsiz və qanunauyğun fəaliyyətinə dəstək olmaq, riskləri minimuma endirmək və strateji qərarların qəbulunda yardım göstərməkdir.",
    about_why_title: "Niyə bizi seçməlisiniz?",
    about_why_1: "Təcrübəli hüquqşünaslar və auditorlar",
    about_why_2: "Operativ və dəqiq xidmət",
    about_why_3: "Məxfilik və etik standartlara sadiqlik",
    about_why_4: "Yerli və xarici şirkətlərə dəstək",

    /* ===== BUTTONS ===== */
    btn_view_all_services: "Bütün xidmətlər",

    /* ===== CONTACT PAGE ===== */
    contact_title: "Əlaqə",
    contact_intro: "Hüquqi, vergi və audit xidmətlərimizdən yararlanmaq üçün bizimlə əlaqə saxlayın.",
    contact_phone: "Telefon",
    contact_call_btn: "Zəng et",
    contact_email: "Email",
    contact_email_btn: "Email göndər",
    contact_address: "Ünvan",
    contact_address_text: "Bakı, Azərbaycan",
    contact_map_btn: "Xəritəyə bax",

    /* ===== FAQ ===== */
    faq_title: "Tez-tez verilən suallar",
    faq_intro: "Ən çox ünvanlanan suallara cavabları burada tapa bilərsiniz.",
    faq_q1: "Hansı xidmətləri göstərirsiniz?",
    faq_a1: "Hüquqi konsaltinq, vergi xidmətləri, audit və korporativ dəstək təqdim edirik.",
    faq_q2: "Konsultasiya üçün necə müraciət edə bilərəm?",
    faq_a2: "Telefon, email və ya WhatsApp vasitəsilə əlaqə saxlaya bilərsiniz.",
    faq_q3: "Xarici şirkətlərlə işləyirsiniz?",
    faq_a3: "Bəli, yerli və xarici şirkətlərlə əməkdaşlıq edirik.",
    faq_q4: "Fiziki şəxslərə vergi xidməti göstərirsiniz?",
    faq_a4: "Bəli, vergi bəyannamələri və rezidentlik mövzusunda dəstək veririk.",

    /* ===== LEGAL UPDATES ===== */
    legal_updates_title: "Qanunvericilik və Xəbərlər",
    legal_updates_intro: "Azərbaycan üzrə hüquqi, vergi və normativ yeniliklər.",
    legal_updates_search: "Axtarış...",
    filter_all: "Hamısı",
    filter_law: "Hüquq",
    filter_tax: "Vergi",
    filter_audit: "Audit",
    filter_labor: "Əmək",
    filter_corporate: "Korporativ",

    news_sample1_title: "Mülki Məcəlləyə dəyişikliklər (2025)",
    news_sample1_excerpt: "Müqavilə hüququ və korporativ idarəetmə ilə bağlı yeniliklər.",
    news_sample2_title: "ƏDV ilə bağlı yeniliklər",
    news_sample2_excerpt: "Hesabatlılıq qaydaları və çıxılmalar yeniləndi.",
    news_sample3_title: "Əmək Məcəlləsində dəyişikliklər",
    news_sample3_excerpt: "Məzuniyyət, müqavilə və məsafədən iş üzrə yeniliklər.",

    /* ===== SERVICES (MAIN) ===== */
    services_title: "Xidmətlərimiz",

    service_corporate: "Korporativ və Kommersiya Hüququ",
    service_corporate_text: "Qeydiyyat, nizamnamə, korporativ idarəetmə və məhkəmə təmsilçiliyi.",
    service_tax: "Vergi Hüququ və Konsaltinq",
    service_tax_text: "Rezidentlik, planlaşdırma, yoxlamalarda təmsilçilik və vergi strategiyası.",
    service_audit: "Audit Xidmətləri",
    service_audit_text: "Maliyyə, daxili və vergi auditi.",

    /* ===== FULL SERVICE LIST (10 CATEGORIES) ===== */

    /* 1) CORPORATE LAW */
    s1_title: "Korporativ və Kommersiya Hüququ Xidmətləri",
    s1_li1: "MMC, ASC, QSC, MTK və digər hüquqi şəxslərin qeydiyyatı",
    s1_li2: "Təşkilati-hüquqi formanın seçilməsi",
    s1_li3: "Nizamnamə və təsis sənədlərinin hazırlanması",
    s1_li4: "Filial və nümayəndəliklərin yaradılması",
    s1_li5: "Nizamnamə kapitalının artırılması və formalaşdırılması",
    s1_li6: "Direktorlar şurası və səhmdar hüquqları üzrə məsləhət",
    s1_li7: "Yenidən təşkil proseslərinin hüquqi müşayiəti",
    s1_li8: "Korporativ müqavilələr və daxili siyasətlərin hazırlanması",
    s1_li9: "Mübahisələrin həlli və məhkəmə təmsilçiliyi",

    /* 2) TAX LAW */
    s2_title: "Vergi Hüququ və Vergi Konsaltinqi",
    s2_li1: "Vergi rezidentliyi üzrə məsləhətlər",
    s2_li2: "İkiqat vergitutmanın aradan qaldırılması sazişləri",
    s2_li3: "Rezidentlik sertifikatının alınması",
    s2_li4: "Vergi risklərinin qiymətləndirilməsi",
    s2_li5: "Səyyar və kameral vergi yoxlamalarında təmsilçilik",
    s2_li6: "Vergi planlaşdırılması və optimallaşdırma",
    s2_li7: "Korporativ vergi öhdəliklərinin auditi",

    /* 3) ACCOUNTING */
    s3_title: "Mühasibatlıq və Maliyyə Uçotu Xidmətləri",
    s3_li1: "Mühasibat uçotunun aparılması",
    s3_li2: "Debitor-kreditor uçotunun idarə edilməsi",
    s3_li3: "Əməkhaqqı və kadr uçotu",
    s3_li4: "Maliyyə hesabatlarının hazırlanması",
    s3_li5: "Vergi bəyannamələrinin tərtibi",
    s3_li6: "Maliyyə analizləri və risk qiymətləndirilməsi",
    s3_li7: "Auditə hazırlıq",

    /* 4) AUDIT */
    s4_title: "Audit Xidmətləri",
    s4_li1: "Maliyyə hesabatlarının auditi",
    s4_li2: "Daxili audit",
    s4_li3: "Vergi auditi",
    s4_li4: "Aktiv və öhdəliklərin qiymətləndirilməsi",

    /* 5) LABOR LAW */
    s5_title: "Əmək Hüququ Xidmətləri",
    s5_li1: "Əmək müqavilələrinin hazırlanması və dəyişdirilməsi",
    s5_li2: "Əmr, ərizə və kadr sənədlərinin tərtibi",
    s5_li3: "Kadr siyasətinin qurulması",
    s5_li4: "Məzuniyyət və ezamiyyət qaydalarının tətbiqi",
    s5_li5: "Əmək mübahisələrində hüquqi müdafiə",

    /* 6) FINANCE & INVESTMENT */
    s6_title: "Maliyyə və İnvestisiya Hüququ",
    s6_li1: "Kredit, borc və investisiya müqavilələrinin hazırlanması",
    s6_li2: "Maliyyə əməliyyatlarının hüquqi analizi",
    s6_li3: "M&A əməliyyatları",
    s6_li4: "Sərmayə müqavilələrinin hazırlanması",
    s6_li5: "İnvestisiya risklərinin qiymətləndirilməsi",

    /* 7) REAL ESTATE */
    s7_title: "Daşınmaz Əmlak və Tikinti Hüququ",
    s7_li1: "Tikinti icazələrinin alınması",
    s7_li2: "Layihə sənədlərinin hüquqi analizi",
    s7_li3: "Dövlət orqanlarına müraciətlərin təşkili",
    s7_li4: "Tikinti prosesində risklərin qiymətləndirilməsi",
    s7_li5: "Əmlak alqı-satqı müqavilələrinin hazırlanması",

    /* 8) COURT & ARBITRATION */
    s8_title: "Məhkəmə və Arbitraj Mübahisələri",
    s8_li1: "Mülki hüquq mübahisələri",
    s8_li2: "İnzibati işlər üzrə təmsilçilik",
    s8_li3: "Kommersiya mübahisələrinin həlli",
    s8_li4: "Kredit və borc mübahisələri",
    s8_li5: "Apellyasiya və kassasiya şikayətlərinin hazırlanması",

    /* 9) INTELLECTUAL PROPERTY */
    s9_title: "Əqli Mülkiyyət Hüququ",
    s9_li1: "Əmtəə nişanı, patent və sənaye nümunəsi qeydiyyatı",
    s9_li2: "Müəlliflik hüquqlarının qorunması",
    s9_li3: "Əqli hüquqlar üzrə mübahisələrin həlli",

    /* 10) VALUATION */
    s10_title: "Qiymətləndirmə Xidmətləri",
    s10_li1: "Daşınmaz əmlakın qiymətləndirilməsi",
    s10_li2: "Aktivlərin və bizneslərin qiymətləndirilməsi",
    s10_li3: "Maliyyə göstəricilərinin ekspertizası"
  },
     /* =====================================================
     RUSSIAN
     ===================================================== */
  ru: {

    /* ===== MENU ===== */
    menu_home: "Главная",
    menu_about: "О компании",
    menu_services: "Услуги",
    menu_legal_updates: "Законодательство и Новости",
    menu_faq: "FAQ",
    menu_team: "Команда",
    menu_contact: "Контакты",

    /* ===== META TITLES ===== */
    meta_title_home: "Absheron Legal & Audit Services",
    meta_title_about: "О компании – Absheron",
    meta_title_contact: "Контакты – Absheron",
    meta_title_faq: "FAQ – Absheron",
    meta_title_legal_updates: "Законодательство и Новости – Absheron",
    meta_title_services: "Услуги – Absheron",
    meta_title_team: "Команда – Absheron",

    /* ===== HERO ===== */
    hero_title: "Профессиональные услуги по корпоративному праву, налогам и аудиту",
    hero_sub: "Помогаем вашему бизнесу работать уверенно и законно.",

    /* ===== ABOUT ===== */
    about_title: "О компании",
    about_text: "Мы предоставляем юридические, налоговые и аудиторские услуги.",
    about_long_1: "Absheron Legal & Audit Services — многофункциональная консалтинговая компания, предоставляющая услуги в сфере права, налогов, аудита и корпоративного консалтинга.",
    about_long_2: "Наша миссия — обеспечить юридическую безопасность бизнеса, снизить риски и помочь компаниям развиваться стратегически правильно.",
    about_why_title: "Почему выбирают нас?",
    about_why_1: "Опытные юристы и аудиторы",
    about_why_2: "Точность, оперативность и профессионализм",
    about_why_3: "Конфиденциальность и соблюдение этики",
    about_why_4: "Поддержка местных и иностранных компаний",

    btn_view_all_services: "Все услуги",

    /* ===== CONTACT ===== */
    contact_title: "Контакты",
    contact_intro: "Свяжитесь с нами для получения юридических, налоговых и аудиторских услуг.",
    contact_phone: "Телефон",
    contact_call_btn: "Позвонить",
    contact_email: "Эл. почта",
    contact_email_btn: "Отправить письмо",
    contact_address: "Адрес",
    contact_address_text: "Баку, Азербайджан",
    contact_map_btn: "Открыть карту",

    /* ===== FAQ ===== */
    faq_title: "Часто задаваемые вопросы",
    faq_intro: "Ниже представлены ответы на самые распространённые вопросы.",
    faq_q1: "Какие услуги вы предоставляете?",
    faq_a1: "Мы предоставляем юридические, налоговые, аудиторские и корпоративные услуги.",
    faq_q2: "Как записаться на консультацию?",
    faq_a2: "Вы можете связаться с нами по телефону, email или WhatsApp.",
    faq_q3: "Вы работаете с иностранными компаниями?",
    faq_a3: "Да, мы работаем с местными и международными организациями.",
    faq_q4: "Предоставляете ли вы налоговые услуги физическим лицам?",
    faq_a4: "Да, мы помогаем с декларациями и вопросами налогового резидентства.",

    /* ===== LEGAL UPDATES ===== */
    legal_updates_title: "Законодательство и Новости",
    legal_updates_intro: "Будьте в курсе правовых, налоговых и регуляторных изменений в Азербайджане.",
    legal_updates_search: "Поиск...",
    filter_all: "Все",
    filter_law: "Право",
    filter_tax: "Налоги",
    filter_audit: "Аудит",
    filter_labor: "Труд",
    filter_corporate: "Корпоративное",

    news_sample1_title: "Изменения в Гражданском кодексе (2025)",
    news_sample1_excerpt: "Новые поправки в корпоративном управлении и договорном праве.",
    news_sample2_title: "Обновленные правила по НДС",
    news_sample2_excerpt: "Новые требования по отчетности и налоговым вычетам.",
    news_sample3_title: "Изменения в Трудовом кодексе",
    news_sample3_excerpt: "Обновления по удаленной работе, отпускам и трудовым договорам.",

    /* ===== SERVICES MAIN ===== */
    services_title: "Наши услуги",

    service_corporate: "Корпоративное и коммерческое право",
    service_corporate_text: "Регистрация компаний, уставы, корпоративное управление и судебное сопровождение.",
    service_tax: "Налоговое право и консалтинг",
    service_tax_text: "Налоговое резидентство, планирование, проверки и оптимизация.",
    service_audit: "Аудиторские услуги",
    service_audit_text: "Финансовый, внутренний и налоговый аудит.",

    /* ===== FULL SERVICE LIST (10 CATEGORIES) ===== */

    /* 1) CORPORATE LAW */
    s1_title: "Корпоративные и коммерческие юридические услуги",
    s1_li1: "Регистрация юридических лиц (ООО, ЗАО, ОАО и др.)",
    s1_li2: "Выбор организационно-правовой формы",
    s1_li3: "Подготовка уставов и учредительных документов",
    s1_li4: "Открытие филиалов и представительств",
    s1_li5: "Формирование и увеличение уставного капитала",
    s1_li6: "Консультации по правам акционеров и положениям совета директоров",
    s1_li7: "Юридическое сопровождение реорганизации компаний",
    s1_li8: "Подготовка корпоративных договоров и внутренних политик",
    s1_li9: "Разрешение споров и судебное представительство",

    /* 2) TAX LAW */
    s2_title: "Налоговое право и налоговый консалтинг",
    s2_li1: "Консультации по налоговому резидентству",
    s2_li2: "Применение соглашений об избежании двойного налогообложения",
    s2_li3: "Получение сертификата резидентства",
    s2_li4: "Оценка налоговых рисков",
    s2_li5: "Представительство при камеральных и выездных проверках",
    s2_li6: "Налоговое планирование и оптимизация",
    s2_li7: "Аудит корпоративных налоговых обязательств",

    /* 3) ACCOUNTING */
    s3_title: "Бухгалтерские и финансовые услуги",
    s3_li1: "Ведение бухгалтерского учета",
    s3_li2: "Управление дебиторской и кредиторской задолженностью",
    s3_li3: "Кадровый учет и расчет заработной платы",
    s3_li4: "Подготовка финансовой отчетности",
    s3_li5: "Составление налоговых деклараций",
    s3_li6: "Финансовый анализ и оценка рисков",
    s3_li7: "Подготовка к аудиту",

    /* 4) AUDIT */
    s4_title: "Аудиторские услуги",
    s4_li1: "Аудит финансовой отчетности",
    s4_li2: "Внутренний аудит",
    s4_li3: "Налоговый аудит",
    s4_li4: "Оценка активов и обязательств",

    /* 5) LABOR LAW */
    s5_title: "Трудовое право",
    s5_li1: "Подготовка и изменение трудовых договоров",
    s5_li2: "Подготовка приказов, заявлений и кадровых документов",
    s5_li3: "Формирование кадровой политики",
    s5_li4: "Применение правил отпусков и командировок",
    s5_li5: "Защита прав работников в трудовых спорах",

    /* 6) FINANCE & INVESTMENT */
    s6_title: "Финансовое и инвестиционное право",
    s6_li1: "Подготовка кредитных, долговых и инвестиционных договоров",
    s6_li2: "Правовой анализ финансовых операций",
    s6_li3: "Сделки M&A",
    s6_li4: "Подготовка инвестиционных соглашений",
    s6_li5: "Оценка инвестиционных рисков",

    /* 7) REAL ESTATE */
    s7_title: "Недвижимость и строительное право",
    s7_li1: "Получение разрешений на строительство",
    s7_li2: "Правовой анализ проектной документации",
    s7_li3: "Взаимодействие с государственными структурами",
    s7_li4: "Анализ рисков в строительстве",
    s7_li5: "Подготовка договоров купли-продажи недвижимости",

    /* 8) COURT & ARBITRATION */
    s8_title: "Судебные и арбитражные споры",
    s8_li1: "Гражданско-правовые споры",
    s8_li2: "Представительство по административным делам",
    s8_li3: "Разрешение коммерческих споров",
    s8_li4: "Кредитные и долговые споры",
    s8_li5: "Подготовка апелляционных и кассационных жалоб",

    /* 9) INTELLECTUAL PROPERTY */
    s9_title: "Интеллектуальная собственность",
    s9_li1: "Регистрация товарных знаков, патентов и промышленных образцов",
    s9_li2: "Защита авторских прав",
    s9_li3: "Разрешение споров по интеллектуальной собственности",

    /* 10) VALUATION */
    s10_title: "Оценка имущества",
    s10_li1: "Оценка недвижимости",
    s10_li2: "Оценка активов и бизнеса",
    s10_li3: "Экспертиза финансовых показателей"
  },
  /* =====================================================
     ENGLISH
     ===================================================== */
  en: {

    /* ===== MENU ===== */
    menu_home: "Home",
    menu_about: "About",
    menu_services: "Services",
    menu_legal_updates: "Legislation & News",
    menu_faq: "FAQ",
    menu_team: "Team",
    menu_contact: "Contact",

    /* ===== META TITLES ===== */
    meta_title_home: "Absheron Legal & Audit Services",
    meta_title_about: "About – Absheron",
    meta_title_contact: "Contact – Absheron",
    meta_title_faq: "FAQ – Absheron",
    meta_title_legal_updates: "Legislation & News – Absheron",
    meta_title_services: "Services – Absheron",
    meta_title_team: "Team – Absheron",

    /* ===== HERO ===== */
    hero_title: "Expert consulting for corporate law, tax and financial audits",
    hero_sub: "Helping your business stay compliant and grow with confidence.",

    /* ===== ABOUT ===== */
    about_title: "About Us",
    about_text: "We provide legal, tax and audit services.",
    about_long_1: "Absheron Legal & Audit Services is a multidisciplinary consulting firm providing expert legal, tax, audit and corporate advisory solutions.",
    about_long_2: "Our mission is to support businesses in safe, compliant and strategic operations.",
    about_why_title: "Why choose us?",
    about_why_1: "Experienced lawyers and auditors",
    about_why_2: "Accurate, efficient and reliable service",
    about_why_3: "Confidentiality and ethical standards",
    about_why_4: "Support for local and international companies",

    btn_view_all_services: "View all services",

    /* ===== CONTACT ===== */
    contact_title: "Contact",
    contact_intro: "Get in touch for legal, tax or audit consulting.",
    contact_phone: "Phone",
    contact_call_btn: "Call Now",
    contact_email: "Email",
    contact_email_btn: "Send Email",
    contact_address: "Address",
    contact_address_text: "Baku, Azerbaijan",
    contact_map_btn: "Open Map",

    /* ===== FAQ ===== */
    faq_title: "Frequently Asked Questions",
    faq_intro: "Find answers to common questions below.",
    faq_q1: "What services do you provide?",
    faq_a1: "We provide legal, tax, audit and corporate advisory services.",
    faq_q2: "How can I book a consultation?",
    faq_a2: "Via phone, email or WhatsApp.",
    faq_q3: "Do you work with foreign companies?",
    faq_a3: "Yes, we work with international and local companies.",
    faq_q4: "Do you provide tax services for individuals?",
    faq_a4: "Yes, we help with declarations and tax residency matters.",

    /* ===== LEGAL UPDATES ===== */
    legal_updates_title: "Legislation & News",
    legal_updates_intro: "Stay informed on legal, tax and regulatory changes in Azerbaijan.",
    legal_updates_search: "Search...",
    filter_all: "All",
    filter_law: "Law",
    filter_tax: "Tax",
    filter_audit: "Audit",
    filter_labor: "Labor",
    filter_corporate: "Corporate",

    news_sample1_title: "Civil Code Amendments (2025)",
    news_sample1_excerpt: "Updates to contract law and corporate governance.",
    news_sample2_title: "New VAT Regulation",
    news_sample2_excerpt: "Changes in reporting and deduction procedures.",
    news_sample3_title: "Labor Code Amendments",
    news_sample3_excerpt: "Remote work, leave and contract updates.",

    /* ===== SERVICES MAIN ===== */
    services_title: "Our Services",

    service_corporate: "Corporate & Commercial Law",
    service_corporate_text: "Registration, governance, contracts and dispute resolution.",
    service_tax: "Tax Law & Consulting",
    service_tax_text: "Residency, planning, inspections and compliance.",
    service_audit: "Audit Services",
    service_audit_text: "Financial, internal and tax audits.",

    /* ===== FULL SERVICE LIST (10 CATEGORIES) ===== */

    /* 1) CORPORATE LAW */
    s1_title: "Corporate & Commercial Law Services",
    s1_li1: "Registration of LLC, JSC and other legal entities",
    s1_li2: "Selection of organizational-legal form",
    s1_li3: "Preparation of charter and founding documents",
    s1_li4: "Establishment of branches and representative offices",
    s1_li5: "Formation and increase of charter capital",
    s1_li6: "Corporate governance and shareholder rights advisory",
    s1_li7: "Legal support during reorganization",
    s1_li8: "Preparation of corporate agreements and internal policies",
    s1_li9: "Dispute resolution and litigation representation",

    /* 2) TAX LAW */
    s2_title: "Tax Law & Consulting",
    s2_li1: "Tax residency advisory",
    s2_li2: "Application of double taxation treaties",
    s2_li3: "Assistance obtaining residency certificates",
    s2_li4: "Tax risk assessment",
    s2_li5: "Representation during tax inspections",
    s2_li6: "Tax planning and optimization",
    s2_li7: "Corporate tax obligation audits",

    /* 3) ACCOUNTING */
    s3_title: "Accounting & Financial Reporting",
    s3_li1: "Full bookkeeping services",
    s3_li2: "Accounts payable/receivable management",
    s3_li3: "Payroll and HR accounting",
    s3_li4: "Preparation of financial statements",
    s3_li5: "Preparation of tax declarations",
    s3_li6: "Financial analysis and risk assessment",
    s3_li7: "Audit preparation",

    /* 4) AUDIT */
    s4_title: "Audit Services",
    s4_li1: "Financial statement audits",
    s4_li2: "Internal audit",
    s4_li3: "Tax audit",
    s4_li4: "Asset and liability valuation",

    /* 5) LABOR LAW */
    s5_title: "Employment & Labor Law",
    s5_li1: "Preparation and modification of labor contracts",
    s5_li2: "Preparation of orders, applications and HR documents",
    s5_li3: "Development of HR policies",
    s5_li4: "Implementation of leave and travel rules",
    s5_li5: "Legal protection in labor disputes",

    /* 6) FINANCE & INVESTMENT */
    s6_title: "Finance & Investment Law",
    s6_li1: "Drafting loan, credit and investment agreements",
    s6_li2: "Legal analysis of financial operations",
    s6_li3: "M&A transactions",
    s6_li4: "Preparation of investment contracts",
    s6_li5: "Investment risk assessment",

    /* 7) REAL ESTATE */
    s7_title: "Real Estate & Construction Law",
    s7_li1: "Obtaining construction permits",
    s7_li2: "Legal analysis of project documentation",
    s7_li3: "Liaison with government institutions",
    s7_li4: "Risk assessment during construction",
    s7_li5: "Drafting real estate purchase/sale agreements",

    /* 8) COURT & ARBITRATION */
    s8_title: "Court & Arbitration Services",
    s8_li1: "Civil disputes",
    s8_li2: "Administrative representation",
    s8_li3: "Commercial dispute resolution",
    s8_li4: "Loan and debt-related disputes",
    s8_li5: "Appeal and cassation preparation",

    /* 9) INTELLECTUAL PROPERTY */
    s9_title: "Intellectual Property Law",
    s9_li1: "Trademark, patent and industrial design registration",
    s9_li2: "Copyright protection",
    s9_li3: "IP dispute resolution",

    /* 10) VALUATION */
    s10_title: "Valuation Services",
    s10_li1: "Real estate valuation",
    s10_li2: "Business and asset valuation",
    s10_li3: "Expert assessment of financial indicators"
  }

}; // END OF translations object

/* =====================================================
   GITHUB PAGES CACHE FIX
   ===================================================== */
(function () {
  const version = "v1.0.7"; 
  const scripts = document.querySelectorAll("script[src]");
  scripts.forEach(s => {
    if (s.src.includes("script.js")) {
      s.src = `script.js?${version}`;
    }
  });
})();



   
