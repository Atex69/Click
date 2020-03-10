let anim_ended1 = false;
let anim_ended2 = false;
let anim_ended3 = false;

$(document).ready(function () {
   let time = $('#timeRegAnim');
    let    winHp = $(window).height() / 150;
     let   maxHp = 10 / ($(document).height() - $(window).height() + time.height() * 1.5);
    $(window).on('scroll', function(){
        let cScroll = $(this).scrollTop();
          let  p = cScroll * maxHp;
           let y =  winHp * p + cScroll;
          let  x = (Math.sin( p * 0.1) / 2) * 60;
        if ((y > 3500 && x > 6.5) || (y < 3150 && x < 7.5 )) {
            return;
        }

        console.log(`y = ${y} x = ${x}`);
        time.offset({top: y, right: x});
    });



    $(".set > a").on("click", function() {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this)
                .siblings(".content")
                .slideUp(200);
            $(".set > a i")
                .removeClass("fa-minus")
                .addClass("fa-plus");
        } else {
            $(".set > a i")
                .removeClass("fa-minus")
                .addClass("fa-plus");
            $(this)
                .find("i")
                .removeClass("fa-plus")
                .addClass("fa-minus");
            $(".set > a").removeClass("active");
            $(this).addClass("active");
            $(".content").slideUp(200);
            $(this)
                .siblings(".content")
                .slideDown(200);
        }
    });


        $('.mobile-menu').on('click', function (e) {
            e.preventDefault();
            $('.menu-btn').toggleClass('menu-active');
            $('.mobile-menu').toggleClass('menu-active');
            $('.mobile-menu__menu-header-wrap').toggleClass('menu-active');
        });
        $("ul").click(function(){
            $('.menu-btn').not(this).removeClass('menu-active');
            $('.mobile-menu').not(this).removeClass('menu-active');
            $('.mobile-menu__menu-header-wrap').not(this).removeClass('menu-active');

        });
        $("button").click(function(){
            $('.menu-btn').not(this).removeClass('menu-active');
            $('.mobile-menu').not(this).removeClass('menu-active');
            $('.mobile-menu__menu-header-wrap').not(this).removeClass('menu-active');

        });




    setTimeout(() => {
        $("#regAnim1").animate({
            right: "+=325",
            opacity:1

        }, 1000, function () {
            // Animation complete.
        });
    }, 2000);


   setTimeout(() => {
        $("#regAnim11").animate({
            top: "-=290",
            opacity:1

        }, 1000, function () {
            // Animation complete.
        });
    }, 2000);

    setTimeout(() => {
        $("#regAnim16").animate({
            right: "+=328",
            opacity:1

        }, 1000, function () {
            // Animation complete.
        });
    }, 2000);


    setTimeout(() => {
        $("#regAnim15").animate({
            top: "-=330",
            opacity:1

        }, 1000, function () {
            // Animation complete.
        });
    }, 2000);



    setTimeout(() => {
        $("#regAnim20").animate({
            top: "+=225",
            left: "+=130",
            opacity:1

        }, 1000, function () {
            // Animation complete.
        });
    }, 2000);



    setTimeout(() => {
        $("#regAnim5").animate({
            top: "+=170",
            opacity:1

        }, 1000, function () {
            // Animation complete.
        });
    }, 2000);





    setTimeout(() => {
        $("#regAnim8").animate({
            top: "-=232",
            opacity:1

        }, 1000, function () {
            // Animation complete.
        });
    }, 4000);

    setTimeout(() => {
        $("#regAnim7").animate({
            top: "-=197",
            right: "-=447",
            opacity:1

        }, 1000, function () {
            // Animation complete.
        });
    }, 4000);



    setTimeout(() => {
        $("#regAnim22").animate({
            top: "-=57",
            right: "+=258",
            opacity:1

        }, 1000, function () {
            // Animation complete.
        });
    }, 4000);


    setTimeout(() => {
        $("#regAnim9").animate({
            right: "-=160",
            opacity:1

        }, 1000, function () {
            // Animation complete.
        });
    }, 4000);

    setTimeout(() => {
        $("#regAnim21").animate({
            top: "+=50",
            right: "+=187",
            opacity:1

        }, 1000, function () {
            // Animation complete.
        });
    }, 4000);


    setTimeout(() => {
        $("#regAnim17").animate({
            top:"+=49",
            right: "+=333",
            opacity:1

        }, 1000, function () {
            // Animation complete.
        });
    }, 4000);


    setTimeout(() => {
        $("#regAnim2").animate({
            right: "-=242",
            opacity:1

        }, 1500, function () {
            // Animation complete.
        });
    }, 4000);

    setTimeout(() => {
        $("#regAnim14").animate({
            right: "-=440",
            top:"-=270",
            opacity:1

        }, 1500, function () {
            // Animation complete.
        });
    }, 4000);


    setTimeout(() => {
        $("#regAnim13").animate({
            right: "-=270",
            opacity:1

        }, 1000, function () {
            // Animation complete.
        });
    }, 4000);


    setTimeout(() => {
        $("#regAnim24").animate({
            top: "+=261",
            right: "-=392",
            opacity:1

        }, 1500, function () {
            // Animation complete.
        });
    }, 4000);

    setTimeout(() => {
        $("#regAnim25").animate({
            right: "-=195",
            top:"+=197",
            opacity:1

        }, 1500, function () {
            // Animation complete.
        });
    }, 4000);

    setTimeout(() => {
        $("#regAnim6").animate({
            opacity:1

        }, 1500, function () {
            // Animation complete.
        });
    }, 4000);



    setTimeout(() => {
        $("#regAnim3").animate({
            right: "+=235",
            opacity:1

        }, 1500, function () {
            // Animation complete.
        });
    }, 4000);



    setTimeout(() => {
        $("#regAnim4").animate({
            top:"+=158",
            right:"-=190",
            opacity:1

        }, 1500, function () {
            // Animation complete.
        });
    }, 4000);

    setTimeout(() => {
        $("#regAnim28").animate({
            right:"+=355",
            opacity:1

        }, 1500, function () {
            // Animation complete.
        });
    }, 4000);



    setTimeout(() => {
        $("#regAnim29").animate({
            top:"+=247",
            opacity:1

        }, 1500, function () {
            // Animation complete.
        });
    }, 4000);



    setTimeout(() => {
        $("#regAnimCircle").animate({
            opacity:1

        }, 1500, function () {
            // Animation complete.
        });
    }, 6000);

    setTimeout(() => {
        $("#regAnimLight").animate({
            opacity:1

        }, 1500, function () {
            // Animation complete.
        });
    }, 6000);



    setTimeout(() => {
        $("#regAnimShadow").animate({
            opacity:1

        }, 1500, function () {
            // Animation complete.
        });
    }, 6000);


    setTimeout(() => {
        $("#regAnim23").animate({
            opacity:1

        }, 1500, function () {
            // Animation complete.
        });
    }, 6000);



    setTimeout(() => {
        $("#regAnim10").animate({
            top:"-=197",
            right:"-=483",
            opacity:1

        }, 1500, function () {
            // Animation complete.
        });
    }, 8000);


    setTimeout(() => {
        $("#regAnim19").animate({
            top:"-=260",
            right:"-=623",
            opacity:1

        }, 1500, function () {
            // Animation complete.
        });
    }, 8000);


    setTimeout(() => {
        $("#regAnim18").animate({
            top:"+=154",
            right:"-=381",
            opacity:1

        }, 1500, function () {
            // Animation complete.
        });
    }, 8000);



    setTimeout(() => {
        $("#regAnim26").animate({
            top:"+=212",
            right:"-=227",
            opacity:1

        }, 1500, function () {
            // Animation complete.
        });
    }, 8000);



    setTimeout(() => {
        $("#regAnim12").animate({
            top:"-=175",
            right:"+=313",
            opacity:1

        }, 1500, function () {
            // Animation complete.
        });
    }, 8000);

    setTimeout(() => {
        $("#regAnim27").animate({
            top:"+=225",
            right:"+=313",
            opacity:1

        }, 1500, function () {
            // Animation complete.
        });
    }, 8000);





    var waypoint = new Waypoint({
        element: document.getElementById('timeRegs'),
        handler: function() {
            if (anim_ended1) { return; }

            setTimeout(() => {
                $("#timeRegAnim3").animate({
                    top: "+=40"
                }, 1000, function () {
                    // Animation complete.
                });
            }, 2000);
            anim_ended1 = true;

            setTimeout(() => {
                $("#timeRegRight2").animate({
                    top: "+=40"
                }, 2000, function () {
                    // Animation complete.
                });
            }, 1000);
            anim_ended1 = true;

            setTimeout(() => {
                $("#timeRegTop").animate({
                    opacity: 1,

                }, 1000, function () {
                    // Animation complete.
                });
            }, 2000);
            anim_ended1 = true;


            setTimeout(() => {
                $("#timeRegRight").animate({
                    opacity: 1,

                }, 1000, function () {
                    // Animation complete.
                });
            }, 2000);
            anim_ended1 = true;

            setTimeout(() => {
                $("#timeRegLeft").animate({
                    opacity: 1,

                }, 1000, function () {
                    // Animation complete.
                });
            }, 2000);
            anim_ended1 = true;


            setTimeout(() => {
                $("#timeCircle1").animate({
                    opacity: 1,

                }, 1000, function () {
                    // Animation complete.
                });
            }, 500);
            anim_ended1 = true;


            setTimeout(() => {
                $("#timeCircle2").animate({
                    opacity: 1,

                }, 1000, function () {
                    // Animation complete.
                });
            }, 1200);
            anim_ended1 = true;

            setTimeout(() => {
                $("#timeCircle3").animate({
                    opacity: 1,

                }, 1000, function () {
                    // Animation complete.
                });
            }, 2000);
            anim_ended1 = true;

        }
    })




    var waypoint2 = new Waypoint({
        element: document.getElementById('dangerRegs'),
        handler: function() {
            if (anim_ended2) { return; }

            setTimeout(() => {
                $("#dangerAnim5").animate({
                    opacity:1

                }, 1500, function () {
                    // Animation complete.
                });
            }, 2000);
            anim_ended2 = true;


            setTimeout(() => {
                $("#dangerAnim6").animate({
                    opacity:1

                }, 1500, function () {
                    // Animation complete.
                });
            }, 2000);
            anim_ended2 = true;

            setTimeout(() => {
                $("#dangerAnim7").animate({
                    opacity:1

                }, 1500, function () {
                    // Animation complete.
                });
            }, 2000);
            anim_ended2 = true;

            setTimeout(() => {
                $("#dangerAnim2").animate({
                    left:"-=313",
                    opacity:1

                }, 1000, function () {
                    // Animation complete.
                });
            }, 1600);
            anim_ended2 = true;

            setTimeout(() => {
                $("#dangerAnim3").animate({
                    left:"+=200",
                    opacity:1

                }, 1000, function () {
                    // Animation complete.
                });
            }, 1600);
            anim_ended2 = true;

            setTimeout(() => {
                $("#dangerAnim4").animate({
                    left:"-=250",
                    opacity:1

                }, 1000, function () {
                    // Animation complete.
                });
            }, 1600);
            anim_ended2 = true;


            setTimeout(() => {
                $("#dangerAnim8").animate({
                    opacity:1

                }, 1500, function () {
                    // Animation complete.
                });
            }, 2100);
            anim_ended2 = true;


        }
    })


    var waypoint3 = new Waypoint({
        element: document.getElementById('completsDocs'),
        handler: function() {
            if (anim_ended3) { return; }



            setTimeout(() => {
                $("#completAnim1").animate({
                    right: "-=140",
                    top: "+=200",
                    opacity:0
                }, 1000, function () {
                    // Animation complete.
                });
            }, 4000);
            anim_ended3 = true;


            setTimeout(() => {
                $("#completAnim2").animate({
                    left: "-=70",
                    top: "+=220",
                    opacity:0
                }, 1000, function () {
                    // Animation complete.
                });
            }, 4000);
            anim_ended3 = true;


            setTimeout(() => {
                $("#completAnim3").animate({
                    left: "-=220",
                    top: "+=100",
                    opacity:0
                }, 1000, function () {
                    // Animation complete.
                });
            }, 4000);
            anim_ended3 = true;

            setTimeout(() => {
                $("#completAnim4").animate({
                    left: "+=220",
                    opacity:0
                }, 1000, function () {
                    // Animation complete.
                });
            }, 4000);
            anim_ended3 = true;

            setTimeout(() => {
                $("#completAnim5").animate({
                    left: "+=220",
                    top: "-=200",
                    opacity:0
                }, 1000, function () {
                    // Animation complete.
                });
            }, 4000);
            anim_ended3 = true;


            setTimeout(() => {
                $("#completAnim6").animate({
                    left: "+=60",
                    top: "-=240",
                    opacity:0
                }, 1000, function () {
                    // Animation complete.
                });
            }, 4000);
            anim_ended3 = true;

            setTimeout(() => {
                $("#completAnim7").animate({
                    left: "-=200",
                    top: "-=140",
                    opacity:0
                }, 1000, function () {
                    // Animation complete.
                });
            }, 4000);
            anim_ended3 = true;

            setTimeout(() => {
                $("#completAnim8").animate({
                    left: "-=200",
                    top: "-=190",
                    opacity:0
                }, 1000, function () {
                    // Animation complete.
                });
            }, 4000);
            anim_ended3 = true;

            setTimeout(() => {
                $("#completAnim9").animate({
                    left: "+=90",
                    top: "+=220",
                    opacity:0
                }, 1000, function () {
                    // Animation complete.
                });
            }, 4000);
            anim_ended3 = true;

            setTimeout(() => {
                $("#completAnim10").animate({
                    top: "-=270",
                    opacity:0
                }, 1000, function () {
                    // Animation complete.
                });
            }, 4000);
            anim_ended3 = true;

            setTimeout(() => {
                $("#bookOk").animate({
                    opacity: 1,

                }, 1000, function () {
                    // Animation complete.
                });
            }, 4000);
            anim_ended3 = true;



        }
    })







































































    $('#peopleContentCards-1').on('click', function (e) {
        e.preventDefault();
        $('#peopleContentCards-1').toggleClass('circle-active');
        $('#peopleContentCards-2').removeClass('circle-active');
        $('#peopleContentCards-3').removeClass('circle-active');
        $('#peopleContentCards-4').removeClass('circle-active');


    });
    $('#peopleContentCards-2').on('click', function (e) {
        e.preventDefault();
        $('#peopleContentCards-2').toggleClass('circle-active');
        $('#peopleContentCards-1').removeClass('circle-active');
        $('#peopleContentCards-3').removeClass('circle-active');
        $('#peopleContentCards-4').removeClass('circle-active');


    });
    $('#peopleContentCards-3').on('click', function (e) {
        e.preventDefault();
        $('#peopleContentCards-3').toggleClass('circle-active');
        $('#peopleContentCards-2').removeClass('circle-active');
        $('#peopleContentCards-1').removeClass('circle-active');
        $('#peopleContentCards-4').removeClass('circle-active');


    });
    $('#peopleContentCards-4').on('click', function (e) {
        e.preventDefault();
        $('#peopleContentCards-4').toggleClass('circle-active');
        $('#peopleContentCards-3').removeClass('circle-active');
        $('#peopleContentCards-1').removeClass('circle-active');
        $('#peopleContentCards-2').removeClass('circle-active');

    });

        $('#pricerContentCards-1').on('click', function (e) {
            e.preventDefault();
            $('#pricerContentCards-1').toggleClass('circle-active');
            $('#pricerContentCards-2').removeClass('circle-active');
            $('#pricerContentCards-3').removeClass('circle-active');
            $('#pricerContentCards-4').removeClass('circle-active');


        });
        $('#pricerContentCards-2').on('click', function (e) {
            e.preventDefault();
            $('#pricerContentCards-2').toggleClass('circle-active');
            $('#pricerContentCards-1').removeClass('circle-active');
            $('#pricerContentCards-3').removeClass('circle-active');
            $('#pricerContentCards-4').removeClass('circle-active');


        });
        $('#pricerContentCards-3').on('click', function (e) {
            e.preventDefault();
            $('#pricerContentCards-3').toggleClass('circle-active');
            $('#pricerContentCards-2').removeClass('circle-active');
            $('#pricerContentCards-1').removeClass('circle-active');
            $('#pricerContentCards-4').removeClass('circle-active');


        });
        $('#pricerContentCards-4').on('click', function (e) {
            e.preventDefault();
            $('#pricerContentCards-4').toggleClass('circle-active');
            $('#pricerContentCards-3').removeClass('circle-active');
            $('#pricerContentCards-1').removeClass('circle-active');
            $('#pricerContentCards-2').removeClass('circle-active');



        });

    let initCardSwitcher = function () {
        let contents = [` <div class="pricerContentCard card1 animated flipInY">
                <div class="pricerContentCardTittle blue">Вы начинаете бизнес и хотите убедиться в том, что название можно использовать</div>
                <div class="pricerContentCardDesc">
                    <div class="pricerContentCardDescTittle margins">Экспертный поиск на сходство</div>
                    <ul>
                        <li> Подбор классов МКТУ</li>
                        <li> Проверка по базам</li>
                        <li> Выявление наличия сходства до степени смешения</li>
                        <li> Разработка стратегии регистрации</li>
                        <li> Письменное экспертное заключение</li>
                    </ul>
                </div>
                <div class="pricerContentCardPrice">
                    9 000 ₽
                </div>
                <div class="pricerContentCardPriceDesc">
                    Рассрочка 50/50
                </div>
            </div>`,`<div class="pricerContentCard card2  animated flipInY">
                <div class="pricerContentCardTittle blue">Вы хотите сэкономить и сами будете отвечать на запросы Роспатента</div>
                <div class="pricerContentCardDesc">
                    <div class="pricerContentCardDescTittle"> Подача заявки в Роспатент</div>
                    <ul>
                        <li> Подбор классов МКТУ</li>
                        <li> Проверка по базам</li>
                        <li> Выявление наличия сходства до степени смешения</li>
                        <li> Разработка стратегии регистрации</li>
                        <li> Письменное экспертное заключение</li>
                        <li> Электронная подача заявки в Роспатент</li>

                   </ul>
                </div>
                <div class="pricerContentCardPrice">
                    14 000 ₽
                </div>
                <div class="pricerContentCardPriceDesc">
                    Рассрочка 50/50
                </div>
            </div>`,` <div class="pricerContentCard card3  animated flipInY">
                <div class="pricerContentCardTittle blue">Вам нужна регистрация товарного знака под ключ с гарантией </div>
                <div class="pricerContentCardDesc">
                    <div class="pricerContentCardDescTittle short"> Полное ведение делопроизводства
                    </div>
                    <ul>
                        <li> Экспертный поиск на сходство</li>
                        <li> Подача заявки в Роспатент</li>
                        <li> Полное ведение делопроизводства</li>
                        <li> Рассрочка оплаты</li>
                        <li> Финансовая гарантия</li>
                                         </ul>
                </div>
                <div class="pricerContentCardPrice">
                    28 000 ₽
                </div>
                <div class="pricerContentCardPriceDesc">
                    Рассрочка 50/50
                </div>
            </div>`,`<div class="pricerContentCard card4  animated flipInY">
                <div class="pricerContentCardTittle blue">Вам нужно зарегистрировать товарный знак, когда похожие знаки уже есть</div>
                <div class="pricerContentCardDesc">
                    <div class="pricerContentCardDescTittle shorts"> Полное ведение делопроизводства и доработка товарного знака
                    </div>
                    <ul>
                        <li> Экспертный поиск на сходство</li>
                        <li> Подача заявки в Роспатент</li>
                        <li> Полное ведение делопроизводства</li>
                        <li> Рассрочка оплаты</li>
                        <li> Финансовая гарантия</li>
                        <li> Гарантия доработки товарного знака</li>
                                       </ul>
                </div>
                <div class="pricerContentCardPrice">
                    43 000 ₽
                </div>
                <div class="pricerContentCardPriceDesc">
                    Рассрочка 50/50
                </div>
            </div>`];

        let containers = $('.pricerContentCards');

        let renderUp = (index)=> {
            let contentCopys = contents.slice();//копия исходного массива

            for (let i = 0; i < index; i++) {
                contentCopys.push(contentCopys.shift());
            }

            renders(contentCopys);
        };

        let renders = (contentCopys) => {
            containers.empty();
            for (let i = 0; i < contentCopys.length; i++) {
                containers.append(contentCopys[i]);
            }
        };

        let initUP = () => {
            for (let i = 0; i < 4; i++) {
                $('#pricerContentCards-'+(i+1)).click(() => {
                    renderUp(i);
                })
            }
        };

        initUP();
        renderUp(0);
    };
    let initCardSwitcherDown = function () {
        let contentDown = [` <div class="peopleContentCard1 cardFlex animated flipInY">
                <div class="peopleContentCardImg1 peopleImg"></div>
                <div class="peopleContentCardDesc desc1">Обращалась в компанию ClickPatent дважды. В первый раз – для регистрации торгового знака, во второй – за патентом на упаковку товара. Очень понравился сервис и быстрота реакции. Специалисты высшего уровня. </div>
                <div class="peopleContentCardName">Надежда Комисарова</div>
                <div class="peopleContentCardNameDesc">владелец бренда Lapki &amp; Ushki</div>
            </div>`,`<div class="peopleContentCard2 cardFlex animated flipInY">
                <div class="peopleContentCardImg2 peopleImg"></div>
                <div class="peopleContentCardDesc desc2">Защити меня от мошенников, которые пытались зарегистрировать мой логотип, как свой. Никогда не думал, что так случиться. Но вот, бывает оказывается. В ClickPatent мошенников разделали под орех. Чему я очень рад.</div>
                <div class="peopleContentCardName">Владимир Миронов</div>
                <div class="peopleContentCardNameDesc">Бизнесмен, владелец сети кофеен LatteNatte</div>
            </div>`,`<div class="peopleContentCard3 cardFlex animated flipInY">
                <div class="peopleContentCardImg3 peopleImg"></div>
                <div class="peopleContentCardDesc desc3">Зарегистрировали торговый знак за 2 месяца, так как срочно нужно было выходить на международный рынок, а без товарного знака там никак. Очень оперативные ребята!</div>
                <div class="peopleContentCardName">Владислав Носиков</div>
                <div class="peopleContentCardNameDesc">владелец бренда Ushanki po miru</div>
            </div>`,`<div class="peopleContentCard4 cardFlex animated flipInY">
                <div class="peopleContentCardImg4 peopleImg"></div>
                <div class="peopleContentCardDesc desc4">ClickPatent работает, вы – отдыхаете. Подкупили супер-сервисом. Мне выделили личного менеджера, который решал все мои вопросы и был на связи 24/7. Вот это я понимаю – забота о клиенте и его бизнесе.</div>
                <div class="peopleContentCardName">Александра Понаморева</div>
                <div class="peopleContentCardNameDesc">Бизнесмен, бренд LinzMasterit</div>
            </div>`];


        let containerDown = $('.peopleContentCards');

        let renderDown = (index)=> {
            let contentCopy = contentDown.slice();//копия исходного массива

            for (let i = 0; i < index; i++) {
                contentCopy.push(contentCopy.shift());
            }

            render(contentCopy);
        };


        $('.modals-wrap').on('click', function (){
            $('.modals-wrap').removeClass('open');
        });

        $(function(){

            $("#phone").mask("+7 (999) 999-9999");
            $("#phone1").mask("+7 (999) 999-9999");
            $("#phone2").mask("+7 (999) 999-9999");
            $("#phone3").mask("+7 (999) 999-9999");
            $("#phone4").mask("+7 (999) 999-9999");
            $("#phone5").mask("+7 (999) 999-9999");
        });





        $('.modalGoodBut').on('click', function () {
        $('.modal-wrapper').removeClass('open');
    });


        $('.sharp').on('click', function () {
            $('.modal-wrapper').removeClass('open');

        });

        $('.trigger').parent().on('click', function() {
            $('.modal-wrapper').toggleClass('open');
            $('.page-wrapper').toggleClass('blur-it');
            return false;
        });



        $('.triggerPol').parent().on('click', function() {
            $('.modals-wrap').toggleClass('open');
            $('.page-wrapper').toggleClass('blur-it');
            return false;
        });

        let render = (contentCopy) => {
            containerDown.empty();
            for (let i = 0; i < contentCopy.length; i++) {
                containerDown.append(contentCopy[i]);
            }
        };

        $('#myPopup').on('click', function (e) {
            e.preventDefault();
            $('#myPopup.popuptext').toggleClass('show');
            $('#myPopup1.popuptext').removeClass('show');
            $('#myPopup2.popuptext').removeClass('show');
            $('#myPopup3.popuptext').removeClass('show');
            $('#myPopup4.popuptext').removeClass('show');


        });

        const anchors = document.querySelectorAll('a[href*="#"]')

        for (let anchor of anchors) {
            anchor.addEventListener('click', function (e) {
                e.preventDefault()

                const blockID = anchor.getAttribute('href').substr(1)

                document.getElementById(blockID).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                })
            })
        }

        let initDown = () => {
            for (let i = 0; i < 4; i++) {
                $('#peopleContentCards-'+(i+1)).click(() => {
                    renderDown(i);
                })
            }
        };

        initDown();
        renderDown(0)
    };
    initCardSwitcher();
    initCardSwitcherDown();
});