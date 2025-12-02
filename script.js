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
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update input placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (translations[lang][key]) {
      el.setAttribute("placeholder", translations[lang][key]);
    }
  });

  // Update active language button
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
   TRANSLATION DICTIONARY
   ===================================================== */

const translations = {
  az: {},
  ru: {},
  en: {}
};
/* ============================
   TRANSLATION DICTIONARY
   ============================ */

const translations = {
  az: {
    /* ===== MENU ===== */
    menu_home: "Ana Səhifə",
    menu_about: "Haqqımızda",
    menu_services: "Xidmətlər",
    menu_legal_updates: "Qanunvericilik və Xəbərlər",
    menu_faq: "FAQ",
    menu_team: "Komanda",
    menu_contact: "Əlaqə",

    /* ===== META ===== */
    meta_title_home: "Absheron Legal & Audit Services",
    meta_title_about: "Haqqımızda – Absheron",
    meta_title_contact: "Əlaqə – Absheron",
    meta_title_faq: "FAQ – Absheron",
    meta_title_legal_updates: "Qanunvericilik və Xəbərlər – Absheron",
    meta_title_services: "Xidmətlər – Absheron",
    meta_title_team: "Komanda – Absheron",

    /* ===== HERO ===== */
    hero_title: "Korporativ hüquq, vergi və audit üzrə peşəkar xidmətlər",
    hero_sub: "Biznesinizin etibarlı və qanunauyğun inkişafı üçün dəstək veririk.",

    /* ===== ABOUT ===== */
    about_title: "Haqqımızda",
    about_text: "Biz hüquq, vergi və audit sahəsində peşəkar xidmətlər göstəririk.",
    about_long_1: "Absheron Legal & Audit Services — hüquqi, vergi, audit və korporativ konsaltinq sahəsində xidmət göstərən çoxprofilli konsaltinq şirkətidir.",
    about_long_2: "Missiyamız — şirkətlərin təhlükəsiz və qanunauyğun fəaliyyətinə dəstək olmaq, hüquqi riskləri minimuma endirmək və strateji məsləhətlər verməkdir.",
    about_why_title: "Niyə bizi seçməlisiniz?",
    about_why_1: "Təcrübəli hüquqşünaslar və auditorlar",
    about_why_2: "Dəqiq, operativ və nəticəyönümlü xidmət",
    about_why_3: "Tam məxfilik və etik standartlar",
    about_why_4: "Yerli və xarici şirkətlərə dəstək",

    /* ===== BUTTONS ===== */
    btn_view_all_services: "Bütün xidmətlər",

    /* ===== CONTACT ===== */
    contact_title: "Əlaqə",
    contact_intro: "Bizimlə əlaqə saxlayaraq hüquqi və maliyyə xidmətləri əldə edə bilərsiniz.",
    contact_phone: "Telefon",
    contact_call_btn: "Zəng et",
    contact_email: "Email",
    contact_email_btn: "Email göndər",
    contact_address: "Ünvan",
    contact_address_text: "Bakı, Azərbaycan",
    contact_map_btn: "Xəritəyə bax",

    /* ===== FAQ ===== */
    faq_title: "Tez-tez verilən suallar",
    faq_intro: "Ən çox verilən suallara cavabları burada tapa bilərsiniz.",
    faq_q1: "Hansı xidmətləri göstərirsiniz?",
    faq_a1: "Hüquqi konsaltinq, vergi xidməti, audit və korporativ dəstək təqdim edirik.",
    faq_q2: "Konsultasiya üçün necə müraciət edə bilərəm?",
    faq_a2: "Telefon, email və ya WhatsApp vasitəsilə bizə yaza bilərsiniz.",
    faq_q3: "Xarici şirkətlərlə işləyirsiniz?",
    faq_a3: "Bəli, Azərbaycan və xaricdə fəaliyyət göstərən şirkətlərə xidmət göstəririk.",
    faq_q4: "Fərdi şəxslərə vergi xidməti göstərirsiniz?",
    faq_a4: "Bəli, vergi bəyannamələri və rezidentlik mövzusunda kömək edirik.",

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
    news_sample2_title: "ƏDV qaydalarında yenilik",
    news_sample2_excerpt: "Hesabatlılıq və çıxılma qaydalarına dəyişiklik.",
    news_sample3_title: "Əmək Məcəlləsində dəyişikliklər",
    news_sample3_excerpt: "Məsafədən iş, məzuniyyət və müqavilə ilə bağlı yeniliklər.",

    /* ===== SERVICES (MAIN TITLES) ===== */
    services_title: "Xidmətlərimiz",

    service_corporate: "Korporativ və Kommersiya Hüququ",
    service_corporate_text: "Qeydiyyat, nizamnamə, korporativ idarəetmə və məhkəmə dəstəyi.",

    service_tax: "Vergi Hüququ və Konsaltinq",
    service_tax_text: "Vergi rezidentliyi, planlaşdırma, risk qiymətləndirilməsi və yoxlamalarda təmsilçilik.",

    service_audit: "Audit Xidmətləri",
    service_audit_text: "Maliyyə, daxili və vergi auditi.",

    /* SERVICE LIST FULL (WILL BE USED ON services.html) */
    s1_title: "Korporativ və Kommersiya Hüququ Xidmətləri",
    s1_li1: "MMC, ASC, QSC və digər hüquqi şəxslərin qeydiyyatı",
    s1_li2: "Təşkilati-hüquqi formanın seçilməsi",
    s1_li3: "Nizamnamə və təsis sənədlərinin hazırlanması",
    s1_li4: "Filial və nümayəndəliklərin yaradılması",
    s1_li5: "Nizamnamə kapitalının artırılması",
    s1_li6: "Səhmdar hüquqları və müqavilələri",
    s1_li7: "Yenidən təşkil proseslərinin hüquqi müşayiəti",
    s1_li8: "Daxili siyasətlərin hazırlanması",
    s1_li9: "Mübahisələrin həlli və məhkəmə təmsilçiliyi",

    s2_title: "Vergi Hüququ və Vergi Konsaltinqi",
    s2_li1: "Vergi rezidentliyi məsələləri",
    s2_li2: "İkiqat vergitutmanın aradan qaldırılması sazişləri",
    s2_li3: "Rezidentlik sertifikatı dəstəyi",
    s2_li4: "Vergi risklərinin qiymətləndirilməsi",
    s2_li5: "Səyyar və kameral yoxlamalarda təmsilçilik",
    s2_li6: "Vergi planlaşdırılması və optimallaşdırma",
    s2_li7: "Korporativ vergi auditləri",
  },

  /* ======================================================================= */
  /* =============================== RUSSIAN ================================ */
  /* ======================================================================= */

  ru: {
    menu_home: "Главная",
    menu_about: "О компании",
    menu_services: "Услуги",
    menu_legal_updates: "Законодательство и Новости",
    menu_faq: "FAQ",
    menu_team: "Команда",
    menu_contact: "Контакты",

    meta_title_home: "Absheron Legal & Audit Services",
    hero_title: "Профессиональные услуги по корпоративному праву, налогам и аудиту",
    hero_sub: "Помогаем вашему бизнесу работать уверенно и законно.",

    about_title: "О компании",
    about_text: "Мы предоставляем юридические, налоговые и аудиторские услуги.",
    about_long_1: "Absheron Legal & Audit Services — консалтинговая компания, предоставляющая юридические, налоговые, аудиторские и корпоративные услуги.",
    about_long_2: "Наша миссия — обеспечить юридическую безопасность бизнеса и помочь компаниям развиваться.",
    about_why_title: "Почему выбирают нас?",
    about_why_1: "Опытные юристы и аудиторы",
    about_why_2: "Точность, оперативность и результат",
    about_why_3: "Конфиденциальность и высокий профессионализм",
    about_why_4: "Поддержка местных и иностранных компаний",

    btn_view_all_services: "Все услуги",

    contact_title: "Контакты",
    contact_intro: "Свяжитесь с нами для получения юридических и финансовых услуг.",
    contact_phone: "Телефон",
    contact_call_btn: "Позвонить",
    contact_email: "Эл. почта",
    contact_email_btn: "Отправить письмо",
    contact_address: "Адрес",
    contact_address_text: "Баку, Азербайджан",
    contact_map_btn: "Открыть карту",

    faq_title: "Часто задаваемые вопросы",
    faq_intro: "Ответы на самые популярные вопросы.",
    faq_q1: "Какие услуги вы оказываете?",
    faq_a1: "Мы предоставляем юридические, налоговые и аудиторские услуги.",
    faq_q2: "Как записаться на консультацию?",
    faq_a2: "По телефону, email или WhatsApp.",
    faq_q3: "Вы работаете с иностранными компаниями?",
    faq_a3: "Да, мы обслуживаем иностранные и локальные компании.",
    faq_q4: "Вы оказываетесь налоговые услуги физическим лицам?",
    faq_a4: "Да, помогаем с декларациями и налоговыми вопросами.",

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
    news_sample1_excerpt: "Новые поправки в договорном праве и корпоративном управлении.",
    news_sample2_title: "Новые правила по НДС",
    news_sample2_excerpt: "Обновления по отчетности и вычетам.",
    news_sample3_title: "Поправки в Трудовой кодекс",
    news_sample3_excerpt: "Изменения в удаленной работе, отпусках и контрактах.",

    services_title: "Наши услуги",

    service_corporate: "Корпоративное и коммерческое право",
    service_corporate_text: "Регистрация, уставы, корпоративное управление, суд.",

    service_tax: "Налоговое право и консалтинг",
    service_tax_text: "Резидентство, планирование, риски и проверки.",

    service_audit: "Аудиторские услуги",
    service_audit_text: "Финансовый, внутренний и налоговый аудит.",

    s1_title: "Корпоративные и коммерческие юридические услуги",
  },

  /* ======================================================================= */
  /* =============================== ENGLISH =============================== */
  /* ======================================================================= */

  en: {
    menu_home: "Home",
    menu_about: "About",
    menu_services: "Services",
    menu_legal_updates: "Legislation & News",
    menu_faq: "FAQ",
    menu_team: "Team",
    menu_contact: "Contact",

    meta_title_home: "Absheron Legal & Audit Services",

    hero_title: "Expert consulting for corporate law, tax and financial audits",
    hero_sub: "Helping your business stay compliant and grow.",

    about_title: "About Us",
    about_text: "We provide legal, tax and audit services.",
    about_long_1: "Absheron Legal & Audit Services is a multidisciplinary consulting firm providing legal, tax, audit and corporate advisory.",
    about_long_2: "Our mission is to help businesses operate confidently with full regulatory compliance.",
    about_why_title: "Why choose us?",
    about_why_1: "Experienced lawyers and auditors",
    about_why_2: "Accurate, fast and reliable service",
    about_why_3: "Full confidentiality and ethical standards",
    about_why_4: "Support for local and international companies",

    btn_view_all_services: "View all services",

    contact_title: "Contact",
    contact_intro: "Reach out for legal, tax or audit consulting.",
    contact_phone: "Phone",
    contact_call_btn: "Call Now",
    contact_email: "Email",
    contact_email_btn: "Send Email",
    contact_address: "Address",
    contact_address_text: "Baku, Azerbaijan",
    contact_map_btn: "Open Map",

    faq_title: "Frequently Asked Questions",
    faq_intro: "Find answers to common questions.",
    faq_q1: "What services do you provide?",
    faq_a1: "We provide legal, tax, audit and corporate advisory services.",
    faq_q2: "How can I contact you?",
    faq_a2: "Via phone, email or WhatsApp.",
    faq_q3: "Do you work with foreign companies?",
    faq_a3: "Yes, we work with both local and international businesses.",
    faq_q4: "Do you provide tax consulting for individuals?",
    faq_a4: "Yes, we assist with declarations and tax residency.",

    legal_updates_title: "Legislation & News",
    legal_updates_intro: "Stay informed on legal, tax and regulatory updates.",
    legal_updates_search: "Search...",
    filter_all: "All",
    filter_law: "Law",
    filter_tax: "Tax",
    filter_audit: "Audit",
    filter_labor: "Labor",
    filter_corporate: "Corporate",

    news_sample1_title: "Civil Code Amendments (2025)",
    news_sample1_excerpt: "Changes affecting contract law and governance.",
    news_sample2_title: "New VAT Regulations",
    news_sample2_excerpt: "Updates on reporting and deduction rules.",
    news_sample3_title: "Labor Code Amendments",
    news_sample3_excerpt: "Remote work regulations and leave updates.",

    services_title: "Our Services",

    service_corporate: "Corporate & Commercial Law",
    service_corporate_text: "Registration, governance, restructuring, litigation.",

    service_tax: "Tax Law & Consulting",
    service_tax_text: "Residency, planning, treaty use and inspections.",

    service_audit: "Audit Services",
    service_audit_text: "Financial, internal and tax audits.",

    s1_title: "Corporate & Commercial Law Services",
  }
};
