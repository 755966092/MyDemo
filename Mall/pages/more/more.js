var app = getApp()
Page({
    data: {
        // hidden:false,
        curNav: 1,
        curIndex: 0,
        navList: [{
                id: 1,
                name: '热销课程'
            },
            {
                id: 2,
                name: '政治'
            },
            {
                id: 3,
                name: '英语'
            },
            {
                id: 4,
                name: '数学'
            },
            {
                id: 5,
                name: '英语'
            },
            {
                id: 6,
                name: '英语'
            },
            {
                id: 7,
                name: '英语'
            },
            {
                id: 8,
                name: '英语'
            },
        ],
        dishesList: [
            [{
                    name: "政治",
                    price: 38,
                    num: 1,
                    id: 1,
                    img: '/images/v.png'
                },
                {
                    name: "政治",
                    price: 58,
                    num: 1,
                    id: 29,
                    img: '/images/v.png'
                },
                {
                    name: "政治",
                    price: 88,
                    num: 1,
                    id: 2,
                    img: '/images/v.png'
                }
            ],
            [{
                    name: "政治",
                    price: 18,
                    num: 1,
                    id: 3,
                    img: '/images/v.png'
                },
                {
                    name: "政治",
                    price: 58,
                    num: 1,
                    id: 4,
                    img: '/images/v.png'
                }
            ],
            [{
                    name: "政治",
                    price: 18,
                    num: 1,
                    id: 5,
                    img: '/images/v.png'
                },
                {
                    name: "政治",
                    price: 8,
                    num: 1,
                    id: 6,
                    img: '/images/v.png'
                }
            ],
            [{
                    name: "政治",
                    price: 38,
                    num: 1,
                    id: 1,
                    img: '/images/v.png'
                },
                {
                    name: "政治",
                    price: 58,
                    num: 1,
                    id: 29,
                    img: '/images/v.png'
                },
                {
                    name: "政治",
                    price: 88,
                    num: 1,
                    id: 2,
                    img: '/images/v.png'
                }
            ],
            [{
                    name: "政治",
                    price: 18,
                    num: 1,
                    id: 3,
                    img: '/images/v.png'
                },
                {
                    name: "政治",
                    price: 58,
                    num: 1,
                    id: 4,
                    img: '/images/v.png'
                }
            ],
            [{
                    name: "政治",
                    price: 18,
                    num: 1,
                    id: 5,
                    img: '/images/v.png'
                },
                {
                    name: "政治",
                    price: 8,
                    num: 1,
                    id: 6,
                    img: '/images/v.png'
                }
            ],
            [{
                    name: "政治",
                    price: 18,
                    num: 1,
                    id: 3,
                    img: '/images/v.png'
                },
                {
                    name: "政治",
                    price: 58,
                    num: 1,
                    id: 4,
                    img: '/images/v.png'
                }
            ],
            [{
                    name: "政治",
                    price: 18,
                    num: 1,
                    id: 5,
                    img: '/images/v.png'
                },
                {
                    name: "政治",
                    price: 8,
                    num: 1,
                    id: 6,
                    img: '/images/v.png'
                }
            ]
        ]
    },
    selectNav(event) {
        let id = event.target.dataset.id,
            index = event.target.dataset.index;
        self = this;
        this.setData({
            curNav: id,
            curIndex: index
        })
    },
    skipPage: function(param) {
        wx.navigateTo({
            //参数,跳转的时候要带参数
            url: '/pages/info/info',

        })
    }

})