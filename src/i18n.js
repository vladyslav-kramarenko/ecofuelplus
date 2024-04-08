import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    en: {
        translation: {
            "menu": {
                'home': "Home",
                'about': "About Us",
                'fuelcomparison': "Fuel Comparison",
                'contacts': "Contacts",
                'services':"Services",
            },
            "contactUsPopup":"Contact Us",
            "Welcome": "Welcome to Ecofuel Plus",
            // Other keys and translations...

            //     contacts
            "contacts": {
                "CompanyFullName": "LIMITED LIABILITY COMPANY ECOFUEL PLUS",
                "CompanyName": "LLC ECOFUEL PLUS",
                "CompanyCode": "EDRPOU code",
                "Location": "Volyn region, Lutsk district, village Shepel",
                "Phone": "Phone",
                "QualityCertificate": "Pellets Certificate of Quality"
            },
            "AboutSection": {
                "Title": "Ecofuel Plus",
                "Paragraph1": "Ecofuel Plus is a Ukrainian pellet company that aims to provide environmentally friendly energy solutions. We specialize in the production of high-quality wood pellets that can be used as a renewable and clean energy source.",
                "Paragraph2": "Our wood pellets are made from the best natural materials, without any additives or chemicals, which ensures that our product is safe and healthy for both the environment and our customers. We strive to ensure that our manufacturing process was as environmentally friendly as possible, focusing on reducing carbon emissions and minimizing waste.",
                "Paragraph3": "At EcoFuel, we pride ourselves on our commitment to sustainable energy solutions. Our wood pellets are highly efficient and offer a low-emission, high-quality alternative to traditional fossil fuels. They are ideal for use in heating systems, boilers and furnaces, and are an excellent choice for for both residential and commercial applications.",
                "Paragraph4": "In addition to our commitment to sustainable manufacturing practices, we also prioritize excellent customer service. We believe that our customers are our partners in creating a sustainable future, and we strive to provide them with the best products and services.",
                "Paragraph5": "At EcoFuel PLus, we are committed to creating a cleaner and more sustainable future for our planet. We invite you to join us in our commitment to green energy solutions and sustainable lifestyles.",
            },
            "copyright": "EcoFuel Plus. All rights reserved."
        }
    },
    ua: {
        translation: {
            "menu": {
                'home': "Головна",
                'about': "Про нас",
                'fuelcomparison': "Порівняння палива",
                'contacts': "Контакти",
                'services':"Послуги",
            },
            "contactUsPopup":"Зв'яжіться з Нами",
            "Welcome": "Ласкаво просимо до Екофьюел Плюс",
            // Other keys and translations...
            //     contacts
            "contacts": {
                "CompanyFullName": "ТОВАРИСТВО З ОБМЕЖЕНОЮ ВІДПОВІДАЛЬНІСТЮ ЕКОФЬЮЕЛ ПЛЮС",
                "CompanyName": "ТОВ ЕКОФЬЮЕЛ ПЛЮС",
                "CompanyCode": "Код ЄДРПОУ",
                "Location": "Волинська область, Луцький район, с.Шепель",
                "Phone": "Телефон",
                "QualityCertificate": "Сертифікат якості пелет",
            },
            "AboutSection": {
                "Title": "ЕКОФЬЮЕЛ ПЛЮС",
                "Paragraph1": "Екофьюел Плюс - це українська компанія з виробництва пелет, яка націлена на надання екологічно чистих енергетичних рішень. Ми спеціалізуємося на виробництві високоякісних деревних пелет, які можна використовувати як відновлюване та чисте джерело енергії.",
                "Paragraph2": "Наші деревні гранули виготовляються з найкращих натуральних матеріалів, без будь-яких добавок або хімікатів, що гарантує, що наш продукт безпечний і здоровий як для навколишнього середовища, так і для наших клієнтів. Ми прагнемо забезпечити, щоб наш виробничий процес був максимально екологічним, зосереджуючись на зменшенні викидів вуглецю та мінімізації відходів.",
                "Paragraph3": "У EcoFuel ми пишаємося своєю відданістю стійким енергетичним рішенням. Наші деревні пелети є високоефективними та пропонують низькі викиди, високоякісну альтернативу традиційному викопному паливу. Вони ідеально підходять для використання в системах опалення, котлах і печах, і є чудовим вибором як для житлових, так і для комерційних застосувань.",
                "Paragraph4": "Окрім нашої прихильності екологічним виробничим практикам, ми також надаємо пріоритет відмінному обслуговуванню клієнтів. Ми віримо, що наші клієнти є нашими партнерами у створенні сталого майбутнього, і ми прагнемо надавати їм найкращі продукти та послуги.",
                "Paragraph5": "У EcoFuel PLus ми прагнемо створити більш чисте та стійке майбутнє для нашої планети. Ми запрошуємо вас приєднатися до нашої відданості екологічно чистим енергетичним рішенням і екологічному способу життя.",
            },
            "copyright": "ЕКОФЬЮЕЛ ПЛЮС. Усі права захищені."
        }
    },
    ru: {
        translation: {
            "menu": {
                'home': "Главная",
                'about': "О нас",
                'fuelcomparison': "Сравнение топлива",
                'contacts': "Контакты",
                'services':"Услуги",
            },
            "contactUsPopup":"Свяжитесь с Нами",
            "Welcome": "Добро пожаловать в Экофьюэл Плюс",
            // Other keys and translations...
            //     contacts
            "contacts": {
                "CompanyFullName": "ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ ЕКОФЬЮЕЛ ПЛЮС",
                "CompanyName": "ООО ЭКОФЬЮЭЛ ПЛЮС",
                "CompanyCode": "Код ЕГРПОУ",
                "Location": "Волынская область, Луцкий район, с.Шепель",
                "Phone": "Телефон",
                "QualityCertificate": "Сертификат качества пеллет"
            },
            "AboutSection": {
                "Title": "ЭКОФЬЮЭЛ ПЛЮС",
                "Paragraph1": "ЭКОФЬЮЭЛ ПЛЮС - это украинская компания по производству пеллет, которая нацелена на предоставление экологически чистых энергетических решений. Мы специализируемся на производстве высококачественных древесных пеллет, которые можно использовать как возобновляемый и чистый источник энергии.",
                "Paragraph2": "Наши гранулы изготавливаются из лучших натуральных материалов, без каких-либо добавок или химикатов, что гарантирует, что наш продукт безопасен и здоров как для окружающей среды, так и для наших клиентов. Мы стремимся обеспечить, чтобы наш производственный процесс был максимально экологичен, сосредотачиваясь на уменьшении выбросов углерода и минимизации отходов.",
                "Paragraph3": "В EcoFuel мы гордимся своей преданностью устойчивым энергетическим решениям. Наши древесные пеллеты высокоэффективны и предлагают низкие выбросы, высококачественную альтернативу традиционному ископаемому топливу. Они идеально подходят для использования в системах отопления, котлах и печах, и являются отличным выбором как для жилых, так и для коммерческих приложений.",
                "Paragraph4": "омимо нашей приверженности экологическим производственным практикам, мы также предоставляем приоритет отличному обслуживанию клиентов. Мы верим, что наши клиенты являются нашими партнерами в создании устойчивого будущего, и мы стремимся предоставлять им самые лучшие продукты и услуги.",
                "Paragraph5": "В ЭКОФЬЮЭЛ ПЛЮС мы стремимся создать более чистое и устойчивое будущее для нашей планеты. Мы приглашаем вас присоединиться к нашей преданности экологически чистым энергетическим решениям и экологическому образу жизни.",
            },
            "copyright": "ЭКОФЬЮЭЛ ПЛЮС. Все права защищены."
        }
    }
    // Add more languages here...
};

i18n
    .use(initReactI18next) // Passes i18n down to react-i18next
    .use(LanguageDetector) // Detects user language
    .init({
        resources,
        fallbackLng: "ua", // Use English if detected lang is not available
        interpolation: {
            escapeValue: false // React already safes from XSS
        }
    });

export default i18n;