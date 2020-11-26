<template>
    <div id="customers" class="wrapper">
        <vue-headful
                :title=metaTitle
                :description=metaDescription
        />
        <b-container-floid data-aos="fade-up" data-aos-duration="2000">
            <app-breadcrumb :breadcbItems=breadcrumbItemsCustomerPage></app-breadcrumb>
            <app-page-main-title classStyle="main-title-page" :title=labelCustomerPageMainTitle></app-page-main-title>
            <app-page-sub-title classStyle="sub-title-fa" :title=labelCustomerPageSubTitle></app-page-sub-title>
            <app-paragraph
                    text="سال‌ها تجربه کاری در زمینه فناوری رسانه و ارتباطات، نوآوری در محصولات و خدمات و برآورده نمودن نیازهای سفارشی مشتریان، در کنار اجرای پروژه‌های بزرگ ملی و تامین نیازهای وزارتخانه‌ها،‌ ‌شهرداری‌ها،‌ دانشگاه‌ها، بیمارستان‌ها، هتل‌ها، ارگان‌ها و شرکت‌های خصوصی و دولتی در حوزه فناوری رسانه و مدیا، گروه صمیم را به همراهی مطمئن برای مشتریان خود تبدیل کرده است."/>
            <section>
                <b-container>
                    <b-row>
                        <item-image-border-box-6
                                data-aos-delay="200"
                                classStyle="customer-style"
                                image="customers/001-IRIB.jpg"
                                text="صدا و سیمای جمهوری اسلامی ایران"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="300"
                                classStyle="customer-style"
                                image="customers/002-ertebatat.jpg"
                                text="وزارت ارتباطات و فناوری اطلاعات"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="400"
                                classStyle="customer-style"
                                image="customers/003-oloum.jpg"
                                text="وزارت علوم، تحقیقات و فناوری"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="500"
                                classStyle="customer-style"
                                image="customers/004-Majles.jpg"
                                text="مرکز برنامه ریزی و فناوری اطلاعات مجلس شورای اسلامی"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="200"
                                classStyle="customer-style"
                                image="customers/005-bank-e-markazi.jpg"
                                text="بانک مرکزی جمهوری اسلامی ایران"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="300"
                                classStyle="customer-style"
                                image="customers/006-estrategic.jpg"
                                text="مرکز بررسی های استراتژیک ریاست جمهوری"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="400"
                                classStyle="customer-style"
                                image="customers/007-tavanir.jpg"
                                text="شرکت توانیر"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="500"
                                classStyle="customer-style"
                                image="customers/008-tehran-shahrdari.jpg"
                                text="شهرداری تهران"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="200"
                                classStyle="customer-style"
                                image="customers/009-AlAlam-TV.jpg"
                                text="شبکه برون مرزی العالم"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="300"
                                classStyle="customer-style"
                                image="customers/010-Almenar-TV.jpg"
                                text="شبکه المنار لبنان"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="400"
                                classStyle="customer-style"
                                image="customers/011-IRIB-TV3.jpg"
                                text="شبکه سه صدا و سیمای جمهوری اسلامی ایران"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="500"
                                classStyle="customer-style"
                                image="customers/012-Tamaddon-TV.jpg"
                                text="شبکه تلویزیونی تمدن افغانستان"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="200"
                                classStyle="customer-style"
                                image="customers/013-khosousisazi.jpg"
                                text="سازمان خصوصی سازی"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="300"
                                classStyle="customer-style"
                                image="customers/014-Ofogh-TV.jpg"
                                text="شبکه افق"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="400"
                                classStyle="customer-style"
                                image="customers/015-irancell.jpg"
                                text="ایرانسل"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="500"
                                classStyle="customer-style"
                                image="customers/016-IRIB-TV5.jpg"
                                text="شبکه پنج صدا و سیمای جمهوری اسلامی ایران"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="200"
                                classStyle="customer-style"
                                image="customers/017-Mostanad-TV.jpg"
                                text="شبکه مستند"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="300"
                                classStyle="customer-style"
                                image="customers/018-IRIB-TV4.jpg"
                                text="شبکه چهار صدا و سیمای جمهوری اسلامی ایران"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="400"
                                classStyle="customer-style"
                                image="customers/019-j-tehran-shora.jpg"
                                text="شورای اسلامی شهر تهران"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="500"
                                classStyle="customer-style"
                                image="customers/020-k-Shahr-TV.jpg"
                                text="شبکه برون مرزی سحر"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="200"
                                classStyle="customer-style"
                                image="customers/021-melli-naft.jpg"
                                text="وزارت نفت"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="300"
                                classStyle="customer-style"
                                image="customers/022-Qom-TV.jpg"
                                text="صدا و سیمای مرکز قم-شبکه نور"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="400"
                                classStyle="customer-style"
                                image="customers/023-Gilan-TV.jpg"
                                text="صدا و سیمای مرکز گیلان-شبکه باران"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="500"
                                classStyle="customer-style"
                                image="customers/024-hiweb.jpg"
                                text="شرکت داده گستر عصر نوین (های وب)"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="200"
                                classStyle="customer-style"
                                image="customers/025-pars-online.jpg"
                                text="پارسان لین ارتباطات-پارس آنلاین"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="300"
                                classStyle="customer-style"
                                image="customers/026-shatel.jpg"
                                text="فناوری ارتباطات و اطلاعات شاتل"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="400"
                                classStyle="customer-style"
                                image="customers/027-raja.jpg"
                                text="شرکت حمل و نقل ریلی رجا"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="500"
                                classStyle="customer-style"
                                image="customers/028-Press-TV.jpg"
                                text="شبکه برون مرزی Press TV"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="200"
                                classStyle="customer-style"
                                image="customers/029-IRIB-TV1.jpg"
                                text="شبکه یک صدا و سیمای جمهوری اسلامی ایران"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="300"
                                classStyle="customer-style"
                                image="customers/030-mehrabad.jpg"
                                text="فرودگاه بین المللی مهرآباد"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="400"
                                classStyle="customer-style"
                                image="customers/031-amar.jpg"
                                text="مرکز آمار و اطلاعات تهران"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="500"
                                classStyle="customer-style"
                                image="customers/032-borhan.jpg"
                                text="شرکت مدیریت توسعه برهان مبین"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="200"
                                classStyle="customer-style"
                                image="customers/033-iran-khodro.jpg"
                                text="شرکت ایران خودرو"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="300"
                                classStyle="customer-style"
                                image="customers/034-Khabar.jpg"
                                text="شبکه خبر صدا و سیمای جمهوری اسلامی ایران"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="400"
                                classStyle="customer-style"
                                image="customers/035-AlForat-TV.jpg"
                                text="شبکه تلویزیونی الفرات عراق"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="500"
                                classStyle="customer-style"
                                image="customers/036-anarestan.jpg"
                                text="سامانه فروش آنلاین سیم کارت دانش آموزی انارستان"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="200"
                                classStyle="customer-style"
                                image="customers/037-beheshtzahra.jpg"
                                text="سازمان بهشت زهرا"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="300"
                                classStyle="customer-style"
                                image="customers/038-IRIB-TV2.jpg"
                                text="شبکه دو صدا و سیمای جمهوری اسلامی ایران"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="400"
                                classStyle="customer-style"
                                image="customers/039-ifilm-TV.jpg"
                                text="شبکه iFilm"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="500"
                                classStyle="customer-style"
                                image="customers/040-farabi.jpg"
                                text="بنیاد سینمایی فارابی"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="200"
                                classStyle="customer-style"
                                image="customers/041-iran-novin.jpg"
                                text="شرکت ایران نوین"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="300"
                                classStyle="customer-style"
                                image="customers/042-bonyadeshahid.jpg"
                                text="بنیاد شهید و امور ایثارگران"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="400"
                                classStyle="customer-style"
                                image="customers/043-Amouzesh.jpg"
                                text="شبکه آموزش"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="500"
                                classStyle="customer-style"
                                image="customers/044-Isfahan-TV.jpg"
                                text="صدا و سیمای مرکز اصفهان-استان اصفهان"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="200"
                                classStyle="customer-style"
                                image="customers/045-Sahand-TV.jpg"
                                text="صدا و سیمای مرکز آذربایجان شرقی-شبکه سهند"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="300"
                                classStyle="customer-style"
                                image="customers/046-JameJam-TV.jpg"
                                text="شبکه برون مرزی جام‌جم"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="400"
                                classStyle="customer-style"
                                image="customers/047-Hilal-TV.jpg"
                                text="شبکه Hilal TV ترکیه"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="500"
                                classStyle="customer-style"
                                image="customers/048-IRIB-Quran-TV.jpg"
                                text="شبکه قرآن"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="200"
                                classStyle="customer-style"
                                image="customers/049-Shiraz-TV.jpg"
                                text="صدا و سیمای مرکز فارس-شبکه فارس"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="300"
                                classStyle="customer-style"
                                image="customers/050-mobinone.jpg"
                                text="مبین وان کیش"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="400"
                                classStyle="customer-style"
                                image="customers/051-shabake-gostar-fanava.jpg"
                                text="شبکه گستر فن آوا"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="500"
                                classStyle="customer-style"
                                image="customers/052-Shoma-TV.jpg"
                                text="شبکه شما"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="200"
                                classStyle="customer-style"
                                image="customers/053-Zanjan-TV.jpg"
                                text="صدا و سیمای مرکز زنجان-شبکه اشراق"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="300"
                                classStyle="customer-style"
                                image="customers/054-IRIB-nezarat-arzyabi.jpg"
                                text="مرکز نظارت و ارزیابی سازمان صداوسیما"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="400"
                                classStyle="customer-style"
                                image="customers/055-KhorasanRazavi-TV.jpg"
                                text="صدا و سیمای مرکز خراسان رضوی-شبکه خراسان رضوی"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="500"
                                classStyle="customer-style"
                                image="customers/056-Salamat-TV.jpg"
                                text="شبکه سلامت"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="200"
                                classStyle="customer-style"
                                image="customers/057-shahrdari.jpg"
                                text="سازمان بوستان‌ها و فضای سبز شهرداری تهران"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="300"
                                classStyle="customer-style"
                                image="customers/058-IranKala-TV.jpg"
                                text="شبکه ایران کالا"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="400"
                                classStyle="customer-style"
                                image="customers/059-IslamicRadioAndTVs.jpg"
                                text="اتحادیه رادیو و تلویزیون‌های اسلامی"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="500"
                                classStyle="customer-style"
                                image="customers/060-Aflak-TV.jpg"
                                text="صدا و سیمای مرکز لرستان-شبکه افلاک"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="200"
                                classStyle="customer-style"
                                image="customers/061-Namayesh-TV.jpg"
                                text="شبکه نمایش"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="300"
                                classStyle="customer-style"
                                image="customers/062-Mahabad-TV.jpg"
                                text="صدا و سیمای مرکز مهاباد-شبکه مهاباد"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="400"
                                classStyle="customer-style"
                                image="customers/063-owghaf.jpg"
                                text="سازمان اوقاف و امور خیریه"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="500"
                                classStyle="customer-style"
                                image="customers/064-Arak-TV.jpg"
                                text="صداو سیمای استان مرکزی-شبکه آفتاب"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="200"
                                classStyle="customer-style"
                                image="customers/065-foladekavir.jpg"
                                text="مجتمع فولاد کویر"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="300"
                                classStyle="customer-style"
                                image="customers/066-perspolis.jpg"
                                text="باشگاه فرهنگی ورزشی پرسپولیس"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="400"
                                classStyle="customer-style"
                                image="customers/067-uni-chamran.jpg"
                                text="دانشگاه شهید چمران اهواز"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="500"
                                classStyle="customer-style"
                                image="customers/068-Varzesh-TV.jpg"
                                text="شبکه ورزش"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="00"
                                classStyle="customer-style"
                                image="customers/069-Abadan-TV.jpg"
                                text="صداو سیمای مرکز آبادان-شبکه آبادان"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="200"
                                classStyle="customer-style"
                                image="customers/070-mokhaberat-qom.jpg"
                                text="شرکت مخابرات استان قم"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="300"
                                classStyle="customer-style"
                                image="customers/071-Ahvaz-TV.jpg"
                                text="صدا و سیمای مرکز خوزستان-شبکه خوزستان"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="400"
                                classStyle="customer-style"
                                image="customers/072-shora-qoran.jpg"
                                text="شورای عالی قرآن"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="500"
                                classStyle="customer-style"
                                image="customers/073-arman-hotel.jpg"
                                text="مجتمع تجاری، اقامتی و مسکونی آرمان مشهد"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="200"
                                classStyle="customer-style"
                                image="customers/074-BandarAbas-TV.jpg"
                                text="صدا و سیمای مرکز هرمزگان-شبکه خلیج فارس"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="300"
                                classStyle="customer-style"
                                image="customers/075-IRIB-seda.jpg"
                                text="معاونت صدای سازمان صدا و سیما"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="400"
                                classStyle="customer-style"
                                image="customers/076-IranSeda-Radio.jpg"
                                text="ایران صدا"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="500"
                                classStyle="customer-style"
                                image="customers/077-naft-abali.jpg"
                                text="وزارت نفت-مجتمع تفریحی ورزشی آبعلی"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="200"
                                classStyle="customer-style"
                                image="customers/078-Boushehr-TV.jpg"
                                text="صدا و سیمای مرکز بوشهر-شبکه بوشهر"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="300"
                                classStyle="customer-style"
                                image="customers/079-ghazvin-TV.jpg"
                                text="صدا و سیمای مرکز قزوین-شبکه قزوین"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="400"
                                classStyle="customer-style"
                                image="customers/080-shouka.jpg"
                                text="شوکا-ایمن همراه به پرداز"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="500"
                                classStyle="customer-style"
                                image="customers/081-saba-cell.jpg"
                                text="شرکت صبا سل آریا"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="200"
                                classStyle="customer-style"
                                image="customers/082-sanaye-computer-iran.jpg"
                                text="صنایع کامپیوتری ایران"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="300"
                                classStyle="customer-style"
                                image="customers/083-Golestan-TV.jpg"
                                text="صدا و سیمای مرکز گلستان-شبکه سبز"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="400"
                                classStyle="customer-style"
                                image="customers/084-Ilam-TV.jpg"
                                text="صدا و سیمای مرکز ایلام-شبکه ایلام"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="500"
                                classStyle="customer-style"
                                image="customers/085-razavi-hospital.jpg"
                                text="بیمارستان فوق تخصصی رضوی"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="200"
                                classStyle="customer-style"
                                image="customers/086-it-shahrdari.jpg"
                                text="سازمان فناوری اطلاعات و ارتباطات شهرداری تهران"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="300"
                                classStyle="customer-style"
                                image="customers/087-tarashesabz.jpg"
                                text="شرکت تراشه سبز تهران"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="400"
                                classStyle="customer-style"
                                image="customers/088-shefa.jpg"
                                text="مرکز بهداشت و درمان صداوسیما-شفا"></item-image-border-box-6>
                        <item-image-border-box-6
                                classStyle="customer-style"
                                image="customers/089-Kish-TV.jpg"
                                text="صدا و سیمای مرکز کیش-شبکه کیش"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="500"
                                classStyle="customer-style"
                                image="customers/090-Kermanshah-TV.jpg"
                                text="صدا و سیمای مرکز کرمانشاه-شبکه زاگرس"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="200"
                                classStyle="customer-style"
                                image="customers/091-naft-mahmoudabad.jpg"
                                text="مجتمع تفریحی ورزشی نفت محمود آباد"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="00"
                                classStyle="customer-style"
                                image="customers/092-ariaz.jpg"
                                text="شرکت فناوری های راهبردی آریاز"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="300"
                                classStyle="customer-style"
                                image="customers/093-Hamedan-TV.jpg"
                                text="صدا و سیمای مرکز همدان-شبکه سینا"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="400"
                                classStyle="customer-style"
                                image="customers/094-day.jpg"
                                text="بیمارستان دی"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="500"
                                classStyle="customer-style"
                                image="customers/095-moheb-salamat.jpg"
                                text="شرکت محب سلامت ایرانیان(بیمارستان فوق تخصصی آیت الله یثربی کاشان)"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="200"
                                classStyle="customer-style"
                                image="customers/096-homa.jpg"
                                text="سامان سرمایه هما"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="300"
                                classStyle="customer-style"
                                image="customers/097-ModiriateMayadin.jpg"
                                text="سازمان مدیریت میادین میوه و تره بار شهرداری تهران"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="400"
                                classStyle="customer-style"
                                image="customers/098-Pooya-TV.jpg"
                                text="شبکه پویا"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="500"
                                classStyle="customer-style"
                                image="customers/099-Beladi-TV.jpg"
                                text="شبکه ماهواره‌ای بلادی عراق"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="200"
                                classStyle="customer-style"
                                image="customers/100-Kerman-TV.jpg"
                                text="صدا و سیمای مرکز کرمان-شبکه کرمان"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="300"
                                classStyle="customer-style"
                                image="customers/101-DrEstiri.jpg"
                                text="درمانگاه شبانه روزی چهاردانگه"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="400"
                                classStyle="customer-style"
                                image="customers/102-bankdari-eslami.jpg"
                                text="موسسه عالی آموزش بانکداری ایران"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="500"
                                classStyle="customer-style"
                                image="customers/103-Payam-TV.jpg"
                                text="شبکه سراسری پیام"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="200"
                                classStyle="customer-style"
                                image="customers/104-sepand.jpg"
                                text="برج سپند"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="300"
                                classStyle="customer-style"
                                image="customers/105-emam-hosein-mosque.jpg"
                                text="مسجد امام حسین (ع) تهران"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="400"
                                classStyle="customer-style"
                                image="customers/106-karafarinan.jpg"
                                text="مجتمع اداری تجاری کارآفرینان"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="500"
                                classStyle="customer-style"
                                image="customers/107-refah.jpg"
                                text="صندوق رفاه دانشجویان وزارت بهداشت"></item-image-border-box-6>
                        <item-image-border-box-6
                                data-aos-delay="200"
                                classStyle="customer-style"
                                image="customers/108-netnow.jpg"
                                text="شرکت بدر ارتباطات پاسارگاد (نت نو)"></item-image-border-box-6>
                    </b-row>
                </b-container>
            </section>
        </b-container-floid>
    </div>
</template>

<script>
    import AppPageMainTitle from "../components/titles/AppPageMainTitle";
    import AppPageSubTitle from "../components/titles/AppPageSubTitle";
    import AppParagraph from "../components/layout/AppParagraph";
    import AppBreadcrumb from "../components/layout/AppBreadcrumb";
    import ItemImageBorderBox6 from "../components/items/ItemImageBorderBox6";
    import {breadcrumbItems} from "../utils/breadcrumbItems";
    import {valueLabels} from "../utils/labels";
    import {metaTags} from "../utils/metaTages";

    export default {
        name: "Customer",
        data() {
            return {
                metaTitle: metaTags.CUSTOMERS_PAGE.title,
                metaDescription: metaTags.CUSTOMERS_PAGE.description,
                breadcrumbItemsCustomerPage: breadcrumbItems.BREADCRUMB_ITEMS_CUSTOMERS_PAGE,
                labelCustomerPageMainTitle: valueLabels.LABEL_CUSTOMERS_PAGE_MAIN_TITLE,
                labelCustomerPageSubTitle: valueLabels.LABEL_CUSTOMERS_PAGE_SUB_TITLE,
            }
        },
        head: {
            meta: [
                {name: 'twitter:site_name', content: "گروه صمیم | samimgroup"},
                {name: 'twitter:card', content: "summary"},
                {name: 'twitter:site', content: "@samimgropco"},
                {name: 'twitter:type', content: "website"},
                {property: 'og:title', content: metaTags.CUSTOMERS_PAGE.title},
                {property: 'og:description', content: metaTags.CUSTOMERS_PAGE.description},
                {property: 'og:url', content: "https://www.samimgroup.com/customers"}
            ],
            link: [
                {rel: 'canonical', href: 'https://www.samimgroup.com/customers'}
            ],
        },
        components: {
            AppPageMainTitle,
            AppPageSubTitle,
            AppParagraph,
            AppBreadcrumb,
            ItemImageBorderBox6
        }
    }
</script>

<style scoped lang="scss">
    @import "../assets/styles/views/viewCustomersStyle";
</style>
