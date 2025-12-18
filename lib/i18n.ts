export type Language = "en" | "ar";
export type Direction = "ltr" | "rtl";

export interface Translations {
    // Navigation
    nav_services: string;
    nav_products: string;
    nav_academy: string;
    nav_projects: string;
    nav_get_started: string;

    // Hero
    hero_title: string;
    hero_subtitle: string;
    hero_cta: string;
    hero_secondary_cta: string;

    // Services
    services_title: string;
    services_subtitle: string;
    service_ai_title: string;
    service_ai_desc: string;
    service_qa_title: string;
    service_qa_desc: string;
    service_cyber_title: string;
    service_cyber_desc: string;
    service_gov_title: string;
    service_gov_desc: string;

    // Products
    products_subtitle: string;
    products_title: string;
    products_desc: string;
    product_faheem_title: string;
    product_faheem_label: string;
    product_faheem_desc: string;
    product_faheem_cta: string;
    product_compliance_title: string;
    product_compliance_label: string;
    product_compliance_desc: string;
    product_compliance_cta: string;

    // Academy
    academy_subtitle: string;
    academy_title: string;
    academy_desc: string;
    academy_card_ai_title: string;
    academy_card_ai_desc: string;
    academy_card_ml_title: string;
    academy_card_ml_desc: string;
    academy_card_istqb_title: string;
    academy_card_istqb_desc: string;
    academy_card_agile_title: string;
    academy_card_agile_desc: string;
    academy_card_auto_title: string;
    academy_card_auto_desc: string;
    academy_cta_view: string;

    // Projects
    projects_subtitle: string;
    projects_title: string;
    project_vat_title: string;
    project_smart_city_title: string;
    project_banking_title: string;
    project_health_title: string;
    project_view_case: string;

    // Footer
    footer_col_company_desc: string;
    footer_col_services: string;
    footer_col_products: string;
    footer_col_offices: string;
    footer_office_canada: string;
    footer_office_jordan: string;
    footer_office_uae: string;
    footer_connect: string;
    footer_connect_desc: string;
    footer_rights: string;
    footer_privacy: string;
    footer_terms: string;

    // Chatbot
    chatbot_placeholder: string;
    chatbot_welcome: string;
}

export const translations: Record<Language, Translations> = {
    en: {
        // Navigation
        nav_services: "Services",
        nav_products: "Products",
        nav_academy: "Academy",
        nav_projects: "Projects",
        nav_get_started: "Get Started",

        // Hero
        hero_title: "Architecting the Future of Digital Trust",
        hero_subtitle: "High-performance AI Solutions, Cybersecurity, and Software Excellence for the Global Enterprise.",
        hero_cta: "Start Your Journey",
        hero_secondary_cta: "Explore Services",

        // Services
        services_title: "Core Expertise",
        services_subtitle: "End-to-End Digital Assurance",
        service_ai_title: "AI Solutions",
        service_ai_desc: "Custom AI models and intelligent automation systems designed for scalable enterprise deployment.",
        service_qa_title: "Software Quality",
        service_qa_desc: "Comprehensive QA strategies ensuring flawless performance and user experience.",
        service_cyber_title: "Cybersecurity",
        service_cyber_desc: "Advanced threat detection and security architecture to protect critical assets.",
        service_gov_title: "IT Governance",
        service_gov_desc: "Strategic alignment with global standards like ISO and TMMi for operational excellence.",

        // Products
        products_subtitle: "Proprietary Technology",
        products_title: "The Innovation Hub",
        products_desc: "Tools designed to define the next generation of digital excellence.",
        product_faheem_title: "Faheem",
        product_faheem_label: "Agentic QA Intelligence",
        product_faheem_desc: "Faheem: Agentic QA Intelligence. The AI agent that automates the end-to-end testing cycle.",
        product_faheem_cta: "Request Demo",
        product_compliance_title: "Compliance Assessor",
        product_compliance_label: "Enterprise Governance",
        product_compliance_desc: "Compliance Assessor: AI-driven gap analysis for ISO 9001 and TMMi.",
        product_compliance_cta: "Start Assessment",

        // Academy
        academy_subtitle: "Knowledge Hub",
        academy_title: "Qertex Academy",
        academy_desc: "Empower Your Team. Elevate Your Future.",
        academy_card_ai_title: "AI Development",
        academy_card_ai_desc: "Master the full lifecycle of AI, from foundational algorithms to robust, scalable deployments.",
        academy_card_ml_title: "ML Concepts",
        academy_card_ml_desc: "Demystify ML. Learn core principles and real-world application for data-driven innovation.",
        academy_card_istqb_title: "ISTQB Foundation",
        academy_card_istqb_desc: "Achieve global recognition with industry best practices in software quality assurance.",
        academy_card_agile_title: "Agile Scrum",
        academy_card_agile_desc: "Transform your project delivery with agile principles for faster iterations.",
        academy_card_auto_title: "Test Automation",
        academy_card_auto_desc: "Build resilient, scalable test automation frameworks for faster releases.",
        academy_cta_view: "View Course",

        // Projects
        projects_subtitle: "Global Impact",
        projects_title: "Global Impact Projects",
        project_vat_title: "VAT Systems Implementation",
        project_smart_city_title: "Smart City Grid",
        project_banking_title: "Secure Banking Portal",
        project_health_title: "E-Health Records System",
        project_view_case: "View Case Study",

        // Footer
        footer_col_company_desc: "Qertex leverages Agentic AI to redefine software quality, governance, and digital security for the enterprise.",
        footer_col_services: "Services",
        footer_col_products: "Products",
        footer_col_offices: "Global Offices",
        footer_office_canada: "Manama, Bahrain",
        footer_office_jordan: "Amman, Jordan",
        footer_office_uae: "Dubai, UAE",
        footer_connect: "Connect",
        footer_connect_desc: "Partner with us for your next digital transformation.",
        footer_rights: "© 2025 Qertex. All rights reserved.",
        footer_privacy: "Privacy Policy",
        footer_terms: "Terms of Service",

        // Chatbot
        chatbot_placeholder: "Type your message...",
        chatbot_welcome: "Hi, I'm Faheem. How can I assist your team today?",
    },
    ar: {
        // Navigation
        nav_services: "خدماتنا",
        nav_products: "منتجاتنا",
        nav_academy: "أكاديمية كيرتكس",
        nav_projects: "مشاريعنا",
        nav_get_started: "ابدأ الآن",

        // Hero
        hero_title: "بناء مستقبل الثقة الرقمية",
        hero_subtitle: "حلول الذكاء الاصطناعي عالية الأداء، الأمن السيبراني، والتميز البرمجي للمؤسسات العالمية.",
        hero_cta: "ابدأ رحلتك",
        hero_secondary_cta: "اكتشف خدماتنا",

        // Services
        services_title: "الخبرات الأساسية",
        services_subtitle: "ضمان رقمي شامل",
        service_ai_title: "حلول الذكاء الاصطناعي",
        service_ai_desc: "نماذج الذكاء الاصطناعي المخصصة وأنظمة الأتمتة الذكية المصممة للنشر المؤسسي القابل للتوسع.",
        service_qa_title: "جودة البرمجيات",
        service_qa_desc: "استراتيجيات شاملة لضمان الجودة تضمن أداءً لا تشوبه شائبة وتجربة مستخدم متميزة.",
        service_cyber_title: "الأمن السيبراني",
        service_cyber_desc: "كشف التهديدات المتقدمة وبنية أمنية لحماية الأصول الحرجة.",
        service_gov_title: "حوكمة تقنية المعلومات",
        service_gov_desc: "المواءمة الاستراتيجية مع المعايير العالمية مثل ISO و TMMi للتميز التشغيلي.",

        // Products
        products_subtitle: "تكنولوجيا حصرية",
        products_title: "مركز الابتكار",
        products_desc: "أدوات مصممة لتعريف الجيل القادم من التميز الرقمي.",
        product_faheem_title: "فهيم",
        product_faheem_label: "ذكاء ضمان الجودة الوكيل",
        product_faheem_desc: "فهيم: ذكاء الاختبار الوكيل. وكيل ذكاء اصطناعي يدير دورة الفحص بالكامل تلقائياً.",
        product_faheem_cta: "اطلب عرضاً توضيحياً",
        product_compliance_title: "مقيم الامتثال",
        product_compliance_label: "حوكمة المؤسسات",
        product_compliance_desc: "مقيّم الامتثال: تحليل الفجوات بالذكاء الاصطناعي لمعايير ISO 9001 و TMMi.",
        product_compliance_cta: "ابدأ التقييم",

        // Academy
        academy_subtitle: "مركز المعرفة",
        academy_title: "أكاديمية كيرتكس",
        academy_desc: "مكّن فريقك. ارتق بمستقبلك.",
        academy_card_ai_title: "تطوير الذكاء الاصطناعي",
        academy_card_ai_desc: "أتقن دورة حياة الذكاء الاصطناعي الكاملة، من الخوارزميات الأساسية إلى عمليات النشر القوية.",
        academy_card_ml_title: "مفاهيم تعلم الآلة",
        academy_card_ml_desc: "بسط تعلم الآلة. تعلم المبادئ الأساسية والتطبيقات الواقعية للابتكار القائم على البيانات.",
        academy_card_istqb_title: "أساسيات ISTQB",
        academy_card_istqb_desc: "حقق اعترافاً عالمياً. أتقن أفضل ممارسات الصناعة في ضمان جودة البرمجيات.",
        academy_card_agile_title: "أساسيات أجايل",
        academy_card_agile_desc: "حول تسليم مشروعك. تبن مبادئ أجايل لتكرارات أسرع وتعاون أفضل.",
        academy_card_auto_title: "احتراف أتمتة الفحص",
        academy_card_auto_desc: "أتمت للكفاءة. ابن أطر أتمتة اختبار مرنة وقابلة للتوسع لإصدارات أسرع.",
        academy_cta_view: "عرض الدورة",

        // Projects
        projects_subtitle: "تأثير عالمي",
        projects_title: "مشاريع ذات تأثير عالمي",
        project_vat_title: "تنفيذ أنظمة ضريبة القيمة المضافة",
        project_smart_city_title: "شبكة المدينة الذكية",
        project_banking_title: "بوابة مصرفية آمنة",
        project_health_title: "نظام السجلات الصحية الإلكترونية",
        project_view_case: "عرض دراسة الحالة",

        // Footer
        footer_col_company_desc: "تستفيد كيرتكس من الذكاء الاصطناعي الوكيل لإعادة تعريف جودة البرمجيات، والحوكمة، والأمن الرقمي للمؤسسات.",
        footer_col_services: "الخدمات",
        footer_col_products: "المنتجات",
        footer_col_offices: "مكاتبنا العالمية",
        footer_office_canada: "المنامة، البحرين",
        footer_office_jordan: "عمّان، الأردن",
        footer_office_uae: "دبي، الإمارات العربية المتحدة",
        footer_connect: "تواصل معنا",
        footer_connect_desc: "شاركنا لتحولك الرقمي القادم.",
        footer_rights: "© 2025 كيرتكس. جميع الحقوق محفوظة.",
        footer_privacy: "سياسة الخصوصية",
        footer_terms: "شروط الخدمة",

        // Chatbot
        chatbot_placeholder: "كيف يمكننا المساعدة؟",
        chatbot_welcome: "مرحباً، أنا فهيم. كيف يمكنني مساعدتكم اليوم؟",
    }
};
