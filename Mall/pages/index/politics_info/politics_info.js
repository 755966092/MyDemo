// pages/list/list.js
Page({
    data: {
        list: {
            politics: [{
                //政治
                img: '/images/ky.jpg',
                name: '2017考研政英数高分进阶 协议班 ',
                price: 999,
            }, {
                img: '/images/ky.jpg',
                name: '2017考研政英数高分进阶 协议班 ',
                price: 999,
            }],
            english: [{
                    //英语
                    img: '/images/ky.jpg',
                    name: '2017考研政英数高分进阶 协议班 ',
                    price: 888
                },
                {
                    img: '/images/ky.jpg',
                    name: '2017考研政英数高分进阶 协议班 ',
                    price: 9999
                }
            ],
            math: [{
                //数学
                img: '/images/ky.jpg',
                name: '2017考研政英数高分进阶 协议班 ',
                price: 888
            }],
            economy: [{
                    //经济金融
                    img: '/images/ky.jpg',
                    name: '2017考研政英数高分进阶 协议班 ',
                    price: 888
                },
                {
                    img: '/images/ky.jpg',
                    name: '2017考研政英数高分进阶 协议班 ',
                    price: 9999
                }
            ],
            translate: [{
                    //翻译硕士
                    img: '/images/ky.jpg',
                    name: '2017考研政英数高分进阶 协议班 ',
                    price: 888
                },
                {
                    img: '/images/ky.jpg',
                    name: '2017考研政英数高分进阶 协议班 ',
                    price: 9999
                }
            ],
            accounting: [{
                    //会计硕士
                    img: '/images/ky.jpg',
                    name: '2017考研政英数高分进阶 协议班 ',
                    price: 888
                },
                {
                    img: '/images/ky.jpg',
                    name: '2017考研政英数高分进阶 协议班 ',
                    price: 9999
                }
            ],
            law: [{
                    //法律硕士
                    img: '/images/ky.jpg',
                    name: '2017考研政英数高分进阶 协议班 ',
                    price: 888
                },
                {
                    img: '/images/ky.jpg',
                    name: '2017考研政英数高分进阶 协议班 ',
                    price: 9999
                }
            ],
        },
        //动态设置页面标题
        title: {
            politics: {
                title: '考研政治',
            },
            math: {
                title: '考研数学',
            },
            english: {
                title: '考研英语',
            },
            economy: {
                title: '经济/金融',
            },
            translate: {
                title: '翻译硕士',
            },
            law: {
                title: '法律硕士',
            },
            accounting: {
                title: '会计硕士',
            }
        },
    },
    onLoad: function(options) {
        //动态设置页面标题
        // 页面初始化 options为页面跳转所带来的参数
        //options.id是上级页面传过来的参数,根据不同的参数显示不同的页面
        //更新数据到list数组
        this.setData({
            list: this.data.list[options.id],
            title: this.data.title[options.id],
        });
        wx.setNavigationBarTitle({
            title: this.data.title.title
        })
    },
    onReady: function() {
        // 页面渲染完成
    },
    onShow: function() {
        // 页面显示
    },
    onHide: function() {
        // 页面隐藏
    },
    onUnload: function() {
        // 页面关闭
    }
})