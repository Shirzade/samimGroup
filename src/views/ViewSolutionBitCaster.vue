<template>
    <b-container-floid id="solutions">
        <vue-headful
                :title=metaTitle
                :description=metaDescription
        />
        <div class="title-banner-bitcaster"/>
        <!-- <app-tab-solutions-page :firstIsActive=true></app-tab-solutions-page> -->
        <div class="wrapper">
            <app-page-main-title classStyle="main-title-page"
                                 title="سامانه ارسال محتوای زنده بر بستر اینترنت"></app-page-main-title>
            <app-page-sub-title classStyle="sub-title-fa"
                                title="استودیوهایی مبتنی بر IP با راهکارهای ماژولار"></app-page-sub-title>
            <app-paragraph
                    text="یکی از بزرگترین چالش‌هایی که امروزه خبرنگاران، آژانس‌های خبری، رسانه‌های آنلاین و اجتماعی با آن روبرو هستند، پوشش اخبار و وقایع به صورت زنده است. ارسال ویدیوهای زنده و ضبط شده بر بستر ماهواره (SNG) به تجهیزات خاصی نیاز دارد که بسیار گران قیمت بوده و خریداری، نگهداری و حمل و نقل آن به صرف هزینه‎های بالایی نیاز دارد. علاوه بر این، سنگین بودن تجهیزات و زمان‌بر بودن مراحل استقرار، نصب، آماده‌سازی، ارتباط با ماهواره و... امکان واکنش سریع را محدود می‌کند. با استفاده از راه‌حل‌های مبتنی بر IP می‌توان علاوه بر غلبه بر این محدودیت‌ها، امکانات بیشتری را نیز فراهم نمود."/>
            <app-paragraph
                    text="شرکت مهندسی صمیم، به عنوان ارائه‌دهنده سیستم‌های ویدئویی مبتنی بر IP برای استریم ویدیوهای زنده و یا ضبط شده، راهکارهایی را در سطوح میان‌رده و پیشرفته ارائه می‌دهد. از جمله این راهکارها، ارائه محصولی با عنوان BitCaster (سامانه ارسال محتوای زنده بر بستر اینترنت) می‌باشد."/>
            <app-paragraph
                    text="محصول BitCaster بهترین کیفیت ارسال ویدئوی زنده را با حداقل تاخیر، برای کاربردهای موقعیت ثابت و یا در حال حرکت فراهم می‌کند. سامانه BitCaster از تکنولوژی اختصاصی تجمیع پهنای باند کانال‌های ارتباطی (Channel Bonding) بهره برده و شبکه‌های مبتنی بر IP از قبیل Wi-Fi، مودم‌های ماهواره‌ای یا اینترنت عمومی را در جهت افزایش پهنای باند با یکدیگر پیوند می‌دهد. همچنین در این محصول از الگوریتم ارسال استریم با نرخ بیت تطبیق‌پذیر (ABR: Adaptive Bit Rate) نیز استفاده شده است. در مواردی که پهنای باند مسیر ارتباطی از ثبات کافی برخوردار نباشد؛ برای دستیابی به قابلیت اطمینان بالا و تداوم ارسال استریم، این الگوریتم همواره شرایط موجود در شبکه را بررسی کرده و به صورت دینامیک، کیفیت ویدیو را متناسب با پهنای باند جاری تغییر می‌دهد."/>
            <item-big-image image="pages/solutions/bitcaster/bitcaster-diagram.jpg"></item-big-image>
            <app-paragraph
                    text="در کنار این سامانه، برای ارزیابی عملکرد در کل زنجیره تولید و پخش، شرکت مهندسی صمیم محصولات متنوعی دارد که می‌تواند از استودیو تا ایستگاه فرستنده و بعد در نقطه دریافت نهایی، مورد استفاده قرار گیرد. ترکیب این محصولات با سامانه SmartCast Manager نمای کامل و دقیقی از زنجیره تولید و پخش به شما ارائه خواهد داد."/>
        </div>
        <div class="main-features-bitcaster"
             data-aos="fade-up"
             data-aos-duration="2000">
            <div class="internal-wrapper">
                <app-title title="ویژگی‌‌های اصلی" classStyle="solutions-sub-title-in-texts"></app-title>
                <ul class="">
                    <app-li listIcon="circle" classStyle="bitcaster-features" title="ورودی‌های متنوع"
                            text="پشتیانی از طیف گسترده‌ی انواع ورودی‌ها:"></app-li>
                    <ul class="bitcaster-features-ul">
                        <app-li listIcon="circle" classStyle="bitcaster-features-li"
                                text="ورودی‌های SDI، HDMI، AV و USB جهت دریافت و ذخیره ویدیو از دستگاه‌های مختلف"></app-li>
                        <app-li listIcon="circle" classStyle="bitcaster-features-li"
                                text="استریم‌های شبکه (RTP, TS, RTMP و HLS)"></app-li>
                        <app-li listIcon="circle" classStyle="bitcaster-features-li" text="ویدیوهای ضبط شده"></app-li>
                    </ul>
                    <app-li listIcon="circle" classStyle="bitcaster-features" title="انکدینگ/ترنسکدینگ انعطاف‌پذیر"
                            text="در این سامانه امکان تنظیم مواردی همچون رزولوشن، نسبت ابعاد، نرخ فریم، نرخ بیت‌های ویدیویی، نرخ بیت‌های صوتی و غیره با توجه به محدودیت‌های خروجی تعبیه شده است."></app-li>
                    <app-li listIcon="circle" classStyle="bitcaster-features" title="پروتکل‌های استاندارد استریمینگ"
                            text="فرستنده (Transmitter) می‌تواند با استفاده از یکی از پروتکل‌های استریمینگ HLS، RTMP، RTP و UDP، ویدیوی موردنظر را به توزیع‌کننده (Distributer) ارسال کند. توزیع‌کننده نیز با استفاده از همین پروتکل‌ها، ویدیو را به CDNهای محلی و یا عمومی ارسال می‌کند."></app-li>
                    <app-li listIcon="circle" classStyle="bitcaster-features"
                            title="پروتکل‌های استریمینگ با نرخ بیت تطبیق‌پذیر"
                            text="پروتکل ABR صمیم، شرایط موجود در شبکه را بررسی کرده و به صورت دینامیک، کیفیت ویدیو را متناسب با پهنای باند جاری تغییر می‌دهد. این تکنولوژی به فرستنده این اطمینان را خواهد داد که در شرایط غیرقابل پیش‌بینی و غیرقابل کنترل شبکه، ویدیوی زنده به توزیع کننده تحویل داده خواهد شد."></app-li>
                    <app-li listIcon="circle" classStyle="bitcaster-features" title="تجمیع پهنای باند کانال‌ها"
                            text="تکنولوژی قدرتمند تجمیع پهنای باند صمیم، برای استفاده از حداکثر پهنای باند موجود، شبکه‌های مبتنی بر IP از قبیل Wi-Fi، مودم‌های ماهواره‌ای و اینترنت عمومی را ، با یکدیگر تجمیع می‌کند."></app-li>
                    <app-li listIcon="circle" classStyle="bitcaster-features" title="انتقال مطمئن"
                            text="ویدیوهای حساس و محرمانه را می‌توان با استفاده از الگوریتم AES رمزنگاری کرد."></app-li>
                    <app-li listIcon="circle" classStyle="bitcaster-features" title="درج فراداده (متادیتا)"
                            text="با استفاده از این قابلیت می‌توان اطلاعات جانبی از قبیل نام اپراتور سیستم فرستنده، زمان و مکان رویدادهای زنده را به صورت اتوماتیک به محتوای ارسالی اضافه نمود. همچنین مدیر سیستم می‌تواند اطلاعات اضافی دیگری را از قبیل نام رخداد، توضیح آن و ... در قالب فراداده درج کند. تمامی این اطلاعات با هدف آرشیو یا اهداف مشابه در دیتابیس ذخیره می‌شوند."></app-li>
                    <app-li listIcon="circle" classStyle="bitcaster-features" title="ضبط کننده و ترنسکدر ویدیو"
                            text="ماژول ضبط کننده به صورت یک انکدر نرم‌افزاری پیاده‌سازی شده است؛ به طوری که رویدادهای زنده را ضبط و فایل‌های ویدیویی ضبط شده را ترنسکد می‌کند. بدین ترتیب این امکان برای متخصصان حوزه تصویر می‎توانند با توجه به موارد استفاده و محدودیت‌های خروجی، به طور موثر فرمت‌های ویدیویی، کدک‌های صوت و تصویر، رزولوشن، نسبت ابعاد، نرخ فریم، نرخ بیت ارسال صوت و تصویر و ... را تنظیم کنند."></app-li>
                    <app-li listIcon="circle" classStyle="bitcaster-features" title="کانال IFB صوتی/تصویری"
                            text="قابلیت IFB امکان برقراری ارتباط با اپراتور سیستم فرستنده را از راه دور فراهم می‌نماید. این ارتباط دوطرفه از طریق یک کانال مجزای صوتی/ تصویری برقرار می‎گردد."></app-li>
                    <app-li listIcon="circle" classStyle="bitcaster-features" title="مدیریت چند فرستنده"
                            text="نرم‌افزار توزیع‌کننده، ضمن نمایش لیستی از فرستنده‌ها به همراه وضعیت جاری هر یک از آن‌ها، به مدیر سیستم این اجازه را می‌دهد که حداکثر دو استریم ورودی را روی یک مانیتور مشاهده کند."></app-li>
                    <app-li listIcon="circle" classStyle="bitcaster-features" title="خروجی‌های متنوع"></app-li>
                    <div data-aos="fade-up" data-aos-duration="2000">
                        <p><b>SDI/HDMI:</b> برای این منظور، امکان دیکد کردن حداکثر دو ویدیو به صورت همزمان وجود دارد.
                        </p>
                        <p><b>توزیع نقطه‌به‌نقطه یا یک نقطه به چند نقطه:</b> توزیع‌کننده با در اختیار داشتن پروتکل‌‌های
                            استریمینگ مختلف (TS, RTMP, RTP, HLS) مجاز به توزیع محتوای ویدیویی بر بستر IP است. خروجی‌های
                            IP از بازارسال محتوای ویدیویی به CDNها، مدیا سرورها، پلتفرم‌های استریمینگ و شبکه‌های اجتماعی
                            پشتیبانی می‌کنند.</p>
                    </div>
                    <app-li listIcon="circle" classStyle="bitcaster-features" title="مدیریت سیستم مبتنی بر وب"
                            text="برای نظارت و مدیریت روند ارسال، دریافت و توزیع ویدئوی زنده در هر دو قسمت فرستنده و توزیع کننده، ابزار قدرتمند Manager در این سامانه پیاده‌سازی شده است."></app-li>
                    <ul class="bitcaster-features-ul">
                        <app-li listIcon="circle" classStyle="bitcaster-features-li"
                                text="واسط کاربری مبتنی بر وب"></app-li>
                        <app-li listIcon="circle" classStyle="bitcaster-features-li"
                                text="موقعیت جغرافیایی: قابلیت تشخیص موقعیت دقیق جغرافیایی فرستنده"></app-li>
                        <app-li listIcon="circle" classStyle="bitcaster-features-li"
                                text="مدیریت از راه دور: ارائه اطلاعات لحظه‌ای درخصوص بازدهی کلیه دستگاه‌ها (فرستنده و توزیع‌کننده)، میزان مصرف منابع پردازشی و هشدارهای احتمالی."></app-li>
                        <app-li listIcon="circle" classStyle="bitcaster-features-li" text="مدیریت فراداده"></app-li>
                        <app-li listIcon="circle" classStyle="bitcaster-features-li" text="مدیریت آرشیو"></app-li>
                        <app-li listIcon="circle" classStyle="bitcaster-features-li"
                                text="مدیریت احراز هویت کاربران"></app-li>
                    </ul>
                    <app-li listIcon="circle" classStyle="bitcaster-features" title="تجمیع پهنای باند"
                            text="الگوریتم تجمیع پهنای باند این امکان را به کاربر می‌دهد که واسط‌های مختلف شبکه را به منظور افزایش پهنای باند قابل دسترس، با یکدیگر تجمیع کند."></app-li>
                    <app-li listIcon="circle" classStyle="bitcaster-features" title="نرخ بیت تطبیق‌پذیر"
                            text="با توجه به پهنای باند موجود، الگوریتم ABR نرخ بیت ویدیو را به صورت دینامیک تنظیم کرده و کیفیت ویدیو را متناسب با پهنای باند جاری تغییر می‌دهد."></app-li>
                    <app-li listIcon="circle" classStyle="bitcaster-features" title="امکانات متعدد"
                            text="دریافت ورودی‌های متنوع، پروتکل‌های استریمینگ و روش‌های توزیع متعدد از جمله ویژگی‌های بارز این محصول به شمار می‌آیند. "></app-li>
                </ul>
                <b-row align-h="center" class="bitcaster-icons"
                    data-aos="fade-up"
                    data-aos-duration="2000">
                    <b-col cols="9" md="9">
                        <b-card-group>
                            <b-card
                                    title="تجمیع پهنای باند"
                                    img-src="../assets/img/pages/solutions/imam/profit.png"
                                    img-alt="تجمیع پهنای باند"
                                    img-top>
                            </b-card>
                            <b-card
                                    title="نرخ بیت تطبیق‌پذیر"
                                    img-src="../assets/img/pages/solutions/imam/optimization.png"
                                    img-alt="نرخ بیت تطبیق‌پذیر"
                                    img-top>
                            </b-card>
                            <b-card
                                    title="امکانات متعدد"
                                    img-src="../assets/img/pages/solutions/imam/efficiency.png"
                                    img-alt="امکانات متعدد"
                                    img-top>
                            </b-card>
                        </b-card-group>
                    </b-col>
                </b-row>
            </div>
        </div>
        <div id="specification" class="internal-wrapper">
            <app-title
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    title="مشخصات"
                    classStyle="solutions-sub-title-in-texts">
            </app-title>
            <div role="tablist" id="specification-accordion"
                data-aos="fade-up"
                data-aos-duration="2000">
                <b-card no-body>
                    <b-card-header header-tag="header" class="p-1" role="tab">
                        <b-button block href="#specification" v-b-toggle.accordion-1 variant="info">انتقال‌دهنده
                            (Transmitter)
                        </b-button>
                    </b-card-header>
                    <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel" class="panel-collapse">
                        <b-card-body>
                            <b-card-text>
                                <div class="table-responsive">
                                    <table class="table table-hover table-bordered specification-tbl"
                                        data-aos="fade-up"
                                        data-aos-duration="2000">
                                        <tbody>
                                        <tr>
                                            <th scope="rowgroup" rowspan="2"> منبع ورودی</th>
                                            <td>زنده</td>
                                            <td>
                                                <ul>
                                                    <app-li classStyle="" text="دریافت صدا و تصویر:"></app-li>
                                                    <ul>
                                                        <app-li classStyle="font-roboto"
                                                                text="AJA 3G-SDI Capture"></app-li>
                                                        <app-li classStyle="font-roboto"
                                                                text="Black Magic Intensity Shuttle (HDMI, Composite, Component and S-Video)"></app-li>
                                                        <app-li classStyle="font-roboto" text="USB Webcams "></app-li>
                                                        <app-li classStyle="font-roboto"
                                                                text="Other Standard Audio/Video Device"></app-li>
                                                    </ul>
                                                    <app-li classStyle="" text="استریم صدا و تصویر"></app-li>
                                                    <ul>
                                                        <app-li classStyle=""
                                                                text="پروتکل‌های استریمینگ استاندارد از قبیل UDP, RTP, RTMP و ..."></app-li>
                                                    </ul>
                                                    <app-li classStyle="" text="Screen Capture"></app-li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Playback</td>
                                            <td>فایل‌های صدا و تصویر</td>
                                        </tr>
                                        <tr>
                                            <th scope="rowgroup" rowspan="2">کدک‌ها/ فرمت‌های ورودی</th>
                                            <td>فرمت‌ها</td>
                                            <td>تصویر: <span
                                                    class="font-roboto">MP4, MKV, M4V, FLV, MOV, WEBM, AVI, WMV</span> و
                                                سایر فرمت‌های استاندارد ویدیو<br/>
                                                صدا:<span class="font-roboto">M4A, MP3, WMA, AC3, OGG</span> و سایر
                                                فرمت‌های استاندارد صدا
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>کدک‌ها</td>
                                            <td>تصویر: <span class="font-roboto">H.264, MPEG-4/2/1, VC-1/WMV9, FLV, JPEG2000, DV</span>
                                                و سایر فرمت‌های استاندارد
                                                ویدیو<br/>صدا: <span class="font-roboto">AAC-LC/HE/HEv2, MP3, FLAC, Opus, Vorbis</span>
                                                و و سایر فرمت‌های استاندارد صدا
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="rowgroup" rowspan="4">انکدینگ/ ترنسکدینگ</th>
                                            <td>تصویر</td>
                                            <td class="font-roboto">1080i/1080p/720p/576p/480p/360p/270p
                                                @23.98/24/25/29.97/30/50/59.94/60 fps<br/>PAL, NTSC
                                                (Progressive)
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>صدا</td>
                                            <td>مونو/ استریو</td>
                                        </tr>
                                        <tr>
                                            <td>نرخ بیت</td>
                                            <td>CBR/VBR قابل تنظیم</td>
                                        </tr>
                                        <tr>
                                            <td>کدک‌ها</td>
                                            <td>تصویر: <span class="font-roboto">H.264</span><br/>صدا: <span
                                                    class="font-roboto">AAC-LC/HE</span></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">پروتکل‌های استریمینگ</th>
                                            <td colspan="2">
                                                <ul>
                                                    <app-li classStyle="font-roboto" text="TS (TS Over IP)"></app-li>
                                                    <app-li classStyle="font-roboto" text="RTP"></app-li>
                                                    <app-li classStyle="font-roboto" text="RTMP"></app-li>
                                                    <app-li classStyle="font-roboto" text="HLS"></app-li>
                                                    <app-li classStyle="font-roboto"
                                                            text="SAMTP (SAMIM Adaptive Multipath Transport Protocol)">
                                                    </app-li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">تجمیع پهنای باند کانال های ارتباطی</th>
                                            <td colspan="2">مجتمع‌سازی اینترفیس‌های مختلف شبکه در جهت افزایش پهنای
                                                باند
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">استریمینگ با نرخ بیت تطبیق پذیر</th>
                                            <td colspan="2">تغییر دینامیک نرخ بیت جریان و کیفیت ویدیو مطابق با پهنای
                                                باند قابل دسترس
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">واسط شبکه</th>
                                            <td colspan="2">
                                                <ul>
                                                    <app-li classStyle="font-roboto" text="Ethernet"></app-li>
                                                    <app-li classStyle="font-roboto" text="Wi-Fi"></app-li>
                                                    <app-li classStyle="font-roboto"
                                                            text="3G/4G/LTE (Using External USB Modem)"
                                                    ></app-li>
                                                    <app-li classStyle="" text="Satellite (BGAN)"></app-li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">ویژگی‌های پیشرفته</th>
                                            <td colspan="2">
                                                <ul>
                                                    <app-li classStyle="font-roboto" text="Recording"></app-li>
                                                    <app-li classStyle="font-roboto"
                                                            text="IFB Audio/Video Channel"
                                                    ></app-li>
                                                    <app-li classStyle="font-roboto"
                                                            text="Stream Encryption (AES, BlowFish and Serpent)"
                                                    ></app-li>
                                                    <app-li classStyle="font-roboto" text="Geolocation"></app-li>
                                                    <app-li classStyle="font-roboto"
                                                            text="File Transfer Panel"></app-li>
                                                    <app-li classStyle="font-roboto"
                                                            text="Proxy (HTTPS and SOCKS)"></app-li>
                                                    <app-li classStyle="font-roboto"
                                                            text="LDAP User Authentication"></app-li>
                                                </ul>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </b-card-text>
                        </b-card-body>
                    </b-collapse>
                </b-card>
                <b-card no-body>
                    <b-card-header header-tag="header" class="p-1" role="tab">
                        <b-button block href="#specification" v-b-toggle.accordion-2 variant="info">توزیع‌کننده
                            (Distributor)
                        </b-button>
                    </b-card-header>
                    <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel" class="panel-collapse">
                        <b-card-body>
                            <b-card-text>
                                <div class="table-responsive">
                                    <table class="table table-hover table-bordered specification-tbl"
                                           data-aos="fade-up"
                                           data-aos-duration="2000">
                                        <tbody>
                                            <tr>
                                                <th scope="rowgroup" rowspan="2">استریم‌های ورودی</th>
                                                <td>پروتکل‌ها</td>
                                                <td>
                                                    <ul>
                                                        <app-li classStyle="bitcaster-features-tbl-li1"
                                                                text="TS (TS Over IP)"></app-li>
                                                        <app-li classStyle="bitcaster-features-tbl-li1"
                                                                text="RTMP"></app-li>
                                                        <app-li classStyle="bitcaster-features-tbl-li1" text="HLS"></app-li>
                                                        <app-li classStyle="bitcaster-features-tbl-li1"
                                                                text="SAMTP (SAMIM Adaptive Multipath Transport Protocol)"
                                                        ></app-li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>کدک‌ها</td>
                                                <td>تصویر: H.264<br/>صدا: AAC-LC/HE</td>
                                            </tr>
                                            <tr>
                                                <th scope="row" rowspan="2">خروجی‌ها</th>
                                                <td>استریم‌ها</td>
                                                <td>
                                                    <ul>
                                                        <app-li classStyle="bitcaster-features-tbl-li1" text="UDP"></app-li>
                                                        <app-li classStyle="bitcaster-features-tbl-li1"
                                                                text="RTMP"></app-li>
                                                        <app-li classStyle="bitcaster-features-tbl-li1" text="HLS"></app-li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>خروجی HD-SD<br/>(توسط Decklink SDI Mini Monitor)</td>
                                                <td>تصویر: 1080i/1080p/720p/576p/480p/360p/270p @
                                                    23.96/24/25/29.97/30/50/59.94/60 fps<br/>صدا:
                                                    Mono/Stereo
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">ویژگی‌های پیشرفته</th>
                                                <td colspan="2">
                                                    <ul>
                                                        <app-li classStyle="bitcaster-features-tbl-li1"
                                                                text="Dual Transmitter Management"></app-li>
                                                        <app-li classStyle="bitcaster-features-tbl-li1"
                                                                text="Recording"></app-li>
                                                        <app-li classStyle="bitcaster-features-tbl-li1"
                                                                text="IFB Audio/Video Channel"></app-li>
                                                        <app-li classStyle="bitcaster-features-tbl-li1"
                                                                text="Stream Decryption (AES, BlowFish and Serpent)"></app-li>
                                                        <app-li classStyle="bitcaster-features-tbl-li1"
                                                                text="Proxy (HTTPS and SOCKS)"></app-li>
                                                        <app-li classStyle="bitcaster-features-tbl-li1"
                                                                text="LDAP User Authentication"></app-li>
                                                    </ul>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </b-card-text>
                        </b-card-body>
                    </b-collapse>
                </b-card>
                <b-card no-body>
                    <b-card-header header-tag="header" class="p-1" role="tab">
                        <b-button block href="#specification" v-b-toggle.accordion-3 variant="info">کنترل و مانیتورینگ
                        </b-button>
                    </b-card-header>
                    <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel" class="panel-collapse">
                        <b-card-body>
                            <b-card-text>
                                <div class="table-responsive">
                                    <table class="table table-hover table-bordered specification-tbl"
                                           data-aos="fade-up"
                                           data-aos-duration="2000">
                                        <tbody>
                                        <tr>
                                            <th scope="row">GUI</th>
                                            <td colspan="2">
                                                <ul>
                                                    <app-li classStyle="font-roboto" text="Web-Based"></app-li>
                                                    <app-li classStyle="font-roboto" text="Multilingual"></app-li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">کنترل</th>
                                            <td colspan="2">Transmitters Network Interfaces (Enable/Disable)</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">مانیتورینگ</th>
                                            <td colspan="2">
                                                <ul>
                                                    <app-li classStyle="font-roboto"
                                                            text="Transmitters Location"></app-li>
                                                    <app-li classStyle="font-roboto" text="Resources"></app-li>
                                                    <app-li classStyle="font-roboto"
                                                            text="Transmitters Status (Offline/Online/On Air)"></app-li>
                                                    <app-li classStyle="font-roboto" text="Stream Status"></app-li>
                                                    <app-li classStyle="font-roboto"
                                                            text="Connected Capture Devices"></app-li>
                                                    <app-li classStyle="font-roboto" text="Alarms"></app-li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">مدیریت</th>
                                            <td colspan="2">
                                                <ul>
                                                    <app-li classStyle=""
                                                            text="Local and LDAP Users"></app-li>
                                                    <app-li classStyle="font-roboto" text="Logs"></app-li>
                                                    <app-li classStyle="font-roboto" text="Alarms"></app-li>
                                                    <app-li classStyle="font-roboto" text="Encoder"></app-li>
                                                    <app-li classStyle="font-roboto" text="Recorder"></app-li>
                                                    <app-li classStyle="font-roboto" text="File Transfer"></app-li>
                                                </ul>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </b-card-text>
                        </b-card-body>
                    </b-collapse>
                </b-card>
            </div>
        </div>
        <div class="bitcaster-req"
             data-aos="fade-up"
             data-aos-duration="2000">
            <div class="internal-wrapper">
                <app-title
                        title="نیازمندی های سیستم"
                        classStyle="solutions-sub-title-in-texts">
                </app-title>
                <div class="table-responsive">
                    <table class="table table-hover table-bordered requairement-tbl"
                           data-aos="fade-up"
                           data-aos-duration="2000">
                        <thead>
                        <tr>
                            <th rowspan="2" scope="col">نرم‌افزار</th>
                            <th id="Hardware" scope="colgroup" colspan="2">سخت افزار</th>
                            <th rowspan="2" scope="col">سیستم عامل</th>
                        </tr>
                        <tr>
                            <th headers="Hardware" scope="col">CPU</th>
                            <th headers="Hardware" scope="col">حافظه</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Transmitter</td>
                            <td class="font-roboto"><b>SD:</b>Intel Core i5 4460<br><b>HD:</b>Intel Core i7 7700HQ</td>
                            <td class="font-roboto">4GB</td>
                            <td class="font-roboto">Windows 10</td>
                        </tr>
                        <tr>
                            <td>Distributor and Manager</td>
                            <td class="font-roboto">Intel Core i7 7800X</td>
                            <td class="font-roboto">8GB</td>
                            <td class="font-roboto">Windows Server 2016</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="internal-wrapper">
            <app-title
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    title="BitCaster دریک نگاه"
                    classStyle="solutions-sub-title-in-texts">
            </app-title>
            <item-big-image image="pages/solutions/bitcaster/bitcaster-overview.png"></item-big-image>
            <app-button
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    pageLink="solution-bit-caster"
                    :titleButton=labelTextButtonDownloadPDF
                    classButton="pdf-download-button"
                    iconButton=chevron-down></app-button>
        </div>
    </b-container-floid>
</template>

<script>
// import AppTabSolutionsPage from "../components/layout/AppTabSolutionsPage";
import AppPageMainTitle from '../components/titles/AppPageMainTitle'
import AppPageSubTitle from '../components/titles/AppPageSubTitle'
import AppParagraph from '../components/layout/AppParagraph'
import AppTitle from '../components/titles/AppTitle'
import ItemBigImage from '../components/items/ItemBigImage'
import AppLi from '../components/layout/AppLi'
import AppButton from '../components/buttons/AppButton'
import { valueLabels } from '../utils/labels'
import { metaTags } from '../utils/metaTages'

export default {
  name: 'BitCaster',
  data () {
    return {
      metaTitle: metaTags.SOLUTION_PAGE_BIT_CASTER.title,
      metaDescription: metaTags.SOLUTION_PAGE_BIT_CASTER.description,
      labelTextButtonDownloadPDF: valueLabels.LABEL_TEXT_BUTTON_DOWNLOAD_PDF
    }
  },
  head: {
    meta: [
      { name: 'twitter:site_name', content: 'گروه صمیم | samimgroup' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@samimgropco' },
      { name: 'twitter:type', content: 'website' },
      { property: 'og:title', content: metaTags.SOLUTION_PAGE_BIT_CASTER.title },
      { property: 'og:description', content: metaTags.SOLUTION_PAGE_BIT_CASTER.description },
      { property: 'og:url', content: 'https://www.samimgroup.com/استریمر-پهن-باند' }
    ],
    link: [
      { rel: 'canonical', href: 'https://www.samimgroup.com/استریمر-پهن-باند' }
    ]
  },
  components: {
    AppPageMainTitle,
    AppPageSubTitle,
    // AppTabSolutionsPage,
    AppParagraph,
    AppTitle,
    ItemBigImage,
    AppLi,
    AppButton
  }
}
</script>

<style scoped lang="scss">
    @import "../assets/styles/views/viewSolutionsStyle";
</style>
