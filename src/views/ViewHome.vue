<template>
    <b-container-flouid id="home">
        <vue-headful
                :title=metaTitle
                :description=metaDescription
        />
        <section>
            <mq-layout :mq="['md', 'lg']">
                <b-container-flouid>
                    <b-row :class=showHomePage>
                        <div id="layerslider" style="width:1818px; height:720px;">
                            <div class="ls-slide" data-ls="slidedelay:8000;transition2d:11;">
                                <img alt="Modular Products" title="Modular Products" class="ls-bg"
                                     src="../assets/sliderimages/modular-2.jpg"
                                     style="top:0px;left:0px;white-space: nowrap;"/>
                                <img alt="Modular Products" title="Modular Products" class="ls-l"
                                     data-ls="offsetxin:0;offsetyin:0;durationin:600;delayin:200;fadein:true; offsetxout:0;durationout:100;"
                                     src="../assets/sliderimages/modular-3.jpg"
                                     style=" top:0px;left:0px;white-space: nowrap;"/>
                                <img alt="Modular Products" title="Modular Products" class="ls-l"
                                     data-ls="offsetxin:0;offsetyin:0;durationin:700;delayin:600;fadein:true; offsetxout:0;durationout:100;"
                                     src="../assets/sliderimages/modular-4.jpg"
                                     style="top:0px;left:0px;white-space: nowrap;"/>
                                <img alt="Modular Products" title="Modular Products" class="ls-l"
                                     data-ls="offsetxin:0;offsetyin:0;durationin:800;delayin:1000;fadein:true; offsetxout:0;durationout:100;"
                                     src="../assets/sliderimages/modular-5.jpg"
                                     style="top:0px;left:0px;white-space: nowrap;"/>
                                <img alt="Modular Products" title="Modular Products" class="ls-l"
                                     data-ls="offsetxin:0;offsetyin:0;durationin:900;delayin:1600;fadein:true; offsetxout:0;durationout:100;"
                                     src="../assets/sliderimages/modular-6.jpg"
                                     style="top:0px;left:0px;white-space: nowrap;"/>
                                <app-button
                                        :titleButton=labelTopTitleMoreButton
                                        classButton="item-small-button"
                                        pageLink="products"></app-button>

                                <p class="ls-l"
                                   data-ls="delayin:1000; offsetxin:0;durationin:4000;offsetxout:0;durationout:2500;"
                                   style="top:95px;left:560px; font-size:27px; color:white; font-weight:500; white-space: normal;">
                                    محصولات ماژولار
                                </p>
                                <p class="ls-l"
                                   data-ls="delayin:2500; offsetxin:0;offsetyin:-100; durationin:1500;fadein:true; offsetxout:0;offsetyout:0;durationout:1500;fadeout:true;"
                                   style="top:155px;left:180px; font-size:30px; color:white; font-weight:800; white-space: normal;">
                                    مجموعـه‌ای کارآمد از پیشـرفته‌ترین
                                </p>
                                <p class="ls-l"
                                   data-ls="delayin:3000; offsetxin:0;offsetyin:-50; durationin:1500;fadein:true; offsetxout:0;offsetyout:0;durationout:1500;fadeout:true;"
                                   style="top:230px;left:179px;font-size:30px; color:white; font-weight:800; white-space: normal;">
                                    تکنولوژی‌های پردازش صدا و تصویر
                                </p>
                                <p class="ls-l btn-default"
                                   data-ls="delayin:4500; offsetxin:0;easingin:easeOutQuint;scalexin:0.8;scaleyin:0.8;offsetxout:0;durationout:750;scalexout:0.8;scaleyout:0.8;"
                                   style="top:380px; left:184px;font-size: 23px; font-weight:300; line-height:initial; white-space:normal; padding: 3px 50px 3px 50px; border-radius:4px;">
                                    <app-button
                                            :titleButton=labelTopTitleMoreButton
                                            classButton="item-small-button"
                                            pageLink="products"></app-button>
                                </p>
                            </div>
                            <div class="ls-slide" data-ls="slidedelay:9000;transition2d:11;">
                                <img alt="مالتی‌ویوئر" title="مالتی‌ویوئر" class="ls-bg"
                                     src="../assets/sliderimages/multi-viewer-banner.jpg"
                                     style="top:0px;left:0px;white-space: nowrap;"/>
                                <img alt="مالتی‌ویوئر" title="مالتی‌ویوئر" class="ls-l"
                                     data-ls="offsetxin:0; offsetyin:0; durationin:1500; delayin:1000; fadein:true;"
                                     src="../assets/sliderimages/multi-viewer-banner-overlay.png"
                                     style="top:0px; left:0px; white-space: nowrap;"/>
                                <img alt="مالتی‌ویوئر" title="مالتی‌ویوئر" class="ls-l"
                                     data-ls="delayin:3000; offsetxin:0;offsetyin:0;durationin:4000;fadein:true; offsetxout:0;durationout:100;"
                                     src="../assets/sliderimages/multi-viewer-frame.png"
                                     style="top:117px;left:814px;white-space: nowrap;"/>
                                <img alt="مالتی‌ویوئر" title="مالتی‌ویوئر" class="ls-l" data-ls="offsetxin:0;durationin:750;delayin:2000;rotateyin:90;transformoriginin:left 50%
								0;offsetxout:0;durationout:750;rotateyout:90;transformoriginout:left 150% 0;"
                                     src="../assets/sliderimages/multi1.jpg"
                                     style="top:280px;left:1086px;white-space: nowrap;"/>
                                <img alt="مالتی‌ویوئر" title="مالتی‌ویوئر" class="ls-l"
                                     data-ls="offsetxin:0;durationin:750;delayin:2400;rotatexin:90;transformoriginin:50% bottom 0;offsetxout:0;durationout:500;rotateyout:90;skewyout:1;transformoriginout:left 50% 0;"
                                     src="../assets/sliderimages/multi2.jpg"
                                     style="top:130px;left:1345px;white-space: nowrap;"/>
                                <img alt="مالتی‌ویوئر" title="مالتی‌ویوئر" class="ls-l"
                                     data-ls="offsetxin:0;durationin:750;delayin:2800;rotateyin:-90;transformoriginin:right 50% 0;offsetxout:0;durationout:750;rotateyout:90;transformoriginout:right 50% 0;"
                                     src="../assets/sliderimages/multi3.jpg"
                                     style="top:130px;left:1086px;white-space: nowrap;"/>
                                <img alt="مالتی‌ویوئر" title="مالتی‌ویوئر" class="ls-l"
                                     data-ls="offsetxin:0;durationin:750;delayin:3200;rotateyin:-90;transformoriginin:right 50% 0;offsetxout:0;durationout:750;rotateyout:90;transformoriginout:right 50% 0;"
                                     src="../assets/sliderimages/multi4.jpg"
                                     style="top:130px;left:826px;white-space: nowrap;"/>
                                <img alt="مالتی‌ویوئر" title="مالتی‌ویوئر" class="ls-l"
                                     data-ls="offsetxin:0;durationin:750;delayin:3600;rotatexin:-90;transformoriginin:50% top 0;offsetxout:0;durationout:750;rotateyout:90;transformoriginout:right 150% 0;"
                                     src="../assets/sliderimages/multi5.jpg"
                                     style="top:280px;left:826px;white-space: nowrap;"/>
                                <img alt="مالتی‌ویوئر" title="مالتی‌ویوئر" class="ls-l"
                                     data-ls="offsetxin:0;durationin:750;delayin:4000;rotatexin:-90;transformoriginin:50% top 0;offsetxout:0;durationout:750;rotateyout:90;transformoriginout:right 150% 0;"
                                     src="../assets/sliderimages/multi6.jpg"
                                     style="top:430px;left:826px;white-space: nowrap;"/>
                                <p class="ls-l"
                                   data-ls="delayin:3500; offsetxin:0; durationin:2500;offsetxout:0; durationout:2500;"
                                   style="top:145px;left:605px; font-size:27px; color:white; font-weight:500; white-space: normal;">
                                    مالتی‌ویوئر
                                </p>
                                <p class="ls-l"
                                   data-ls="delayin:4500; offsetxin:0;offsetyin:-50; durationin:1500;fadein:true; offsetxout:0;offsetyout:0;durationout:1500;fadeout:true;"
                                   style="top:205px;left:170px; font-size:40px; color:white; font-weight:800; white-space: normal;line-height:80px">
                                    نمایش همزمان چهل ورودی<br/>روی یک مانیتور
                                </p>
                                <p class="ls-l btn-default"
                                   data-ls="delayin:6000; offsetxin:0;easingin:easeOutQuint;scalexin:0.8;scaleyin:0.8;offsetxout:0;durationout:750;scalexout:0.8;scaleyout:0.8;"
                                   style="top:425px; left:176px; font-size: 23px; font-weight:300; line-height:initial; white-space:normal; padding: 3px 50px 3px 50px; border-radius:4px;">
                                    <app-button
                                            :titleButton=labelTopTitleMoreButton
                                            classButton="item-small-button"
                                            pageLink="products"></app-button>
                                </p>
                            </div>
                            <div class="ls-slide" data-ls="slidedelay:8000;transition2d:11;">
                                <img alt="اینترکام" title="اینترکام" class="ls-bg"
                                     src="../assets/sliderimages/intercom-bg.jpg"
                                     style="top:0px;left:0px;white-space: nowrap;"/>

                                <img alt="اینترکام" title="اینترکام" class="ls-l"
                                     data-ls="delayin:500;offsetxin:0;offsetyin:0;durationin:100;fadein:true; offsetxout:0;durationout:100;"
                                     src="../assets/sliderimages/circle.png"
                                     style="top:449px;left:874px;white-space: nowrap;"/>
                                <img alt="اینترکام" title="اینترکام" class="ls-l"
                                     data-ls="delayin:1000;offsetxin:0;durationin:1500;easingin:linear;scalexin:0;scaleyin:0;offsetxout:0;durationout:1500;showuntil:1;easingout:linear;scalexout:2;scaleyout:2;"
                                     src="../assets/sliderimages/circle.png"
                                     style="top:449px;left:874px;white-space: nowrap;"/>
                                <!-- <img src="../assets/sliderimages/circle.png" class="ls-l" style="top:449px;left:874px;white-space: nowrap;" data-ls="delayin:2000;offsetxin:0;durationin:1500;easingin:linear;scalexin:0;scaleyin:0;offsetxout:0;durationout:1500;showuntil:1;easingout:linear;scalexout:2;scaleyout:2;" alt=""/> -->
                                <img alt="اینترکام" title="اینترکام" class="ls-l"
                                     data-ls="delayin:2500;offsetxin:0;offsetyin:0;durationin:600;fadein:true; offsetxout:0;durationout:100;"
                                     src="../assets/sliderimages/circle-line-blue.png"
                                     style="top:449px;left:874px;white-space: nowrap;"/>
                                <img alt="اینترکام"
                                     title="اینترکام"
                                     class="slider-more-btn ls-l"
                                     data-href="/shop/product/iip-2000-t20r-80-ip-intercom-panel-talkback-20-button-2ru-rackmount-55475"
                                     data-ls="delayin:500; offsetxin:0; durationin:500;easingin:easeInOutCubic;offsetxout:0;durationout:1000;easingout:easeInOutCubic;"
                                     src="../assets/sliderimages/IIP-2000-T20R.png"
                                     style="top:440px;left:842px;white-space: nowrap;"/>

                                <img alt="اینترکام" title="اینترکام" class="ls-l"
                                     data-ls="delayin:500; offsetxin:0;offsetyin:0;durationin:100;fadein:true; offsetxout:0;durationout:100;"
                                     src="../assets/sliderimages/circle.png"
                                     style="top:449px;left:652px;white-space: nowrap;"/>
                                <img alt="اینترکام" title="اینترکام" class="ls-l"
                                     data-ls="delayin:2000;offsetxin:0;durationin:1500;easingin:linear;scalexin:0;scaleyin:0;offsetxout:0;durationout:1500;showuntil:1;easingout:linear;scalexout:2;scaleyout:2;"
                                     src="../assets/sliderimages/circle.png"
                                     style="top:449px;left:652px;white-space: nowrap;"/>
                                <!-- <img src="../assets/sliderimages/circle.png" class="ls-l" style="top:449px;left:652px;white-space: nowrap;" data-ls="delayin:3000;offsetxin:0;durationin:1500;easingin:linear;scalexin:0;scaleyin:0;offsetxout:0;durationout:1500;showuntil:1;easingout:linear;scalexout:2;scaleyout:2;" alt=""/> -->
                                <img alt="اینترکام" title="اینترکام" class="ls-l"
                                     data-ls="delayin:3500; offsetxin:0;offsetyin:0;durationin:600;fadein:true; offsetxout:0;durationout:100;"
                                     src="../assets/sliderimages/circle-line-blue.png"
                                     style="top:449px;left:652px;white-space: nowrap;"/>
                                <img alt="اینترکام"
                                     class="slider-more-btn ls-l"
                                     data-href="/shop/product/iip-2000-t20r-80-ip-intercom-panel-talkback-20-button-2ru-rackmount-55475"
                                     data-ls="delayin:500; offsetxin:0; durationin:500;easingin:easeInOutCubic;offsetxout:0;durationout:1000;easingout:easeInOutCubic;"
                                     src="../assets/sliderimages/IIP-2000-T10R.png"
                                     style="top:457px;left:617px;white-space: nowrap;"/>

                                <img alt="اینترکام" title="اینترکام" class="ls-l"
                                     data-ls="delayin:500; offsetxin:0;offsetyin:0;durationin:100;fadein:true; offsetxout:0;durationout:100;"
                                     src="../assets/sliderimages/circle.png"
                                     style="top:449px;left:464px;white-space: nowrap;"/>
                                <img alt="اینترکام" title="اینترکام" class="ls-l"
                                     data-ls="delayin:3000;offsetxin:0;durationin:1500;easingin:linear;scalexin:0;scaleyin:0;offsetxout:0;durationout:1500;showuntil:1;easingout:linear;scalexout:2;scaleyout:2;"
                                     src="../assets/sliderimages/circle.png"
                                     style="top:449px;left:464px;white-space: nowrap;"/>
                                <!-- <img src="../assets/sliderimages/circle.png" class="ls-l" style="top:449px;left:464px;white-space: nowrap;" data-ls="delayin:4000;offsetxin:0;durationin:1500;easingin:linear;scalexin:0;scaleyin:0;offsetxout:0;durationout:1500;showuntil:1;easingout:linear;scalexout:2;scaleyout:2;" alt=""/> -->
                                <img alt="اینترکام" title="اینترکام" class="ls-l"
                                     data-ls="delayin:4500; offsetxin:0;offsetyin:0;durationin:600;fadein:true; offsetxout:0;durationout:100;"
                                     src="../assets/sliderimages/circle-line-blue.png"
                                     style="top:449px;left:464px;white-space: nowrap;"/>
                                <img alt="اینترکام"
                                     title="اینترکام"
                                     class="slider-more-btn ls-l"
                                     data-href="/shop/product/iip-2000-t10d-80-ip-intercom-panel-talkback-10-button-desktop-55473"
                                     data-ls="delayin:500; offsetxin:0; durationin:500;easingin:easeInOutCubic;offsetxout:0;durationout:1000;easingout:easeInOutCubic;"
                                     src="../assets/sliderimages/IIP-2000-T10D.png"
                                     style="top:444px;left:433px;white-space: nowrap;"/>

                                <img alt="اینترکام" title="اینترکام" class="ls-l"
                                     data-ls="delayin:500; offsetxin:0;offsetyin:0;durationin:100;fadein:true; offsetxout:0;durationout:100;"
                                     src="../assets/sliderimages/circle.png"
                                     style="top:449px;left:294px;white-space: nowrap;"/>
                                <img alt="اینترکام" title="اینترکام" class="ls-l"
                                     data-ls="delayin:4000;offsetxin:0;durationin:1500;easingin:linear;scalexin:0;scaleyin:0;offsetxout:0;durationout:1500;showuntil:1;easingout:linear;scalexout:2;scaleyout:2;"
                                     src="../assets/sliderimages/circle.png"
                                     style="top:449px;left:294px;white-space: nowrap;"/>
                                <!-- <img src="../assets/sliderimages/circle.png" class="ls-l" style="top:449px;left:294px;white-space: nowrap;" data-ls="delayin:5000;offsetxin:0;durationin:1500;easingin:linear;scalexin:0;scaleyin:0;offsetxout:0;durationout:1500;showuntil:1;easingout:linear;scalexout:2;scaleyout:2;" alt=""/> -->
                                <img alt="اینترکام" title="اینترکام" class="ls-l"
                                     data-ls="delayin:5500; offsetxin:0;offsetyin:0;durationin:600;fadein:true; offsetxout:0;durationout:100;"
                                     src="../assets/sliderimages/circle-line-blue.png"
                                     style="top:449px;left:294px;white-space: nowrap;"/>
                                <img alt="اینترکام"
                                     title="اینترکام"
                                     class="slider-more-btn ls-l"
                                     data-href="/shop/product/iip-2000-aapp-ip-intercom-panel-android-application-68061"
                                     data-ls="delayin:500; offsetxin:0; durationin:500;easingin:easeInOutCubic;offsetxout:0;durationout:1000;easingout:easeInOutCubic;"
                                     src="../assets/sliderimages/IIP-2000-AAPP.png"
                                     style="top:470px;left:342px;white-space: nowrap;"/>

                                <img alt="اینترکام" title="اینترکام" class="ls-l"
                                     data-ls="delayin:500; offsetxin:0;offsetyin:0;durationin:100;fadein:true; offsetxout:0;durationout:100;"
                                     src="../assets/sliderimages/circle.png"
                                     style="top:449px;left:101px;white-space: nowrap;"/>
                                <img alt="اینترکام"  title="اینترکام" class="ls-l"
                                     data-ls="delayin:5000;offsetxin:0;durationin:1500;easingin:linear;scalexin:0;scaleyin:0;offsetxout:0;durationout:1500;showuntil:1;easingout:linear;scalexout:2;scaleyout:2;"
                                     src="../assets/sliderimages/circle.png"
                                     style="top:449px;left:101px;white-space: nowrap;"/>
                                <!-- <img src="../assets/sliderimages/circle.png" class="ls-l" style="top:449px;left:101px;white-space: nowrap;" data-ls="delayin:6000;offsetxin:0;durationin:1500;easingin:linear;scalexin:0;scaleyin:0;offsetxout:0;durationout:1500;showuntil:1;easingout:linear;scalexout:2;scaleyout:2;" alt=""/> -->
                                <img alt="اینترکام" title="اینترکام" class="ls-l"
                                     data-ls="delayin:6500; offsetxin:0;offsetyin:0;durationin:600;fadein:true; offsetxout:0;durationout:100;"
                                     src="../assets/sliderimages/circle-line-blue.png"
                                     style="top:449px;left:101px;white-space: nowrap;"/>
                                <img alt="اینترکام"
                                     title="اینترکام"
                                     class="slider-more-btn ls-l"
                                     data-href="/shop/product/iip-2000-wapp-ip-intercom-panel-windows-application-68688"
                                     data-ls="delayin:500; offsetxin:0; durationin:500;easingin:easeInOutCubic;offsetxout:0;durationout:1000;easingout:easeInOutCubic;"
                                     src="../assets/sliderimages/IIP-2000-WAPP.png"
                                     style="top:473px;left:86px;white-space: nowrap;"/>

                                <p class="ls-l"
                                   data-ls="delayin:2500; offsetxin:0;offsetyin:0;durationin:1000;fadein:true; offsetxout:0;durationout:100;"
                                   style="top:590px;left:879px;font-size:18px;color:#fff;white-space: nowrap;">
                                    <!-- <span data-href="/shop/product/iip-2000-t10r-80-ip-intercom-panel-talkback-10-button-1ru-rackmount-55474" class="link-span" style="white-space: normal;">IIP-2000-T20R</span> -->
                                    <span class="slider-more-btn font-roboto"
                                          data-href="/shop/product/iip-2000-t20r-80-ip-intercom-panel-talkback-20-button-2ru-rackmount-55475"
                                          style="white-space: normal;">IIP-2000-T20R</span>
                                </p>
                                <p class="ls-l"
                                   data-ls="delayin:3500; offsetxin:0;offsetyin:0;durationin:1000;fadein:true; offsetxout:0;durationout:100;"
                                   style="top:590px;left:661px;font-size:18px;color:#fff;white-space: nowrap;">
                                        <span class="slider-more-btn font-roboto"
                                              data-href="/shop/product/iip-2000-t10r-80-ip-intercom-panel-talkback-10-button-1ru-rackmount-55474"
                                              style="white-space: normal;">IIP-2000-T10R</span>
                                </p>
                                <p class="ls-l"
                                   data-ls="delayin:4500; offsetxin:0;offsetyin:0;durationin:1000;fadein:true; offsetxout:0;durationout:100;"
                                   style="top:590px;left:473px;font-size:18px;color:#fff;white-space: nowrap;">
                                        <span class="slider-more-btn font-roboto"
                                              data-href="/shop/product/iip-2000-t10d-80-ip-intercom-panel-talkback-10-button-desktop-55473"
                                              style="white-space: normal;">IIP-2000-T10D</span>
                                </p>
                                <p class="ls-l"
                                   data-ls="delayin:5500; offsetxin:0;offsetyin:0;durationin:1000;fadein:true; offsetxout:0;durationout:100;"
                                   style="top:590px;left:297px;font-size:18px;color:#fff;white-space: nowrap;">
                                        <span class="slider-more-btn font-roboto"
                                              data-href="/shop/product/iip-2000-aapp-ip-intercom-panel-android-application-68061"
                                              style="white-space: normal;">IIP-2000-AAPP</span>
                                </p>
                                <p class="ls-l"
                                   data-ls="delayin:6500; offsetxin:0;offsetyin:0;durationin:1000;fadein:true; offsetxout:0;durationout:100;"
                                   style="top:590px;left:107px;font-size:18px;color:#fff;white-space: nowrap;">
                                        <span class="slider-more-btn font-roboto"
                                              data-href="/shop/product/iip-2000-wapp-ip-intercom-panel-windows-application-68688"
                                              style="white-space: normal;">IIP-2000-WAPP</span>
                                </p>

                                <p class="ls-l"
                                   data-ls="delayin:500; offsetxin:0; durationin:2500;offsetxout:0; durationout:2500;"
                                   style="top:110px;left:783px;font-size:30px; color:white; font-weight:500; white-space: normal;">
                                    اینترکام
                                </p>
                                <p class="ls-l"
                                   data-ls="delayin:1500; offsetxin:0;offsetyin:-50; durationin:1500;fadein:true; offsetxout:0;offsetyout:0;durationout:1500;fadeout:true;"
                                   style="top:166px;left:100px; font-size:35px; color:white; font-weight:800; white-space: normal;line-height:80px">
                                    سیستم یکپارچه ارتباط صوتی در بستر شبکه
                                </p>
                                <p class="ls-l btn-default"
                                   data-ls="delayin:7000; offsetxin:0;easingin:easeOutQuint;scalexin:0.8;scaleyin:0.8;offsetxout:0;durationout:750;scalexout:0.8;scaleyout:0.8;"
                                   style="top:291px; left:103px; font-size: 23px; font-weight:300; line-height:initial; white-space:normal; padding: 3px 50px 3px 50px; border-radius:4px;">
                                    <app-button :titleButton=labelTopTitleMoreButton
                                                classButton="item-small-button"
                                                pageLink="products"></app-button>
                                </p>
                            </div>
                        </div>
                    </b-row>
                </b-container-flouid>
            </mq-layout>
            <mq-layout mq="sm">
                <b-container-flouid
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-sine"
                        data-aos-offset="300">
                </b-container-flouid>
                <carousel :items="1" :loop=true :nav=false>
                    <item-small-slider
                            image="1.jpg"
                            :slideTitle=labelModularProducts
                            :sliderText=labelTextSlideSmall_1
                            :moreLink="20"
                    ></item-small-slider>
                    <item-small-slider
                            image="2.jpg"
                            :slideTitle=labelModularMultiView
                            :sliderText=labelTextSlideSmall_2
                            :moreLink="25"
                    ></item-small-slider>
                    <item-small-slider
                            image="3.jpg"
                            :slideTitle=labelModularIpIntercom
                            :sliderText=labelTextSlideSmall_3
                            :moreLink="26"
                    ></item-small-slider>
                </carousel>
            </mq-layout>
        </section>

        <section>
                            
           <div class="top-projects-section">
            <b-container>
                <b-row>
                    <b-col cols="12">
                        <app-first-title :title=labelIntroduction></app-first-title>
                        <app-paragraph
                                text="گروه مهندسی صمیم با دو دهه فعالیت و نوآوری در حوزه فناوری رسانه و برودکست، به عنوان یک شرکت‌ پیشگام در طراحی و تولید تجهیزات حرفه‌ای و راهکارهای پیشرفته صدا و تصویر شناخته می‌شود. گروه صمیم با ارائه محصولات مرغوب با استانداردهای بین‌المللی، نقش تعیین کننده‌ای در ارتقا سطح خدمات صنعت برودکست داشته است و به پشتوانه کیفیت محصولات خود، یکی از تامین‌کنندگان اصلی سازمان صدا و سیما شناخته می‌شود. با افتخار می‌گوییم در زندگی یک ببینده ایرانی سیگنالی نیست که به دست مخاطب برسد و از محصولات سخت‌افزاری و نرم‌افزاری صمیم عبور نکرده باشد."></app-paragraph>
                    </b-col>
                </b-row>
            </b-container>
           </div>

        </section>

        <section>
            <b-container>
                <b-row>
                    <b-col cols="12">
                        <app-main-title :title=labelMainTitlesNewProducts></app-main-title>
                    </b-col>
                </b-row>
            </b-container>
        </section>
        <!--new products section-->
        <section>
            <mq-layout mq="lg">
                <b-container data-aos="fade-up"
                             data-aos-duration="1000"
                             data-aos-easing="ease-in-sine"
                             data-aos-offset="300">
                    <b-row>
                        <b-col class="new-products-section" cols="12" md="12">
                            <app-tabs></app-tabs>
                        </b-col>
                    </b-row>
                </b-container>
            </mq-layout>
            <mq-layout mq="md">
                <b-col class="new-products-section" cols="12" md="12">
                    <app-tabs></app-tabs>
                </b-col>
            </mq-layout>
            <mq-layout mq="sm">
                <app-products-home-small></app-products-home-small>
            </mq-layout>
            <b-container>
                <b-row>
                    <b-col cols="12">
                        <app-button
                                data-aos="fade-up"
                                data-aos-duration="1000"
                                :classButton=styleAllButton
                                :titleButton="labelAllProductsButton"
                                pageLink="products"></app-button>
                    </b-col>
                </b-row>
            </b-container>
        </section>
        <!--top projects section-->
        <section>
            <mq-layout mq="lg">
                <div class="top-projects-section">
                    <app-main-title :title=labelMainTitlesTopProjects></app-main-title>
                    <b-container-flouid class="first-section">
                        <b-row data-aos="fade-left"
                               data-aos-duration="500"
                               data-aos-offset="500"
                               class="mt50"
                        >
                            <b-col class="pt-2 pt-lg-2" cols="5" lg="5" md="12">
                                <b-row align-h="center">
                                    <b-col class="text" cols="12" lg="10" md="12">
                                        <app-title :title=labelTopProjectFirstLeft
                                                   classStyle="top-project-title"></app-title>
                                        <app-paragraph text="انتخابات ریاست جمهوری در ایران مهم‌ترین رویداد سیاسی کشور به شمار می‌آید و
                                            همواره تلاش رسانه ملی بر این بوده است که به بهترین شکل ممکن این رویداد را
                                            پوشش دهد، به نحوی که تمام مردم حتی در دورافتاده‌ترین نقاط کشور نیز در جریان
                                            برنامه‌های نامزدهای انتخابات قرار گیرند. برای این منظور در هر دوره
                                            برنامه‌های متنوعی طراحی و تولید می‌شود که یکی از مهم‌ترین و تاثیرگذارترین
                                            آنها، مناظره می‌باشد."></app-paragraph>
                                    </b-col>
                                     <b-col cols="12" >
                                        <app-button
                                                :titleButton=labelTopTitleMoreButton
                                                classButton="top-project-more-button"
                                                pageLink="سامانه-هوشمند-محاسبه-زمان"></app-button>
                                    </b-col>
                                </b-row>
                            </b-col>
                            <b-col class="right-section" cols="7" lg="7" md="12">
                                <b-row>
                                    <b-col class="right-align" cols="4">
                                        <img alt="گروه صمیم" src="../assets/img/top-projects/scalibility.png">
                                        <app-title :title=labelTopProjectsScalability
                                                   classStyle="item-top-project-title"></app-title>
                                    </b-col>
                                    <b-col cols="4" class="center-align">
                                        <img alt="گروه صمیم" src="../assets/img/top-projects/Reliability.png">
                                        <app-title :title=labelTopProjectsReliability
                                                   classStyle="item-top-project-title"></app-title>
                                    </b-col>
                                    <b-col class="left-align" cols="4">
                                        <img alt="گروه صمیم" src="../assets/img/top-projects/flexibility.png">
                                        <app-title :title=labelTopProjectsFlexibility
                                                   classStyle="item-top-project-title"></app-title>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                    </b-container-flouid>
                    <b-container-flouid class="second-section">
                        <b-row data-aos="fade-right"
                               data-aos-duration="500"
                               data-aos-offset="500">
                            <b-col class="left-section" cols="7" lg="7" md="12" order-lg="1" order-md="2">
                                <b-row>
                                    <b-col class="right-align" cols="4">
                                        <img alt="گروه صمیم" src="../assets/img/top-projects/MultiImageProcessor.png">
                                        <app-title :title=labelTopProjectsMultiProcessorOneSection
                                                   classStyle="item-top-project-title"></app-title>
                                        <app-title :title=labelTopProjectsMultiProcessorTwoSection
                                                   classStyle="item-top-project-title-two-section-right"></app-title>
                                    </b-col>
                                    <b-col cols="4">
                                        <img alt="گروه صمیم" src="../assets/img/top-projects/RealTime.png">
                                        <app-title :title=labelTopProjectsRealTime
                                                   classStyle="item-top-project-title"></app-title>
                                    </b-col>
                                    <b-col class="left-align" cols="4">
                                        <img alt="گروه صمیم" src="../assets/img/top-projects/VarifocalLens.png">
                                        <app-title :title=labelTopProjectsLensFirstSection
                                                   classStyle="item-top-project-title"></app-title>
                                        <app-title :title=labelTopProjectsLensTwoSection
                                                   classStyle="item-top-project-title-two-section"></app-title>
                                    </b-col>
                                </b-row>
                            </b-col>
                            <b-col cols="5" lg="5" md="12" order-lg="2" order-md="1">
                                <b-row align-h="center" class="pt-2 pt-lg-5 pt-md-2">
                                    <b-col cols="12" lg="10" md="12">
                                        <app-title :title=labelTopProjectSecondRight
                                                   classStyle="top-project-title"></app-title>
                                        <app-paragraph text="با وجود اینکه طراحی و اجرای این پروژه با استفاده از راهکارها و محصولات موجود
                                            در شرکت امکان‌پذیر بود؛ اما با در نظر داشتن نیازهای آتی سازمان، طراحی یک
                                            راهکار کاملا جدید در دستور کار متخصصان گروه صمیم قرار گرفت. مدیر بخش نرم
                                            افزار شرکت صمیم از مقیاس‌پذیری، دسترس‌پذیری و تطابق با سیستم‌ها و
                                            استاندارهای جهانی به عنوان مهم‌ترین ویژگی‌های این پروژه نام بردند.">
                                        </app-paragraph>
                                    </b-col>
                                    <b-col cols="12" class="mt-lg-3">
                                        <app-button
                                                :titleButton=labelTopTitleMoreButton
                                                classButton="top-project-more-button"
                                                pageLink="سیستم-مانیتورینگ-دیداری-شنیداری"></app-button>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                    </b-container-flouid>
                </div>
            </mq-layout>
            <mq-layout mq="md">
                <b-container-flouid>
                    <b-row class="top-projects-section-medium">
                        <b-col cols="12" class="mt50 mb50">
                            <app-main-title :title=labelMainTitlesTopProjects></app-main-title>
                        </b-col>
                        <b-row class="top-projects-medium">
                            <b-col class="first-section" cols="12">
                                <b-row>
                                    <b-col class="right-align" cols="4">
                                        <img alt="گروه صمیم" src="../assets/img/top-projects/scalibility.png">
                                        <app-title :title=labelTopProjectsScalability
                                                   classStyle="item-top-project-title"></app-title>
                                    </b-col>
                                    <b-col cols="4">
                                        <img alt="گروه صمیم" src="../assets/img/top-projects/Reliability.png">
                                        <app-title :title=labelTopProjectsReliability
                                                   classStyle="item-top-project-title"></app-title>
                                    </b-col>
                                    <b-col class="left-align" cols="4">
                                        <img alt="گروه صمیم" src="../assets/img/top-projects/flexibility.png">
                                        <app-title :title=labelTopProjectsFlexibility
                                                   classStyle="item-top-project-title"></app-title>
                                    </b-col>
                                </b-row>
                            </b-col>
                            <b-col cols="12">
                                <b-row align-h="center" class="p-md-5  pt-md-2">
                                    <b-col cols="12" lg="8" md="12">
                                        <app-title :title=labelTopProjectSecondRight
                                                   classStyle="top-project-title-small"></app-title>
                                        <app-paragraph text="با وجود اینکه طراحی و اجرای این پروژه با استفاده از راهکارها و محصولات موجود
                                            در شرکت امکان‌پذیر بود؛ اما با در نظر داشتن نیازهای آتی سازمان، طراحی یک
                                            راهکار کاملا جدید در دستور کار متخصصان گروه صمیم قرار گرفت. مدیر بخش نرم
                                            افزار شرکت صمیم از مقیاس‌پذیری، دسترس‌پذیری و تطابق با سیستم‌ها و
                                            استاندارهای جهانی به عنوان مهم‌ترین ویژگی‌های این پروژه نام بردند.">
                                        </app-paragraph>
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <b-col cols="12" class="mb50">
                                        <app-button :titleButton=labelTopTitleMoreButton
                                                    classButton="more-button-top-projects-small"
                                                    pageLink="سیستم-مانیتورینگ-دیداری-شنیداری"></app-button>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                        <b-row class="top-projects-medium">
                            <b-col class="second-section" cols="12">
                                <b-row>
                                    <b-col class="right-align" cols="4">
                                        <img src="../assets/img/top-projects/MultiImageProcessor.png">
                                        <app-title :title=labelTopProjectsMultiProcessorOneSection
                                                   classStyle="item-top-project-title"></app-title>
                                        <app-title :title=labelTopProjectsMultiProcessorTwoSection
                                                   classStyle="item-top-project-title"></app-title>
                                    </b-col>
                                    <b-col cols="4">
                                        <img src="../assets/img/top-projects/RealTime.png">
                                        <app-title :title=labelTopProjectsRealTime
                                                   classStyle="item-top-project-title"></app-title>
                                    </b-col>
                                    <b-col class="left-align" cols="4">
                                        <img src="../assets/img/top-projects/VarifocalLens.png">
                                        <app-title :title=labelTopProjectsLensFirstSection
                                                   classStyle="item-top-project-title"></app-title>
                                        <app-title :title=labelTopProjectsLensTwoSection
                                                   classStyle="item-top-project-title"></app-title>
                                    </b-col>
                                </b-row>
                            </b-col>
                            <b-col cols="12">
                                <b-row align-h="center" class="p-md-5">
                                    <b-col cols="12" lg="8" md="12">
                                        <app-title :title=labelTopProjectFirstLeft
                                                   classStyle="top-project-title-small"></app-title>
                                        <app-paragraph text="انتخابات ریاست جمهوری در ایران مهم‌ترین رویداد سیاسی کشور به شمار می‌آید و
                                            همواره تلاش رسانه ملی بر این بوده است که به بهترین شکل ممکن این رویداد را
                                            پوشش دهد، به نحوی که تمام مردم حتی در دورافتاده‌ترین نقاط کشور نیز در جریان
                                            برنامه‌های نامزدهای انتخابات قرار گیرند. برای این منظور در هر دوره
                                            برنامه‌های متنوعی طراحی و تولید می‌شود که یکی از مهم‌ترین و تاثیرگذارترین
                                            آنها، مناظره می‌باشد."></app-paragraph>
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <b-col cols="12">
                                        <app-button :titleButton=labelTopTitleMoreButton
                                                    classButton="more-button-top-projects-small"
                                                    pageLink="سامانه-هوشمند-محاسبه-زمان"></app-button>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                    </b-row>
                </b-container-flouid>
            </mq-layout>
            <mq-layout mq="sm">
                <div class="top-projects-section-small">
                    <app-main-title :title=labelMainTitlesTopProjects></app-main-title>
                    <div class="top-projects-small">
                        <div class="first-section"
                             data-aos="fade-up"
                             data-aos-duration="1000"
                             data-aos-easing="ease-in-sine"
                             data-aos-offset="300">
                            <div class="top-section">
                                <b-container>
                                    <item-small-top-projects
                                            :title=labelTopProjectsScalability
                                            image="scalibility.png"></item-small-top-projects>
                                    <item-small-top-projects
                                            :title=labelTopProjectsReliability
                                            image="Reliability.png"></item-small-top-projects>
                                    <item-small-top-projects
                                            :title=labelTopProjectsFlexibility
                                            image="flexibility.png"></item-small-top-projects>
                                </b-container>
                            </div>
                            <div class="bottom-section">
                                <b-container>
                                    <b-row>
                                        <app-title
                                                :title=labelTopProjectSecondRight
                                                classStyle="top-project-title-small"></app-title>
                                        <app-paragraph text="با وجود اینکه طراحی و اجرای این پروژه با استفاده از راهکارها و محصولات موجود
                                            در شرکت امکان‌پذیر بود؛ اما با در نظر داشتن نیازهای آتی سازمان، طراحی یک
                                            راهکار کاملا جدید در دستور کار متخصصان گروه صمیم قرار گرفت. مدیر بخش نرم
                                            افزار شرکت صمیم از مقیاس‌پذیری، دسترس‌پذیری و تطابق با سیستم‌ها و
                                            استاندارهای جهانی به عنوان مهم‌ترین ویژگی‌های این پروژه نام بردند.">
                                        </app-paragraph>
                                    </b-row>
                                </b-container>
                            </div>
                            <app-button
                                    :titleButton=labelTopTitleMoreButton
                                    classButton="more-button-top-projects-small"
                                    pageLink="سیستم-مانیتورینگ-دیداری-شنیداری"
                                    class="mb50"
                            ></app-button>
                        </div>
                        <div class="second-section"
                             data-aos="fade-up"
                             data-aos-duration="1000"
                             data-aos-easing="ease-in-sine"
                             data-aos-offset="300">
                            <div class="top-section">
                                <b-container>
                                    <item-small-top-projects
                                            :title=labelTopProjectsMultiProcessor
                                            image="MultiImageProcessor.png"></item-small-top-projects>
                                    <item-small-top-projects
                                            :title=labelTopProjectsRealTime
                                            image="RealTime.png"></item-small-top-projects>
                                    <item-small-top-projects
                                            :title=labelTopProjectsLens
                                            image="VarifocalLens.png"></item-small-top-projects>
                                </b-container>
                            </div>
                            <div class="bottom-section">
                                <b-container>
                                    <b-row>
                                        <app-title :title=labelTopProjectFirstLeft
                                                   classStyle="top-project-title-small"></app-title>
                                        <app-paragraph text="انتخابات ریاست جمهوری در ایران مهم‌ترین رویداد سیاسی کشور به شمار می‌آید و
                                            همواره تلاش رسانه ملی بر این بوده است که به بهترین شکل ممکن این رویداد را
                                            پوشش دهد، به نحوی که تمام مردم حتی در دورافتاده‌ترین نقاط کشور نیز در جریان
                                            برنامه‌های نامزدهای انتخابات قرار گیرند. برای این منظور در هر دوره
                                            برنامه‌های متنوعی طراحی و تولید می‌شود که یکی از مهم‌ترین و تاثیرگذارترین
                                            آنها، مناظره می‌باشد."></app-paragraph>
                                    </b-row>
                                </b-container>
                            </div>
                            <app-button :titleButton=labelTopTitleMoreButton
                                        classButton="more-button-top-projects-small"
                                        pageLink="سامانه-هوشمند-محاسبه-زمان"></app-button>
                        </div>
                    </div>
                </div>
            </mq-layout>
            <b-container-flouid>
                <b-row class="top-projects-section-all-button">
                    <b-col cols="12">
                        <app-button
                                data-aos="fade-in"
                                data-aos-duration="1000"
                                :classButton=styleAllButton
                                :titleButton="labelAllProjectsButton"
                                pageLink="سیستم-مانیتورینگ-دیداری-شنیداری"></app-button>
                    </b-col>
                </b-row>
            </b-container-flouid>
        </section>
        <!--our solution section-->
        <section>
            <div class="our-solution">
                <app-main-title :title=labelMainTitlesOurSolutions></app-main-title>
                <mq-layout :mq="['md', 'lg']">
                    <b-container>
                        <b-row>
                            <item-our-solution
                                    :title=labelForthSolution
                                    classStyle="item-our-solution-3"
                                    data-aos="fade-down-left"
                                    linkPage="استریمر-پهن-باند"
                                    text="">
                            </item-our-solution>
                            <item-our-solution
                                    :title=labelThreeSolution
                                    classStyle="item-our-solution-1"
                                    data-aos="fade-up"
                                    linkPage="گیتوی-IP"
                                    text="">
                            </item-our-solution>
                            <item-our-solution
                                    :title=labelTwoSolution
                                    classStyle="item-our-solution-2"
                                    data-aos="fade-down"
                                    linkPage="سامانه-مانیتورینگ-شبکه"
                                    text="">
                            </item-our-solution>
                            <item-our-solution
                                    :title=labelFirstSolution
                                    classStyle="item-our-solution-4"
                                    data-aos="fade-up-right"
                                    linkPage="سامانه-مدیریت-دارایی-محتوا"
                                    text="">
                            </item-our-solution>
                        </b-row>
                    </b-container>
                </mq-layout>
                <!-- <mq-layout mq="md"></mq-layout> -->
                <mq-layout mq="sm">
                    <b-container>
                        <b-row>
                            <item-our-solution
                                    :title=labelThreeSolution
                                    classStyle="item-our-solution-1"
                                    data-aos="fade-right"
                                    data-aos-duration="500"
                                    data-aos-offset="500"
                                    linkPage="گیتوی-IP"
                                    text="">
                            </item-our-solution>
                            <item-our-solution
                                    :title=labelTwoSolution
                                    classStyle="item-our-solution-2"
                                    data-aos="fade-left"
                                    data-aos-duration="500"
                                    data-aos-offset="500"
                                    linkPage="سامانه-مانیتورینگ-شبکه"
                                    text="">
                            </item-our-solution>
                            <item-our-solution
                                    :title=labelForthSolution
                                    classStyle="item-our-solution-3"
                                    data-aos="fade-right"
                                    data-aos-duration="500"
                                    data-aos-offset="500"
                                    linkPage="استریمر-پهن-باند"
                                    text="">
                            </item-our-solution>
                            <item-our-solution
                                    classStyle="item-our-solution-4"
                                    data-aos="fade-left"
                                    data-aos-duration="500"
                                    data-aos-offset="500"
                                    linkPage="سامانه-مدیریت-دارایی-محتوا"
                                    text=""
                                    :title=labelFirstSolution>
                            </item-our-solution>
                        </b-row>
                    </b-container>
                </mq-layout>
                <app-button
                        data-aos="fade-in"
                        data-aos-duration="1000"
                        class="mt50"
                        :classButton=styleAllButton
                        :titleButton="labelAllSolutionButton"
                        pageLink="imam"></app-button>
            </div>
        </section>
        <!--our customer section-->
        <section>
            <div class="our-customers">
                <app-main-title :title=labelMainTitlesOurCustomer></app-main-title>
                <mq-layout mq="lg">
                    <b-container-flouid>
                        <b-row align-h="center">
                            <b-col class="container-large mt-lg-5" cols="10" lg="9" md="9">
                                <b-row align-h="center" class="container-customers section-fist-customers">
                                    <item-customer-image
                                            during=4000
                                            firstImage="01.png"
                                            secondImage="06.png"></item-customer-image>
                                    <item-customer-image
                                            during=4250
                                            firstImage="02.png"
                                            secondImage="22.png"></item-customer-image>
                                    <item-customer-image
                                            during=4500
                                            firstImage="03.png"
                                            secondImage="27.png"></item-customer-image>
                                    <item-customer-image
                                            during=4750
                                            firstImage="23.png"
                                            secondImage="09.png"></item-customer-image>
                                    <item-customer-image
                                            during=5000
                                            firstImage="21.png"
                                            secondImage="10.png"></item-customer-image>
                                </b-row>
                                <b-row align-h="center" class="container-customers">
                                    <item-customer-image
                                            during=4250
                                            firstImage="11.png"
                                            secondImage="16.png"></item-customer-image>
                                    <item-customer-image
                                            during=4500
                                            firstImage="12.png"
                                            secondImage="17.png"></item-customer-image>
                                    <item-customer-image
                                            during=4750
                                            firstImage="13.png"
                                            secondImage="25.png"></item-customer-image>
                                    <item-customer-image
                                            during=5000
                                            firstImage="14.png"
                                            secondImage="19.png"></item-customer-image>
                                    <item-customer-image
                                            during=4000
                                            firstImage="15.png"
                                            secondImage="20.png"></item-customer-image>
                                </b-row>
                            </b-col>
                        </b-row>
                    </b-container-flouid>
                </mq-layout>
                <mq-layout mq="md">
                    <b-container-flouid>
                        <b-row class="container-customers section-fist-customers" align-h="center">
                            <item-customer-image
                                    during=4000
                                    firstImage="02.png"
                                    secondImage="23.png"></item-customer-image>
                            <item-customer-image
                                    during=4250
                                    firstImage="01.png"
                                    secondImage="05.png"></item-customer-image>
                            <item-customer-image
                                    during=4500
                                    firstImage="03.png"
                                    secondImage="06.png"></item-customer-image>
                        </b-row>
                        <b-row class="container-customers" align-h="center">
                            <item-customer-image
                                    during=4500
                                    firstImage="21.png"
                                    secondImage="22.png"></item-customer-image>
                            <item-customer-image
                                    during=4700
                                    firstImage="09.png"
                                    secondImage="10.png"></item-customer-image>
                            <item-customer-image
                                    during=4250
                                    firstImage="11.png"
                                    secondImage="12.png"></item-customer-image>
                        </b-row>
                    </b-container-flouid>
                </mq-layout>
                <mq-layout mq="sm">
                    <b-container-flouid>
                        <b-row p-3 align-h="center"
                               class="container-customers section-fist-customers">
                            <item-customer-image
                                    during=4000
                                    firstImage="02.png"
                                    secondImage="17.png"></item-customer-image>
                            <item-customer-image
                                    during=4250
                                    firstImage="01.png"
                                    secondImage="03.png"></item-customer-image>
                        </b-row>
                        <b-row p-3 align-h="center"
                               class="container-customers">
                            <item-customer-image
                                    during=4500
                                    firstImage="06.png"
                                    secondImage="11.png"></item-customer-image>
                            <item-customer-image
                                    during=4750
                                    firstImage="09.png"
                                    secondImage="10.png"></item-customer-image>
                        </b-row>
                    </b-container-flouid>
                </mq-layout>
                <mq-layout :mq="['lg','md']">
                    <b-container :controls-height="60" :controls-visible=true :controls-width="30">
                        <b-row data-aos="zoom-in"
                               data-aos-duration="1000"
                               data-aos-easing="ease-in-sine"
                               data-aos-offset="300">
                            <b-col cols="12">
                                <carousel-3d :controls-visible="true">
                                    <slide :index="0">
                                        <div class="customer-slider-1">
                                            <div class="container-body">
                                                <b-media right-align vertical-align="center">
                                                    <b-img alt="placeholder" slot="aside"
                                                           src="../assets/img/customers/person/1.jpg"
                                                           width="80"></b-img>
                                                    <h5 class="mt-0 mb-1"> مهندس سیاسی فر- مدیرکل اداره فناوری فضای
                                                        مجازی </h5>
                                                    <p class="mb-0">
                                                        بر اساس تجربه‌ای که از کار در قسمت ماهواره داشتم، در نسل‌های
                                                        مختلف با تعاملی که بین کاربران و شرکت صمیم وجود داشت، امروز
                                                        کیفیت محصولات به جایی رسیده است که من تفاوتی با نوع خارجی
                                                        نمی‌بینم و در مواردی حتی بهتر نیز هست.
                                                    </p>
                                                </b-media>
                                            </div>

                                        </div>
                                    </slide>
                                    <slide :index="1">
                                        <div class="customer-slider-1">
                                            <div class="container-body">
                                                <b-media right-align vertical-align="center">
                                                    <b-img alt="placeholder" slot="aside"
                                                           src="../assets/img/customers/person/3.jpg"
                                                           width="80"></b-img>
                                                    <h5 class="mt-0 mb-1"> مهندس رحمان پور - مدیر پشتیبانی فیبر
                                                        نوری </h5>
                                                    <p class="mb-0">
                                                        شرکت صمیم یکی از شرکت‎های ایرانی پیشرو و موفق در صنعت برودکست
                                                        هست و از دیستریبیوترها و توزیع کننده‎های صمیم سالهاست در قسمت
                                                        نودال و همین طور SDH استفاده می‌شود و می‌توان گفت همه از آن راضی
                                                        هستند.
                                                    </p>
                                                </b-media>
                                            </div>
                                        </div>
                                    </slide>
                                    <slide :index="slideIndex">
                                        <div class="customer-slider-2">
                                            <div class="container-body">
                                                <b-media right-align vertical-align="center">
                                                    <b-img alt="placeholder" slot="aside"
                                                           src="../assets/img/customers/person/2.jpg"
                                                           width="80"></b-img>
                                                    <h5 class="mt-0 mb-1">دکتر سیدتقی سهرابی - مدیرکل صدا و سیمای مرکز
                                                        فارس</h5>
                                                    <p class="mb-0">
                                                        اعتماد به جوانان این مرز و بوم و تلاش شرکت‎های مانند صمیم امروز
                                                        ما را به نقطه ای رسانده که علاوه بر اینکه نیازهای داخلی خود را
                                                        برطرف می کنیم، مدعی هستیم که می توانیم با شرکت های مطرح دنیا
                                                        رقابت
                                                        کنیم. البته این هدف غایی و نهایی نیست و در کوشش هستیم تا ما خالق
                                                        و مبدع تکنولوژی هایی باشیم که آنها خریدار آن باشند.
                                                    </p>
                                                </b-media>
                                            </div>
                                        </div>
                                    </slide>
                                    <slide :index="3">
                                        <div class="customer-slider-3">
                                            <div class="container-body">
                                                <b-media right-align vertical-align="center">
                                                    <!--<b-img alt="placeholder" slot="aside"-->
                                                    <!--src="../assets/img/customers/person/4.jpg"-->
                                                    <!--width="80"></b-img>-->
                                                    <h5 class="mt-0 mb-1">مهندس محمد عیوضی- کارشناس برنامه ریزی اداره
                                                        کلی فنی صدا و تصویر</h5>
                                                    <p class="mb-0">
                                                        شرکت صمیم به واسطه نیروهای با تجربه و متخصص و تولید محصولات به
                                                        روز، گام موثر و مفیدی در تامین نیازهای سازمان صدا و سیما برداشته
                                                        و با بهره گرفتن از مهندسین جوان و بومی تلاش می‌کند با تکنولوژی
                                                        روز در حوزه طراحی و تولید تجهیزات صدا و تصویر گام بردارد.
                                                    </p>
                                                </b-media>
                                            </div>
                                        </div>
                                    </slide>
                                    <slide :index="4">
                                        <div class="customer-slider-3">
                                            <div class="container-body">
                                                <b-media right-align vertical-align="center">
                                                    <b-img alt="placeholder" slot="aside"
                                                           src="../assets/img/customers/person/4.jpg"
                                                           width="80"></b-img>
                                                    <h5 class="mt-0 mb-1"> مهندس جلال مختاری- مدیر ارتباطات زمینی و
                                                        ماهواره‌ای اصفهان</h5>
                                                    <p class="mb-0">
                                                        ما از تجهیزات مختلف صمیم در مرکز اصفهان استفاده می‌کنیم؛
                                                        ریماکس‌ها، تجهیزات اپتیکی و سیستم جامع مانیتورینگ که بسیار کامل
                                                        هستند و در سطح ایستگاه‌ها و واحد ارتباطات زمینی و ماهواره‌ای
                                                        کاربردهای زیادی دارند.
                                                    </p>
                                                </b-media>
                                            </div>
                                        </div>
                                    </slide>
                                </carousel-3d>
                            </b-col>
                        </b-row>
                    </b-container>
                </mq-layout>
                <mq-layout mq="sm">
                    <b-container>
                        <carousel :items="1" :loop=true :nav=true>
                            <item-small-customer
                                    firstTitle="مهندس سیاسیفر "
                                    image="1.jpg"
                                    secondTitle="مدیرکل اداره فناوری فضای مجازی"
                                    text="بر اساس تجربه ای که از کار در قسمت ماهواره داشتم، در نسلهای مختلف با تعاملی که بین کاربران و شرکت صمیم وجود داشت، امروز کیفیت محصولات به جایی رسیده است که من تفاوتی با نوع خارجی نمی بینم و در مواردی حتی بهتر نیز هست."></item-small-customer>
                            <item-small-customer
                                    firstTitle="دکتر سیدتقی سهرابی "
                                    image="2.jpg"
                                    secondTitle="مدیرکل صدا و سیمای مرکز فارس"
                                    text="اعتماد به جوانان این مرز و بوم و تلاش شرکت هایی مانند صمیم امروز ما را به نقطه ای رسانده که علاوه بر اینکه نیازهای داخلی خود را برطرف می کنیم، مدعی هستیم که می توانیم با شرکت های مطرح دنیا رقابت کنیم. البته این هدف غایی و نهایی نیست و در کوشش هستیم تا ما خالق و مبدع تکنولوژی هایی باشیم که آنها خریدار آن باشند."></item-small-customer>
                            <item-small-customer
                                    firstTitle="مهندس جلال مختاری "
                                    image="4.jpg"
                                    secondTitle="مدیر ارتباطات زمینی و ماهوارهای اصفهان"
                                    text="تجهیزاتی که صمیم در زنجیره صدا و تصویر ارائه کرده در سازمان صدا و سیما بازخورد مناسب و خوبی داشته و همکاران ما در مرکز اصفهان از این تجهیزات بسیار استفاده می کنند و راضی هستند. ریماکسها، تجهیزات اپتیکی و سیستم جامع مانیتورینگ که بسیار کامل هستند و در سطح ایستگاهها و واحد ارتباطات زمینی و ماهوارهای کاربردهای زیادی دارند."></item-small-customer>
                            <item-small-customer
                                    firstTitle="مهندس رحمانپور"
                                    image="3.jpg"
                                    secondTitle="مدیر پشتیبانی فیبر نوری"
                                    text="شرکت صمیم یکی از شرکتهای ایرانی پیشرو و موفق در صنعت برودکست هست و از دیستریبیوترها و توزیع کنندههای صمیم سالهاست در قسمت نودال و همین طور SDHاستفاده میشود و میتوان گفت همه از آن راضی هستند. ما از تجهیزات و سیستم های انتقال نوری صمیم در نقاط مختلف داخل سازمان یا نقاط خبری بیرون از سازمان برای انتقال سیگنال های صدا و تصویر به سالن SDH و از آنجا به نودال استفاده کردیم؛ سیستمهای EO و OE صمیم یکی از رقیب های اصلی برندهای خارجی معتبر است."></item-small-customer>
                        </carousel>
                    </b-container>
                </mq-layout>
                <app-button
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                        :classButton=styleAllButton
                        :titleButton="labelAllCustomerButton"
                        pageLink="customers"
                        class="mt-lg-5"
                ></app-button>
            </div>
        </section>
        <!--samim blog -->
        <section>
            <div class="samim-blog mt50">
                <app-main-title :title=labelMainTitlesSamimBlog></app-main-title>
                <mq-layout mq="lg">
                    <b-container>
                        <b-row v-if=getShowLoadingBlog>
                      
                          
                            
                            <b-col cols="12" lg="4">
                                <content-loader
                                        :height="475"
                                        :width="400"
                                        :speed="2"
                                        primaryColor="#f3f3f3"
                                        secondaryColor="#ecebeb">
                                    <rect x="153.19" y="222.17" rx="4" ry="4" width="234" height="30.42"/>
                                    <rect x="4" y="4.67" rx="5" ry="5" width="392" height="204"/>
                                    <rect x="16.69" y="273.17" rx="4" ry="4" width="369" height="20.02"/>
                                    <rect x="14.69" y="304.17" rx="4" ry="4" width="369" height="20.02"/>
                                </content-loader>
                            </b-col>
                            <b-col cols="12" lg="4">
                                <content-loader
                                        :height="475"
                                        :width="400"
                                        :speed="2"
                                        primaryColor="#f3f3f3"
                                        secondaryColor="#ecebeb">
                                    <rect x="153.19" y="222.17" rx="4" ry="4" width="234" height="30.42"/>
                                    <rect x="4" y="4.67" rx="5" ry="5" width="392" height="204"/>
                                    <rect x="16.69" y="273.17" rx="4" ry="4" width="369" height="20.02"/>
                                    <rect x="14.69" y="304.17" rx="4" ry="4" width="369" height="20.02"/>
                                </content-loader>
                            </b-col>
                            <b-col cols="12" lg="4">
                                <content-loader
                                        :height="475"
                                        :width="400"
                                        :speed="2"
                                        primaryColor="#f3f3f3"
                                        secondaryColor="#ecebeb">
                                    <rect x="153.19" y="222.17" rx="4" ry="4" width="234" height="30.42"/>
                                    <rect x="4" y="4.67" rx="5" ry="5" width="392" height="204"/>
                                    <rect x="16.69" y="273.17" rx="4" ry="4" width="369" height="20.02"/>
                                    <rect x="14.69" y="304.17" rx="4" ry="4" width="369" height="20.02"/>
                                </content-loader>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col cols="4" lg="4" md="6" v-for="post in getBlogPosts" :key="post.id">
                                <item-blog-home-page
                                        :image=post.id
                                        :text=post.subtitle
                                        :postUrl=post.url_friendly
                                        :title=post.title></item-blog-home-page>
                            </b-col>
                        </b-row>
                    </b-container>
                </mq-layout>
                <mq-layout mq="md">
                    <b-container>
                        <b-row>
                            <b-col cols="4" lg="4" md="6" v-for="post in getBlogPosts" :key="post.id">
                                <item-blog-home-page
                                        :image=post.id
                                        :text=post.subtitle
                                        :postUrl=post.url_friendly
                                        :title=post.title></item-blog-home-page>
                            </b-col>
                        </b-row>
                    </b-container>
                </mq-layout>
                <mq-layout mq="sm">
                    <b-container>
                        <b-row>
                            <b-col cols="12" lg="4" md="6" v-for="post in getBlogPosts" :key=post.id>
                                <item-blog-home-page
                                        :image=post.id
                                        :text=post.subtitle
                                        :postUrl=post.url_friendly
                                        :title=post.title></item-blog-home-page>
                            </b-col>
                        </b-row>
                    </b-container>
                </mq-layout>
                <app-button
                        data-aos="fade-up"
                        data-aos-duration="2000"
                        :classButton=styleAllButton
                        :titleButton="labelAllPostsButton"
                        pageLink="blog"
                        class="mt-lg-5"
                ></app-button>
            </div>
        </section>

    </b-container-flouid>
</template>

<script>
    import Flickity from 'vue-flickity';
    import AppMainTitle from "../components/titles/AppMainTitle";
    import {valueLabels} from "../utils/labels";
    import carousel from 'vue-owl-carousel'
    import ItemNewProduct from "../components/items/ItemNewProduct";
    import AppButton from "../components/buttons/AppButton";
    import AppHeader from "../components/layout/AppHeader";
    import AppTitle from "../components/titles/AppTitle";
    import ItemCustomerImage from "../components/items/ItemCustomerImage";
    import {Carousel3d, Slide} from 'vue-carousel-3d';
    import ItemBlogHomePage from "../components/items/ItemBlogHomePage";
    import ItemSmallTopProjects from "../components/items/ItemSmallTopProjects";
    import AppCollaps from "../components/layout/AppCollaps";
    import ItemSmallNewProduct from "../components/items/ItemSmallNewProduct";
    import ItemSmallCustomer from "../components/items/ItemSmallCustomer";
    import ItemSmallSlider from "../components/items/ItemSmallSlider";
    import ItemOurSolution from "../components/items/ItemOurSolution";
    import AppTabs from "../components/layout/AppTabs";
    import AppFooter from "../components/layout/AppFooter";
    import AppProductsHomeSmall from "../components/layout/AppProductsHomeSmall";
    import {mapActions, mapGetters} from 'vuex'
    import {ContentLoader} from 'vue-content-loader'
    import {metaTags} from "../utils/metaTages";
    import AppParagraph from "../components/layout/AppParagraph";
    import AppFirstTitle from "../components/titles/AppFirstTitle"


    export default {
        name: 'Home',
        data() {
            return {
                metaTitle: metaTags.HOME_PAGE.title,
                metaDescription: metaTags.HOME_PAGE.description,
                postList: [],
                productImageFirst: '',
                productImageSecond: '',
                productImageThree: '',
                productImageForth: '',
                productImageFive: '',
                containerState: 'show-container',
                heightSlideShow: 0,
                classNameTopProject: '',
                styleAllButton: '',
                slideIndex: 2,
                labelMainTitlesNewProducts:
                valueLabels.LABEL_MAIN_TITLE_HOME_PAGE_NEW_PRODUCTS,
                labelMainTitlesTopProjects:
                valueLabels.LABEL_MAIN_TITLE_HOME_PAGE_TOP_PROJECTS,
                labelMainTitlesOurCustomer:
                valueLabels.LABEL_MAIN_TITLE_HOME_PAGE_OUR_CUSTOMER,
                labelMainTitlesOurSolutions:
                valueLabels.LABEL_MAIN_TITLE_HOME_PAGE_OUR_SOLUTIONS,
                labelMainTitlesSamimBlog:
                valueLabels.LABEL_MAIN_TITLE_HOME_PAGE_SAMIM_BLOG,
                labelModularProducts:
                valueLabels.LABEL_HOME_PAGE_NEW_PRODUCTS_MODULAR_PRODUCTS,
                labelRoutersAndControlPanel:
                valueLabels.LABEL_HOME_PAGE_NEW_PRODUCTS_ROUTERTERS_AND_CONTROL_PANELS,
                labelModularMultiView:
                valueLabels.LABEL_HOME_PAGE_NEW_PRODUCTS_MUlTIVIEWER,
                labelModularIpIntercom:
                valueLabels.LABEL_HOME_PAGE_NEW_PRODUCTS_IP_INTERCOM,
                labelAllProductsButton:
                valueLabels.LABEL_HOME_PAGE_BUTTON_ALL_PRODUCT_E,
                labelAllProjectsButton:
                valueLabels.LABEL_HOME_PAGE_BUTTON_ALL_PROJECTS_E,
                labelAllCustomerButton:
                valueLabels.LABEL_HOME_PAGE_BUTTON_ALL_CUSTOMER_E,
                labelAllSolutionButton:
                valueLabels.LABEL_HOME_PAGE_BUTTON_ALL_SOLUTION_E,
                labelAllPostsButton:
                valueLabels.LABEL_HOME_PAGE_BUTTON_ALL_POSTS_E,
                labelTopProjectFirstLeft:
                valueLabels.LABEL_MAIN_HOME_PAGE_TOP_PROJECT_FIRST_LEFT_E,
                labelTopProjectSecondRight:
                valueLabels.LABEL_MAIN_HOME_PAGE_TOP_PROJECT_FIRST_RIGHT_E,
                labelTopTitleMoreButton:
                valueLabels.LABEL_MAIN_HOME_PAGE_MORE_BUTTON_BLOG,
                labelTopProjectsScalability:
                valueLabels.LABEL_MAIN_TITLE_HOME_PAGE_TOP_PROJECTS_SCALABILITY,
                labelTopProjectsReliability:
                valueLabels.LABEL_MAIN_TITLE_HOME_PAGE_TOP_PROJECTS_RELIABILITY,
                labelTopProjectsFlexibility:
                valueLabels.LABEL_MAIN_TITLE_HOME_PAGE_TOP_PROJECTS_FLEXIBILITY,
                labelTopProjectsLens:
                valueLabels.LABEL_MAIN_TITLE_HOME_PAGE_TOP_PROJECTS_VARIFOCAL_LENS,
                labelTopProjectsLensFirstSection:
                valueLabels.LABEL_MAIN_TITLE_HOME_PAGE_TOP_PROJECTS_VARIFOCAL_LENS_FIRST_SECTION,
                labelTopProjectsLensTwoSection:
                valueLabels.LABEL_MAIN_TITLE_HOME_PAGE_TOP_PROJECTS_VARIFOCAL_LENS_TWO_SECTION,
                labelTopProjectsRealTime:
                valueLabels.LABEL_MAIN_TITLE_HOME_PAGE_TOP_PROJECTS_REAL_TIME,
                labelTopProjectsMultiProcessor:
                valueLabels.LABEL_MAIN_TITLE_HOME_PAGE_TOP_PROJECTS_MULTI_PROCESSOR,
                labelTopProjectsMultiProcessorOneSection:
                valueLabels.LABEL_MAIN_TITLE_HOME_PAGE_TOP_PROJECTS_MULTI_PROCESSOR_ONE_SECTION,
                labelTopProjectsMultiProcessorTwoSection:
                valueLabels.LABEL_MAIN_TITLE_HOME_PAGE_TOP_PROJECTS_MULTI_PROCESSOR_TWO_SECTION,
                labelIntroduction: valueLabels.LABEL_INTRODUCTION,
                labelFirstSolution: valueLabels.LABEL_LINK_FOOTER_SOLUTIONS_1,
                labelTwoSolution: valueLabels.LABEL_LINK_FOOTER_SOLUTIONS_2,
                labelThreeSolution: valueLabels.LABEL_LINK_FOOTER_SOLUTIONS_3,
                labelForthSolution: valueLabels.LABEL_LINK_FOOTER_SOLUTIONS_4,
                labelTextSlideSmall_1: valueLabels.LABEL_MAIN_TITLE_HOME_PAGE_SLIDER_SMALL_1,
                labelTextSlideSmall_2: valueLabels.LABEL_MAIN_TITLE_HOME_PAGE_SLIDER_SMALL_2,
                labelTextSlideSmall_3: valueLabels.LABEL_MAIN_TITLE_HOME_PAGE_SLIDER_SMALL_3,
                showHomePage: 'show-page-not'
            }
        },
        head: {
            meta: [
                {name: 'twitter:site_name', content: "گروه صمیم | samimgroup"},
                {name: 'twitter:card', content: "summary"},
                {name: 'twitter:site', content: "@samimgropco"},
                {name: 'twitter:type', content: "website"},
                {property: 'og:title', content: metaTags.HOME_PAGE.title},
                {property: 'og:description', content: metaTags.HOME_PAGE.description},
                {property: 'og:url', content: "https://www.samimgroup.com"}
            ],
            link: [
                {rel: "canonical", href: "https://www.samimgroup.com"}
            ],
        },
        components: {
            AppFirstTitle,
            AppProductsHomeSmall,
            AppFooter,
            AppTabs,
            ItemOurSolution,
            ItemSmallSlider,
            ItemSmallCustomer,
            ItemSmallNewProduct,
            AppCollaps,
            ItemSmallTopProjects,
            ItemBlogHomePage,
            ItemCustomerImage,
            AppTitle,
            AppHeader,
            AppButton,
            Carousel3d,
            Slide,
            ContentLoader,
            Flickity,
            ItemNewProduct,
            AppMainTitle,
            carousel,
            AppParagraph
        },
        computed: {
            ...mapGetters([
                'getBlogPosts',
                'getShowLoadingBlog'
            ]),
        },
        methods: {
            ...mapActions([
                'getPostsBlog'
            ]),
            next() {
                this.$refs.flickity.next();
            },

            previous() {
                this.$refs.flickity.previous();
            },
            setLoadShow() {
                setTimeout(function () {
                    this.showHomePage = 'show-page'
                }.bind(this), 500);
            },
        },
        created() {
            this.getPostsBlog({numberPost: 3, page: 1});
            this.heightSlideShow = window.innerHeight + "px";
            if (this.$mq === 'sm') {
                this.styleAllButton = 'all-buttons'
            } else {
                this.styleAllButton = 'all-buttons'
            }
            this.classNameTopProject = this.$mq === 'lg' ? 'top-projects-section' : 'top-projects-section-small'
        },

        mounted() {
            window.$ = require('jquery');
            jQuery("#layerslider").layerSlider({
                autoPlayVideos: false,
                autoStart: true,
                pauseOnHover: true,
                responsive: true,
                imgPreload: true,
                skinsPath: '../public/lib/skins/'
            });
        },
    }
</script>


<style scoped lang="scss">
    @import "../assets/styles/views/viewHomeStyle";

    body, html {
        width: 100%;
        height: 100%;
    }
</style>
