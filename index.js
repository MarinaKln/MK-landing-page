var shopsCloth = [
        {
            link: 'https://www.amazon.com/',
            picture: 'style/images/second%20screen/first-row/amazon.png'
        },
        {
            link: 'http://www.6pm.com/',
            picture: 'style/images/second%20screen/first-row/6pm.png'
        },
        {
            link: 'http://www.michaelkors.com/',
            picture: 'style/images/second%20screen/first-row/michaelkors.png'
        },
        {
            link: 'https://www.victoriassecret.com/',
            picture: 'style/images/second%20screen/first-row/Victorias_Secret.png'
        }
    ],
    shopsElectronics = [
        {
            link: 'http://www.apple.com/',
            picture: 'style/images/second%20screen/second-row/apple.png'
        },
        {
            link: 'http://www.bestbuy.com/',
            picture: 'style/images/second%20screen/second-row/best-buy.png'
        },
        {
            link: 'https://www.bhphotovideo.com/',
            picture: 'style/images/second%20screen/second-row/bh.png'
        },
        {
            link: 'http://www.newegg.com/',
            picture: 'style/images/second%20screen/second-row/new-egg.png'
        }
    ],
    shopsKids = [
        {
            link: 'http://www.carters.com/',
            picture: 'style/images/second%20screen/third-row/carters.png'
        },
        {
            link: 'http://www.oshkosh.com/',
            picture: 'style/images/second%20screen/third-row/osh.png'
        },
        {
            link: 'https://www.disneystore.com/',
            picture: 'style/images/second%20screen/third-row/disney.png'
        },
        {
            link: 'http://www.toysrus.com/',
            picture: 'style/images/second%20screen/third-row/toys.png'
        }
    ],
    shopsSport = [
        {
            link: 'http://www.backcountry.com/',
            picture: 'style/images/second%20screen/fourth-row/back.png'
        },
        {
            link: 'http://www.sierratradingpost.com/',
            picture: 'style/images/second%20screen/fourth-row/sierra.png'
        },
        {
            link: 'www.sportsdirect.com/',
            picture: 'style/images/second%20screen/fourth-row/sport.png'
        },
        {
            link: 'https://www.underarmour.com/',
            picture: 'style/images/second%20screen/fourth-row/under.png'
        }
    ],

    steps = [
        {
            title: 'Получите личный адрес в США',
            description: 'На него вы сможете оформить  доставку из интернет-магазинов'
        },
        {
            title: 'Делайте покупки в любых интернет-магазинах',
            description: 'Качественные товары, честные цены,  постоянные распродажи!'
        },
        {
            title: 'Регистрируйте посылку на GlobalKasta',
            description: 'Отслеживайте посилку в личном кабинете GlobalKasta'
        },
        {
            title: 'Получайте посылку прямо к себе домой',
            description: 'Быстро и дешево  доставим ваши покупки!'
        }
    ],

    prices = [
        {
            title: 'Сумка Michael Kors',
            picture: 'style/images/third%20screen/price/kors.png',
            price1: '84$',
            price2: '4.5$'
        }, {
            title: 'Слипоны Steve Madden',
            picture: 'style/images/third%20screen/price/madden.png',
            price1: '60$',
            price2: '4$'
        }, {
            title: 'Платье Calvin Klein',
            picture: 'style/images/third%20screen/price/dress.png',
            price1: '42$',
            price2: '1.5$'
        },
        {
            title: 'Смартфон iPhone 7',
            picture: 'style/images/third%20screen/price/iphone.png',
            price1: '749$',
            price2: '2.5$'
        }
    ],

    slider = [
        {
            title: 'Узнайте, когда стартует распродажа ',
            text: 'Для того чтобы купить тот или иной товар по самой выгодной цене, надо заранее зайти на сайты, где он ' +
            'продается, и отследить рекламные сообщения о планирующихся акциях. Часто они начинаются в определенное ' +
            'время, потому важно не пропустить старт, иначе все самое лучшее разберут.',
            picture: 'style/images/slider/screen1.png'
        },
        {
            title: 'Создайте аккаунты заране',
            text: 'Когда вы выберете сайты, которые вам интересны, создайте на каждом из них свои личные профили, ' +
            'внесите в них информацию об адресе доставки и оплаты и сохраните ее «по умолчанию». Это позволит вам ' +
            'сэкономить время при оформлении заказа, а значит заполучить лучшие товары по лучшим ценам, которые ' +
            'разлетаются как горячие пирожки.',
            picture: 'style/images/slider/screen2.png'
        },
        {
            title: 'Пользуйтесь программой лояльности',
            text: 'Если вы покупаете в том или ином интернет-магазине постоянно, скорее всего, вы являетесь членом ' +
            'программы лояльности и получаете бонусы при определенной сумме покупок. Своеобразное поощрение онлайн-сторы ' +
            'обычно готовят и к празднику всех шопоголиков. Проверьте свой e-mail – возможно, вам уже пришло особенное ' +
            'приглашение – для лояльных клиентов, в котором значится, что для определенной касты покупателей в Black' +
            ' Friday будут действовать ',
            picture: 'style/images/slider/screen3.png'
        }
];

var SecondScreenShopItem = React.createClass({
    render: function() {
        return (
            <div className="second-screen_shop-item">
                <a className="second-screen_shop-link" href={this.props.href}>
                    <img src={this.props.src} />
                </a>
            </div>
        )
    }
});

var ThirdScreenOrderItem = React.createClass({
    render: function() {
        return (
            <div className="third-screen_order-item">
                <span className={"icon-step".concat(this.props.index)}></span>
                <span className="step-title">
                    <span className="step-title-num">{this.props.index+1}. </span>
                    {this.props.title}
                </span>
                <span className="step-description">{this.props.description}</span>
            </div>
        )
    }
});

var ThirdScreenCostItem = React.createClass({
    render: function() {
        return (
            <div className="third-screen_cost-item">
                <img className="cost-picture" src={this.props.src}></img>
                <span className="cost-title">{this.props.title}</span>
                <span className="cost-description">Цена товара <span className="cost-item_price">{this.props.price1}</span></span>
                <span className="cost-description">Стоимость доставки <span className="cost-item_price">{this.props.price2}</span></span>
            </div>
        )
    }
});

var FourthScreenSliderItem = React.createClass({
    render: function() {
        return (
            <li className="fourth-screen_slider-item">
                <div className="slider-item_text">
                    <h3>{this.props.title}</h3>
                    <p>{this.props.text}</p>
                </div>
                <div className="slider-item_picture">
                    <img src={this.props.src} />
                </div>
            </li>
        )
    }
});

var SecondScreenShopsRow = React.createClass({
    showItem: function(shop, index) {
        return (
            <SecondScreenShopItem
                key = {index}
                href = {shop.link}
                src = {shop.picture}
            />
        )
    },
    render: function() {
        var data = this.props.data;
        return (
            <div className="second-screen_shops-row">
                <h3 className="second-screen_shops-row-title">{this.props.rowName}</h3>
                <div className="second-screen_item-box">
                    {data.map(this.showItem)}
                </div>
            </div>
        )
    }
});

var ThirdScreenOrdersRow = React.createClass({
    showItemOrder: function(item, index) {
        return (
            <ThirdScreenOrderItem
                key = {index}
                index = {index}
                title = {item.title}
                description = {item.description}
            />
        )
    },
    render: function() {
        var data = this.props.data;
        return (
            <div className="third-screen_order-row">
                <h1>КАК ЗАКАЗАТЬ</h1>
                <div className="third-screen_order-box">
                    {data.map(this.showItemOrder)}
                </div>
            </div>
        )
    }
});

var ThirdScreenCostsRow = React.createClass({
    showItemCost: function(item, index) {
        return (
            <ThirdScreenCostItem
                key = {index}
                index = {index}
                title = {item.title}
                src = {item.picture}
                price1 = {item.price1}
                price2 = {item.price2}
            />
        )
    },
    render: function() {
        var data = this.props.data;
        return (
            <div className="third-screen_cost-row">
                <h1>СКОЛЬКО СТОИТ</h1>
                <div className="third-screen_cost-box">
                    {data.map(this.showItemCost)}
                </div>
            </div>
        )
    }
});

var FourthScreenSlider = React.createClass({
    showItem: function(item, index) {
        return (
            <FourthScreenSliderItem
                key = {index}
                index = {index}
                title = {item.title}
                text = {item.text}
                src = {item.picture}
            />
        )
    },
    render: function() {
        var data = this.props.data;
        return (
            <div className="my-slider">
                <ul>
                    {data.map(this.showItem)}
                </ul>
            </div>
        )
    }
});

var FirstScreen = React.createClass({
    render: function() {
        return (
            <div className="first-screen">
                <div className="timer-container timer_block">
                    <div className="timer"></div>
                </div>
                <div className="logo"></div>
                <h2>ГЛАВНАЯ РАСПРОДАЖА ГОДА В США</h2>
                <h2>25 НОЯБРЯ</h2>
                <span className="line"></span>
                <h1> GlobalKasta</h1>
                <span>сервис авиадоставки товаров из  интернет магазинов США от 14 грн</span>
                <span className="arrow"></span>
            </div>
        )
    }
});

var SecondScreen = React.createClass({
    render: function() {
        return (
            <div className="second-screen">
                <h1 className="second-screen_title">BLACK FRIDAY DEALS</h1>
                <SecondScreenShopsRow
                    rowName = "Одежда"
                    data = {shopsCloth}
                    />
                <SecondScreenShopsRow
                    rowName = "Электроника"
                    data = {shopsElectronics}
                    />
                <SecondScreenShopsRow
                    rowName = "Детское"
                    data = {shopsKids}
                    />
                <SecondScreenShopsRow
                    rowName = "Спорт"
                    data = {shopsSport}
                    />
            </div>
        )
    }
});

var ThirdScreen = React.createClass({
    render: function() {
        return (
            <div className="third-screen">
                <ThirdScreenOrdersRow
                    data = {steps}
                />
                <div className="third-screen_video-box">
                    <div className="video-top">
                        <h1>ИЛИ СМОТРИТЕ ВИДЕО</h1>
                        <button className="play-btn"></button>
                    </div>
                </div>
                <ThirdScreenCostsRow
                    data = {prices}
                />
            </div>
        )
    }
});

var FourthScreen = React.createClass({
    render: function() {
        return (
            <div className="fourth-screen">
            <h1 className="fourth-screen_title">Лайфхаки на Black Friday USA</h1>
            <FourthScreenSlider
                data = {slider}
            />
            </div>
        )
    }
});

var Footer = React.createClass({
    render: function() {
        return (
            <div className="footer-main">
                <a href="#">GlobalCasta</a>
            </div>
        )
    }
});



var Main = React.createClass({
    render: function() {
        return (
            <div className="main">
                <FirstScreen />
                <SecondScreen />
                <ThirdScreen />
                <FourthScreen />
                <Footer />
            </div>
        )
    }
});

ReactDOM.render(
    <Main />,
    document.getElementsByClassName("container")[0]
);