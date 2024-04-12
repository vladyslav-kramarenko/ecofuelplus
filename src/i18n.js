import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    en: {
        translation: {
            menu: {
                'home': "Home",
                'about': "About Us",
                'fuelcomparison': "Fuel Comparison",
                'contacts': "Contacts",
                'services': "Services",
                'pellets': "Pellets"
            },
            services: {
                "storage": "Summer Prices in Winter.",
                "storageDescription1": "Everyone who uses solid fuel in Ukraine faces well-known problems: seasonal price fluctuations, lack of storage space, the risk of deterioration of pellet quality due to moisture, as well as time and effort spent on organizing storage. Unfortunately, an additional current threat is the risk of pellet loss due to military operations, including missile or projectile hits, fires, and other unforeseen circumstances.",
                "storageDescription2": "But we have a solution! Our pellet storage service not only solves the above issues, allowing you to save up to UAH 1,000 per ton, free up space and protect fuel from moisture, but also minimizes the risk of pellet loss due to military operations. We pay maximum attention to the security of our storage, including measures to protect against fire and other emergency situations, which allows us to guarantee the preservation of your fuel in the safest conditions.",
                "storageDescription3": "Contact us to learn more about our service and how we can help you make the use of solid fuel in Ukraine not only more profitable and convenient, but also safer.",
                "delivery": "Your Delivery, Our Priority",
                "deliveryDescription1": "At Ecofuel Plus, we understand the importance of getting your biofuel safely and promptly to your location. Our production facilities are strategically located in the Volyn region, placing us in an ideal position to serve both wholesale and retail clients across Ukraine and beyond.",
                "deliveryDescription2": "To ensure transparency and satisfaction, we encourage our clients to consult with our dedicated managers. This allows us to calculate the delivery cost based on the mileage and provide you with the most accurate and favorable quote. Remember, our focus is not on profiting from delivery services. Instead, we aim to offer rapid and economical transportation options that align with your requirements.",
                "deliveryDescription3": "We understand that delivering our product to your doorstep is more than a service — it's a solution to your biofuel needs. By choosing Ecofuel Plus, you're opting for a partner dedicated to providing you with the best products, complemented by delivery services that bring convenience and efficiency straight to your home or business.",
                "deliveryDescription4": "Let us take care of the logistics while you enjoy the warmth and sustainability of our eco-friendly pellets. Contact us today to arrange your delivery and join us in our commitment to a greener, cleaner future.",
                "customPacking": "Branded by You, Powered by Ecofuel",
                "customPackagingDescription1": "Elevate your brand with our custom packaging service, where your wood pellets are packed in your very own branded packaging. This service allows you to seamlessly extend your brand's reach and maintain a cohesive identity across all your products. By using your unique packaging for our high-quality wood pellets, you reinforce brand recognition and enhance consumer trust.",
                "customPackagingDescription2": "Key Benefits:",
                "customPackagingDescription3": "Brand Continuity: Your brand, your design on every package, ensuring a consistent brand experience for your customers.",
                "customPackagingDescription4": "Market Differentiation: Stand out in the marketplace with uniquely branded, eco-friendly product options.",
                "customPackagingDescription5": "Customer Engagement: Increase brand loyalty and recognition by providing products that are visually aligned with your company's branding.",
                "reusePacking": "Reuse and Save",
                "reusePackingDescription1": "For our eco-conscious partners, the Reuse and Save program offers an excellent opportunity to both save on costs and reduce environmental impact. If you’ve previously ordered bulk pellets in big bag containers, you can return these containers to us for a refill. This not only cuts down on waste but also removes the cost of new packaging from your purchase, passing on those savings directly to you.",
                "reusePackingDescription2": "Key Benefits:",
                "reusePackingDescription3": "Cost Savings: Reusing your big bag containers decreases the overall cost of your purchases by eliminating the need for new packaging.",
                "reusePackingDescription4": "Environmental Responsibility: Reducing packaging waste contributes to your sustainability goals and appeals to environmentally aware consumers.",
                "reusePackingDescription5": "Simplified Logistics: By reusing packaging, you streamline your operations, reducing both logistical complexities and environmental footprints.",
            },
            pellets: {
                "about": "In general, Biofuel is produced from the waste of woodworking production, so the price per ton of Biofuel is quite low. Pellets are produced in the form of granules, made from different types of wood.",
                "parameter": "Parameter",
                "wood": "Wood",
                "woodPellet": "Wood Pellet",
                "coal": "Coal",
                "gas": "Gas",
                "moisture": "Moisture Content, %",
                "density": "Bulk Density, kg/m3",
                "calorificMjKg": "Calorific Value, MJ/kg",
                "calorificKWH": "Calorific Value, kWh",

            },
            "contactUsPopup": "Contact Us",
            "Welcome": "Welcome to Ecofuel Plus",

            contacts: {
                "CompanyFullName": "LIMITED LIABILITY COMPANY ECOFUEL PLUS",
                "CompanyName": "LLC ECOFUEL PLUS",
                "CompanyCode": "EDRPOU code",
                "Location": "Volyn region, Lutsk district, village Shepel",
                "Phone": "Phone",
                "QualityCertificate": "Pellets Certificate of Quality"
            },
            AboutSection: {
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
            menu: {
                'home': "Головна",
                'about': "Про нас",
                'fuelcomparison': "Порівняння палива",
                'contacts': "Контакти",
                'services': "Послуги",
                'pellets': "Пелети"
            },
            services: {
                "storage": "Взимку за Літніми Цінами.",
                "storageDescription1": "Кожен, хто використовує тверде паливо в Україні, стикається з відомими проблемами: сезонне коливання цін, нестача простору для зберігання, ризик погіршення якості пелет через вологу, а також витрати часу та зусиль на організацію зберігання. На жаль, додатковою актуальною загрозою є ризик втрати пелет через воєнні дії, включаючи попадання ракет або снарядів, пожежі та інші непередбачувані обставини.",
                "storageDescription2": "Але у нас є рішення! Наша послуга зберігання пелет не тільки вирішує зазначені вище питання, дозволяючи вам економити до 1000 грн на тонні, звільняти простір та захищати паливо від вологи, але й мінімізує ризик втрати пелет через воєнні дії. Ми приділяємо максимум уваги безпеці нашого зберігання, включаючи заходи щодо захисту від пожеж та інших надзвичайних ситуацій, що дозволяє нам гарантувати збереження вашого палива в найбезпечніших умовах.",
                "storageDescription3": "Зв'яжіться з нами, щоб дізнатися більше про нашу послугу та як ми можемо допомогти вам зробити використання твердого палива в Україні не тільки вигіднішим і зручнішим, але й безпечнішим.",
                "delivery": "Ваша доставка – наш пріоритет",
                "deliveryDescription1": "У ЕКОФЬЮЕЛ ПЛЮС ми розуміємо важливість безпечної та швидкої доставки вашого біопалива до вас. Наші виробничі потужності стратегічно розташовані у Волинській області, що робить нас ідеальними для обслуговування як оптових, так і роздрібних клієнтів по всій Україні і за її межами.",
                "deliveryDescription2": "Щоб забезпечити прозорість і задоволення, ми заохочуємо наших клієнтів консультуватися з нашими менеджерами. Це дає нам змогу розрахувати вартість доставки на основі відстані та надати вам найкращу пропозицію. Пам'ятайте, нага мета - не прибуток від доставки, натомість ми прагнемо запропонувати швидкі та економічні варіанти транспортування, які відповідають вашим вимогам.",
                "deliveryDescription3": "Ми розуміємо, що доставка нашого продукту до вашого порога — це більше, ніж послуга — це вирішення ваших потреб у біопаливі. Обираючи ЕКОФЬЮЕЛ ПЛЮС, ви обираєте партнера, який доставить вам найкращі продукти у зручний для вас спосіб прямо до вашого дому або бізнесу.",
                "deliveryDescription4": "Дозвольте нам подбати про логістику, поки ви насолоджуєтеся теплом і довговічністю наших екологічно чистих гранул. Зв'яжіться з нами сьогодні, щоб домовитися про доставку та приєднатися до нашого прагнення до екологічнішого та чистішого майбутнього.",
                "customPacking": "Custom Packing. Branded by You, Powered by Ecofuel",
                "customPackagingDescription1": "",
                "customPackagingDescription2": "",
            },
            pellets: {
                "about": "Загалом біопаливо виробляється з відходів деревообробного виробництва, тому ціна за тонну біопалива досить низька. Пелети випускаються у вигляді гранул, виготовляються з різних порід деревини.",
                "parameter": "Parameter",
                "wood": "Дерево",
                "woodPellet": "Деревна пелета",
                "coal": "Вугілля",
                "gas": "Газ",
                "moisture": "Вологість, %",
                "density": "Насипна щільність, кг/м3",
                "calorificMjKg": "Калорійність, МДж/кг",
                "calorificKWH": "Калорійність, кВТ*г",

            },
            "contactUsPopup": "Зв'яжіться з Нами",
            "Welcome": "Ласкаво просимо до Екофьюел Плюс",

            contacts: {
                "CompanyFullName": "ТОВАРИСТВО З ОБМЕЖЕНОЮ ВІДПОВІДАЛЬНІСТЮ ЕКОФЬЮЕЛ ПЛЮС",
                "CompanyName": "ТОВ ЕКОФЬЮЕЛ ПЛЮС",
                "CompanyCode": "Код ЄДРПОУ",
                "Location": "Волинська область, Луцький район, с.Шепель",
                "Phone": "Телефон",
                "QualityCertificate": "Сертифікат якості пелет",
            },
            AboutSection: {
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
    pl: {
        translation: {
            menu: {
                'home': "Dom",
                'about': "O nas",
                'fuelcomparison': "Porównanie paliwa",
                'contacts': "Kontakty",
                'services': "Usługi",
                'pellets': "Pelety"
            },
            services: {
                "storage": "Zimą po Cenach Letnich.",
                "storageDescription1": "Każdy, kto korzysta z paliw stałych na Ukrainie, boryka się z dobrze znanymi problemami: sezonowymi wahaniami cen, brakiem miejsca do przechowywania, ryzykiem pogorszenia jakości pelletu na skutek wilgoci, a także czasem i wysiłkiem wymaganym do zorganizowania przechowywania.",
                "storageDescription2": "Ale mamy rozwiązanie! Nasza usługa magazynowania pelletu nie tylko rozwiązuje powyższe problemy, pozwalając zaoszczędzić nawet 1000 UAH na tonie, zwolnić miejsce i chronić paliwo przed wilgocią. Przywiązujemy maksymalną wagę do bezpieczeństwa naszego przechowywania, uwzględniając środki ochrony przed pożarami i innymi sytuacjami awaryjnymi, co gwarantuje, że Państwa paliwo będzie przechowywane w najbezpieczniejszych warunkach.",
                "storageDescription3": "Skontaktuj się z nami, aby dowiedzieć się więcej o naszych usługach i o tym, jak możemy pomóc Ci sprawić, aby korzystanie z paliw stałych na Ukrainie było nie tylko bardziej opłacalne i wygodne, ale także bezpieczniejsze.",
                "delivery": "Dostawa",
                "deliveryDescription1": "",
                "deliveryDescription2": "",
                "customPacking": "Niestandardowe opakowanie",
                "customPackagingDescription1": "",
                "customPackagingDescription2": "",
            },
            pellets: {
                "about": "Biopaliwo produkowane jest z odpadów drzewnych, dlatego cena za tonę Biopaliwa jest dość niska. Pellet produkowany jest w postaci granulatu z różnych gatunków drewna.",
                "parameter": "Parametr",
                "wood": "Drzewo",
                "woodPellet": "Pellet drzewny",
                "coal": "Węgiel",
                "gas": "Gaz",
                "moisture": "Wilgotność, %",
                "density": "Gęstość nasypowa, kg/m3",
                "calorificMjKg": "Wartość opałowa, MJ/kg",
                "calorificKWH": "Wartość opałowa, kWh",

            },
            "contactUsPopup": "Skontaktuj się z nami",
            "Welcome": "Witamy w Ecofuel Plus",
            contacts: {
                "CompanyFullName": "SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ EKOFUEL PLUS",
                "CompanyName": "ECOFUEL PLUS LLC",
                "CompanyCode": "Kod USREOU",
                "Location": "Obwód wołyński, rejon łucki, wieś Szepel",
                "Phone": "Telefon",
                "QualityCertificate": "Certyfikat jakości pelletu"
            },
            AboutSection: {
                "Title": "ECOFUEL PLUS",
                "Paragraph1": "ECOFUEL PLUS to ukraińska firma produkująca pellet, której celem jest dostarczanie przyjaznych dla środowiska rozwiązań energetycznych. Specjalizujemy się w produkcji wysokiej jakości pelletu drzewnego, który może być wykorzystany jako odnawialne i czyste źródło energii.",
                "Paragraph2": "Nasze granulaty wykonane są z najlepszych, naturalnych materiałów, bez żadnych dodatków i substancji chemicznych, co gwarantuje, że nasz produkt jest bezpieczny i zdrowy zarówno dla środowiska, jak i naszych klientów. Zależy nam na tym, aby nasz proces produkcyjny był jak najbardziej przyjazny dla środowiska w miarę możliwości skupiając się na redukcji emisji gazów cieplarnianych i minimalizacji odpadów.",
                "Paragraph3": "W EcoFuel jesteśmy dumni z naszego zaangażowania w zrównoważone rozwiązania energetyczne. Nasze pelety drzewne są bardzo wydajne i stanowią niskoemisyjną, wysokiej jakości alternatywę dla tradycyjnych paliw kopalnych. Idealnie nadają się do stosowania w systemach grzewczych, kotłach i piecach i stanowią doskonały wybór zarówno do zastosowań mieszkaniowych, jak i komercyjnych.",
                "Paragraph4": "Oprócz naszego zaangażowania w praktyki produkcyjne przyjazne dla środowiska, priorytetem jest dla nas także doskonała obsługa klienta. Wierzymy, że nasi klienci są naszymi partnerami w tworzeniu zrównoważonej przyszłości i jesteśmy zaangażowani w dostarczanie im najlepszych produktów i usług.",
                "Paragraph5": "W ECOFUEL PLUS jesteśmy zaangażowani w tworzenie czystszej i bardziej zrównoważonej przyszłości dla naszej planety. Zapraszamy Cię do przyłączenia się do naszego zaangażowania w rozwiązania w zakresie czystej energii i ekologicznego stylu życia.",
            },
            "copyright": "ECOFUEL PLUS. Wszelkie prawa zastrzeżone."
        }
    },
    ru: {
        translation: {
            "menu": {
                'home': "Главная",
                'about': "О нас",
                'fuelcomparison': "Сравнение топлива",
                'contacts': "Контакты",
                'services': "Услуги",
                'pellets': "Пеллеты"
            },
            services: {
                "storage": "Зимой по Летним Ценам.",
                "storageDescription1": "Каждый, кто использует твердое топливо в Украине, сталкивается с известными проблемами: сезонные колебания цен, нехватка пространства для хранения, риск ухудшения качества пеллет из-за влаги, а также затраты времени и усилий на организацию хранения. К сожалению, дополнительной актуальной угрозой является риск потери пеллет из-за военных действий, включая попадание ракет или снарядов, пожары и другие непредсказуемые обстоятельства.",
                "storageDescription2": "Но у нас есть решение! Наша услуга хранения пеллет не только решает указанные выше вопросы, позволяя вам экономить до 1000 грн на тонне, освобождать пространство и защищать топливо от влаги, но и минимизирует риск потери пеллет из-за военных действий. Мы уделяем максимум внимания безопасности нашего хранения, включая меры по защите от пожаров и других чрезвычайных ситуаций, что позволяет гарантировать сохранение вашего топлива в самых безопасных условиях.",
                "storageDescription3": "Свяжитесь с нами, чтобы узнать больше о нашей услуге и как мы можем помочь вам сделать использование твердого топлива в Украине не только более выгодным и удобным, но и более безопасным.",
                "delivery": "Ваша доставка - наш приоритет",
                "deliveryDescription1": "В Ecofuel Plus мы понимаем важность безопасной и быстрой доставки вашего биотоплива к вам. Наши производственные мощности стратегически расположены в Волынской области, что делает нас идеальными для обслуживания как оптовых, так и розничных клиентов по всей Украине и за рубежом.",
                "deliveryDescription2": "Мы рекомендуем клиентам консультироваться с нашими менеджерами. Это позволяет нам рассчитать стоимость доставки на основе расстояния и предоставить вам наиболее точное и выгодное предложение. Помните, мы не стремимся получить прибыль от услуг доставки. Вместо этого - мы стремимся предложить быстрые и экономичные варианты транспортировки, соответствующие вашим требованиям.",
                "deliveryDescription3": "Мы понимаем, что доставка нашего продукта к вашему порогу — это больше, чем услуга, это решение ваших потребностей в биотопливе. Выбирая Ecofuel Plus, вы выбираете партнера, который будет предоставлять вам лучшие продукты, которые приносят удобство и эффективность прямо вам домой или на предприятие.",
                "deliveryDescription4": "Позвольте нам позаботиться о логистике, пока вы наслаждаетесь теплом и экологичностью наших пеллет. Свяжитесь с нами сегодня, чтобы организовать доставку и присоединяйтесь к нам в нашем стремлении к более экологичному и чистому будущему.",
                "customPacking": "Custom Packing",
                "customPackagingDescription1": "",
                "customPackagingDescription2": "",
            },
            pellets: {
                "about": "Биотопливо производится из отходов деревообрабатывающего производства, поэтому цена за тонну Биотоплива достаточно низкая. Пеллеты производятся в виде гранул, изготовленных из разных пород древесины.",
                "parameter": "Параметр",
                "wood": "Дерево",
                "woodPellet": "Древесная Пеллета",
                "coal": "Уголь",
                "gas": "Газ",
                "moisture": "Влажность, %",
                "density": "Насыпная плотность, кг/м3",
                "calorificMjKg": "Калорийность, МДж/кг",
                "calorificKWH": "Calorific Value, кВт*ч",

            },
            "contactUsPopup": "Свяжитесь с Нами",
            "Welcome": "Добро пожаловать в Экофьюэл Плюс",

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
                "Paragraph4": "Помимо нашей приверженности экологическим производственным практикам, мы также предоставляем приоритет отличному обслуживанию клиентов. Мы верим, что наши клиенты являются нашими партнерами в создании устойчивого будущего, и мы стремимся предоставлять им самые лучшие продукты и услуги.",
                "Paragraph5": "В ЭКОФЬЮЭЛ ПЛЮС мы стремимся создать более чистое и устойчивое будущее для нашей планеты. Мы приглашаем вас присоединиться к нашей преданности экологически чистым энергетическим решениям и экологическому образу жизни.",
            },
            "copyright": "ЭКОФЬЮЭЛ ПЛЮС. Все права защищены."
        }
    }
};

i18n
    .use(initReactI18next) // Passes i18n down to react-i18next
    .use(LanguageDetector) // Detects user language
    .init({
        resources,
        fallbackLng: "ua", //  default language
        interpolation: {
            escapeValue: false // React already safes from XSS
        }
    });

export default i18n;