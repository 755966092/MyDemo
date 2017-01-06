Page({
    data: {
        //banner图
        imgUrls: [
            '/images/banner1.jpg',
            '/images/banner2.jpg',
            '/images/banner3.jpg',
        ],
        //导航数据
        navImgUrl: [{
                imgurl: '/images/v.png',
                name: '政治'
            },
            {
                imgurl: '/images/v.png',
                name: '英语'
            },
            {
                imgurl: '/images/v.png',
                name: '数学'
            },
            {
                imgurl: '/images/v.png',
                name: '政治'
            },
            {
                imgurl: '/images/v.png',
                name: '政治'
            },
            {
                imgurl: '/images/v.png',
                name: '政治'
            },
            {
                imgurl: '/images/v.png',
                name: '政治'
            },
            {
                imgurl: '/images/v.png',
                name: '政治'
            }
        ],
        //课程内容数据
        ke: [{
                title: '热卖课程',
                kcImgUrl: [{
                        url: '/images/v1.png',
                        name: '考研政治',
                    },
                    {
                        url: '/images/v1.png',
                        name: '考研数学',

                    }
                ],
            },
            {
                title: '新课首发',
                kcImgUrl: [{
                        url: '/images/v1.png',
                        name: '考研外语',
                    },
                    {
                        url: '/images/v1.png',
                        name: '考研会计',
                    },

                ],
            },
            {
                title: '活动课程',
                kcImgUrl: [{
                        url: '/images/v1.png',
                        name: '考研翻译',
                    },
                    {
                        url: '/images/v1.png',
                        name: '考研法律',
                    }
                ],
            }
        ]
    },

    targetSearch: function() {
        wx.navigateTo({
            url: 'search/search',
            success: function(res) {
                console.log('跳转成功')
            },
            fail: function() {
                // fail
            },
            complete: function() {
                // complete
            }
        })
    }
})